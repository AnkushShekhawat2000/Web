// let p = document.querySelector("p");
// p.addEventListener("click", function(){
//     console.log("Paragraph was clicked");
// })


let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function() {
//     console.log("mouse inside box");
// });


// // this key use
let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     console.log(this);
//     console.dir(this);
//     console.dir(this.innerText);
//     console.dir(this);
//     this.style.backgroundColor = "blue";
// })


let p = document.querySelector("p");
let h1 = document.querySelector("h1");

let h3= document.querySelector("h3");




function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}


box.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);

