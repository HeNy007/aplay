document.write('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"/><a href="https://t.me/AliwixPlay" class="tel" target="_blank"><i class="fab fa-telegram t"></i></a><style>.tel{position:fixed;width:60px;height:60px;bottom:40px;left:50px;background-color:#57b7eb;color:#FFF;border-radius:50px;text-align:center;font-size:40px;z-index:100} .t{color:#FFF;margin-top:10px} .tel{animation:pulse 2s infinite} .tel:hover{box-shadow: 2px 2px 11px rgb(0 0 0 / 70%);}   @keyframes btnun-what{10%{transform:translate(0,200px)}50%{transform:translate(0,-40px)}70%{transform:scale(1.1)}} @keyframes pulse{50%{transform:scale(1.1)}}   </style>');
function gup(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var n="[\\?&]"+e+"=([^&#]*)",
l=new RegExp(n),
c=l.exec(window.location.href);
return null==c?"":unescape(c[1])}
var time=gup("time");
var dis=gup("disc");
var disc=atob(dis);
var tit=gup("title");
var title=atob(tit);
var video=gup("src");
var vid=atob(video);
var cover=gup("cover");
var profile=gup("profile");
var trailer=gup("trailer");
