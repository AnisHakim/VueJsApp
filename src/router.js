import Router from "vue-router";
import Vue from "vue";
Vue.use(Router);


import addPerson from './components/CreatePerson.vue';
import persons from './components/CardPersonsList.vue';
import editPerson from './components/UpdatePerson.vue';

export default new Router({
  mode: "history",  routes: [
    {
      path: "/",
      name: 'all_persons',
      component: persons
    },
    {
      path: "/persons/create",
      name: 'create_person',
      component: addPerson
    },
    {
      path: "/persons/update",
      name: 'edit_person',
      component: editPerson
    }
   
  ]})


