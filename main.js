function somaNumerosPares(array) {
    let soma = 0; 
    for (let i = 0; i < array.length; i++) { 
      if (array[i] % 2 === 0) { 
        soma += array[i]; 
      }
    }
    return soma; 
  }
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const resultado = somaNumerosPares(numeros);
  console.log('A soma dos números pares é:', resultado);