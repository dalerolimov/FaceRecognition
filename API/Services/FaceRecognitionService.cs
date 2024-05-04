using AutoMapper;
using Deepface;
using FaceRecognitionAPI.Abstractions;
using FaceRecognitionAPI.Abstractions.DTOs;
using FaceRecognitionAPI.Domain.Repositories;
using Grpc.Net.Client;

namespace FaceRecognitionAPI.Services;

public class FaceRecognitionService : IFaceRecognitionService
{
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;
    private readonly GrpcChannel _channel = GrpcChannel.ForAddress("http://localhost:50051");
    private readonly FaceService.FaceServiceClient _client;

    public FaceRecognitionService(IUserRepository userRepository, IMapper mapper)
    {
        _userRepository = userRepository;
        _mapper = mapper;
        _client = new FaceService.FaceServiceClient(_channel);
    }

    public async Task<string> ConvertFormFileToBase64String(IFormFile file)
    {
        var memoryStream = new MemoryStream();
        await file.OpenReadStream().CopyToAsync(memoryStream);
        var fileBytes = memoryStream.ToArray();
        return Convert.ToBase64String(fileBytes);
    }

    public async Task<UserResponse?> Recognize(string image)
    {
        var users = await _userRepository.GetAll();
        foreach (var item in users)
        {
            var response = await _client.FindSimilarFacesAsync(new FindSimilarRequest
            {
                ImagePath = image,
                DbPath = item.ImagePath
            }).ResponseAsync;
            if (!string.IsNullOrEmpty(response.FilePath))
                return _mapper.Map<UserResponse>(item);
        }

        return null;
    }
}