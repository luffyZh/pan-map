parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"lCeZ":[function(require,module,exports) {
var e=$("#mask-rule"),s=$("#mask"),a=$(".winning"),t=$("#card"),o=$("#close");function n(){s.show(),a.addClass("reback"),setTimeout(function(){t.addClass("pull")},500),$("#close,.win,.btn").click(function(){s.hide(),a.removeClass("reback"),t.removeClass("pull")})}function i(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var s=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===s?"":decodeURIComponent(s[1].replace(/\+/g," "))}$(".rule").click(function(){e.show()}),$("#close-rule").click(function(){e.hide()}),$(function(){var e,s=$("#hammer"),a=$(".info"),t=$(".egg li"),o=$(".goldegg"),i=$("#change"),r=o.length,c={count:5},l=[],u=75;$(function(){if($.cookie("eggIndex")){e=$.cookie("eggIndex").split(",");for(var s=0;s<e.length;s++)l.push(parseFloat(e[s])),o.eq(parseFloat(e[s])).prop("src","../image/step3.png"),o.eq(parseFloat(e[s])).removeClass("init"),o.eq(parseFloat(e[s])).data("mark",!1)}o.eq(r).addClass("jump"),a.eq(r).show(),setInterval(function(){r++,r%=9,o.eq(r-1<0?8:r-1).removeClass("jump"),a.eq(r-1<0?8:r-1).hide(),function e(){o.eq(r).hasClass("init")||(r++,r%=9,e())}(),o.eq(r).addClass("jump"),a.eq(r).show()},1e3)});for(var m=0;m<r;m++)o.eq(m).data("mark",!0),t.eq(m).data("i",m),t.eq(m).click(function(){c.count>0?o.eq($(this).data("i")).data("mark")?p($(this).data("i")):alert("这枚金蛋已经被您砸开了"):alert("您当前砸蛋次数为0，无法砸蛋")});function p(e){c.count--,i.html(c.count),s.removeClass("shak"),(0===e||3===e||6===e)&&s.css("left",165/u+"rem"),(1===e||4===e||7===e)&&s.css("left",415/u+"rem"),(2===e||5===e||8===e)&&s.css("left",665/u+"rem"),(0===e||1===e||2===e)&&s.css("top",60/u+"rem"),(3===e|4===e||5===e)&&s.css("top",280/u+"rem"),(6===e|7===e||8===e)&&s.css("top",500/u+"rem"),setTimeout(function(){s.css({left:665/u+"rem",top:60/u+"rem"})},1500),setTimeout(function(){s.addClass("hit"),setTimeout(function(){o.eq(e).prop("src","../image/step3.png")},300),setTimeout(function(){o.eq(e).removeClass("init"),n(),s.removeClass("hit"),s.addClass("shak"),l.push(e),$.cookie("eggIndex",l,{expires:1})},600)},600),o.eq(e).data("mark",!1)}new Swiper(".swiper-container",{direction:"horizontal",loop:!1,slidesPerView:"auto"})});
},{}]},{},["lCeZ"], null)
//# sourceMappingURL=/js.91951c16.map