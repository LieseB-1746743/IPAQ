<template>
  <div>
    <p>Thank you for filling in this survey.</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import router from "../router";
import axios from "axios";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

@Component({
  components: {},
})
export default class QuestionnaireResultShort extends Vue {
  // Data ----------------------------------------------------------
  private answersModel: any;
  private answersBody: any;
  private results: any = {};

  // Methods -------------------------------------------------------

  handleAnswersToRightBackendScoringFormat(answersInModel) {
    let answ = answersInModel.answers;

    let answerBody = JSON.stringify({
      name: "Kris Luyten", // TODO
      age: 42, //TODO
      sex: "M", // TODO
      answers: [
        {
          activity: 0,
          daysPerWeek: answ.vigorousDays,
          hoursPerDay: answ.vigorousTimeHours,
          minutesPerDay: answ.vigorousTimeMinutes,
        },
        {
          activity: 1,
          daysPerWeek: answ.moderateDays,
          hoursPerDay: answ.moderateTimeHours,
          minutesPerDay: answ.moderateTimeMinutes,
        },
        {
          activity: 2,
          daysPerWeek: answ.walkingDays,
          hoursPerDay: answ.walkingTimeHours,
          minutesPerDay: answ.walkingTimeMinutes,
        },
        {
          activity: 3,
          hoursPerDay: answ.sittingTimeHours,
          minutesPerDay: answ.sittingTimeMinutes,
        },
      ],
    });

    return answerBody;
  }

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
  }

  async getIPAQscores() {
    await axios({
      method: "post",
      url: `http://localhost:8000/scoring`,
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
