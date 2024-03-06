// 1. property decorator

function readonly(target: any, propertyKey: string) {
  console.log("target", target);
  console.log(propertyKey);
  Object.defineProperty(target, propertyKey, { writable: false });
}

class MyClass {
  @readonly
  _title: string;

  constructor(title: string) {
    this._title = title;
  }
}

const myObject = new MyClass("abc");
myObject._title = "new value";
myObject._title = "new value2";
console.log(myObject._title);

// //2..

// // function log(
// //   target: Object,
// //   key: string | symbol,
// //   descriptor: TypedPropertyDescriptor<any>
// // ) {
// //   console.log("log target", target);
// //   console.log("log key", key);
// //   console.log("log descriptor", descriptor);

// //   const originalMethod = descriptor.value;

// //   descriptor.value = function (...args: any[]) {
// //     console.log(`started ${key.toString()}`);

// //     const result = originalMethod.apply(this, args);

// //     console.log("result", result);

// //     console.log(`ended ${key.toString()}`);

// //     return result;
// //   };
// // }


// // class Decorators {
// //   private title: string;

// //   constructor(title: string) {
// //     this.title = title;
// //   }

// //   @log
// //   getTitle() {
// //     return this.title;
// //   }
// // }

// // const obj = new Decorators("test");
// // obj.getTitle();

// // 2; //////////// accessor decorator

// function accessorDecorator(
//   target: Object,
//   key: string | symbol,
//   descriptor: TypedPropertyDescriptor<any>
// ) {
//   const setter = descriptor.set;

//   descriptor.set = function (value: any) {
//     if (typeof value == "string") {
//       value = value.toUpperCase();
//     }
//     setter?.call(this, value);
//     console.log("value set");
//   };

//   return descriptor;
// }

// class Decorators {
//   private _title: string;

//   constructor(title: string) {
//     this._title = title;
//   }

//   get title() {
//     return this._title;
//   }

//   @accessorDecorator
//   set title(value: string) {
//     this._title = value;
//   }
// }

// const obj = new Decorators("test");

// obj.title = "abc";

// console.log(obj.title);

// //4 property decorator

// function propDecorator(value: string) {
//   return function propDecorator(target: any, key: string) {
//     let modifiedMessage: string;

//     // Return modifiedMessage whenever the message is asked
//     const getter = function () {
//       return modifiedMessage;
//     };

//     // Set the modifiedMessage value
//     const setter = function () {
//       modifiedMessage = `Hello from ${value}!`;
//     };

//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter,
//     });
//   };
// }

// // class Decorators {
// //   @propDecorator("admin")
// //   private _title: string = "";

// //   get title() {
// //     return this._title;
// //   }
// // }

// // const obj = new Decorators();
// // console.log(obj.title);

