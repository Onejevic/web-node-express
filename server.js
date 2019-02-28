const express = require('express');
const hbs = require('hbs');
const app = express();
//al realizar la importación del archivo hbs, importa todas
//las funciones que yo haya creado, recordemos que no es necesario 
//realizar
//el module.exports ya que esto queda guardado directamente en hbs
require('./hbs/helpers');

//Para montarlo en heroku es necesario saber el puerto sin embargo
//como no tenemos conocimiento podemos usar la variable process (que
//es global) e indicarle el puerto; este comando no servirá de area local
//por esta razón realizamos un 'o(||)' para especificarle que puerto
//utilizar en caso de que se esté usando localmente.
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'john FRANCISCO cErinZa'
    })
})

app.get('/about', function(req, res) {
    res.render('about');
})

//en ves de enviar el número envío la variable
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puertos ${port}`);
})