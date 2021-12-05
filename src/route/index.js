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
        component: Reservations
      },
      {
        path: 'book',
        name: 'book',
        component: Books
      },
      {
        path: 'customer',
        component: Customers
      },
      {
        path: 'publisher',
        name: 'publisher',
        component: Publishers
      },
      {
        path: 'report',
        name: 'report',
        component: Reports
      },
      {
        path: 'user',
        name: 'user',
        component: Users
      },
      {
        path: 'account',
        name: 'account',
        component: Accounts
      },
      {
        path: 'finance',
        name: 'finance',
        component: Finance
      }
    ]
  },
 
  {
    path: '/sign-up',
    name: 'sign-up',
    component: Signup
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