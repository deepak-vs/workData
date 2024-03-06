// Write a function that performs three asynchronous operations in parallel. All operations should be initiated simultaneously, and the function should await the completion of all three before continuing.


const asyncOperations1=async()=>{
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("I am asynchronus operation1")
            resolve(10);
        },2000)
    })

}
const asyncOperations2=async()=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("I am asynchronus operation2")
        resolve(20);
    },2000)
})
}
const asyncOperations3=async()=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("I am asynchronus operation3")
        resolve(30);
    },2000)
})
}

const executeOperations=async()=>{
let result1,result2,result3;

const promise1 = asyncOperations1();
const promise2 = asyncOperations2();
const promise3 = asyncOperations3();

result1= await promise1;
console.log(result1," ",result2," ",result3);

result2=await promise2;
console.log(result1," ",result2," ",result3);

result3=await promise3;
console.log(result1," ",result2," ",result3);

console.log("Operations Done !!!")
}

executeOperations();