import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExperienceView from '@/views/ExperienceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { transition: 'slide' }
    },
    {
      path: '/destination/:id',
      name: 'destination',
      props: true,
      component: () => import('../views/DestinationView.vue'),
      children: [
        {
          name: 'experience',
          path: 'experience/:slug',
          component: ExperienceView,
          props: true,
          meta: { transition: 'slide-up' }
        }
      ],
      meta: { transition: 'slide' }
    }
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ]
})

export default router
