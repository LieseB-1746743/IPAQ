<template>
<div>
  <p>Your IPAQ results</p>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from 'axios';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

@Component({
  components: {
  },
})


export default class QuestionnaireResultOverview extends Vue {
  // Data ----------------------------------------------------------
  private results:any = {};

  // Methods -------------------------------------------------------

 
    created(){
        this.results = this.getParams()
  }

  getParams () {
    console.log(this.$route.params);
      return this.$route.params;
      }

}
  

</script>

<style scoped>

</style>
