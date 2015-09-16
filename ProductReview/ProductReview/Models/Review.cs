using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ProductReview.Models
{
    public class Review
    {
        public int Id { get; set; }
        public string Comment { get; set; }        
        public int Rating { get; set; }
    }
}