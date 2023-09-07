































































































// h1 = document.querySelector("h1");

// function changeColor(color , delay){
//    return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color ; 
//             resolve("color changed");
//         },delay);
//     });
// }

// async function demo(){
//     await changeColor("red",1000);
//     await changeColor("yellow",1000);
//     changeColor("green",1000); 
// }
// demo(); 

// changeColor("red",1000)
// .then(()=>{
//     console.log("red color");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("orange color");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("green color");
//     return changeColor("purple",1000);
// })
// .then(()=>{
//     console.log("purple color");
//     return changeColor("black",1000);
// })
// .then(()=>{
//     console.log("black color");
//     return changeColor("blue",1000);
// })