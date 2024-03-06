type userDetails={
    name:string,
    email:string;
    city:string
}
// class User{
//     readonly city:string="Delhi"
//     constructor(
//         public email:string,
//         public name:string){
//     }

//     getDetails():userDetails{
//         return {name:this.name,email:this.email,city:this.city};
//     }
// }

class User{
    public email:string;
    private name:string;
    readonly city:string="Delhi"
    constructor(email:string,name:string){
        this.name=name;
        this.email=email;
    }
    get getDetails():userDetails{
        return {name:this.name,email:this.email,city:this.city};
    }
    get userName():string{
        return this.name;
    }
    set userName(newName:string){
        this.name=newName;
    }
}

const user1=new User("deepak@pal","deepak");
user1.userName="Deepakapl";
console.log(user1.userName)