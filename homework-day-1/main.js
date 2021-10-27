//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names,
 loops through the list and checks that the current name is in the
  string passed in. The output should be: "Matched dog_name"
   if name is in the string, if no matches are present console.log "No Matches"
*/

// NOT CORRECT //

// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

// let findWords = (a, b) =>{
//     let matches = [];

//     for(let i = 0; i < a.length; i++){
//         for(let j = 0; j < b.length; j++){
//             if(a[i] === b[j])matches.push(a[i]);
//         }
//     }
//     return matches`Matched ${findWords}`
// };
// findWords(dog_string, dog_names)
// console.log(findWords(dog_string, dog_names))


//   CORRECT WAY   //
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

// let findWords2 = (a_string, a_list) =>{
//     for(let i = 0; i < a_list.length; i++){
//         if(a_string.search(a_list[i]) != -1){
//             console.log(`Matched Dog name: ${a_list[i]}`)
//         }else{
//             console.log('no matches')
//         }
//     }
// }
// findWords2(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array
 and removes every value that's double is over 50.


*/
// WRONG WAY //
// let given_arr = [13, 22, 26, 40, 1, 10]
// let replaceEvens = (arr) =>{
//     let new_arr = given_arr.indexOf(given_arr);
//     if (num in arr *2 > 50){
//         new_arr.splice(num,1)
//     }
// }
// console.log(replaceEvens(given_arr))


// CORRECT WAYS //
// let given_arr = [13, 22, 26, 40, 1, 10]
// let replaceEvens = (arr) =>{
//     for(let i = arr.length -1; i>= 0; i--){
//         if(arr[i] * 2 > 50){
//             arr.splice(i,1)
//         }
//     }
//     return arr
// }
// console.log(replaceEvens(given_arr))



// // ANOTHER CORRECT WAY //
// let repEven = (arr) =>{
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] * 2 > 50){
//             arr.splice(i,1)
//             i--
//         }
//     }
//     return arr
// }
// console.log(repEven(given_arr))


//Expected output
//Given arr == [13, 22, 26, 40, 1, 10]
//Output arr == [13, 22, 1, 10]
//Explanation: 13*2 < 50, 22*2 < 50, 26*2 > 50, etc...




//  CODE WARS //


// #1 Swap Values
// I would like to be able to pass an array with two elements to my swapValues
//  function to swap the values. However it appears that the values aren't changing.
// Can you figure out what's wrong here?

// function swapValues() {
//     var args = Array.prototype.slice.call(arguments);
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
// };

// // Answer:
// function swapValues(arr){
//     return arr.reverse()
// };



// #2 Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that 
// removes the first and last characters of a string. You're given 
// one parameter, the original string. You don't have to worry with strings
//  with less than two characters.

// function removeChar(str){
//     // You got this
// };

// // Answer:
// function removeChar(str) {
//     return str.slice(1, -1);
//   };