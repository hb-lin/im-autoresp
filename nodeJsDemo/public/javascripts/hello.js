


/*************** 原生websocket 连接 *****************/
// const WebSocket = require('ws');// 导入WebSocket模块
// var ws = new WebSocket('wss://wpush.meituan.com/websocket/718_WMOPEN/wo718wIRNwgDeitxrKNHC50El6SxGNGXwDsuIiGu_PuYcPfc');
// ws.onopen= function(msg) {
//     console.log(msg);ws.send('Hello!');
// };
// // 响应onmessage事件:
// ws.onmessage = function(msg) {
//     console.log(msg.type,msg.data);
// };

var mtsdk = require("./pushsdk.js.min");
console.log(mtsdk);
// mtsdk
// mtsdk.Socket('wss://wpush.meituan.com/websocket/718_WMOPEN/wo718wIRNwgDeitxrKNHC50El6SxGNGXwDsuIiGu_PuYcPfc');

// 调用java-web服务的get/post请求
/*************** get请求 *****************/
// var http = require('http');
// const qs = require('querystring');
// var data = {
//     aaa: "张三",
//     time: new Date().getTime()
// };//这是需要提交的数据
// var content = qs.stringify(data);
// var options = {
//     hostname: '127.0.0.1',
//     port: 8788,
//     path: '/test/get?'+content,
//     method: 'GET'
// };
// var req = http.request(options, function (res) {
//     console.log('STATUS: ' + res.statusCode);
//     console.log('HEADERS: ' + JSON.stringify(res.headers));
//     res.setEncoding('utf8');
//     res.on('data', function (chunk) {
//         console.log('BODY: ' + chunk);
//     });
// });
// req.on('error', function (e) {
//     console.log('problem with request: ' + e.message);
// });
// req.end();

/*************** post请求 *****************/


// // 引入 events 模块
// var events = require('events');
// // 创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter();
//
// // 创建事件处理程序
// var connectHandler = function connected() {
//     console.log('连接成功。');
//
//     // 触发 data_received 事件
//     eventEmitter.emit('data_received');
// }
//
// // 绑定 connection 事件处理程序
// eventEmitter.on('connection', connectHandler);
//
// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function(){
//     console.log('数据接收成功。');
// });
//
// // 触发 connection 事件
// eventEmitter.emit('connection');
//
// console.log("程序执行完毕。");

// try {
//     var meituanSocket = require('./pushsdk-js.min');
//     var config = meituanSocket.config;
//     var wsSocket = meituanSocket.Socket;
//     wsSocket();
// }catch (e) {
//     console.log("Error"+e)
// }
