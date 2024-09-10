// Importa o módulo 'readline' para ler entrada do usuário
const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para classificar a nota
function classificarNota(nota) {
  if (nota >= 0 && nota < 4) {
    console.log('Reprovado');
  } else if (nota >= 4 && nota < 7) {
    console.log('Recuperação');
  } else if (nota >= 7 && nota <= 10) {
    console.log('Aprovado');
  } else {
    console.log('Nota inválida. Deve ser um valor entre 0 e 10.');
  }
}

// Pede ao usuário para inserir a nota
rl.question('Digite a nota (0 a 10): ', (resposta) => {
  // Converte a resposta para um número de ponto flutuante
  const nota = parseFloat(resposta);

  // Verifica se a conversão foi bem-sucedida e se a nota está dentro do intervalo válido
  if (!isNaN(nota)) {
    classificarNota(nota);
  } else {
    console.log('Por favor, insira um valor numérico válido.');
  }

  // Fecha a interface de leitura
  rl.close();
});
