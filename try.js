const prompt = require('prompt-sync') ();
try {
    const numero1 = Number(prompt("informe o primeiro número:"));
    const numero2 = Number(prompt("informe o segundo número:"));
  
    
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Você deve informar números válidos.");
    }
  
    const resultado = numero1 * numero2;
    if (isNaN(resultado)) {
      throw new Error("A multiplicação não é válida.");
    }
    console.log(`O resultado da multiplicação é: ${resultado}`);
  } catch (error) { 
    console.error(`Ocorreu um erro: ${error.message}`);
  }
  
  