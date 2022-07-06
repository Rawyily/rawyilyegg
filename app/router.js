'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // api 获取 轮播图 推荐 项目
  router.get('/api/getprojectdata', controller.setGetImgAPI.getimg.project);
  router.get('/api/getrecommendimg', controller.setGetImgAPI.getimg.recommend);
  router.get('/api/getslideshowimg', controller.setGetImgAPI.getimg.slideshow);
  // api 设置 轮播图 推荐 项目
  router.post('/api/setimgproject', controller.setGetImgAPI.setimg.project);
  router.post('/api/setrecommend', controller.setGetImgAPI.setimg.recommend);  
  router.post('/api/setslideshow', controller.setGetImgAPI.setimg.slideshow);
  //api 登录功能LoginAPI 发送验证码
  router.post('/api/sendverifycode', controller.loginAPI.verifycode.index);
  router.post('/api/register', controller.loginAPI.register.index);
  // 修改密码
  router.post('/api/checkuserishave', controller.loginAPI.checkUserIsHave.index);
  router.post('/api/sendusercode', controller.loginAPI.verifycode.sendusercode);
  router.post('/api/updatepassword', controller.loginAPI.updatepassword.index);
  // 登录
  router.post('/api/emaillogin', controller.loginAPI.login.Email);
  router.post('/api/pwlogin', controller.loginAPI.login.password);
  router.post('/api/iphonelogin', controller.loginAPI.login.iphone);
  // home
  router.get('/', controller.home.index);

  


  // router.resources('/api/user/login', controller.login.login);
  // const jwt = app.middleware.jwt(app.config.jwt);
  // router.get('/jwt', jwt, controller.login.gettoken.index);
  // router.get('/token', controller.login.token.echo);

  // router.post('/api/user/register',controller.user.userdata.register);
  // router.post('/api/user/login', controller.user.userdata.login);
  // router.post('/api/user/getuserdata', controller.user.userdata.getuserdata);
  // router.post('/api/user/modify', controller.user.userdata.modify);
  // router.delete('/api/user/delete', controller.user.userdata.delete);

  // router.post('/api/email', controller.email.index);
  // router.post('/api/register', controller.register.index);
  // router.post('/api/login', controller.login.index);

  // router.post('/api/fs', controller.fs.index);
  // router.post('/api/fscopy', controller.fscopy.index);



  //  router.get('/', controller.index.index)
};
