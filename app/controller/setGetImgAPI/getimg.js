'use strict';
const fs = require('fs');
const Controller = require('egg').Controller;
class GetimgController extends Controller {
    async project() {
        console.log('project');
        const { ctx, app } = this;
        try {
            const project = await app.mysql.select('project');
            // console.log(project);
            ctx.body = {
                code: 200,
                msg: "获取项目列表成功",
                data:project
            }
        } catch (error) {
            ctx.body = {
                code: 500,
                msg:"获取项目列表失败"
            }
        }
    }
    async recommend() {
        console.log("recommendimg");
        const { ctx, app } = this;
        var i;
        try {
            const prefix = "data:png;base64,";
            const img1 =prefix +  fs.readFileSync('../File/recommend/1.png', 'base64');
            const img2 =prefix +  fs.readFileSync('../File/recommend/2.png', 'base64');
            const img3 =prefix +  fs.readFileSync('../File/recommend/3.png', 'base64');
            const img4 =prefix +  fs.readFileSync('../File/recommend/4.png', 'base64');
            const img5 = prefix + fs.readFileSync('../File/recommend/5.png', 'base64');
            const linksstring = fs.readFileSync('../File/recommend/links.txt', 'utf-8');    
            const linksobject = JSON.parse(linksstring);
        ctx.body = {
                code: 200,
                msg: "获取推荐列表图片base64数据成功",
                data: {
                    links: linksobject,
                    img: { img1, img2, img3, img4, img5 }
                }
                
            };

        } catch (error) {
            console.log(error);
            ctx.body = {
                code: 200,
                msg: "获取推荐列表图片base64数据失败",  
            };
        }
    }
    async slideshow() {
        console.log('slideshow');
        const { ctx, app } = this;
        var i;
        try {
            const prefix = "data:png;base64,";
            const img1 =prefix +  fs.readFileSync('../File/slideshow/1.png', 'base64');
            const img2 =prefix +  fs.readFileSync('../File/slideshow/2.png', 'base64');
            const img3 =prefix +  fs.readFileSync('../File/slideshow/3.png', 'base64');
            const img4 =prefix +  fs.readFileSync('../File/slideshow/4.png', 'base64');
            const img5 =prefix +  fs.readFileSync('../File/slideshow/5.png', 'base64');
            const img6 =prefix +  fs.readFileSync('../File/slideshow/6.png', 'base64');
            const img7 = prefix + fs.readFileSync('../File/slideshow/7.png', 'base64');
            const linksstring = fs.readFileSync('../File/slideshow/links.txt', 'utf-8');    
            const linksobject = JSON.parse(linksstring);
            // console.log(linksobject);

            ctx.body = {
                code: 200,
                msg: "获取轮播图图片base64数据成功",
                data: {
                    links: linksobject,
                    img: { img1, img2, img3, img4, img5, img6, img7 }
                }
                
            };
        } catch (error) {
            console.log(error);
            ctx.body = {
                code: 500,
                msg: "获取轮播图图片base64数据失败",
            };
        }
 }
}
module.exports = GetimgController;
