//Question 1
// function Ques1(){
//     for (let i = 1; i <= 5; i++) {
//         document.write(`Hellow World<br>`)'    
//     }
// }

// Question 2
// function Ques2(){
//     for (let i = 1; i <= 10; i++) {
//         document.write(`${i} <br>`);    
//     }
// }

// Question 3
// const print = document.querySelector('#print'); 
// const number = Number(prompt("Enter the number for multiplication table:"));
// const length = Number(prompt("Enter the length of the multiplication table:"));

// function Ques3() {
//   if (isNaN(number) || isNaN(length)) {
//     print.innerHTML =("Invalid input. Please enter valid numbers.");
//   } else {
//     // Printing the multiplication table
//     print.innerHTML = (`Multiplication Table for ${number} :<br>`);
//     for (let i = 1; i <= length; i++) {
//       print.innerHTML += (`${number} x ${i} = ${number * i}<br>`);
//     }
//   }
// }

// Question 4
// function Ques4() {
//     let arr = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei'];
//     const print = document.querySelector('#print'); 
//     // Loop through the array and concatenate the elements to the output variable
//     for (let i = 0; i < arr.length; i++) {
//         print.innerHTML += `${arr[i]}<br>`; // Concatenating index and array element
//     }
// }