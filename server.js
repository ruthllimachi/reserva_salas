var express = require("express");
var app = express();
/*
app.get("/", function(req, res){
	res.send("Hola Mundo");
});
*/
app.use(express.static(__dirname + "/public"));
app.get('/listaSalas', function(req,res){
	console.log('funciona get');

	sala1 = {
			codigo:'p1-001',
			nombre:'sala de reuniones principal',
			fecha:'01-01-2017',
			hora1:'12:30 pm',
			hora2:'17:00 pm',
			evento:"ninguno",
			estado:'libre'
		};
		sala2 = {
			codigo:'p1-001',
			nombre:'sala de reuniones principal',
			fecha:'01-01-2017',
			hora1:'17:15 pm',
			hora2:'19:00 pm',
			evento:"reunion de xxx",
			estado:'ocupado'
		};

		var lista =[sala1, sala2];
		res.json(lista);
});

app.listen(3000);
console.log("El servidor 3000 ejecutandse");