const express=require('express');
const bodyParser=require('body-parser');
const myGusRouter=require( './routes/mygus.js' );
const GusRouter=require( './routes/gus.js' );

//创建web服务器
var server=express();
server.listen(8080);

//托管静态资源到public目录下
server.use( express.static('public') );

//使用body-parser中间件
server.use( bodyParser.urlencoded({
        extended:false
}) );

//挂载路由器 
    server.use( '/mygus',myGusRouter );
    server.use( '/gus',GusRouter);
