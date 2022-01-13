<template>
  <div class="centeredbox" v-if="user.first_name !== ''">
    <h4 style="margin-bottom: 16px;" >Hi {{user.first_name}}!</h4>
    <div v-if="user.age >= 70">
        <p>
            Thank you for filling in the registration form.
            Because you are {{ user.age }} years old, you have to fill in the questionnaire for persons older than 70. 
            At the end of this questionnaire, you can verify your answers and change them if necessary.
            <br/><br/>
            Please click continue to start the questionnaire.
        </p>
    </div>
    <div v-else>
        <p v-if="user.formtype === 'short'">
            Thank you for filling in the registration form.
            You chose tho fill in the short version of the IPAQ questionnaire.
            At the end of this questionnaire, you can verify your answers and change them if necessary.
            <br/><br/>
            Please click continue to start the short questionnaire.
        </p>
        <p v-else>
            Thank you for filling in the registration form.
            You chose tho fill in the long version of the IPAQ questionnaire.
            At the end of this questionnaire, you can verify your answers and change them if necessary.
            <br/><br/>
            Please click continue to start the short questionnaire.
        </p>
    </div>
    
    <div class="d-grid gap-2">
        <b-button variant="primary" size="lg"  v-on:click="onContinue">Continue</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import LoginState from "../store/modules/types";
import store from '../store/index';
// import router from "../router";


@Component({
  components: {},
})
export default class Redirect extends Vue {
    // PROPS ---------------------------------------------------------

    // DATA ----------------------------------------------------------

    private user :LoginState = {
        first_name: "",
        last_name: "",
        age: 0,
        email: "",
        tel: "",
        gender: "",
        formtype: ""
    };
    // COMPUTED PROPERTIES -------------------------------------------

    // METHODS -------------------------------------------------------

    private mounted(){
        this.user = store.getters['app/getUser'];
    }

    private onContinue(){    
        this.redirectToQuestionnaire(this.user);
    }

    private redirectToQuestionnaire(user: LoginState) {
    if (user.age >= 70) {
        this.$router.push({name: "IPAQ Questionaire Elderly"});
    } else {
        if (this.user.formtype == "long") {
        this.$router.push({name: "IPAQ Questionaire Long"});
        } 
        else {
        this.$router.push({name: "IPAQ Questionaire Short"});
        }
    }
    }
}

</script>

<style scoped>
</style>