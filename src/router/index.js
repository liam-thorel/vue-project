import Vue from 'vue'
import VueRouter from 'vue-router'
import RecipesListView from "@/views/RecipesListView.vue";
import HomeView from "@/views/HomeView.vue";
import RecipeDetails from "@/views/RecipeDetails.vue";
import CompareView from "@/views/CompareView.vue";
import LoginView from "@/views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'recipes',
    component: RecipesListView
  },
  {
    path: '/homeview',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeView
  },
  {
    path: '/recipe/:id',
    name: 'recipeDetails',
    component: RecipeDetails
  },
  {
    path: '/compare/:id1/:id2',
    name: 'Compare',
    component: CompareView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  }
]

const router = new VueRouter({
  routes
})

export default router
