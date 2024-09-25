import { createRouter, createWebHistory } from 'vue-router';
import About from '@/views/About.vue';
import ContactPage from '@/views/Contact.vue';
import PortfolioPage from '@/views/Portfolio.vue';
import ResumePage from '@/views/Resume.vue';
import HomePage from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioPage
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumePage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
