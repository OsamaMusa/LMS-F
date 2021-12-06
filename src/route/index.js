import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login' 
import NotFound from '../pages/NotFound'
import Dashboard from '../components/Dashboard'
import Reservations from '../components/Reservations'
import Books from '../components/Books'
import Customers from '../components/Customers'
import Publishers from '../components/Publishers'
import Reports from '../components/Reports'
import Users from '../components/Users'
import Accounts from '../components/Accounts'
import Finance from '../components/Finance'
import Signup from '../pages/Signup'
import AccessDenied from '../pages/AccessDenied'
import Claims from '../Enums/Claims'
Vue.use(VueRouter)

const routes = [
  
    {
      path: '/log-in',
      name: 'log-in-in',
      component: Login
      
    },
    {
    path: '/',
    component :Dashboard,
    children: [
      {
        path: 'reservation',
        component: Reservations,
         beforeEnter : (to, from, next) =>{

          var user = JSON.parse(localStorage.getItem('user')) 
          var role = user.roleID
          console.log("role is :"+role)

          if (role != Claims && role != Claims.Admin) {
             next("AccessDenied");
          }
          next();
        }
      },
      {
        path: 'book',
        name: 'book',
        component: Books,
         beforeEnter : (to, from, next) => {

          var user = JSON.parse(localStorage.getItem('user')) 
          var role = user.roleID
          console.log("role is :"+role)

          if (role != '2' && role != '1') {
             next("AccessDenied");
          }
          next();
        }
      },
      {
        path: 'customer',
        component: Customers,
         beforeEnter : (to, from, next) => {

          var user = JSON.parse(localStorage.getItem('user')) 
          var role = user.roleID
          console.log("role is :"+role)

          if (role != '2' && role != '1') {
             next("AccessDenied");
          }
          next();
        }
      },
      {
        path: 'publisher',
        name: 'publisher',
        component: Publishers,
         beforeEnter : (to, from, next) => {

          var user = JSON.parse(localStorage.getItem('user')) 
          var role = user.roleID
          console.log("role is :"+role)

          if (role != '2' && role != '1') {
             next("AccessDenied");
          }
          next();
        }
      },
      {
        path: 'report',
        name: 'report',
        component: Reports,
         beforeEnter : (to, from, next) => {

          var user = JSON.parse(localStorage.getItem('user')) 
          var role = user.roleID
          console.log("role is :"+role)

          if (role != '1') {
             next("AccessDenied");
          }
          next();
        }
      },
      {
        path: 'user',
        name: 'user',
        component: Users,
         beforeEnter : (to, from, next) => {

          var user = JSON.parse(localStorage.getItem('user')) 
          var role = user.roleID
          console.log("role is :"+role)

          if (role != '2' && role != '1') {
             next("AccessDenied");
          }
          next();
        }
      },
      {
        path: 'account/:id',
        name: 'account',
        component: Accounts
      },
      {
        path: 'finance',
        name: 'finance',
        component: Finance,
         beforeEnter : (to, from, next) => {

          var user = JSON.parse(localStorage.getItem('user')) 
          var role = user.roleID
          console.log("role is :"+role)
          if (role != '3' && role != '1') {
             next("AccessDenied");
          }
          next();
        }
      }
    ]
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: Signup
  },
  {
    path: '/AccessDenied',
    name: 'AccessDenied',
    component: AccessDenied
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router