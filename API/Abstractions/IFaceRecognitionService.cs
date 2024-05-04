using FaceRecognitionAPI.Abstractions.DTOs;

namespace FaceRecognitionAPI.Abstractions;

public interface IFaceRecognitionService
{
    Task<string> ConvertFormFileToBase64String(IFormFile file);
    Task<UserResponse?> Recognize(string image);
}