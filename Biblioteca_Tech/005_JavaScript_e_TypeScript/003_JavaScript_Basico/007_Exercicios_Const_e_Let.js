const nome = 'Luiz Otavio Miranda';
const idade = 30;
const peso = 80;
const altura = 1.84;
let imc = peso / (altura * altura);
let anoNascimento = 2021 - idade;

console.log(`${nome} tem ${idade} anos e pesa ${peso} Kg.`);
console.log(`Tem ${altura}m e seu IMC é de ${imc}`);
console.log(`Nasceu em ${anoNascimento}.`);