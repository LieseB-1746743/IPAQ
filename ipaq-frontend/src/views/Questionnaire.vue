<template>
<div>
  <b-row>
    <FormGroup :questionsSchema="currentQuestionsSchema" />
  </b-row>
     
    
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
import FormGroup from "@/components/FormGroup/FormGroup.vue";
import Chatbot from "@/components/Chatbot.vue";



@Component({
  components: {
    FormGroup,
    Chatbot
  },
})

export default class Questionnaire extends Vue {

   NextBtnClicked(){
      console.log("CLICK nxt Btn");
      

      
}
    //TODO: activate validation when clicking NEXT
    // Temp here
    

    // Questions to display
    // Opstellen voorbeeld json formaat
    private currentQuestions: any[] = [
        {
            questionId:0,
            type: "ENUM.AGE",
            inputType:"",
            question:"QUESTION",

        }
    ]
    
    //Values
    private currentAnswers: any = {};
    // Generating forms schema
    private currentQuestionsSchema: any[] = [
          {
            "component": "h3",
            "children": "Student registration"
          },
          {
            "name":"jobQ",
            "label": "Do you currently have a job or do any unpaid work outside your home?",
            "type": "radio",
            "options":{"yes":"YES","no":"NO"},
            "validation": "required"
          },
          {
            "name":"vigorous7Q",
            "label": "During the last 7 days, on how many days did you do vigorous physical activities like heavy lifting, digging, heavy construction, or climbing up stairs <b>as part of your work</b>?\n (enter does not work) Think about only those physical activities that you did for at least 10 minutes at a time.",
            "type":"select",
            "value": "0",
            "options": {
            "0": "0 days",
            "1": "1 day",
            "2": "2 days",
            "3": "3 days",
            "4": "4 days",
            "5": "5 days",
            "6": "6 days",
            "7": "7 days",
            },
            "validation": "required",
           
          },
          {
            "name": "vigorousTimeQ",
            "label": "How much time did you usually spend on one of those days doing vigorous physical activities as part of your work?",
            "type":"time",
            "value":"00:00"
           
          }
    ]
}


</script>

<style scoped>
  #next-btn {
      margin-top: 10rem;
  }
</style>
