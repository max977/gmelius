$(document).ready(function(){$("#top,#share-box").hide();$("#emh").append('<n uers="znvygb:vasb@tzryvhf.pbz" ery="absbyybj">Pbagnpg</n>'.replace(/[a-zA-Z]/g,function(r){return String.fromCharCode((r<="Z"?90:122)>=(r=r.charCodeAt(0)+13)?r:r-26)}));var p={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(u){for(var r=0;r<u.length;r++){var s=u[r].string;var t=u[r].prop;this.versionSearchString=u[r].versionSearch||u[r].identity;if(s){if(s.indexOf(u[r].subString)!=-1){return u[r].identity}}else{if(t){return u[r].identity}}}},searchVersion:function(s){var r=s.indexOf(this.versionSearchString);if(r==-1){return}return parseFloat(s.substring(r+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};p.init();var h=p.OS;var j=p.browser;var k=j.toLowerCase();var m=p.version;var i,l,b,q,o,g,c;if(j==="Chrome"){l="Compatibility: from Chrome 18";b="#get-it";if(m<"18"){g==true;o="http://support.google.com/chrome/bin/answer.py?hl=en&answer=95414";c='<span class="icon">=</span>You should <a href="'+o+'" target="_blank">update Chrome/Chromium</a> before installing Gmelius&trade; since we cannot guarantee it to work with your current version ('+m+").";$("#update-me").css("display","block").append(c)}$("#download").click(function(){chrome.webstore.install()})}else{if(j==="Firefox"){l="Compatibility : Firefox 10-14";b="https://addons.mozilla.org/en-us/firefox/addon/gmail-ad-remover/";if(m<"10"){g==true;o="http://www.mozilla.org/firefox/";c='<span class="icon">=</span>You need to <a href="'+o+'" target="_blank">update '+j+"</a> before installing Gmelius&trade;.";$("#update-me").css("display","block").append(c)}}else{if(j==="Opera"){l="Compatibility : from Opera 11";b="https://addons.opera.com/extensions/download/gmelius-no-ads-and-better-ui-for-gmail/";if(m<"9"){g==true;o="http://www.opera.com/";c='<span class="icon">=</span>You need to <a href="'+o+'" target="_blank">update '+j+"</a> before installing Gmelius&trade;.";$("#update-me").css("display","block").append(c)}}else{if(j==="Safari"){l="Not available yet";b=""}else{if(j==="Explorer"){l="Not available yet";b=""}else{l="Nothing found for your browser";b=""}}}}}q="http://support.gmelius.com/"+k;$("#logob").addClass(k);$("#browser").append(j);$("#comp").append(l);$("#download-link").attr("href",b);$("#support,#support-foot").attr("href",q);(function(v,r){var u,s=v.getElementsByTagName(r)[0],t=function(w,x){if(v.getElementById(x)){return}u=v.createElement(r);u.src=w;x&&(u.id=x);s.parentNode.insertBefore(u,s)};t("https://apis.google.com/js/plusone.js");t("//connect.facebook.net/en_US/all.js#xfbml=1&appId=234524816574248","facebook-jssdk");t("//platform.twitter.com/widgets.js","twitter-wjs")}(document,"script"));var n='<ul><li class="go"><div class="g-plusone" data-size="medium" data-href="http://gmelius.com"></div><li class="fb"><div class="fb-like" data-href="https://www.facebook.com/adremover" data-send="false" data-layout="button_count" data-width="105" data-show-faces="false"></div><li class="tw"><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://gmelius.com">Tweet</a></ul>';$("#share,#share-box").append(n);$("#hover").hover(function(){$("#share-box").fadeIn("slow")});$("body").click(function(){$("#share-box").fadeOut("slow")});$(window).scroll(function(){if($(this).scrollTop()>100){$("#top").fadeIn()}else{$("#top").fadeOut()}});function f(r){return r.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")}var a=f(location.pathname);var e=d("html","body");$("a[href*=#]").each(function(){var s=f(this.pathname)||a;if(a==s&&(location.hostname==this.hostname||!this.hostname)&&this.hash.replace(/#/,"")){var r=$(this.hash),t=this.hash;if(t){var u=r.offset().top;$(this).click(function(v){$("#nav a").removeClass("selected");v.preventDefault();$(this).addClass("selected");$(e).animate({scrollTop:u},400,function(){location.hash=t})})}}});function d(u){for(var t=0,w=arguments.length;t<w;t++){var v=arguments[t],r=$(v);if(r.scrollTop()>0){return v}else{r.scrollTop(1);var s=r.scrollTop()>0;r.scrollTop(0);if(s){return v}}}return[]}});
