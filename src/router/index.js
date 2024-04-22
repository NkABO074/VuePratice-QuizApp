import { createRouter, createWebHistory } from "vue-router";
import AppView from "../../src/App.vue";
import SubjectView from "../views/SubjectView.vue";
import QuestionView from "../views/QuestionView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"home",
      component:AppView,
    },
    {
      path:"/:subject",
      name:"subject",
      component:SubjectView,
      children: [
        {
          path:":question",
          name:"question",
          components:QuestionView
        }
      ]
    }
  ]
})

export default router;