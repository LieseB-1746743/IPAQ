<template>
<div>
  <!---<FormGroup v-for="page in pages" :key="page.pageID" :schemas="page.schemas" :model="page.model" />-->
 <div v-if="!submit" >
    <FormGroup  :schemas="currentPage.schemas" :model="pages[0].model" :part="currentPart"/>
  </div>
  <div v-if="submit" >
    <h1> ANSWER OVERVIEW </h1>
    <AnswerOverview  v-for="page in pages" :key="page.pageID" :schemas="page.schemas" :model="pages[0].model" />
  </div>
   
  <b-row align-v="end" align-h="end">
    <b-col sm="auto" align-self="end" >
      <!-- HELP :p krijg em nie links -->
      <b-button align-self="start" align-h="start" v-if="submit" id="change-btn" variant="outline-secondary" size="lg" v-on:click="ChangeBtnClicked" >Change</b-button>
      <b-button v-if="!submit" id="next-btn" variant="outline-primary" size="lg" v-on:click="NextBtnClicked" >Next</b-button>
      <b-button v-if="submit" id="submit-btn" variant="outline-primary" size="lg" v-on:click="SubmitBtnClicked" >Submit</b-button>
    </b-col>   
  </b-row>
 <Chatbot/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormGroup from "../components/FormGroup/FormGroup.vue";
import AnswerOverview from "../components/AnswerOverview/AnswerOverview.vue";
import Chatbot from "../components/Chatbot.vue";
import IPAQ_short from "../utils/IPAQ_English_self-admin_short";
import router from '../router';

@Component({
  components: {
    FormGroup,
    AnswerOverview,
    Chatbot
  },
})

export default class Questionnaire extends Vue {
  // Data ----------------------------------------------------------
  private pages = IPAQ_short.pages;
  private parts = IPAQ_short.parts;
  private currentPage = IPAQ_short.pages[0];
  private currentPart =  IPAQ_short.parts[0];
  private currentpageIndex = 0;
  private submit = false;

  // Computed properties -------------------------------------------

  // Methods -------------------------------------------------------
  NextBtnClicked(){
    console.log("CLICK nxt Btn");
    
    if(this.currentpageIndex< Object.keys(this.pages).length){
         this.currentpageIndex+=1;

         if(this.currentpageIndex>=Object.keys(this.pages).length){
            this.submit = true;
         }
    }

    this.currentPage=this.pages[this.currentpageIndex];
    this.currentPart=this.parts[this.currentpageIndex];
    console.log("CurrentIndex");
    console.log(this.currentpageIndex);
  }

  SubmitBtnClicked(){
    this.$router.push({name:'IPAQ Result', params: {answers:this.pages[0].model}});

  }

  ChangeBtnClicked(){
    alert("Change answers MOCK");
  }
}
</script>

<style scoped>
  #next-btn {
      margin-top: 10rem;
  }
  #change-btn {
      margin-right: 2rem;
  }
</style>
