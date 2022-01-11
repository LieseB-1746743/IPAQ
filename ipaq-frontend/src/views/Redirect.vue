<template>
  <div v-if="user.first_name !== ''">
    <p>Hi {{user.first_name}}</p>
    <div v-if="user.age >= 70">
        <p>Because you are {{ user.age }} years old, you have to fill in the questionnaire for persons older than 70. Please click continue to start the questionnaire.</p>
    </div>
    <div v-else>
        <p v-if="user.formtype === 'short'">Because you chose to fill in the short form, the IPAQ short questionnaire will start when you click continue.</p>
        <p v-else>Because you chose to fill in the long form, the IPAQ long questionnaire will start when you click continue.</p>
    </div>
    <b-button variant="primary" v-on:click="onContinue">Continue</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import $ from "jquery";

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