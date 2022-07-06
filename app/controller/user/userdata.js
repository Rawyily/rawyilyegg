'use strict';

const Controller = require('egg').Controller;

class UserdataController extends Controller {
    async register() {
        const { ctx, app } = this;
      if (ctx.request.body["email"] === undefined) {
          //判断是否注册信息是否有邮箱
          //没有邮箱
          const userName = await ctx.request.body["name"];
          const userPassword = await ctx.request.body["password"];
          const post = await ctx.service.user.ifThereIsAUserName(userName);
          //判断昵称是否重复 不重复返回false
            if (post === false) {
                //插入用户数据
              const post = await ctx.service.user.registerUser(userName, userPassword);
              // console.log(post);
              if (post == 1) {
                ctx.body = {Success:"分配编号成功,注册成功",ok:true}
              } else if (post == 2) {
                ctx.body = {Error:"分配编号成功,注册失败",ok:false}
              } else if (post == 3) {
                ctx.body = {Error:"分配编号失败,注册失败",ok:false}
              } else {
                ctx.body = {Error:"未知的失败原因",ok:false}
              }
            } else {
                ctx.body = { Error:"昵称已被注册",ok:false};
            }
      } else {
        //附带有邮箱的注册
        const userName = await ctx.request.body["name"];
        const userPassword = await ctx.request.body["password"];
        const userEmail = await ctx.request.body["email"];
        const data = { userName, userPassword, userEmail };
        //判断 昵称 邮箱是否有人使用
        const ifThereIsAUserName = await ctx.service.user.ifThereIsAUserName(userName);
        const ifThereIsAUserEmail = await ctx.service.user.ifThereIsAUserEmail(userEmail);
        if (ifThereIsAUserName === true  && ifThereIsAUserEmail === true) {
          ctx.body = { Error:"昵称、邮箱已被注册",ok:false};
          
        } else if (ifThereIsAUserName === true && ifThereIsAUserEmail === false) {
          ctx.body = { Error:"昵称已被注册",ok:false};
          
        }
        else if (ifThereIsAUserName === false && ifThereIsAUserEmail === true) {
          ctx.body = { Error:"邮箱已被注册",ok:false};
          
        }else if (ifThereIsAUserName === false && ifThereIsAUserEmail === false) {
            const statusnum = await ctx.service.user.registerUserAndEmail(userName, userPassword, userEmail);
            //  console.log(statusnum);
              if (statusnum == 1) {
                ctx.body = {Success:"分配编号成功,注册成功",ok:true}
              } else if (statusnum == 2) {
                ctx.body = {Error:"分配编号成功,注册失败",ok:false}
              } else if (statusnum == 3) {
                ctx.body = {Error:"分配编号失败,注册失败",ok:false}
              } else {
                ctx.body = { Error: "未知的失败原因",ok:false }
              }
          
        }

      }
            
    }
  async login() {
    // console.log("this.request: "+this.ctx.request);
      try {
        const { ctx, app } = this;
        // console.log(ctx.request.body["username"]);
        if (!ctx.request.body["username"]) {
          ctx.status = 200;
          ctx.body = "客户端的数据没有传入成功";
          console.log("客户端的数据没有传入成功");
        } else {
          const data = await {
            username: ctx.request.body["username"],
            userpassword: ctx.request.body["userpassword"]
          }

          const ip = await ctx.request.ip;
          const comefromIphone = await ctx.request.comefromIphone();
          const IfThereIsHaveUser = await ctx.service.user.IfThereIsUser(data, ip, comefromIphone);
          console.log(IfThereIsHaveUser);
          console.log(IfThereIsHaveUser['ok']);
          if (IfThereIsHaveUser['ok']) {
          const getlogined = await app.mysql.get('userlogin', { userid:IfThereIsHaveUser['userid']})
          console.log(typeof getlogined['userlogin1']);
          console.log(JSON.stringify(getlogined['userlogin1']));
          
            if (getlogined['userlogin2'] == null) {
              const loginData =await [
                { time: getlogined.userlogin1, hostname: getlogined.comefromIphone1, ip: getlogined.userip1, },
              ];
              console.log(loginData);
              ctx.body =await { ok: true, "当前登录的IP":ip, "当前登录的设备":comefromIphone ,loginData}
            } else if (getlogined['userlogin3'] == null) {
              const loginData =await [
                { time: getlogined.userlogin1, hostname: getlogined.comefromIphone1, ip: getlogined.userip1, },
                {time: getlogined.userlogin2,hostname:getlogined.comefromIphone2,ip: getlogined.userip2,},          
              ];
              console.log(loginData);
              ctx.body =await { ok: true, "当前登录的IP":ip, "当前登录的设备":comefromIphone ,loginData}
            } else if (getlogined['userlogin4'] == null) {
               const loginData =await [
                { time: getlogined.userlogin1, hostname: getlogined.comefromIphone1, ip: getlogined.userip1, },
                {time: getlogined.userlogin2,hostname:getlogined.comefromIphone2,ip: getlogined.userip2,},          
                {time: getlogined.userlogin3,hostname:getlogined.comefromIphone3,ip: getlogined.userip3,},          
              ];
              console.log(loginData);
              ctx.body =await { ok: true, "当前登录的IP":ip, "当前登录的设备":comefromIphone ,loginData}
            } else if (getlogined['userlogin5'] == null) {
               const loginData =await [
                { time: getlogined.userlogin1, hostname: getlogined.comefromIphone1, ip: getlogined.userip1, },
                {time: getlogined.userlogin2,hostname:getlogined.comefromIphone2,ip: getlogined.userip2,},          
                { time: getlogined.userlogin3, hostname: getlogined.comefromIphone3, ip: getlogined.userip3, }, 
                {time: getlogined.userlogin4,hostname:getlogined.comefromIphone4,ip: getlogined.userip4,},          
              ];
              console.log(loginData);
              ctx.body =await { ok: true, "当前登录的IP":ip, "当前登录的设备":comefromIphone ,loginData}
            } else {
              const loginData =await [
                { time: getlogined.userlogin1, hostname: getlogined.comefromIphone1, ip: getlogined.userip1, },
                {time: getlogined.userlogin2,hostname:getlogined.comefromIphone2,ip: getlogined.userip2,},          
                { time: getlogined.userlogin3, hostname: getlogined.comefromIphone3, ip: getlogined.userip3, }, 
                {time: getlogined.userlogin4,hostname:getlogined.comefromIphone4,ip: getlogined.userip4,},          
                {time: getlogined.userlogin5,hostname:getlogined.comefromIphone5,ip: getlogined.userip5,},          
              ];
              console.log(loginData);
              ctx.body =await { ok: true, "当前登录的IP":ip, "当前登录的设备":comefromIphone ,loginData}
            }
            
            const token = app.jwt.sign(ip, app.config.jwt.secret);//生成Token
        
            const cookie = this.ctx.cookies.set('userkey',data.username, {
              maxAge: 1000 * 3600 * 24, // 储存24小时
              httpOnly: false, // 是否只允许在node修改
              signed: false, // 进行签名 防止用户修改
              // encrypt: true, // 加密 获取的时候要进行解密
              // 中文cookie,加密后可以设置cookie
            });
            console.log(cookie._keys);
            console.log(cookie);

          } else {
            ctx.body = { ok: false }
          }
        }
      } catch (error) {
        this.ctx.status = 501;
        this.ctx.body = { err:"登录失败,账号错误或服务器错误"}
        console.log(error);
      }
    }
  async getuserdata() {
    try {
    const { ctx, app } = this;
    console.log(ctx.request.body);
    // console.log(typeof ctx.request.header.cookies);
    console.log(ctx.request.header.cookie);
    // const a = JSON.stringify(ctx.request.header.cookies);
    
    // const b = JSON.parse(a)
    // console.log(a);
    const data =await  ctx.request.header.cookie;
    const key = "userkey";
    const b =await ctx.request.getcookieToJsonAll(data,key);
    console.log(b);
    if (ctx.request.body.name == b) {
      console.log("验证通过");
      const getid =await app.mysql.get('user', { username: b });
      console.log(getid);
      if (!getid['useremail']) {
       ctx.body = await {
        name: getid['username'],
        email:null,
        ip: ctx.request.ip,
        id: getid['userid'],
         p: getid['userp'],
      };
      }
      ctx.body = await {
        name: getid['username'],
        email:getid['useremail'],
        ip: ctx.request.ip,
        id: getid['userid'],
        p: getid['userp'],
      };
    } else {
      console.log("ctx.request.body.name:  "+ctx.request.body.name);
      console.log("cookies: "+b);
      ctx.body = "登录错误";
    }
    // 
    // const userinfo = ctx.cookies.get(,{
    //   encrypt: true, // 解密
    //   });
    //   console.log(userinfo);
      // console.log(ctx.cookies.get('username'));

    } catch (error) {
      this.ctx.body = error
    }
    

    }
  async modify() {
    try {
      const { ctx, app } = this;
      const key = ctx.request.body.num;
      console.log(key);
        switch (key) {
          case 0:
             console.log(ctx.request.body.userpassword._value);
            console.log(ctx.request.body.username);
            const bodyUsername = ctx.request.body.username;
            console.log(ctx.request.body.num);
            const cookies = ctx.request.header.cookie;
            console.log(cookies);
            const username = ctx.request.getcookieToJsonAll(cookies, 'username');
            console.log(username);
            const userkey = ctx.request.getcookieToJsonAll(cookies, 'userkey');
            console.log(userkey);
            if (username == bodyUsername & userkey == bodyUsername & username == userkey) {
              const userpassword = ctx.request.body.userpassword._value;
              const user = await app.mysql.get('user', { username, userpassword });

              if (user == null) {
                ctx.status = 201;
                ctx.body = {ps: "账号信息不正确"}
              } else {
                console.log(user);
              const userid = user['userid'];
              const modifyToken =await app.jwt.sign({userid,username},app.config.jwt.secret,{expiresIn:'600s'})
              console.log(modifyToken);
              const backmodifyToken = await app.jwt.verify(modifyToken);
              console.log(backmodifyToken.userid);
              console.log(backmodifyToken.username);
                ctx.body = { token:modifyToken };
              }
              

            }
            break;
          
          case 1:
            //获取token里的id
            const token =await ctx.request.body.token;
            console.log("token:   "+token);
            const backmodifyToken = await app.jwt.verify(token);
            console.log(backmodifyToken);
            
            const userid =   backmodifyToken['userid'];
            console.log(userid);
            //获取新昵称
            const usernewname = ctx.request.body.newname;
            console.log(usernewname);
            //数据库更新
            const row = {
              username:usernewname,
            };

            const options = {
              where: {
                userid: userid
              }
            };
            
            const result = await this.app.mysql.update('user', row, options).then(res => {
              console.log(res);
              console.log("1");
            ctx.status = 200;
            ctx.body ={ ok: true };
            }).catch(err => {
            console.log(err.name);
            ctx.status = 201;
            ctx.body ={ ok: false };
            });
            break;
          case 2:
            const token2 =await ctx.request.body.token;
            const backmodifyToken2 = await app.jwt.verify(token2); 
            const userid2 =   backmodifyToken2['userid'];

            const userpassword = ctx.request.body.newpassword;
            //数据库更新
            const row2 = {
              userpassword
            };

            const options2 = {
              where: {
                userid: userid2
              }
            };
            
            const result2 = await this.app.mysql.update('user', row2, options2).then(res => {
              console.log(res);
              console.log("1");
            ctx.status = 200;
            ctx.body ={ ok: true };
            }).catch(err => {
            console.log(err.name);
            ctx.status = 201;
            ctx.body ={ ok: false };
            });
            break;
          case 3:
            break;
          default:
            ctx.body="未知错误"
            break;
        }

    } catch (error) {
      console.log(error);
      }


    
     

      
    }
    async delete() {
      const { ctx, app } = this;
      console.log(ctx.request.body);
      try {
        const data = await ctx.request.body;
        console.log("try");
        const getdata = await app.mysql.get('user', data);
        console.log(getdata);
        if (getdata) {
          if (getdata == null) {
          ctx.status = 201;
          ctx.body = "查询不到您的账号";
          } else {
          console.log("验证通过");
          await app.mysql.delete('user', { userid: data.userid })
          console.log("成功删除user表的数据");
          await app.mysql.delete('userimg', { userid: data.userid })
          console.log("成功删除img表的数据");
          await app.mysql.delete('userlogin', { userid: data.userid })
          console.log("成功删除userlogin表的数据");
            ctx.body = "注销用户" + data.username + "成功";
          }
        } else {
          ctx.status = 202;
          ctx.body = "请检查账号是否存在";
          
        }        
      } catch (error) {
        ctx.status = 202;
        ctx.body = "出错了-注销账号";
        console.log("error");
        console.log(error);
      }

    }
}

module.exports = UserdataController;