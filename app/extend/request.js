'use strict';
module.exports = {
    agentID() {
    // 判断请求来自移动端还是pc端
    const deviceAgent = this.ctx.header['user-agent'].toLowerCase();
    // console.log(deviceAgent);
    const agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    // console.log(agentID);
    if (agentID) {
        return '移动端';
    } else {
        return '电脑端';
    }
  },
//------------------------------------------------------------------------
  foo(param) {
    // console.log(this);
    return this.header.host;
  },
  comefromIphone() {
    // const { ctx, app } = this;
    // 判断请求来自移动端还是pc端
    const deviceAgent = this.ctx.header['user-agent'].toLowerCase();
    // console.log(deviceAgent);
    const agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    // console.log(agentID);
    if (agentID) {
      // console.log('请求来自手机、pad等移动端');
    
      return true;
    } else {
      // console.log('请求来自PC端');
    }
      return false;
  },
  getcookieToJsonAll(data, key) {

        let cookieArr = data.split(";");
        let obj = {} 
        cookieArr.forEach((i) => {
            let arr = i.split("=");
            obj[arr[0]] =arr[1];
        });
    console.log(obj);   
    if (!obj[key]) {
      let cookieArr = data.split("; ");
        let obj = {} 
        cookieArr.forEach((i) => {
            let arr = i.split("=");
            obj[arr[0]] =arr[1];
        });
      console.log(obj);
      return obj[key]
      
    } else {
      return obj[key]
    }
    
  },
};
