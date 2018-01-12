var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs('dbreservas',['dbreservas']);
var bodyParser = require("body-parser");

/*
app.get("/", function(req, res){
	res.send("Hola Mundo");
});
*/
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/listaSalas', function(req,res){
	console.log('funciona get');
	db.reservas.find(function(err,docs){
		console.log('ingreso a la base de reservas');
		console.log(docs);
		 res.json(docs);
	});
});

app.post('/listaSalas', function(req, res){
	console.log('ingreso post');
	console.log(req.body);
	db.reservas.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/listaSalas/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.reservas.remove({_id:mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);

	});

});

app.listen(3000);
console.log("El servidor 3000 ejecutandose");