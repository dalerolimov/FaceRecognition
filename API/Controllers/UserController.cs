using System.IO.Pipelines;
using FaceRecognitionAPI.Abstractions;
using FaceRecognitionAPI.Abstractions.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace FaceRecognitionAPI.Controllers;

[Route("api/[controller]/[action]")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }
    
    [HttpGet]
    public Task<List<UserResponse>> GetAll() => _userService.GetAll();

    [HttpGet("{id:long}")]
    public Task<UserResponse> GetById(long id) => _userService.GetById(id);

    [HttpPost]
    public Task Create(CreateUserRequestDto request, IFormFile file)
    {
        request.Image = new MemoryStream();
        var openReadStream = file.OpenReadStream();
        openReadStream.CopyToAsync(request.Image);
        return _userService.CreateUser(request);
    }

    [HttpPut]
    public Task<UserResponse> Update(UpdateUserRequest request, IFormFile file)
    {
        request.Image = new MemoryStream();
        file.OpenReadStream().CopyToAsync(request.Image);
        return _userService.Update(request);
    }

    [HttpDelete]
    public Task<bool> Delete(long id) => _userService.Delete(id);
}