<template>
<div>
  <!---<FormGroup v-for="page in pages" :key="page.pageID" :schemas="page.schemas" :model="page.model" />-->

   <FormGroup  :schemas="currentPage.schemas" :model="pages[0].model" />

  <!--<b-row>
    <FormGroup :schemas="schemas" :model="model" />
  </b-row>-->
     
    
  <b-row align-v="end" align-h="end">
    <b-col sm="auto" align-self="end">
      <b-button id="next-btn" variant="outline-primary" size="lg" v-on:click="NextBtnClicked" >Next</b-button>
    </b-col>
   
  </b-row>
 <Chatbot/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormGroup from "../components/FormGroup/FormGroup.vue";
import Chatbot from "../components/Chatbot.vue";
import pages from "../utils/IPAQ_English_self-admin_short";

@Component({
  components: {
    FormGroup,
    Chatbot
  },
})

export default class Questionnaire extends Vue {
  // Data ----------------------------------------------------------
  private pages = pages;
  private currentPage = pages[0]
  private currentpageIndex = 0;

  // Computed properties -------------------------------------------

  // Methods -------------------------------------------------------
  NextBtnClicked(){
    console.log("CLICK nxt Btn");
    
    if(this.currentpageIndex< Object.keys(pages).length-1){
         this.currentpageIndex+=1;
    }
 
    this.currentPage=pages[this.currentpageIndex];
    console.log("CurrentIndex");
    console.log(this.currentpageIndex);
  }
}
</script>

<style scoped>
  #next-btn {
      margin-top: 10rem;
  }
</style>
