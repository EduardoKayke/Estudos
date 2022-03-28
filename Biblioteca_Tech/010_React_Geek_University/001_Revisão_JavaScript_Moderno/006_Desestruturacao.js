const frutas = ['laranja', 'banana', 'uva'];

let [fruta1, , fruta3]= frutas;

console.log(fruta1);
console.log(fruta3);

const pessoa = {
    nome: 'João',
    idade: 20,
    pais: 'Brasil',
    idioma: 'Portugues'
};

let { idade, idioma } = pessoa;

console.log(idade);
console.log(idioma);

//Desestruturando repare nas chaves {} do objeto
const localidade = ({pais, idioma}) => `Você mora no ${pais} e fala ${idioma}`

console.log(localidade(pessoa))