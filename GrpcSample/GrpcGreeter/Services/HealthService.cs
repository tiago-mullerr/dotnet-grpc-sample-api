using System;
using Grpc.Core;
using GrpcHealth;

namespace GrpcGreeter.Services
{
    public class HealthService : Health.HealthBase
    {
        private readonly ILogger<HealthService> _logger;
        public HealthService(ILogger<HealthService> logger)
        {
            _logger = logger;
        }

        public override Task<Reply> IsAlive(EmptyRequest request, ServerCallContext context)
        {
            return Task.FromResult<Reply>(new Reply()
            {
                Message = "Grpc Sample API is alive"
            });
        }
    }
}

