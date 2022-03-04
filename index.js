//導入模組
let server = require("./server");
let router = require("./router");
let requestHandlers = require("./requestHandlers");

//定義一個handle的Object
let handle = {}
//網址輸入什麼並要導向的地方
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/upload1"] = requestHandlers.upload1;

//執行server的start function
server.start(router.route, handle);