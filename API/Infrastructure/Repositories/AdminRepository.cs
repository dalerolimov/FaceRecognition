using FaceRecognitionAPI.Abstractions;
using FaceRecognitionAPI.Domain.Entities;
using FaceRecognitionAPI.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace FaceRecognitionAPI.Infrastructure.Repositories;

public class AdminRepository : BaseRepository<Admin>, IAdminRepository
{
    private readonly IApplicationDbContext _applicationDbContext;

    public AdminRepository(IApplicationDbContext applicationDbContext) : base(applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;
    }

    public Task<Admin?> GetByLogin(string login)
    {
        return _applicationDbContext.Admins
            .FirstOrDefaultAsync(a => a.Login == login);
    }
}