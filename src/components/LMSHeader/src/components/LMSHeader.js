export default {
  name: 'LMSHeader',
  
  data() {
     return{

     }

  },
  methods:{
   signOut(){
    
     localStorage.clear()
     
     window.location.href = '/log-in'

   }

  }
}