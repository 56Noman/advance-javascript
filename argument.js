function add(){
    const arrayValue = [...arguments];
    let sum = 0;
    for (let i = 0; i < arrayValue.length; i++) {
        const element = arrayValue[i];
        sum = sum + element ;
    }
    return sum;
}

const result = add(1,2,3,4,5,6,7,8,9);
console.log(result);