using FaceRecognitionAPI.Abstractions;
using FaceRecognitionAPI.Domain.Entities;
using FaceRecognitionAPI.Domain.Repositories;

namespace FaceRecognitionAPI.Infrastructure.Repositories;

public class UserRepository : BaseRepository<User>, IUserRepository
{
    public UserRepository(IApplicationDbContext applicationDbContext) : base(applicationDbContext)
    {
    }
}