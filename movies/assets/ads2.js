//ads
document.writeln("<style>");
document.writeln("*,:after,:before{box-sizing:border-box}.center_ad{width:300;height:250;display:flex;align-items:center;justify-content:center;text-align:center}#close_ad{right:0;top:1px;float:right;z-index:9999999999;position:absolute;padding:2px;font-weight:200;border-radius:2px;border:1px solid #fff;background:red;color:#fff;text-align:center;cursor:pointer;width:34px;height:34px;line-height:30px;font-size:18px}#close_ad:hover{color:#000;opacity:.9;background:#4da368}@media only screen and (max-width: 600px){#close_ad{width:38px;height:38px;font-size:30px}}#ad_asd{position:fixed;width:300;height:250;top:50%;left:50%;margin:-125px 0 0 -150px;z-index:999999999;background-color:#1b1b1b;border:1px solid #666;border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px;-khtml-border-radius:2px;transform:translateY(-100%);-webkit-transform:translateY(-100%)}.slide_in{animation:slide_in .9s forwards;-webkit-animation:slide_in .9s forwards}.slide_out{animation:slide_out .9s forwards;-webkit-animation:slide_out .9s forwards}@keyframes slide_in{100%{transform:translateY(0%)}}@-webkit-keyframes slide_in{100%{-webkit-transform:translateY(0%)}}@keyframes slide_out{0%{transform:translateY(0%)}100%{transform:translateY(250%)}}@-webkit-keyframes slide_out{0%{-webkit-transform:translateY(0%)}100%{-webkit-transform:translateY(250%)}}");
document.writeln("</style>");
document.writeln("<div id=\"ad_asd\" class=\"slide_in\" style=\"display: none;\">");
document.writeln("<span title=\"Close\" id=\"close_ad\">X</span>");
document.writeln("<div class=\"center_ad\">");
document.writeln("
	atOptions = {
		'key' : 'd09c34e4a259126a64f12a4252047134',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.effectivecreativeformats.com/d09c34e4a259126a64f12a4252047134/invoke.js"></scr' + 'ipt>');
");
document.writeln("</div>");
document.writeln("</div>");
var elem=document.getElementById("close_ad");elem.addEventListener("click touchstart",handler,!1);elem.addEventListener("click",handler,!1);function handler(b){var a=document.getElementById("ad_asd");b=a.classList.contains("slide_in");setTimeout(function(){a.parentNode.removeChild(a)},500);a.setAttribute("class",b?"slide_out":"slide_in")};setTimeout(function(){document.getElementById("ad_asd").style.display="block"},3E3);
  
