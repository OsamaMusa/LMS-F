<template >
    <div class="sidebar" id="sidebar-variant" >
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>
        
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
        >
       
        
          <v-list-item-icon>
             <v-icon>{{ item.name }}</v-icon>
              <i class='fas fa-users' />
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
        width : (window.innerWidth > 0) ? window.innerWidth : screen.width,
        drawer: true,
        items: [
          { title: 'Reservations' ,name:'fas fa-users', link : '/reservation'},
          { title: 'Books' ,icon:'fa-duotone fa-book', link:'/book'},
          { title: 'Customers' ,icon:'fa-solid fa-users', link:'/customer'},
          { title: 'Publishers' , icon:'fa-solid fa-house', link:'/publisher'},
          { title: 'Reports' , icon:'fa-thin fa-chart-mixed',link:'/report'},
          { title: 'Permissions & Rols' ,icon:'fa-solid fa-person-booth', link:'/00'},
          { title: 'Finance' , icon:'bi bi-coin', link:'/finance'},
          { title: 'Users',icon:'fa-duotone fa-chalkboard-user', link:'/user' },
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