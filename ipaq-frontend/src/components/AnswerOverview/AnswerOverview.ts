import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';


@Component
export default class AnswerOverview extends Vue {
    // PROPS ------------------------------------------------------------------------------------------
    @Prop({required: true}) readonly schemas: any[]; // Contains the questions ONE PAGE
    @Prop({required: true}) model: any; // Contains the 
    @Prop({required: true}) parts: any; // Contains the parts
    @Prop({required: true}) partID: any; // Contains the parts

    private formOverview:any = [];

 
    // Methods

    // Handle ONE page
    mounted(){
        let temp;
        //console.log('SCHEMAS');
        //console.log(this.schemas);
        this.formOverview.push(" <h3> " + String(this.parts[this.partID-1].ipaqPartTitle) +"</h3>");
      
       
        for(const item of this.schemas){
            temp = '';
            //console.log('ITEM iteration');
            console.log(item);

            // Get Q & normal A
            for(const field of item.schema.fields){
                temp+=(String(field.label));
                temp+=('\n\n');
                console.log(temp);
                this.formOverview.push(temp);
                if(field.model != undefined){
                    this.formOverview.push(String(this.model[field.model]));
                }

            };
        

            if(item.schema.groups!=undefined){
                // Get grouped A
                for(const field of item.schema.groups[0].fields){
                    temp = "  ";
                    temp+=(String(field.label));                            
                 
                    if(field.model != undefined){
                        this.formOverview.push(String(this.model[field.model])+ temp);
                    }

                };

            }else{

                //console.log("No Groups");
                
            }   
           
        }  
        this.formOverview.push('<br/>');      
     
    }    

    // DATA -------------------------------------------------------------------------------------------
    
    
    // COMPUTED PROPERTIES ----------------------------------------------------------------------------
  
}
