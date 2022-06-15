using System;
namespace GrpcGreeter.Dtos
{
	public class NotaFiscalDto
	{
        public string CHAVEDEACESSO { get; set; }
        public string MODELO { get; set; }
        public string SERIE { get; set; }
        public string NUMERO { get; set; }
        public string NATUREZADAOPERACAO { get; set; }
        public string DATAEMISSAO { get; set; }
        public string EVENTO { get; set; }
        public string DATAHORAEVENTO { get; set; }
        public string DESCRICAOEVENTO { get; set; }
        public string MOTIVOEVENTO { get; set; }
    }
}

