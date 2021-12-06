<template>
   <v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                         <v-alert
                         dense
                         outlined
                         type="error"
                         v-show="this.errors"
                         >
                            {{errorString}} 
                        </v-alert>
                        <v-form>
                           <v-text-field
                              id="username"
                              v-model="username"
                              label="Login"
                              type="text"
                           ></v-text-field>

                           <v-text-field
                              id="password" 
                              v-model="password"
                              label="Password"
                              type="password"
                              
                           ></v-text-field>

                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                         <router-link to="/sign-up">Sign Up</router-link>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="signIn">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
import axios from 'axios';

export default {
   name: 'sign-in',
   props: {
    
   },
   data(){
       return{
          username:'',
          password:'',
          errors:false,
          errorString :''

       }
   },
   methods:{
       signIn(){
            axios.post('Auth',
                { 
                userName:this.username,
                password:this.password
                })
                 .then( response =>{
                    if(response.status == 200){
                          localStorage.setItem('Token',response.data);
                          
                          axios.get('/api/Users/'+this.username,{
                         
                             headers: {
                                     Authorization: 'Bearer ' + response.data 
                               }

                          }).then(res => {
                            if(res.status == 200)
                              console.log(res.data)
                              localStorage.setItem('user',JSON.stringify(res.data))
                              window.location.href = "/"

                             
                          })
                          
                    }})
                    .catch(err => {
                       if(err){
                           this.errors = true
                           this.username = ''
                           this.password = ''
                           this.errorString = `Error !!`
                       }
                    })
                    
        }
     }
   }
</script>

<style></style>
