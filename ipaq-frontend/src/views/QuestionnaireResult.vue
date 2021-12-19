<template>
<div>
 <h1> IPAQ ANSWERS </h1>
 {{answers}}
 <h1> IPAQ RESULTS </h1>
 {{results}}
 <Chatbot/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Chatbot from "../components/Chatbot.vue";
import router from '../router';
import axios from 'axios';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

@Component({
  components: {
    Chatbot
  },
})


export default class Questionnaire extends Vue {
  // Data ----------------------------------------------------------
  private answers:any;
  private results:any;

   private data = JSON.stringify({
  "name": "Kris Luyten",
  "age": 42,
  "sex": "M",
  "answers": [
    {
      "activity": 0,
      "daysPerWeek": 2,
      "hoursPerDay": 5,
      "minutesPerDay": 50
    },
    {
      "activity": 1,
      "daysPerWeek": 2,
      "hoursPerDay": 5,
      "minutesPerDay": 50
    },
    {
      "activity": 2,
      "daysPerWeek": 2,
      "hoursPerDay": 5,
      "minutesPerDay": 50
    },
    {
      "activity": 3,
      "hoursPerDay": 5,
      "minutesPerDay": 50
    }
  ]
});


  // Methods -------------------------------------------------------

  handleAnswersToRightBackendScoringFormat(answers){

    return answers;
  }
    created(){
     this.answers = this.getParams()
  }

  getParams () {
    console.log(this.$route.params);
      return this.$route.params;
      }

  async mounted(){
  
    // Send IPAQ results to backend
    // get IPAQ scores from backend
    
    console.log( JSON.parse(this.data));
    this.results=this.getIPAQscores();

  }
  
   async getIPAQscores() {
      await axios({
        method: 'GET',
        url: `http://localhost:8000/scoring`,
        headers: { 
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'accept':'*/*'
        },
        data:this.data
      }).then((response) => { 
        console.log("reponse");
        console.log(JSON.parse(JSON.stringify(response.data)));
        this.results = JSON.parse(JSON.stringify(response.data));
      }).catch((error) => {
        console.log("error");
      });
    }

     
}
</script>

<style scoped>

</style>
