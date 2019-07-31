const {
    homeHandler,
    publicHandler,
    signingHandler,
    singupHandler
} = require("./handler");

const router = (request, response) => {
    const endpoint = request.url;
    if (endpoint === '/') {
        homeHandler(request, response);
    } else if (endpoint.indexOf("public") !== -1) {
        publicHandler(request, response, endpoint);
    } else if (endpoint.indexOf("/login") !== -1) {
        signingHandler(request, response);
    } else if (endpoint.indexOf("/signup")!== -1){
        singupHandler(request,response);
    }
    else {
        response.writeHead(404, {
            "Content-Type": "text/html"
        });
        response.end("<h1>404 doesn`t found</h1>")
    }
};
module.exports = router;