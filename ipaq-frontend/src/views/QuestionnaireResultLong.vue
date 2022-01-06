<template>
<div>
  <p>Thank you for filling in this survey.</p>
  <!--<h1> IPAQ RESULTS </h1>
  {{results}}-->
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


export default class QuestionnaireResultLong extends Vue {
  // Data ----------------------------------------------------------
  private answersModel:any;
  private answersBody:any;
  private results:any = {};

  // Methods -------------------------------------------------------

  handleAnswersToRightBackendScoringFormat(answersInModel){
    let answ = answersInModel.answers;

      let answerBody = JSON.stringify(
        {
          "name": "Kris Luyten",
          "age": 42,
          "sex": "M",
          "answers": [
              {
                  "domain": 0,
                  "answersmodel": [ 
                      {
                          "activity": 0,
                          "daysPerWeek": answ.jobVigorousDays,
                          "hoursPerDay": answ.jobVigorousTimeHours,
                          "minutesPerDay": answ.jobVigorousTimeMinutes
                      },
                      {
                          "activity": 1,
                          "daysPerWeek": answ.jobModerateDays,
                          "hoursPerDay": answ.jobModerateTimeHours,
                          "minutesPerDay": answ.jobModerateTimeMinutes
                      },
                      {
                          "activity": 2,
                          "daysPerWeek": answ.jobWalkingDays,
                          "hoursPerDay": answ.jobWalkingTimeHours,
                          "minutesPerDay": answ.jobWalkingTimeMinutes
                      }              

                  ]
              },
              {
                  "domain": 1,
                  "answersmodel": [ 
                      {
                          "activity": 4,
                          "daysPerWeek": answ.transTravelDays,
                          "hoursPerDay": answ.transTravelTimeHours,
                          "minutesPerDay": answ.transTravelTimeMinutes
                      },
                      {
                          "activity": 5,
                          "daysPerWeek": answ.transBicycleDays,
                          "hoursPerDay": answ.transBicycleTimeHours,
                          "minutesPerDay": answ.transBicycleTimeMinutes
                      },
                      {
                          "activity": 2,
                          "daysPerWeek": answ.transWalkingDays,
                          "hoursPerDay": answ.transWalkingTimeHours,
                          "minutesPerDay": answ.transWalkingTimeMinutes
                      }         

                  ]
              },
              {
                  "domain": 2,
                  "answersmodel": [ 
                      {
                          "activity": 0,
                          "daysPerWeek": answ.gardenVigorousDays,
                          "hoursPerDay": answ.gardenVigorousTimeHours,
                          "minutesPerDay": answ.gardenVigorousTimeMinutes
                      },
                      {
                          "activity": 1,
                          "daysPerWeek": answ.gardenModerateDays,
                          "hoursPerDay": answ.gardenModerateTimeHours,
                          "minutesPerDay": answ.gardenModerateTimeMinutes
                      },
                      {
                          "activity": 6,
                          "daysPerWeek": answ.insideModerateDays,
                          "hoursPerDay": answ.insideModerateTimeHours,
                          "minutesPerDay": answ.insideModerateTimeMinutes
                      }         

                  ]
              },
              {
                  "domain": 4,
                  "answersmodel": [ 
                      {
                          "activity": 4,
                          "daysPerWeek": answ.leisureWalkingDays,
                          "hoursPerDay": answ.leisureWalkingTimeHours,
                          "minutesPerDay": answ.leisureWalkingTimeMinutes
                      },
                      {
                          "activity": 0,
                          "daysPerWeek": answ.leisureVigorousDays,
                          "hoursPerDay": answ.leisureVigorousTimeHours,
                          "minutesPerDay": answ.leisureVigorousTimeMinutes
                      },
                      {
                          "activity": 1,
                          "daysPerWeek": answ.leisureModerateDays,
                          "hoursPerDay": answ.leisureModerateTimeHours,
                          "minutesPerDay": answ.leisureModerateTimeMinutes
                      }         

                  ]
              },
              {
                  "domain": 3,
                  "answersmodel": [ 
                      {
                          "activity": 3,
                          "daysPerWeek": 5,
                          "hoursPerDay": answ.sittingWeekdayTimeHours,
                          "minutesPerDay": answ.sittingWeekdayTimeMinutes
                      },
                      {
                          "activity": 3,
                          "daysPerWeek": 2,
                          "hoursPerDay": answ.sittingWeekenddayTimeHours,
                          "minutesPerDay": answ.sittingWeekenddayTimeMinutes
                      }   

                  ]
              }
       
     ]
 });

    return answerBody;
  }
  // FOR ..:8000/scoring/long endpoint (IPAQ long)
  /*
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
        url: `http://localhost:8000/scoring/long`,
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
