
<template>
   <v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>LMS </v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                         <v-alert
                         dense
                         outlined
                         type="error"
                         v-show="this.hasErrors"
                         >
                            {{errorString}} 
                        </v-alert>
                        <v-form>

                           <v-text-field
                              id="username"
                              v-model="username"
                              label="Username"
                              type="text"
                           ></v-text-field>
                            <v-text-field
                              id="phone"
                              v-model="phone"
                              label="Phone"
                              type="text"
                           ></v-text-field>
                            <v-text-field
                              id="address"
                              v-model="address"
                              label="Address"
                              type="text"
                           ></v-text-field>
                             <v-text-field
                              id="dob"
                              v-model="dob"
                              label="BirthDate"
                              type="date"
                           ></v-text-field>
                             
                            <v-text-field
                                v-model="password"
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show ? 'text' : 'password'"
                                name="password"
                                label="Password"                                
                                @click:append="show = !show"
                                ></v-text-field>
                                    

                        </v-form> 
                        
                     </v-card-text>
                     <v-card-actions>
                         <router-link to="/log-in"> or <b>Login</b></router-link>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="signUp" v-show="!isLoading">Sign Up</v-btn>
                        <v-progress-circular
                              v-show="isLoading"
                              color="primary"
                              indeterminate
                         ></v-progress-circular>
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
          show: false,
          username:'',
          password:'',
          phone : '',
          address:'',
          dob:'',
          hasErrors:false,
          errorString :'',
          isLoading : false

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
             }
            axios.get('/api/Users/check-username/'+this.username,).then(res => {
            if(res.data != true){
             axios.post('api/Users',
                { 
                id : 0,    
                username:this.username,
                password:this.password,
                phone:this.phone,
                department:'new employee',
                address:this.address,
                birthDate:this.dob,
                roleID : 5
                })
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
                            }
                             
                          }).catch(err=>{
                              console.log(err)
                              this.isLoading =false

                          })

       }
   }
}
</script>

<style>
</style>
