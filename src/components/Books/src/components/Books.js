import axios from 'axios';
import Book from '@/Models/Book';
export default {
  name: 'books',
  props: {

  },

  data() {
     return {
      
        componentKey:0,
        hasErrors: false,
        errorString: '',
        isLoading: false,
        Books:[],
        pageOfItems: [],
        current:"All Books",
        array:[],
        id:0,
        author : '',
        title:'',
        quantity:0,
        aquantity:0,
        price:0.0,
        publisherid:1,
        userid:1,
        cpage:0,

     }
  },

  created(){
    this.all();
  },

  methods: {
    npage(){
      if(this.cpage+1<this.pageOfItems.length){
        this.onChangePage(this.cpage+1)
      }
    },
    ppage(){
      if(this.cpage-1>=0){
        this.onChangePage(this.cpage-1)
      }
    },
    onChangePage(page) {
      this.cpage=page;
      let chunk = 10;
      this.Books = this.array.slice(page*chunk, (page*chunk) + chunk);
      console.log(this.Books);

    }  ,
    avilable(){
    this.current="Avilable";
    axios.get('/AvilableBooks/', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('Token')

      }
    }).then(res => {
        if (res.status == 200) {

          this.array = res.data;
          
          
          let pages=parseInt((this.array.length)/10);
          if(this.array.length%10>0){
            pages+=1;
            
          }

          this.pageOfItems=[];
          for(let i=0;i<pages;i++){
            this.pageOfItems.push(i);
          }
          this.onChangePage(0);
        }
    })
    },
    all(){
      this.current="All Books";
      axios.get('/AllBooks/', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('Token')
  
        }
      }).then(res => {
          if (res.status == 200) {
  
            this.array = res.data;
            
            
            let pages=parseInt((this.array.length)/10);
            if(this.array.length%10>0){
              pages+=1;
              
            }

            this.pageOfItems=[];
            for(let i=0;i<pages;i++){
              this.pageOfItems.push(i);
            }
            this.onChangePage(0);
          }
      })
    },
    search(){
      this.current="Search by ID";
      
      this.Books=[];
      axios.get('/Book?Id='+this.id+'', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('Token')
  
        }
      }).then(res => {
          if (res.status == 200) {
  
            this.Books.push(res.data);

          }
        });
        
    },
    add(){
      if(this.current == "Add")
      {
        
      var book = new Book(0,this.author,this.title,this.aquantity,this.quantity,this.price,this.publisherid,this.userid);
      axios.post('/Book',book, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('Token')
  
        },
        
      }).then(res => {console.log(res);
          if (res.status == 200) {
            this.componentKey+=1;
            this.all();
          }
        });}
        else{
          this.current="Add";

          this.author='';
          this.title='';
          this.price=0.0;
          this.publisherid=1;
          this.userid=1;
          this.aquantity=0;
          this.quantity=0;
          this.Books=[];
        }
    
    },
    del(bid){
      
      axios.delete('/Book?Id='+bid, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('Token')
  
        }
      }).then(res => {console.log(res);
          if (res.status == 200) {
            this.all();
          }
        });
    },
    edit(bid){
      if(this.current == "Edit")
      {      


      var book = new Book(bid,this.author,this.title,this.aquantity,this.quantity,this.price,this.publisherid,this.userid);
      axios.put('/Book',book, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('Token')
  
        },
        
      }).then(res => {console.log(res);
          if (res.status == 200) {
            this.componentKey+=1;
            this.all();
          }
        });}
        else{
          this.Books=[];
          this.current="Edit";
          axios.get('/Book?Id='+bid+'', {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('Token')
      
            }
          }).then(res => {
              if (res.status == 200) {
      
                this.Books.push(res.data);
                
                  this.id=bid;
                  this.author=this.Books[0].author;
                  this.title=this.Books[0].title;
                  this.aquantity=this.Books[0].avilable;
                  this.quantity=this.Books[0].totalNum;
                  this.price=this.Books[0].price;
                  this.publisherid=this.Books[0].publisherID;
                  this.userid=this.Books[0].userID;}
              
            });
            
        }
  }
,


  }}