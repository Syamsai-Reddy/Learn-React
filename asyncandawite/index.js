// async function getData(){
//     return "syamsai";
// }

// const data =getData();
// console.log(data);
// data.then((ff)=>{console.log(ff)})


// const p=new Promise ((resolve ,reject)=>{
//     resolve("syam");
// });

// async function gD(){
//     return p;
// }
// const d=gD();
// gD.then((f)=>{
//     console.log(f);
// })

// const h=new Promise ( (resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hi");
//     },10000);
// });

// const h2=new Promise ( (resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hello");
//     },25000);
// });


// async function getData(){
//     console.log(await h);
//     console.log(await h2);
// }

// getData();


function double(x){
    return x*2;
}

function binary(x){
    return x.toString(2);
}

const arr=[5,4,3,2,1];

const output = arr.map(binary);
console.log(output);














