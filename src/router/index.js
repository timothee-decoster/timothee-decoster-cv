import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil.vue'
import Cursus from '@/components/Cursus.vue'
import Experiences from '@/components/Experiences.vue'
import Competences from '@/components/Competences.vue'
import Loisirs from '@/components/Loisirs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Accueil,
      name: 'Accueil'
    },
    {
      path: '/cursus',
      component: Cursus,
      name: 'Cursus'
    },
    {
      path: '/experiences',
      component: Experiences,
      name: 'Experiences'
    },
    {
      path: '/competences',
      component: Competences,
      name: 'Competences'
    },
    {
      path: '/loisirs',
      component: Loisirs,
      name: 'Loisirs'
    }
  ]
})
