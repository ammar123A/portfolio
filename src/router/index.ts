import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import { projects } from '../data/projects'
import { profile } from '../data/profile'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/projects/:slug', component: Project },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const project = projects.find((p) => p.slug === to.params.slug)
  document.title = project
    ? `${project.title} | ${profile.name}`
    : `${profile.name} | ${profile.role}, Malaysia`
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', project ? project.summary : profile.pitch)
})

export default router
