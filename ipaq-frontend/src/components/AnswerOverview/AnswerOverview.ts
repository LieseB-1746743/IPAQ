import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class AnswerOverview extends Vue {
  // PROPS ------------------------------------------------------------------------------------------

  @Prop({ required: true }) readonly schemas: any[]; // Contains the questions ONE PAGE
  @Prop({ required: true }) model: any; // Contains the
  @Prop({ required: true }) parts: any; // Contains the parts
  @Prop({ required: true }) partID: any; // Contains the parts

  // DATA -------------------------------------------------------------------------------------------

  private formOverview: any = [];
  private questionAnswerPairs: any = [];
  private partTitle = "";

  // LIFECYCLE HOOKS --------------------------------------------------------------------------------

  mounted() {
    console.log(this.schemas);
    this.partTitle = String(this.parts[this.partID - 1].ipaqPartTitle);
    for (const schema of this.schemas) {
      for (const field of schema.schema.fields) {
        if (this.model != undefined) {
          const answer = this.model[field.model];
          if (answer != undefined) {
            const question = String(field.label);
            this.questionAnswerPairs.push([question, answer]);
          }
        }
      }

      if (schema.schema.groups !== undefined) {
        let answerDefined = true;
        let answer = "";
        for (const field of schema.schema.groups[0].fields) {
          const label = field.label;
          const value = this.model[field.model];
          if (value === undefined) {
            answerDefined = false;
          }
          answer += `${label}: ${value}, `;
        }
        const question = String(schema.schema.fields[0].label);
        if (answerDefined)
          this.questionAnswerPairs.push([question, answer.slice(0, -2)]);
      }
    }
  }

  // COMPUTED PROPERTIES ----------------------------------------------------------------------------
}
