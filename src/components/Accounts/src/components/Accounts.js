import axios from "axios"
export default {
  name: 'src-components-accounts',
  components: {},
  props: [],
  data () {
    return {
      user : JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) :{username:'test user'} ,       
      phone:JSON.parse(localStorage.getItem('user')).phone,
      address:JSON.parse(localStorage.getItem('user')).address,
      department:JSON.parse(localStorage.getItem('user')).department,
      dob:JSON.parse(localStorage.getItem('user')).birthDate.split('T')[0],
    }
  },
  
  computed: {

  },
  mounted () {
    
  },
  methods: {
   editProfile(){
     if( this.phone == '' || this.address =='' ||  this.department == '' || this.dob =='')
        {
          alert('You must fill all data !!')
          return
        }else{
          this.user.phone = this.phone
          this.user.address = this.address
          this.user.department = this.department
          this.user.birthDate = this.dob
          console.log(this.user)
          axios.put('api/Users/'+this.user.id,
           
          this.user
          )
           .then( response =>{
              if(response.data == true){
                        localStorage.setItem('user',JSON.stringify(this.user))
                        window.location.reload
                        alert('Updated successfully')

                      }
                       
               })
             
        }


   }
  },
 
}




   
 