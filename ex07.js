// Importa o módulo 'readline' para ler entrada do usuário
const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular o valor total da compra de maçãs
function calcularValorCompra(numMacas) {
  // Define os preços
  const precoMenosDeDoze = 0.30;
  const precoPeloMenosDoze = 0.25;

  // Calcula o valor total com base no número de maçãs
  let valorTotal;
  if (numMacas < 12) {
    valorTotal = numMacas * precoMenosDeDoze;
  } else {
    valorTotal = numMacas * precoPeloMenosDoze;
  }

  // Exibe o valor total da compra
  console.log(`O valor total da compra é R$ ${valorTotal.toFixed(2)}`);
}

// Pede ao usuário para inserir o número de maçãs compradas
rl.question('Digite o número de maçãs compradas: ', (resposta) => {
  const numMacas = parseInt(resposta, 10);

  // Verifica se a conversão foi bem-sucedida e se o número de maçãs é válido
  if (!isNaN(numMacas) && numMacas >= 0) {
    calcularValorCompra(numMacas);
  } else {
    console.log('Por favor, insira um número válido de maçãs.');
  }

  // Fecha a interface de leitura
  rl.close();
});
