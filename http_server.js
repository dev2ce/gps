const http = require('http');
const fs = require('fs');
const port = 8080;

const requestListener = function (req, res) {
  fs.readFile('index.html', function(err, data){
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': data.length
    });
    res.write(data);
    res.end();
  });
}

const server = http.createServer(requestListener);
server.listen(port);

function updateFromText(){
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    gpsString = data;
  });
}
setInterval(updateFromText, 2000);