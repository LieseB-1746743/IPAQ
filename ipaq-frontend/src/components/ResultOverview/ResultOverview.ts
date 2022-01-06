import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';


@Component
export default class ResultOverview extends Vue {
    // PROPS ------------------------------------------------------------------------------------------

    @Prop({required: true}) results: any; // Contains the IPAQ results
    @Prop({required: true}) IPAQlong: boolean; // Contains the IPAQ results

    

    // DATA -------------------------------------------------------------------------------------------

    private resultOverview:any = [];
    private questionAnswerPairs: any = [];
    private partTitle = "";

 
    // LIFECYCLE HOOKS --------------------------------------------------------------------------------

    mounted(){
       return;
    }    

    // COMPUTED PROPERTIES ----------------------------------------------------------------------------
  
}
