using System;
using System.Globalization;
using Grpc.Core;
using GrpcFilestream;
using CsvHelper;
using CsvHelper.Configuration;
using GrpcGreeter.Helpers;
using GrpcGreeter.Dtos;
using Newtonsoft.Json;

namespace GrpcGreeter.Services
{
    public class FileStreamService : Filestream.FilestreamBase
    {
        private readonly ILogger<FileStreamService> _logger;
        private readonly IConfiguration _configuration;

        public FileStreamService(ILogger<FileStreamService> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
        }

        public override async Task StreamFile(EmptyRequest request, IServerStreamWriter<StreamResponse> responseStream, ServerCallContext context)
        {
            try
            {
                var path = _configuration["SampleFileLocation"];
                using var stream = new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.Read, 4096, FileOptions.Asynchronous | FileOptions.SequentialScan);
                using var reader = new StreamReader(stream, System.Text.Encoding.UTF8);
                string line;

                var header = await reader.ReadLineAsync();

                while ((line = await reader.ReadLineAsync()) != null)
                {
                    var parsedLine = JsonConvert.SerializeObject(HelperFunctions.ParseCsvLine<NotaFiscalDto>(line, header));
                    await responseStream.WriteAsync(new StreamResponse() { Content = line });
                }

            }
            catch (Exception ex)
            {
                await responseStream.WriteAsync(new StreamResponse() { Content = ex.Message });
            }
        }

        public override Task StreamLimitedFile(LimitedRequest request, IServerStreamWriter<StreamResponse> responseStream, ServerCallContext context)
        {
            return base.StreamLimitedFile(request, responseStream, context);
        }
    }
}

