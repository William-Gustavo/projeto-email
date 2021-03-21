const Model = require('./models/model.js');
const emailCtrl = require('./controllers/emailCtrl.js');
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/email_db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router);

app.use(morgan('dev'));

app.use(express.static(__dirname+ '/public'));

emailCtrl(app);

router.get('/api/users',function(req,res){

	Model.find({},function(err,users){	
		if(err){ 
			res.staus(400).send(err);
		}
		else{
			res.status(200).send(users);
		}
	});
});

app.listen(3000,function(){
	console.log("server listening on 3000");
});