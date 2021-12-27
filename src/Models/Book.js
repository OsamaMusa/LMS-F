export default class Book {
    Id=0;
    Author = '';
    Title='';
    Avilable=0;
    TotalNum=0;
    price=0.0;
    publisherID=1;
    userID=1;
    constructor(Id,Author,Title,Avilable,TotalNum,price,publisherID,userID){
        this.Id=Id;
        this.Author=Author;
        this.Title=Title;
        this.Avilable=Avilable;
        this.TotalNum=TotalNum;
        this.price=price;
        this.publisherID=publisherID;
        this.userID=userID;
    }

}