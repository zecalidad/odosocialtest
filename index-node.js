//Type de serveur créé
var http = require('http');
//Récupération de l'URL demandée par l'utilisateur
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    // Mise en place des éléments de Log
    var scriptexecute='index.js';
    console.log(scriptexecute+' : DEBUT');
    
    //Récupération des paramètres utilisateur   
    var params = querystring.parse(url.parse(req.url).query);
    //Récupération du paramètre Id (Id d'evenement)
    var IdEvenement = params['IdEvenement'];
    
    
    // Ecriture dans la log de l'url appelée et des paramètres
    var page = url.parse(req.url).pathname;
    console.log(scriptexecute+' : URL appelee : ' + page);
    console.log(scriptexecute+' : Paramètres : IdEvenement ' + IdEvenement);
    
    //Entete de page HTML
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+ '<html>'+ '    <head>'+ '        <meta charset="utf-8" />'+ '        <title>OdoSocialTest</title>'+ '    </head>'+ '    <body>');
    
    // Routage vers la page concernée 
    if (page=='/accueil')
        res.write('<p>Page <strong>Accueil</strong> !</p>');
    else if (page=='/evenement/declaration')
        res.write('<p>Page <strong>Déclaration evenement</strong> !</p>');
    else if (page=='/evenement/consultation')
        res.write('<p>Page <strong>Consultation evenement</strong> !</p>');
    else if (page=='/evenement/choix')
        res.write('<p>Page <strong>Choix evenement</strong> !</p>');
    else if (page=='/message')
        res.write('<p>Page <strong>Message</strong> !</p>');
    else 
        res.write('<p>Page <strong>Erreur</strong> !</p>');
    
    //Pied de page HTML
    res.write('</body>'+'</html>');
    res.end();
    console.log(scriptexecute+' : FIN');
});

server.listen(process.env.PORT || 3000);