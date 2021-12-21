import '@fortawesome/fontawesome-free'
import State from '@/Enums/State'
export default {

    data(){
        return {
          selectedItem: 1,
      setting: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
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

        ],
        settings: [
       
          { title: 'Change Password ',icon:'mdi-key-variant', link:'/reset-password',role:[1,2,3,4,5] },

        ],
        mini: false,
            }
    },
    mounted(){
      
    }
  
}