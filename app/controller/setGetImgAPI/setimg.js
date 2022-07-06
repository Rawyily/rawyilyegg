'use strict';
var fs = require('fs');
var path = require('path');
const Controller = require('egg').Controller;
class SetimgController extends Controller {
    async project() {
        const { ctx, app } = this;
        //提取前端的数据
        const data = ctx.request.body;
        const img = data.img;
        const name = data.name;
        const text = data.text;
        const link = data.link;
        const time = Date.parse(new Date());
        try {
            //写入数据库
            const setproject = await app.mysql.insert('project', { img, name, text, link, time });
            // console.log(setproject);
            //判断写入数据库的结果
            if (setproject.affectedRows == 1) {
                console.log('addprojectsucces!');
                ctx.body = {
                code: 200,
                msg: "添加新项目成功"
            }
            } else {
                ctx.body = {
                code: 500,
                msg: "数据库写入出错"
            }
            }
        } catch (error) {
            //抛出异常
            //  console.log(error);
            ctx.body = {
                code: 500,
                msg: "服务器出错"
            }
        }
    }
    async slideshow() {
        const { ctx, app } = this;
        try {
            try { 
                const data = ctx.request.body;
                // console.log(data);
                // console.log(data.link);
                // console.log(data.img);
                // console.log(data.name);
                const filedirname = '../File/slideshow/' + data.name;
                const w = fs.writeFileSync(filedirname, data.img, 'base64');
                // console.log('W:' + w);
                // console.log(data.name[0]);
                // console.log(Number(data.name[0]));
                const linknum = Number(data.name[0])-1;
                const quelink = data.link;
                fs.readFile('../File/slideshow/links.txt','utf-8', (err,data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        var links;
                        links = JSON.parse(data);
                        links[linknum] = quelink;
                        const linksstring = JSON.stringify(links);
                        fs.writeFile('../File/slideshow/links.txt',linksstring, 'utf-8', (err) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log(fs.readFileSync('../File/slideshow/links.txt','utf-8'));
                            }
                        })
                    } 
                });
            
            } finally {
                ctx.body = {  
                    code: 200,
                    msg: "更新轮播图成功"
                }
            }
        } catch (error) {
            ctx.body = {  
                code: 500,
                msg: "服务器出错"
            }
        }
    }
    async recommend() {
        const { ctx, app } = this;
            var code;
            var msg;
        try {
            const file =await ctx.request.files[0];
            // console.log(file);
            const numAndLink =await ctx.request.header.cookies;
            // console.log(numAndLink);
            // console.log();
            //处理cookies
            const cookies1 =await numAndLink.trim();
            const cookies2 =await cookies1.replace(/(; )/g, ';');
            const cookies3 =await cookies2.replace(/(=)/g, ':');
            const cookies4 =await cookies3.split(';');
            var cookies5;
            const length = cookies4.length;
            for (let i = 0; i < length; i++) {
                const istring = cookies4[i];
                const a = istring.indexOf("numAndLink:");
                if (a >= 0) {
                    cookies5 = istring;
                };
            }
            if (cookies5 && file) {
                const cookies6 = cookies5.replace('numAndLink:', '');
                // console.log(cookies6);
                const cookies7 = JSON.parse(cookies6);
                // console.log(cookies7);

                const filedata = fs.readFileSync(file.filepath, 'base64');
                const filepath = '../File/recommend/' + cookies7.recommendnum + '.png';
                // console.log(filepath);
                const writeimg = fs.writeFileSync(filepath, filedata, 'base64');
                // console.log(writeimg);

                const linkstext = fs.readFileSync('../File/recommend/links.txt', 'utf-8');
                // console.log(links);
                var links;
                links = JSON.parse(linkstext);
                links[cookies7.recommendnum - 1] = cookies7.link;
                // console.log(links);

                const linksstring = JSON.stringify(links);
                const writelinks = fs.writeFileSync('../File/recommend/links.txt', linksstring, 'utf-8');
                // console.log(writelinks);
                console.log(fs.readFileSync('../File/recommend/links.txt', 'utf-8'));
                //需要删除临时文件
                ctx.body = {
                    code : 200,
                    msg:"更新成功"
                }
                fs.unlinkSync(file.filepath);
                    // fs.writeFile(filepath, data, 'base64', (err) => {
                    //     if (err) {
                    //         code = 502;
                    //         msg = '储存文件失败';
                                     
                    //     } else {
                    //         console.log('储存文件成功');

                    //         fs.readFile('../File/recommend/links.txt','utf-8', (err,data) => {
                    //             if (err) {
                    //                 console.log(err);
                    //                 code = 503
                    //                 msg = '调出原有失败';   
                    //             } else {
                    //                 var links;
                    //                 links = JSON.parse(data);
                    //                 links[cookies7.recommendnum-1] = cookies7.link;
                    //                 const linksstring = JSON.stringify(links);
                    //                 fs.writeFile('../File/recommend/links.txt',linksstring, 'utf-8', (err) => {
                    //                     if (err) {
                    //                         console.log(err);
                    //                         code = 504; 
                    //                         msg = '更新链接失败';
                    //                     } else {
                    //                         // console.log(fs.readFileSync('../File/recommend/links.txt', 'utf-8'));
                    //                         code = 500;
                    //                         msg = '更新成功'; 
                    //                     }
                    //                 })
                    //             } 
                    //         });
                    //     }
                    // })
            } else {
                ctx.body = {
                    code: 500,
                    msg: "服务器解析提交的资料失败"
                }
            }
        } catch (error) {
            console.log(error);
            ctx.body = {
                code: 500,
                msg:"服务器出错了"
            }
        }
    }
}
module.exports = SetimgController;
