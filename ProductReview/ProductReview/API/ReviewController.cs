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
        [Route("api/review/")]
        public IList<Review> Get()
        {
           return  _repo.Query<Review>().ToList();
        }

        //[Route("api/review/")]
        //public 
    }
}
