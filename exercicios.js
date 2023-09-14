var nota1, nota2, nota3, media, calcMedia;

nota1 = Number(prompt("informe a primeira nota"));
nota2 = Number(prompt("informe a segunda nota"));
nota3 = Number(prompt("informe a terceira nota"));
media = (nota1 + nota2 + nota3) / 3;
calcMedia = media >7?
(console.log("aprovado")) : (console.log("reprovado"));
//segundo codigo
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var mediaAtual = (nota1 + nota2) / 2;
var notaMinima = 7 * 3 - mediaAtual;


if (notaMinima <= 10 && notaMinima >=0) {
  console.log("Você já está aprovado");
} else if (notaMinima < 0) {
  console.log("seu resultado já é maior que sete");
} else {
  console.log("Você precisa tirar pelo menos " + notaMinima.toFixed(2) + " na próxima prova para passar com média 7.");
}