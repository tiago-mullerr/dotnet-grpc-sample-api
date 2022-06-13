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
            services.AddGrpcReflection();

            services.AddCors(o => o.AddPolicy("AllowAll", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader()
                       .WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding");
            }));
        }

        public void Configure(WebApplication app, IWebHostEnvironment env)
        {
            app.UseRouting();

            app.UseGrpcWeb();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Communication with gRPC endpoints must be made through a gRPC client.");
                });

                endpoints.MapGrpcService<GreeterService>().EnableGrpcWeb().RequireCors("AllowAll"); ;
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.MapGrpcReflectionService();
            }
        }
    }
}

