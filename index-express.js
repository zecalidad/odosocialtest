var express = require('express');

var app = express();
// Accès aux répertoires style et images
app.use(express.static('style'));
app.use(express.static('images'));

app.get('/test/:idevenement', function(req, res) {
    res.render('test.ejs', {idevenement: req.params.idevenement});
});

app.listen(process.env.PORT || 3000);