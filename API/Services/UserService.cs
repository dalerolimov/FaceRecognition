using AutoMapper;
using FaceRecognitionAPI.Abstractions;
using FaceRecognitionAPI.Abstractions.DTOs;
using FaceRecognitionAPI.Domain.Entities;
using FaceRecognitionAPI.Domain.Repositories;

namespace FaceRecognitionAPI.Services;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;

    public UserService(IUserRepository userRepository, IMapper mapper)
    {
        _userRepository = userRepository;
        _mapper = mapper;
    }
    
    public async Task CreateUser(CreateUserRequestDto request)
    {
        var fileName = await SaveImage(request.Image);
        var user = new User
        {
            FirstName = request.FirstName,
            LastName = request.LastName,
            DateOfBirth = request.DateOfBirth,
            ImagePath = fileName
        };
        _userRepository.Add(user);
        await _userRepository.SaveChangesAsync();
    }

    public async Task<List<UserResponse>> GetAll()
    {
        var users = await _userRepository.GetAll();
        return _mapper.Map<List<UserResponse>>(users);
    }

    public async Task<UserResponse> GetById(long id)
    {
        var user = await _userRepository.GetById(id);
        return _mapper.Map<UserResponse>(user);
    }

    public async Task<UserResponse> Update(UpdateUserRequest request)
    {
        var fileName = "";
        var user = await _userRepository.GetById(request.Id);
        // TODO: Delete previous image if file is not null
        fileName = await SaveImage(request.Image);

        if (user is null) throw new Exception("User does not exist");
        user.FirstName = request.FirstName;
        user.LastName = request.LastName;
        user.DateOfBirth = request.DateOfBirth;
        user.ImagePath = string.IsNullOrWhiteSpace(fileName) ? user.ImagePath : fileName;

        return _mapper.Map<UserResponse>(user);
    }

    public async Task<bool> Delete(long id)
    {
        var user = await _userRepository.GetById(id);
        if (user is null) return false;
        _userRepository.Delete(user);
        await _userRepository.SaveChangesAsync();
        return true;
    }

    private async Task<string> SaveImage(MemoryStream filestream)
    {
        if (!Directory.Exists("Pictures"))
            Directory.CreateDirectory("Pictures");
        var fileName = $"{Guid.NewGuid().ToString()}.jpg";
        await using var file = new FileStream(
            $"Pictures{Path.DirectorySeparatorChar}{fileName}", FileMode.Create);
        await file.WriteAsync(filestream.ToArray());
        return fileName;
    }
}