import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';


@Component
export default class AnswerOverview extends Vue {
    // PROPS ------------------------------------------------------------------------------------------
    @Prop({required: true}) readonly schemas: any[]; // Contains the questions
    @Prop({required: true}) model: any; // Contains the answers
    

    // DATA -------------------------------------------------------------------------------------------
    
    
    // COMPUTED PROPERTIES ----------------------------------------------------------------------------
  
}
