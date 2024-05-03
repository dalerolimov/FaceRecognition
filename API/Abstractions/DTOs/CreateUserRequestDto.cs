namespace FaceRecognitionAPI.Abstractions.DTOs;

public class CreateUserRequestDto
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public MemoryStream Image { get; set; }
}