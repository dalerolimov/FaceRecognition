namespace FaceRecognitionAPI.Abstractions.DTOs;

public class UpdateUserRequest
{
    public long Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public MemoryStream Image { get; set; }
}