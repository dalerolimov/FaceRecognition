using FaceRecognitionAPI.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace FaceRecognitionAPI.Abstractions;

public interface IApplicationDbContext
{ 
    DbSet<Admin> Admins { get; }
    DbSet<User> Users { get; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    DbSet<TEntity> Set<TEntity>() where TEntity : BaseEntity;
}