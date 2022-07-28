//Apenas um ponto importante: o this, em arrow 
//functions, se comporta de uma forma diferente. Dentro 
//das arrow functions não é possível ter acesso ao “this 
//convencional”. Na verdade, quando é chamado o this em 
//function, o que ele vai encontrar é o this do objeto 
//global, ou seja, fazendo esse teste no Node, por
//exemplo, o que será retornado é um objeto vazio.
//Enquanto que funções tradicionais possuem seu
//“próprio this”, em arrow functions elas vão apontar
//para o objeto global, portanto, é preciso ter
//cuidado quando usar o this em arrow functions.