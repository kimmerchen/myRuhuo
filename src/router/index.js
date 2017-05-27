import Vue from 'vue'
import Router from 'vue-router'
import VueResource from "vue-resource";
import Mint from 'mint-ui'
import YDUI from 'vue-ydui';
import '@/lib/ydui.rem.css';
import 'mint-ui/lib/style.css'
import { Field } from 'mint-ui';
import Into from '@/pages/into/into'
import owner from '@/pages/owner/owner'
import familys from '@/pages/familys/familys'
import deliveryCode from '@/pages/deliveryCode/deliveryCode'
import deliveryState from '@/pages/deliveryState/deliveryState'
import over from '@/pages/over/over'

Vue.use(Router);
Vue.use(VueResource);
Vue.use(Mint);
Vue.use(YDUI);
Vue.component(Field.name, Field);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Into',
      component: Into
    },
    {
      path: '/owner',
      name: 'owner',
      component: owner
    },
    {
      path: '/familys',
      name: 'familys',
      component: familys
    },
    {
      path: '/deliveryCode',
      name: 'deliveryCode',
      component: deliveryCode
    },
    {
      path: '/deliveryState',
      name: 'deliveryState',
      component: deliveryState
    },{
      path:'/over',
      name: 'over',
      component:over
    }
  ]
})
