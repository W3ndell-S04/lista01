// Importa o módulo 'readline' para ler entrada do usuário
const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para verificar se o número é par ou ímpar
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    console.log(`${numero} é par.`);
  } else {
    console.log(`${numero} é ímpar.`);
  }
}

// Pede ao usuário para inserir um número
rl.question('Digite um número inteiro: ', (resposta) => {
  // Converte a resposta para um número inteiro
  const numero = parseInt(resposta, 10);

  // Verifica se a conversão foi bem-sucedida e se o número é realmente um inteiro
  if (!isNaN(numero)) {
    verificarParOuImpar(numero);
  } else {
    console.log('Por favor, insira um número válido.');
  }

  // Fecha a interface de leitura
  rl.close();
});
