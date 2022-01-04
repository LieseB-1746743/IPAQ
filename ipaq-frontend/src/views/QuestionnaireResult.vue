<template>
<div>
 <h1> IPAQ ANSWERS </h1>
 {{answersModel}}
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
  private answersModel:any;
  private answersBody:any;
  private results:any = {};

  // Methods -------------------------------------------------------

  handleAnswersToRightBackendScoringFormat(answersInModel){
    let answ = answersInModel.answers;

      let answerBody = JSON.stringify({
      "name": "Kris Luyten", // TODO
      "age": 42,              //TODO
      "sex": "M",             // TODO
      "answers": [
        {
          "activity": 0,
          "daysPerWeek": answ.vigorousDays,
          "hoursPerDay": answ.vigorousTimeHours,
          "minutesPerDay": answ.vigorousTimeMinutes
        },
        {
          "activity": 1,
          "daysPerWeek": answ.moderateDays,
          "hoursPerDay": answ.moderateTimeHours,
          "minutesPerDay": answ.moderateTimeMinutes
        },
        {
          "activity": 2,
          "daysPerWeek": answ.walkingDays,
          "hoursPerDay": answ.walkingTimeHours,
          "minutesPerDay": answ.walkingTimeMinutes
        },
        {
          "activity": 3,
          "hoursPerDay": answ.sittingTimeHours,
          "minutesPerDay": answ.sittingTimeMinutes
        }
      ]
    });

    return answerBody;
  }
  // FOR ..:8000/scoring/long endpoint (IPAQ long)
  /*{
    "name": "Kris Luyten",
    "age": 42,
    "sex": "M",
    "answers": [
        {
            "domain": 0,
            "answersmodel": [ 
                {
                    "activity": 0,
                    "daysPerWeek": 2,
                    "hoursPerDay": 5,
                    "minutesPerDay": 50
                },
                {
                    "activity": 1,
                    "daysPerWeek": 5,
                    "hoursPerDay": 5,
                    "minutesPerDay": 50
                },
                {
                    "activity": 2,
                    "daysPerWeek": 5,
                    "hoursPerDay": 0,
                    "minutesPerDay": 30
                }              

            ]
        },
        {
            "domain": 1,
            "answersmodel": [ 
                {
                    "activity": 4,
                    "daysPerWeek": 5,
                    "hoursPerDay": 0,
                    "minutesPerDay": 50
                },
                {
                    "activity": 5,
                    "daysPerWeek": 2,
                    "hoursPerDay": 0,
                    "minutesPerDay": 30
                },
                {
                    "activity": 2,
                    "daysPerWeek": 0,
                    "hoursPerDay": 0,
                    "minutesPerDay": 0
                }         

            ]
        },
        {
            "domain": 2,
            "answersmodel": [ 
                {
                    "activity": 0,
                    "daysPerWeek": 1,
                    "hoursPerDay": 3,
                    "minutesPerDay": 0
                },
                {
                    "activity": 1,
                    "daysPerWeek": 2,
                    "hoursPerDay": 0,
                    "minutesPerDay": 30
                },
                {
                    "activity": 6,
                    "daysPerWeek": 5,
                    "hoursPerDay": 0,
                    "minutesPerDay": 50
                }         

            ]
        },
        {
            "domain": 4,
            "answersmodel": [ 
                {
                    "activity": 4,
                    "daysPerWeek": 3,
                    "hoursPerDay": 1,
                    "minutesPerDay": 0
                },
                {
                    "activity": 0,
                    "daysPerWeek": 2,
                    "hoursPerDay": 0,
                    "minutesPerDay": 30
                },
                {
                    "activity": 1,
                    "daysPerWeek": 5,
                    "hoursPerDay": 0,
                    "minutesPerDay": 15
                }         

            ]
        },
        {
            "domain": 3,
            "answersmodel": [ 
                {
                    "activity": 3,
                    "daysPerWeek": 5,
                    "hoursPerDay": 5,
                    "minutesPerDay": 56
                },
                {
                    "activity": 3,
                    "daysPerWeek": 2,
                    "hoursPerDay": 8,
                    "minutesPerDay": 30
                }   

            ]
        }
       
    ]
}*/
    created(){
      this.answersModel = this.getParams()
      this.answersBody =  this.handleAnswersToRightBackendScoringFormat(this.answersModel);
  }

  getParams () {
    console.log(this.$route.params);
      return this.$route.params;
      }

  async mounted(){
    
    // Send IPAQ results to backend
    // get IPAQ scores from backend
     await this.getIPAQscores();

  }

  
   async getIPAQscores() {
      await axios({
        method: 'post',
        url: `http://localhost:8000/scoring`,
        headers: { 
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'accept':'*/*'
        },
        data:this.answersBody
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
