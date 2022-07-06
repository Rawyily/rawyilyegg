'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async index() {
        this.ctx.body = "index";
        
    
    }
    async new() {
        this.ctx.body= "new"
    }
    async create() {
        const { ctx, add } = this;
        console.log(ctx.request.body);




        // this.ctx.body= "create"

        // const username =await this.ctx.request.body.username;
        // const userpassword =await this.ctx.request.body.userpassword;
        // const post = await this.service.login.login.getlogindata(username, userpassword);
        // if (post === null) {
        //     // console.log(post);
        //     // console.log("ERR:userDataIsNo!");
        //     this.ctx.status = 201;
        //     this.ctx.body ={userDataIsNo:ture}
        // } else {
        //     await console.log(post["userid"]);
        //     const usercallbackdata =await {
        //         id: post["userid"],

        //         name: post["username"],
        //         email: post["useremail"],
        //         p: post["userp"],               
        //         }
        //     await console.log(usercallbackdata);
        //     // this.ctx.body = usercalbackdata;
        //     this.ctx.status = 200;

            //Token验证
            //生成Token
            // const token = this.app.jwt.sign({
            //     userID: username + userpassword,	//需要存储的Token数据
            // }, this.app.config.jwt.secret)
            //     //expiresIn: '3600000', //设置过期时间           
            // console.log(token);
      	    //将生成的Token返回给前端
            // this.ctx.body = token;
        //     const callback = {
        //         token,
        //         usercallbackdata
        //     }
        //     this.ctx.body = await callback;
        // }   
    }
    async show() {
        this.ctx.body = "show";
        
        
    
    }
    async edit() {
        this.ctx.body = "edit";
   
    }
    async update() {
        this.ctx.body= "update"
    
    }
    async destroy() {
        this.ctx.body= "destroy"
    
    }
    
}

module.exports = LoginController;
