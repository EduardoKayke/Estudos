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

// Join
let _join = ['a', 'b', 'c'].join('-')
console.log(_join); // a-b-c
//--------------------------------------------

// Slice
let _slice = ['a', 'b', 'c'].slice(1)
console.log(_slice); // [ 'b', 'c' ]
//--------------------------------------------

// IndexOf
let _indexOf = ['a', 'b', 'c'].indexOf('b')
console.log(_indexOf); // 1
//--------------------------------------------

// Includes
let _includes = ['a', 'b', 'c'].includes('c')
console.log(_includes); // true
//--------------------------------------------

// Find
let _find = [3, 5, 6, 8].find(n => n % 2 === 0)
console.log(_find); // 6
//--------------------------------------------

// FindIndex
let _findIndex = [2, 4, 3, 5].findIndex(n => n % 2 !== 0)
console.log(_findIndex); // 2
//--------------------------------------------

// Map
let _map = [2, 4, 3, 5].map(n => n * 2)
console.log(_map); // [ 4, 8, 6, 10 ]
//--------------------------------------------

// Filter
let _filter = [2, 4, 3, 5].filter(n => n % 2 === 0)
console.log(_filter); // [ 2, 4 ]
//--------------------------------------------

// Reduce
let _reduce = [2, 4, 3, 5].reduce((n, n2) => n + n2)
console.log(_reduce); // 14
//--------------------------------------------

// Every
let _every = [2, 4, 3, 5].every(x => x < 6)
console.log(_every); // true
//--------------------------------------------

// Some
let _some = [2, 4, 3, 5].some(n => n > 6)
console.log(_some); // false
//--------------------------------------------

// Reverse
let _reverse = [2, 4, 3, 5].reverse()
console.log(_reverse); // [ 5, 3, 4, 2 ]
//--------------------------------------------