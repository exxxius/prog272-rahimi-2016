var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    var html = fs.readFileSync('index.html');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(html);
    response.end();
}).listen(30025);

console.log('Server running at http://127.0.0.1:30025/');