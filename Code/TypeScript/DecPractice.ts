function MyDecorator(ctr:Function){
    console.log(ctr)
    ctr.prototype.id=Math.random()*10;
    ctr.prototype.date=new Date();
    console.log("MyDecorator is Running");
}


@MyDecorator
class BookStore{
    constructor(public bookName:string){}
    // getDate():Date{
    //     return this.date;
    // }
}

const book=new BookStore("HarryPotter");
// console.log(book.id);


