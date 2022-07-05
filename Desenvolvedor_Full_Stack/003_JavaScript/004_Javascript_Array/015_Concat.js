const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxinton', 'Uesclei']
const todos = filhas.concat(filhos, 'Fulano')

console.log(todos, filhas, filhos);
// [ 'Ualeskah', 'Cibalena', 'Uoxinton', 'Uesclei', 'Fulano' ]
// [ 'Ualeskah', 'Cibalena' ]
// [ 'Uoxinton', 'Uesclei' ]

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]));
// [ 'a', 'b', 1, 2, 3, 4, 5, [ 6, 7 ] ]