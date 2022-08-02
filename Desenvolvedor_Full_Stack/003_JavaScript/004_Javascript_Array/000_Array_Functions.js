// Push
let _push = [1, 2, 3]
console.log(_push); // [ 1, 2, 3 ]

_push.push(4)
console.log(_push); // [ 1, 2, 3, 4 ]
//--------------------------------------------

// Push
let _pop = [1, 2, 3]
console.log(_pop); // [ 1, 2, 3 ]

_pop.pop()
console.log(_pop); // [ 1, 2 ]
//--------------------------------------------

// Shift
let _shift = [1, 2, 3]
console.log(_shift); // [ 1, 2, 3 ]

_shift.shift()
console.log(_shift); // [ 2, 3 ]
//--------------------------------------------

// Unshift
let _unshift = [1, 2, 3]
console.log(_unshift); // [ 1, 2, 3 ]

_unshift.unshift(0)
console.log(_unshift); // [ 0, 1, 2, 3 ]
//--------------------------------------------

// Concat
let _concat = ['a', 'b', 'c'].concat('d')
console.log(_concat); // [ 'a', 'b', 'c', 'd ]
//--------------------------------------------