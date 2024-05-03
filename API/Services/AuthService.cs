using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using FaceRecognitionAPI.Abstractions;
using FaceRecognitionAPI.Abstractions.DTOs;
using FaceRecognitionAPI.Domain.Entities;
using FaceRecognitionAPI.Domain.Repositories;
using Microsoft.IdentityModel.Tokens;

namespace FaceRecognitionAPI.Services;

public class AuthService : IAuthService
{
    private readonly IAdminRepository _adminRepository;

    public AuthService(IAdminRepository adminRepository)
    {
        _adminRepository = adminRepository;
    }

    public async Task<AuthResponseDto> Login(AuthRequestDto request)
    {
        var user = await _adminRepository.GetByLogin(request.Login);
        if (user is null) 
            throw new Exception("Not authorized");
        if (user.Password == request.Password)
            return new AuthResponseDto
            {
                Id = user.Id,
                Login = user.Login,
                JwtToken = CreateToken(user)
            };

        throw new Exception("Password or username does not correct");
    }
    
    private string CreateToken(Admin user)
    {
        var claims = new List<Claim>
        {
            new(ClaimTypes.Name, user.Login),
            new(ClaimTypes.Role, "Admin")
        };
        
        var key = new SymmetricSecurityKey("this is my custom Secret key for authnetication"u8.ToArray());
        var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var token = new JwtSecurityToken(
            claims: claims,
            expires: DateTime.UtcNow.AddDays(1),
            signingCredentials: cred
        );
        var jwt = new JwtSecurityTokenHandler().WriteToken(token);
        return jwt;
    }
}