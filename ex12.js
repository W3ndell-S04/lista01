// Importa o módulo 'readline' para ler entrada do usuário
const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para exibir a tabuada de um número fornecido
function exibirTabuada(numero) {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Pede ao usuário para inserir um número
rl.question('Digite um número para exibir a tabuada: ', (resposta) => {
  const numero = parseInt(resposta, 10);

  // Verifica se a conversão foi bem-sucedida e se o número é válido
  if (!isNaN(numero)) {
    exibirTabuada(numero);
  } else {
    console.log('Por favor, insira um número válido.');
  }

  // Fecha a interface de leitura
  rl.close();
});
