<template>
<div>
  <b-row>
    <FormGroup :questionsSchema="currentQuestionsSchema" />
  </b-row>

  <b-row align-v="end" align-h="end">
    <b-col sm="auto" align-self="end">
      <b-button id="next-btn" variant="outline-primary" size="lg" >Next</b-button>
    </b-col>
  </b-row>

</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormGroup from "@/components/FormGroup/FormGroup.vue";


@Component({
  components: {
    FormGroup,
  },
})
export default class Questionnaire extends Vue {

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
            "label": "Do you currently have a job or do any unpaid work outside your home?",
            "name": "name",
            "validation": "required"
          },
          {
            "label": "Your email",
            "name": "email",
            "help": "Please use your student email address",
            "validation": "bail|required|email|ends_with:.edu",
            "validation-messages": {
              "ends_with": "Please use a .edu email address"
            }
          },
          {
            "label": "Student ID",
            "name": "student_id",
            "help": "Your 6 digit student ID (ex. ST-123421)",
            "placeholder": "ST-",
            "validation": "^required|matches:/^ST-[\\d]{6}$/",
            "validation-name": "Student ID"
          }
    ]
}
</script>

<style scoped>
  #next-btn {
      margin-top: 10rem;
  }
</style>
