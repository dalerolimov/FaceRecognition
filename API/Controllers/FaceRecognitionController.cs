using FaceRecognitionAPI.Abstractions;
using FaceRecognitionAPI.Abstractions.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace FaceRecognitionAPI.Controllers;

[Route("api/[controller]/[action]")]
public class FaceRecognitionController(IFaceRecognitionService faceRecognitionService) : ControllerBase
{
    [HttpPost]
    public async Task<UserResponse?> Recognize([FromForm] string image)
    {
        return await faceRecognitionService.Recognize(image);
    }
}