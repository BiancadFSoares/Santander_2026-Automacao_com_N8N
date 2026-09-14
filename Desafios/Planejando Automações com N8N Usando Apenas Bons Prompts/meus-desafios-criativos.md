Atue como um especialista em N8N e automação de processos.

Crie uma automação no N8N para identificar clientes com cobranças próximas do vencimento e enviar notificações de cobrança automaticamente.

Público:
Equipe financeira e clientes que possuem cobranças próximas do vencimento.

Ferramentas envolvidas:
N8N, uma fonte de dados contendo informações dos clientes e cobranças e um serviço de envio de e-mails.

Fluxo:

1. Buscar os dados dos clientes e suas respectivas cobranças.
2. Associar os dados dos clientes às cobranças utilizando um identificador em comum.
3. Percorrer os clientes individualmente utilizando um loop.
4. Verificar a quantidade de dias até o vencimento da cobrança.
5. Verificar a forma de pagamento utilizada pelo cliente.
6. Enviar uma notificação por e-mail somente para os clientes que atendam aos critérios definidos.
7. Personalizar o assunto e o conteúdo do e-mail utilizando os dados do cliente e da cobrança.
8. Utilizar um intervalo entre os envios para evitar o disparo de muitas mensagens simultaneamente.
9. Finalizar o processamento após todos os clientes serem analisados.

Regras:

* Enviar a notificação somente quando o vencimento ocorrer em até 5 dias.
* Não enviar notificações para clientes que utilizam cartão de crédito.
* Clientes que utilizam boleto ou Pix podem receber a notificação.
* Caso o cliente não atenda aos critérios, o item deve ser ignorado e o loop deve continuar para o próximo cliente.
* O workflow deve permitir a manutenção dos parâmetros utilizados na automação de forma centralizada.
* O assunto do e-mail deve ser personalizado utilizando o nome do cliente.
* O fluxo deve evitar o envio de notificações duplicadas.
* Após cada envio, o workflow deve aguardar o intervalo configurado antes de processar o próximo cliente.

Explique quais nodes do N8N devem ser utilizados, a finalidade de cada node e a lógica de funcionamento do workflow, apresentando a sequência dos nodes e as condições necessárias para que a automação funcione corretamente.
