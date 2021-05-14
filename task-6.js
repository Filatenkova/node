const http = require('http');
const url = require('url');
const { parse } = require('querystring');

http.createServer((request, response) => {
    console.log('Server success work');

    // GET - получить и обработать
    if (request.method = 'GET') {
        let urlRequest = url.parse(request.url, true);
        response.end(urlRequest.query.test);

    // POST - получить и обработать
    } else {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            console.log(body);
            let params = parse(body);
            console.log(params);
            response.end('Success');
        })
    }
}).listen(3000);
