using GrpcGreeter;
using Microsoft.AspNetCore.Server.Kestrel.Core;

namespace GrpcGreeter
{

    public class Program
    {
        public static void Main(string[] args)
        {
            WebApplication.CreateBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                    webBuilder.ConfigureKestrel(options =>
                    {
                        // Setup a HTTP/2 endpoint without TLS.
                        options.ListenLocalhost(5280, o => o.Protocols = HttpProtocols.Http2);
                    });
                });
    }
}