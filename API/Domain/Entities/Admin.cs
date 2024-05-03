namespace FaceRecognitionAPI.Domain.Entities;

public class Admin : BaseEntity
{
    public string Login { get; set; }
    public string Password { get; set; }
}