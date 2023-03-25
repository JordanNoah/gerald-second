import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * view imports
 */

import Enrollment from '../views/Enrollment'
import Inspection from '../views/Inspection'
import Main from '../views/Main'
import Scores from '../views/Scores'
import Student from '../views/Student'
import Tutorials from '../views/Tutorials'

import Login from '../views/Login'
import Register from '../views/Register'

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {  
    path:'/',
    name: 'init',
    redirect:{
      name:'main'
    }
  },
  {
    path:'/login',
    name:'login',
    beforeEnter:(to,from,next) => {
      if (!store.state.jwt) next()
      else next({name:'main'})
    },
    component:Login
  },
  {
    path:'/register',
    name:'register',
    beforeEnter:(to,from,next) => {
      if (!store.state.jwt) next()
      else next({name:'main'})
    },
    component:Register
  },
  {
    path:'/main',
    name: 'main',
    beforeEnter: (to,from,next) => {
      if (store.state.jwt) next()
      else next({name:'login'})
    },
    component:Main,
    redirect:{
      name:'student'
    },
    children:[
      {
        path:'student',
        name: 'student',
        component:Student
      },
      {
        path:'enrollments',
        name: 'enrollments',
        component:Enrollment
      },
      {
        path:'scores',
        name: 'scores',
        component:Scores
      },
      {
        path:'inspections',
        name: 'inspections',
        component:Inspection
      },
      {
        path:'tutorials',
        name: 'tutorials',
        component:Tutorials
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router