const fs = require("fs");
const path = require("path");
const qs = require("qs");
const bcrypt = require('bcrypt')
const cookie = require("cookie");
const jwt = require('jsonwebtoken');
require('env2')('./config.env');
const getUser = require("./database/queries/getUser.js");
const addData = require("./database/queries/addUser.js");
const postUser =require("./database/queries/postUser");
const signInData = require("./database/queries/signInData.js");
const {
    sign,
    verify
} = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const homeHandler = (request, response) => {
    console.log(request.headers)

    if (!request.headers.cookie) {
        const filePath = path.join(__dirname, '..', '/public', '/index.html');
        fs.readFile(filePath, (error, file) => {
            if (error) {
                response.writeHead(500, {
                    "Content-Type": "text/html"
                });
                response.end("<h1>Server Error</h1>");
            } else {
                response.writeHead(200, {
                    "Content-Type": "text/html"
                });
                response.end(file);
            }
        });
    } else {
        jwt.verify(cookie.parse(request.headers.cookie).token, SECRET, function (error, resp) {
            if (resp) {
                const filePath = path.join(__dirname, '..', '/public', '/search.html');
                fs.readFile(filePath, (error, file) => {
                    if (error) {
                        response.writeHead(500, {
                            "Content-Type": "text/html"
                        });
                        response.end("<h1>Server Error</h1>");
                    } else {
                        response.writeHead(200, {
                            "Content-Type": "text/html"
                        });
                        response.end(file);
                    }
                });
            }
        })
    }
}
const publicHandler = (request, response, endpoint) => {
    const extension = endpoint.split(".")[1];
    const extensionType = {
        html: "text/html",
        css: "text/css",
        js: "application/javascript",
        png: "image/png",
        jpg: "image/jpg"
    };

    const filePath = path.join(__dirname, "..", endpoint);
    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/html"
            });
            response.end("<h1>Server Error</h1>");
        } else {
            response.writeHead(200, {
                "Content-Type": extensionType[extension]
            });
            response.end(file);
        }
    });
};
const signingHandler = (request, response) => {
    let data = '';
    request.on('data', chunk => {
        data += chunk;
    });
    request.on('end', () => {
        const {
            username,
            psw
        } = qs.parse(data);

        getUser(username, (err, result) => {

            if (err) {
                response.writeHead(500, {
                    "Content-Type": "text/html"
                });
                response.end("<h1>Server Error</h1>");

            } else {
                bcrypt.compare(psw, result.password).then(

                    (err, comparedPass) => {
                        if (err)
                            console.log('err', err);
                        else {
                            const token = sign({
                                name: result.name
                            }, SECRET);

                            response.writeHead(302, {
                                'Location': '/',
                                'Set-Cookie': `token=${token}; HttpOnly`
                            });
                            response.end()

                        }
                    });
            }
        })

    });
};
const singupHandler = (request,response)=>{
    let data = "";
    request.on("data",chunk =>{
        data +=chunk;
    });
console.log("data",data)
    request.on("end",()=>{
        const user = qs.parse(data);
        console.log("the user",user)
        postUser(user.name,user.email,user.password,err=>{
            if(err){
                console.log(err)
                response.writeHead(500,{ "Content-Type": "text/html"})
                response.end("<h>server error</h>");
            }
            response.writeHead(302,{Location:"/"});
            response.end();
        })
    })

}

module.exports = {
    homeHandler,
    publicHandler,
    signingHandler,
    singupHandler
};