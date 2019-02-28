const hbs = require('hbs');
//helpers
//los helpers son funciones que puedo crear y podré mandarlos
//bajo la sentencia {{}} a todos los archivos hbs, 
//con el fin de ahorrar código, es importante
//recordar que si yo a la función le mando parámetros en el archivo
//hbs debo definirlo bajo {{funcion parametros}}

//función encargada de retornar el año actual
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

//función encargada de capitalizar el texto enviado por parámetro
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});

//en este archivo no es necesario realizar el module.exports
//ya que esto queda guardado directamente en la variable hbs