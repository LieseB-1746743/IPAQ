var express = require('express');
var router = express.Router();
var scoringUtils = require('../utils/scoringUtils');
var utils = require('../utils/utils');


// Get IPAQ scoring
router.get('/', async(req, res, next) => {
    console.log("INNNNN");
    console.log(req.body);

    if (!await utils.checkIPAQResult(req.body)) {
        
        return res.status(400).json({ "msg": "Bad Request , IPAQ Scoring parameters are invalid"});
    }

    // Body consists of IPAQanswers
    const SubmissionResult = scoringUtils.handleNewSubmission(req.body);
    
    console.log(SubmissionResult);

    //data.vars
    return res.send(SubmissionResult);	
});


module.exports = router;
