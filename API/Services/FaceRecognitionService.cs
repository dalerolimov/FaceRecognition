using FaceRecognitionAPI.Abstractions;

namespace FaceRecognitionAPI.Services;

public class FaceRecognitionService : IFaceRecognitionService
{
    public async Task<string> ConvertFormFileToBase64String(IFormFile file)
    {
        var memoryStream = new MemoryStream();
        await file.OpenReadStream().CopyToAsync(memoryStream);
        var fileBytes = memoryStream.ToArray();
        return Convert.ToBase64String(fileBytes);
    }
}