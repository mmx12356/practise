let exec = require("child_process").exec;
let querystring = require("querystring");
let url = require("url");


function start(response,postData,params){
    console.log("Request handler 'start' was called.");

    let body = `<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; 
    charset=UTF-8" />
    </head>
    <body>
    <form action="/upload" method="post">
    POST：<br>
    <input type="text" name="textname"></input>
    <br>
    <input type="submit" value="Submit" />
    </form>
    <form action="/upload1" method="get">
    GET：<br>
    <input type="text" name="textname1"></input>
    <br>
    <input type="submit" value="Submit" />
    </form>
    </body>
    </html>`;

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response,postData,params){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200,{"Content-Type":"text/plain"});
    //response.write("You 've sent:" + 
    //post
    //querystring.parse(postData).textname);
    response.write(`You 've sent:${querystring.parse(postData).textname}`);

    response.end();
    //return "Hello Upload";
}

function upload1(response,postData,params){
    console.log("Request handler 'upload1' was called.");
    response.writeHead(200,{"Content-Type":"text/plain"});
    //response.write("You 've sent:" + 
    //get
    //querystring.parse(params).textname1);
    response.write(`You 've sent:${querystring.parse(params).textname1}`);

    response.end();
    //return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
exports.upload1 = upload1;


