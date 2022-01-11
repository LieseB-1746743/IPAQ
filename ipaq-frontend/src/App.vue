<template>
  <b-container id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/FAQ">FAQ</router-link> |
      <router-link to="/about">About</router-link> 
      -------------------
       <router-link to="/Qshort">IPAQ short</router-link> |
       <router-link to="/Qlong">IPAQ Long</router-link> |
        <router-link to="/Qelderly">IPAQ Elderly</router-link> 
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

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.questionnaire_next_btn {
 margin-bottom: 20px;
}
</style>
