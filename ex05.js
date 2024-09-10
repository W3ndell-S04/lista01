// Importa o módulo 'readline' para ler entrada do usuário
const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular o IMC e determinar a categoria
function calcularIMC(peso, altura) {
  // Calcula o IMC
  const imc = peso / (altura * altura);

  // Determina a categoria com base no IMC
  if (imc < 18.5) {
    console.log(`IMC: ${imc.toFixed(2)} - Baixo peso`);
  } else if (imc >= 18.5 && imc < 24.9) {
    console.log(`IMC: ${imc.toFixed(2)} - Peso normal`);
  } else if (imc >= 25 && imc < 29.9) {
    console.log(`IMC: ${imc.toFixed(2)} - Sobrepeso`);
  } else {
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade`);
  }
}

// Pede ao usuário para inserir o peso e altura
rl.question('Digite seu peso (em kg): ', (respostaPeso) => {
  const peso = parseFloat(respostaPeso);

  rl.question('Digite sua altura (em metros): ', (respostaAltura) => {
    const altura = parseFloat(respostaAltura);

    // Verifica se as conversões foram bem-sucedidas e se os valores são válidos
    if (!isNaN(peso) && peso > 0 && !isNaN(altura) && altura > 0) {
      calcularIMC(peso, altura);
    } else {
      console.log('Por favor, insira valores válidos para peso e altura.');
    }

    // Fecha a interface de leitura
    rl.close();
  });
});
