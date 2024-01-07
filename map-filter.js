// const numbers = [2,3,4,5,6,7];
// const outPut = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//    const result = element*element;
//     outPut.push(result);
// }
// console.log(outPut);


//traditional 
/*const numbers = [2,3,4,5,6,7,8];

const result = numbers.map(function(element){
    return element*element;
})

console.log(result);
*/

//using array function
const numbers = [2,3,4,5,6,7,8];

const result = numbers.map( x => x*x)

console.log(result);


//filter 

const filter = numbers.filter( x => x>5)

console.log(filter);


//find 

const find = numbers.find( x => x>5)

console.log(find);