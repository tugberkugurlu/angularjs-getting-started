using System.ComponentModel.DataAnnotations;

namespace HelloAngularJs.Models
{
    public class User
    {
        [Required]
        [MinLength(50)]
        public string FirstName { get; set; }
        
        [Required]
        [MinLength(50)]
        public string LastName { get; set; }
        
        [Required]
        public string ImageSrc  { get; set; }
    }
}