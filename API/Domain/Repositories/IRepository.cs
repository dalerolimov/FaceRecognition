using FaceRecognitionAPI.Domain.Entities;

namespace FaceRecognitionAPI.Domain.Repositories;

public interface IRepository<TEntity> where TEntity : BaseEntity
{
    Task<TEntity?> GetById(long id);
    Task<List<TEntity>> GetAll();
    void Update(TEntity entity);
    void Add(TEntity entity);
    void Delete(TEntity entity);
    Task<bool> SaveChangesAsync();
}