//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes.
You can either display all of the values in the object - or, if you want a much tougher challenge,
loop through values(if applicable) to grab each favorite food.

Example 1:
Output This persons favorite pizza is ["Deep Dish","South Side Thin Crust"]...

Example 2 (Harder):
This person has many favorite foods:
Deep Dish, South Side Thin Crust, anything not from taco bell, Portillos Burgers, CHocolate, Vanilla, oreo...
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};
console.log(person3)

// // EASY RIGHT WAY
// let favFood = (person) => {
//     for(let i = 0; i < Object.keys(person).length; i++){
//         console.log(f`This person's favorite ${Object.keys(person)[i]} is: ${Object.values(person)[i]})
//     }
// };



// let favFood = (arr, key) => {
//     return(arr.find(ele => key in ele) || {}[key])
// }
// console.log(favFood(person3, 'pizza'))

// let favFood = () => {
//     let i = person3[0];
//     while (i == person3[0]){
//         return `This persons favorite pizza is ${i}`
//     }
// };
// console.log(favFood(person3[0]))
// // I'm so lost on this... Cant get my Inspect/Console to even run properly.






// //=======Exercise #2=========//
// /*
// Write a class for a Person that has attributes for name, age, and arrray of their hobbies.
// If should also have a printInfo method that prints the attributes in a formatted string.
// Create a method that accepts a parameter to add to a Person's list of hobbies.
// Create two people using the 'new' keyword, and print 
// both of their infos. Add a hobby to one persons hobby list.
// */

// // Create our Person Class here
// class Person{
//     constructor(name, age, hobbies){
//         this.name = name;
//         this.age = age;
//         this.hobbies = hobbies;
//     }
//     printInfo(){
//         console.log(`Name: ${this.name} \nAge: ${this.age} \nHobbies: ${this.hobbies}`)
//         for (let i = 0; i < this.hobbies.length; i++)
//         console.log(hobbies[i])
//     }
//     addHobbies(hobby){
//         this.hobbies.push(hobby)
//         console.log(`You have updated your hobbies! New Hobby: ${this.hobbies}`)
//     }
// };
    
// let jordan = new Person('Jordan', 32, ['Skiing']);
// console.log(jordan.printInfo())

// let danielle = new Person('Danielle', 30, ['Growing Plants'])
// console.log(Danielle.printInfo())

// console.log(Person.printInfo())


// jordan.addHobbies('Biking')
// danielle.addHobbies('Cooking')








// // =============Exercise #3 ============//
// /*

//     Create a Promised based function that will check a string to determine if it's length is greater than 10.
//     If the length is greater than ten console log "Big word". 
//     If the length of the string is less than 10 console log "Small Number"
// */


const greaterThan = (string) =>{
    return new Promise ( (resolve, reject) =>{
        if (string.length > 10){
            resolve(string)
        }else{
            reject(string)
        }
    })
};
greaterThan('Hello, this is a long string!')

.then((result) =>{
    console.log(`${result}: Big Word!`)
})
.catch((error) =>{
    console.log(`${error}: Small Word!`)
});



// // CODE WARS //

// //question 1
// // Multiplication Tables

// function multiplicationTable(row, col){
//     out = []
//     for(var i = 1; i <= row; i++){
        
//         temp = []
//         for(var j = 1; j <= col; j++){
//             temp.push(i*j)
//         }
//         out.push(temp)
//     }
//     return out
// };
// console.log(multiplicationTable(5, 10))



// // question 2
// // Are the numbers in order

// function inAscOrder(arr) {
//     for(let i = 0; i < arr.length -1; i++){
//         if(arr[i] > arr[i+1]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(inAscOrder([2,3,4,6,12,2,7,1]))



