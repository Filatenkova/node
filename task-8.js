const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    let urlParts = url.parse(req.url);

    if (req.method = 'GET') {

        switch (urlParts.pathname) {
            case "/":
                homepage(req, res);
                break;
            case "/about":
                about(req, res);
                break;
            default:
                page404(req,res);
                break;
        }
    }

}).listen(3000);

function homepage(req, res) {
    res.end("homepage");
}

function about(req, res) {
    res.end("about");
}

function page404(req, res) {
    res.end("404");
}
