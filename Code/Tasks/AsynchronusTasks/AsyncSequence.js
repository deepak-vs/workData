// Write a function that performs three asynchronous operations sequentially. Each operation should return a Promise, and the next operation should only start once the previous one has completed successfully.


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
    let result1;
    
    result1=await asyncOperations1();
    console.log(result1);

    let result2;
    result2=await asyncOperations2();
    console.log(result1," ",result2);

    let result3;
    result3=await asyncOperations3();
    console.log(result1," ",result2," ",result3);


    console.log("Operations Done !!!")
}

executeOperations();