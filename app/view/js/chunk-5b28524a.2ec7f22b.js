(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b28524a"],{"00b4":function(e,t,l){"use strict";l("ac1f");var a=l("23e7"),n=l("da84"),c=l("c65b"),o=l("e330"),u=l("1626"),r=l("861d"),i=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),v=n.Error,s=o(/./.test);a({target:"RegExp",proto:!0,forced:!i},{test:function(e){var t=this.exec;if(!u(t))return s(this,e);var l=c(t,this,e);if(null!==l&&!r(l))throw new v("RegExp exec method returned something other than an Object or null");return!!l}})},"0d6f":function(e,t,l){"use strict";l("ee3a")},"0de1":function(e,t,l){"use strict";l.d(t,"g",(function(){return n})),l.d(t,"e",(function(){return c})),l.d(t,"a",(function(){return o})),l.d(t,"f",(function(){return u})),l.d(t,"h",(function(){return r})),l.d(t,"b",(function(){return i})),l.d(t,"d",(function(){return v})),l.d(t,"c",(function(){return s}));var a=l("1bab");function n(e){return console.log(e),Object(a["a"])({url:"http://localhost:1000/api/sendverifycode",method:"post",data:e})}function c(e){return console.log(e),Object(a["a"])({url:"http://localhost:1000/api/register",method:"post",data:e})}function o(e){return console.log(e),Object(a["a"])({url:"http://localhost:1000/api/checkuserishave",method:"post",data:e})}function u(e){return console.log(e),Object(a["a"])({url:"http://localhost:1000/api/sendusercode",method:"post",data:e})}function r(e){return console.log(e),Object(a["a"])({url:"http://localhost:1000/api/updatepassword",method:"post",data:e})}function i(e){return console.log(e),Object(a["a"])({url:"api/emaillogin",method:"post",data:e})}function v(e){return console.log(e),Object(a["a"])({url:"api/pwlogin",method:"post",data:e})}function s(e){return console.log(e),Object(a["a"])({url:"api/iphonelogin",method:"post",data:e})}},"107c":function(e,t,l){var a=l("d039"),n=l("da84"),c=n.RegExp;e.exports=a((function(){var e=c("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"1ab9":function(e,t,l){},"408a":function(e,t,l){var a=l("e330");e.exports=a(1..valueOf)},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,l){var a=l("e330"),n=l("1d80"),c=l("577e"),o=l("5899"),u=a("".replace),r="["+o+"]",i=RegExp("^"+r+r+"*"),v=RegExp(r+r+"*$"),s=function(e){return function(t){var l=c(n(t));return 1&e&&(l=u(l,i,"")),2&e&&(l=u(l,v,"")),l}};e.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(e,t,l){var a=l("1626"),n=l("861d"),c=l("d2bb");e.exports=function(e,t,l){var o,u;return c&&a(o=t.constructor)&&o!==l&&n(u=o.prototype)&&u!==l.prototype&&c(e,u),e}},"859c":function(e,t,l){"use strict";var a=l("7a23"),n={class:"box"},c=["textContent"],o={t:"1649144048335",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3874",width:"48",height:"40"},u=["fill"],r={class:"hint"},i={emits:["verify"],setup:function(e,t){var l=t.emit,i=Object(a["ref"])(),v=Object(a["ref"])(),s=Object(a["ref"])(),d=Object(a["ref"])(),f=Object(a["ref"])("red"),b=Object(a["ref"])(),p=Object(a["ref"])(!0),m=function(e){p.value=!1;var t=e.clientX;v.value.onmousemove=function(e){var a=e.clientX-t;a<0|a>308||(s.value="width:"+a+"px",d.value="left:"+a+"px",i.value.offsetWidth>300&&(s.value="width:308px; background-color:#009999;",b.value="验证通过",d.value="left:308px;border: 1px solid green",f.value="green",v.value.onmousemove=void 0,v.value.onmouseup=void 0,v.value.onmousedown=void 0,l("verify",!0)))},v.value.onmouseup=function(e){s.value=void 0,b.value=void 0,d.value=void 0,f.value="red",v.value.onmousemove=void 0,v.value.onmousedown=void 0,p.value=!0,l("verify",!1)}};return Object(a["onMounted"])((function(){})),function(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[Object(a["createElementVNode"])("div",{class:"leftdiv",style:Object(a["normalizeStyle"])(Object(a["unref"])(s)),ref_key:"leftdiv",ref:i,textContent:Object(a["toDisplayString"])(Object(a["unref"])(b))},null,12,c),Object(a["createElementVNode"])("div",{class:"slider",onMousedown:t[0]||(t[0]=function(e){return m(e)}),style:Object(a["normalizeStyle"])(Object(a["unref"])(d)),ref_key:"slider",ref:v},[(Object(a["openBlock"])(),Object(a["createElementBlock"])("svg",o,[Object(a["createElementVNode"])("path",{d:"M752 416c-9.824 0-19.456 0.768-28.96 1.92L645.664 176H512a32 32 0 0 0 0 64h86.912l21.248 66.432-328.096 198.432-70.688-112.864H256a32 32 0 0 0 0-64H96a32 32 0 0 0 0 64h49.856l75.584 120.672c-4.448-0.32-8.896-0.672-13.44-0.672C110.944 512 32 590.976 32 688S110.944 864 208 864s176-78.976 176-176a175.456 175.456 0 0 0-57.088-129.376l313.312-189.536 20.8 64.96C573.664 469.984 512 555.872 512 656c0 132.352 107.648 240 240 240s240-107.648 240-240-107.648-240-240-240z m-544 384C146.24 800 96 749.76 96 688S146.24 576 208 576s112 50.24 112 112S269.76 800 208 800z m544 32a176.224 176.224 0 0 1-176-176 176.16 176.16 0 0 1 104.608-160.704l56.736 177.344a31.968 31.968 0 1 0 60.928-19.52l-55.232-172.672c2.976-0.128 5.952-0.448 8.96-0.448 97.024 0 176 78.976 176 176S849.024 832 752 832z","p-id":"3875",fill:Object(a["unref"])(f)},null,8,u)]))],36),Object(a["withDirectives"])(Object(a["createElementVNode"])("div",r,"请按住滑块,拖动到最右边",512),[[a["vShow"],Object(a["unref"])(p)]])])}}},v=(l("c249"),l("6b0d")),s=l.n(v);const d=s()(i,[["__scopeId","data-v-5679c3a4"]]);t["a"]=d},9263:function(e,t,l){"use strict";var a=l("c65b"),n=l("e330"),c=l("577e"),o=l("ad6d"),u=l("9f7f"),r=l("5692"),i=l("7c73"),v=l("69f3").get,s=l("fce3"),d=l("107c"),f=r("native-string-replace",String.prototype.replace),b=RegExp.prototype.exec,p=b,m=n("".charAt),O=n("".indexOf),j=n("".replace),h=n("".slice),g=function(){var e=/a/,t=/b*/g;return a(b,e,"a"),a(b,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),x=u.BROKEN_CARET,w=void 0!==/()??/.exec("")[1],N=g||w||x||s||d;N&&(p=function(e){var t,l,n,u,r,s,d,N=this,E=v(N),V=c(e),k=E.raw;if(k)return k.lastIndex=N.lastIndex,t=a(p,k,V),N.lastIndex=k.lastIndex,t;var y=E.groups,C=x&&N.sticky,B=a(o,N),I=N.source,z=0,R=V;if(C&&(B=j(B,"y",""),-1===O(B,"g")&&(B+="g"),R=h(V,N.lastIndex),N.lastIndex>0&&(!N.multiline||N.multiline&&"\n"!==m(V,N.lastIndex-1))&&(I="(?: "+I+")",R=" "+R,z++),l=new RegExp("^(?:"+I+")",B)),w&&(l=new RegExp("^"+I+"$(?!\\s)",B)),g&&(n=N.lastIndex),u=a(b,C?l:N,R),C?u?(u.input=h(u.input,z),u[0]=h(u[0],z),u.index=N.lastIndex,N.lastIndex+=u[0].length):N.lastIndex=0:g&&u&&(N.lastIndex=N.global?u.index+u[0].length:n),w&&u&&u.length>1&&a(f,u[0],l,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(u[r]=void 0)})),u&&y)for(u.groups=s=i(null),r=0;r<y.length;r++)d=y[r],s[d[0]]=u[d[1]];return u}),e.exports=p},"9f7f":function(e,t,l){var a=l("d039"),n=l("da84"),c=n.RegExp,o=a((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),u=o||a((function(){return!c("a","y").sticky})),r=o||a((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:r,MISSED_STICKY:u,UNSUPPORTED_Y:o}},a286:function(e,t,l){"use strict";l("d9b6")},a9e3:function(e,t,l){"use strict";l.r(t);l("ac1f"),l("00b4");var a=l("7a23"),n=l("859c"),c=l("e34d"),o=l("0de1"),u=l("c9a1"),r=l("a18c"),i=function(e){return Object(a["pushScopeId"])("data-v-0ff903c6"),e=e(),Object(a["popScopeId"])(),e},v={class:"box"},s={class:"pushlogin"},d=Object(a["createTextVNode"])("已有帐号， 马上"),f=i((function(){return Object(a["createElementVNode"])("div",{class:"title"},"注册通行证",-1)})),b={key:0,class:"smsR"},p=i((function(){return Object(a["createElementVNode"])("svg",{t:"1649326805950",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3911",width:"30",height:"30"},[Object(a["createElementVNode"])("path",{d:"M512 537.6l512-156.444444V312.888889c0-62.577778-51.2-113.777778-113.777778-113.777778H113.777778c-62.577778 0-113.777778 51.2-113.777778 113.777778v68.266667l512 156.444444z",fill:"#4B9AFC","p-id":"3912"}),Object(a["createElementVNode"])("path",{d:"M537.6 620.088889l-5.688889 14.222222-19.911111-5.688889-22.755556 5.688889-5.688888-14.222222-483.555556-147.911111V824.888889c0 62.577778 51.2 113.777778 113.777778 113.777778h796.444444c62.577778 0 113.777778-51.2 113.777778-113.777778V472.177778l-486.4 147.911111z",fill:"#4B9AFC","p-id":"3913"})],-1)})),m=[p],O={key:1,class:"emailR"},j=i((function(){return Object(a["createElementVNode"])("svg",{t:"1649326666336",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2247",width:"40",height:"40"},[Object(a["createElementVNode"])("path",{d:"M752.64 102.4C788.48 102.4 819.2 133.12 819.2 174.08v627.2c0 38.4-30.72 71.68-66.56 71.68H296.96C261.12 870.4 230.4 839.68 230.4 798.72V174.08C230.4 133.12 261.12 102.4 296.96 102.4h455.68z m-51.2 504.32c20.48 0 38.4-17.92 38.4-38.4V222.72c0-20.48-17.92-38.4-38.4-38.4H348.16c-20.48 0-38.4 17.92-38.4 38.4v348.16c0 20.48 17.92 38.4 38.4 38.4h353.28z",fill:"#2589FF","p-id":"2248"}),Object(a["createElementVNode"])("path",{d:"M524.8 819.2c-35.84 0-64-28.16-64-64s28.16-64 64-64 64 28.16 64 64-28.16 64-64 64z",fill:"#C5DDFB","p-id":"2249"}),Object(a["createElementVNode"])("path",{d:"M460.8 256h128c15.36 0 25.6 10.24 25.6 25.6s-10.24 25.6-25.6 25.6h-128c-15.36 0-25.6-10.24-25.6-25.6s10.24-25.6 25.6-25.6z",fill:"#A3CCFF","p-id":"2250"})],-1)})),h=[j],g={class:"verifycode"},x=Object(a["createTextVNode"])("发送验证码"),w={class:"readdeal"},N=["fill"],E=Object(a["createTextVNode"])(" 我已阅读"),V=i((function(){return Object(a["createElementVNode"])("span",null,"通行证注册说明",-1)})),k=Object(a["createTextVNode"])("和接受"),y=i((function(){return Object(a["createElementVNode"])("span",null,"通行证注册协议",-1)})),C=Object(a["createTextVNode"])("、"),B=i((function(){return Object(a["createElementVNode"])("span",null,"隐私政策",-1)})),I={key:2,class:"readdealed"},z=Object(a["createTextVNode"])("注册"),R=Object(a["createTextVNode"])("注册"),M=i((function(){return Object(a["createElementVNode"])("div",{class:"wxR"},[Object(a["createTextVNode"])("使用社交帐号注册 "),Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("svg",{t:"1649348403048",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5091",width:"32",height:"32"},[Object(a["createElementVNode"])("path",{d:"M693.12 347.264c11.776 0 23.36 0.896 35.008 2.176-31.36-146.048-187.456-254.528-365.696-254.528C163.2 94.912 0 230.656 0 403.136c0 99.52 54.272 181.248 145.024 244.736L108.8 756.864l126.72-63.488c45.312 8.896 81.664 18.112 126.912 18.112 11.392 0 22.656-0.512 33.792-1.344-7.04-24.256-11.2-49.6-11.2-76.032C385.088 475.776 521.024 347.264 693.12 347.264zM498.304 249.024c27.392 0 45.376 17.984 45.376 45.248 0 27.136-17.984 45.312-45.376 45.312-27.072 0-54.336-18.176-54.336-45.312C443.968 266.944 471.168 249.024 498.304 249.024zM244.672 339.584c-27.2 0-54.592-18.176-54.592-45.312 0-27.264 27.392-45.248 54.592-45.248S289.92 266.944 289.92 294.272C289.92 321.408 271.872 339.584 244.672 339.584zM1024 629.76c0-144.896-145.024-262.976-307.904-262.976-172.48 0-308.224 118.144-308.224 262.976 0 145.28 135.808 262.976 308.224 262.976 36.096 0 72.512-9.024 108.736-18.112l99.392 54.528-27.264-90.624C969.728 783.872 1024 711.488 1024 629.76zM616.128 584.384c-17.984 0-36.224-17.92-36.224-36.224 0-18.048 18.24-36.224 36.224-36.224 27.52 0 45.376 18.176 45.376 36.224C661.504 566.464 643.648 584.384 616.128 584.384zM815.488 584.384c-17.856 0-36.032-17.92-36.032-36.224 0-18.048 18.112-36.224 36.032-36.224 27.264 0 45.376 18.176 45.376 36.224C860.864 566.464 842.752 584.384 815.488 584.384z","p-id":"5092",fill:"#1afa29"})])]),Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("svg",{t:"1649348031357",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3409",width:"32",height:"32"},[Object(a["createElementVNode"])("path",{d:"M849.621 619.904a1364.352 1364.352 0 0 0-28.8-80.47l-38.826-95.829c0-1.109 0.512-19.968 0.512-29.696 0-163.882-78.208-328.576-270.507-328.576S241.493 250.027 241.493 413.867c0 9.77 0.47 28.629 0.512 29.738l-38.826 95.83a1398.485 1398.485 0 0 0-28.8 80.469c-36.694 116.779-24.79 165.12-15.744 166.187 19.413 2.304 75.562-87.894 75.562-87.894 0 52.224 27.179 120.406 86.016 169.643-21.973 6.699-48.938 17.024-66.304 29.653-15.573 11.392-13.61 23.04-10.794 27.734 12.33 20.522 211.413 13.098 268.928 6.698 57.472 6.4 256.597 13.824 268.885-6.741 2.816-4.693 4.779-16.299-10.795-27.69-17.365-12.63-44.33-22.955-66.346-29.697 58.837-49.194 86.016-117.376 86.016-169.642 0 0 56.149 90.24 75.562 87.893 9.046-1.067 20.907-49.365-15.786-166.144",fill:"#1296db","p-id":"3410"})])])],-1)})),S=i((function(){return Object(a["createElementVNode"])("div",{class:"warning"},[Object(a["createElementVNode"])("svg",{t:"1649349431299",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6004",width:"32",height:"32"},[Object(a["createElementVNode"])("path",{d:"M1001.661867 796.544c48.896 84.906667 7.68 157.013333-87.552 157.013333H110.781867c-97.834667 0-139.050667-69.504-90.112-157.013333l401.664-666.88c48.896-87.552 128.725333-87.552 177.664 0l401.664 666.88zM479.165867 296.533333v341.333334a32 32 0 1 0 64 0v-341.333334a32 32 0 1 0-64 0z m0 469.333334v42.666666a32 32 0 1 0 64 0v-42.666666a32 32 0 1 0-64 0z",fill:"#FAAD14","p-id":"6005"})]),Object(a["createTextVNode"])(" 警告：请慎重决定是否注册，因能力有限无法有效地对用户注册时输入的敏感信息的安全进行保护！ ")],-1)})),_=i((function(){return Object(a["createElementVNode"])("div",{class:"footer"},"Copyright © 2019-2022 RAWYILY 中文 English",-1)})),A={setup:function(e){var t=Object(a["ref"])("+86"),l=[{value:"+86",label:"中国(+86)"},{value:"+852",label:"中国香港(+852)"},{value:"+853",label:"中国澳门(+853)"},{value:"+886",label:"中国台湾(+886)"},{value:"+1",label:"美国(+1)"},{value:"+81",label:"日本(+81)"},{value:"+82",label:"韩国(+82)"},{value:"+60",label:"马来西亚(+60)"},{value:"+65",label:"新加坡(+65)"},{value:"+84",label:"越南(+84)"},{value:"+61",label:"澳大利亚(+61)"},{value:"+1",label:"加拿大(+1)"},{value:"+44",label:"英国(+44)"},{value:"+33",label:"法国(+33)"},{value:"+7",label:"俄罗斯(+7)"},{value:"+49",label:"德国(+49)"},{value:"+66",label:"泰国(+66)"},{value:"+91",label:"印度(+91)"},{value:"+63",label:"菲律宾(+63)"},{value:"+55",label:"巴西(+55)"},{value:"+62",label:"印度尼西亚(+62)"},{value:"+39",label:"意大利(+39)"},{value:"+90",label:"土耳其(+90)"},{value:"+64",label:"新西兰(+64)"},{value:"+20",label:"埃及(+20)"}],i=Object(a["ref"])(),p=Object(a["ref"])("@qq.com"),j=[{value:"@126.com"},{value:"@139.com"},{value:"@163.com"},{value:"@163.net"},{value:"@263.net"},{value:"@0355.net"},{value:"@3271.net"},{value:"@aol.com"},{value:"@ask.com"},{value:"@gmail.com"},{value:"@hotmail.com"},{value:"@live.com"},{value:"@msn.com"},{value:"@outlook.com"},{value:"@qq.com"},{value:"@yahoo.com"},{value:"@yeah"},{value:"@sina.com"},{value:"自己填写后缀"}],A=Object(a["ref"])(),T=Object(a["ref"])("email"),F=function(e){T.value=e?"email":"phone"},U=Object(a["ref"])(!1),D=function(e){U.value=e},L=Object(a["ref"])("black"),$=function(){"red"==L.value?L.value="black":L.value="red"},H=Object(a["ref"])(),P=Object(a["ref"])(),q=Object(a["ref"])(),Y=function(){var e=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i,t=/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/i;if("phone"==T.value)if(i.value)if(t.test(i.value)){P.value="验证码正在发送...",H.value=2;var l={IPhoneNumber:i.value};Object(o["g"])(l).then((function(e){200==e.data.code?(P.value="您的验证码是："+e.data.msg,H.value=1,X.value=i.value):(P.value=e.data.msg,H.value=4)})).catch((function(e){console.log(e),P.value="网络错误",H.value=4}))}else P.value='"'+i.value+'"不是正确的手机号格式',H.value=4;else P.value="手机号还是空的",H.value=3;else if("email"==T.value)if(A.value)if(e.test(A.value+p.value)){P.value="验证码正在发送...",H.value=2;var a={EmailNumber:A.value+p.value};Object(o["g"])(a).then((function(e){200==e.data.code?(P.value='已发送验证码到"'+(A.value+p.value)+'"',H.value=1,G.value=A.value+p.value):(P.value=e.data.msg,H.value=4)})).catch((function(e){console.log(e),P.value="网络错误",H.value=4}))}else if(e.test(A.value)){P.value="验证码正在发送...",H.value=2;var n={EmailNumber:A.value};Object(o["g"])(n).then((function(e){200==e.data.code?(P.value='已发送验证码到"'+A.value+'"',H.value=1,G.value=A.value):(P.value=e.data.msg,H.value=4)})).catch((function(e){console.log(e),P.value="网络错误",H.value=4}))}else"自己填写后缀"==p.value?(P.value='"'+A.value+'"不是正确的邮箱格式',H.value=4):(P.value='"'+(A.value+p.value)+'"不是正确的邮箱格式',H.value=4);else P.value="邮箱还是空的",H.value=3;else P.value="请填写手机号或邮箱号",H.value=3},X=Object(a["ref"])(),G=Object(a["ref"])(),K=function(){var e=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i,t=/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/i,l=e.test(A.value),a=e.test(A.value+p.value);if("email"==T.value){if(void 0==A.value|""==A.value)return P.value="请填写邮箱",H.value=4,!1;if(l|a)return!0;P.value="请填写格式正确的邮箱",H.value=4}else if("phone"==T.value)return void 0==i.value|""==i.value?(P.value="请填写手机号",H.value=4,!1):!!t.test(i.value)||(P.value="请填写格式正确的手机号",H.value=4,!1)},Z=function(){return"black"!=L.value||(P.value="请阅读通行证说明",H.value=4,!1)},J=function(){var e=/^[0-9][A-Za-z][0-9][A-Za-z][0-9][A-Za-z]/,t=e.test(q.value);return void 0==q.value?(P.value="请填写验证码",H.value=4,!1):!(void 0!==q.value&&!t)||(P.value="请填写正确的验证码",H.value=4,!1)},W=function(){var e=Z(),t=J(),l=K();if(l&&t&&e)if(P.value="注册中...",H.value=2,X.value&&"phone"==T.value){var a={IPhoneNumber:X.value,code:q.value};console.log(a),Object(o["e"])(a).then((function(e){console.log(e.data),200==e.data.code?(P.value="注册成功",H.value=1,Q("注册成功,初始用户名(验证码)："+q.value+" ,初始密码(验证码)："+q.value+" ,确认跳转登录页！")):(P.value=e.data.msg,H.value=4)})).catch((function(e){console.log(e)}))}else if(G.value&&"email"==T.value){var n={EmailNumber:G.value,code:q.value};Object(o["e"])(n).then((function(e){console.log(e.data),200==e.data.code?(P.value="注册成功",H.value=1,Q("注册成功,初始用户名："+q.value+"(验证码) ,初始密码："+q.value+"(验证码) ,确认跳转登录页！")):(P.value=e.data.msg,H.value=4)})).catch((function(e){console.log(e)}))}else P.value="请重新获取验证码",H.value=4},Q=function(e){u["a"].alert(e,"提示",{confirmButtonText:"确认",callback:function(){r["a"].push("/loginbase/login")}})};return Object(a["onMounted"])((function(){})),function(e,o){var u=Object(a["resolveComponent"])("el-option"),r=Object(a["resolveComponent"])("el-select"),X=Object(a["resolveComponent"])("el-input"),G=Object(a["resolveComponent"])("el-button");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",v,[Object(a["createElementVNode"])("div",s,[d,Object(a["createElementVNode"])("span",{onClick:o[0]||(o[0]=function(t){return e.$router.push("/loginbase/login")})},"登录")]),f,"phone"==Object(a["unref"])(T)?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",b,[Object(a["createVNode"])(r,{modelValue:Object(a["unref"])(t),"onUpdate:modelValue":o[1]||(o[1]=function(e){return Object(a["isRef"])(t)?t.value=e:t=e}),class:"selPN",placeholder:"+86",size:"large"},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(l,(function(e){return Object(a["createVNode"])(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),64))]})),_:1},8,["modelValue"]),Object(a["createVNode"])(X,{class:"phonenumber",minlength:"11",maxlength:"11",clearable:"",modelValue:Object(a["unref"])(i),"onUpdate:modelValue":o[2]||(o[2]=function(e){return Object(a["isRef"])(i)?i.value=e:i=e}),placeholder:"手机号注册",size:"large"},null,8,["modelValue"]),Object(a["createElementVNode"])("div",{onClick:o[3]||(o[3]=function(e){return F(!0)}),class:"icon"},m)])):"email"==Object(a["unref"])(T)?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",O,[Object(a["createVNode"])(r,{modelValue:Object(a["unref"])(p),"onUpdate:modelValue":o[4]||(o[4]=function(e){return Object(a["isRef"])(p)?p.value=e:p=e}),class:"selEmail",placeholder:"@qq.com",size:"large"},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(j,(function(e){return Object(a["createVNode"])(u,{key:e.value,label:e.value,value:e.value},null,8,["label","value"])})),64))]})),_:1},8,["modelValue"]),Object(a["createVNode"])(X,{class:"emailnumber",maxlength:"32",clearable:"",modelValue:Object(a["unref"])(A),"onUpdate:modelValue":o[5]||(o[5]=function(e){return Object(a["isRef"])(A)?A.value=e:A=e}),placeholder:"邮箱注册",size:"large"},null,8,["modelValue"]),Object(a["createElementVNode"])("div",{onClick:o[6]||(o[6]=function(e){return F(!1)}),class:"icon"},h)])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(Object(a["unref"])(n["a"]),{class:"verify",onVerify:D}),Object(a["withDirectives"])(Object(a["createElementVNode"])("div",g,[Object(a["createVNode"])(X,{class:"verifycodeElinput",size:"large",clearable:"",modelValue:Object(a["unref"])(q),"onUpdate:modelValue":o[7]||(o[7]=function(e){return Object(a["isRef"])(q)?q.value=e:q=e}),minlength:"6",maxlength:"6"},null,8,["modelValue"]),Object(a["createVNode"])(G,{class:"verifycodeElbutton",size:"large",onClick:Y},{default:Object(a["withCtx"])((function(){return[x]})),_:1})],512),[[a["vShow"],Object(a["unref"])(U)]]),Object(a["createVNode"])(c["a"],{class:"alertwran",alertnum:Object(a["unref"])(H),alert:Object(a["unref"])(P)},null,8,["alertnum","alert"]),Object(a["createElementVNode"])("div",w,[(Object(a["openBlock"])(),Object(a["createElementBlock"])("svg",{onClick:$,t:"1649330977316",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3653",width:"15",height:"15"},[Object(a["createElementVNode"])("path",{d:"M511.999994 0C229.205543 0 0.020822 229.226376 0.020822 512.020827c0 282.752797 229.184721 511.979173 511.979173 511.979173s511.979173-229.226376 511.979173-511.979173C1023.979167 229.226376 794.794446 0 511.999994 0zM815.371918 318.95082l-346.651263 461.201969c-10.830249 14.370907-27.32555 23.409999-45.27877 24.742952-1.582882 0.124964-3.12411 0.166619-4.665338 0.166619-16.328682 0-32.074198-6.373185-43.779197-17.911565l-192.903389-189.44604c-24.617988-24.20144-24.992881-63.731847-0.791441-88.349835 24.20144-24.659643 63.731847-24.951226 88.349835-0.833096l142.042875 139.501932 303.788472-404.2182c20.744091-27.575479 59.899605-33.115568 87.516739-12.413131C830.534266 252.219827 836.116009 291.375341 815.371918 318.95082z","p-id":"3654",fill:Object(a["unref"])(L)},null,8,N)])),E,V,k,y,C,B]),"black"==Object(a["unref"])(L)?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",I,"请勾选！")):Object(a["createCommentVNode"])("",!0),1==Object(a["unref"])(U)?(Object(a["openBlock"])(),Object(a["createBlock"])(G,{key:3,class:"smslogin",size:"large",onClick:o[8]||(o[8]=function(e){return W()})},{default:Object(a["withCtx"])((function(){return[z]})),_:1})):0==Object(a["unref"])(U)?(Object(a["openBlock"])(),Object(a["createBlock"])(G,{key:4,class:"smslogin2",size:"large"},{default:Object(a["withCtx"])((function(){return[R]})),_:1})):Object(a["createCommentVNode"])("",!0),M,S,_])}}},T=(l("0d6f"),l("6b0d")),F=l.n(T);const U=F()(A,[["__scopeId","data-v-0ff903c6"]]);t["default"]=U},a9e3d:function(e,t,l){"use strict";var a=l("83ab"),n=l("da84"),c=l("e330"),o=l("94ca"),u=l("6eeb"),r=l("1a2d"),i=l("7156"),v=l("3a9b"),s=l("d9b5"),d=l("c04e"),f=l("d039"),b=l("241c").f,p=l("06cf").f,m=l("9bf2").f,O=l("408a"),j=l("58a8").trim,h="Number",g=n[h],x=g.prototype,w=n.TypeError,N=c("".slice),E=c("".charCodeAt),V=function(e){var t=d(e,"number");return"bigint"==typeof t?t:k(t)},k=function(e){var t,l,a,n,c,o,u,r,i=d(e,"number");if(s(i))throw w("Cannot convert a Symbol value to a number");if("string"==typeof i&&i.length>2)if(i=j(i),t=E(i,0),43===t||45===t){if(l=E(i,2),88===l||120===l)return NaN}else if(48===t){switch(E(i,1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+i}for(c=N(i,2),o=c.length,u=0;u<o;u++)if(r=E(c,u),r<48||r>n)return NaN;return parseInt(c,a)}return+i};if(o(h,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var y,C=function(e){var t=arguments.length<1?0:g(V(e)),l=this;return v(x,l)&&f((function(){O(l)}))?i(Object(t),l,C):t},B=a?b(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),I=0;B.length>I;I++)r(g,y=B[I])&&!r(C,y)&&m(C,y,p(g,y));C.prototype=x,x.constructor=C,u(n,h,C)}},ac1f:function(e,t,l){"use strict";var a=l("23e7"),n=l("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,l){"use strict";var a=l("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},c249:function(e,t,l){"use strict";l("1ab9")},d9b6:function(e,t,l){},e34d:function(e,t,l){"use strict";l("a9e3d");var a=l("7a23"),n={class:"alert"},c={props:{alertnum:Number,alert:String},setup:function(e){return Object(a["onMounted"])((function(){})),function(t,l){var c=Object(a["resolveComponent"])("el-alert");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[1==e.alertnum?(Object(a["openBlock"])(),Object(a["createBlock"])(c,{key:0,effect:"dark",title:e.alert,type:"success",center:"",closable:!1,"show-icon":""},null,8,["title"])):2==e.alertnum?(Object(a["openBlock"])(),Object(a["createBlock"])(c,{key:1,effect:"dark",title:e.alert,type:"info",center:"",closable:!1,"show-icon":""},null,8,["title"])):3==e.alertnum?(Object(a["openBlock"])(),Object(a["createBlock"])(c,{key:2,effect:"dark",title:e.alert,type:"warning",center:"",closable:!1,"show-icon":""},null,8,["title"])):4==e.alertnum?(Object(a["openBlock"])(),Object(a["createBlock"])(c,{key:3,effect:"dark",title:e.alert,type:"error",center:"",closable:!1,"show-icon":""},null,8,["title"])):Object(a["createCommentVNode"])("",!0)])}}},o=(l("a286"),l("6b0d")),u=l.n(o);const r=u()(c,[["__scopeId","data-v-b3f98154"]]);t["a"]=r},ee3a:function(e,t,l){},fce3:function(e,t,l){var a=l("d039"),n=l("da84"),c=n.RegExp;e.exports=a((function(){var e=c(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-5b28524a.2ec7f22b.js.map