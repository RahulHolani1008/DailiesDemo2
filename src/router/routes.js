const routes = [
  {
    path: '/',
    component: () => import('pages/HomePage.vue')
  },

  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },

  {
    path: '/register',
    component: () => import('pages/Register.vue')
  },
  {
    path: '/create/student',
    component: () => import('pages/CreateStudent.vue'),
    props: true,
    name: "CreateStudent"
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes