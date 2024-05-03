using FaceRecognitionAPI.Abstractions;
using FaceRecognitionAPI.Abstractions.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace FaceRecognitionAPI.Controllers;

[Route("api/[controller]/[action]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost]
    public Task<AuthResponseDto> Login([FromBody] AuthRequestDto request) => _authService.Login(request);
}