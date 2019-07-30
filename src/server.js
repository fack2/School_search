const http =require("http");
const PORT=process.env.PORT||4000;
const router =require("./router.js");

const server=http.createServer(router);
server.listen(PORT);
console.log(`server running at http://localhost:${PORT}`);


