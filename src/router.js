const {
    homeHandler,
    publicHandler,
    signingHandler,
    logOutHandler

} = require("./handler");

const router = (request, response) => {
    const endpoint = request.url;
    if (endpoint === '/') {
        homeHandler(request, response);
    } else if (endpoint.indexOf("public") !== -1) {
        publicHandler(request, response, endpoint);
    } else if (endpoint == "/login") {
        signingHandler(request, response);
    } else if (endpoint == "/logout") {
        logOutHandler(request, response);
    } else {
        response.writeHead(404, {
            "Content-Type": "text/html"
        });
        response.end("<h1>404 doesn`t found</h1>")
    }
};
module.exports = router;