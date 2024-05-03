using FaceRecognitionAPI.Abstractions.DTOs;

namespace FaceRecognitionAPI.Abstractions;

public interface IAuthService
{
    Task<AuthResponseDto> Login(AuthRequestDto request);
}