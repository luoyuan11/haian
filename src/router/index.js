import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nav from '@/components/Nav'
import Open from '@/components/Open'
import Adv from '@/components/Adv'
import Brand from '@/components/Brand'
import Support from '@/components/Support'
import Product from '@/components/Product'
import Inv from '@/components/Inv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Open',
      component:Open
    },
    {
      path:'/nav',
      name:'/Nav',
      component:Nav
    },
    {
      path:'/brand',
      name:'/Brand',
      component:Brand
    },{
      path:'/adv',
      name:'/Adv',
      component:Adv
    },
    {
      path:'/product',
      name:'/Product',
      component:Product
    }, 
    {
      path:'/inv',
      name:'/Inv',
      component:Inv
    },
    {
      path:'/support',
      name:'/Support',
      component:Support
    },
  ]
})
