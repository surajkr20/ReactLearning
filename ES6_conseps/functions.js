

let personArray = [
    {
        Name : "suraj",
        age : 20,
        country : "india",
    },
    {
        Name : "Shubham",
        age : 20,
        country : "Africa"
    },
    {
        Name : "Abhinav",
        age : 19,
        country : "America"
    },
    {
        Name : "Raushan",
        age : 23,
        country : "india"
    }
]

// map function

// let getPerson = personArray.map((person,index) =>{
//     // console.log(person, index);
//     // return person.Name;
//     return person.age;
// })

// console.log(getPerson);

// find function

// let getPerson = personArray.find((person,index) =>{
//     return person.age === 20;
// })

// console.log(getPerson);

// filter 
let getPerson = personArray.filter((person,index) =>{
    return person.age === 20;
})

console.log(getPerson);