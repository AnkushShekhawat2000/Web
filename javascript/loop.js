
// print counting 1 to 5

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");


// when we need lot of work using loop its simple

// for loop

for(let i = 1; i<=5; i++)
{
    console.log(i);
}


for(let i = 10; i>=1; i = i-3)
{
    console.log(i);
}




// print all odd number  1 to 15
for (let i =1; i<= 15; i=i+2)
{
    console.log(i);
}

// using formula

for (let i =1; i<= 15; i=i+2)
{
    if(i%2 != 0)
    {
        console.log(i);
    }
    
}

console.log("in reverse order");
for (let i =15; i>=1; i=i-2)
{
    console.log(i);
}


// print all odd number  1 to 15

console.log( "print all odd number  1 to 15")

for(let i = 2; i<=10; i++)
{
    console.log(i);
}

console.log("in backward order");
for(let i = 10; i>=2; i=i-2)
{
    console.log(i);
}

// table of 5

console.log("table of 5");

for(let i = 5; i<=50; i= i+5)
{
    console.log(i);
}


console.log("table of 3");

for(let i = 4; i<=20; i= i+4)
{
    console.log(i);
}


// console.log("print table using user input");

// let n = prompt("write a number");

// n = parseInt(n);

// for(let i = n; i<=n*10; i = i+n)
// {
//     console.log(i);
// }


// nested loop

for(let i =1; i<=3; i++)
{
    console.log("outer loop");
    for(let j = 1; j<=3; j++)
    {
        
        console.log(j);
    }
}



// while loop

console.log("while loop");
let i = 1;

while( i<= 5)
{
    console.log(i);
    i++;
}


// favourite movie
console.log("write quit to quit the game")
const favourite = "avatar";

 let guess = prompt("guess my favourite movie");

while( guess != favourite && guess != "quit")
{
    prompt("wrong guess try again");
}

if(guess == favourite)
{
    console.log("your guess is right");
}


