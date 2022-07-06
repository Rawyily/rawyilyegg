'use strict';
const Controller = require('egg').Controller;
class FsController extends Controller {
    async index() {
        try {
            console.log();
        const { ctx, app } = this;
        var fs = require("fs");
        console.log(process.cwd());
        fs.readFile('../File/index.txt', 'utf-8', (err, buffer) => {
            if (err != null) throw err;
            console.log(buffer);
            console.log(buffer.toString());
        });
        var text = fs.readFileSync('../File/index.txt','utf-8');
        console.log('同步读取', text);
        fs.writeFile('../File/msg.txt', 'msg', 'utf-8', (err) => {
            if (err) throw err;
            console.log('It\'s saved!');
        });
        var i = fs.writeFileSync('../File/msg2.txt', 'msg22', 'utf-8');
        console.log(i);
        fs.stat('../File/msg23.txt', (err,stats) => {
            if (err) {
                console.log(err);
            } else {
                 console.log(stats);
            }
           
        })
        fs.access('../File/msg.txt', (err) => {
            if (!err) {
                console.log('fs.access');
            } else {
                console.log(err.code);
            }
        });
            ctx.body = "123";
        } catch (error) {
            console.log(error);
        }
        
    
    }
}
module.exports = FsController;
