// default parameters

function multiplication(x = 3, y = 5){
    console.log(x,y);
    return (x*y);
}

// console.log(multiplication(10,20));
// console.log(multiplication())
// console.log(multiplication(5));
console.log(multiplication([1,2,3],[4,5,6]));
console.log(multiplication({id : 1, product : "phone", rating : 5,}))

// spread operator.

let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log([45,...arr1]);
console.log([...arr1, arr2]);
console.log([30,40,...arr1, 44,...arr2])

// rest parameter

function print(a,b, ...c){
    console.log(a,b,c);
}

print(1,2,3,4,5);