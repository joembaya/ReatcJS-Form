var http = require('http'),
    util = require('util'),
    fs = require('fs'),
    url = require('url'),
    qs = require('querystring');

var server = http.createServer(function (req,res){

    var url_parts = url.parse(req.url,true);
    //console.log(url_parts);

    var body = '';
    if(url_parts.pathname == '/api/v1/signup' && req.method === 'POST'){

        console.log('Request found with POST method');
        req.on('data', function (data) {
            body += data;
            console.log('I have received the data data:'+data);
        });
        req.on('end', function () {

            var POST = qs.parse(body);
            // sending data received
            res.end("Sent data are name:"+POST.name+" First Name:"+POST.fname +" First Name:"+POST.email);

        });

    }

});
server.listen(8080);
console.log('Server listening at localhost:8080');
 
