class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    toJSON(){
        return `{name:${this.name}}`
    }
}

let p=new Person("Deepak",23);

console.log(p.toJSON())

console.log(JSON.stringify(new Person("Deepak",25)))
