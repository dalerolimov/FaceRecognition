using FaceRecognitionAPI.Abstractions.DTOs;

namespace FaceRecognitionAPI.Abstractions;

public interface IUserService
{
    Task CreateUser(CreateUserRequestDto request);
    Task<List<UserResponse>> GetAll();
    Task<UserResponse> GetById(long id);
    Task<UserResponse> Update(UpdateUserRequest request);
    Task<bool> Delete(long id);
}