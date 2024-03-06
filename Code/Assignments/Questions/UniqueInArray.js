// Write a function unique Elements that takes an array of elements and returns a new array containing only unique elements using a Set.

let arr=[1,2,3,1,2,4,5,6,3]

function uniqueElements(myArray){
    let uniqueSet=new Set(myArray)
    return Array.from(uniqueSet)
}

console.log(uniqueElements(arr))