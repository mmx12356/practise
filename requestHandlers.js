let exec = require("child_process").exec;
let querystring = require("querystring");
let url = require("url");


function start(response,postData,params){
    console.log("Request handler 'start' was called.");

    let body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<input type="text" name="textname"></input>'+
    '<br>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '<form action="/upload1" method="get">'+
    '<input type="text" name="textname1"></input>'+
    '<br>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response,postData,params){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("You 've sent:" + 
    //post
    querystring.parse(postData).textname);
    //get
    //querystring.parse(params).textname);
    //let pathname = url.parse(request.url).pathname;

    response.end();
    //return "Hello Upload";
}

function upload1(response,postData,params){
    console.log("Request handler 'upload1' was called.");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("You 've sent:" + 
    //post
    //querystring.parse(postData).textname);
    //get
    querystring.parse(params).textname1);
    //let pathname = url.parse(request.url).pathname;

    response.end();
    //return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
exports.upload1 = upload1;


