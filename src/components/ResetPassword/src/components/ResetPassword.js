import axios from 'axios';

export default {

  name: 'src-components-reset-password',
  components: {},
  props: [],
  data(){
    return{
      user : JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) :{username:'test user'} ,       
      show1: false,
      show2: false,
      show3: false,
      OldPassword:'',
      NewPassword:'',
      reNewPassword : '',
      
       hasErrors:false,
       errorString :'',

    }
},
  computed: {

  },
  mounted () {
 
  },
  methods: {
    reset (){
      if(this.OldPassword=='' || this.NewPassword=='' || this.reNewPassword=='')
      {
         this.hasErrors=true;
         this.errorString = 'Error ! , please fill all data'
         return
      }
        if(this.reNewPassword != this.NewPassword){
            this.hasErrors =true;
            this.errorString = 'Error ! ,new password and re-password is not matched '
        }else{
            
          axios.post('api/Users/reset-password',
          { 
          id : this.user.id,    
          username:this.user.username,
          oldPassword:this.OldPassword,
          newPassword:this.NewPassword,
        
          })
           .then( response =>{
              if(response.data == true){
                       alert('Password updated successfuly !')
                        window.location.href = "/"

                      }else{
                        this.hasErrors = true
                        this.OldPassword = ''
                        this.NewPassword = ''
                        this.reNewPassword=''
                        this.errorString = `Error !! , Incorrect password`
                      }
                       
               })
              .catch(err => {
                 if(err){
                     this.hasErrors = true
                     this.OldPassword = ''
                     this.NewPassword = ''
                     this.reNewPassword=''
                     this.errorString = `Error !!`
                 }
              })
        }
    }
  }
}


