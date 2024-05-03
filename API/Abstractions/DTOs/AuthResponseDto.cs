namespace FaceRecognitionAPI.Abstractions.DTOs;

public class AuthResponseDto
{
    public long Id { get; set; }
    public string JwtToken { get; set; }
    public string Login { get; set; }
}