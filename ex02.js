// Importa o módulo 'readline' para ler entrada do usuário
const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para classificar a idade
function classificarIdade(idade) {
  if (idade >= 0 && idade <= 12) {
    console.log('Criança');
  } else if (idade >= 13 && idade <= 17) {
    console.log('Adolescente');
  } else if (idade >= 18 && idade <= 59) {
    console.log('Adulto');
  } else if (idade >= 60) {
    console.log('Idoso');
  } else {
    console.log('Idade inválida.');
  }
}

// Pede ao usuário para inserir a idade
rl.question('Digite a sua idade: ', (resposta) => {
  // Converte a resposta para um número inteiro
  const idade = parseInt(resposta, 10);

  // Verifica se a conversão foi bem-sucedida e se a idade é um número válido
  if (!isNaN(idade)) {
    classificarIdade(idade);
  } else {
    console.log('Por favor, insira um número válido.');
  }

  // Fecha a interface de leitura
  rl.close();
});
