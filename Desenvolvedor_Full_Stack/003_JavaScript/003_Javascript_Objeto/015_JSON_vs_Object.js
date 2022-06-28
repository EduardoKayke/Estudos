const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c } }

console.log(JSON.stringify(obj));
// gerando um formato textual {"a":1,"b":2,"c":3}
// a função foi excluida, porque JSON é um formato de dados.

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));
// transformando um JSON em Objeto
// { a: 1, b: 2, c: 3 }

// JSON suporte.
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'));
// { a: 1.7, b: 'string', c: true, d: {}, e: [] }