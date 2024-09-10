// Importa o módulo 'readline' para ler entrada do usuário
const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para exibir o número 10 vezes
function exibirNumero10Vezes(numero) {
  for (let i = 0; i < 10; i++) {
    console.log(numero);
  }
}

// Pede ao usuário para inserir um número inteiro
rl.question('Digite um número inteiro: ', (resposta) => {
  const numero = parseInt(resposta, 10);

  // Verifica se a conversão foi bem-sucedida e se o número é válido
  if (!isNaN(numero)) {
    exibirNumero10Vezes(numero);
  } else {
    console.log('Por favor, insira um número inteiro válido.');
  }

  // Fecha a interface de leitura
  rl.close();
});
