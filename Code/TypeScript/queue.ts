
// function getRandomNumberFromArray(items: number[]): number {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }

// const randomNumer = getRandomNumberFromArray([1, 2, 3, 5, 7, 8, 9]);
// console.log(randomNumer);


// function getRandomStringFromArray(items: string[]): string {
//     console.log(items);
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }

// const randomNumer = getRandomStringFromArray(["Hello","Hi"]);
// console.log(randomNumer);

// function getRandomValueFromArray(items:any[]):any {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }

// const randomNumer = getRandomValueFromArray([1, 2, 3, 5, 7, 8, 9]);
// const randomString = getRandomValueFromArray(["Hello","Hi"]);

//  console.log(randomString);


// function getRandomItem<T>(items: T[]): T {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// }

// let numbers : number[] = [1, 5, 7, 4, 2, 9,];
// let randomEle = getRandomItem<number>(numbers)
// console.log(randomEle);

// let colors : string[] = ["Red", "Green", "Blue"];
// let randomColor = getRandomItem<string>(colors)
// console.log(randomColor);


// function merge<U extends object, V extends object>(obj1: U, obj2: V) {
//     return {
//         ...obj1,
//         ...obj2
//     };
// }


// let person = merge(
//     { name: 'John' },
//     {age:25}
// );

//  console.log(person)


// class Queue<T> {
//     private elements: T[] = [];

//     constructor(private size: number) {}

//     isEmpty(): boolean {
//         return this.elements.length === 0;
//     }
//     isFull(): boolean {
//         return this.elements.length === this.size;
//     }
//     enqueue(element: T): void {
//         if (this.elements.length === this.size) {
//             throw new Error('The Queue is overflow!');
//         }
//         this.elements.push(element);

//     }

//     dequeue(): T | undefined {
//         if (this.elements.length == 0) {
//             throw new Error('The queue is empty!');
//         } else {
//        return this.elements.shift();
//         } 
//     }
// }



function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}



let numbers = new Queue<number>(5);

while (!numbers.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Enqueu ${n} into the queue.`)
    numbers.enqueue(n);
}

while (!numbers.isEmpty()) {
    let n = numbers.dequeue();
    console.log(`Dequeue ${n} from the queue.`);
}




