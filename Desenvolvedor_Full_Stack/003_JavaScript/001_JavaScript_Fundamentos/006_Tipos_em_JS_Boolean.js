let isAtivo = false
console.log(isAtivo); // False

isAtivo = true
console.log(isAtivo); // True

// Vendo se é o que é atráves da negação

isAtivo = 1 // Vai receber duas negações e voltar ao que era, sendo assim um true.
console.log(!!isAtivo); // True
console.log(!!true); // True

console.log(!isAtivo);// Usando apenas uma negação ele inverte a lógica. Sendo False
console.log(!!false); // False


// Os Verdadeiros
console.log('Os verdadeiros...');
console.log(!!3); // True
console.log(!!-1); // True
console.log(!!' '); // True
console.log(!![]); // True
console.log(!!{}); // True
console.log(!!Infinity); // True
console.log(!!(isAtivo = true)); // True
console.log(!!(isAtivo = 33)); // True
console.log(!!(isAtivo = Infinity)); // True


// Os Verdadeiros
console.log('Os falsos...');
console.log(!!0); // False
console.log(!!''); // False
console.log(!!null); // False
console.log(!!NaN); // False
console.log(!!undefined); // False
console.log(!!(isAtivo = false)); // False


console.log('Pra finalizar...');
console.log(!!('' || null || 0 || ' ')); // Verdadeiro, pois um deles é verdadeiro


let nome = ''
console.log(nome || 'Desconhecido'); // Caso tenha colocado o nome aparecerá o nome, caso não, desconhecido.