var express = require('express');
var router = express.Router();
const http = require('http');
const bodyParser = require('body-parser');
const notifier = require('node-notifier');
var app = express();


/* GET home page. */
router.get('/', function(req1, res, next) {

//copy from here

	console.log("i am hitting my method");
  const postData = JSON.stringify({
	apiKey:"kmX39A97KhC6R1UJ4mx62dumPNCbCldh4y0QVtTL",
	phone:"+19804309833",
	messageText:" developer is sending this text",
	toPhoneNumber:"+19804309833"});



const options = {
	hostname:'52.202.147.130',
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
console.log("******************************");
    console.log("recieved sms ");
    console.log(" __  _  _   __");
    console.log("(__ | \/ | (__       ",req1.body.messageText);
    console.log(" __)|    |  __)");
    console.log(" ");
    console.log("from : ",req1.body.phone);
console.log("******************************");
notifier.notify({
    title: req1.body.phone,
    message: req1.body.messageText
  });
   // res.sendFile('/public/register.html/?phone='+req1.body.phone+'&message='+req1.body.messageText);
    });


module.exports = router;
