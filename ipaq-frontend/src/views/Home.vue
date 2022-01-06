<template>
  <div class="home">
    <vue-form-generator 
      :schema="schema"
      :model="model"
      :options="formOptions" 
      @validated="onValidated">
    </vue-form-generator>
    <b-button v-if="userCanContinue" variant="primary">Continue</b-button>
    <b-button v-else variant="primary" disabled>Continue</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueFormGenerator from "vue-form-generator";

@Component({
  components: {},
})
export default class Home extends Vue {
  // DATA ----------------------------------------------------------
  private validInput = false;

  private formOptions: any = {
    validateAfterLoad: false,
    validateAfterChanged: true
  };

  private model = {};

  private schema = {
    fields: [
      {
        type: "input",
        inputType: "text",
        label: "First name",
        model: "first_name",
        required: true,
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
      }
    ]
  };


  // COMPUTED PROPERTIES -------------------------------------------
   get userCanContinue() {
    const inputs = [
      "first_name",
      "last_name",
      "age",
      "gender",
      "email",
      "tel"
    ];

    if (! this.validInput) {
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

}
</script>
