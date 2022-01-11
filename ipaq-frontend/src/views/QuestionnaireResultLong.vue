<template>
<div>
  <p>Thank you for filling in this survey.</p>
   <b-button v-if="!showResults" variant="outline-primary" size="medium" v-on:click="showResultsClicked">Show my results</b-button>
   <b-button v-if="showResults" variant="outline-secondary" size="medium" v-on:click="hideResultsClicked">Hide my results</b-button>
   <ResultOverview v-show="showResults" :results="this.results" :IPAQlong="false" :user="this.user" />
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ResultOverview from "../components/ResultOverview/ResultOverview.vue";
import axios from 'axios';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
import LoginState from "../store/modules/types";
import store from '../store/index';

@Component({
  components: {
    ResultOverview
  },
})
export default class QuestionnaireResultLong extends Vue {
  // Data ----------------------------------------------------------
  private answersModel:any;
  private answersBody:any;
  private results:any = {};
  private showResults = false;
  private user:LoginState;

  // Methods -------------------------------------------------------

  showResultsClicked(){this.showResults=true;}
  hideResultsClicked(){this.showResults=false;}

  handleAnswersToRightBackendScoringFormat(answersInModel){
    let answ = answersInModel.answers;

    let answerBody = JSON.stringify({
      name: "Kris Luyten",
      age: 42,
      sex: "M",
      answers: [
        {
          domain: 0,
          answersmodel: [
            {
              activity: 0,
              daysPerWeek: answ.jobVigorousDays,
              hoursPerDay: answ.jobVigorousTimeHours,
              minutesPerDay: answ.jobVigorousTimeMinutes,
            },
            {
              activity: 1,
              daysPerWeek: answ.jobModerateDays,
              hoursPerDay: answ.jobModerateTimeHours,
              minutesPerDay: answ.jobModerateTimeMinutes,
            },
            {
              activity: 2,
              daysPerWeek: answ.jobWalkingDays,
              hoursPerDay: answ.jobWalkingTimeHours,
              minutesPerDay: answ.jobWalkingTimeMinutes,
            },
          ],
        },
        {
          domain: 1,
          answersmodel: [
            {
              activity: 4,
              daysPerWeek: answ.transTravelDays,
              hoursPerDay: answ.transTravelTimeHours,
              minutesPerDay: answ.transTravelTimeMinutes,
            },
            {
              activity: 5,
              daysPerWeek: answ.transBicycleDays,
              hoursPerDay: answ.transBicycleTimeHours,
              minutesPerDay: answ.transBicycleTimeMinutes,
            },
            {
              activity: 2,
              daysPerWeek: answ.transWalkingDays,
              hoursPerDay: answ.transWalkingTimeHours,
              minutesPerDay: answ.transWalkingTimeMinutes,
            },
          ],
        },
        {
          domain: 2,
          answersmodel: [
            {
              activity: 0,
              daysPerWeek: answ.gardenVigorousDays,
              hoursPerDay: answ.gardenVigorousTimeHours,
              minutesPerDay: answ.gardenVigorousTimeMinutes,
            },
            {
              activity: 1,
              daysPerWeek: answ.gardenModerateDays,
              hoursPerDay: answ.gardenModerateTimeHours,
              minutesPerDay: answ.gardenModerateTimeMinutes,
            },
            {
              activity: 6,
              daysPerWeek: answ.insideModerateDays,
              hoursPerDay: answ.insideModerateTimeHours,
              minutesPerDay: answ.insideModerateTimeMinutes,
            },
          ],
        },
        {
          domain: 4,
          answersmodel: [
            {
              activity: 4,
              daysPerWeek: answ.leisureWalkingDays,
              hoursPerDay: answ.leisureWalkingTimeHours,
              minutesPerDay: answ.leisureWalkingTimeMinutes,
            },
            {
              activity: 0,
              daysPerWeek: answ.leisureVigorousDays,
              hoursPerDay: answ.leisureVigorousTimeHours,
              minutesPerDay: answ.leisureVigorousTimeMinutes,
            },
            {
              activity: 1,
              daysPerWeek: answ.leisureModerateDays,
              hoursPerDay: answ.leisureModerateTimeHours,
              minutesPerDay: answ.leisureModerateTimeMinutes,
            },
          ],
        },
        {
          domain: 3,
          answersmodel: [
            {
              activity: 3,
              daysPerWeek: 5,
              hoursPerDay: answ.sittingWeekdayTimeHours,
              minutesPerDay: answ.sittingWeekdayTimeMinutes,
            },
            {
              activity: 3,
              daysPerWeek: 2,
              hoursPerDay: answ.sittingWeekenddayTimeHours,
              minutesPerDay: answ.sittingWeekenddayTimeMinutes,
            },
          ],
        },
      ],
    });

    return answerBody;
  }
  // FOR ..:8000/scoring/long endpoint (IPAQ long)
  /*
}*/
  created() {
    this.answersModel = this.getParams();
    this.answersBody = this.handleAnswersToRightBackendScoringFormat(
      this.answersModel
    );
  }

  getParams() {
    console.log(this.$route.params);
    return this.$route.params;
  }

  async mounted() {
    // Send IPAQ results to backend
    // get IPAQ scores from backend
    await this.getIPAQscores();
    this.user = store.getters['app/getUser'];
  }

  async getIPAQscores() {
    await axios({
      method: "post",
      url: `http://localhost:8000/scoring/long`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        accept: "*/*",
      },
      data: this.answersBody,
    })
      .then((response) => {
        console.log("reponse");
        console.log(JSON.parse(JSON.stringify(response.data)));
        this.results = JSON.parse(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("error");
      });
  }
}
</script>

<style scoped></style>
