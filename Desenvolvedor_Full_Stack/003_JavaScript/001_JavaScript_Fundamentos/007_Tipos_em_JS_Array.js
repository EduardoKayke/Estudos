const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]);
console.log(valores[4]); // undefined

valores[4] = 10 // colocando valor no índice 4

console.log(valores[4]); // 10
console.log(valores.length); // 5 elementos no array valores

// Push adiciona ao array
valores.push({id: 3}, false, null, 'teste') 
console.log(valores); // [ 7.7, 8.9, 6.3, 9.2, 10, {id: 3}, false, null, 'teste']

// Pop retia o último valor do array
console.log(valores.pop()); // teste


// 8 retira o primeiro valor e arredonda se for número
console.log(valores.unshift()); 


// Delete retira o valor selecionado do array.
delete valores[0]
console.log(valores); // [ <1 empty item> , 8.9, 6.3, 9.2, 10, {id: 3}, false, null, null]
// Perceba que o ul´timo valor foi o null, porque retiramos o 'teste' com o pop

console.log(typeof valores); //Object