var express = require('express');
var router = express.Router();
const http = require('http');
const bodyParser = require('body-parser');

var app = express();


/* GET home page. */
router.get('/', function(req1, res, next) {

//copy from here

	console.log("i am hitting my method");
  const postData = JSON.stringify({
	apiKey:"oiZTfmfBSIosY4aaJ6OeZA3xFek6LPbgfaUMtzqX",
	phone:"+19804309833",
	messageText:" developer is sending this text",
	toPhoneNumber:"+17049066266"});



const options = {
	hostname:'18.223.110.166',
	port:5000,
	path:"/user/sendToDevice",
	method:'POST',
	headers:{
		'content-type': 'application/json'
        //'Connection': 'keep-alive'
	}
};


const postRequest = http.request(options, function(response) {
    response.setEncoding('utf8');
    response.on('data',function (chunk)  {
        console.log(`BODY: ${chunk}`);
    });
    response.on('end', function(){
        console.log('No more data in response.');
        res.send('ok');
    });
    postRequest.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});
   
});


 // write data to request body
    postRequest.write(postData);
    
    postRequest.end();


    //till here 
});

module.exports = router;
