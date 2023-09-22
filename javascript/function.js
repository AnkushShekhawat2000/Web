

// functions

function hello()
{
    console.log("hello");
}


hello();



function printName()
{
    console.log("ankush");
}

printName();


function print1to5()
{
    for(let i =1; i<=5; i++)
    {
        console.log(i);
    }
}


print1to5();


function isAdult()
{
    let age = 18;

    if(age >= 18)
    {
        console.log("adult");
    }
    else{
        console.log("not adult");
    }
}

isAdult();



// practice question1 

// print poem

function printPoem()
{
    console.log("twinkle twinkle littlw star");
    console.log("how i wonder what you ar");
}


printPoem();



// practice Q 2

//  create a function to role a dice  (1 to 6) random no generate


function roleDice()
{
    
let random =  Math.floor(Math.random()*6)+1;
console.log(random);
}

roleDice();
roleDice();
roleDice();
roleDice();
roleDice();



// function with arguments

function printInfo(name,age)
{
   console.log(`${name} age is ${age}`);
}


printInfo("ankush",23);
printInfo("ankush");
printInfo(23);




// practice  Q average of three no

function calculateAvg(a,b,c)
{
    let avg = a+b+c/2;

    console.log(avg);
}


calculateAvg(1,2,3)

calculateAvg(3,3,3)


// Practice Q 
// table print

function printTable(n)
{
    for(let i =n ; i<=n*10; i=i+n)
    {
        console.log(i);
    }
}

printTable(5);




// return type  int function
function sum(a,b){

    return a+b;

}

let s = sum(4,6);
console.log(s);

console.log(sum(sum(1,2),3));



//   Q 
// return the sum of 1 to n 

function getSum1toN(n)
{
    let sum  =0;

    for(let i = 1; i<=n; i++)
    {
        sum = sum +i;
    }

    return sum;
}

console.log(getSum1toN(10000));


//  Question

//  concatenate all string odf array and return these string

let str = ["hi","hello","bye","!"];

function concat(str)
{
    let res;

    for(let i =0; i<str.length; i++)
    {
        res += str[i];
    }

    return res;
}

 let ss = concat(str);
 console.log(ss);

// scope

// function scope
let su = 10;
function ssum(a,b)
{
    let su =a+b;

    console.log(su);

}


ssum(1,2);

console.log(su);

// block scope

{
    let a = 25;
    const b = 2;
}

// console.log(a);

// console.log(b);

// lexical scope

function outerFun(){
    let  x =5;
    let y = 6;

    function innerFun()
    {
        let c = 11;
        console.log(x);
    }

    console.log(c);
    innerFun();
}


console,log(outerFun());






