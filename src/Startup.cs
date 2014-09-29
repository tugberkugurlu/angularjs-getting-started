using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Routing;
using Microsoft.Framework.DependencyInjection;

namespace HelloAngularJs
{
    public class Startup
    {
        public void Configure(IBuilder app)
        {
            app.UseFileServer();
            app.UseErrorPage();

            app.UseServices(services =>
            {
                services.AddMvc();
            });

            app.UseMvc();

            // app.UseWelcomePage();
        }       
    }
}