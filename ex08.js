// Importa o módulo 'readline' para ler entrada do usuário
const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para escrever os valores em ordem crescente
function escreverOrdemCrescente(valor1, valor2) {
  if (valor1 < valor2) {
    console.log(`Ordem crescente: ${valor1}, ${valor2}`);
  } else {
    console.log(`Ordem crescente: ${valor2}, ${valor1}`);
  }
}

// Pede ao usuário para inserir dois valores distintos
rl.question('Digite o primeiro valor: ', (resposta1) => {
  const valor1 = parseFloat(resposta1);

  rl.question('Digite o segundo valor: ', (resposta2) => {
    const valor2 = parseFloat(resposta2);

    // Verifica se as conversões foram bem-sucedidas e se os valores são distintos
    if (!isNaN(valor1) && !isNaN(valor2) && valor1 !== valor2) {
      escreverOrdemCrescente(valor1, valor2);
    } else {
      console.log('Por favor, insira dois valores numéricos distintos.');
    }

    // Fecha a interface de leitura
    rl.close();
  });
});
