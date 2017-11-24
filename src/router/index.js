import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import login from '@/components/pages/login'
import Homepage from '@/components/pages/Homepage'
import pro from '@/components/pages/pro'
import add from '@/components/pages/add'
import trans from '@/components/pages/trans'
import film from '@/components/pages/film'
import filmChild from '@/components/pages/filmChild'
import transChild from '@/components/pages/transChild'
import proChild from '@/components/proChild/proChild'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        {
           path: '/', 
           name:Homepage,
           component: Homepage
        },
        {
           path: '/ab', 
           name:Homepage,
           component: Homepage
        },
        {
           path: '/pro', 
           name:pro,
           component: pro,
           children:[
              {
                path: '/', 
                name:proChild,
                component: proChild
              },
           ]
        },
        {
           path: '/add', 
           name:add,
           component: add,
        },
        {
           path: '/aaa', 
           name:trans,
           component: trans
        },
        {
           path: '/film', 
           name:film,
           component: film,
           children:[
              {
                path: '/', 
                name:filmChild,
                component: filmChild
              },
           ]
        }
      ]
    }
  ]
})
