//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();

/********************************** 接口 *************************************/
/********************************** 接口 *************************************/
/********************************** 接口 *************************************/
//登录接口 post
router.post("/login",(req,res)=>{
    var $uname=req.body.uname;
    var $upwd=req.body.upwd;
    if(!$uname){
        res.send("用户名为空");
        return;
    }
    if(!$upwd){
        res.send("密码为空");
    }
    var sql="select * from gus_user where uname=? and upwd=?";
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("登陆成功");
        }else{
            res.send("用户名或密码错误");
        }
    });
 });
 //用户列表接口 userlist get
 //删除用户 deluser get
 //根据uid查询用户详细信息
 //修改接口 update post


 //导出路由器
module.exports=router;