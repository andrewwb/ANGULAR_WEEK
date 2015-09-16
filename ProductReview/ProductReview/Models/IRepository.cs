using System.Linq;

namespace ProductReview.Models
{
    public interface IRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(int id) where T : class;
        T Find<T>(int id) where T : class;
        IQueryable<T> Query<T>() where T : class;
        void SaveChanges();
    }
}