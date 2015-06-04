var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/pictures'));
app.use(bodyParser.json());


app.post('/', function (req, res){
	transporter.sendMail({
	    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
	    to: 'Ethan3600@gmail.com',
	    subject: req.body.subject,
	    text: req.body.message
	});
});


var port = process.env.PORT || 3000
app.listen(port);
console.log('Running on ' + port);