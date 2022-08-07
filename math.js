const result = Math.pow(3, 8)
console.log(result)
// -----------------------------------
const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2) ;

if(gap < 5){
    console.log('you guys can be friends')
}else{
    console.log('you guys stay apart')
}

//-----------Math.round---------------

const number = 2.4534;
const fullNumber = Math.round(number);
console.log(fullNumber)

// -------------Math.ceil----------------
const numberCeil = 2.3;
const ceilNumber = Math.ceil(numberCeil)
console.log(ceilNumber)

// ------------Math.floor---------------

const floorNumber = 2.9;
console.log(Math.floor(floorNumber))

// ----------Math.random--------

console.log(Math.round(Math.random()*100))