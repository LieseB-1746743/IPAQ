import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class FormGroup extends Vue {
    // PROPS ------------------------------------------------------------------------------------------
    @Prop({required: true}) readonly questionsSchema: any[];

    // DATA -------------------------------------------------------------------------------------------
    private currentAnswers: any = {};

}
