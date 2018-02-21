//Type de serveur créé
var http = require('http');
//Récupération de l'URL demandée par l'utilisateur
var url = require('url');

var server = http.createServer(function(req, res) {
    // Ecriture dans la log de l'url appelée
    var page = url.parse(req.url).pathname;
    console.log('URL appelee : '+ page);
    
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+
'<html>'+
'    <head>'+
'        <meta charset="utf-8" />'+
'        <title>Ma page Node.js !</title>'+
'    </head>'+ 
'    <body>'+
'     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
'    </body>'+
'</html>');
    res.end();
});

server.listen(process.env.PORT || 3000);