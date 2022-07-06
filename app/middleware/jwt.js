module.exports = options => {
  return async function jwt(ctx, next) {
    const token = ctx.request.header.authorization;
    console.log(ctx.request.header.authorization);
    console.log("token:" + token);
    
    if (token) {
      try {
        //解码token
        const user = await ctx.app.jwt.verify(token);
        // console.log(data);
        const a = user["iat"];
        const b = Date.parse(new Date()) / 1000;
        if (b-a < 86400) {
          await next();
        }
        

      } catch (error) {
        ctx.status = 401;
        ctx.body = {
          message: error.message,
        };
        // console.log(error.name);
        return;
      }
    } else {
      ctx.status = 401;
      ctx.body = {
        message: '没有token',
        };
        // console.log('没有token');
      return;
    }
  };
};