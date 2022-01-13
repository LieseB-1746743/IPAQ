<template>
  <div>
    <!---<FormGroup v-for="page in pages" :key="page.pageID" :schemas="page.schemas" :model="page.model" />-->
    <div v-if="!submit">
      <FormGroup
        :schemas="currentPage.schemas"
        :model="pages[0].model"
        :part="currentPart"
        :validatedfunct="onValidated"
        :imageSource="imagesWithPageAsIndex[currentpageIndex]"
        :fitbitSource="fitbitWithPageAsIndex[currentpageIndex]"
      />
    </div>
    <div v-if="submit">
      <h1>Answers</h1>
      <AnswerOverview
        v-for="page in pages"
        :key="page.pageID"
        :schemas="page.schemas"
        :model="pages[0].model"
        :parts="parts"
        :partID="page.pageID"
      />
    </div>

    <b-row align-v="end" align-h="end">
      <b-col sm="auto" align-self="end">
        <!-- HELP :p krijg em nie links -->
        <b-button
          align-self="start"
          align-h="start"
          v-if="submit"
          class="change-btn"
          variant="outline-secondary"
          size="lg"
          v-on:click="ChangeBtnClicked"
          >Change</b-button
        >
        <b-button
          class="questionnaire_next_btn next-btn" 
          v-if="!submit && pageIsValidated"
          variant="outline-primary"
          size="lg"
          v-on:click="NextBtnClicked"
          >Next</b-button
        >
        <b-button
          class="questionnaire_next_btn next-btn" 
          v-if="!submit && !pageIsValidated"
          variant="outline-secondary"
          size="lg"
          v-on:click="NextBtnClicked"
          disabled
          >Next</b-button
        >
        <b-button
          v-if="submit"
          class="submit-btn"
          variant="outline-primary"
          size="lg"
          v-on:click="SubmitBtnClicked"
          >Submit</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormGroup from "../components/FormGroup/FormGroup.vue";
import AnswerOverview from "../components/AnswerOverview/AnswerOverview.vue";
import IPAQ_short from "../utils/IPAQ_English_self-admin_short";

@Component({
  components: {
    FormGroup,
    AnswerOverview,
  },
})
export default class Questionnaire extends Vue {
  // Data ----------------------------------------------------------
  private pages = IPAQ_short.pages;
  private parts = IPAQ_short.parts;
  private currentPage = IPAQ_short.pages[0];
  private currentPart = IPAQ_short.parts[0];
  private currentpageIndex = 0;
  private submit = false;
  private pageIsValidated = true;
  private imagesWithPageAsIndex = ["", "", "walking.jpg", "sitting.png", ""];
  private fitbitWithPageAsIndex = ["fitbitAct.png", "fitbitAct.png", "walkStats.png", "",""];

  // Computed properties -------------------------------------------

  // Methods -------------------------------------------------------

  // is called whenever the form does validation
  onValidated(isValid, errors) {
    console.log("Validation result: ", isValid, ", Errors:", errors);
    this.pageIsValidated = isValid;
  }
  NextBtnClicked() {
    console.log("CLICK nxt Btn");

    // Only proceed when form is valid
    if (!this.pageIsValidated) {
      alert("Form is not valid! Please correct the invalid answers.");
      return;
    }

    if (this.currentpageIndex < Object.keys(this.pages).length) {
      this.currentpageIndex += 1;

      if (this.currentpageIndex >= Object.keys(this.pages).length) {
        this.submit = true;
      }
    }

    this.currentPage = this.pages[this.currentpageIndex];
    this.currentPart = this.parts[this.currentpageIndex];
    console.log("CurrentIndex");
    console.log(this.currentpageIndex);
  }

  SubmitBtnClicked() {
    this.$router.push({
      name: "Short IPAQ Result",
      params: { answers: this.pages[0].model },
    });
  }

  ChangeBtnClicked() {
    alert("Change answers MOCK");
  }
}
</script>

<style scoped>
/* to create space between HOURS and MINUTES INPUT => does not work */
#hours-per-days {
  padding-right: 5rem;
  color: red;
  background-color: red;
}
</style>
