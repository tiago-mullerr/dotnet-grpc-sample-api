using System;
using GrpcGreeter.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace GrpcGreeter.Controllers
{
    [ApiController]
    [Route("api/filestream")]
    public class FilestreamController : ControllerBase
    {
        private readonly IFileStreamService _fileStreamService;

        public FilestreamController(IFileStreamService fileStreamService)
        {
            _fileStreamService = fileStreamService;
        }

        [HttpGet("file-contents/{numberOfLines}")]
        public async Task<IActionResult> GetFileContent(int numberOfLines)
        {
            var fileContent = await _fileStreamService.GetFileContents(numberOfLines);
            return Ok(fileContent);
        }
    }
}

