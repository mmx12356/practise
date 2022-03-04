//導入模組
let http = require("http");
let url = require("url");

function start(route,handle){
    function onRequest(request,response) {
        let postDate = "";
        //取得網頁名稱
        let pathname = url.parse(request.url).pathname;
        //取得網址
        let params = url.parse(request.url).query;
        console.log("Request fro " + pathname + " received.");
        //設定為utf-8
        request.setEncoding("utf8");

        //若是使用post傳遞值
        request.addListener("data",function(postDataChunk) {
            postDate += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk +"'.");
        });

        //收到所有資料後，傳回route
        request.addListener("end",function(){
            route(handle, pathname,response,postDate,params);
        });

        //response.writeHead(200,{"Content-Type":"text/plain"});
        //var content = route(handle, pathname)
        //response.write(content);
        //response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;