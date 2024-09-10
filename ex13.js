// Importa o módulo 'readline' para ler entrada do usuário
const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular a média aritmética
function calcularMedia(numeros) {
  const total = numeros.reduce((acc, num) => acc + num, 0);
  return total / numeros.length;
}

// Função para ler números do usuário
function lerNumeros() {
  let numeros = [];
  
  function pedirNumero() {
    rl.question('Digite um número decimal (ou 0 para finalizar): ', (resposta) => {
      const numero = parseFloat(resposta);
      
      if (numero === 0) {
        if (numeros.length === 0) {
          console.log('Nenhum número foi inserido.');
        } else {
          const media = calcularMedia(numeros);
          console.log(`A média aritmética dos números é: ${media.toFixed(2)}`);
        }
        rl.close(); // Fecha a interface de leitura
      } else if (!isNaN(numero)) {
        numeros.push(numero);
        pedirNumero(); // Solicita o próximo número
      } else {
        console.log('Por favor, insira um número decimal válido.');
        pedirNumero(); // Solicita o mesmo número novamente
      }
    });
  }
  
  pedirNumero(); // Inicia a solicitação dos números
}

// Chama a função para iniciar a leitura dos números
lerNumeros();
