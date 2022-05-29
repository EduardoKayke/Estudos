const escola = 'Cod3r'
console.log(escola.charAt(4)); // r
console.log(escola.charAt(5)); // Valor Vazio
console.log(escola.charCodeAt(3)); // 51 foi o valor da tabela ASC ou Unicode que pegamos.
console.log(escola.indexOf('3')); // Indice 3 das letras de Cod3r, o 3 é o 3, o 0 é C
console.log(escola.substring(1)); // od3r
console.log(escola.substring(1, 3)); // od
console.log('Escola '.concat(escola).concat('!')); // Escola Cod3r!
console.log('Escola ' + escola + '!'); // Escola Cod3r!
console.log(escola.replace(3, 'e')); // Coder
console.log('Ana,Maria,Pedro'.split(',')); // [ 'Ana', 'Maria', 'Pedro' ], separou minha string e colocou em um array