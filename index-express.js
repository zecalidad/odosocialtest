var express = require('express');

var app = express();

app.get('/test/:idevenement', function(req, res) {
    res.render('test.ejs', {idevenement: req.params.idevenement});
});

app.listen(process.env.PORT || 3000);