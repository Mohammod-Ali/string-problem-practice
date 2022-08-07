let first = 5;
let second = 7;
// console.log(first, second)
// 1st approach
// const temp = first;
//  first = second;
//  second = temp;
// console.log(first, second)

// 2 approach----destructuring
[ first, second ] = [ second, first ]
console.log(first, second)