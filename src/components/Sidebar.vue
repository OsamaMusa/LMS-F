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
        <v-list-item-title> hello {{ user.fullName }}</v-list-item-title>
   
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
           v-show="item.role.indexOf(user.roleID) > -1"
       
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

export default {

    data(){
        return {
        user : JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) :{fullName:'test user'} ,
        width : (window.innerWidth > 0) ? window.innerWidth : screen.width,
        drawer: true,
        items: [
          { title: 'Reservations' ,icon:'mdi-send', link : '/reservation' ,role:[1,4]},
          { title: 'Books' ,icon:'mdi-book-open', link:'/book' ,role:[1,2]},
          { title: 'Customers' ,icon:'mdi-account', link:'/customer' ,role:[1,2]},
          { title: 'Publishers' , icon:'mdi-briefcase-download', link:'/publisher' ,role:[1,2]},
          { title: 'Reports' , icon:'mdi-chart-bar',link:'/report' ,role:[1]},
          { title: 'Permissions & Rols' ,icon:'mdi-key-variant', link:'/00' ,role:[1]},
          { title: 'Finance' , icon:'mdi-bank', link:'/finance' ,role:[1,3]},
          { title: 'Users',icon:'mdi-human-male-female', link:'/user' ,role:[1,2]},
        ],
        mini: false,
            }
    },
    mounted(){
       console.log(this.user.fullName);
    }
  
}
</script>

<style scoped>

.sidebar{
    width: 100%;
    margin: 20px 20px 0 -10px;
}


</style>