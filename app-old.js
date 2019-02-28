//para crear un servicio web lo podemos hacer mediante el módulo http
const http = require('http');
//creamos el server y le mandamos como parámetro un callback
http.createServer(
    //este callback recibe un request y response
    (req, res) => {
        //es posible modificar que tipo de respuesta vamos a entregar
        //al cliente para el ejemplo devolvemos un tipo json
        res.writeHead(200, { 'Content-Type': 'aplication/json' });

        let salida = {
                nombre: 'John',
                edad: 30,
                url: req.url
            }
            //como respuesta enviamos el json 
        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');

        //es muy importante indicarle al servidor cuando termina de dar la respuesta
        //ya que puede quedar cargando y nunca finalizar la solicitud
        res.end();
    }
    //tambien es necesario indicarle bajo que puerto vamos a trabajar por ejemplo el 8080
).listen(8080);
//este mensaje saldrá es por consola para el ejemplo sería el servidor.
console.log("Escuchando en el puerto 8080");