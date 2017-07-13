var app=require("express")();
var bodyParser = require("body-parser");

app.use(bodyParser.json()) //use专门使用中间件的方法
app.use(bodyParser.urlencoded({ //使用url编码来处理form表单提交的post请求
   extended: true
}))
app.post("/api/login",function(req,res){
   res.json({
   	code:0,
   	msg:"登陆成功"
   });
})

app.listen(8090,function(){
   console.log("已经成功启动服务了！")
});