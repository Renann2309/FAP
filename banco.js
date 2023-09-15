// banco e suas propriedades.
const banco = {
    conta: 89651,
    saldo: 50.00,
    tipoConta: "Poupança",
    agencia: "0478",

    //buscar saldo
    Saldo: function() {
      return this.saldo;
    },
  
    //depósito.
    deposito: function(valor) {
      if (valor > 0) {
        this.saldo += valor;
        return `Realizado um depósito de R$ ${valor} com sucesso. Saldo atualizado: R$ ${this.saldo}`;
      } else {
        return "Valor inválido.";
      }
    },
  
    //saque
    saque: function(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return `Saque de R$ ${valor} realizado com sucesso. Saldo atualizado: R$ ${this.saldo}`;
      } else {
        return "valor de saque inválido.";
      }
    },
  
    // número da conta
    numeroConta: function() {
      return this.conta;
    }
  };
  
  // Exemplos de uso
  console.log("Saldo atual:", banco.buscarSaldo());
  console.log(banco.deposito(500.00));
  console.log(banco.saque(200.00));
  console.log("Número da conta:", banco.numeroConta());
  