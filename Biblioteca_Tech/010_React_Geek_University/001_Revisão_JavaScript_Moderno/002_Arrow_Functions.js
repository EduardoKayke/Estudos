function ola() {
    return `Olá!`
};

console.log(ola());

function olaPessoa(nome) {
    return `Olá ${nome}!`
};

console.log(olaPessoa("Eduardo"));

//Arrow Functions 
const ola2 = () => {
    return `Olá Arrow Function`
}

console.log(ola2());

const olaPessoa2 = (nome, idade) => {
    return `Olá ${nome}, sua idade é ${idade}, bem vindo ao Arrow Function!`
};

console.log(olaPessoa2("Eduardo", 27));


const olaPessoa3 = nome => `Olá ${nome}, JS é top!`
console.log(olaPessoa3("Eduardo"));