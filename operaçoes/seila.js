let numero1 = 10;
let numero2 = 5;

console.log("Soma:", numero1 + numero2);
console.log("Subtração:", numero1 - numero2);
console.log("Multiplicação:", numero1 * numero2);
console.log("Divisão:", numero1 / numero2);

let numero = 10;

console.log("Dobro:", numero * 2);
console.log("Triplo:", numero * 3);


let nome = prompt("me diz teu nome:");
let idade = prompt("me diz tua idade agr:");

console.log("Olá, " + nome + "! Não seja bem-vindo! Você tem " + idade + " anos.");


let nota1 = Number(prompt("Digita a primeira nota:"));
let nota2 = Number(prompt("Digita a segunda nota:"));
let nota3 = Number(prompt("Digita a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media);


let usuarioCorreto = "ADM";
let senhaCorreta = "1234";

let usuario = prompt("Digita teu usuário:");
let senha = prompt("Digita tua senha:");

if (usuario != usuarioCorreto) {
    console.log("Usuário errado negao.");
} else if (senha != senhaCorreta) {
    console.log("Senha errada mermao.");
} else {
    console.log("Login realizado com sucesso! por enquanto");
}


let primeiroNumero = Number(prompt("Digite aí o primeiro número:"));
let segundoNumero = Number(prompt("Digite aí o segundo número:"));

if (primeiroNumero > segundoNumero) {
    console.log("O maior é " + primeiroNumero);
} else if (segundoNumero > primeiroNumero) {
    console.log("O maior é " + segundoNumero);
} else {
    console.log("Os dois são iguais mermao😒.");
}

