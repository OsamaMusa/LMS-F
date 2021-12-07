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
import WelcomeNewUser from '../components/WelcomeNewUser'
import State from '../Enums/State'
import ResetPassword from '../components/ResetPassword'

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
    beforeEnter : (to, from, next) =>{

      if (JSON.parse(localStorage.getItem('user')) == undefined) {
         next("log-in");
      }
      next();
    },
    children: [
      {
        path: 'reset-password',
        component: ResetPassword,
         beforeEnter : (to, from, next) =>{

          var user = JSON.parse(localStorage.getItem('user')) 
          
          if (user == undefined) {
             next("AccessDenied");
          }
          next();
        }
      },
      {
        path: 'reservation',
        component: Reservations,
         beforeEnter : (to, from, next) =>{

          var user = JSON.parse(localStorage.getItem('user')) 
          var role = user.roleID

          if (role != State.Librarian && role != State.Admin) {
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

          if (role != State.CTO && role != State.Admin) {
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

          if (role != State.CTO && role != State.Admin) {
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

          if (role != State.CTO && role != State.Admin) {
             next("AccessDenied");
          }
          next();
        }
      },
      {
        path: 'welcome-new-user',
        name: 'welcome-new-user',
        component: WelcomeNewUser,
         beforeEnter : (to, from, next) => {

          var user = JSON.parse(localStorage.getItem('user')) 
          var role = user.roleID

          if ( role != State.newUser) {
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

          if (role != State.Admin) {
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

          if ( role != State.Admin) {
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
          if (role != State.Finance && role != State.Admin) {
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