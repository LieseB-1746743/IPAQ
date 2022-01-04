const ActivityType = require("./activityENUM");
const DomainType = require("./domainENUM");


class LongSubmission {
  


    constructor(answers) {
      
        this.daysOfVigorousActivity20min = 0; // not -1 because of =+
        this.daysWalking30min = 0; // not -1 because of =+

         // First Index matches domain (WORK: 0,    TRANSPORTATION: 1,HOUSEWORK: 2,   SITTING:3,      LEISURE:4 ,)
        this.daysPerWeekArray=[     [0,0,0,0,0,0,0],   [0,0,0,0,0,0,0],  [0,0,0,0,0,0,0],  [0,0,0,0,0,0,0],  [0,0,0,0,0,0,0]]; 
         // Second Index matches activity type (  VIGOROUS: 0,  MODERATE: 1,  WALKING: 2,  SITTING: 3,  TRAVELING: 4,  CYCLING:5, MODERATEINSIDE:6   
         // Can't be -1 because of += line 64
        
        this.walkingMET = -1;
        this.moderateMET = -1;
        this.vigorousMET = -1;
        this.totalMET = -1
        this.sittingPerWeek = -1;
        this.avgSittingPerDay =-1;

        this.categoricalScore = '';

        this.answers = answers; // answers = JSON object

        this.readAnswersIntoVars();
        this.calculateSubmissionResults();
        this.categoricalScore = this.getCategoricalScoreLongIPAQ(this.daysPerWeekArray[0],this.daysOfVigorousActivity20min,this.daysPerWeekArray[1],this.daysPerWeekArray[2],this.daysWalking30min, this.totalMET);
    }

    createSubmissionOutput(){
        return {
            "walkingMET": this.walkingMET,
            "moderateMET": this.moderateMET,
            "vigorousMET": this.vigorousMET,
            "totalMET": this.totalMET,
            "daysPerWeekArray":this.daysPerWeekArray,
            "categoricalScore":this.categoricalScore,
            "sittingPerWeek":this.sittingPerWeek,
            "avgSittingPerDay":this.avgSittingPerDay,
            "daysOfVigorousActivity20min": this.daysOfVigorousActivity20min,
            "daysWalking30min":this.daysWalking30min

       
        }

    }

    readAnswersIntoVars(){
        for(let domainAnswers of this.answers["answers"]){
            let domain = domainAnswers.domain;
            for(let answer of domainAnswers.answersmodel){
                if(answer['activity'] == ActivityType.WALKING){
                    continue;
                }

                // Fill daysPerWeekArray
                this.daysPerWeekArray[domain][answer['activity']] += answer['daysPerWeek'];

                // Fill daysWalking 30min.
                if(answer['activity']==ActivityType.WALKING && (answer['hoursPerDay']>=1||answer['minutesPerDay']>=30)){
                        this.daysWalking30min += answer['daysPerWeek'];
                }
                // Fill daysWalking 30min.
                else if(answer['activity']==ActivityType.VIGOROUS && (answer['hoursPerDay']>=1||answer['minutesPerDay']>=20)){
                    this.daysOfVigorousActivity20min+=answer['daysPerWeek'];
                }


            }          
       
        }
    console.log(this.daysPerWeekArray)
    }

    getActivityMinutesPerWeek(activityType){
        for(let answer of this.answers["answers"]){
            if (answer["activity"] == activityType){
                const minsPerDay = answer["minutesPerDay"];
                const hoursPerDay = answer["hoursPerDay"];
                const daysPerWeek = answer["daysPerWeek"];
                return (hoursPerDay * 60 + minsPerDay) * daysPerWeek;
            }
        }
    }

    getActivityMinutesPerWeek(activityType, answersmodel){
        let minsPerDay,hoursPerDay,daysPerWeek = 0;
        let output = 0;
        for(let answer of answersmodel){
            if (answer["activity"] == activityType){
                minsPerDay = answer["minutesPerDay"];
                hoursPerDay = answer["hoursPerDay"];
                daysPerWeek = answer["daysPerWeek"];
                output+=(hoursPerDay * 60 + minsPerDay) * daysPerWeek;
            }
        }
        return output;
    }

    calculateSubmissionResults() {

        let walkingMETs = [0,0,0,0,0];
        let moderateMETs = [0,0,0,0,0];
        let moderateMETsInside  = [0,0,0,0,0];
        let vigorousMETs = [0,0,0,0,0];
        let cyclingMETS = [0,0,0,0,0];

        let totalMETSPerDomain= [0,0,0,0,0];
        // First Index matches domain (WORK: 0,    TRANSPORTATION: 1,HOUSEWORK: 2,   SITTING:3,      LEISURE:4 ,)
        let multiplyfactors = [         [3.3,4.0,8.0],  [3.3,6.0,0],  [5.5,4.0,3.0],  [0,0,0],  [3.3,4.0,8.0]]
        
        for(let domainAnswers of this.answers["answers"]){
            let domain = domainAnswers.domain;

            switch(domain){
                case 0: // WORK
                walkingMETs[domain]= multiplyfactors[domain][0] * this.getActivityMinutesPerWeek(ActivityType.WALKING,domainAnswers.answersmodel);
                moderateMETs[domain]= multiplyfactors[domain][1] * this.getActivityMinutesPerWeek(ActivityType.MODERATE,domainAnswers.answersmodel);
                vigorousMETs[domain]= multiplyfactors[domain][2] * this.getActivityMinutesPerWeek(ActivityType.VIGOROUS,domainAnswers.answersmodel);
                
                break;
                case 1: // TRANSPORTATION
                walkingMETs[domain]= multiplyfactors[domain][0] * this.getActivityMinutesPerWeek(ActivityType.WALKING,domainAnswers.answersmodel);
                cyclingMETS[domain]=multiplyfactors[domain][1] * this.getActivityMinutesPerWeek(ActivityType.CYCLING,domainAnswers.answersmodel);
                
                break;
                case 2: // HOUSEWORK
                vigorousMETs[domain]= multiplyfactors[domain][0] * this.getActivityMinutesPerWeek(ActivityType.VIGOROUS,domainAnswers.answersmodel);
                moderateMETs[domain]= multiplyfactors[domain][1] * this.getActivityMinutesPerWeek(ActivityType.MODERATE,domainAnswers.answersmodel);
                moderateMETsInside[domain]= multiplyfactors[domain][2] * this.getActivityMinutesPerWeek(ActivityType.MODERATEinside,domainAnswers.answersmodel);
                
                break;
                case 3: // SITTING
                // not included as part of any summary score of physical activity.
                this.sittingPerWeek = this.getActivityMinutesPerWeek(ActivityType.SITTING,domainAnswers.answersmodel);
                this.avgSittingPerDay = this.sittingPerWeek / 7;
                break;
                case 4: // LEISURE
                walkingMETs[domain]= multiplyfactors[domain][0] * this.getActivityMinutesPerWeek(ActivityType.WALKING,domainAnswers.answersmodel);
                moderateMETs[domain]= multiplyfactors[domain][1] * this.getActivityMinutesPerWeek(ActivityType.MODERATE,domainAnswers.answersmodel);
                vigorousMETs[domain]= multiplyfactors[domain][2] * this.getActivityMinutesPerWeek(ActivityType.VIGOROUS,domainAnswers.answersmodel);
                
                break;
                default:
                    break;
                
                   
                
            }

        }

        // Calculate ALL total METS per Domain
        for(let i=0; i<totalMETSPerDomain.length;i++){
            totalMETSPerDomain[i]= walkingMETs[i] + cyclingMETS[i] + moderateMETs[i] + vigorousMETs[i] + moderateMETsInside[i];
        }
        console.log("TotalMETS per domain");
        console.log(totalMETSPerDomain);
        // Calculate Total scores for Walking, Moderate and Vigorous Physical Activities 6.2:https://docs.google.com/a/student.uhasselt.be/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnx0aGVpcGFxfGd4OjE0NDgxMDk3NDU1YWRlZTM
        
        this.walkingMET = walkingMETs.reduce((a, b) => a + b, 0); // Take SUM
        this.moderateMET = moderateMETs.reduce((a, b) => a + b, 0) + moderateMETsInside.reduce((a, b) => a + b, 0) + cyclingMETS.reduce((a, b) => a + b, 0) + vigorousMETs[2];
        this.vigorousMET =  vigorousMETs[0] + vigorousMETs[4];

        // Calculate TOTAL Physical Activity MET
        this.totalMET = this.walkingMET + this.moderateMET + this.vigorousMET;
        

    }

    // Returns LOW, MODERATE or HIGH || IDENTICAL FOR LONG and SHORT !
    getCategoricalScoreLongIPAQ(daysOfVigorousActivity, daysOfVigorousActivity20min, daysOfModerateActivity,daysWalking, daysWalking30min, totalPhysicalActivityMETminWeek){
        if(daysOfVigorousActivity20min>=3 || daysOfModerateActivity >=5 || daysWalking30min >=5 || (daysOfVigorousActivity20min+daysOfModerateActivity+daysWalking30min >=5 && totalPhysicalActivityMETminWeek >=600 )){
            return 'MODERATE'
        }
        else if((daysOfVigorousActivity >= 3 && totalPhysicalActivityMETminWeek >= 1500)|| (daysWalking + daysOfModerateActivity+daysOfVigorousActivity >=7 && totalPhysicalActivityMETminWeek >= 3000)){
            return 'HIGH'
        }else{
            return 'LOW'
        }


    }

    

}

module.exports = LongSubmission;