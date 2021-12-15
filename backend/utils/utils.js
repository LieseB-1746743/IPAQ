const { json } = require('express');



// Check if IPAQ result is valid
function checkIPAQResult(IPAQResult) {
   
    console.log(IPAQResult);
    return true; 
}

module.exports = {checkIPAQResult}
