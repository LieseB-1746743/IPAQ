const ActivityType = require("../utils/activityENUM");

/* FOR SHORT IPAQ
 All continuous scores are expressed in MET-minutes/week as defined below:

- Walking MET-minutes/week = 3.3 * walking minutes * walking days
- Moderate MET-minutes/week = 4.0 * moderate-intensity activity minutes * moderate days
- Vigorous MET-minutes/week = 8.0 * vigorous-intensity activity minutes * vigorous-intensity days

- Total physical activity MET-minutes/week = sum of Walking + Moderate + Vigorous MET-minutes/week scores.
*/

class ShortSubmission {

  


    constructor(answers) {
        console.log(answers);
        this.daysOfVigorousActivity20min = -1;
        this.daysWalking30min = -1;
        this.daysPerWeekArray=[-1,-1,-1,-1,-1]; // Index matches activity type ( VIGOROUS;MODERATE;WALKING;SITTING =3)
   
        
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
        this.categoricalScore = this.getCategoricalScoreShortIPAQ(this.daysPerWeekArray[0],this.daysOfVigorousActivity20min,this.daysPerWeekArray[1],this.daysPerWeekArray[2],this.daysWalking30min, this.totalMET);
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
        for(let answer of this.answers["answers"]){
            if(answer['activity'] == ActivityType.WALKING){
                // Fill daysWalking 30min.
                if(answer['hoursPerDay']>=1||answer['minutesPerDay']>=30){
                    this.daysWalking30min = answer['daysPerWeek'];
                    }
            }
        // Fill daysPerWeekArray
            this.daysPerWeekArray[answer['activity']] = answer['daysPerWeek'];
    
        // Fill vigorousdays 20min.
            if(answer['activity']==ActivityType.VIGOROUS && (answer['hoursPerDay']>=1||answer['minutesPerDay']>=20)){
                this.daysOfVigorousActivity20min=answer['daysPerWeek'];
            }
        }
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

    calculateSubmissionResults() {
        this.walkingMET = 3.3 * this.getActivityMinutesPerWeek(ActivityType.WALKING);
        this.moderateMET = 4.0 * this.getActivityMinutesPerWeek(ActivityType.MODERATE);
        this.vigorousMET =  8.0 * this.getActivityMinutesPerWeek(ActivityType.VIGOROUS);
        this.totalMET = this.walkingMET + this.moderateMET + this.vigorousMET;

        this.sittingPerWeek = this.getActivityMinutesPerWeek(ActivityType.SITTING);
        this.avgSittingPerDay = Math.round( this.sittingPerWeek / 7);

    }

    // Returns LOW, MODERATE or HIGH
    getCategoricalScoreShortIPAQ(daysOfVigorousActivity, daysOfVigorousActivity20min, daysOfModerateActivity,daysWalking, daysWalking30min, totalPhysicalActivityMETminWeek){
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

module.exports = ShortSubmission;