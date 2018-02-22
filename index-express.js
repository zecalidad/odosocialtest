var express = require('express');

var app = express();
// Mise en place des éléments de Log
var scriptexecute='index-express.js';
console.log(scriptexecute+' : DEBUT');

// Accès aux répertoires style et images
console.log(scriptexecute+' : Accès aux répertoires');
app.use(express.static('style'));
app.use(express.static('images'));


// Page test
console.log(scriptexecute+' : Accès la page test.ejs');
app.get('/test/:idevenement', function(req, res) {
    res.render('test.ejs', {idevenement: req.params.idevenement});
});

console.log(scriptexecute+' : FIN');
app.listen(process.env.PORT || 3000);