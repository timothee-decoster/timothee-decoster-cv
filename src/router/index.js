import Vue from 'vue'
import Router from 'vue-router'
import Summary from '@/components/Summary.vue'
import One from '@/components/One.vue'
import Two from '@/components/Two.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Summary,
      name: 'Summary'
    },
    {
      path: '/one',
      component: One,
      name: 'One'
    },
    {
      path: '/two',
      component: Two,
      name: 'Two'
    }
  ]
})
