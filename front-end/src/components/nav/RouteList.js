import { Home, Projects, Hobbies, About } from '../pages'

export const routes = [
  {
    primaryText: 'Home',
    path: '/',
    icon: 'home',
    exact: true,
    component: Home
  },
  {
    primaryText: 'Projects',
    icon: 'folder',
    path: '/projects',
    exact: false,
    component: Projects
  },
  {
    primaryText: 'Hobbies',
    icon: 'games',
    path: '/hobbies',
    exact: false,
    component: Hobbies
  },
  {
    primaryText: 'About',
    icon: 'info',
    path: '/about',
    exact: false,
    component: About
  },
  {
    primaryText: 'Contact',
    icon: 'contact_phone',
    path: '/contact'
  }
]
