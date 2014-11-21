var articlepage_careersComponentArray=[];
var articlepage_employeeComponentArray=[];
var articlepage_eventComponentArray=[];
var articlepage_featuredComponentArray=[];
var articlepage_standardComponentArray=[];
var articlepage_solutionsComponentArray=[];
var discoverMore_promoComponentString="";
var nextSteps_promoComponentString="";
var maxLengthArray=5;
var tagsStringForDMTags="";
var articlepage_curatedCareersComponentArray=[];
var articlepage_curatedEmployeeComponentArray=[];
var articlepage_curatedEventComponentArray=[];
var articlepage_curatedFeaturedComponentArray=[];
var articlepage_curatedStandardComponentArray=[];
var articlepage_curatedSolutionsComponentArray=[];
var tagValuesArray=[];
var curatedPromosCount=0;
function registerCuratedPromos(a,b){if(b=="career"){articlepage_curatedCareersComponentArray.push(a)
}else{if(b=="profiles"){articlepage_curatedEmployeeComponentArray.push(a)
}else{if(b=="events"){articlepage_curatedEventComponentArray.push(a)
}else{if(b=="featured"){articlepage_curatedFeaturedComponentArray.push(a)
}else{if(b=="standard"){articlepage_curatedStandardComponentArray.push(a)
}else{if(b=="solutions"){articlepage_curatedSolutionsComponentArray.push(a)
}}}}}}curatedPromosCount++
}function registerPromos(a,b){if(b=="career"){articlepage_careersComponentArray.push(a)
}else{if(b=="profiles"){articlepage_employeeComponentArray.push(a)
}else{if(b=="events"){articlepage_eventComponentArray.push(a)
}else{if(b=="featured"){articlepage_featuredComponentArray.push(a)
}else{if(b=="standard"){articlepage_standardComponentArray.push(a)
}else{if(b=="solutions"){articlepage_solutionsComponentArray.push(a)
}}}}}}}function findMaxLengthArray(){var b=[];
b.push(articlepage_careersComponentArray.length);
b.push(articlepage_employeeComponentArray.length);
b.push(articlepage_eventComponentArray.length);
b.push(articlepage_solutionsComponentArray.length);
b.push(articlepage_featuredComponentArray.length+articlepage_standardComponentArray.length);
maxLengthArray=b[0];
for(var a=1;
a<6;
a++){if(b[a]>maxLengthArray){maxLengthArray=b[a]
}}return maxLengthArray
}$(document).ready(function(){var b=findMaxLengthArray();
if(contentPageTagsString==""){contentPageTagsString="*"
}var c="";
var a="";
if(b>0){c+=memberFirmSNPURL;
c+="?count="+b;
c+="&do=next-disc";
c+="&sp_x_1=sc-pagename&sp_q_1="+contentPageExclusionList+"&sp_q_required_1=-1&callback=?";
c+="&q="+contentPageTagsString;
if(c.length>8000){c=c.substring(0,8000)+'"'
}$.getJSON(c,function(d){$.each(d,function(f,e){populateNextStepsAndDiscoverMorePromosJSONData(e)
});
tagsStringForDMTags=tagsStringForDMTags.replace(/\|/g,'" "');
tagsStringForDMTags='"'+tagsStringForDMTags+'"';
tagsStringForDMTags+=contentPageCuratedPromosTags;
tagsStringForDMTags=escape(tagsStringForDMTags);
a+=memberFirmSNPURL;
a+="?do=disc-tag";
a+="&sp_x_1=sc-pagename&sp_q_1="+moreTopicTagsURLHashValue+"&sp_q_required_1=-1&callback=?";
a+="&q="+tagsStringForDMTags;
if(a.length>8000){a=a.substring(0,8000)+'"'
}if(b>0||curatedPromosCount>0){$.getJSON(a,function(e){$.each(e,function(g,f){populateDiscoverMoreSimilarTrendsTagsData(f)
})
})
}})
}else{if(curatedPromosCount>0){tagsStringForDMTags+=contentPageCuratedPromosTags;
tagsStringForDMTags=escape(tagsStringForDMTags);
a+=memberFirmSNPURL;
a+="?do=disc-tag";
a+="&sp_x_1=sc-pagename&sp_q_1="+moreTopicTagsURLHashValue+"&sp_q_required_1=-1&callback=?";
a+="&q="+tagsStringForDMTags;
if(a.length>8000){a=a.substring(0,8000)+'"'
}$.getJSON(a,function(d){$.each(d,function(f,e){populateDiscoverMoreSimilarTrendsTagsData(e)
})
})
}}$(window).resize();
if(/MSIE (9\.[\.0-9]{0,})/i.test(navigator.userAgent)){setAllDesktopImages()
}else{setAllImgsRendition()
}});
function populateNextStepsAndDiscoverMorePromosJSONData(b){var c=0;
var a=0;
$.each(b,function(d,e){$.each(e,function(f,g){if(f=="career"&&articlepage_careersComponentArray.length>0){$.each(g,function(s,k){var r=k.index;
var h=k.url;
h=checkExternalLink(h);
var o="_self";
if((h.indexOf("http://")>=0)||(h.indexOf("https://")>=0)){o="_blank"
}var p=CQ.shared.XSS.getXSSValue(k.heading1);
var l=CQ.shared.XSS.getXSSValue(k.heading2);
var u=k.description;
var n=CQ.shared.XSS.getXSSValue(k["content-type"]);
var q=k["career-locations"];
var i=k["career-firm-service"];
var m=k["career-type"];
var t=k["page-type"];
var j=k["page-views"];
if(k.tags!=undefined){tagsStringForDMTags+=k.tags+"|"
}if(articlepage_careersComponentArray.length>s){$("#"+articlepage_careersComponentArray[s]+" a").attr("href",h).attr("target",o).attr("data-cq-id",k["cq-id"]);
$("#"+articlepage_careersComponentArray[s]+" .promo-label").html(n);
$("#"+articlepage_careersComponentArray[s]+" .tertiary-headline").html(p);
$("#"+articlepage_careersComponentArray[s]+" .page-description-for-promo").html(u);
if(nextSteps_promoComponentString==""){nextSteps_promoComponentString=k["cq-id"]
}else{nextSteps_promoComponentString+=","+k["cq-id"]
}}});
hideEmptyPromosContentPage(articlepage_careersComponentArray,g)
}else{if(f=="profiles"&&articlepage_employeeComponentArray.length>0){$.each(g,function(q,k){var p=k.index;
var h=k.url;
h=checkExternalLink(h);
var l="_self";
if((h.indexOf("http://")>=0)||(h.indexOf("https://")>=0)){l="_blank"
}var n=CQ.shared.XSS.getXSSValue(k.heading1);
var i=CQ.shared.XSS.getXSSValue(k["employee-title"]);
if(n==undefined){n=""
}if(i==undefined){i=n
}var m="Our People";
if(k["content-type"]!=undefined){m=CQ.shared.XSS.getXSSValue(k["content-type"])
}var j=k["profile-surname"];
var o=k["profile-given-name"];
var r=k.image;
if(k.tags!=undefined){tagsStringForDMTags+=k.tags+"|"
}if(articlepage_employeeComponentArray.length>q){$("#"+articlepage_employeeComponentArray[q]+" a").attr("href",h).attr("target",l).attr("data-cq-id",k["cq-id"]);
$("#"+articlepage_employeeComponentArray[q]+" .promo-label").html(m);
$("#"+articlepage_employeeComponentArray[q]+" .tertiary-headline").html(o);
$("#"+articlepage_employeeComponentArray[q]+" .employee-image img").attr("alt","").attr("data-orgsrc",r);
$("#"+articlepage_employeeComponentArray[q]+" .employee-title p").html(i);
if(nextSteps_promoComponentString==""){nextSteps_promoComponentString=k["cq-id"]
}else{nextSteps_promoComponentString+=","+k["cq-id"]
}}});
hideEmptyPromosContentPage(articlepage_employeeComponentArray,g)
}else{if(f=="events"&&articlepage_eventComponentArray.length>0){$.each(g,function(q,r){var p=r.index;
var h=r.url;
h=checkExternalLink(h);
var n="_self";
if((h.indexOf("http://")>=0)||(h.indexOf("https://")>=0)){n="_blank"
}var o=CQ.shared.XSS.getXSSValue(r.heading1);
var k=CQ.shared.XSS.getXSSValue(r.heading2);
var s=r.description;
var m=CQ.shared.XSS.getXSSValue(r["content-type"]);
var i=r.address;
var l=r.city;
var j=r["event-date"];
if(r.tags!=undefined){tagsStringForDMTags+=r.tags+"|"
}if(articlepage_eventComponentArray.length>q){$("#"+articlepage_eventComponentArray[q]+" a").attr("href",h).attr("target",n).attr("data-cq-id",r["cq-id"]);
$("#"+articlepage_eventComponentArray[q]+" .promo-label").html(m);
$("#"+articlepage_eventComponentArray[q]+" .tertiary-headline").html(o);
$("#"+articlepage_eventComponentArray[q]+" .page-description-for-promo").html(s);
if(nextSteps_promoComponentString==""){nextSteps_promoComponentString=r["cq-id"]
}else{nextSteps_promoComponentString+=","+r["cq-id"]
}}});
hideEmptyPromosContentPage(articlepage_eventComponentArray,g)
}else{if(f=="solutions"&&articlepage_solutionsComponentArray.length>0){$.each(g,function(r,o){var q=o.index;
var h=o.url;
h=checkExternalLink(h);
var n="_self";
if((h.indexOf("http://")>=0)||(h.indexOf("https://")>=0)){n="_blank"
}var p=CQ.shared.XSS.getXSSValue(o.heading1);
var k=CQ.shared.XSS.getXSSValue(o.heading2);
var s=o.description;
var m=CQ.shared.XSS.getXSSValue(o["content-type"]);
var i=o.address;
var l=o.city;
var j=o["event-date"];
if(o.tags!=undefined){tagsStringForDMTags+=o.tags+"|"
}if(articlepage_solutionsComponentArray.length>r){$("#"+articlepage_solutionsComponentArray[r]+" a").attr("href",h).attr("target",n).attr("data-cq-id",o["cq-id"]);
$("#"+articlepage_solutionsComponentArray[r]+" .promo-label").html(m);
$("#"+articlepage_solutionsComponentArray[r]+" .tertiary-headline").html(p);
$("#"+articlepage_solutionsComponentArray[r]+" .page-description-for-promo").html(s);
if(nextSteps_promoComponentString==""){nextSteps_promoComponentString=o["cq-id"]
}else{nextSteps_promoComponentString+=","+o["cq-id"]
}}});
hideEmptyPromosContentPage(articlepage_solutionsComponentArray,g)
}else{if(f=="featured"){$.each(g,function(p,o){var n=o.index;
var h=o.url;
h=checkExternalLink(h);
var l="_self";
if((h.indexOf("http://")>=0)||(h.indexOf("https://")>=0)){l="_blank"
}var m=CQ.shared.XSS.getXSSValue(o.heading1);
var j=CQ.shared.XSS.getXSSValue(o.heading2);
var t=o.description;
var k=CQ.shared.XSS.getXSSValue(o["content-type"]);
var s=o.image;
var r=o["page-type"];
var i=o["page-views"];
var q=o.featured;
if(o.description==undefined){t=j
}if(o.tags!=undefined){tagsStringForDMTags+=o.tags+"|"
}if(q=="1"&&c<articlepage_featuredComponentArray.length){if(articlepage_featuredComponentArray.length>0&&(c<articlepage_featuredComponentArray.length)){$("#"+articlepage_featuredComponentArray[c]+" a").attr("href",h).attr("target",l).attr("data-cq-id",g["cq-id"]);
$("#"+articlepage_featuredComponentArray[c]+" .promo-label").html(k);
$("#"+articlepage_featuredComponentArray[c]+" .secondary-headline.white-title").html(m);
$("#"+articlepage_featuredComponentArray[c]+" .secondary-headline.green-title").html(j);
$("#"+articlepage_featuredComponentArray[c]+" .article-image img").attr("alt","").attr("data-orgsrc",s);
c++;
if(o["cq-id"]!=undefined){if(discoverMore_promoComponentString==""){discoverMore_promoComponentString=o["cq-id"]
}else{discoverMore_promoComponentString+=","+o["cq-id"]
}}}}else{if(q!="1"||c>=articlepage_featuredComponentArray.length){if(articlepage_standardComponentArray.length>0&&(a<articlepage_standardComponentArray.length)){$("#"+articlepage_standardComponentArray[a]+" a").attr("href",h).attr("target",l).attr("data-cq-id",o["cq-id"]);
$("#"+articlepage_standardComponentArray[a]+" .promo-label").html(k);
$("#"+articlepage_standardComponentArray[a]+" .tertiary-headline").html(m);
$("#"+articlepage_standardComponentArray[a]+" .page-description-for-promo").html(t);
a++;
if(o["cq-id"]!=undefined){if(discoverMore_promoComponentString==""){discoverMore_promoComponentString=o["cq-id"]
}else{discoverMore_promoComponentString+=","+o["cq-id"]
}}}}}});
hideEmptyFeaturedStandardPromos()
}}}}}})
})
}function trackTags(a){var b=new Array();
b[0]="event26";
var c=new Object();
c.pageName=sc_currentPageName+"_TagClick_"+a;
c.prop75=sc_currentPageName+"_TagClick_"+a;
c.list1=a;
c.eVar31=a;
recordSitecatEvent(b,c,"TagClick")
}function populateDiscoverMoreSimilarTrendsTagsData(a){$.each(a,function(b,c){$.each(c,function(d,e){$.each(e,function(g,j){var h=j.index;
var i=j.url;
var k=j.tag;
tagValuesArray.push(j["cq-name"]);
var f="<li><a class='body-copy' href='"+i+"' onclick='javascript:return trackTags(\""+j["cq-name"]+"\");'>"+k+"</a></li>";
$("div.similar-trends ul.article-tags").append(f)
});
$("div.similar-trends ul.article-tags").append("<li class='for-clear'></li>")
})
})
}function hideEmptyPromosContentPage(c,a){if(c.length>a.length){for(var b=a.length;
b<c.length;
b++){if(wcmMode=="DISABLED"){$("#"+c[b]).hide()
}else{$("#"+c[b]+" .promo-label").html(emptyPromoMessage)
}}}}function hideEmptyFeaturedStandardPromos(){for(var a=0;
a<articlepage_featuredComponentArray.length;
a++){if($("#"+articlepage_featuredComponentArray[a]+" .promo-label").html()==""&&wcmMode=="DISABLED"){$("#"+articlepage_featuredComponentArray[a]).hide()
}else{if($("#"+articlepage_featuredComponentArray[a]+" .promo-label").html()==""&&wcmMode!="DISABLED"){$("#"+articlepage_featuredComponentArray[a]+" .promo-label").html(emptyPromoMessage)
}}}for(var a=0;
a<articlepage_standardComponentArray.length;
a++){if($("#"+articlepage_standardComponentArray[a]+" .promo-label").html()==""&&wcmMode=="DISABLED"){$("#"+articlepage_standardComponentArray[a]).hide()
}else{if($("#"+articlepage_standardComponentArray[a]+" .promo-label").html()==""&&wcmMode!="DISABLED"){$("#"+articlepage_standardComponentArray[a]+" .promo-label").html(emptyPromoMessage)
}}}}$(document).ready(function(){if((/MSIE (9\.[\.0-9]{0,})|Android|webOS|BlackBerry/i.test(navigator.userAgent))){setTimeout(function(){$(".content-page iframe#twitter-widget-0").contents().find("head").append($("<link rel='stylesheet' href='/etc/designs/dcom/assets/css/components/social-panel/tweets-panel.css'/>"));
$(".topic-column iframe#twitter-widget-0").contents().find("head").append($("<link rel='stylesheet' href='/etc/designs/dcom/assets/css/components/social-panel/topic-page-tweets-panel.css'/>"))
},1000)
}else{setTimeout(function(){$(".content-page iframe#twitter-widget-0").contents().find("head").append($("<link rel='stylesheet' href='/etc/designs/dcom/assets/css/components/social-panel/tweets-panel.css'/>"));
$(".topic-column iframe#twitter-widget-0").contents().find("head").append($("<link rel='stylesheet' href='/etc/designs/dcom/assets/css/components/social-panel/topic-page-tweets-panel.css'/>"))
},300)
}if((matchMedia("(min-width: 767px)").matches)&&((matchMedia("(max-width: 1024px)").matches))){setTimeout(function(){$(".topic-column .social-panel iframe#twitter-widget-0").contents().find("head").append($("<link rel='stylesheet' href='/etc/designs/dcom/assets/css/components/social-panel/ipad-topic-page-tweets-panel.css'/>"))
},400)
}});
var Ejst={};
Ejst.x2={};
Ejst.x2.showInitialTabs=function(a){a.hideTabStripItem(2);
a.hideTabStripItem(3);
a.hideTabStripItem(4);
a.hideTabStripItem(5);
a.doLayout()
};
Ejst.x2.manageTabs=function(e,d){var c=["tab1","tab2","tab3","tab4","tab5","tab6"];
var a=d?c.indexOf(d):-1;
for(var b=2;
b!=c.length;
b++){if(a==b){e.unhideTabStripItem(b)
}else{e.hideTabStripItem(b)
}}if(d=="tab3"){e.unhideTabStripItem(5)
}e.doLayout()
};
Ejst.x2.hideTab=function(b){var c=b.findParentByType("tabpanel");
var a=c.items.indexOf(b);
c.hideTabStripItem(a)
};
Ejst.x2.showTab=function(a){Ejst.x2.manageTabs(a.findParentByType("tabpanel"),a.getValue())
};