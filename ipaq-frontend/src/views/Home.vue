<template>
  <div class="centeredbox" id="home" >
    <h3>Sign up</h3>
    <div id="fitbit-wrapper">
      <hr/>
      <div class="d-grid gap-2">
        <b-button class="fitbit" size="lg" v-on:click="onSubmitFitbit"><b-icon icon="smartwatch" aria-hidden="true"></b-icon>   Continue with Fitbit</b-button>
      </div>
      <i><p class="lg-btn-explain">Your Fitbit activity data will be shown during the questionnaire. This can help you with answering the questions.</p></i>
      <hr/>
    </div>
    <vue-form-generator 
      v-for="schema in filteredSchemas"
      :key="schema.id"
      :schema="schema.schema"
      :model="model"
      :options="formOptions" 
      @validated="onValidated">
    </vue-form-generator>
    <b-form-checkbox 
      id="agree-login-checkbox"
      v-model="agree" 
      value="accepted"
      unchecked-value="not_accepted">&nbsp;I agree that my data will be saved according to our <router-link to="/about"><a>policy</a></router-link>.</b-form-checkbox>
    <div class="d-grid gap-2">
    <!-- <div class="d-grid gap-2  col-6 mx-auto"> --> <!-- 50% width button -->
      <b-button v-if="userCanContinue" id="register-btn" variant="primary" size="lg" v-on:click="onSubmit">Continue</b-button>
      <b-button v-else variant="primary" id="register-btn" size="lg" disabled>Continue</b-button>
    </div>
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
export default class Home extends Vue {

  // COMPUTED PROPERTIES ----------------------------------------------------------------------------
  get filteredSchemas() {
    return this.schemas.filter((schema) => schema.showif(this.model));
  }
  
  // DATA ----------------------------------------------------------
  private validInput = false;

  private agree = "not_accepted";

  private formOptions: any = {
    validateAfterLoad: false,
    validateAfterChanged: true
  };

  private model = {
    formtype: "long"
  };

  private schemas = [
    {
      id: 1,
      schema: {
        fields: [
        {
          type: "input",
          inputType: "text",
          label: "First name",
          model: "first_name",
          attributes: {'autofocus':true},
          required: true
        },
        {
          type: "input",
          inputType: "text",
          label: "Last name",
          model: "last_name",
          required: true,
        },
        {
          type: "input",
          inputType: "number",
          label: "Age",
          model: "age",
          min: 0,
          max: 130,
          required: true,
          validator: ["number"]
        },
        {
          type: "radios",
          label: "Gender",
          model: "gender",
          values: ["M","F","X"],
          required: true,
        },
        {
          type: "input",
          inputType: "email",
          label: "Email",
          model: "email",
          required: true,
          validator: ['email']
        },
        {
          type: "input",
          inputType: "tel",
          pattern: /^\+?\d[\d ]{2,}$/,
          label: "Tel",
          model: "tel",
          required: true,
          validator: ["regexp"]
        },
        ]
      }, 
      showif(){ return true;}
      },
   { 
      id:2,
      showif: function(model){
    
  
        if (model.age !== undefined){
          return model.age < 70;
        }
        return false;
      },
      schema:{
        fields: [
        
          {
            type: "radios",
            label: "Choose form type:",
            model: "formtype",
            required: true,
            value:'long',
            values: [
              {name: "Long form", value: "long"},
              {name: "Short form", value: "short"}
            ]
          }
        ]
      }
    }
  ];


  // COMPUTED PROPERTIES -------------------------------------------
   get userCanContinue() {
    const inputs = [
      "first_name",
      "last_name",
      "age",
      "gender",
      "email",
      "tel",
    ];

    if (! this.validInput) {
      return false;
    }
    if (this.agree !== "accepted") {
      return false;
    }
    for (const input of inputs) {
      if (!(input in this.model)){
        return false;
      }
    }
    return true;
  }

  
  // METHODS -------------------------------------------------------
  private onValidated(isValid, errors) {
    this.validInput = isValid;
  }

  private onSubmitFitbit(){
     let user: LoginState = {
      first_name: "Kris",
      last_name: "Luyten",
      age: 38,
      email: "kris.luyten@uhasselt.be",
      tel: "+32586975632",
      gender: "M",
      formtype: "short"
    };
    
    store.commit('app/setUser', user);
    this.redirectToQuestionnaire(user);
  }

  private onSubmit(){
    if (this.model["age"] > 65) {
     // $("#app").attr('style', 'font-size: 200% !important');
      //$(".form-control").attr('style', 'font-size: 110% !important');
      $("#app").attr('style', 'zoom: 130%');
      $(".form-control").attr('style', 'zoom: 130%');
      //Set formtype to eldery
      this.model['formtype']='elderly';
      
    }
    // FILL STORE
    let user: LoginState = {
      first_name: this.model["first_name"],
      last_name: this.model["last_name"],
      age: this.model["age"],
      email: this.model["email"],
      tel: this.model["tel"],
      gender: this.model["gender"],
      formtype:this.model['formtype']
    };
    
    store.commit('app/setUser', user);
    this.redirectToQuestionnaire(user);

  }

  private redirectToQuestionnaire(user: LoginState) {
    this.$router.push({name: "Redirect"});
  }
}

</script>


<style scoped>
#home{  
    margin-bottom: 6rem;
}

#register-btn {
  margin-top: 16px !important;
}

#fitbit-wrapper{
  margin-top: 20px;
  margin-bottom: 20px;
}

.lg-btn-explain{
  font-size: 80%;
}

.btn.fitbit{
  background-color:#00b0b9 !important;
  border-color:#00b0b9 !important;
}

</style>