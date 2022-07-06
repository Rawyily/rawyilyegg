'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async ifThereIsAUserName(userName) {
      const post = await this.app.mysql.get('user', { username: userName });
      if (post === null) {
        return false;
        //昵称没有重复
      } else {
        return true;
        //昵称重复
      }
   
  }
  async ifThereIsAUserEmail(userEmail) {
      const post = await this.app.mysql.get('user', { useremail: userEmail });
      if (post === null) {
        return false;
        //邮箱没有重复
      } else {
        return true;
        //重复
      }
   
  }
  async registerUser(userName, userPassword) {
    const First = await this.app.mysql.get('typdata', { id: 1 });
    //获取网站注册人数的详情 
    const num =await First['注册人数'] + 1;
    const monthnum =await First['当月注册人数'] + 1;
    const daynum = await First['当天注册人数'] + 1;
    // const index = await First['首页访问人数'];
    //更新注册人数
    const row =await  {
      '注册人数':num,
      '当月注册人数':monthnum,
      '当天注册人数':daynum,
    };
    const options =await {
      where: {
        id:1
      }
    };
    const result = await this.app.mysql.update('typdata', row, options);
    if (result.affectedRows === 1) {
      //判断更新网站注册人数成功后,插入用户数据
      const insert = await this.app.mysql.insert('user', { userid: num, username: userName, userpassword: userPassword, registertime: this.app.mysql.literals.now, });
      const insertimg = await this.app.mysql.insert('userimg', { userid: num});
      const insertlogin = await this.app.mysql.insert('userlogin', { userid: num });
      if (insert.affectedRows === 1 && insertimg.affectedRows === 1 && insertlogin.affectedRows ===1) {
        return 1
      } else {
        return 2
      
      }
    } else {
      return 3
    }

  }
  async registerUserAndEmail(userName, userPassword,userEmail) {
    const First = await this.app.mysql.get('typdata', { id: 1 });
    //获取网站注册人数的详情 
    const num =await First['注册人数'] + 1;
    const monthnum =await First['当月注册人数'] + 1;
    const daynum = await First['当天注册人数'] + 1;
    // const index = await First['首页访问人数'];
    //更新注册人数
    const row =await  {
      '注册人数':num,
      '当月注册人数':monthnum,
      '当天注册人数':daynum,
    };
    const options =await {
      where: {
        id:1
      }
    };
    const result = await this.app.mysql.update('typdata', row, options);
    if (result.affectedRows === 1) {
      //判断更新网站注册人数成功后,插入用户数据 
      const insert = await this.app.mysql.insert('user', { userid: num, username: userName, userpassword: userPassword, useremail: userEmail,registertime:this.app.mysql.literals.now, });
      const insertimg = await this.app.mysql.insert('userimg', { userid: num});
      const insertlogin = await this.app.mysql.insert('userlogin', { userid: num });
      // console.log(insert);
      if (insert.affectedRows === 1  & insertimg.affectedRows === 1 & insertlogin.affectedRows === 1) {
        // console.log(insert.affectedRows === 1); true
        // return { updatetypdata:true,insert: true }              
        return 1;
      } else {
        // return { updatetypdata:true,insert: false }      
        return 2;
      }
    } else {
      // return { updatetypdata:false,insert:undefined}
      return 3;
    }

  }
  async IfThereIsUser(data, ip, comefromIphone) {
    try {
         const readUser = await this.app.mysql.get('user', data);
          console.log(readUser);
      console.log('readUser');
      console.log(data.username == readUser['username'] && data.userpassword == readUser['userpassword']);
    if (readUser == null) {
      return {ok:false};

    } else if (data.username == readUser['username'] && data.userpassword == readUser['userpassword']) {
      const userid = await readUser["userid"];
      const userlogin = await this.app.mysql.get('userlogin', userid);
      const nowloginnum = await userlogin["nowloginnum"];
      console.log(nowloginnum);
      switch (nowloginnum) {
        case 0:
          const result1 = await this.app.mysql.update('userlogin', { userlogin1: this.app.mysql.literals.now, userip1: ip,comefromIphone1:comefromIphone,nowloginnum:1 },{where:{userid:userid}});
          if (result1.affectedRows === 1) { return { ok: true, userid: userid } };
          console.log(result1.affectedRows === 1);
          break;
        case 1:
          const result2 = await this.app.mysql.update('userlogin', { userlogin2: this.app.mysql.literals.now, userip2: ip,comefromIphone2:comefromIphone,nowloginnum:2 },{where:{userid:userid}});
          if (result2.affectedRows === 1) { return { ok: true ,userid:userid} }


          break;
        case 2:
          const result3 = await this.app.mysql.update('userlogin', { userlogin3: this.app.mysql.literals.now, userip3: ip,comefromIphone3:comefromIphone,nowloginnum:3 }, {where:{userid: userid}});
          if (result3.affectedRows === 1) { return { ok: true ,userid:userid} }


          break;
        case 3:
          const result4 = await this.app.mysql.update('userlogin', { userlogin4: this.app.mysql.literals.now, userip4: ip,comefromIphone4:comefromIphone,nowloginnum:4 },{where:{userid: userid}});
          if (result4.affectedRows === 1) { return { ok: true ,userid:userid} }


          break;
        case 4:
          const result5 = await this.app.mysql.update('userlogin', { userlogin5: this.app.mysql.literals.now, userip5: ip,comefromIphone5:comefromIphone,nowloginnum:0 },{where:{userid: userid}});
          if (result5.affectedRows === 1) { return { ok: true ,userid:userid} }

          break;
        default:
          return {ok:false};
          break;
      }
    } else {
      return {ok:false};
    }
    } catch (error) {
      return {ok:false}
    }
 
    
  }
}

module.exports = UserService;
