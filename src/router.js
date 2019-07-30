const router =(request,response)=>{
    const endpoint=request.url;
    if (endpoint==='/'){
        
    }
    else {
        response.writeHead(404,{"Content-Type":"text/html"});
        response.end("<h1>404 doesn`t found</h1>")
    }
};
module.exports= router;