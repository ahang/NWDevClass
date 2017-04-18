var http = require("http");
var url = require("url");
var fs = require("fs");
//========================

var port = 8080;

var server = http.createServer(doGreat);

function doGreat(request, response) {
    var urlParts = url.parse(request.url);

    switch (urlParts.pathname) {
        case "/home":
            displayHome(urlParts.pathname, request, response);
            break;

        case "/food":
            displayFood(urlParts.pathname, request, response);
            break;

        case "/movies":
            displayMovies(urlParts.pathname, request, response);
            break;

        case "/css":
            displayCss(urlParts.pathname, request, response);
            break;

        default:
            display404(urlParts.pathname, request, response);
    }

    function displayHome(url, request, response) {
        fs.readFile("home.html", function(error, data) {
            if (error) {
                response.writeHead(500, {
                    "Content-Type": "text/html"
                });
                response.end("There was an error: " + error);
            } else {
                response.writeHead(200, {
                    "Content-Type": "text/html"
                });
                response.end(data);
            }
        });
    }

    function displayFood(url, request, response) {
        fs.readFile("food.html", function(error, data) {
            if (error) {
                response.writeHead(500, {
                    "Content-Type": "text/html"
                });
                response.end("There was an error: " + error);
            } else {
                response.writeHead(200, {
                    "Content-Type": "text/html"
                });
                response.end(data);
            }
        });
    }

    function displayMovies(url, request, response) {
        fs.readFile("movies.html", function(error, data) {
            if (error) {
                response.writeHead(500, {
                    "Content-Type": "text/html"
                });
                response.end("There was an error: " + error);
            } else {
                response.writeHead(200, {
                    "Content-Type": "text/html"
                });
                response.end(data);
            }
        });
    }

    function displayCss(url, request, response) {
        fs.readFile("css.html", function(error, data) {
            if (error) {
                response.writeHead(500, {
                    "Content-Type": "text/html"
                });
                response.end("There was an error: " + error);
            } else {
                response.writeHead(200, {
                    "Content-Type": "text/html"
                });
                response.end(data);
            }
        });
    }

    function display404(url, request, response) {
        fs.readFile("404.html", function(error, data) {
            if (error) {
                response.writeHead(500, {
                    "Content-Type": "text/html"
                });
                response.end("There was an error: " + error);
            } else {
                response.writeHead(200, {
                    "Content-Type": "text/html"
                });
                response.end(data);
            }
        });
    }
}

server.listen(port, function() {
    console.log("LISTENING MANG");
});