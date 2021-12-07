 <template>
      <v-app-bar
      app
      color="primary"
      dark
      src='../assets/background.jpg'
    >
    
      <b>LMS</b>
    
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="signOut">mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
 </template>

<script>
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
</script>