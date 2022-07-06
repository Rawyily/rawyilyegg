/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_164474ertre32906et30_830';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.view = {
    mapping: {
      '.njk': 'nunjucks',
      '.ejs': 'ejs',
    },
  };
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'rawyily',
      password: 'rawyily',
      database: 'rawyily',
    },
  };
  // config.security = {n
  //   csrf: false,
  // };
  config.middleware = [];
  config.jwt = {
    secret: 'ergv_3k5k_n37hg',	//自定义token的加密条件字符串
    //enable: true, // 默认是关闭，如果开启，这会对所有请求进行自动校验；限定请求，请设置match做路径匹配
    //match: /^\/api/, // 匹配的请求，会走jwt校验，否则忽略；例如登录接口需要被忽略；
  //   sign: {	//jwt.sign(***,***,[options,***])方法中，options的默认设置可以在这里配置；
  //      //多少s后过期。actionToken.js中,jwt.sing(plyload,secret,{expiresIn:number})会被合并，调用时设置优先级更高;
  //   }
  };
  config.validate = {
    convert: true,
    // validateRoot: false,
  };
  config.static = {
    // prefix: '/public/',
    // dir: path.join(appInfo.baseDir, 'public'),
    // support lazy load
    dynamic: true,
    preload: false,
    buffer: false,
    maxFiles: 1000,
  };
  // config.assets = {
  //   publicPath: '/public/',
  // },
  config.security = {
    csrf: false,
    enable: false,
    ignoreJSON: true,
    domainWhiteList: [ 'http://localhost:8080','' ],
    // domainWhiteList: [ 'http://192.168.41.226:8080' ],
  }
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }
  config.cluster = {
      listen: {
        path: '',
        port: 1000,
        hostname: '0.0.0.0',
      }
  }
  config.multipart = {
    mode: 'file',
  }
  config.bodyParser = {
    jsonLimit: '5mb',
    formLimit: '6mb',
  };
  return {
    ...config,
    ...userConfig,
  };
};
