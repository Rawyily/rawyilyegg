'use strict';
const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path')
class FsController extends Controller {
    async index() {
        try {
            console.log();
            console.log("try");
            const { ctx, app } = this;
            console.log(ctx.queries);
            console.log(ctx.query);
            console.log(ctx.request);
            const file =await ctx.request.files[0];
            console.log(file);
            console.log(file.mime);
        // let result;
        try {
            // 处理文件，比如上传到云端
            // result = await ctx.oss.put(name, file.filepath);
            let tfile = fs.readFileSync(file.filepath,'base64');
            let tsfile = fs.readFileSync('../File/头像1.png','base64');
            console.log(tfile);
            console.log();
            console.log(tsfile);
            // fs.writeFileSync(path.join('./', `uploadfile/test.png`), file);
            fs.writeFileSync('../File/3.png',tsfile,'base64');
            ctx.body = { code: 200, message: '', data: file.filename}
        // const name = 'egg-multipart-test/' + path.basename(file.filename)
            // console.log(fs);
        } finally {
            //需要删除临时文件
            await fs.unlink(file.filepath, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(file.filepath);
                }
            });
        }
        // ctx.body = {
        //     url: result.url,
        //     // 获取所有的字段值
        //     requestBody: ctx.request.body,
        // };
        } catch (error) {
            console.log(error);
        }
    
 }
}
module.exports = FsController;
