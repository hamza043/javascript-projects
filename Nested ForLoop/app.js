
// for (let i = 1; i <= 10; i++) {
//     console.log("Table of ===>" + i);
//     for (let j = 1; j <= 10; j++) {
//    console.log(i + " x " + j + " = " + i*j);
//     }
// }

// let i = 1;
// while (i <= 10) {
//     console.log(2 + " x " + i + " = " + i*2);
//     i++
// }

// let i = 1;
// do{
//     console.log(2 + " x " + i + " = " + i*2);
//     i++
// }while (i <= 10);

let fruit = ['Mango','Banana','Orange','Apple']

for (let i = 0; i < fruit.length; i++) {
    console.log(`${fruit[i]} and it's index number is = ${i}`);
}

function todoAdd(){
    const taskName = document.getElementById('task').value;
    document.querySelector('#todoList').innerHTML +=`<li>${taskName}
    <button>Delete</button>
    <button>Edit</button>
    </li>`;
    document.getElementById('task').value='';
    
}