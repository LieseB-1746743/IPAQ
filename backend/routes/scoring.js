var express = require('express');
var router = express.Router();
var scoringUtils = require('../utils/scoringUtils');
var utils = require('../utils/utils');


// Get IPAQ scoring
router.get('/', async(req, res, next) => {


    if (!await utils.checkIPAQResult(req.body)) {
        
        return res.status(400).json({ "msg": "Bad Request , IPAQ Scoring parameters are invalid"});
    }

   

    //data.vars
    return res.send("SCORING");	
});


module.exports = router;
