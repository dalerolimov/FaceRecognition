using FaceRecognitionAPI.Abstractions;
using FaceRecognitionAPI.Abstractions.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace FaceRecognitionAPI.Controllers;

[Route("api/[controller]/[action]")]
public class FaceRecognitionController(IFaceRecognitionService faceRecognitionService) : ControllerBase
{
    [HttpPost]
    public async Task<UserResponse?> Recognize([FromBody] string imageString)
    {
        return await faceRecognitionService.Recognize(imageString);
    }
}