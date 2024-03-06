// Write a function that performs two asynchronous operations concurrently, and the function should return the result of the operation that finishes first.


const asyncOperations1=async()=>{
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am asynchronus operation1");
        },1000)
    })

}
const asyncOperations2=async()=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am asynchronus operation2");
    },300)
})
}

const executeOperations=async()=>{
let result;

const promise1 = asyncOperations1();
const promise2 = asyncOperations2();

result=await Promise.race([promise1,promise2]);
console.log(result)
console.log("Operations Done !!")
}

executeOperations();