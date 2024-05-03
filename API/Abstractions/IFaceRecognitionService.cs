namespace FaceRecognitionAPI.Abstractions;

public interface IFaceRecognitionService
{
    Task<string> ConvertFormFileToBase64String(IFormFile file);
}