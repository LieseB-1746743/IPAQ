const { json } = require('express');
var activityEnum = require('../utils/activityENUM');
var ShortSubmission =  require('../utils/ShortSubmission');
var LongSubmission  =  require('../utils/LongSubmission');

// Official scoring = https://docs.google.com/a/student.uhasselt.be/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnx0aGVpcGFxfGd4OjE0NDgxMDk3NDU1YWRlZTM
//---------------------------------------------------------------------------------------------------------------
// MAYBE => Create Class IPAQsubmission{} => To handle form submission and easily connect them to a Person class




function handleNewSubmission(submissionBody){

    let sub = new ShortSubmission(submissionBody);

    return sub.createSubmissionOutput();

}

function handleNewSubmissionLong(submissionBody){

    let sub = new LongSubmission(submissionBody);

    return sub.createSubmissionOutput();

}

// Section 5.3
// INPUT =  (datacleaned) json "IPAQanswers"
// #TODO: DETERMINE json format of answers
/* ONE ANSWER ? */
/*


{
    "Activity":"Walking",
    "Days":"5",
    "MinutesPerDay":"50"

}
*/
// Returns input for function getCategoricalScoreShortIPAQ(..)
function calculateShortIPAQscores(IPAQanswers){

        // Loop through IPAQanswers



    return 1
    //return daysOfVigorousActivity, daysOfVigorousActivity20min, daysOfModerateActivity,daysWalking, daysWalking30min, totalPhysicalActivityMETminWeek
}


// Section 6.3
// Per DOMAIN (Transportation, Work, ..) andere berekenigen ! (sectie 6.2)
// Calculate MET's per domain
function calculateLongIPAQscores(){


}


// Section 7 DATA CLEANING
/*
- I. Any responses to duration (time) provided in the hours and minutes response option should be converted from hours and minutes into minutes.
- II. To ensure that responses in ‘minutes’ were not entered in the ‘hours’ column by mistake during self-completion or 
during data entry process, values of ‘15’, ‘30’, ‘45’, ‘60’ and ‘90’ in the ‘hours’ column should be
 converted to ‘15’, ‘30’, ‘45’, ‘60’ and ‘90’ minutes, respectively, in the minutes column.
- III. In some cases duration (time) will be reported as weekly (not daily) e.g.,VWHRS, VWMINS. 
These data should be converted into an average daily time by dividing by 7.
IV. If ‘don’t know’ or ‘refused ‘ or data are missing for time or days then that case is removed from analysis.

NOTE : Both the number of days and daily time are required for the creation of categorical and continuous summary variables*/

// 7.2, 7.3, 7.4, 7.5, 7.6
// ZIE https://docs.google.com/a/student.uhasselt.be/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnx0aGVpcGFxfGd4OjE0NDgxMDk3NDU1YWRlZTM
function doDataCleaningAndPreProcessing(IPAQanswers){
var cleanIPAQanswers;
    // Loop through IPAQanswers
        // Do cleaning


    return cleanIPAQanswers

}




// https://docs.google.com/a/student.uhasselt.be/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnx0aGVpcGFxfGd4OjE0NDgxMDk3NDU1YWRlZTM
/*Given the non-normal distribution of energy expenditure in
many populations, it is suggested that the continuous indicator be presented as
median minutes/week or median MET–minutes/week rather than means (such as mean minutes/week or mean MET-minutes/week).*/

/* METs are multiples of the resting metabolic rate and a MET-minute is computed by multiplying
the MET score of an activity by the minutes performed.*/

/*MET-minute scores are equivalent to kilocalories for a 60 kilogram person. Kilocalories may be computed
from MET-minutes using the following equation: MET-min x (weight in kilograms/60 kilograms).
MET-minutes/day or MET-minutes/week can be presented although the latter is more frequently used and is thus suggested.*/

/*As there are no established thresholds for presenting MET-minutes, the IPAQ Research Committee propose
 that these data are reported as comparisons of median values and interquartile ranges for different populations. */

 /*There are three levels of physical activity proposed to classify populations:
1. Low
2. Moderate
3. High
 */

/*Regular participation is a key concept included in current public health guidelines for
physical activity.Therefore, both the total volume and the number of days/sessions 
are included in the IPAQ analysis algorithms.*/

// 30 minutes IS actually LOW
/*Given that measures such as IPAQ assess total physical activity in all domains, the
“leisure time physical activity” based public health recommendation of 30 minutes on
most days will be achieved by most adults in a population. Although widely accepted
as a goal, in absolute terms 30 minutes of moderate-intensity activity is low and
broadly equivalent to the background or basal levels of activity adult individuals
would accumulate in a day. Therefore a new, higher cutpoint is needed to describe
the levels of physical activity associated with health benefits for measures such as
IPAQ, which report on a broad range of domains of physical activity.*/


module.exports = {calculateLongIPAQscores, calculateShortIPAQscores,handleNewSubmission,handleNewSubmissionLong}