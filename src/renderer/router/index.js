import * as VueRouter from 'vue-router'
import LandingPage from '@/renderer/pages/LandingPage.vue'

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: LandingPage,
      meta: {
        index: 0
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})
