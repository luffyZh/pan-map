parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"lCeZ":[function(require,module,exports) {
var e=$("#mask-rule"),s=$("#mask"),t=$(".winning"),o=$("#card"),a=$("#close");function n(){s.show(),t.addClass("reback"),setTimeout(function(){o.addClass("pull")},500),$("#close,.win,.btn").click(function(){s.hide(),t.removeClass("reback"),o.removeClass("pull")})}function i(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var s=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===s?"":decodeURIComponent(s[1].replace(/\+/g," "))}$(".rule").click(function(){e.show()}),$("#close-rule").click(function(){e.hide()}),$(function(){var e,s=$("#hammer"),t=$(".info"),o=$(".egg li"),a=$(".goldegg"),i=$("#change"),r=a.length,l={count:5},c=[],m=75;$(function(){if(window.sessionStorage.getItem("openedEgg")){e=window.sessionStorage.getItem("openedEgg").split(",");for(var s=0;s<e.length;s++)c.push(parseFloat(e[s])),a.eq(parseFloat(e[s])).prop("src","../image/step3.png"),a.eq(parseFloat(e[s])).removeClass("init"),a.eq(parseFloat(e[s])).data("mark",!1)}a.eq(r).addClass("jump"),t.eq(r).show(),setInterval(function(){r++,r%=9,a.eq(r-1<0?8:r-1).removeClass("jump"),t.eq(r-1<0?8:r-1).hide(),function e(){a.eq(r).hasClass("init")||(r++,r%=9,e())}(),a.eq(r).addClass("jump"),t.eq(r).show()},1e3)});for(var u=0;u<r;u++)a.eq(u).data("mark",!0),o.eq(u).data("i",u),o.eq(u).click(function(){l.count>0?a.eq($(this).data("i")).data("mark")?d($(this).data("i")):alert("这枚金蛋已经被您砸开了"):alert("您当前砸蛋次数为0，无法砸蛋")});function d(e){l.count--,i.html(l.count),s.removeClass("shak"),(0===e||3===e||6===e)&&s.css("left",165/m+"rem"),(1===e||4===e||7===e)&&s.css("left",415/m+"rem"),(2===e||5===e||8===e)&&s.css("left",665/m+"rem"),(0===e||1===e||2===e)&&s.css("top",60/m+"rem"),(3===e|4===e||5===e)&&s.css("top",280/m+"rem"),(6===e|7===e||8===e)&&s.css("top",500/m+"rem"),setTimeout(function(){s.css({left:665/m+"rem",top:60/m+"rem"})},1500),setTimeout(function(){s.addClass("hit"),setTimeout(function(){a.eq(e).prop("src","../image/step3.png")},300),setTimeout(function(){a.eq(e).removeClass("init"),n(),s.removeClass("hit"),s.addClass("shak"),c.push(e),window.sessionStorage.setItem("openedEgg",c.join(","))},600)},600),a.eq(e).data("mark",!1)}new Swiper(".swiper-container",{direction:"horizontal",loop:!1,slidesPerView:"auto"})});
},{}]},{},["lCeZ"], null)
//# sourceMappingURL=/js.a2cbd6d9.map