
const id = 1;
const productName = "watch";
const rating = 5;

// destructing of object

let product1 = {
    id,
    productName,
    rating
}

console.log(product1)

let product2 = {
    discription : "product2 discription",
    id : 1,
    productName : "watch",
    rating : 5,
}

// destructuring of object.
let {discription} = product2;

console.log(discription);

// array destructuring

let arr = [1,2,3];

let [x,y,z] = arr;
console.log(x,y,z);

