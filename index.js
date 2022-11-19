const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require("url");

const hostname = '0.0.0.0';
const port = 3000;

var server = http.createServer(handleRequest);
server.listen(port);

console.log('Server running on',hostname,':',port);

function handleRequest(req, res){
	//let pathname = req.url;

//	if(pathname == '/') {
//		pathname = '/index.html';
//	}
	var q = url.parse(req.url, true);

	//let ext = path.extname(pathname);
	var path = "." + q.pathname;
	
	const typeExt = {
		'.html': 'text/html',
		'.js':   'text/javascript',
		'.css':  'text/css'
	};

	let contentType = typeExt[ext] || 'text/plain';
	
	//__dirname + pathname for local
	//path for online
	fs.readFile(path,
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Error loading ' + pathname);
			}
			
			res.writeHead(200,{ 'Content-Type': contentType });
			res.end(data);
		}
	);
}

