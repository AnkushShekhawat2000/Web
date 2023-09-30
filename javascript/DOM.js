// single btn event
// let btn = document.querySelector("buttom");
// console.log.dir(btn);

// btn.onclick = function(){
//     console.log("button was clicked");
// }




// btn.onclick = sayHello;

// mutiple btn event
// let btns = document.querySelectorAll("button");
// for(btn of btns)
// {
//     btn.onclick = sayHello;
//     btn.onclick = sayName;
//     btn.onmouseenter = function(){
//         console.log("you entered a button");
//     }
// }

// function sayHello()
// {
//     alert("Hello");
// }

// function sayName()
// {
//     alert("Ankush");
// }





// Event Listener 

let btns = document.querySelectorAll("button");

for(btn of btns)
{
//    btn.addEventListener("click",sayHello);
//    btn.addEventListener("click",sayName);
   btn.addEventListener("dblclick",function(){
    console.log("you double clicked me");
   });
}


function sayHello()
{
    alert("Hello");
}

function sayName()
{
    alert("Ankush");
}


