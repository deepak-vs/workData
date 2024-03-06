// Map
// const data = new Map();
// data.set("a", 10);
// data.set("b", 20);
// data.set("c", 30);
// console.log(data.get("a"));

// console.log(data.size);
// data.delete("a");
// console.log(data);

// console.log(data.has("a"));

// const mapKeys = data.keys();
// console.log(mapKeys);
// console.log(typeof mapKeys);
// console.log(mapKeys);
// console.log(data.values());

// for (let [key, value] of data.entries()) {
//   if (value === 20) {
//     console.log(key);
//   }
// }

// Set

// const mySet = new Set();
// console.log(typeof mySet);

// mySet.add(1);
// mySet.add("amit");
// mySet.add([1, 2, 3, 5]);

// const person = { name: "ravi" };
// mySet.add({ name: "ravi" });
// mySet.add({ name: "ravi" });
// mySet.add({ name: "aman" });
// mySet.delete(person);
// console.log(mySet);
// console.log(mySet.has("amit"));

// spread
// Array.from
// for... of

// console.log(mySet.size);
// mySet.clear();
// console.log(mySet.size);

// WeakMap and WeakSet

// let student = { name: "ravi" };

// const studentMap = new WeakMap();
// const normalMap = new Map();
// studentMap.set(student, 10);
// normalMap.set(student, 10);

// student = null;

// console.log(studentMap);
// console.log(normalMap);

// WeakSet
// can use normal methods like set get has but not size and keys

// Object.keys, values, entries

// const employee = {
//   name: "Ajay",
//   id: 101,
//   designation: "Software engineer",
// };

// const keys = Object.keys(employee); // ["name", "id", "designation"]
// const valyes = Object.values(employee); // ["Ajay", 101, "Software engineer"]
// const entries = Object.entries(employee); // [["name", "Ajay"], ["id", 101], ["designation", "Software engineer"]]

// const documentCount = {
//   LI: 20,
//   HVL: 30,
//   LA: 50,
// };

// console.log(documentCount.LI + documentCount.LA + documentCount.HVL);
// const totalCount = Object.values(documentCount).reduce(
//   (acc, currentCount) => acc + currentCount,
//   0
// );

// console.log(totalCount);

// destructuring
// const arr = [99, 100];

// const ravi = arr[0];
// const ajay = arr[1];

// const [ravi, ajay] = arr;

// console.log(ravi, ajay);

// const fullName = "Amit Pratap Singh";

// const fullNameArray = fullName.split(" ");

// const firstName = fullNameArray[0];
// const lastName = fullNameArray[1];

// const [firstName, , lastName] = fullName.split(" ");

// console.log(firstName, lastName);

// const user = {
//   name: "Amit",
//   id: 101,
//   age: 24,
// };

// for (let [key, value] of Object.entries(user)) {
//   console.log(`key ${key} value ${value}`);
// }

// const colors = ["red", "orange", "blue", "green"];

// const [first, ...restColors] = colors;
// console.log(first);
// console.log(restColors);

/**
 * P -> C -> GC
 *
 * name
 * age
 * school
 * college
 *
 * C=>
 * {name, age, ...rest} = props;
 *
 * <GrandChild {...rest} />
 */

// Parent Component

// const props = {
//   name: "Ajay",
//   age: 30,
// };

// const { name = "Amit", age = 20 } = props;

// console.log(name, age);

/* <ProfileCard  classname="mt-2"/>;
    <ProfileCard />

    const ProfileCard = {
        const {classname = ""} = props;

        return (
            <div className={classname}>
        </div>
        )
    }
  */

// Date and time

const date = new Date();

// const customDate = new Date(2023, 1, 15, 1, 55);
// console.log(customDate);

// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());

// const timeStamp = Date.now();

// from 1 Jan 1970
// console.log(timeStamp);

// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getTime());

// TODO: Date comparision

// JSON

/**
 *
 * strings
 * numbers
 * booleans
 * null
 * arrays
 * objects
 */

// const student = {
//   name: "Akash",
//   age: 20,
//   course: "MCA",
//   college: "MSIT",
// };

// const jsonString = JSON.stringify(student);

// const normalObject = JSON.parse(jsonString);
// console.log(typeof normalObject);

// TODO: Write custom stringigy method compare it with JSON.stringify
