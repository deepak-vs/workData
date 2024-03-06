// Implement a class Cache that internally uses a WeakMap to store key-value pairs.The class should have methods set(key, value), get(key), and delete(key)

class Cache{
    constructor(){
        this.cacheMap=new WeakMap();
    }
    set(key,value){
        if(typeof(key)!=="object"){
            console.log("Key is not an Object!!")
             return;
        }
        this.cacheMap.set(key,value);
    }
    get(key){
        return this.cacheMap.get(key)
    }
    delete(key){
        this.cacheMap.delete(key)
    }
}

let mycache=new Cache();

let key={
    name:"deepak"
}

mycache.set("key","Fullname")
// console.log(mycache.get(key))




