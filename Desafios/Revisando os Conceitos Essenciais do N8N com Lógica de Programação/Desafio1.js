// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

const entrada = gets(); // Armazena a entrada de dados com a tag do HTML "<br>"
const [tipoEvento, statusEvento, etapaFluxo] = entrada.split("<br>"); // faz a separação para cada variavel


let resposta = "IGNORAR";

// Lembre-se da prioridade das regras:
// 1) ERRO vem antes de qualquer outra condição.
// 2) Depois, verifique os casos específicos de validar.
// 3) Se a etapa for revisar, a saída muda para ANALISAR.

// TODO: implemente a regra de maior prioridade para quando o status for "ERRO".
if (statusEvento === "ERRO") {
  resposta = "FALHA";
}else if (tipoEvento === "PIX" && statusEvento === "OK" && etapaFluxo === "validar") {
  resposta = "PROCESSAR";
} else if (tipoEvento === "TED" && statusEvento === "OK" && etapaFluxo === "validar") {
  resposta = "AGENDAR";
} else if (etapaFluxo === "revisar") {
  resposta = "ANALISAR";
}

print(resposta);
