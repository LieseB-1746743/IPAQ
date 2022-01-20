<template>
  <b-container id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/FAQ">FAQ</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <Chatbot />
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import Chatbot from "../src/components/Chatbot.vue";

Vue.component("Chatbot", Chatbot);

export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media screen and (min-width: 768px) {
  .centeredbox {
    width: 50%;
    margin: auto;
  }
}

.btn-primary {
  background-color: #4fc08d !important;
  color: #fff !important;
  border-color: #4fc08d !important;
}

.btn-primary.disabled{
  background-color: #F1F1F2 !important;
  color:#939C9E !important;
  pointer-events: none;
  border-color: #F1F1F2 !important;
}

.btn-outline-primary {
  background-color: #fff !important;
  color: #42b983 !important;
  border-color: #4fc08d !important;
}

.btn-outline-primary:hover {
  color: #fff !important;
  background-color: #4fc08d !important;
  border-color: #4fc08d !important;
}

.btn-outline-primary:focus {
  box-shadow: 0 0 0.25rem #2c3e50 !important;
}

.questionnaire_next_btn {
 margin-bottom: 20px;
}

.next-btn {
  margin-top: 0rem;
}

.change-btn {
  margin-right: 2rem;
  margin-bottom: 2rem;
}

.submit-btn {
  margin-right: 2rem;
  margin-bottom: 2rem;
}

</style>
