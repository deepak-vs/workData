// Implement a function that takes an array of numbers as an argument and returns the sum of all positive numbers in the array. Test the function with different arrays, including cases with negative numbers.

let numbers=[1,2,-3,4,-5,0]

// function sumOfPositiveItems(numbers){
//     let sum=0;
//     numbers.forEach(item => {
//         if(item>0){
//             sum+=item;
//         }
//     });
//     return sum;
// }
function sumOfPositiveItems(numbers){
    let sum=numbers.reduce((acc,currVal)=>{
        if(currVal>0){
            return acc+currVal
        }
        return acc
    },0)
    return sum;
}

console.log(sumOfPositiveItems(numbers))