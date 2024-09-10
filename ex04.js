// Importa o módulo 'readline' para ler entrada do usuário
const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para exibir o menu e lidar com a escolha do usuário
function exibirMenu() {
  console.log('Escolha uma das opções abaixo:');
  console.log('1. Dizer Olá');
  console.log('2. Mostrar a data e hora atuais');
  console.log('3. Sair');

  // Pede ao usuário para escolher uma opção
  rl.question('Digite o número da opção desejada: ', (resposta) => {
    // Converte a resposta para um número inteiro
    const opcao = parseInt(resposta, 10);

    // Usa switch-case para lidar com a escolha do usuário
    switch (opcao) {
      case 1:
        console.log('Olá! Como você está?');
        break;
      case 2:
        const agora = new Date();
        console.log(`Data e Hora atuais: ${agora}`);
        break;
      case 3:
        console.log('Saindo... Até mais!');
        rl.close(); // Fecha a interface de leitura
        return;
      default:
        console.log('Opção inválida. Por favor, escolha uma opção válida.');
    }

    // Reexibe o menu após a escolha
    exibirMenu();
  });
}

// Inicia o menu interativo
exibirMenu();
