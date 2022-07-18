// Não aceita repetição e não é indexada

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // Não aceita repetição

console.log(times);
// Set(5) { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }
console.log(times.size); // 5
console.log(times.has('Vasco')); // true
console.log(times.has('vasco')); // false

times.delete('Flamengo')
console.log(times.has('Flamengo')); // false

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet);
// Set(3) { 'Raquel', 'Lucas', 'Julia' }