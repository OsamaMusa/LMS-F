<template >
    <div class="sidebar" id="sidebar-variant" >
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item class="px-2">
        <router-link :to="{ path: '/account/'+user.id}">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
     </router-link>
        <v-list-item-title> Welcome {{ user.username }}</v-list-item-title>
   
        <v-btn
          icon
          @click.stop="mini = !mini"
          v-show="(width < 1000)"
   
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
           v-show="item.role.includes(user.roleID)"   
        >
       
        
          <v-list-item-icon>
             <v-icon>{{item.icon}}</v-icon>
             
           

          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>
     
    </div>
</template>

<script>

import '@fortawesome/fontawesome-free'
import State from '../Enums/State'

export default {

    data(){
        return {
        user : JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) :{username:'test user'} ,       
        width : (window.innerWidth > 0) ? window.innerWidth : screen.width,
        drawer: true,
        items: [
          { title: 'Reservations' ,icon:'mdi-send', link : '/reservation' ,role:[State.Admin,State.Librarian]},
          { title: 'Books' ,icon:'mdi-book-open', link:'/book' ,role:[State.Admin,State.CTO]},
          { title: 'Customers' ,icon:'mdi-account', link:'/customer' ,role:[State.Admin,State.CTO]},
          { title: 'Publishers' , icon:'mdi-briefcase-download', link:'/publisher' ,role:[State.Admin,State.CTO]},
          { title: 'Reports' , icon:'mdi-chart-bar',link:'/report' ,role:[State.Admin] },
          { title: 'Rols & Permissions' ,icon:'mdi-key-variant', link:'/00' ,role:[State.Admin]},
          { title: 'Finance' , icon:'mdi-bank', link:'/finance' ,role:[State.Admin,State.Finance]},
          { title: 'Users',icon:'mdi-human-male-female', link:'/user' ,role:[State.Admin]},
          { title: 'Get Permissions',icon:'mdi-briefcase', link:'/welcome-new-user' ,role:[State.newUser]},
          { title: 'Setting ',icon:'mdi-key-variant', link:'/reset-password',role:[1,2,3,4,5] },

        ],
        mini: false,
            }
    },
    mounted(){
      
    }
  
}
</script>

<style scoped>

.sidebar{
    width: 100%;
    margin: 20px 20px 0 -10px;
}


</style>