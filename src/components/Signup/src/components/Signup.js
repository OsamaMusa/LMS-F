import axios from 'axios';
import SignUpUser from '@/Models/SignUpUser'
export default {
   name: 'sign-in',
 
   props: {
    
   },
   data(){
       return{
          show: false,
          username:'',
          password:'',
          phone : '',
          address:'',
          dob:'',
          hasErrors:false,
          errorString :'',
          isLoading : false,
      

       }
   },
   methods:{
       signUp(){
         this.isLoading =true

           if(this.username=='' || this.password=='' || this.phone=='' || this.address=='' || this.dob =='')
             {
                this.hasErrors=true;
                this.errorString = 'Error ! , please fill all data'
                this.isLoading =false

                return
             }else if(this.password.length < 8){
               this.hasErrors=true;
               this.errorString = 'Error ! , password must be more than 8 digit'
               this.isLoading =false

               return
             }
             var user = new SignUpUser(this.username,this.password,this.phone,this.address,this.dob)
            axios.get('/api/Users/check-username/'+this.username,).then(res => {
            if(res.data != true){
             axios.post('api/Users',
               user
               )
                 .then( response =>{
                    if(response.data == true){
                          
                              window.location.href = "/log-in"

                            }
                             
                     })
                    .catch(err => {
                       if(err){
                           this.hasErrors = true
                           this.username = ''
                           this.password = ''
                           this.address=''
                           this.phone=''
                           this.dob=''
                           this.errorString = `Error !!`
                           this.isLoading =false

                       }
                    })

                            }else{
                             console.log(' exist')

                                   this.hasErrors =true;
                                   this.errorString='Error! , this username is already token'
                                    this.isLoading =false

                            }
                             
                          }).catch(err=>{
                              console.log(err)
                              this.isLoading =false

                          })

       }
   }
}