﻿namespace FaceRecognitionAPI.Abstractions.DTOs;

public class UserResponse
{
    public long Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string ImagePath { get; set; }
}