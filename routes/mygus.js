//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();

//添加路由
/********************************** 路由 *************************************/
/********************************** 路由 *************************************/
//1.用户注册(插入)
router.post('/register',function(req,res){
    //获取数据
    //console.log(req.body);
    //验证数据是否为空
    if(!req.body.uname){
        res.send({code:401,msg:'uname is empty'});
        //阻止往后运行
        return; 
    }
    if(!req.body.upwd){
       res.send({code:402,msg:'password is empty'}); 
       return;
    }
    if(!req.body.email){
        res.send({code:403,msg:'email is empty'}); 
        return;
     }
     if(!req.body.phone){
        res.send({code:404,msg:'phone is empty'}); 
        return;
     }
    //把数据插入到数据库
    //执行SQL语句
    pool.query('INSERT INTO gus_user SET ?',[req.body],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:200,msg:'register success'});
        }
    });
});
//2.用户登录（查询）
router.post('/login',(req,res)=>{
    //获取post请求数据
    //console.log(req.body);
    //验证数据是否为空
   if(!req.body.uname){
       res.send({code:401,msg:'uname is empty'});
       return;
   }
   if(!req.body.upwd){
       res.send({code:402,msg:'upwd is empty'});
       return;
   }
   //执行SQL语句
   //查询数据中是否含有用户名和密码相匹配的数据 
   pool.query('SELECT * FROM gus_user WHERE uname=? AND upwd=?',[req.body.uname,req.body.upwd],(err,result)=>{
       if(err) throw err;
       if(resule.length>0){
        res.send({code:200,msg:'login suc'}); 
       }else{
        res.send({code:301,msg:'login err'});
       }
   });
});



//导出路由器
module.exports=router;