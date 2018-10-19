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
	apiKey:"FLua1wkU1bzXBlAcby4FBGZ4bIRglwFkWjaQB9VH",
	phone:"+19804309833",
	messageText:" developer is sending this text",
	toPhoneNumber:"+19804309833"});



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

/* GET home page. */
router.post('/sms', function(req1, res, next) {

    console.log("recieved sms ");
    console.log(req1);
    res.send(req1.body.messageText);
    });


module.exports = router;
