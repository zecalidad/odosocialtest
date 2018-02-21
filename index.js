var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});

var port_number = server.listen(process.env.PORT || 3000);
server.listen(port_number);