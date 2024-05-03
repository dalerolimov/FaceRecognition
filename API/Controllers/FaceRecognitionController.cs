using Deepface;
using FaceRecognitionAPI.Abstractions;
using FaceRecognitionAPI.Abstractions.DTOs;
using Grpc.Net.Client;
using Microsoft.AspNetCore.Mvc;

namespace FaceRecognitionAPI.Controllers;

[Route("api/[controller]/[action]")]
public class FaceRecognitionController : ControllerBase
{
    private readonly IFaceRecognitionService _faceRecognitionService;
    private readonly GrpcChannel _channel = GrpcChannel.ForAddress("http://localhost:50051");

    public FaceRecognitionController(IFaceRecognitionService faceRecognitionService)
    {
        _faceRecognitionService = faceRecognitionService;
    }

    [HttpGet]
    public async Task<UserResponse> Recognize(IFormFile file)
    {
        var imageString = await _faceRecognitionService.ConvertFormFileToBase64String(file);
        var client = new FaceService.FaceServiceClient(_channel);
        await client.FindSimilarFacesAsync(new FindSimilarRequest { ImagePath = ""});
        return new UserResponse();
    }
}