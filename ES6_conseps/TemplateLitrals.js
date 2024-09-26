
// Template litrals.

let name1 = "Abhinav";
let name2 = "Suraj";

console.log(name1 + " " + name2);
console.log(name1, name2);
console.log(`${name1} ${name2}`);

// Ternary operator.

let showRecepie = true;

function recepieName1(name){
    return name;
}

function recepieName2(name){
    return name;
}

// using if/else statements.

if(showRecepie){
    console.log(recepieName1("pizza"));
} else{
    console.log(recepieName2("cock"))
}

// using ternary operator. ( syntax = condition ? statement1 : statement2 )

showRecepie ? console.log(recepieName1("pizza")) : console.log(recepieName2("idli"));