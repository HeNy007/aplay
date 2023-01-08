

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
var vid=gup("src");
var cover=gup("cover");
var trailer=gup("trailer");
