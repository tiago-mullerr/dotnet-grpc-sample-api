using System;
using System.Globalization;
using Grpc.Core;
using GrpcFilestream;
using CsvHelper;
using CsvHelper.Configuration;
using GrpcGreeter.Helpers;
using GrpcGreeter.Dtos;
using Newtonsoft.Json;
using GrpcGreeter.Services.Interfaces;

namespace GrpcGreeter.Services
{
    public class FileStreamService : Filestream.FilestreamBase, IFileStreamService
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
                var path = $"{Directory.GetParent(Environment.CurrentDirectory).FullName}/GrpcGreeter/SampleFiles/SampleFile.csv";
                using var stream = new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.Read, 4096, FileOptions.Asynchronous | FileOptions.SequentialScan);
                using var reader = new StreamReader(stream, System.Text.Encoding.UTF8);
                string line;

                var header = await reader.ReadLineAsync();

                while ((line = await reader.ReadLineAsync()) != null)
                {
                    var parsedLine = JsonConvert.SerializeObject(HelperFunctions.ParseCsvLine<NotaFiscalDto>(line, header));
                    await responseStream.WriteAsync(new StreamResponse() { Content = parsedLine });
                }

            }
            catch (Exception ex)
            {
                await responseStream.WriteAsync(new StreamResponse() { Content = ex.Message });
            }
        }

        public override async Task StreamLimitedFile(LimitedRequest request, IServerStreamWriter<StreamResponse> responseStream, ServerCallContext context)
        {
            try
            {
                var numberOfLines = int.Parse(request.NumberOfLines);
                var path = $"{Directory.GetParent(Environment.CurrentDirectory).FullName}/GrpcGreeter/SampleFiles/SampleFile.csv";
                using var stream = new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.Read, 4096, FileOptions.Asynchronous | FileOptions.SequentialScan);
                using var reader = new StreamReader(stream, System.Text.Encoding.UTF8);
                string line;

                var header = await reader.ReadLineAsync();

                int count = 0;
                while ((line = await reader.ReadLineAsync()) != null && count < numberOfLines)
                {
                    var parsedLine = JsonConvert.SerializeObject(HelperFunctions.ParseCsvLine<NotaFiscalDto>(line, header));
                    await responseStream.WriteAsync(new StreamResponse() { Content = parsedLine });
                    count++;
                }

            }
            catch (Exception ex)
            {
                await responseStream.WriteAsync(new StreamResponse() { Content = ex.Message });
            }
        }

        public async Task<IEnumerable<NotaFiscalDto>> GetFileContents(int numberOfLines)
        {
            var path = $"{Directory.GetParent(Environment.CurrentDirectory).FullName}/GrpcGreeter/SampleFiles/SampleFile.csv";
            using var stream = new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.Read, 4096, FileOptions.Asynchronous | FileOptions.SequentialScan);
            using var reader = new StreamReader(stream, System.Text.Encoding.UTF8);
            string line;

            var header = await reader.ReadLineAsync();
            var receiptList = new List<NotaFiscalDto>();

            int count = 0;
            while ((line = await reader.ReadLineAsync()) != null && count < numberOfLines)
            {
                receiptList.Add(HelperFunctions.ParseCsvLine<NotaFiscalDto>(line, header));
                count++;
            }

            return receiptList;
        }
    }
}

