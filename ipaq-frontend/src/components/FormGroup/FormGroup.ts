import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import JQuery from 'jquery';

@Component
export default class FormGroup extends Vue {
    // PROPS ------------------------------------------------------------------------------------------
    //@Prop({required: true}) readonly questionsSchema: any[];

    // DATA -------------------------------------------------------------------------------------------
    private model: any = {
        "vigorousDays":0 ,
    }

    get filteredSchemas() {
            return this.schemas.filter(schema => schema.showif);
    }


    private schemas: any = [
        {
            id: 1,
            schema: {
                fields: [
                {
                    type: 'select',
                    label: 'During the <b>last 7 days</b>, on how many days did you do <b>vigorous</b> physical activities like heavy lifting, digging, aerobics, or fast bicycling?',
                    model: 'vigorousDays',
                    values: function() {
                        return [
                            {id:0, name:'No vigorous physical activities'},
                            {id:1, name:'1 day'},
                            {id:2, name:'2 days'},
                            {id:3, name: '3 days'},
                            {id:4, name: '4 days'},
                            {id:5, name: '5 days'},
                            {id:6, name: '6 days'},
                            {id:7, name: '7 days'}
        
                        ]
                    },               
                    required: true,
                }
                ]
          }, 
          showif: true
        },


        {
            id: 2,
            schema: {
            fields: [
              {
                  type: "dateTimePicker",
                  label: 'How much time did you usually spend doing <b>vigorous</b> physical activities on one of those days?',
                  model: 'vigorousTime',
                  format: "YYYY-MM-DD HH:mm:ss",
                  dateTimePickerOptions: {
                      format: "YYYY-MM-DD HH:mm:ss"
                  }
              }
            ]
        },
        showif: false},
    ];


      private formOptions: any = {
        validateAfterLoad: true,
        validateAfterChanged: true
    }
}
