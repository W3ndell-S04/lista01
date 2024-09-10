// Importa o módulo 'readline' para ler entrada do usuário
const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para verificar se os lados formam um triângulo e determinar o tipo
function verificarTriangulo(a, b, c) {
  // Verifica se os lados formam um triângulo
  if (a < b + c && b < a + c && c < a + b) {
    // Determina o tipo de triângulo
    if (a === b && b === c) {
      console.log('O triângulo é equilátero.');
    } else if (a === b || a === c || b === c) {
      console.log('O triângulo é isósceles.');
    } else {
      console.log('O triângulo é escaleno.');
    }
  } else {
    console.log('Os lados fornecidos não formam um triângulo.');
  }
}

// Pede ao usuário para inserir os três lados do triângulo
rl.question('Digite o valor do lado A: ', (respostaA) => {
  const a = parseFloat(respostaA);

  rl.question('Digite o valor do lado B: ', (respostaB) => {
    const b = parseFloat(respostaB);

    rl.question('Digite o valor do lado C: ', (respostaC) => {
      const c = parseFloat(respostaC);

      // Verifica se as conversões foram bem-sucedidas e se os valores são válidos
      if (!isNaN(a) && a > 0 && !isNaN(b) && b > 0 && !isNaN(c) && c > 0) {
        verificarTriangulo(a, b, c);
      } else {
        console.log('Por favor, insira valores válidos e positivos para os lados.');
      }

      // Fecha a interface de leitura
      rl.close();
    });
  });
});
