using System;
using GrpcGreeter.Services;

namespace GrpcGreeter
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		public void ConfigureServices(IServiceCollection services)
		{
			services.AddGrpc();
        }

        public void Configure(WebApplication app, IWebHostEnvironment env)
        {
			app.MapGrpcService<GreeterService>();
			app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
		}
    }
}

