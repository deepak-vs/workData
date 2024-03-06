//Data types for type checking ------------------------------------------------

// let Name:string="Deepak";

// let age:number=23;

// let anyDemo:any=34;

// let marital_status:boolean=true;

// let varn:undefined=undefined;

// let varm:null=null;

// let ar:unknown="d";
// ar=2 as number;
// ar=true as boolean;

// let marks:number[]=[95,84,84];
// let names:string[]=["Deepak","Aman"];
// let bools:boolean[]=[true,false,true];
// let subjects:Array<string>=["Maths","Science"];
// let twoDArr:number[][]=[[1,2,3],[4,5,6],[7,8,9]];
// let readonlyArr:ReadonlyArray<number>=[1,2,3,4];
// let users:userType[]=[{},{}];
// let mixed:(string|number|boolean)[]=["Deepak",12,"pal",true] 
// let singleMixed:number[]|string[]=["deepak","pal"];

//tuple
// let myTup:[number|string,boolean,string]
// myTup=[101,true,"Deepak"];
// myTup[2]="pal"
// myTup.push("Pal")
// console.log(myTup)

// //read only tuple
// let tuple2:readonly[number,boolean,string]
// tuple2=[101,true,"Deepak"]
// console.log(tuple2)



// let userExists:string|boolean;       //union types-------------
// userExists="yes";
// userExists=true;

// let userName:"Deepak"|"Aman";    //literal union------------


//enums----------------------------------------------------
// const enum Dir{
//     north,
//     south=67,
//     east,
//     west
// }

// const dir=Dir.north;
// console.log(dir)






//interface and types ------------------------------------------------


// type userType={
    //     name:string,
    //     age:number
    // }
    
    // let user:userType={
        //     name:"deepak",
        //     age:23,
        // }
        
        
// type nameType=string;
// let userName:nameType="deepak";

// type numberArray=number[]
// let marks:numberArray=[1,2,3,4,5];

// type userName={
//     firstname:string,
//     lastname:string
// }
// type userAddress={
//     readonly city:string,
//     pin?:number
// }
// type userDetails=userName&userAddress&{
//     age:number
// }
// let myUser:userDetails={
//     firstname:"Deepak",
//     lastname:"pal",
//     age:25,
//     city:"Delhi",
// }

// type demoFun=(name:string)=>string
// let fun:demoFun=(name)=>{
//     return name;
// }
// console.log(fun("Deepak"))





// interface userInterface{
//     name:string;
//     age:number;
//     showDetails():string,
//     showName:()=>string,
//     setName(name:string):void
// }

// let intro:userInterface={
//     name:"Deepak",
//     age:25,
//     showDetails:()=>{
//         return "Deepka"
//     },
//     showName:()=>{
//         return "Depak";
//     },
//     setName:(str:"deepka")=>{
//             console.log(str)
//     }
// }





export {}


