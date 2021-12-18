<template>
<div>
 <h1> IPAQ RESULTS </h1>
 <Chatbot/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Chatbot from "../components/Chatbot.vue";


@Component({
  components: {
    Chatbot
  },
})

export default class Questionnaire extends Vue {
  // Data ----------------------------------------------------------
  private results:any;

  // Methods -------------------------------------------------------
  
}
</script>

<style scoped>

</style>
