using ProductReview.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProductReview.API
{
    public class ReviewController : ApiController
    {
        
        private IRepository _repo;
        public ReviewController(IRepository repo)
        {
            _repo = repo;
        }
        //[Route("api/review/")]
        //public IList<Review> Get()
        //{
        //   return  _repo.Query<Review>().ToList();
        //}

        public IEnumerable<Review> Get()
        {
            return _repo.Query<Review>().ToList();
        }

       public Review Get(int id)
        {
            return _repo.Find<Review>(id);
        }

        public HttpResponseMessage Post(Review review)
        {
            if (ModelState.IsValid)
            {
               if(review.Id == 0)
                {
                    _repo.Add<Review>(review);
                    _repo.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, review);
                }
                else
                {
                    var dbReview = _repo.Find<Review>(review.Id);
                    dbReview.Comment = review.Comment;
                    dbReview.Rating = review.Rating;
                    _repo.SaveChanges();
                }
            }
            return Request.CreateResponse(HttpStatusCode.BadRequest, this.ModelState);
        }

        public void Delete(int id)
        {
            _repo.Delete<Review>(id);
            _repo.SaveChanges();
        }

    }
}
