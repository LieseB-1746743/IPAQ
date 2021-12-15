var express = require('express');
var router = express.Router();
var scoringUtils = require('../utils/scoringUtils');
var utils = require('../utils/utils');


// Get IPAQ scoring
router.get('/', async(req, res, next) => {


    if (!await utils.checkIPAQResult(req.body)) {
        
        return res.status(400).json({ "msg": "Bad Request , IPAQ Scoring parameters are invalid"});
    }

    // Body consists of IPAQanswers
    Output = scoringUtils.calculateShortIPAQscores(req.body);
    console.log("ShortIPAQScoresOutput")
    console.log(Output);
    ActivityCategoricalScore = scoringUtils.getCategoricalScoreShortIPAQ(Output);
    console.log("ShortIPAQCategoricalScore")
    console.log(ActivityCategoricalScore);
   

    //data.vars
    return res.send("SCORING");	
});


module.exports = router;
