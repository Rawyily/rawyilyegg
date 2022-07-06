'use strict';

const { jwt } = require("../../config/plugin");

module.exports = {
    // 随机生成6位验证码
    verifyCode_Six_NumAndABC(){
        var a = Math.floor(Math.random() * 10);
        var b = Math.floor(Math.random() * 10);
        var c = Math.floor(Math.random() * 10);
        var d = Math.floor(Math.random() * 10);
        var e = Math.floor(Math.random() * 10);
        var f = Math.floor(Math.random() * 10);
        const abc1 = ['a', 'b', 'm', 'n', 'o', 'f', 'g', 'h', 'i', 'j'];
        const abc2 = ['k', 'e', 'p', 'q', 'r', 's', 'v', 'w', 'x', 't'];
        const abc3 = ['r', 'f', 'r', 'd', 'u', 'l', 'c', 'd', 'y', 'z'];
        return a + abc1[d].toUpperCase() + b + abc2[e].toUpperCase() + c + abc3[f].toUpperCase();
    },
};