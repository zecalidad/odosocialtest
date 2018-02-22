var express = require('express');

var app = express();
// Mise en place des éléments de Log
var scriptexecute='index-express.js';
console.log(scriptexecute+' : DEBUT');

// Accès aux répertoires CSS style (ajouter images)
console.log(scriptexecute+' : Accès aux répertoires');
app.use('/style', express.static('style'));
app.use('/images', express.static('images'));





// Page test
console.log(scriptexecute+' : Accès la page test.ejs');
app.get('/test/:idevenement', function(req, res) {
    res.render('test.ejs', {idevenement: req.params.idevenement});
});

// Page erreur
console.log(scriptexecute+' : Erreur');
app.get('/', function(req, res) {
    res.status(404).send('Sorry, we cannot find that!');
});

console.log(scriptexecute+' : FIN');
app.listen(process.env.PORT || 3000);