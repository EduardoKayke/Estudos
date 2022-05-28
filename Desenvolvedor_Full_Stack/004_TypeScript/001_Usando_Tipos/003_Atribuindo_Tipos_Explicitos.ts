// Tipos explícitos
let minhaIdade // Nesse caso não temos um Number ou string, pois a variável foi criada sem dado.
minhaIdade = 27
console.log(typeof minhaIdade); // Number

minhaIdade = '27'
console.log(typeof minhaIdade); // String

// Se colocarmos o tipo de dado que é a variável, os exemplos acima nãoa contecem.

let minhaIdadeTipo: any
let outroExemplo: any = 27

let balaoMagico: number
let outroExemplo2: number = 27

let varinhaDeOuro: string
let outroExemplo3: string = '27'

let caraCoroa: boolean
let outroExemplo4: boolean = true