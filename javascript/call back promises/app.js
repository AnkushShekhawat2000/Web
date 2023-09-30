// h1 = document.querySelector("h1");


// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange)
//         {
//             nextColorChange();
//         }
//     },delay);
// }


// changeColor("red",100,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     });

// });



// function saveToDb(data,success, failure){

//     let internetSpeed = Math.floor(Math.random()*10)+1;

//     if(internetSpeed > 4)
//     {
//         success();
//     }
//     else{
//         failure();
//     }
// }


// saveToDb("apna college", 
//                        ()=>{
//                             console.log("sucess: your data was saved : ");
//                             saveToDb("hello world", 
//                                                 ()=>{
//                                                     console.log("success2: data2 saved");
//                                                     saveToDb("Ankush",
//                                                     ()=>{
//                                                         console.log("success3: data3 saved");
//                                                     },
//                                                     ()=>{
//                                                         console.log("failure3: weak connection");

//                                                     })
//                                                 }, 
//                                                 ()=>{
//                                                     console.log("failure2: weak connection")
//                                                 }
//                                     )
//                            },
//                          ()=>{

//                                 console.log("failure: weak connection. data not saved");
 
//                              }
//         );




        function saveToDb(data){

           
        
           return new Promise((resolve, reject)=>{
            let internetSpeed = Math.floor(Math.random()*10)+1;
            if(internetSpeed > 4){
                resolve("success : data was saved");
            }else{
                reject("failure : weak connection");
            }

           });
        }


      saveToDb("anpna college")
        .then(()=>{
            console.log("promise was resolved");
        
         })
         .catch(()=>{
            console.log("promise was rejected");
            
         });
       


         saveToDb("apna college")
         .then((result)=>{
             console.log("data1 saved");
             console.log("result of promise:", result);
             return saveToDb("hello world");
         })
         .then((result) => {
            console.log("data2 saved");
            console.log("result of promise:", result);
            console.log("Ankush");
         })
         .then((result)=>{
            console.log("data 3 saved");
            console.log("result of promise:", result);

         })
         .catch((error)=>{
            console.log("promise was rejected");
            console.log("error of promise:", error);

         });