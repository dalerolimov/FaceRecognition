using AutoMapper;
using FaceRecognitionAPI.Abstractions.DTOs;
using FaceRecognitionAPI.Domain.Entities;

namespace FaceRecognitionAPI.Abstractions.Profiles;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<User, UserResponse>();
    }
}