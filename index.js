const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const app = express();
// let informacion = saludo;
app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send(
     '<center><h1>BIENVENIDO A NUESTRO SITIO NODEJS</h1></center>'
)
});

app.get('/database', function (req, res) {
    res.send(
        '<center> <h2>Conexion exitosa con MongoDB</h2> </center>'
    )
});


app.get('/saludo/:name', function saludo(req, res) {
    if(req.params.name < 3){
        res.send("<center><h1>Error El nombre debe tener de 3 a 40 caracteres<h1></center>");
    }
    res.send('Hola   ' + req.params.name);
   
});

app.get('/edad/:xy', function(req, res) {
    if(req.params.xy < 18){
       res.send("<center><h1>Eres Menor De Edad<h1></center>");
    }if(req.params.xy < 150){
            res.send("<center><h1>Eres Mayor De Edad<h1></center>");
    }else{
    res.send("<center><h1>Error el numero ingresado debe ser positivo entre 0 y 150<h1></center>");
   }
});


mongoose.connect('mongodb://localhost:27017/momento2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, res) => {
    if(err) throw err;
    console.log("Conectado a la DB");
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor ONLINE en el puerto ${ port }`);
});
/*
stdin.addListener("data", function(){
    fs.writeFile(
        'informacionIngresada.txt', 
        informacion, 
        (err) => {
            if (err) 
                throw err;
        console.log('El archivo con informacion se creo correctamente papi!');
      });

});
*/