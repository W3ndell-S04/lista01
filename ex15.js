// Função para gerar e imprimir os primeiros 10 números da sequência de Fibonacci
function gerarFibonacci() {
    const quantidade = 10;
    let a = 0;
    let b = 1;
  
    console.log('Sequência de Fibonacci:');
  
    for (let i = 0; i < quantidade; i++) {
      console.log(a);
      const proximo = a + b;
      a = b;
      b = proximo;
    }
  }
  
  // Chama a função para gerar e imprimir a sequência de Fibonacci
  gerarFibonacci();
  