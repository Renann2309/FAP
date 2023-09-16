
//for of
const pessoa  = [{name: 'Antonio', idade: '18', profissao: 'Reporter', cidade: 'Caruaru',}]
for (let objetos of pessoa) {
    console.log(objetos)
}

//for in
var pessoas = [
    {nome: "Otavio", profissao: "Advogado", idade: 45, cidade: "Joao Pessoa"},
    {nome: "Claudia", profissao: "Analista adm", idade: 28, cidade: "Recife"}]
        for (let i = 0; i < pessoas.length; i++) {
        console.log(`Pessoa ${i + 1}:`);
        for (let prop in pessoas[i]) {
          console.log(`${prop}: ${pessoas[i][prop]}`);
        }
        console.log("--------------------------"); 
      }