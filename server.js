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

app.get('/listaSalas/:id', function(req, res){
	var id = req.params.id
	console.log(id);
	db.reservas.findOne({_id:mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});	

app.put('/listaSalas/:id', function(req, res){
	var id = req.params.id
	console.log(req.body.nombre);
	db.reservas.findAndModify({query: {_id:mongojs.ObjectId(id)}, 
		update:{$set:{codigo:req.body.codigo, nombre:req.body.nombre, fecha:req.body.fecha,	hora_inicio:req.body.hora_inicio, hora_final:req.body.hora_final, estado:req.body.estado}},
			new: true},	function(err, doc){
				res.json(doc);
	});
});	

app.listen(3000);
console.log("El servidor 3000 ejecutandose");