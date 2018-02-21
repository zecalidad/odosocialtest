//Type de serveur créé
var http = require('http');
//Récupération de l'URL demandée par l'utilisateur
var url = require('url');

var server = http.createServer(function(req, res) {
    var scriptexecute='index.js';
    console.log(scriptexecute+' : DEBUT');
    // Ecriture dans la log de l'url appelée
    var page = url.parse(req.url).pathname;
    console.log(scriptexecute+' : URL appelee : ' + page);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+ '<html>'+ '    <head>'+ '        <meta charset="utf-8" />'+ '        <title>OdoSocialTest</title>'+ '    </head>'+ '    <body>');
    if (page=='/evenement')
        res.write('<p>Page <strong>Evenement</strong> !</p>');
    else if (page=='/message')
        res.write('<p>Page <strong>Message</strong> !</p>');
    else 
        res.write('<p>Page <strong>inconnue</strong> !</p>');
    res.write('</body>'+'</html>');
    res.end();
    console.log(scriptexecute+' : FIN');
});

server.listen(process.env.PORT || 3000);