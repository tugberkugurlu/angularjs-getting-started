using Microsoft.AspNet.Mvc;
using HelloAngularJs.Models;
using System.Collections.Generic;

namespace HelloAngularJs.Controllers
{
    public class HomeController : Controller
    {
        private static IEnumerable<User> _users = new List<User> 
        {
            new User()
            {
                FirstName = "Tugberk",
                LastName = "Ugurlu",
                ImageSrc = "https://avatars2.githubusercontent.com/u/328122?v=2&s=50"
            },
                
            new User()
            {
                FirstName = "Scott",
                LastName = "Allen",
                ImageSrc = "https://avatars3.githubusercontent.com/u/137119?v=2&s=50"
            },
                
            new User()
            {
                FirstName = "Chris",
                LastName = "Wanstrath",
                ImageSrc = "https://avatars0.githubusercontent.com/u/2?v=2&s=50"
            }
        };
        
        public IEnumerable<User> Users()
        {
            return _users;
        }
    }
}