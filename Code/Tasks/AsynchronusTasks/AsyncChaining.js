// Write a function that chains three asynchronous operations using async/await. The result of each operation should be passed to the next operation.


const asyncOperations1=async()=>{
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("I am asynchronus operation1")
            resolve(10);
        },1000)
    })
}

const asyncOperations2=async(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("I am asynchronus operation2 with data :: ",data)
            resolve(20);
        },2000)
    })
}

const asyncOperations3=async(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("I am asynchronus operation3 with data :: ",data)
            resolve(30);
        },3000)
    })
}

const executeOperations=async()=>{

    let result1=await asyncOperations1();
    let result2=await asyncOperations2(result1);
    let result3=await asyncOperations3(result2);

   console.log("Operations Done !!") 


}

executeOperations();