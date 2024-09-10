// Importa o módulo 'readline' para ler entrada do usuário
const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular a soma de 5 números fornecidos pelo usuário
function somarNumeros() {
  let soma = 0;
  let contador = 0;

  // Função recursiva para solicitar números ao usuário
  function pedirNumero() {
    if (contador < 5) {
      rl.question(`Digite o número ${contador + 1}: `, (resposta) => {
        const numero = parseFloat(resposta);

        // Verifica se a conversão foi bem-sucedida
        if (!isNaN(numero)) {
          soma += numero;
          contador++;
          pedirNumero(); // Solicita o próximo número
        } else {
          console.log('Por favor, insira um número válido.');
          pedirNumero(); // Solicita o mesmo número novamente
        }
      });
    } else {
      // Exibe a soma total após receber 5 números
      console.log(`A soma total dos números é: ${soma.toFixed(2)}`);
      rl.close(); // Fecha a interface de leitura
    }
  }

  pedirNumero(); // Inicia a solicitação dos números
}

// Chama a função para iniciar o programa
somarNumeros();
