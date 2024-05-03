using FaceRecognitionAPI.Domain.Entities;

namespace FaceRecognitionAPI.Domain.Repositories;

public interface IAdminRepository : IRepository<Admin>
{
    Task<Admin?> GetByLogin(string login);
}