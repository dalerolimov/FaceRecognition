using FaceRecognitionAPI.Abstractions;
using FaceRecognitionAPI.Domain.Entities;
using FaceRecognitionAPI.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace FaceRecognitionAPI.Infrastructure.Repositories;

public abstract class BaseRepository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
{
    private readonly IApplicationDbContext _applicationDbContext;

    protected BaseRepository(IApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;
    }

    public void Add(TEntity entity)
    {
        _applicationDbContext.Set<TEntity>().Add(entity);
    }

    public Task<TEntity?> GetById(long id)
    {
        return _applicationDbContext.Set<TEntity>().FirstOrDefaultAsync(entity => entity.Id == id);
    }

    public Task<List<TEntity>> GetAll()
    {
        return _applicationDbContext.Set<TEntity>().ToListAsync();
    }

    public void Update(TEntity entity)
    {
        _applicationDbContext.Set<TEntity>().Update(entity);
    }

    public void Delete(TEntity entity)
    {
        _applicationDbContext.Set<TEntity>().Remove(entity);
    }

    public async Task<bool> SaveChangesAsync()
    {
        var changes = await _applicationDbContext.SaveChangesAsync(CancellationToken.None);
        return changes != -1;
    }
}