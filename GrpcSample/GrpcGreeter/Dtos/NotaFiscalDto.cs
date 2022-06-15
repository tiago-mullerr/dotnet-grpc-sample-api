using System;
using System.Text.Json.Serialization;

namespace GrpcGreeter.Dtos
{
	public class NotaFiscalDto
	{
        [JsonPropertyName("CHAVEDEACESSO")]
        public string CHAVEDEACESSO { get; set; }
        [JsonPropertyName("MODELO")]
        public string MODELO { get; set; }
        [JsonPropertyName("SERIE")]
        public string SERIE { get; set; }
        [JsonPropertyName("NUMERO")]
        public string NUMERO { get; set; }
        [JsonPropertyName("NATUREZADAOPERACAO")]
        public string NATUREZADAOPERACAO { get; set; }
        [JsonPropertyName("DATAEMISSAO")]
        public string DATAEMISSAO { get; set; }
        [JsonPropertyName("EVENTO")]
        public string EVENTO { get; set; }
        [JsonPropertyName("DATAHORAEVENTO")]
        public string DATAHORAEVENTO { get; set; }
        [JsonPropertyName("DESCRICAOEVENTO")]
        public string DESCRICAOEVENTO { get; set; }
        [JsonPropertyName("MOTIVOEVENTO")]
        public string MOTIVOEVENTO { get; set; }
    }
}

