'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  jwt: {
  enable: true,
  package: "egg-jwt",
  },
  validate: {
  enable: true,
  package: 'egg-validate',
  },
  // static: {
  // enable: true,
  // }
  cors:{
    enable: true,
    package: 'egg-cors',
  }
};
