using Microsoft.AspNet.Mvc;
using HelloAngularJs.Models;

namespace HelloAngularJs.Controllers
{
    public class HomeController : Controller
    {
        public User User()
        {
            User user = new User()
            {
                FirstName = "Tugberk",
                LastName = "Ugurlu",
                ImageSrc = "https://pbs.twimg.com/profile_images/418363635270823936/H_X0pAlb.jpeg"
            };

            return user;
        }
    }
}