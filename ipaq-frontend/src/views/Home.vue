<template>
  <div class="home">
    <FormGroup/>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import FormGroup from "@/components/FormGroup/FormGroup.vue";

@Component({
  components: {
    HelloWorld,
    FormGroup,
  },
})
export default class Home extends Vue {}
</script>
