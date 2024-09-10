// Importa o módulo 'readline' para ler entrada do usuário
const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular o fatorial de um número
function calcularFatorial(numero) {
  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Pede ao usuário para inserir um número inteiro não negativo
rl.question('Digite um número inteiro não negativo para calcular o fatorial: ', (resposta) => {
  const numero = parseInt(resposta, 10);

  // Verifica se a conversão foi bem-sucedida e se o número é válido
  if (!isNaN(numero) && numero >= 0) {
    const resultado = calcularFatorial(numero);
    console.log(`O fatorial de ${numero} é ${resultado}.`);
  } else {
    console.log('Por favor, insira um número inteiro não negativo válido.');
  }

  // Fecha a interface de leitura
  rl.close();
});
