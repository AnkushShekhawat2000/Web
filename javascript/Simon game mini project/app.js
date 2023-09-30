 let gameSeq =[];
let userSeq=[];

let btn = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;


let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
   if(started == false)
   {
    console.log("game is started");
    started = true;

    levelUp();
   }
});

function btnFlesh(){
    btn.classList.add("flesh");
    setTimeout(function(){
        btn.classList.remove("flesh");
    }, 1000);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    // random button choose

    let randomIndex = Math.floor(Math.random()*3);
    let randomColor = btns(randomIndex);
    let random = document.querySelector(`.${randomColor}`);

    btnFlesh(random);

}