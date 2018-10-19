var express = require('express');
var router = express.Router();
const http = require('http');
const bodyParser = require('body-parser');

var app = express();


/* GET home page. */
router.get('/', function(req, res, next) {
  var postData = JSON.stringify({
	apiKey:"VXLtyJ52I19G5v5M1p60V3cSRTHuHdqQC4fRPZpp",
	phone:"+11",
	messageText:" spent in coding hhhhhh",
	toPhoneNumber:"+17049066266"});
});

const options = {
	host:'18.223.110.166',
	port:5000,
	path:"/sendToDevice",
	method:'POST',
	headers:{
		'content-type': 'application/json'
        //'Connection': 'keep-alive'
	}
};


const req = http.request(options, function(response) {
    response.setEncoding('utf8');
    response.on('data',function (chunk)  {
        console.log(`BODY: ${chunk}`);
    });
    response.on('end', function(){
        console.log('No more data in response.');
        response.send('ok');
    });
    // write data to request body
    req.write(postData);
    
    req.end();
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});



module.exports = router;
