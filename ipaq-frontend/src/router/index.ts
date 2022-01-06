import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Questionnaire from '../views/Questionnaire.vue'
import QuestionnaireElderly from '../views/QuestionnaireElderly.vue'
import QuestionnaireLong from '../views/QuestionnaireLong.vue'
import QuestionnaireResultShort from '../views/QuestionnaireResultShort.vue'
import QuestionnaireResultLong from '../views/QuestionnaireResultLong.vue'
import QuestionnaireResultOverview from  '../views/QuestionnaireResultOverview.vue'
import FAQ from  '../views/FAQ.vue'

let result:any;
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Qshort",
    name: "IPAQ Questionaire Short",
    component: Questionnaire,
  },
  {
    path: "/Qelderly",
    name: "IPAQ Questionaire Elderly",
    component: QuestionnaireElderly,
  },
  {
    path: "/Qlong",
    name: "IPAQ Questionaire Long",
    component: QuestionnaireLong,
  },
  {
    path: "/shortQresult",
    name: "Short IPAQ Result", 
    props: route => {
      return route.params //  '[object Object]'
   },
    component: QuestionnaireResultShort,
  },
  {
    path: "/longQresult",
    name: "Long IPAQ Result", 
    props: route => {
      return route.params //  '[object Object]'
   },
    component: QuestionnaireResultLong,
  },
  {
    path: "/FAQ",
    name: "IPAQ - FAQ",
    component: FAQ,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
