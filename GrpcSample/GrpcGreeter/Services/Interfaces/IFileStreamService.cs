using System;
using GrpcGreeter.Dtos;

namespace GrpcGreeter.Services.Interfaces
{
	public interface IFileStreamService
	{
		Task<IEnumerable<NotaFiscalDto>> GetFileContents(int numberOfLines);
	}
}

