import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class FormGroup extends Vue {
  // PROPS ------------------------------------------------------------------------------------------
  @Prop({ required: true }) readonly schemas: any[];
  @Prop({ required: true }) model: any;
  @Prop({ required: true }) part: any;
  @Prop({ required: true }) validatedfunct: any;
  @Prop({ required: true }) imageSource: string;
  @Prop({ required: true }) fitbitSource: string;

  //Methods
  getImgUrl(pic) {
    return require("../../assets/" + pic);
  }

  // DATA -------------------------------------------------------------------------------------------
  private formOptions: any = {
    validateAfterLoad: true,
    validateAfterChanged: true,
  };

  // COMPUTED PROPERTIES ----------------------------------------------------------------------------
  get filteredSchemas() {
    return this.schemas.filter((schema) => schema.showif(this.model));
  }
}
