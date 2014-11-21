/*!
 * jQuery JavaScript Library v1.8.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Thu Aug 30 2012 17:17:22 GMT-0400 (Eastern Daylight Time)
 */
(function(a4,aD){var y,ah,p=a4.document,aK=a4.location,d=a4.navigator,bi=a4.jQuery,K=a4.$,ao=Array.prototype.push,a6=Array.prototype.slice,aM=Array.prototype.indexOf,B=Object.prototype.toString,X=Object.prototype.hasOwnProperty,aQ=String.prototype.trim,bI=function(e,b1){return new bI.fn.init(e,b1,y)
},bz=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,ac=/\S/,aX=/\s+/,E=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bq=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,a=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,bh=/^[\],:{}\s]*$/,bk=/(?:^|:|,)(?:\s*\[)+/g,bF=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,a2=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,bR=/^-ms-/,aW=/-([\da-z])/gi,P=function(e,b1){return(b1+"").toUpperCase()
},aH=function(){if(p.addEventListener){p.removeEventListener("DOMContentLoaded",aH,false);
bI.ready()
}else{if(p.readyState==="complete"){p.detachEvent("onreadystatechange",aH);
bI.ready()
}}},ab={};
bI.fn=bI.prototype={constructor:bI,init:function(e,b4,b3){var b2,b5,b1,b6;
if(!e){return this
}if(e.nodeType){this.context=this[0]=e;
this.length=1;
return this
}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){b2=[null,e,null]
}else{b2=bq.exec(e)
}if(b2&&(b2[1]||!b4)){if(b2[1]){b4=b4 instanceof bI?b4[0]:b4;
b6=(b4&&b4.nodeType?b4.ownerDocument||b4:p);
e=bI.parseHTML(b2[1],b6,true);
if(a.test(b2[1])&&bI.isPlainObject(b4)){this.attr.call(e,b4,true)
}return bI.merge(this,e)
}else{b5=p.getElementById(b2[2]);
if(b5&&b5.parentNode){if(b5.id!==b2[2]){return b3.find(e)
}this.length=1;
this[0]=b5
}this.context=p;
this.selector=e;
return this
}}else{if(!b4||b4.jquery){return(b4||b3).find(e)
}else{return this.constructor(b4).find(e)
}}}else{if(bI.isFunction(e)){return b3.ready(e)
}}if(e.selector!==aD){this.selector=e.selector;
this.context=e.context
}return bI.makeArray(e,this)
},selector:"",jquery:"1.8.1",length:0,size:function(){return this.length
},toArray:function(){return a6.call(this)
},get:function(e){return e==null?this.toArray():(e<0?this[this.length+e]:this[e])
},pushStack:function(b1,b3,e){var b2=bI.merge(this.constructor(),b1);
b2.prevObject=this;
b2.context=this.context;
if(b3==="find"){b2.selector=this.selector+(this.selector?" ":"")+e
}else{if(b3){b2.selector=this.selector+"."+b3+"("+e+")"
}}return b2
},each:function(b1,e){return bI.each(this,b1,e)
},ready:function(e){bI.ready.promise().done(e);
return this
},eq:function(e){e=+e;
return e===-1?this.slice(e):this.slice(e,e+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(a6.apply(this,arguments),"slice",a6.call(arguments).join(","))
},map:function(e){return this.pushStack(bI.map(this,function(b2,b1){return e.call(b2,b1,b2)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:ao,sort:[].sort,splice:[].splice};
bI.fn.init.prototype=bI.fn;
bI.extend=bI.fn.extend=function(){var b9,b2,e,b1,b6,b7,b5=arguments[0]||{},b4=1,b3=arguments.length,b8=false;
if(typeof b5==="boolean"){b8=b5;
b5=arguments[1]||{};
b4=2
}if(typeof b5!=="object"&&!bI.isFunction(b5)){b5={}
}if(b3===b4){b5=this;
--b4
}for(;
b4<b3;
b4++){if((b9=arguments[b4])!=null){for(b2 in b9){e=b5[b2];
b1=b9[b2];
if(b5===b1){continue
}if(b8&&b1&&(bI.isPlainObject(b1)||(b6=bI.isArray(b1)))){if(b6){b6=false;
b7=e&&bI.isArray(e)?e:[]
}else{b7=e&&bI.isPlainObject(e)?e:{}
}b5[b2]=bI.extend(b8,b7,b1)
}else{if(b1!==aD){b5[b2]=b1
}}}}}return b5
};
bI.extend({noConflict:function(e){if(a4.$===bI){a4.$=K
}if(e&&a4.jQuery===bI){a4.jQuery=bi
}return bI
},isReady:false,readyWait:1,holdReady:function(e){if(e){bI.readyWait++
}else{bI.ready(true)
}},ready:function(e){if(e===true?--bI.readyWait:bI.isReady){return
}if(!p.body){return setTimeout(bI.ready,1)
}bI.isReady=true;
if(e!==true&&--bI.readyWait>0){return
}ah.resolveWith(p,[bI]);
if(bI.fn.trigger){bI(p).trigger("ready").off("ready")
}},isFunction:function(e){return bI.type(e)==="function"
},isArray:Array.isArray||function(e){return bI.type(e)==="array"
},isWindow:function(e){return e!=null&&e==e.window
},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)
},type:function(e){return e==null?String(e):ab[B.call(e)]||"object"
},isPlainObject:function(b3){if(!b3||bI.type(b3)!=="object"||b3.nodeType||bI.isWindow(b3)){return false
}try{if(b3.constructor&&!X.call(b3,"constructor")&&!X.call(b3.constructor.prototype,"isPrototypeOf")){return false
}}catch(b2){return false
}var b1;
for(b1 in b3){}return b1===aD||X.call(b3,b1)
},isEmptyObject:function(b1){var e;
for(e in b1){return false
}return true
},error:function(e){throw new Error(e)
},parseHTML:function(b3,b2,e){var b1;
if(!b3||typeof b3!=="string"){return null
}if(typeof b2==="boolean"){e=b2;
b2=0
}b2=b2||p;
if((b1=a.exec(b3))){return[b2.createElement(b1[1])]
}b1=bI.buildFragment([b3],b2,e?null:[]);
return bI.merge([],(b1.cacheable?bI.clone(b1.fragment):b1.fragment).childNodes)
},parseJSON:function(e){if(!e||typeof e!=="string"){return null
}e=bI.trim(e);
if(a4.JSON&&a4.JSON.parse){return a4.JSON.parse(e)
}if(bh.test(e.replace(bF,"@").replace(a2,"]").replace(bk,""))){return(new Function("return "+e))()
}bI.error("Invalid JSON: "+e)
},parseXML:function(b3){var b1,b2;
if(!b3||typeof b3!=="string"){return null
}try{if(a4.DOMParser){b2=new DOMParser();
b1=b2.parseFromString(b3,"text/xml")
}else{b1=new ActiveXObject("Microsoft.XMLDOM");
b1.async="false";
b1.loadXML(b3)
}}catch(b4){b1=aD
}if(!b1||!b1.documentElement||b1.getElementsByTagName("parsererror").length){bI.error("Invalid XML: "+b3)
}return b1
},noop:function(){},globalEval:function(e){if(e&&ac.test(e)){(a4.execScript||function(b1){a4["eval"].call(a4,b1)
})(e)
}},camelCase:function(e){return e.replace(bR,"ms-").replace(aW,P)
},nodeName:function(b1,e){return b1.nodeName&&b1.nodeName.toUpperCase()===e.toUpperCase()
},each:function(b5,b6,b2){var b1,b3=0,b4=b5.length,e=b4===aD||bI.isFunction(b5);
if(b2){if(e){for(b1 in b5){if(b6.apply(b5[b1],b2)===false){break
}}}else{for(;
b3<b4;
){if(b6.apply(b5[b3++],b2)===false){break
}}}}else{if(e){for(b1 in b5){if(b6.call(b5[b1],b1,b5[b1])===false){break
}}}else{for(;
b3<b4;
){if(b6.call(b5[b3],b3,b5[b3++])===false){break
}}}}return b5
},trim:aQ&&!aQ.call("\uFEFF\xA0")?function(e){return e==null?"":aQ.call(e)
}:function(e){return e==null?"":e.toString().replace(E,"")
},makeArray:function(e,b2){var b3,b1=b2||[];
if(e!=null){b3=bI.type(e);
if(e.length==null||b3==="string"||b3==="function"||b3==="regexp"||bI.isWindow(e)){ao.call(b1,e)
}else{bI.merge(b1,e)
}}return b1
},inArray:function(b3,b1,b2){var e;
if(b1){if(aM){return aM.call(b1,b3,b2)
}e=b1.length;
b2=b2?b2<0?Math.max(0,e+b2):b2:0;
for(;
b2<e;
b2++){if(b2 in b1&&b1[b2]===b3){return b2
}}}return -1
},merge:function(b4,b2){var e=b2.length,b3=b4.length,b1=0;
if(typeof e==="number"){for(;
b1<e;
b1++){b4[b3++]=b2[b1]
}}else{while(b2[b1]!==aD){b4[b3++]=b2[b1++]
}}b4.length=b3;
return b4
},grep:function(b1,b6,e){var b5,b2=[],b3=0,b4=b1.length;
e=!!e;
for(;
b3<b4;
b3++){b5=!!b6(b1[b3],b3);
if(e!==b5){b2.push(b1[b3])
}}return b2
},map:function(e,b7,b8){var b5,b6,b4=[],b2=0,b1=e.length,b3=e instanceof bI||b1!==aD&&typeof b1==="number"&&((b1>0&&e[0]&&e[b1-1])||b1===0||bI.isArray(e));
if(b3){for(;
b2<b1;
b2++){b5=b7(e[b2],b2,b8);
if(b5!=null){b4[b4.length]=b5
}}}else{for(b6 in e){b5=b7(e[b6],b6,b8);
if(b5!=null){b4[b4.length]=b5
}}}return b4.concat.apply([],b4)
},guid:1,proxy:function(b4,b3){var b2,e,b1;
if(typeof b3==="string"){b2=b4[b3];
b3=b4;
b4=b2
}if(!bI.isFunction(b4)){return aD
}e=a6.call(arguments,2);
b1=function(){return b4.apply(b3,e.concat(a6.call(arguments)))
};
b1.guid=b4.guid=b4.guid||b1.guid||bI.guid++;
return b1
},access:function(e,b6,b9,b7,b4,ca,b8){var b2,b5=b9==null,b3=0,b1=e.length;
if(b9&&typeof b9==="object"){for(b3 in b9){bI.access(e,b6,b3,b9[b3],1,ca,b7)
}b4=1
}else{if(b7!==aD){b2=b8===aD&&bI.isFunction(b7);
if(b5){if(b2){b2=b6;
b6=function(cc,cb,cd){return b2.call(bI(cc),cd)
}
}else{b6.call(e,b7);
b6=null
}}if(b6){for(;
b3<b1;
b3++){b6(e[b3],b9,b2?b7.call(e[b3],b3,b6(e[b3],b9)):b7,b8)
}}b4=1
}}return b4?e:b5?b6.call(e):b1?b6(e[0],b9):ca
},now:function(){return(new Date()).getTime()
}});
bI.ready.promise=function(b4){if(!ah){ah=bI.Deferred();
if(p.readyState==="complete"){setTimeout(bI.ready,1)
}else{if(p.addEventListener){p.addEventListener("DOMContentLoaded",aH,false);
a4.addEventListener("load",bI.ready,false)
}else{p.attachEvent("onreadystatechange",aH);
a4.attachEvent("onload",bI.ready);
var b3=false;
try{b3=a4.frameElement==null&&p.documentElement
}catch(b2){}if(b3&&b3.doScroll){(function b1(){if(!bI.isReady){try{b3.doScroll("left")
}catch(b5){return setTimeout(b1,50)
}bI.ready()
}})()
}}}}return ah.promise(b4)
};
bI.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b1,e){ab["[object "+e+"]"]=e.toLowerCase()
});
y=bI(p);
var bW={};
function ae(b1){var e=bW[b1]={};
bI.each(b1.split(aX),function(b3,b2){e[b2]=true
});
return e
}bI.Callbacks=function(ca){ca=typeof ca==="string"?(bW[ca]||ae(ca)):bI.extend({},ca);
var b3,e,b4,b2,b5,b6,b7=[],b8=!ca.once&&[],b1=function(cb){b3=ca.memory&&cb;
e=true;
b6=b2||0;
b2=0;
b5=b7.length;
b4=true;
for(;
b7&&b6<b5;
b6++){if(b7[b6].apply(cb[0],cb[1])===false&&ca.stopOnFalse){b3=false;
break
}}b4=false;
if(b7){if(b8){if(b8.length){b1(b8.shift())
}}else{if(b3){b7=[]
}else{b9.disable()
}}}},b9={add:function(){if(b7){var cc=b7.length;
(function cb(cd){bI.each(cd,function(cf,ce){var cg=bI.type(ce);
if(cg==="function"&&(!ca.unique||!b9.has(ce))){b7.push(ce)
}else{if(ce&&ce.length&&cg!=="string"){cb(ce)
}}})
})(arguments);
if(b4){b5=b7.length
}else{if(b3){b2=cc;
b1(b3)
}}}return this
},remove:function(){if(b7){bI.each(arguments,function(cd,cb){var cc;
while((cc=bI.inArray(cb,b7,cc))>-1){b7.splice(cc,1);
if(b4){if(cc<=b5){b5--
}if(cc<=b6){b6--
}}}})
}return this
},has:function(cb){return bI.inArray(cb,b7)>-1
},empty:function(){b7=[];
return this
},disable:function(){b7=b8=b3=aD;
return this
},disabled:function(){return !b7
},lock:function(){b8=aD;
if(!b3){b9.disable()
}return this
},locked:function(){return !b8
},fireWith:function(cc,cb){cb=cb||[];
cb=[cc,cb.slice?cb.slice():cb];
if(b7&&(!e||b8)){if(b4){b8.push(cb)
}else{b1(cb)
}}return this
},fire:function(){b9.fireWith(this,arguments);
return this
},fired:function(){return !!e
}};
return b9
};
bI.extend({Deferred:function(b2){var b1=[["resolve","done",bI.Callbacks("once memory"),"resolved"],["reject","fail",bI.Callbacks("once memory"),"rejected"],["notify","progress",bI.Callbacks("memory")]],b3="pending",b4={state:function(){return b3
},always:function(){e.done(arguments).fail(arguments);
return this
},then:function(){var b5=arguments;
return bI.Deferred(function(b6){bI.each(b1,function(b8,b7){var ca=b7[0],b9=b5[b8];
e[b7[1]](bI.isFunction(b9)?function(){var cb=b9.apply(this,arguments);
if(cb&&bI.isFunction(cb.promise)){cb.promise().done(b6.resolve).fail(b6.reject).progress(b6.notify)
}else{b6[ca+"With"](this===e?b6:this,[cb])
}}:b6[ca])
});
b5=null
}).promise()
},promise:function(b5){return typeof b5==="object"?bI.extend(b5,b4):b4
}},e={};
b4.pipe=b4.then;
bI.each(b1,function(b6,b5){var b8=b5[2],b7=b5[3];
b4[b5[1]]=b8.add;
if(b7){b8.add(function(){b3=b7
},b1[b6^1][2].disable,b1[2][2].lock)
}e[b5[0]]=b8.fire;
e[b5[0]+"With"]=b8.fireWith
});
b4.promise(e);
if(b2){b2.call(e,e)
}return e
},when:function(b4){var b2=0,b6=a6.call(arguments),e=b6.length,b1=e!==1||(b4&&bI.isFunction(b4.promise))?e:0,b9=b1===1?b4:bI.Deferred(),b3=function(cb,cc,ca){return function(cd){cc[cb]=this;
ca[cb]=arguments.length>1?a6.call(arguments):cd;
if(ca===b8){b9.notifyWith(cc,ca)
}else{if(!(--b1)){b9.resolveWith(cc,ca)
}}}
},b8,b5,b7;
if(e>1){b8=new Array(e);
b5=new Array(e);
b7=new Array(e);
for(;
b2<e;
b2++){if(b6[b2]&&bI.isFunction(b6[b2].promise)){b6[b2].promise().done(b3(b2,b7,b6)).fail(b9.reject).progress(b3(b2,b5,b8))
}else{--b1
}}}if(!b1){b9.resolveWith(b7,b6)
}return b9.promise()
}});
bI.support=(function(){var cd,cc,ca,cb,b4,b9,b8,b6,b5,b3,b1,b2=p.createElement("div");
b2.setAttribute("className","t");
b2.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
cc=b2.getElementsByTagName("*");
ca=b2.getElementsByTagName("a")[0];
ca.style.cssText="top:1px;float:left;opacity:.5";
if(!cc||!cc.length||!ca){return{}
}cb=p.createElement("select");
b4=cb.appendChild(p.createElement("option"));
b9=b2.getElementsByTagName("input")[0];
cd={leadingWhitespace:(b2.firstChild.nodeType===3),tbody:!b2.getElementsByTagName("tbody").length,htmlSerialize:!!b2.getElementsByTagName("link").length,style:/top/.test(ca.getAttribute("style")),hrefNormalized:(ca.getAttribute("href")==="/a"),opacity:/^0.5/.test(ca.style.opacity),cssFloat:!!ca.style.cssFloat,checkOn:(b9.value==="on"),optSelected:b4.selected,getSetAttribute:b2.className!=="t",enctype:!!p.createElement("form").enctype,html5Clone:p.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:(p.compatMode==="CSS1Compat"),submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};
b9.checked=true;
cd.noCloneChecked=b9.cloneNode(true).checked;
cb.disabled=true;
cd.optDisabled=!b4.disabled;
try{delete b2.test
}catch(b7){cd.deleteExpando=false
}if(!b2.addEventListener&&b2.attachEvent&&b2.fireEvent){b2.attachEvent("onclick",b1=function(){cd.noCloneEvent=false
});
b2.cloneNode(true).fireEvent("onclick");
b2.detachEvent("onclick",b1)
}b9=p.createElement("input");
b9.value="t";
b9.setAttribute("type","radio");
cd.radioValue=b9.value==="t";
b9.setAttribute("checked","checked");
b9.setAttribute("name","t");
b2.appendChild(b9);
b8=p.createDocumentFragment();
b8.appendChild(b2.lastChild);
cd.checkClone=b8.cloneNode(true).cloneNode(true).lastChild.checked;
cd.appendChecked=b9.checked;
b8.removeChild(b9);
b8.appendChild(b2);
if(b2.attachEvent){for(b5 in {submit:true,change:true,focusin:true}){b6="on"+b5;
b3=(b6 in b2);
if(!b3){b2.setAttribute(b6,"return;");
b3=(typeof b2[b6]==="function")
}cd[b5+"Bubbles"]=b3
}}bI(function(){var ce,ci,cg,ch,cf="padding:0;margin:0;border:0;display:block;overflow:hidden;",e=p.getElementsByTagName("body")[0];
if(!e){return
}ce=p.createElement("div");
ce.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
e.insertBefore(ce,e.firstChild);
ci=p.createElement("div");
ce.appendChild(ci);
ci.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
cg=ci.getElementsByTagName("td");
cg[0].style.cssText="padding:0;margin:0;border:0;display:none";
b3=(cg[0].offsetHeight===0);
cg[0].style.display="";
cg[1].style.display="none";
cd.reliableHiddenOffsets=b3&&(cg[0].offsetHeight===0);
ci.innerHTML="";
ci.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
cd.boxSizing=(ci.offsetWidth===4);
cd.doesNotIncludeMarginInBodyOffset=(e.offsetTop!==1);
if(a4.getComputedStyle){cd.pixelPosition=(a4.getComputedStyle(ci,null)||{}).top!=="1%";
cd.boxSizingReliable=(a4.getComputedStyle(ci,null)||{width:"4px"}).width==="4px";
ch=p.createElement("div");
ch.style.cssText=ci.style.cssText=cf;
ch.style.marginRight=ch.style.width="0";
ci.style.width="1px";
ci.appendChild(ch);
cd.reliableMarginRight=!parseFloat((a4.getComputedStyle(ch,null)||{}).marginRight)
}if(typeof ci.style.zoom!=="undefined"){ci.innerHTML="";
ci.style.cssText=cf+"width:1px;padding:1px;display:inline;zoom:1";
cd.inlineBlockNeedsLayout=(ci.offsetWidth===3);
ci.style.display="block";
ci.style.overflow="visible";
ci.innerHTML="<div></div>";
ci.firstChild.style.width="5px";
cd.shrinkWrapBlocks=(ci.offsetWidth!==3);
ce.style.zoom=1
}e.removeChild(ce);
ce=ci=cg=ch=null
});
b8.removeChild(b2);
cc=ca=cb=b4=b9=b8=b2=null;
return cd
})();
var bv=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,aN=/([A-Z])/g;
bI.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(bI.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?bI.cache[e[bI.expando]]:e[bI.expando];
return !!e&&!Q(e)
},data:function(b3,b1,b5,b4){if(!bI.acceptData(b3)){return
}var b6,b8,b9=bI.expando,b7=typeof b1==="string",ca=b3.nodeType,e=ca?bI.cache:b3,b2=ca?b3[b9]:b3[b9]&&b9;
if((!b2||!e[b2]||(!b4&&!e[b2].data))&&b7&&b5===aD){return
}if(!b2){if(ca){b3[b9]=b2=bI.deletedIds.pop()||++bI.uuid
}else{b2=b9
}}if(!e[b2]){e[b2]={};
if(!ca){e[b2].toJSON=bI.noop
}}if(typeof b1==="object"||typeof b1==="function"){if(b4){e[b2]=bI.extend(e[b2],b1)
}else{e[b2].data=bI.extend(e[b2].data,b1)
}}b6=e[b2];
if(!b4){if(!b6.data){b6.data={}
}b6=b6.data
}if(b5!==aD){b6[bI.camelCase(b1)]=b5
}if(b7){b8=b6[b1];
if(b8==null){b8=b6[bI.camelCase(b1)]
}}else{b8=b6
}return b8
},removeData:function(b3,b1,b4){if(!bI.acceptData(b3)){return
}var b7,b6,b5,b8=b3.nodeType,e=b8?bI.cache:b3,b2=b8?b3[bI.expando]:bI.expando;
if(!e[b2]){return
}if(b1){b7=b4?e[b2]:e[b2].data;
if(b7){if(!bI.isArray(b1)){if(b1 in b7){b1=[b1]
}else{b1=bI.camelCase(b1);
if(b1 in b7){b1=[b1]
}else{b1=b1.split(" ")
}}}for(b6=0,b5=b1.length;
b6<b5;
b6++){delete b7[b1[b6]]
}if(!(b4?Q:bI.isEmptyObject)(b7)){return
}}}if(!b4){delete e[b2].data;
if(!Q(e[b2])){return
}}if(b8){bI.cleanData([b3],true)
}else{if(bI.support.deleteExpando||e!=e.window){delete e[b2]
}else{e[b2]=null
}}},_data:function(b1,e,b2){return bI.data(b1,e,b2,true)
},acceptData:function(b1){var e=b1.nodeName&&bI.noData[b1.nodeName.toLowerCase()];
return !e||e!==true&&b1.getAttribute("classid")===e
}});
bI.fn.extend({data:function(b9,b8){var b4,b1,b7,e,b3,b2=this[0],b6=0,b5=null;
if(b9===aD){if(this.length){b5=bI.data(b2);
if(b2.nodeType===1&&!bI._data(b2,"parsedAttrs")){b7=b2.attributes;
for(b3=b7.length;
b6<b3;
b6++){e=b7[b6].name;
if(e.indexOf("data-")===0){e=bI.camelCase(e.substring(5));
bx(b2,e,b5[e])
}}bI._data(b2,"parsedAttrs",true)
}}return b5
}if(typeof b9==="object"){return this.each(function(){bI.data(this,b9)
})
}b4=b9.split(".",2);
b4[1]=b4[1]?"."+b4[1]:"";
b1=b4[1]+"!";
return bI.access(this,function(ca){if(ca===aD){b5=this.triggerHandler("getData"+b1,[b4[0]]);
if(b5===aD&&b2){b5=bI.data(b2,b9);
b5=bx(b2,b9,b5)
}return b5===aD&&b4[1]?this.data(b4[0]):b5
}b4[1]=ca;
this.each(function(){var cb=bI(this);
cb.triggerHandler("setData"+b1,b4);
bI.data(this,b9,ca);
cb.triggerHandler("changeData"+b1,b4)
})
},null,b8,arguments.length>1,null,false)
},removeData:function(e){return this.each(function(){bI.removeData(this,e)
})
}});
function bx(b3,b2,b4){if(b4===aD&&b3.nodeType===1){var b1="data-"+b2.replace(aN,"-$1").toLowerCase();
b4=b3.getAttribute(b1);
if(typeof b4==="string"){try{b4=b4==="true"?true:b4==="false"?false:b4==="null"?null:+b4+""===b4?+b4:bv.test(b4)?bI.parseJSON(b4):b4
}catch(b5){}bI.data(b3,b2,b4)
}else{b4=aD
}}return b4
}function Q(b1){var e;
for(e in b1){if(e==="data"&&bI.isEmptyObject(b1[e])){continue
}if(e!=="toJSON"){return false
}}return true
}bI.extend({queue:function(b2,b1,b3){var e;
if(b2){b1=(b1||"fx")+"queue";
e=bI._data(b2,b1);
if(b3){if(!e||bI.isArray(b3)){e=bI._data(b2,b1,bI.makeArray(b3))
}else{e.push(b3)
}}return e||[]
}},dequeue:function(b5,b4){b4=b4||"fx";
var b1=bI.queue(b5,b4),b6=b1.length,b3=b1.shift(),e=bI._queueHooks(b5,b4),b2=function(){bI.dequeue(b5,b4)
};
if(b3==="inprogress"){b3=b1.shift();
b6--
}if(b3){if(b4==="fx"){b1.unshift("inprogress")
}delete e.stop;
b3.call(b5,b2,e)
}if(!b6&&e){e.empty.fire()
}},_queueHooks:function(b2,b1){var e=b1+"queueHooks";
return bI._data(b2,e)||bI._data(b2,e,{empty:bI.Callbacks("once memory").add(function(){bI.removeData(b2,b1+"queue",true);
bI.removeData(b2,e,true)
})})
}});
bI.fn.extend({queue:function(e,b1){var b2=2;
if(typeof e!=="string"){b1=e;
e="fx";
b2--
}if(arguments.length<b2){return bI.queue(this[0],e)
}return b1===aD?this:this.each(function(){var b3=bI.queue(this,e,b1);
bI._queueHooks(this,e);
if(e==="fx"&&b3[0]!=="inprogress"){bI.dequeue(this,e)
}})
},dequeue:function(e){return this.each(function(){bI.dequeue(this,e)
})
},delay:function(b1,e){b1=bI.fx?bI.fx.speeds[b1]||b1:b1;
e=e||"fx";
return this.queue(e,function(b3,b2){var b4=setTimeout(b3,b1);
b2.stop=function(){clearTimeout(b4)
}
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(b2,b6){var b1,b3=1,b7=bI.Deferred(),b5=this,e=this.length,b4=function(){if(!(--b3)){b7.resolveWith(b5,[b5])
}};
if(typeof b2!=="string"){b6=b2;
b2=aD
}b2=b2||"fx";
while(e--){b1=bI._data(b5[e],b2+"queueHooks");
if(b1&&b1.empty){b3++;
b1.empty.add(b4)
}}b4();
return b7.promise(b6)
}});
var a9,bX,o,bL=/[\t\r\n]/g,ak=/\r/g,k=/^(?:button|input)$/i,aC=/^(?:button|input|object|select|textarea)$/i,F=/^a(?:rea|)$/i,O=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,bN=bI.support.getSetAttribute;
bI.fn.extend({attr:function(e,b1){return bI.access(this,bI.attr,e,b1,arguments.length>1)
},removeAttr:function(e){return this.each(function(){bI.removeAttr(this,e)
})
},prop:function(e,b1){return bI.access(this,bI.prop,e,b1,arguments.length>1)
},removeProp:function(e){e=bI.propFix[e]||e;
return this.each(function(){try{this[e]=aD;
delete this[e]
}catch(b1){}})
},addClass:function(b4){var b6,b2,b1,b3,b5,b7,e;
if(bI.isFunction(b4)){return this.each(function(b8){bI(this).addClass(b4.call(this,b8,this.className))
})
}if(b4&&typeof b4==="string"){b6=b4.split(aX);
for(b2=0,b1=this.length;
b2<b1;
b2++){b3=this[b2];
if(b3.nodeType===1){if(!b3.className&&b6.length===1){b3.className=b4
}else{b5=" "+b3.className+" ";
for(b7=0,e=b6.length;
b7<e;
b7++){if(!~b5.indexOf(" "+b6[b7]+" ")){b5+=b6[b7]+" "
}}b3.className=bI.trim(b5)
}}}}return this
},removeClass:function(b6){var b3,b4,b5,b7,b1,b2,e;
if(bI.isFunction(b6)){return this.each(function(b8){bI(this).removeClass(b6.call(this,b8,this.className))
})
}if((b6&&typeof b6==="string")||b6===aD){b3=(b6||"").split(aX);
for(b2=0,e=this.length;
b2<e;
b2++){b5=this[b2];
if(b5.nodeType===1&&b5.className){b4=(" "+b5.className+" ").replace(bL," ");
for(b7=0,b1=b3.length;
b7<b1;
b7++){while(b4.indexOf(" "+b3[b7]+" ")>-1){b4=b4.replace(" "+b3[b7]+" "," ")
}}b5.className=b6?bI.trim(b4):""
}}}return this
},toggleClass:function(b3,b1){var b2=typeof b3,e=typeof b1==="boolean";
if(bI.isFunction(b3)){return this.each(function(b4){bI(this).toggleClass(b3.call(this,b4,this.className,b1),b1)
})
}return this.each(function(){if(b2==="string"){var b6,b5=0,b4=bI(this),b7=b1,b8=b3.split(aX);
while((b6=b8[b5++])){b7=e?b7:!b4.hasClass(b6);
b4[b7?"addClass":"removeClass"](b6)
}}else{if(b2==="undefined"||b2==="boolean"){if(this.className){bI._data(this,"__className__",this.className)
}this.className=this.className||b3===false?"":bI._data(this,"__className__")||""
}}})
},hasClass:function(e){var b3=" "+e+" ",b2=0,b1=this.length;
for(;
b2<b1;
b2++){if(this[b2].nodeType===1&&(" "+this[b2].className+" ").replace(bL," ").indexOf(b3)>-1){return true
}}return false
},val:function(b3){var e,b1,b4,b2=this[0];
if(!arguments.length){if(b2){e=bI.valHooks[b2.type]||bI.valHooks[b2.nodeName.toLowerCase()];
if(e&&"get" in e&&(b1=e.get(b2,"value"))!==aD){return b1
}b1=b2.value;
return typeof b1==="string"?b1.replace(ak,""):b1==null?"":b1
}return
}b4=bI.isFunction(b3);
return this.each(function(b6){var b7,b5=bI(this);
if(this.nodeType!==1){return
}if(b4){b7=b3.call(this,b6,b5.val())
}else{b7=b3
}if(b7==null){b7=""
}else{if(typeof b7==="number"){b7+=""
}else{if(bI.isArray(b7)){b7=bI.map(b7,function(b8){return b8==null?"":b8+""
})
}}}e=bI.valHooks[this.type]||bI.valHooks[this.nodeName.toLowerCase()];
if(!e||!("set" in e)||e.set(this,b7,"value")===aD){this.value=b7
}})
}});
bI.extend({valHooks:{option:{get:function(e){var b1=e.attributes.value;
return !b1||b1.specified?e.value:e.text
}},select:{get:function(e){var b6,b1,b5,b3,b4=e.selectedIndex,b7=[],b8=e.options,b2=e.type==="select-one";
if(b4<0){return null
}b1=b2?b4:0;
b5=b2?b4+1:b8.length;
for(;
b1<b5;
b1++){b3=b8[b1];
if(b3.selected&&(bI.support.optDisabled?!b3.disabled:b3.getAttribute("disabled")===null)&&(!b3.parentNode.disabled||!bI.nodeName(b3.parentNode,"optgroup"))){b6=bI(b3).val();
if(b2){return b6
}b7.push(b6)
}}if(b2&&!b7.length&&b8.length){return bI(b8[b4]).val()
}return b7
},set:function(b1,b2){var e=bI.makeArray(b2);
bI(b1).find("option").each(function(){this.selected=bI.inArray(bI(this).val(),e)>=0
});
if(!e.length){b1.selectedIndex=-1
}return e
}}},attrFn:{},attr:function(b6,b3,b7,b5){var b2,e,b4,b1=b6.nodeType;
if(!b6||b1===3||b1===8||b1===2){return
}if(b5&&bI.isFunction(bI.fn[b3])){return bI(b6)[b3](b7)
}if(typeof b6.getAttribute==="undefined"){return bI.prop(b6,b3,b7)
}b4=b1!==1||!bI.isXMLDoc(b6);
if(b4){b3=b3.toLowerCase();
e=bI.attrHooks[b3]||(O.test(b3)?bX:a9)
}if(b7!==aD){if(b7===null){bI.removeAttr(b6,b3);
return
}else{if(e&&"set" in e&&b4&&(b2=e.set(b6,b7,b3))!==aD){return b2
}else{b6.setAttribute(b3,""+b7);
return b7
}}}else{if(e&&"get" in e&&b4&&(b2=e.get(b6,b3))!==null){return b2
}else{b2=b6.getAttribute(b3);
return b2===null?aD:b2
}}},removeAttr:function(b3,b5){var b4,b6,b1,e,b2=0;
if(b5&&b3.nodeType===1){b6=b5.split(aX);
for(;
b2<b6.length;
b2++){b1=b6[b2];
if(b1){b4=bI.propFix[b1]||b1;
e=O.test(b1);
if(!e){bI.attr(b3,b1,"")
}b3.removeAttribute(bN?b1:b4);
if(e&&b4 in b3){b3[b4]=false
}}}}},attrHooks:{type:{set:function(e,b1){if(k.test(e.nodeName)&&e.parentNode){bI.error("type property can't be changed")
}else{if(!bI.support.radioValue&&b1==="radio"&&bI.nodeName(e,"input")){var b2=e.value;
e.setAttribute("type",b1);
if(b2){e.value=b2
}return b1
}}}},value:{get:function(b1,e){if(a9&&bI.nodeName(b1,"button")){return a9.get(b1,e)
}return e in b1?b1.value:null
},set:function(b1,b2,e){if(a9&&bI.nodeName(b1,"button")){return a9.set(b1,b2,e)
}b1.value=b2
}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(b5,b3,b6){var b2,e,b4,b1=b5.nodeType;
if(!b5||b1===3||b1===8||b1===2){return
}b4=b1!==1||!bI.isXMLDoc(b5);
if(b4){b3=bI.propFix[b3]||b3;
e=bI.propHooks[b3]
}if(b6!==aD){if(e&&"set" in e&&(b2=e.set(b5,b6,b3))!==aD){return b2
}else{return(b5[b3]=b6)
}}else{if(e&&"get" in e&&(b2=e.get(b5,b3))!==null){return b2
}else{return b5[b3]
}}},propHooks:{tabIndex:{get:function(b1){var e=b1.getAttributeNode("tabindex");
return e&&e.specified?parseInt(e.value,10):aC.test(b1.nodeName)||F.test(b1.nodeName)&&b1.href?0:aD
}}}});
bX={get:function(b1,e){var b3,b2=bI.prop(b1,e);
return b2===true||typeof b2!=="boolean"&&(b3=b1.getAttributeNode(e))&&b3.nodeValue!==false?e.toLowerCase():aD
},set:function(b1,b3,e){var b2;
if(b3===false){bI.removeAttr(b1,e)
}else{b2=bI.propFix[e]||e;
if(b2 in b1){b1[b2]=true
}b1.setAttribute(e,e.toLowerCase())
}return e
}};
if(!bN){o={name:true,id:true,coords:true};
a9=bI.valHooks.button={get:function(b2,b1){var e;
e=b2.getAttributeNode(b1);
return e&&(o[b1]?e.value!=="":e.specified)?e.value:aD
},set:function(b2,b3,b1){var e=b2.getAttributeNode(b1);
if(!e){e=p.createAttribute(b1);
b2.setAttributeNode(e)
}return(e.value=b3+"")
}};
bI.each(["width","height"],function(b1,e){bI.attrHooks[e]=bI.extend(bI.attrHooks[e],{set:function(b2,b3){if(b3===""){b2.setAttribute(e,"auto");
return b3
}}})
});
bI.attrHooks.contenteditable={get:a9.get,set:function(b1,b2,e){if(b2===""){b2="false"
}a9.set(b1,b2,e)
}}
}if(!bI.support.hrefNormalized){bI.each(["href","src","width","height"],function(b1,e){bI.attrHooks[e]=bI.extend(bI.attrHooks[e],{get:function(b3){var b2=b3.getAttribute(e,2);
return b2===null?aD:b2
}})
})
}if(!bI.support.style){bI.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||aD
},set:function(e,b1){return(e.style.cssText=""+b1)
}}
}if(!bI.support.optSelected){bI.propHooks.selected=bI.extend(bI.propHooks.selected,{get:function(b1){var e=b1.parentNode;
if(e){e.selectedIndex;
if(e.parentNode){e.parentNode.selectedIndex
}}return null
}})
}if(!bI.support.enctype){bI.propFix.enctype="encoding"
}if(!bI.support.checkOn){bI.each(["radio","checkbox"],function(){bI.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value
}}
})
}bI.each(["radio","checkbox"],function(){bI.valHooks[this]=bI.extend(bI.valHooks[this],{set:function(e,b1){if(bI.isArray(b1)){return(e.checked=bI.inArray(bI(e).val(),b1)>=0)
}}})
});
var bG=/^(?:textarea|input|select)$/i,bt=/^([^\.]*|)(?:\.(.+)|)$/,bc=/(?:^|\s)hover(\.\S+|)\b/,a5=/^key/,bM=/^(?:mouse|contextmenu)|click/,bA=/^(?:focusinfocus|focusoutblur)$/,at=function(e){return bI.event.special.hover?e:e.replace(bc,"mouseenter$1 mouseleave$1")
};
bI.event={add:function(b3,b7,ce,b5,b4){var b8,b6,cf,cd,cc,ca,e,cb,b1,b2,b9;
if(b3.nodeType===3||b3.nodeType===8||!b7||!ce||!(b8=bI._data(b3))){return
}if(ce.handler){b1=ce;
ce=b1.handler;
b4=b1.selector
}if(!ce.guid){ce.guid=bI.guid++
}cf=b8.events;
if(!cf){b8.events=cf={}
}b6=b8.handle;
if(!b6){b8.handle=b6=function(cg){return typeof bI!=="undefined"&&(!cg||bI.event.triggered!==cg.type)?bI.event.dispatch.apply(b6.elem,arguments):aD
};
b6.elem=b3
}b7=bI.trim(at(b7)).split(" ");
for(cd=0;
cd<b7.length;
cd++){cc=bt.exec(b7[cd])||[];
ca=cc[1];
e=(cc[2]||"").split(".").sort();
b9=bI.event.special[ca]||{};
ca=(b4?b9.delegateType:b9.bindType)||ca;
b9=bI.event.special[ca]||{};
cb=bI.extend({type:ca,origType:cc[1],data:b5,handler:ce,guid:ce.guid,selector:b4,namespace:e.join(".")},b1);
b2=cf[ca];
if(!b2){b2=cf[ca]=[];
b2.delegateCount=0;
if(!b9.setup||b9.setup.call(b3,b5,e,b6)===false){if(b3.addEventListener){b3.addEventListener(ca,b6,false)
}else{if(b3.attachEvent){b3.attachEvent("on"+ca,b6)
}}}}if(b9.add){b9.add.call(b3,cb);
if(!cb.handler.guid){cb.handler.guid=ce.guid
}}if(b4){b2.splice(b2.delegateCount++,0,cb)
}else{b2.push(cb)
}bI.event.global[ca]=true
}b3=null
},global:{},remove:function(b3,b8,ce,b4,b7){var cf,cg,cb,b2,b1,b5,b6,cd,ca,e,cc,b9=bI.hasData(b3)&&bI._data(b3);
if(!b9||!(cd=b9.events)){return
}b8=bI.trim(at(b8||"")).split(" ");
for(cf=0;
cf<b8.length;
cf++){cg=bt.exec(b8[cf])||[];
cb=b2=cg[1];
b1=cg[2];
if(!cb){for(cb in cd){bI.event.remove(b3,cb+b8[cf],ce,b4,true)
}continue
}ca=bI.event.special[cb]||{};
cb=(b4?ca.delegateType:ca.bindType)||cb;
e=cd[cb]||[];
b5=e.length;
b1=b1?new RegExp("(^|\\.)"+b1.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
for(b6=0;
b6<e.length;
b6++){cc=e[b6];
if((b7||b2===cc.origType)&&(!ce||ce.guid===cc.guid)&&(!b1||b1.test(cc.namespace))&&(!b4||b4===cc.selector||b4==="**"&&cc.selector)){e.splice(b6--,1);
if(cc.selector){e.delegateCount--
}if(ca.remove){ca.remove.call(b3,cc)
}}}if(e.length===0&&b5!==e.length){if(!ca.teardown||ca.teardown.call(b3,b1,b9.handle)===false){bI.removeEvent(b3,cb,b9.handle)
}delete cd[cb]
}}if(bI.isEmptyObject(cd)){delete b9.handle;
bI.removeData(b3,"events",true)
}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(b1,b8,b6,cf){if(b6&&(b6.nodeType===3||b6.nodeType===8)){return
}var e,b3,b9,cd,b5,b4,cb,ca,b7,ce,cc=b1.type||b1,b2=[];
if(bA.test(cc+bI.event.triggered)){return
}if(cc.indexOf("!")>=0){cc=cc.slice(0,-1);
b3=true
}if(cc.indexOf(".")>=0){b2=cc.split(".");
cc=b2.shift();
b2.sort()
}if((!b6||bI.event.customEvent[cc])&&!bI.event.global[cc]){return
}b1=typeof b1==="object"?b1[bI.expando]?b1:new bI.Event(cc,b1):new bI.Event(cc);
b1.type=cc;
b1.isTrigger=true;
b1.exclusive=b3;
b1.namespace=b2.join(".");
b1.namespace_re=b1.namespace?new RegExp("(^|\\.)"+b2.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
b4=cc.indexOf(":")<0?"on"+cc:"";
if(!b6){e=bI.cache;
for(b9 in e){if(e[b9].events&&e[b9].events[cc]){bI.event.trigger(b1,b8,e[b9].handle.elem,true)
}}return
}b1.result=aD;
if(!b1.target){b1.target=b6
}b8=b8!=null?bI.makeArray(b8):[];
b8.unshift(b1);
cb=bI.event.special[cc]||{};
if(cb.trigger&&cb.trigger.apply(b6,b8)===false){return
}b7=[[b6,cb.bindType||cc]];
if(!cf&&!cb.noBubble&&!bI.isWindow(b6)){ce=cb.delegateType||cc;
cd=bA.test(ce+cc)?b6:b6.parentNode;
for(b5=b6;
cd;
cd=cd.parentNode){b7.push([cd,ce]);
b5=cd
}if(b5===(b6.ownerDocument||p)){b7.push([b5.defaultView||b5.parentWindow||a4,ce])
}}for(b9=0;
b9<b7.length&&!b1.isPropagationStopped();
b9++){cd=b7[b9][0];
b1.type=b7[b9][1];
ca=(bI._data(cd,"events")||{})[b1.type]&&bI._data(cd,"handle");
if(ca){ca.apply(cd,b8)
}ca=b4&&cd[b4];
if(ca&&bI.acceptData(cd)&&ca.apply(cd,b8)===false){b1.preventDefault()
}}b1.type=cc;
if(!cf&&!b1.isDefaultPrevented()){if((!cb._default||cb._default.apply(b6.ownerDocument,b8)===false)&&!(cc==="click"&&bI.nodeName(b6,"a"))&&bI.acceptData(b6)){if(b4&&b6[cc]&&((cc!=="focus"&&cc!=="blur")||b1.target.offsetWidth!==0)&&!bI.isWindow(b6)){b5=b6[b4];
if(b5){b6[b4]=null
}bI.event.triggered=cc;
b6[cc]();
bI.event.triggered=aD;
if(b5){b6[b4]=b5
}}}}return b1.result
},dispatch:function(e){e=bI.event.fix(e||a4.event);
var b7,b6,cg,ca,b9,b1,b8,ce,b3,cf,b4=((bI._data(this,"events")||{})[e.type]||[]),b5=b4.delegateCount,cc=[].slice.call(arguments),b2=!e.exclusive&&!e.namespace,cb=bI.event.special[e.type]||{},cd=[];
cc[0]=e;
e.delegateTarget=this;
if(cb.preDispatch&&cb.preDispatch.call(this,e)===false){return
}if(b5&&!(e.button&&e.type==="click")){for(cg=e.target;
cg!=this;
cg=cg.parentNode||this){if(cg.disabled!==true||e.type!=="click"){b9={};
b8=[];
for(b7=0;
b7<b5;
b7++){ce=b4[b7];
b3=ce.selector;
if(b9[b3]===aD){b9[b3]=bI(b3,this).index(cg)>=0
}if(b9[b3]){b8.push(ce)
}}if(b8.length){cd.push({elem:cg,matches:b8})
}}}}if(b4.length>b5){cd.push({elem:this,matches:b4.slice(b5)})
}for(b7=0;
b7<cd.length&&!e.isPropagationStopped();
b7++){b1=cd[b7];
e.currentTarget=b1.elem;
for(b6=0;
b6<b1.matches.length&&!e.isImmediatePropagationStopped();
b6++){ce=b1.matches[b6];
if(b2||(!e.namespace&&!ce.namespace)||e.namespace_re&&e.namespace_re.test(ce.namespace)){e.data=ce.data;
e.handleObj=ce;
ca=((bI.event.special[ce.origType]||{}).handle||ce.handler).apply(b1.elem,cc);
if(ca!==aD){e.result=ca;
if(ca===false){e.preventDefault();
e.stopPropagation()
}}}}}if(cb.postDispatch){cb.postDispatch.call(this,e)
}return e.result
},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(b1,e){if(b1.which==null){b1.which=e.charCode!=null?e.charCode:e.keyCode
}return b1
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b3,b2){var b4,b5,e,b1=b2.button,b6=b2.fromElement;
if(b3.pageX==null&&b2.clientX!=null){b4=b3.target.ownerDocument||p;
b5=b4.documentElement;
e=b4.body;
b3.pageX=b2.clientX+(b5&&b5.scrollLeft||e&&e.scrollLeft||0)-(b5&&b5.clientLeft||e&&e.clientLeft||0);
b3.pageY=b2.clientY+(b5&&b5.scrollTop||e&&e.scrollTop||0)-(b5&&b5.clientTop||e&&e.clientTop||0)
}if(!b3.relatedTarget&&b6){b3.relatedTarget=b6===b3.target?b2.toElement:b6
}if(!b3.which&&b1!==aD){b3.which=(b1&1?1:(b1&2?3:(b1&4?2:0)))
}return b3
}},fix:function(b2){if(b2[bI.expando]){return b2
}var b1,b5,e=b2,b3=bI.event.fixHooks[b2.type]||{},b4=b3.props?this.props.concat(b3.props):this.props;
b2=bI.Event(e);
for(b1=b4.length;
b1;
){b5=b4[--b1];
b2[b5]=e[b5]
}if(!b2.target){b2.target=e.srcElement||p
}if(b2.target.nodeType===3){b2.target=b2.target.parentNode
}b2.metaKey=!!b2.metaKey;
return b3.filter?b3.filter(b2,e):b2
},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(b2,b1,e){if(bI.isWindow(this)){this.onbeforeunload=e
}},teardown:function(b1,e){if(this.onbeforeunload===e){this.onbeforeunload=null
}}}},simulate:function(b2,b4,b3,b1){var b5=bI.extend(new bI.Event(),b3,{type:b2,isSimulated:true,originalEvent:{}});
if(b1){bI.event.trigger(b5,null,b4)
}else{bI.event.dispatch.call(b4,b5)
}if(b5.isDefaultPrevented()){b3.preventDefault()
}}};
bI.event.handle=bI.event.dispatch;
bI.removeEvent=p.removeEventListener?function(b1,e,b2){if(b1.removeEventListener){b1.removeEventListener(e,b2,false)
}}:function(b2,b1,b3){var e="on"+b1;
if(b2.detachEvent){if(typeof b2[e]==="undefined"){b2[e]=null
}b2.detachEvent(e,b3)
}};
bI.Event=function(b1,e){if(!(this instanceof bI.Event)){return new bI.Event(b1,e)
}if(b1&&b1.type){this.originalEvent=b1;
this.type=b1.type;
this.isDefaultPrevented=(b1.defaultPrevented||b1.returnValue===false||b1.getPreventDefault&&b1.getPreventDefault())?T:Z
}else{this.type=b1
}if(e){bI.extend(this,e)
}this.timeStamp=b1&&b1.timeStamp||bI.now();
this[bI.expando]=true
};
function Z(){return false
}function T(){return true
}bI.Event.prototype={preventDefault:function(){this.isDefaultPrevented=T;
var b1=this.originalEvent;
if(!b1){return
}if(b1.preventDefault){b1.preventDefault()
}else{b1.returnValue=false
}},stopPropagation:function(){this.isPropagationStopped=T;
var b1=this.originalEvent;
if(!b1){return
}if(b1.stopPropagation){b1.stopPropagation()
}b1.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=T;
this.stopPropagation()
},isDefaultPrevented:Z,isPropagationStopped:Z,isImmediatePropagationStopped:Z};
bI.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(b1,e){bI.event.special[b1]={delegateType:e,bindType:e,handle:function(b5){var b3,b7=this,b6=b5.relatedTarget,b4=b5.handleObj,b2=b4.selector;
if(!b6||(b6!==b7&&!bI.contains(b7,b6))){b5.type=b4.origType;
b3=b4.handler.apply(this,arguments);
b5.type=e
}return b3
}}
});
if(!bI.support.submitBubbles){bI.event.special.submit={setup:function(){if(bI.nodeName(this,"form")){return false
}bI.event.add(this,"click._submit keypress._submit",function(b3){var b2=b3.target,b1=bI.nodeName(b2,"input")||bI.nodeName(b2,"button")?b2.form:aD;
if(b1&&!bI._data(b1,"_submit_attached")){bI.event.add(b1,"submit._submit",function(e){e._submit_bubble=true
});
bI._data(b1,"_submit_attached",true)
}})
},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;
if(this.parentNode&&!e.isTrigger){bI.event.simulate("submit",this.parentNode,e,true)
}}},teardown:function(){if(bI.nodeName(this,"form")){return false
}bI.event.remove(this,"._submit")
}}
}if(!bI.support.changeBubbles){bI.event.special.change={setup:function(){if(bG.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bI.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true
}});
bI.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false
}bI.event.simulate("change",this,e,true)
})
}return false
}bI.event.add(this,"beforeactivate._change",function(b2){var b1=b2.target;
if(bG.test(b1.nodeName)&&!bI._data(b1,"_change_attached")){bI.event.add(b1,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){bI.event.simulate("change",this.parentNode,e,true)
}});
bI._data(b1,"_change_attached",true)
}})
},handle:function(b1){var e=b1.target;
if(this!==e||b1.isSimulated||b1.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return b1.handleObj.handler.apply(this,arguments)
}},teardown:function(){bI.event.remove(this,"._change");
return !bG.test(this.nodeName)
}}
}if(!bI.support.focusinBubbles){bI.each({focus:"focusin",blur:"focusout"},function(b3,e){var b1=0,b2=function(b4){bI.event.simulate(e,b4.target,bI.event.fix(b4),true)
};
bI.event.special[e]={setup:function(){if(b1++===0){p.addEventListener(b3,b2,true)
}},teardown:function(){if(--b1===0){p.removeEventListener(b3,b2,true)
}}}
})
}bI.fn.extend({on:function(b2,e,b5,b4,b1){var b6,b3;
if(typeof b2==="object"){if(typeof e!=="string"){b5=b5||e;
e=aD
}for(b3 in b2){this.on(b3,e,b5,b2[b3],b1)
}return this
}if(b5==null&&b4==null){b4=e;
b5=e=aD
}else{if(b4==null){if(typeof e==="string"){b4=b5;
b5=aD
}else{b4=b5;
b5=e;
e=aD
}}}if(b4===false){b4=Z
}else{if(!b4){return this
}}if(b1===1){b6=b4;
b4=function(b7){bI().off(b7);
return b6.apply(this,arguments)
};
b4.guid=b6.guid||(b6.guid=bI.guid++)
}return this.each(function(){bI.event.add(this,b2,b4,b5,e)
})
},one:function(b1,e,b3,b2){return this.on(b1,e,b3,b2,1)
},off:function(b2,e,b4){var b1,b3;
if(b2&&b2.preventDefault&&b2.handleObj){b1=b2.handleObj;
bI(b2.delegateTarget).off(b1.namespace?b1.origType+"."+b1.namespace:b1.origType,b1.selector,b1.handler);
return this
}if(typeof b2==="object"){for(b3 in b2){this.off(b3,e,b2[b3])
}return this
}if(e===false||typeof e==="function"){b4=e;
e=aD
}if(b4===false){b4=Z
}return this.each(function(){bI.event.remove(this,b2,b4,e)
})
},bind:function(e,b2,b1){return this.on(e,null,b2,b1)
},unbind:function(e,b1){return this.off(e,null,b1)
},live:function(e,b2,b1){bI(this.context).on(e,this.selector,b2,b1);
return this
},die:function(e,b1){bI(this.context).off(e,this.selector||"**",b1);
return this
},delegate:function(e,b1,b3,b2){return this.on(b1,e,b3,b2)
},undelegate:function(e,b1,b2){return arguments.length==1?this.off(e,"**"):this.off(b1,e||"**",b2)
},trigger:function(e,b1){return this.each(function(){bI.event.trigger(e,b1,this)
})
},triggerHandler:function(e,b1){if(this[0]){return bI.event.trigger(e,b1,this[0],true)
}},toggle:function(b3){var b1=arguments,e=b3.guid||bI.guid++,b2=0,b4=function(b5){var b6=(bI._data(this,"lastToggle"+b3.guid)||0)%b2;
bI._data(this,"lastToggle"+b3.guid,b6+1);
b5.preventDefault();
return b1[b6].apply(this,arguments)||false
};
b4.guid=e;
while(b2<b1.length){b1[b2++].guid=e
}return this.click(b4)
},hover:function(e,b1){return this.mouseenter(e).mouseleave(b1||e)
}});
bI.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(b1,e){bI.fn[e]=function(b3,b2){if(b2==null){b2=b3;
b3=null
}return arguments.length>0?this.on(e,null,b3,b2):this.trigger(e)
};
if(a5.test(e)){bI.event.fixHooks[e]=bI.event.keyHooks
}if(bM.test(e)){bI.event.fixHooks[e]=bI.event.mouseHooks
}});
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2012 jQuery Foundation and other contributors
 *  Released under the MIT license
 *  http://sizzlejs.com/
 */
(function(cO,ch){var cp,cT,cb,cG,b2,cl,cx,ce,cg,cd,ca=true,ct="undefined",cW=("sizcache"+Math.random()).replace(".",""),b9=cO.document,cc=b9.documentElement,cf=0,ck=[].slice,cS=[].push,cY=function(e,c3){e[cW]=c3||true;
return e
},c1=function(){var e={},c3=[];
return cY(function(c4,c5){if(c3.push(c4)>cG.cacheLength){delete e[c3.shift()]
}return(e[c4]=c5)
},e)
},cQ=c1(),cR=c1(),cm=c1(),cw="[\\x20\\t\\r\\n\\f]",cj="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",ci=cj.replace("w","w#"),c0="([*^$|!~]?=)",cL="\\["+cw+"*("+cj+")"+cw+"*(?:"+c0+cw+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+ci+")|)|)"+cw+"*\\]",c2=":("+cj+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+cL+")|[^:]|\\\\.)*|.*))\\)|)",cy=":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",cU=new RegExp("^"+cw+"+|((?:^|[^\\\\])(?:\\\\.)*)"+cw+"+$","g"),b6=new RegExp("^"+cw+"*,"+cw+"*"),cD=new RegExp("^"+cw+"*([\\x20\\t\\r\\n\\f>+~])"+cw+"*"),cI=new RegExp(c2),cK=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,cB=/^:not/,cN=/[\x20\t\r\n\f]*[+~]/,cX=/:not\($/,cq=/h\d/i,cJ=/input|select|textarea|button/i,cr=/\\(?!\\)/g,cC={ID:new RegExp("^#("+cj+")"),CLASS:new RegExp("^\\.("+cj+")"),NAME:new RegExp("^\\[name=['\"]?("+cj+")['\"]?\\]"),TAG:new RegExp("^("+cj.replace("w","w*")+")"),ATTR:new RegExp("^"+cL),PSEUDO:new RegExp("^"+c2),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+cw+"*(even|odd|(([+-]|)(\\d*)n|)"+cw+"*(?:([+-]|)"+cw+"*(\\d+)|))"+cw+"*\\)|)","i"),POS:new RegExp(cy,"ig"),needsContext:new RegExp("^"+cw+"*[>+~]|"+cy,"i")},cF=function(c3){var c5=b9.createElement("div");
try{return c3(c5)
}catch(c4){return false
}finally{c5=null
}},b8=cF(function(e){e.appendChild(b9.createComment(""));
return !e.getElementsByTagName("*").length
}),cA=cF(function(e){e.innerHTML="<a href='#'></a>";
return e.firstChild&&typeof e.firstChild.getAttribute!==ct&&e.firstChild.getAttribute("href")==="#"
}),co=cF(function(c3){c3.innerHTML="<select></select>";
var e=typeof c3.lastChild.getAttribute("multiple");
return e!=="boolean"&&e!=="string"
}),cz=cF(function(e){e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";
if(!e.getElementsByClassName||!e.getElementsByClassName("e").length){return false
}e.lastChild.className="e";
return e.getElementsByClassName("e").length===2
}),b1=cF(function(c3){c3.id=cW+0;
c3.innerHTML="<a name='"+cW+"'></a><div name='"+cW+"'></div>";
cc.insertBefore(c3,cc.firstChild);
var e=b9.getElementsByName&&b9.getElementsByName(cW).length===2+b9.getElementsByName(cW+0).length;
cb=!b9.getElementById(cW);
cc.removeChild(c3);
return e
});
try{ck.call(cc.childNodes,0)[0].nodeType
}catch(cZ){ck=function(c3){var c4,e=[];
for(;
(c4=this[c3]);
c3++){e.push(c4)
}return e
}
}function cM(c5,e,c7,da){c7=c7||[];
e=e||b9;
var c8,c3,c9,c4,c6=e.nodeType;
if(c6!==1&&c6!==9){return[]
}if(!c5||typeof c5!=="string"){return c7
}c9=cl(e);
if(!c9&&!da){if((c8=cK.exec(c5))){if((c4=c8[1])){if(c6===9){c3=e.getElementById(c4);
if(c3&&c3.parentNode){if(c3.id===c4){c7.push(c3);
return c7
}}else{return c7
}}else{if(e.ownerDocument&&(c3=e.ownerDocument.getElementById(c4))&&cx(e,c3)&&c3.id===c4){c7.push(c3);
return c7
}}}else{if(c8[2]){cS.apply(c7,ck.call(e.getElementsByTagName(c5),0));
return c7
}else{if((c4=c8[3])&&cz&&e.getElementsByClassName){cS.apply(c7,ck.call(e.getElementsByClassName(c4),0));
return c7
}}}}}return cV(c5,e,c7,da,c9)
}cM.matches=function(c3,e){return cM(c3,null,null,e)
};
cM.matchesSelector=function(e,c3){return cM(c3,null,null,[e]).length>0
};
function cE(e){return function(c4){var c3=c4.nodeName.toLowerCase();
return c3==="input"&&c4.type===e
}
}function b5(e){return function(c4){var c3=c4.nodeName.toLowerCase();
return(c3==="input"||c3==="button")&&c4.type===e
}
}b2=cM.getText=function(c6){var c5,c3="",c4=0,e=c6.nodeType;
if(e){if(e===1||e===9||e===11){if(typeof c6.textContent==="string"){return c6.textContent
}else{for(c6=c6.firstChild;
c6;
c6=c6.nextSibling){c3+=b2(c6)
}}}else{if(e===3||e===4){return c6.nodeValue
}}}else{for(;
(c5=c6[c4]);
c4++){c3+=b2(c5)
}}return c3
};
cl=cM.isXML=function cl(e){var c3=e&&(e.ownerDocument||e).documentElement;
return c3?c3.nodeName!=="HTML":false
};
cx=cM.contains=cc.contains?function(c3,e){var c5=c3.nodeType===9?c3.documentElement:c3,c4=e&&e.parentNode;
return c3===c4||!!(c4&&c4.nodeType===1&&c5.contains&&c5.contains(c4))
}:cc.compareDocumentPosition?function(c3,e){return e&&!!(c3.compareDocumentPosition(e)&16)
}:function(c3,e){while((e=e.parentNode)){if(e===c3){return true
}}return false
};
cM.attr=function(c5,c4){var e,c3=cl(c5);
if(!c3){c4=c4.toLowerCase()
}if(cG.attrHandle[c4]){return cG.attrHandle[c4](c5)
}if(co||c3){return c5.getAttribute(c4)
}e=c5.getAttributeNode(c4);
return e?typeof c5[c4]==="boolean"?c5[c4]?c4:null:e.specified?e.value:null:null
};
cG=cM.selectors={cacheLength:50,createPseudo:cY,match:cC,order:new RegExp("ID|TAG"+(b1?"|NAME":"")+(cz?"|CLASS":"")),attrHandle:cA?{}:{href:function(e){return e.getAttribute("href",2)
},type:function(e){return e.getAttribute("type")
}},find:{ID:cb?function(c5,c4,c3){if(typeof c4.getElementById!==ct&&!c3){var e=c4.getElementById(c5);
return e&&e.parentNode?[e]:[]
}}:function(c5,c4,c3){if(typeof c4.getElementById!==ct&&!c3){var e=c4.getElementById(c5);
return e?e.id===c5||typeof e.getAttributeNode!==ct&&e.getAttributeNode("id").value===c5?[e]:ch:[]
}},TAG:b8?function(e,c3){if(typeof c3.getElementsByTagName!==ct){return c3.getElementsByTagName(e)
}}:function(e,c6){var c5=c6.getElementsByTagName(e);
if(e==="*"){var c7,c4=[],c3=0;
for(;
(c7=c5[c3]);
c3++){if(c7.nodeType===1){c4.push(c7)
}}return c4
}return c5
},NAME:function(e,c3){if(typeof c3.getElementsByName!==ct){return c3.getElementsByName(name)
}},CLASS:function(c4,c3,e){if(typeof c3.getElementsByClassName!==ct&&!e){return c3.getElementsByClassName(c4)
}}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(cr,"");
e[3]=(e[4]||e[5]||"").replace(cr,"");
if(e[2]==="~="){e[3]=" "+e[3]+" "
}return e.slice(0,4)
},CHILD:function(e){e[1]=e[1].toLowerCase();
if(e[1]==="nth"){if(!e[2]){cM.error(e[0])
}e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd"));
e[4]=+((e[6]+e[7])||e[2]==="odd")
}else{if(e[2]){cM.error(e[0])
}}return e
},PSEUDO:function(c4,c5,c3){var c6,e;
if(cC.CHILD.test(c4[0])){return null
}if(c4[3]){c4[2]=c4[3]
}else{if((c6=c4[4])){if(cI.test(c6)&&(e=b3(c6,c5,c3,true))&&(e=c6.indexOf(")",c6.length-e)-c6.length)){c6=c6.slice(0,e);
c4[0]=c4[0].slice(0,e)
}c4[2]=c6
}}return c4.slice(0,3)
}},filter:{ID:cb?function(e){e=e.replace(cr,"");
return function(c3){return c3.getAttribute("id")===e
}
}:function(e){e=e.replace(cr,"");
return function(c4){var c3=typeof c4.getAttributeNode!==ct&&c4.getAttributeNode("id");
return c3&&c3.value===e
}
},TAG:function(e){if(e==="*"){return function(){return true
}
}e=e.replace(cr,"").toLowerCase();
return function(c3){return c3.nodeName&&c3.nodeName.toLowerCase()===e
}
},CLASS:function(e){var c3=cQ[cW][e];
if(!c3){c3=cQ(e,new RegExp("(^|"+cw+")"+e+"("+cw+"|$)"))
}return function(c4){return c3.test(c4.className||(typeof c4.getAttribute!==ct&&c4.getAttribute("class"))||"")
}
},ATTR:function(c4,c3,e){if(!c3){return function(c5){return cM.attr(c5,c4)!=null
}
}return function(c6){var c5=cM.attr(c6,c4),c7=c5+"";
if(c5==null){return c3==="!="
}switch(c3){case"=":return c7===e;
case"!=":return c7!==e;
case"^=":return e&&c7.indexOf(e)===0;
case"*=":return e&&c7.indexOf(e)>-1;
case"$=":return e&&c7.substr(c7.length-e.length)===e;
case"~=":return(" "+c7+" ").indexOf(e)>-1;
case"|=":return c7===e||c7.substr(0,e.length+1)===e+"-"
}}
},CHILD:function(c3,c5,c6,c4){if(c3==="nth"){var e=cf++;
return function(da){var c7,db,c9=0,c8=da;
if(c6===1&&c4===0){return true
}c7=da.parentNode;
if(c7&&(c7[cW]!==e||!da.sizset)){for(c8=c7.firstChild;
c8;
c8=c8.nextSibling){if(c8.nodeType===1){c8.sizset=++c9;
if(c8===da){break
}}}c7[cW]=e
}db=da.sizset-c4;
if(c6===0){return db===0
}else{return(db%c6===0&&db/c6>=0)
}}
}return function(c8){var c7=c8;
switch(c3){case"only":case"first":while((c7=c7.previousSibling)){if(c7.nodeType===1){return false
}}if(c3==="first"){return true
}c7=c8;
case"last":while((c7=c7.nextSibling)){if(c7.nodeType===1){return false
}}return true
}}
},PSEUDO:function(c7,c6,c4,c3){var e,c5=cG.pseudos[c7]||cG.pseudos[c7.toLowerCase()];
if(!c5){cM.error("unsupported pseudo: "+c7)
}if(!c5[cW]){if(c5.length>1){e=[c7,c7,"",c6];
return function(c8){return c5(c8,0,e)
}
}return c5
}return c5(c6,c4,c3)
}},pseudos:{not:cY(function(e,c4,c3){var c5=ce(e.replace(cU,"$1"),c4,c3);
return function(c6){return !c5(c6)
}
}),enabled:function(e){return e.disabled===false
},disabled:function(e){return e.disabled===true
},checked:function(e){var c3=e.nodeName.toLowerCase();
return(c3==="input"&&!!e.checked)||(c3==="option"&&!!e.selected)
},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex
}return e.selected===true
},parent:function(e){return !cG.pseudos.empty(e)
},empty:function(c3){var e;
c3=c3.firstChild;
while(c3){if(c3.nodeName>"@"||(e=c3.nodeType)===3||e===4){return false
}c3=c3.nextSibling
}return true
},contains:cY(function(e){return function(c3){return(c3.textContent||c3.innerText||b2(c3)).indexOf(e)>-1
}
}),has:cY(function(e){return function(c3){return cM(e,c3).length>0
}
}),header:function(e){return cq.test(e.nodeName)
},text:function(c4){var c3,e;
return c4.nodeName.toLowerCase()==="input"&&(c3=c4.type)==="text"&&((e=c4.getAttribute("type"))==null||e.toLowerCase()===c3)
},radio:cE("radio"),checkbox:cE("checkbox"),file:cE("file"),password:cE("password"),image:cE("image"),submit:b5("submit"),reset:b5("reset"),button:function(c3){var e=c3.nodeName.toLowerCase();
return e==="input"&&c3.type==="button"||e==="button"
},input:function(e){return cJ.test(e.nodeName)
},focus:function(e){var c3=e.ownerDocument;
return e===c3.activeElement&&(!c3.hasFocus||c3.hasFocus())&&!!(e.type||e.href)
},active:function(e){return e===e.ownerDocument.activeElement
}},setFilters:{first:function(c4,c3,e){return e?c4.slice(1):[c4[0]]
},last:function(c5,c4,c3){var e=c5.pop();
return c3?c5:[e]
},even:function(c7,c6,c5){var c4=[],c3=c5?1:0,e=c7.length;
for(;
c3<e;
c3=c3+2){c4.push(c7[c3])
}return c4
},odd:function(c7,c6,c5){var c4=[],c3=c5?0:1,e=c7.length;
for(;
c3<e;
c3=c3+2){c4.push(c7[c3])
}return c4
},lt:function(c4,c3,e){return e?c4.slice(+c3):c4.slice(0,+c3)
},gt:function(c4,c3,e){return e?c4.slice(0,+c3+1):c4.slice(+c3+1)
},eq:function(c5,c4,c3){var e=c5.splice(+c4,1);
return c3?c5:e
}}};
function b4(c3,e,c4){if(c3===e){return c4
}var c5=c3.nextSibling;
while(c5){if(c5===e){return -1
}c5=c5.nextSibling
}return 1
}cg=cc.compareDocumentPosition?function(c3,e){if(c3===e){cd=true;
return 0
}return(!c3.compareDocumentPosition||!e.compareDocumentPosition?c3.compareDocumentPosition:c3.compareDocumentPosition(e)&4)?-1:1
}:function(da,c9){if(da===c9){cd=true;
return 0
}else{if(da.sourceIndex&&c9.sourceIndex){return da.sourceIndex-c9.sourceIndex
}}var c7,c3,c4=[],e=[],c6=da.parentNode,c8=c9.parentNode,db=c6;
if(c6===c8){return b4(da,c9)
}else{if(!c6){return -1
}else{if(!c8){return 1
}}}while(db){c4.unshift(db);
db=db.parentNode
}db=c8;
while(db){e.unshift(db);
db=db.parentNode
}c7=c4.length;
c3=e.length;
for(var c5=0;
c5<c7&&c5<c3;
c5++){if(c4[c5]!==e[c5]){return b4(c4[c5],e[c5])
}}return c5===c7?b4(da,e[c5],-1):b4(c4[c5],c9,1)
};
[0,0].sort(cg);
ca=!cd;
cM.uniqueSort=function(c3){var c4,e=1;
cd=ca;
c3.sort(cg);
if(cd){for(;
(c4=c3[e]);
e++){if(c4===c3[e-1]){c3.splice(e--,1)
}}}return c3
};
cM.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)
};
function b3(c9,c3,db,di){var c4,dc,de,df,dd,c6,dh,da,e,c5,c8=!db&&c3!==b9,dg=(c8?"<s>":"")+c9.replace(cU,"$1<s>"),c7=cR[cW][dg];
if(c7){return di?0:ck.call(c7,0)
}dd=c9;
c6=[];
da=0;
e=cG.preFilter;
c5=cG.filter;
while(dd){if(!c4||(dc=b6.exec(dd))){if(dc){dd=dd.slice(dc[0].length);
de.selector=dh
}c6.push(de=[]);
dh="";
if(c8){dd=" "+dd
}}c4=false;
if((dc=cD.exec(dd))){dh+=dc[0];
dd=dd.slice(dc[0].length);
c4=de.push({part:dc.pop().replace(cU," "),string:dc[0],captures:dc})
}for(df in c5){if((dc=cC[df].exec(dd))&&(!e[df]||(dc=e[df](dc,c3,db)))){dh+=dc[0];
dd=dd.slice(dc[0].length);
c4=de.push({part:df,string:dc.shift(),captures:dc})
}}if(!c4){break
}}if(dh){de.selector=dh
}return di?dd.length:dd?cM.error(c9):ck.call(cR(dg,c6),0)
}function cu(c7,c6,c5,c3){var e=c6.dir,c4=cf++;
if(!c7){c7=function(c8){return c8===c5
}
}return c6.first?function(c8){while((c8=c8[e])){if(c8.nodeType===1){return c7(c8)&&c8
}}}:c3?function(c8){while((c8=c8[e])){if(c8.nodeType===1){if(c7(c8)){return c8
}}}}:function(c9){var c8,da=c4+"."+cp,db=da+"."+cT;
while((c9=c9[e])){if(c9.nodeType===1){if((c8=c9[cW])===db){return c9.sizset
}else{if(typeof c8==="string"&&c8.indexOf(da)===0){if(c9.sizset){return c9
}}else{c9[cW]=db;
if(c7(c9)){c9.sizset=true;
return c9
}c9.sizset=false
}}}}}
}function cs(e,c3){return e?function(c5){var c4=c3(c5);
return c4&&e(c4===true?c5:c4)
}:c3
}function cv(c7,c5,e){var c4,c6,c3=0;
for(;
(c4=c7[c3]);
c3++){if(cG.relative[c4.part]){c6=cu(c6,cG.relative[c4.part],c5,e)
}else{c6=cs(c6,cG.filter[c4.part].apply(null,c4.captures.concat(c5,e)))
}}return c6
}function b7(e){return function(c4){var c5,c3=0;
for(;
(c5=e[c3]);
c3++){if(c5(c4)){return true
}}return false
}
}ce=cM.compile=function(c3,c6,c4){var c8,c5,e,c7=cm[cW][c3];
if(c7&&c7.context===c6){return c7
}c8=b3(c3,c6,c4);
for(c5=0,e=c8.length;
c5<e;
c5++){c8[c5]=cv(c8[c5],c6,c4)
}c7=cm(c3,b7(c8));
c7.context=c6;
c7.runs=c7.dirruns=0;
return c7
};
function cn(c3,c7,c6,c4){var c5=0,e=c7.length;
for(;
c5<e;
c5++){cM(c3,c7[c5],c6,c4)
}}function cH(e,c4,c8,c9,c3,c7){var c5,c6=cG.setFilters[c4.toLowerCase()];
if(!c6){cM.error(c4)
}if(e||!(c5=c3)){cn(e||"*",c9,(c5=[]),c3)
}return c5.length>0?c6(c5,c8,c7):[]
}function cP(dl,e,de,c4){var da,df,dg,dd,c7,dh,c6,dc,c8,db,dk,dm,c3,di=0,dj=dl.length,c5=cC.POS,c9=new RegExp("^"+c5.source+"(?!"+cw+")","i"),dn=function(){var dq=1,dp=arguments.length-2;
for(;
dq<dp;
dq++){if(arguments[dq]===ch){c8[dq]=ch
}}};
for(;
di<dj;
di++){da=dl[di];
df="";
dc=c4;
for(dg=0,dd=da.length;
dg<dd;
dg++){c7=da[dg];
dh=c7.string;
if(c7.part==="PSEUDO"){c5.exec("");
c6=0;
while((c8=c5.exec(dh))){db=true;
dk=c5.lastIndex=c8.index+c8[0].length;
if(dk>c6){df+=dh.slice(c6,c8.index);
c6=dk;
dm=[e];
if(cD.test(df)){if(dc){dm=dc
}dc=c4
}if((c3=cX.test(df))){df=df.slice(0,-5).replace(cD,"$&*");
c6++
}if(c8.length>1){c8[0].replace(c9,dn)
}dc=cH(df,c8[1],c8[2],dm,dc,c3)
}df=""
}}if(!db){df+=dh
}db=false
}if(df){if(cD.test(df)){cn(df,dc||[e],de,c4)
}else{cM(df,e,de,c4?c4.concat(dc):dc)
}}else{cS.apply(de,dc)
}}return dj===1?de:cM.uniqueSort(de)
}function cV(c8,c3,da,dd,dc){c8=c8.replace(cU,"$1");
var e,de,c6,c5,c9,dg,c7,c4,dh,df,db=b3(c8,c3,dc),di=c3.nodeType;
if(cC.POS.test(c8)){return cP(db,c3,da,dd)
}if(dd){e=ck.call(dd,0)
}else{if(db.length===1){if((dg=ck.call(db[0],0)).length>2&&(c7=dg[0]).part==="ID"&&di===9&&!dc&&cG.relative[dg[1].part]){c3=cG.find.ID(c7.captures[0].replace(cr,""),c3,dc)[0];
if(!c3){return da
}c8=c8.slice(dg.shift().string.length)
}dh=((db=cN.exec(dg[0].string))&&!db.index&&c3.parentNode)||c3;
c4="";
for(c9=dg.length-1;
c9>=0;
c9--){c7=dg[c9];
df=c7.part;
c4=c7.string+c4;
if(cG.relative[df]){break
}if(cG.order.test(df)){e=cG.find[df](c7.captures[0].replace(cr,""),dh,dc);
if(e==null){continue
}else{c8=c8.slice(0,c8.length-c4.length)+c4.replace(cC[df],"");
if(!c8){cS.apply(da,ck.call(e,0))
}break
}}}}}if(c8){de=ce(c8,c3,dc);
cp=de.dirruns++;
if(e==null){e=cG.find.TAG("*",(cN.test(c8)&&c3.parentNode)||c3)
}for(c9=0;
(c5=e[c9]);
c9++){cT=de.runs++;
if(de(c5)){da.push(c5)
}}}return da
}if(b9.querySelectorAll){(function(){var c7,c8=cV,c6=/'|\\/g,c4=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,c3=[],e=[":active"],c5=cc.matchesSelector||cc.mozMatchesSelector||cc.webkitMatchesSelector||cc.oMatchesSelector||cc.msMatchesSelector;
cF(function(c9){c9.innerHTML="<select><option selected=''></option></select>";
if(!c9.querySelectorAll("[selected]").length){c3.push("\\["+cw+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
}if(!c9.querySelectorAll(":checked").length){c3.push(":checked")
}});
cF(function(c9){c9.innerHTML="<p test=''></p>";
if(c9.querySelectorAll("[test^='']").length){c3.push("[*^$]="+cw+"*(?:\"\"|'')")
}c9.innerHTML="<input type='hidden'/>";
if(!c9.querySelectorAll(":enabled").length){c3.push(":enabled",":disabled")
}});
c3=c3.length&&new RegExp(c3.join("|"));
cV=function(df,da,dg,dj,di){if(!dj&&!di&&(!c3||!c3.test(df))){if(da.nodeType===9){try{cS.apply(dg,ck.call(da.querySelectorAll(df),0));
return dg
}catch(de){}}else{if(da.nodeType===1&&da.nodeName.toLowerCase()!=="object"){var dd,dh,dk,dc=da.getAttribute("id"),c9=dc||cW,db=cN.test(df)&&da.parentNode||da;
if(dc){c9=c9.replace(c6,"\\$&")
}else{da.setAttribute("id",c9)
}dd=b3(df,da,di);
c9="[id='"+c9+"']";
for(dh=0,dk=dd.length;
dh<dk;
dh++){dd[dh]=c9+dd[dh].selector
}try{cS.apply(dg,ck.call(db.querySelectorAll(dd.join(",")),0));
return dg
}catch(de){}finally{if(!dc){da.removeAttribute("id")
}}}}}return c8(df,da,dg,dj,di)
};
if(c5){cF(function(da){c7=c5.call(da,"div");
try{c5.call(da,"[test!='']:sizzle");
e.push(cC.PSEUDO.source,cC.POS.source,"!=")
}catch(c9){}});
e=new RegExp(e.join("|"));
cM.matchesSelector=function(da,dc){dc=dc.replace(c4,"='$1']");
if(!cl(da)&&!e.test(dc)&&(!c3||!c3.test(dc))){try{var c9=c5.call(da,dc);
if(c9||c7||da.document&&da.document.nodeType!==11){return c9
}}catch(db){}}return cM(dc,null,null,[da]).length>0
}
}})()
}cG.setFilters.nth=cG.setFilters.eq;
cG.filters=cG.pseudos;
cM.attr=bI.attr;
bI.find=cM;
bI.expr=cM.selectors;
bI.expr[":"]=bI.expr.pseudos;
bI.unique=cM.uniqueSort;
bI.text=cM.getText;
bI.isXMLDoc=cM.isXML;
bI.contains=cM.contains
})(a4);
var ai=/Until$/,bs=/^(?:parents|prev(?:Until|All))/,an=/^.[^:#\[\.,]*$/,A=bI.expr.match.needsContext,bw={children:true,contents:true,next:true,prev:true};
bI.fn.extend({find:function(e){var b4,b1,b6,b7,b5,b3,b2=this;
if(typeof e!=="string"){return bI(e).filter(function(){for(b4=0,b1=b2.length;
b4<b1;
b4++){if(bI.contains(b2[b4],this)){return true
}}})
}b3=this.pushStack("","find",e);
for(b4=0,b1=this.length;
b4<b1;
b4++){b6=b3.length;
bI.find(e,this[b4],b3);
if(b4>0){for(b7=b6;
b7<b3.length;
b7++){for(b5=0;
b5<b6;
b5++){if(b3[b5]===b3[b7]){b3.splice(b7--,1);
break
}}}}}return b3
},has:function(b3){var b2,b1=bI(b3,this),e=b1.length;
return this.filter(function(){for(b2=0;
b2<e;
b2++){if(bI.contains(this,b1[b2])){return true
}}})
},not:function(e){return this.pushStack(aO(this,e,false),"not",e)
},filter:function(e){return this.pushStack(aO(this,e,true),"filter",e)
},is:function(e){return !!e&&(typeof e==="string"?A.test(e)?bI(e,this.context).index(this[0])>=0:bI.filter(e,this).length>0:this.filter(e).length>0)
},closest:function(b4,b3){var b5,b2=0,e=this.length,b1=[],b6=A.test(b4)||typeof b4!=="string"?bI(b4,b3||this.context):0;
for(;
b2<e;
b2++){b5=this[b2];
while(b5&&b5.ownerDocument&&b5!==b3&&b5.nodeType!==11){if(b6?b6.index(b5)>-1:bI.find.matchesSelector(b5,b4)){b1.push(b5);
break
}b5=b5.parentNode
}}b1=b1.length>1?bI.unique(b1):b1;
return this.pushStack(b1,"closest",b4)
},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1
}if(typeof e==="string"){return bI.inArray(this[0],bI(e))
}return bI.inArray(e.jquery?e[0]:e,this)
},add:function(e,b1){var b3=typeof e==="string"?bI(e,b1):bI.makeArray(e&&e.nodeType?[e]:e),b2=bI.merge(this.get(),b3);
return this.pushStack(aT(b3[0])||aT(b2[0])?b2:bI.unique(b2))
},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))
}});
bI.fn.andSelf=bI.fn.addBack;
function aT(e){return !e||!e.parentNode||e.parentNode.nodeType===11
}function a0(b1,e){do{b1=b1[e]
}while(b1&&b1.nodeType!==1);
return b1
}bI.each({parent:function(b1){var e=b1.parentNode;
return e&&e.nodeType!==11?e:null
},parents:function(e){return bI.dir(e,"parentNode")
},parentsUntil:function(b1,e,b2){return bI.dir(b1,"parentNode",b2)
},next:function(e){return a0(e,"nextSibling")
},prev:function(e){return a0(e,"previousSibling")
},nextAll:function(e){return bI.dir(e,"nextSibling")
},prevAll:function(e){return bI.dir(e,"previousSibling")
},nextUntil:function(b1,e,b2){return bI.dir(b1,"nextSibling",b2)
},prevUntil:function(b1,e,b2){return bI.dir(b1,"previousSibling",b2)
},siblings:function(e){return bI.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return bI.sibling(e.firstChild)
},contents:function(e){return bI.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:bI.merge([],e.childNodes)
}},function(e,b1){bI.fn[e]=function(b4,b2){var b3=bI.map(this,b1,b4);
if(!ai.test(e)){b2=b4
}if(b2&&typeof b2==="string"){b3=bI.filter(b2,b3)
}b3=this.length>1&&!bw[e]?bI.unique(b3):b3;
if(this.length>1&&bs.test(e)){b3=b3.reverse()
}return this.pushStack(b3,e,a6.call(arguments).join(","))
}
});
bI.extend({filter:function(b2,e,b1){if(b1){b2=":not("+b2+")"
}return e.length===1?bI.find.matchesSelector(e[0],b2)?[e[0]]:[]:bI.find.matches(b2,e)
},dir:function(b2,b1,b4){var e=[],b3=b2[b1];
while(b3&&b3.nodeType!==9&&(b4===aD||b3.nodeType!==1||!bI(b3).is(b4))){if(b3.nodeType===1){e.push(b3)
}b3=b3[b1]
}return e
},sibling:function(b2,b1){var e=[];
for(;
b2;
b2=b2.nextSibling){if(b2.nodeType===1&&b2!==b1){e.push(b2)
}}return e
}});
function aO(b3,b2,e){b2=b2||0;
if(bI.isFunction(b2)){return bI.grep(b3,function(b5,b4){var b6=!!b2.call(b5,b4,b5);
return b6===e
})
}else{if(b2.nodeType){return bI.grep(b3,function(b5,b4){return(b5===b2)===e
})
}else{if(typeof b2==="string"){var b1=bI.grep(b3,function(b4){return b4.nodeType===1
});
if(an.test(b2)){return bI.filter(b2,b1,!e)
}else{b2=bI.filter(b2,b1)
}}}}return bI.grep(b3,function(b5,b4){return(bI.inArray(b5,b2)>=0)===e
})
}function C(e){var b2=c.split("|"),b1=e.createDocumentFragment();
if(b1.createElement){while(b2.length){b1.createElement(b2.pop())
}}return b1
}var c="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ax=/ jQuery\d+="(?:null|\d+)"/g,b0=/^\s+/,aA=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,q=/<([\w:]+)/,bV=/<tbody/i,L=/<|&#?\w+;/,al=/<(?:script|style|link)/i,ar=/<(?:script|object|embed|option|style)/i,M=new RegExp("<(?:"+c+")[\\s/>]","i"),aG=/^(?:checkbox|radio)$/,bT=/checked\s*(?:[^=]|=\s*.checked.)/i,by=/\/(java|ecma)script/i,aJ=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,V={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},aS=C(p),m=aS.appendChild(p.createElement("div"));
V.optgroup=V.option;
V.tbody=V.tfoot=V.colgroup=V.caption=V.thead;
V.th=V.td;
if(!bI.support.htmlSerialize){V._default=[1,"X<div>","</div>"]
}bI.fn.extend({text:function(e){return bI.access(this,function(b1){return b1===aD?bI.text(this):this.empty().append((this[0]&&this[0].ownerDocument||p).createTextNode(b1))
},null,e,arguments.length)
},wrapAll:function(e){if(bI.isFunction(e)){return this.each(function(b2){bI(this).wrapAll(e.call(this,b2))
})
}if(this[0]){var b1=bI(e,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){b1.insertBefore(this[0])
}b1.map(function(){var b2=this;
while(b2.firstChild&&b2.firstChild.nodeType===1){b2=b2.firstChild
}return b2
}).append(this)
}return this
},wrapInner:function(e){if(bI.isFunction(e)){return this.each(function(b1){bI(this).wrapInner(e.call(this,b1))
})
}return this.each(function(){var b1=bI(this),b2=b1.contents();
if(b2.length){b2.wrapAll(e)
}else{b1.append(e)
}})
},wrap:function(e){var b1=bI.isFunction(e);
return this.each(function(b2){bI(this).wrapAll(b1?e.call(this,b2):e)
})
},unwrap:function(){return this.parent().each(function(){if(!bI.nodeName(this,"body")){bI(this).replaceWith(this.childNodes)
}}).end()
},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11){this.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11){this.insertBefore(e,this.firstChild)
}})
},before:function(){if(!aT(this[0])){return this.domManip(arguments,false,function(b1){this.parentNode.insertBefore(b1,this)
})
}if(arguments.length){var e=bI.clean(arguments);
return this.pushStack(bI.merge(e,this),"before",this.selector)
}},after:function(){if(!aT(this[0])){return this.domManip(arguments,false,function(b1){this.parentNode.insertBefore(b1,this.nextSibling)
})
}if(arguments.length){var e=bI.clean(arguments);
return this.pushStack(bI.merge(this,e),"after",this.selector)
}},remove:function(e,b3){var b2,b1=0;
for(;
(b2=this[b1])!=null;
b1++){if(!e||bI.filter(e,[b2]).length){if(!b3&&b2.nodeType===1){bI.cleanData(b2.getElementsByTagName("*"));
bI.cleanData([b2])
}if(b2.parentNode){b2.parentNode.removeChild(b2)
}}}return this
},empty:function(){var b1,e=0;
for(;
(b1=this[e])!=null;
e++){if(b1.nodeType===1){bI.cleanData(b1.getElementsByTagName("*"))
}while(b1.firstChild){b1.removeChild(b1.firstChild)
}}return this
},clone:function(b1,e){b1=b1==null?false:b1;
e=e==null?b1:e;
return this.map(function(){return bI.clone(this,b1,e)
})
},html:function(e){return bI.access(this,function(b4){var b3=this[0]||{},b2=0,b1=this.length;
if(b4===aD){return b3.nodeType===1?b3.innerHTML.replace(ax,""):aD
}if(typeof b4==="string"&&!al.test(b4)&&(bI.support.htmlSerialize||!M.test(b4))&&(bI.support.leadingWhitespace||!b0.test(b4))&&!V[(q.exec(b4)||["",""])[1].toLowerCase()]){b4=b4.replace(aA,"<$1></$2>");
try{for(;
b2<b1;
b2++){b3=this[b2]||{};
if(b3.nodeType===1){bI.cleanData(b3.getElementsByTagName("*"));
b3.innerHTML=b4
}}b3=0
}catch(b5){}}if(b3){this.empty().append(b4)
}},null,e,arguments.length)
},replaceWith:function(e){if(!aT(this[0])){if(bI.isFunction(e)){return this.each(function(b3){var b2=bI(this),b1=b2.html();
b2.replaceWith(e.call(this,b3,b1))
})
}if(typeof e!=="string"){e=bI(e).detach()
}return this.each(function(){var b2=this.nextSibling,b1=this.parentNode;
bI(this).remove();
if(b2){bI(b2).before(e)
}else{bI(b1).append(e)
}})
}return this.length?this.pushStack(bI(bI.isFunction(e)?e():e),"replaceWith",e):this
},detach:function(e){return this.remove(e,true)
},domManip:function(b6,ca,b9){b6=[].concat.apply([],b6);
var b2,b4,b5,b8,b3=0,b7=b6[0],b1=[],e=this.length;
if(!bI.support.checkClone&&e>1&&typeof b7==="string"&&bT.test(b7)){return this.each(function(){bI(this).domManip(b6,ca,b9)
})
}if(bI.isFunction(b7)){return this.each(function(cc){var cb=bI(this);
b6[0]=b7.call(this,cc,ca?cb.html():aD);
cb.domManip(b6,ca,b9)
})
}if(this[0]){b2=bI.buildFragment(b6,this,b1);
b5=b2.fragment;
b4=b5.firstChild;
if(b5.childNodes.length===1){b5=b4
}if(b4){ca=ca&&bI.nodeName(b4,"tr");
for(b8=b2.cacheable||e-1;
b3<e;
b3++){b9.call(ca&&bI.nodeName(this[b3],"table")?z(this[b3],"tbody"):this[b3],b3===b8?b5:bI.clone(b5,true,true))
}}b5=b4=null;
if(b1.length){bI.each(b1,function(cb,cc){if(cc.src){if(bI.ajax){bI.ajax({url:cc.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})
}else{bI.error("no ajax")
}}else{bI.globalEval((cc.text||cc.textContent||cc.innerHTML||"").replace(aJ,""))
}if(cc.parentNode){cc.parentNode.removeChild(cc)
}})
}}return this
}});
function z(b1,e){return b1.getElementsByTagName(e)[0]||b1.appendChild(b1.ownerDocument.createElement(e))
}function aq(b7,b1){if(b1.nodeType!==1||!bI.hasData(b7)){return
}var b4,b3,e,b6=bI._data(b7),b5=bI._data(b1,b6),b2=b6.events;
if(b2){delete b5.handle;
b5.events={};
for(b4 in b2){for(b3=0,e=b2[b4].length;
b3<e;
b3++){bI.event.add(b1,b4,b2[b4][b3])
}}}if(b5.data){b5.data=bI.extend({},b5.data)
}}function H(b1,e){var b2;
if(e.nodeType!==1){return
}if(e.clearAttributes){e.clearAttributes()
}if(e.mergeAttributes){e.mergeAttributes(b1)
}b2=e.nodeName.toLowerCase();
if(b2==="object"){if(e.parentNode){e.outerHTML=b1.outerHTML
}if(bI.support.html5Clone&&(b1.innerHTML&&!bI.trim(e.innerHTML))){e.innerHTML=b1.innerHTML
}}else{if(b2==="input"&&aG.test(b1.type)){e.defaultChecked=e.checked=b1.checked;
if(e.value!==b1.value){e.value=b1.value
}}else{if(b2==="option"){e.selected=b1.defaultSelected
}else{if(b2==="input"||b2==="textarea"){e.defaultValue=b1.defaultValue
}else{if(b2==="script"&&e.text!==b1.text){e.text=b1.text
}}}}}e.removeAttribute(bI.expando)
}bI.buildFragment=function(b3,b4,b1){var b2,e,b5,b6=b3[0];
b4=b4||p;
b4=!b4.nodeType&&b4[0]||b4;
b4=b4.ownerDocument||b4;
if(b3.length===1&&typeof b6==="string"&&b6.length<512&&b4===p&&b6.charAt(0)==="<"&&!ar.test(b6)&&(bI.support.checkClone||!bT.test(b6))&&(bI.support.html5Clone||!M.test(b6))){e=true;
b2=bI.fragments[b6];
b5=b2!==aD
}if(!b2){b2=b4.createDocumentFragment();
bI.clean(b3,b4,b2,b1);
if(e){bI.fragments[b6]=b5&&b2
}}return{fragment:b2,cacheable:e}
};
bI.fragments={};
bI.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,b1){bI.fn[e]=function(b2){var b4,b6=0,b5=[],b8=bI(b2),b3=b8.length,b7=this.length===1&&this[0].parentNode;
if((b7==null||b7&&b7.nodeType===11&&b7.childNodes.length===1)&&b3===1){b8[b1](this[0]);
return this
}else{for(;
b6<b3;
b6++){b4=(b6>0?this.clone(true):this).get();
bI(b8[b6])[b1](b4);
b5=b5.concat(b4)
}return this.pushStack(b5,e,b8.selector)
}}
});
function n(e){if(typeof e.getElementsByTagName!=="undefined"){return e.getElementsByTagName("*")
}else{if(typeof e.querySelectorAll!=="undefined"){return e.querySelectorAll("*")
}else{return[]
}}}function bU(e){if(aG.test(e.type)){e.defaultChecked=e.checked
}}bI.extend({clone:function(b4,b6,b2){var e,b1,b3,b5;
if(bI.support.html5Clone||bI.isXMLDoc(b4)||!M.test("<"+b4.nodeName+">")){b5=b4.cloneNode(true)
}else{m.innerHTML=b4.outerHTML;
m.removeChild(b5=m.firstChild)
}if((!bI.support.noCloneEvent||!bI.support.noCloneChecked)&&(b4.nodeType===1||b4.nodeType===11)&&!bI.isXMLDoc(b4)){H(b4,b5);
e=n(b4);
b1=n(b5);
for(b3=0;
e[b3];
++b3){if(b1[b3]){H(e[b3],b1[b3])
}}}if(b6){aq(b4,b5);
if(b2){e=n(b4);
b1=n(b5);
for(b3=0;
e[b3];
++b3){aq(e[b3],b1[b3])
}}}e=b1=null;
return b5
},clean:function(cd,b2,e,b3){var ca,b9,cc,ch,b6,cg,b7,b4,b1,cb,cf,b8,b5=b2===p&&aS,ce=[];
if(!b2||typeof b2.createDocumentFragment==="undefined"){b2=p
}for(ca=0;
(cc=cd[ca])!=null;
ca++){if(typeof cc==="number"){cc+=""
}if(!cc){continue
}if(typeof cc==="string"){if(!L.test(cc)){cc=b2.createTextNode(cc)
}else{b5=b5||C(b2);
b7=b2.createElement("div");
b5.appendChild(b7);
cc=cc.replace(aA,"<$1></$2>");
ch=(q.exec(cc)||["",""])[1].toLowerCase();
b6=V[ch]||V._default;
cg=b6[0];
b7.innerHTML=b6[1]+cc+b6[2];
while(cg--){b7=b7.lastChild
}if(!bI.support.tbody){b4=bV.test(cc);
b1=ch==="table"&&!b4?b7.firstChild&&b7.firstChild.childNodes:b6[1]==="<table>"&&!b4?b7.childNodes:[];
for(b9=b1.length-1;
b9>=0;
--b9){if(bI.nodeName(b1[b9],"tbody")&&!b1[b9].childNodes.length){b1[b9].parentNode.removeChild(b1[b9])
}}}if(!bI.support.leadingWhitespace&&b0.test(cc)){b7.insertBefore(b2.createTextNode(b0.exec(cc)[0]),b7.firstChild)
}cc=b7.childNodes;
b7.parentNode.removeChild(b7)
}}if(cc.nodeType){ce.push(cc)
}else{bI.merge(ce,cc)
}}if(b7){cc=b7=b5=null
}if(!bI.support.appendChecked){for(ca=0;
(cc=ce[ca])!=null;
ca++){if(bI.nodeName(cc,"input")){bU(cc)
}else{if(typeof cc.getElementsByTagName!=="undefined"){bI.grep(cc.getElementsByTagName("input"),bU)
}}}}if(e){cf=function(ci){if(!ci.type||by.test(ci.type)){return b3?b3.push(ci.parentNode?ci.parentNode.removeChild(ci):ci):e.appendChild(ci)
}};
for(ca=0;
(cc=ce[ca])!=null;
ca++){if(!(bI.nodeName(cc,"script")&&cf(cc))){e.appendChild(cc);
if(typeof cc.getElementsByTagName!=="undefined"){b8=bI.grep(bI.merge([],cc.getElementsByTagName("script")),cf);
ce.splice.apply(ce,[ca+1,0].concat(b8));
ca+=b8.length
}}}}return ce
},cleanData:function(b1,b9){var b4,b2,b3,b8,b5=0,ca=bI.expando,e=bI.cache,b6=bI.support.deleteExpando,b7=bI.event.special;
for(;
(b3=b1[b5])!=null;
b5++){if(b9||bI.acceptData(b3)){b2=b3[ca];
b4=b2&&e[b2];
if(b4){if(b4.events){for(b8 in b4.events){if(b7[b8]){bI.event.remove(b3,b8)
}else{bI.removeEvent(b3,b8,b4.handle)
}}}if(e[b2]){delete e[b2];
if(b6){delete b3[ca]
}else{if(b3.removeAttribute){b3.removeAttribute(ca)
}else{b3[ca]=null
}}bI.deletedIds.push(b2)
}}}}}});
(function(){var e,b1;
bI.uaMatch=function(b3){b3=b3.toLowerCase();
var b2=/(chrome)[ \/]([\w.]+)/.exec(b3)||/(webkit)[ \/]([\w.]+)/.exec(b3)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b3)||/(msie) ([\w.]+)/.exec(b3)||b3.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b3)||[];
return{browser:b2[1]||"",version:b2[2]||"0"}
};
e=bI.uaMatch(d.userAgent);
b1={};
if(e.browser){b1[e.browser]=true;
b1.version=e.version
}if(b1.chrome){b1.webkit=true
}else{if(b1.webkit){b1.safari=true
}}bI.browser=b1;
bI.sub=function(){function b2(b5,b6){return new b2.fn.init(b5,b6)
}bI.extend(true,b2,this);
b2.superclass=this;
b2.fn=b2.prototype=this();
b2.fn.constructor=b2;
b2.sub=this.sub;
b2.fn.init=function b4(b5,b6){if(b6&&b6 instanceof bI&&!(b6 instanceof b2)){b6=b2(b6)
}return bI.fn.init.call(this,b5,b6,b3)
};
b2.fn.init.prototype=b2.fn;
var b3=b2(p);
return b2
}
})();
var G,aB,aY,bg=/alpha\([^)]*\)/i,aU=/opacity=([^)]*)/,bm=/^(top|right|bottom|left)$/,I=/^(none|table(?!-c[ea]).+)/,a1=/^margin/,ba=new RegExp("^("+bz+")(.*)$","i"),Y=new RegExp("^("+bz+")(?!px)[a-z%]+$","i"),U=new RegExp("^([-+])=("+bz+")","i"),bj={},bb={position:"absolute",visibility:"hidden",display:"block"},bC={letterSpacing:0,fontWeight:400},bS=["Top","Right","Bottom","Left"],au=["Webkit","O","Moz","ms"],aL=bI.fn.toggle;
function b(b3,b1){if(b1 in b3){return b1
}var b4=b1.charAt(0).toUpperCase()+b1.slice(1),e=b1,b2=au.length;
while(b2--){b1=au[b2]+b4;
if(b1 in b3){return b1
}}return e
}function S(b1,e){b1=e||b1;
return bI.css(b1,"display")==="none"||!bI.contains(b1.ownerDocument,b1)
}function u(b5,e){var b4,b6,b1=[],b2=0,b3=b5.length;
for(;
b2<b3;
b2++){b4=b5[b2];
if(!b4.style){continue
}b1[b2]=bI._data(b4,"olddisplay");
if(e){if(!b1[b2]&&b4.style.display==="none"){b4.style.display=""
}if(b4.style.display===""&&S(b4)){b1[b2]=bI._data(b4,"olddisplay",bE(b4.nodeName))
}}else{b6=G(b4,"display");
if(!b1[b2]&&b6!=="none"){bI._data(b4,"olddisplay",b6)
}}}for(b2=0;
b2<b3;
b2++){b4=b5[b2];
if(!b4.style){continue
}if(!e||b4.style.display==="none"||b4.style.display===""){b4.style.display=e?b1[b2]||"":"none"
}}return b5
}bI.fn.extend({css:function(e,b1){return bI.access(this,function(b3,b2,b4){return b4!==aD?bI.style(b3,b2,b4):bI.css(b3,b2)
},e,b1,arguments.length>1)
},show:function(){return u(this,true)
},hide:function(){return u(this)
},toggle:function(b2,b1){var e=typeof b2==="boolean";
if(bI.isFunction(b2)&&bI.isFunction(b1)){return aL.apply(this,arguments)
}return this.each(function(){if(e?b2:S(this)){bI(this).show()
}else{bI(this).hide()
}})
}});
bI.extend({cssHooks:{opacity:{get:function(b2,b1){if(b1){var e=G(b2,"opacity");
return e===""?"1":e
}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":bI.support.cssFloat?"cssFloat":"styleFloat"},style:function(b3,b2,b9,b4){if(!b3||b3.nodeType===3||b3.nodeType===8||!b3.style){return
}var b7,b8,ca,b5=bI.camelCase(b2),b1=b3.style;
b2=bI.cssProps[b5]||(bI.cssProps[b5]=b(b1,b5));
ca=bI.cssHooks[b2]||bI.cssHooks[b5];
if(b9!==aD){b8=typeof b9;
if(b8==="string"&&(b7=U.exec(b9))){b9=(b7[1]+1)*b7[2]+parseFloat(bI.css(b3,b2));
b8="number"
}if(b9==null||b8==="number"&&isNaN(b9)){return
}if(b8==="number"&&!bI.cssNumber[b5]){b9+="px"
}if(!ca||!("set" in ca)||(b9=ca.set(b3,b9,b4))!==aD){try{b1[b2]=b9
}catch(b6){}}}else{if(ca&&"get" in ca&&(b7=ca.get(b3,false,b4))!==aD){return b7
}return b1[b2]
}},css:function(b6,b4,b5,b1){var b7,b3,e,b2=bI.camelCase(b4);
b4=bI.cssProps[b2]||(bI.cssProps[b2]=b(b6.style,b2));
e=bI.cssHooks[b4]||bI.cssHooks[b2];
if(e&&"get" in e){b7=e.get(b6,true,b1)
}if(b7===aD){b7=G(b6,b4)
}if(b7==="normal"&&b4 in bC){b7=bC[b4]
}if(b5||b1!==aD){b3=parseFloat(b7);
return b5||bI.isNumeric(b3)?b3||0:b7
}return b7
},swap:function(b4,b3,b5){var b2,b1,e={};
for(b1 in b3){e[b1]=b4.style[b1];
b4.style[b1]=b3[b1]
}b2=b5.call(b4);
for(b1 in b3){b4.style[b1]=e[b1]
}return b2
}});
if(a4.getComputedStyle){G=function(b7,b1){var e,b4,b3,b6,b5=a4.getComputedStyle(b7,null),b2=b7.style;
if(b5){e=b5[b1];
if(e===""&&!bI.contains(b7.ownerDocument,b7)){e=bI.style(b7,b1)
}if(Y.test(e)&&a1.test(b1)){b4=b2.width;
b3=b2.minWidth;
b6=b2.maxWidth;
b2.minWidth=b2.maxWidth=b2.width=e;
e=b5.width;
b2.width=b4;
b2.minWidth=b3;
b2.maxWidth=b6
}}return e
}
}else{if(p.documentElement.currentStyle){G=function(b4,b2){var b5,e,b1=b4.currentStyle&&b4.currentStyle[b2],b3=b4.style;
if(b1==null&&b3&&b3[b2]){b1=b3[b2]
}if(Y.test(b1)&&!bm.test(b2)){b5=b3.left;
e=b4.runtimeStyle&&b4.runtimeStyle.left;
if(e){b4.runtimeStyle.left=b4.currentStyle.left
}b3.left=b2==="fontSize"?"1em":b1;
b1=b3.pixelLeft+"px";
b3.left=b5;
if(e){b4.runtimeStyle.left=e
}}return b1===""?"auto":b1
}
}}function aI(e,b2,b3){var b1=ba.exec(b2);
return b1?Math.max(0,b1[1]-(b3||0))+(b1[2]||"px"):b2
}function av(b3,b1,e,b5){var b2=e===(b5?"border":"content")?4:b1==="width"?1:0,b4=0;
for(;
b2<4;
b2+=2){if(e==="margin"){b4+=bI.css(b3,e+bS[b2],true)
}if(b5){if(e==="content"){b4-=parseFloat(G(b3,"padding"+bS[b2]))||0
}if(e!=="margin"){b4-=parseFloat(G(b3,"border"+bS[b2]+"Width"))||0
}}else{b4+=parseFloat(G(b3,"padding"+bS[b2]))||0;
if(e!=="padding"){b4+=parseFloat(G(b3,"border"+bS[b2]+"Width"))||0
}}}return b4
}function w(b3,b1,e){var b4=b1==="width"?b3.offsetWidth:b3.offsetHeight,b2=true,b5=bI.support.boxSizing&&bI.css(b3,"boxSizing")==="border-box";
if(b4<=0||b4==null){b4=G(b3,b1);
if(b4<0||b4==null){b4=b3.style[b1]
}if(Y.test(b4)){return b4
}b2=b5&&(bI.support.boxSizingReliable||b4===b3.style[b1]);
b4=parseFloat(b4)||0
}return(b4+av(b3,b1,e||(b5?"border":"content"),b2))+"px"
}function bE(b2){if(bj[b2]){return bj[b2]
}var e=bI("<"+b2+">").appendTo(p.body),b1=e.css("display");
e.remove();
if(b1==="none"||b1===""){aB=p.body.appendChild(aB||bI.extend(p.createElement("iframe"),{frameBorder:0,width:0,height:0}));
if(!aY||!aB.createElement){aY=(aB.contentWindow||aB.contentDocument).document;
aY.write("<!doctype html><html><body>");
aY.close()
}e=aY.body.appendChild(aY.createElement(b2));
b1=G(e,"display");
p.body.removeChild(aB)
}bj[b2]=b1;
return b1
}bI.each(["height","width"],function(b1,e){bI.cssHooks[e]={get:function(b4,b3,b2){if(b3){if(b4.offsetWidth===0&&I.test(G(b4,"display"))){return bI.swap(b4,bb,function(){return w(b4,e,b2)
})
}else{return w(b4,e,b2)
}}},set:function(b3,b4,b2){return aI(b3,b4,b2?av(b3,e,b2,bI.support.boxSizing&&bI.css(b3,"boxSizing")==="border-box"):0)
}}
});
if(!bI.support.opacity){bI.cssHooks.opacity={get:function(b1,e){return aU.test((e&&b1.currentStyle?b1.currentStyle.filter:b1.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":e?"1":""
},set:function(b4,b5){var b3=b4.style,b1=b4.currentStyle,e=bI.isNumeric(b5)?"alpha(opacity="+b5*100+")":"",b2=b1&&b1.filter||b3.filter||"";
b3.zoom=1;
if(b5>=1&&bI.trim(b2.replace(bg,""))===""&&b3.removeAttribute){b3.removeAttribute("filter");
if(b1&&!b1.filter){return
}}b3.filter=bg.test(b2)?b2.replace(bg,e):b2+" "+e
}}
}bI(function(){if(!bI.support.reliableMarginRight){bI.cssHooks.marginRight={get:function(b1,e){return bI.swap(b1,{display:"inline-block"},function(){if(e){return G(b1,"marginRight")
}})
}}
}if(!bI.support.pixelPosition&&bI.fn.position){bI.each(["top","left"],function(e,b1){bI.cssHooks[b1]={get:function(b4,b3){if(b3){var b2=G(b4,b1);
return Y.test(b2)?bI(b4).position()[b1]+"px":b2
}}}
})
}});
if(bI.expr&&bI.expr.filters){bI.expr.filters.hidden=function(e){return(e.offsetWidth===0&&e.offsetHeight===0)||(!bI.support.reliableHiddenOffsets&&((e.style&&e.style.display)||G(e,"display"))==="none")
};
bI.expr.filters.visible=function(e){return !bI.expr.filters.hidden(e)
}
}bI.each({margin:"",padding:"",border:"Width"},function(e,b1){bI.cssHooks[e+b1]={expand:function(b4){var b3,b5=typeof b4==="string"?b4.split(" "):[b4],b2={};
for(b3=0;
b3<4;
b3++){b2[e+bS[b3]+b1]=b5[b3]||b5[b3-2]||b5[0]
}return b2
}};
if(!a1.test(e)){bI.cssHooks[e+b1].set=aI
}});
var bu=/%20/g,aR=/\[\]$/,W=/\r?\n/g,bB=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,aF=/^(?:select|textarea)/i;
bI.fn.extend({serialize:function(){return bI.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?bI.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||aF.test(this.nodeName)||bB.test(this.type))
}).map(function(e,b1){var b2=bI(this).val();
return b2==null?null:bI.isArray(b2)?bI.map(b2,function(b4,b3){return{name:b1.name,value:b4.replace(W,"\r\n")}
}):{name:b1.name,value:b2.replace(W,"\r\n")}
}).get()
}});
bI.param=function(e,b2){var b3,b1=[],b4=function(b5,b6){b6=bI.isFunction(b6)?b6():(b6==null?"":b6);
b1[b1.length]=encodeURIComponent(b5)+"="+encodeURIComponent(b6)
};
if(b2===aD){b2=bI.ajaxSettings&&bI.ajaxSettings.traditional
}if(bI.isArray(e)||(e.jquery&&!bI.isPlainObject(e))){bI.each(e,function(){b4(this.name,this.value)
})
}else{for(b3 in e){l(b3,e[b3],b2,b4)
}}return b1.join("&").replace(bu,"+")
};
function l(b2,b4,b1,b3){var e;
if(bI.isArray(b4)){bI.each(b4,function(b6,b5){if(b1||aR.test(b2)){b3(b2,b5)
}else{l(b2+"["+(typeof b5==="object"?b6:"")+"]",b5,b1,b3)
}})
}else{if(!b1&&bI.type(b4)==="object"){for(e in b4){l(b2+"["+e+"]",b4[e],b1,b3)
}}else{b3(b2,b4)
}}}var aa,bZ,ap=/#.*$/,af=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,D=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,t=/^(?:GET|HEAD)$/,aE=/^\/\//,bP=/\?/,g=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,R=/([?&])_=[^&]*/,aV=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,bY=bI.fn.load,x={},a8={},aZ=["*/"]+["*"];
try{aa=aK.href
}catch(bf){aa=p.createElement("a");
aa.href="";
aa=aa.href
}bZ=aV.exec(aa.toLowerCase())||[];
function bK(e){return function(b4,b6){if(typeof b4!=="string"){b6=b4;
b4="*"
}var b1,b7,b8,b3=b4.toLowerCase().split(aX),b2=0,b5=b3.length;
if(bI.isFunction(b6)){for(;
b2<b5;
b2++){b1=b3[b2];
b8=/^\+/.test(b1);
if(b8){b1=b1.substr(1)||"*"
}b7=e[b1]=e[b1]||[];
b7[b8?"unshift":"push"](b6)
}}}
}function r(b1,ca,b5,b8,b7,b3){b7=b7||ca.dataTypes[0];
b3=b3||{};
b3[b7]=true;
var b9,b6=b1[b7],b2=0,e=b6?b6.length:0,b4=(b1===x);
for(;
b2<e&&(b4||!b9);
b2++){b9=b6[b2](ca,b5,b8);
if(typeof b9==="string"){if(!b4||b3[b9]){b9=aD
}else{ca.dataTypes.unshift(b9);
b9=r(b1,ca,b5,b8,b9,b3)
}}}if((b4||!b9)&&!b3["*"]){b9=r(b1,ca,b5,b8,"*",b3)
}return b9
}function v(b2,b3){var b1,e,b4=bI.ajaxSettings.flatOptions||{};
for(b1 in b3){if(b3[b1]!==aD){(b4[b1]?b2:(e||(e={})))[b1]=b3[b1]
}}if(e){bI.extend(true,b2,e)
}}bI.fn.load=function(b3,b6,b7){if(typeof b3!=="string"&&bY){return bY.apply(this,arguments)
}if(!this.length){return this
}var e,b4,b2,b1=this,b5=b3.indexOf(" ");
if(b5>=0){e=b3.slice(b5,b3.length);
b3=b3.slice(0,b5)
}if(bI.isFunction(b6)){b7=b6;
b6=aD
}else{if(b6&&typeof b6==="object"){b4="POST"
}}bI.ajax({url:b3,type:b4,dataType:"html",data:b6,complete:function(b9,b8){if(b7){b1.each(b7,b2||[b9.responseText,b8,b9])
}}}).done(function(b8){b2=arguments;
b1.html(e?bI("<div>").append(b8.replace(g,"")).find(e):b8)
});
return this
};
bI.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,b1){bI.fn[b1]=function(b2){return this.on(b1,b2)
}
});
bI.each(["get","post"],function(e,b1){bI[b1]=function(b2,b4,b5,b3){if(bI.isFunction(b4)){b3=b3||b5;
b5=b4;
b4=aD
}return bI.ajax({type:b1,url:b2,data:b4,success:b5,dataType:b3})
}
});
bI.extend({getScript:function(e,b1){return bI.get(e,aD,b1,"script")
},getJSON:function(e,b1,b2){return bI.get(e,b1,b2,"json")
},ajaxSetup:function(b1,e){if(e){v(b1,bI.ajaxSettings)
}else{e=b1;
b1=bI.ajaxSettings
}v(b1,e);
return b1
},ajaxSettings:{url:aa,isLocal:D.test(bZ[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":aZ},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a4.String,"text html":true,"text json":bI.parseJSON,"text xml":bI.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:bK(x),ajaxTransport:bK(a8),ajax:function(b6,b3){if(typeof b6==="object"){b3=b6;
b6=aD
}b3=b3||{};
var b9,cn,b4,ci,cb,cf,b2,ch,ca=bI.ajaxSetup({},b3),cp=ca.context||ca,cd=cp!==ca&&(cp.nodeType||cp instanceof bI)?bI(cp):bI.event,co=bI.Deferred(),ck=bI.Callbacks("once memory"),b7=ca.statusCode||{},ce={},cl={},b5=0,b8="canceled",cg={readyState:0,setRequestHeader:function(cq,cr){if(!b5){var e=cq.toLowerCase();
cq=cl[e]=cl[e]||cq;
ce[cq]=cr
}return this
},getAllResponseHeaders:function(){return b5===2?cn:null
},getResponseHeader:function(cq){var e;
if(b5===2){if(!b4){b4={};
while((e=af.exec(cn))){b4[e[1].toLowerCase()]=e[2]
}}e=b4[cq.toLowerCase()]
}return e===aD?null:e
},overrideMimeType:function(e){if(!b5){ca.mimeType=e
}return this
},abort:function(e){e=e||b8;
if(ci){ci.abort(e)
}cc(0,e);
return this
}};
function cc(cu,cq,cv,cs){var e,cy,cw,ct,cx,cr=cq;
if(b5===2){return
}b5=2;
if(cb){clearTimeout(cb)
}ci=aD;
cn=cs||"";
cg.readyState=cu>0?4:0;
if(cv){ct=h(ca,cg,cv)
}if(cu>=200&&cu<300||cu===304){if(ca.ifModified){cx=cg.getResponseHeader("Last-Modified");
if(cx){bI.lastModified[b9]=cx
}cx=cg.getResponseHeader("Etag");
if(cx){bI.etag[b9]=cx
}}if(cu===304){cr="notmodified";
e=true
}else{e=ag(ca,ct);
cr=e.state;
cy=e.data;
cw=e.error;
e=!cw
}}else{cw=cr;
if(!cr||cu){cr="error";
if(cu<0){cu=0
}}}cg.status=cu;
cg.statusText=""+(cq||cr);
if(e){co.resolveWith(cp,[cy,cr,cg])
}else{co.rejectWith(cp,[cg,cr,cw])
}cg.statusCode(b7);
b7=aD;
if(b2){cd.trigger("ajax"+(e?"Success":"Error"),[cg,ca,e?cy:cw])
}ck.fireWith(cp,[cg,cr]);
if(b2){cd.trigger("ajaxComplete",[cg,ca]);
if(!(--bI.active)){bI.event.trigger("ajaxStop")
}}}co.promise(cg);
cg.success=cg.done;
cg.error=cg.fail;
cg.complete=ck.add;
cg.statusCode=function(cq){if(cq){var e;
if(b5<2){for(e in cq){b7[e]=[b7[e],cq[e]]
}}else{e=cq[cg.status];
cg.always(e)
}}return this
};
ca.url=((b6||ca.url)+"").replace(ap,"").replace(aE,bZ[1]+"//");
ca.dataTypes=bI.trim(ca.dataType||"*").toLowerCase().split(aX);
if(ca.crossDomain==null){cf=aV.exec(ca.url.toLowerCase());
ca.crossDomain=!!(cf&&(cf[1]!=bZ[1]||cf[2]!=bZ[2]||(cf[3]||(cf[1]==="http:"?80:443))!=(bZ[3]||(bZ[1]==="http:"?80:443))))
}if(ca.data&&ca.processData&&typeof ca.data!=="string"){ca.data=bI.param(ca.data,ca.traditional)
}r(x,ca,b3,cg);
if(b5===2){return cg
}b2=ca.global;
ca.type=ca.type.toUpperCase();
ca.hasContent=!t.test(ca.type);
if(b2&&bI.active++===0){bI.event.trigger("ajaxStart")
}if(!ca.hasContent){if(ca.data){ca.url+=(bP.test(ca.url)?"&":"?")+ca.data;
delete ca.data
}b9=ca.url;
if(ca.cache===false){var b1=bI.now(),cm=ca.url.replace(R,"$1_="+b1);
ca.url=cm+((cm===ca.url)?(bP.test(ca.url)?"&":"?")+"_="+b1:"")
}}if(ca.data&&ca.hasContent&&ca.contentType!==false||b3.contentType){cg.setRequestHeader("Content-Type",ca.contentType)
}if(ca.ifModified){b9=b9||ca.url;
if(bI.lastModified[b9]){cg.setRequestHeader("If-Modified-Since",bI.lastModified[b9])
}if(bI.etag[b9]){cg.setRequestHeader("If-None-Match",bI.etag[b9])
}}cg.setRequestHeader("Accept",ca.dataTypes[0]&&ca.accepts[ca.dataTypes[0]]?ca.accepts[ca.dataTypes[0]]+(ca.dataTypes[0]!=="*"?", "+aZ+"; q=0.01":""):ca.accepts["*"]);
for(ch in ca.headers){cg.setRequestHeader(ch,ca.headers[ch])
}if(ca.beforeSend&&(ca.beforeSend.call(cp,cg,ca)===false||b5===2)){return cg.abort()
}b8="abort";
for(ch in {success:1,error:1,complete:1}){cg[ch](ca[ch])
}ci=r(a8,ca,b3,cg);
if(!ci){cc(-1,"No Transport")
}else{cg.readyState=1;
if(b2){cd.trigger("ajaxSend",[cg,ca])
}if(ca.async&&ca.timeout>0){cb=setTimeout(function(){cg.abort("timeout")
},ca.timeout)
}try{b5=1;
ci.send(ce,cc)
}catch(cj){if(b5<2){cc(-1,cj)
}else{throw cj
}}}return cg
},active:0,lastModified:{},etag:{}});
function h(b9,b8,b5){var b4,b6,b3,e,b1=b9.contents,b7=b9.dataTypes,b2=b9.responseFields;
for(b6 in b2){if(b6 in b5){b8[b2[b6]]=b5[b6]
}}while(b7[0]==="*"){b7.shift();
if(b4===aD){b4=b9.mimeType||b8.getResponseHeader("content-type")
}}if(b4){for(b6 in b1){if(b1[b6]&&b1[b6].test(b4)){b7.unshift(b6);
break
}}}if(b7[0] in b5){b3=b7[0]
}else{for(b6 in b5){if(!b7[0]||b9.converters[b6+" "+b7[0]]){b3=b6;
break
}if(!e){e=b6
}}b3=b3||e
}if(b3){if(b3!==b7[0]){b7.unshift(b3)
}return b5[b3]
}}function ag(cb,b3){var b9,b1,b7,b5,b8=cb.dataTypes.slice(),b2=b8[0],ca={},b4=0;
if(cb.dataFilter){b3=cb.dataFilter(b3,cb.dataType)
}if(b8[1]){for(b9 in cb.converters){ca[b9.toLowerCase()]=cb.converters[b9]
}}for(;
(b7=b8[++b4]);
){if(b7!=="*"){if(b2!=="*"&&b2!==b7){b9=ca[b2+" "+b7]||ca["* "+b7];
if(!b9){for(b1 in ca){b5=b1.split(" ");
if(b5[1]===b7){b9=ca[b2+" "+b5[0]]||ca["* "+b5[0]];
if(b9){if(b9===true){b9=ca[b1]
}else{if(ca[b1]!==true){b7=b5[0];
b8.splice(b4--,0,b7)
}}break
}}}}if(b9!==true){if(b9&&cb["throws"]){b3=b9(b3)
}else{try{b3=b9(b3)
}catch(b6){return{state:"parsererror",error:b9?b6:"No conversion from "+b2+" to "+b7}
}}}}b2=b7
}}return{state:"success",data:b3}
}var br=[],ay=/\?/,a7=/(=)\?(?=&|$)|\?\?/,bn=bI.now();
bI.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=br.pop()||(bI.expando+"_"+(bn++));
this[e]=true;
return e
}});
bI.ajaxPrefilter("json jsonp",function(ca,b5,b9){var b8,e,b7,b3=ca.data,b1=ca.url,b2=ca.jsonp!==false,b6=b2&&a7.test(b1),b4=b2&&!b6&&typeof b3==="string"&&!(ca.contentType||"").indexOf("application/x-www-form-urlencoded")&&a7.test(b3);
if(ca.dataTypes[0]==="jsonp"||b6||b4){b8=ca.jsonpCallback=bI.isFunction(ca.jsonpCallback)?ca.jsonpCallback():ca.jsonpCallback;
e=a4[b8];
if(b6){ca.url=b1.replace(a7,"$1"+b8)
}else{if(b4){ca.data=b3.replace(a7,"$1"+b8)
}else{if(b2){ca.url+=(ay.test(b1)?"&":"?")+ca.jsonp+"="+b8
}}}ca.converters["script json"]=function(){if(!b7){bI.error(b8+" was not called")
}return b7[0]
};
ca.dataTypes[0]="json";
a4[b8]=function(){b7=arguments
};
b9.always(function(){a4[b8]=e;
if(ca[b8]){ca.jsonpCallback=b5.jsonpCallback;
br.push(b8)
}if(b7&&bI.isFunction(e)){e(b7[0])
}b7=e=aD
});
return"script"
}});
bI.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){bI.globalEval(e);
return e
}}});
bI.ajaxPrefilter("script",function(e){if(e.cache===aD){e.cache=false
}if(e.crossDomain){e.type="GET";
e.global=false
}});
bI.ajaxTransport("script",function(b2){if(b2.crossDomain){var e,b1=p.head||p.getElementsByTagName("head")[0]||p.documentElement;
return{send:function(b3,b4){e=p.createElement("script");
e.async="async";
if(b2.scriptCharset){e.charset=b2.scriptCharset
}e.src=b2.url;
e.onload=e.onreadystatechange=function(b6,b5){if(b5||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;
if(b1&&e.parentNode){b1.removeChild(e)
}e=aD;
if(!b5){b4(200,"success")
}}};
b1.insertBefore(e,b1.firstChild)
},abort:function(){if(e){e.onload(0,1)
}}}
}});
var aj,aP=a4.ActiveXObject?function(){for(var e in aj){aj[e](0,1)
}}:false,aw=0;
function bD(){try{return new a4.XMLHttpRequest()
}catch(b1){}}function bd(){try{return new a4.ActiveXObject("Microsoft.XMLHTTP")
}catch(b1){}}bI.ajaxSettings.xhr=a4.ActiveXObject?function(){return !this.isLocal&&bD()||bd()
}:bD;
(function(e){bI.extend(bI.support,{ajax:!!e,cors:!!e&&("withCredentials" in e)})
})(bI.ajaxSettings.xhr());
if(bI.support.ajax){bI.ajaxTransport(function(e){if(!e.crossDomain||bI.support.cors){var b1;
return{send:function(b7,b2){var b5,b4,b6=e.xhr();
if(e.username){b6.open(e.type,e.url,e.async,e.username,e.password)
}else{b6.open(e.type,e.url,e.async)
}if(e.xhrFields){for(b4 in e.xhrFields){b6[b4]=e.xhrFields[b4]
}}if(e.mimeType&&b6.overrideMimeType){b6.overrideMimeType(e.mimeType)
}if(!e.crossDomain&&!b7["X-Requested-With"]){b7["X-Requested-With"]="XMLHttpRequest"
}try{for(b4 in b7){b6.setRequestHeader(b4,b7[b4])
}}catch(b3){}b6.send((e.hasContent&&e.data)||null);
b1=function(cg,ca){var cb,b9,b8,ce,cd;
try{if(b1&&(ca||b6.readyState===4)){b1=aD;
if(b5){b6.onreadystatechange=bI.noop;
if(aP){delete aj[b5]
}}if(ca){if(b6.readyState!==4){b6.abort()
}}else{cb=b6.status;
b8=b6.getAllResponseHeaders();
ce={};
cd=b6.responseXML;
if(cd&&cd.documentElement){ce.xml=cd
}try{ce.text=b6.responseText
}catch(cg){}try{b9=b6.statusText
}catch(cf){b9=""
}if(!cb&&e.isLocal&&!e.crossDomain){cb=ce.text?200:404
}else{if(cb===1223){cb=204
}}}}}catch(cc){if(!ca){b2(-1,cc)
}}if(ce){b2(cb,b9,ce,b8)
}};
if(!e.async){b1()
}else{if(b6.readyState===4){setTimeout(b1,0)
}else{b5=++aw;
if(aP){if(!aj){aj={};
bI(a4).unload(aP)
}aj[b5]=b1
}b6.onreadystatechange=b1
}}},abort:function(){if(b1){b1(0,1)
}}}
}})
}var N,ad,bQ=/^(?:toggle|show|hide)$/,bJ=new RegExp("^(?:([-+])=|)("+bz+")([a-z%]*)$","i"),bO=/queueHooks$/,az=[j],a3={"*":[function(b1,b7){var b4,b8,e,b9=this.createTween(b1,b7),b5=bJ.exec(b7),b6=b9.cur(),b2=+b6||0,b3=1;
if(b5){b4=+b5[2];
b8=b5[3]||(bI.cssNumber[b1]?"":"px");
if(b8!=="px"&&b2){b2=bI.css(b9.elem,b1,true)||b4||1;
do{e=b3=b3||".5";
b2=b2/b3;
bI.style(b9.elem,b1,b2+b8);
b3=b9.cur()/b6
}while(b3!==1&&b3!==e)
}b9.unit=b8;
b9.start=b2;
b9.end=b5[1]?b2+(b5[1]+1)*b4:b4
}return b9
}]};
function bl(){setTimeout(function(){N=aD
},0);
return(N=bI.now())
}function be(b1,e){bI.each(e,function(b6,b4){var b5=(a3[b6]||[]).concat(a3["*"]),b2=0,b3=b5.length;
for(;
b2<b3;
b2++){if(b5[b2].call(b1,b6,b4)){return
}}})
}function f(b2,b6,b9){var ca,b5=0,e=0,b1=az.length,b8=bI.Deferred().always(function(){delete b4.elem
}),b4=function(){var cf=N||bl(),cc=Math.max(0,b3.startTime+b3.duration-cf),ce=1-(cc/b3.duration||0),cb=0,cd=b3.tweens.length;
for(;
cb<cd;
cb++){b3.tweens[cb].run(ce)
}b8.notifyWith(b2,[b3,ce,cc]);
if(ce<1&&cd){return cc
}else{b8.resolveWith(b2,[b3]);
return false
}},b3=b8.promise({elem:b2,props:bI.extend({},b6),opts:bI.extend(true,{specialEasing:{}},b9),originalProperties:b6,originalOptions:b9,startTime:N||bl(),duration:b9.duration,tweens:[],createTween:function(ce,cb,cd){var cc=bI.Tween(b2,b3.opts,ce,cb,b3.opts.specialEasing[ce]||b3.opts.easing);
b3.tweens.push(cc);
return cc
},stop:function(cc){var cb=0,cd=cc?b3.tweens.length:0;
for(;
cb<cd;
cb++){b3.tweens[cb].run(1)
}if(cc){b8.resolveWith(b2,[b3,cc])
}else{b8.rejectWith(b2,[b3,cc])
}return this
}}),b7=b3.props;
am(b7,b3.opts.specialEasing);
for(;
b5<b1;
b5++){ca=az[b5].call(b3,b2,b7,b3.opts);
if(ca){return ca
}}be(b3,b7);
if(bI.isFunction(b3.opts.start)){b3.opts.start.call(b2,b3)
}bI.fx.timer(bI.extend(b4,{anim:b3,queue:b3.opts.queue,elem:b2}));
return b3.progress(b3.opts.progress).done(b3.opts.done,b3.opts.complete).fail(b3.opts.fail).always(b3.opts.always)
}function am(b3,b5){var b2,b1,b6,b4,e;
for(b2 in b3){b1=bI.camelCase(b2);
b6=b5[b1];
b4=b3[b2];
if(bI.isArray(b4)){b6=b4[1];
b4=b3[b2]=b4[0]
}if(b2!==b1){b3[b1]=b4;
delete b3[b2]
}e=bI.cssHooks[b1];
if(e&&"expand" in e){b4=e.expand(b4);
delete b3[b1];
for(b2 in b4){if(!(b2 in b3)){b3[b2]=b4[b2];
b5[b2]=b6
}}}else{b5[b1]=b6
}}}bI.Animation=bI.extend(f,{tweener:function(b1,b4){if(bI.isFunction(b1)){b4=b1;
b1=["*"]
}else{b1=b1.split(" ")
}var b3,e=0,b2=b1.length;
for(;
e<b2;
e++){b3=b1[e];
a3[b3]=a3[b3]||[];
a3[b3].unshift(b4)
}},prefilter:function(b1,e){if(e){az.unshift(b1)
}else{az.push(b1)
}}});
function j(b4,b9,e){var b8,b2,cb,b3,cf,ce,cd,cc,b5=this,b1=b4.style,ca={},b7=[],b6=b4.nodeType&&S(b4);
if(!e.queue){cd=bI._queueHooks(b4,"fx");
if(cd.unqueued==null){cd.unqueued=0;
cc=cd.empty.fire;
cd.empty.fire=function(){if(!cd.unqueued){cc()
}}
}cd.unqueued++;
b5.always(function(){b5.always(function(){cd.unqueued--;
if(!bI.queue(b4,"fx").length){cd.empty.fire()
}})
})
}if(b4.nodeType===1&&("height" in b9||"width" in b9)){e.overflow=[b1.overflow,b1.overflowX,b1.overflowY];
if(bI.css(b4,"display")==="inline"&&bI.css(b4,"float")==="none"){if(!bI.support.inlineBlockNeedsLayout||bE(b4.nodeName)==="inline"){b1.display="inline-block"
}else{b1.zoom=1
}}}if(e.overflow){b1.overflow="hidden";
if(!bI.support.shrinkWrapBlocks){b5.done(function(){b1.overflow=e.overflow[0];
b1.overflowX=e.overflow[1];
b1.overflowY=e.overflow[2]
})
}}for(b8 in b9){cb=b9[b8];
if(bQ.exec(cb)){delete b9[b8];
if(cb===(b6?"hide":"show")){continue
}b7.push(b8)
}}b3=b7.length;
if(b3){cf=bI._data(b4,"fxshow")||bI._data(b4,"fxshow",{});
if(b6){bI(b4).show()
}else{b5.done(function(){bI(b4).hide()
})
}b5.done(function(){var cg;
bI.removeData(b4,"fxshow",true);
for(cg in ca){bI.style(b4,cg,ca[cg])
}});
for(b8=0;
b8<b3;
b8++){b2=b7[b8];
ce=b5.createTween(b2,b6?cf[b2]:0);
ca[b2]=cf[b2]||bI.style(b4,b2);
if(!(b2 in cf)){cf[b2]=ce.start;
if(b6){ce.end=ce.start;
ce.start=b2==="width"||b2==="height"?1:0
}}}}}function J(b2,b1,b4,e,b3){return new J.prototype.init(b2,b1,b4,e,b3)
}bI.Tween=J;
J.prototype={constructor:J,init:function(b3,b1,b5,e,b4,b2){this.elem=b3;
this.prop=b5;
this.easing=b4||"swing";
this.options=b1;
this.start=this.now=this.cur();
this.end=e;
this.unit=b2||(bI.cssNumber[b5]?"":"px")
},cur:function(){var e=J.propHooks[this.prop];
return e&&e.get?e.get(this):J.propHooks._default.get(this)
},run:function(b2){var b1,e=J.propHooks[this.prop];
if(this.options.duration){this.pos=b1=bI.easing[this.easing](b2,this.options.duration*b2,0,1,this.options.duration)
}else{this.pos=b1=b2
}this.now=(this.end-this.start)*b1+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(e&&e.set){e.set(this)
}else{J.propHooks._default.set(this)
}return this
}};
J.prototype.init.prototype=J.prototype;
J.propHooks={_default:{get:function(b1){var e;
if(b1.elem[b1.prop]!=null&&(!b1.elem.style||b1.elem.style[b1.prop]==null)){return b1.elem[b1.prop]
}e=bI.css(b1.elem,b1.prop,false,"");
return !e||e==="auto"?0:e
},set:function(e){if(bI.fx.step[e.prop]){bI.fx.step[e.prop](e)
}else{if(e.elem.style&&(e.elem.style[bI.cssProps[e.prop]]!=null||bI.cssHooks[e.prop])){bI.style(e.elem,e.prop,e.now+e.unit)
}else{e.elem[e.prop]=e.now
}}}}};
J.propHooks.scrollTop=J.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now
}}};
bI.each(["toggle","show","hide"],function(b1,e){var b2=bI.fn[e];
bI.fn[e]=function(b3,b5,b4){return b3==null||typeof b3==="boolean"||(!b1&&bI.isFunction(b3)&&bI.isFunction(b5))?b2.apply(this,arguments):this.animate(bH(e,true),b3,b5,b4)
}
});
bI.fn.extend({fadeTo:function(e,b3,b2,b1){return this.filter(S).css("opacity",0).show().end().animate({opacity:b3},e,b2,b1)
},animate:function(b6,b3,b5,b4){var b2=bI.isEmptyObject(b6),e=bI.speed(b3,b5,b4),b1=function(){var b7=f(this,bI.extend({},b6),e);
if(b2){b7.stop(true)
}};
return b2||e.queue===false?this.each(b1):this.queue(e.queue,b1)
},stop:function(b2,b1,e){var b3=function(b4){var b5=b4.stop;
delete b4.stop;
b5(e)
};
if(typeof b2!=="string"){e=b1;
b1=b2;
b2=aD
}if(b1&&b2!==false){this.queue(b2||"fx",[])
}return this.each(function(){var b7=true,b4=b2!=null&&b2+"queueHooks",b6=bI.timers,b5=bI._data(this);
if(b4){if(b5[b4]&&b5[b4].stop){b3(b5[b4])
}}else{for(b4 in b5){if(b5[b4]&&b5[b4].stop&&bO.test(b4)){b3(b5[b4])
}}}for(b4=b6.length;
b4--;
){if(b6[b4].elem===this&&(b2==null||b6[b4].queue===b2)){b6[b4].anim.stop(e);
b7=false;
b6.splice(b4,1)
}}if(b7||!e){bI.dequeue(this,b2)
}})
}});
function bH(b2,b4){var b3,e={height:b2},b1=0;
b4=b4?1:0;
for(;
b1<4;
b1+=2-b4){b3=bS[b1];
e["margin"+b3]=e["padding"+b3]=b2
}if(b4){e.opacity=e.width=b2
}return e
}bI.each({slideDown:bH("show"),slideUp:bH("hide"),slideToggle:bH("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,b1){bI.fn[e]=function(b2,b4,b3){return this.animate(b1,b2,b4,b3)
}
});
bI.speed=function(b2,b3,b1){var e=b2&&typeof b2==="object"?bI.extend({},b2):{complete:b1||!b1&&b3||bI.isFunction(b2)&&b2,duration:b2,easing:b1&&b3||b3&&!bI.isFunction(b3)&&b3};
e.duration=bI.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in bI.fx.speeds?bI.fx.speeds[e.duration]:bI.fx.speeds._default;
if(e.queue==null||e.queue===true){e.queue="fx"
}e.old=e.complete;
e.complete=function(){if(bI.isFunction(e.old)){e.old.call(this)
}if(e.queue){bI.dequeue(this,e.queue)
}};
return e
};
bI.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}};
bI.timers=[];
bI.fx=J.prototype.init;
bI.fx.tick=function(){var b2,b1=bI.timers,e=0;
for(;
e<b1.length;
e++){b2=b1[e];
if(!b2()&&b1[e]===b2){b1.splice(e--,1)
}}if(!b1.length){bI.fx.stop()
}};
bI.fx.timer=function(e){if(e()&&bI.timers.push(e)&&!ad){ad=setInterval(bI.fx.tick,bI.fx.interval)
}};
bI.fx.interval=13;
bI.fx.stop=function(){clearInterval(ad);
ad=null
};
bI.fx.speeds={slow:600,fast:200,_default:400};
bI.fx.step={};
if(bI.expr&&bI.expr.filters){bI.expr.filters.animated=function(e){return bI.grep(bI.timers,function(b1){return e===b1.elem
}).length
}
}var bo=/^(?:body|html)$/i;
bI.fn.offset=function(cc){if(arguments.length){return cc===aD?this:this.each(function(cd){bI.offset.setOffset(this,cc,cd)
})
}var b6,b1,b7,b8,b5,b9,e,b4,ca,b3,b2=this[0],cb=b2&&b2.ownerDocument;
if(!cb){return
}if((b7=cb.body)===b2){return bI.offset.bodyOffset(b2)
}b1=cb.documentElement;
if(!bI.contains(b1,b2)){return{top:0,left:0}
}b6=b2.getBoundingClientRect();
b8=bp(cb);
b5=b1.clientTop||b7.clientTop||0;
b9=b1.clientLeft||b7.clientLeft||0;
e=b8.pageYOffset||b1.scrollTop;
b4=b8.pageXOffset||b1.scrollLeft;
ca=b6.top+e-b5;
b3=b6.left+b4-b9;
return{top:ca,left:b3}
};
bI.offset={bodyOffset:function(e){var b2=e.offsetTop,b1=e.offsetLeft;
if(bI.support.doesNotIncludeMarginInBodyOffset){b2+=parseFloat(bI.css(e,"marginTop"))||0;
b1+=parseFloat(bI.css(e,"marginLeft"))||0
}return{top:b2,left:b1}
},setOffset:function(b3,cc,b6){var b7=bI.css(b3,"position");
if(b7==="static"){b3.style.position="relative"
}var b5=bI(b3),b1=b5.offset(),e=bI.css(b3,"top"),ca=bI.css(b3,"left"),cb=(b7==="absolute"||b7==="fixed")&&bI.inArray("auto",[e,ca])>-1,b9={},b8={},b2,b4;
if(cb){b8=b5.position();
b2=b8.top;
b4=b8.left
}else{b2=parseFloat(e)||0;
b4=parseFloat(ca)||0
}if(bI.isFunction(cc)){cc=cc.call(b3,b6,b1)
}if(cc.top!=null){b9.top=(cc.top-b1.top)+b2
}if(cc.left!=null){b9.left=(cc.left-b1.left)+b4
}if("using" in cc){cc.using.call(b3,b9)
}else{b5.css(b9)
}}};
bI.fn.extend({position:function(){if(!this[0]){return
}var b2=this[0],b1=this.offsetParent(),b3=this.offset(),e=bo.test(b1[0].nodeName)?{top:0,left:0}:b1.offset();
b3.top-=parseFloat(bI.css(b2,"marginTop"))||0;
b3.left-=parseFloat(bI.css(b2,"marginLeft"))||0;
e.top+=parseFloat(bI.css(b1[0],"borderTopWidth"))||0;
e.left+=parseFloat(bI.css(b1[0],"borderLeftWidth"))||0;
return{top:b3.top-e.top,left:b3.left-e.left}
},offsetParent:function(){return this.map(function(){var e=this.offsetParent||p.body;
while(e&&(!bo.test(e.nodeName)&&bI.css(e,"position")==="static")){e=e.offsetParent
}return e||p.body
})
}});
bI.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b2,b1){var e=/Y/.test(b1);
bI.fn[b2]=function(b3){return bI.access(this,function(b4,b7,b6){var b5=bp(b4);
if(b6===aD){return b5?(b1 in b5)?b5[b1]:b5.document.documentElement[b7]:b4[b7]
}if(b5){b5.scrollTo(!e?b6:bI(b5).scrollLeft(),e?b6:bI(b5).scrollTop())
}else{b4[b7]=b6
}},b2,b3,arguments.length,null)
}
});
function bp(e){return bI.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false
}bI.each({Height:"height",Width:"width"},function(e,b1){bI.each({padding:"inner"+e,content:b1,"":"outer"+e},function(b2,b3){bI.fn[b3]=function(b7,b6){var b5=arguments.length&&(b2||typeof b7!=="boolean"),b4=b2||(b7===true||b6===true?"margin":"border");
return bI.access(this,function(b9,b8,ca){var cb;
if(bI.isWindow(b9)){return b9.document.documentElement["client"+e]
}if(b9.nodeType===9){cb=b9.documentElement;
return Math.max(b9.body["scroll"+e],cb["scroll"+e],b9.body["offset"+e],cb["offset"+e],cb["client"+e])
}return ca===aD?bI.css(b9,b8,ca,b4):bI.style(b9,b8,ca,b4)
},b1,b5?b7:aD,b5,null)
}
})
});
a4.jQuery=a4.$=bI;
if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return bI
})
}})(window);
window.Granite=window.Granite||{};
Granite.Sling={SELECTOR_INFINITY:".infinity",CHARSET:"_charset_",STATUS:":status",STATUS_BROWSER:"browser",OPERATION:":operation",OPERATION_DELETE:"delete",OPERATION_MOVE:"move",DELETE_SUFFIX:"@Delete",TYPEHINT_SUFFIX:"@TypeHint",COPY_SUFFIX:"@CopyFrom",MOVE_SUFFIX:"@MoveFrom",ORDER:":order",REPLACE:":replace",DESTINATION:":dest",SAVE_PARAM_PREFIX:":saveParamPrefix",IGNORE_PARAM:":ignore",REQUEST_LOGIN_PARAM:"sling:authRequestLogin",LOGIN_URL:"/system/sling/login.html",LOGOUT_URL:"/system/sling/logout.html"};
(function(a,b){a.Util=new function(){return{patchText:function(e,d){if(d){if(!b.isArray(d)){e=e.replace("{0}",d)
}else{for(var c=0;
c<d.length;
c++){e=e.replace(("{"+c+"}"),d[c])
}}}return e
},getTopWindow:function(){var d=window;
if(this.iFrameTopWindow){return this.iFrameTopWindow
}try{while(d.parent&&d!==d.parent&&d.parent.location.href){d=d.parent
}}catch(c){}return d
},setIFrameMode:function(c){this.iFrameTopWindow=c||window
}}
}
}(Granite,jQuery));
(function(Granite,util,sling,$){Granite.HTTP=(function(){var contextPath=null,SCRIPT_URL_REGEXP=/^(?:http|https):\/\/[^\/]+(\/[^\/]+)\/(?:etc|libs|apps)\/.*\.js(\?.*)?$/,ENCODE_PATH_REGEXP=/[^1\w-\.!~\*'\(\)\/%;:@&=\$,]/,loginRedirected=false,self={};
self.getSchemeAndAuthority=function(url){var end;
try{if(url.indexOf("://")==-1){return""
}end=url.indexOf("/",url.indexOf("://")+3);
return(end==-1)?url:url.substring(0,end)
}catch(e){return""
}};
self.getContextPath=function(){return contextPath
};
self.detectContextPath=function(){try{if(window.CQURLInfo){contextPath=CQURLInfo.contextPath||""
}else{var scripts=document.getElementsByTagName("script");
for(var i=0;
i<scripts.length;
i++){var result=SCRIPT_URL_REGEXP.exec(scripts[i].src);
if(result){contextPath=result[1];
return
}}contextPath=""
}}catch(e){}};
self.externalize=function(url){try{if(url.indexOf("/")==0&&contextPath&&url.indexOf(contextPath+"/")!=0){url=contextPath+url
}}catch(e){}return url
};
self.internalize=function(url,doc){if(url.charAt(0)=="/"){if(contextPath){return url.substring(contextPath.length)
}else{return url
}}if(!doc){doc=document
}var docHost=self.getSchemeAndAuthority(doc.location.href);
var urlHost=self.getSchemeAndAuthority(url);
if(docHost==urlHost){return url.substring(urlHost.length+(contextPath?contextPath.length:0))
}else{return url
}};
self.getPath=function(url){if(!url){if(window.CQURLInfo&&CQURLInfo.requestPath){return CQURLInfo.requestPath
}else{url=window.location.pathname
}}else{url=self.removeParameters(url);
url=self.removeAnchor(url)
}url=self.internalize(url);
var i=url.indexOf(".",url.lastIndexOf("/"));
if(i!=-1){url=url.substring(0,i)
}return url
};
self.removeAnchor=function(url){if(url.indexOf("#")!=-1){return url.substring(0,url.indexOf("#"))
}return url
};
self.removeParameters=function(url){if(url.indexOf("?")!=-1){return url.substring(0,url.indexOf("?"))
}return url
};
self.encodePathOfURI=function(url){var parts,delim;
if(url.indexOf("?")!=-1){parts=url.split("?");
delim="?"
}else{if(url.indexOf("#")!=-1){parts=url.split("#");
delim="#"
}else{parts=[url]
}}if(ENCODE_PATH_REGEXP.test(parts[0])){parts[0]=self.encodePath(parts[0])
}return parts.join(delim)
};
self.encodePath=function(path){path=encodeURI(path).replace(/%5B/g,"[").replace(/%5D/g,"]");
path=path.replace(/\+/g,"%2B");
path=path.replace(/\?/g,"%3F");
path=path.replace(/;/g,"%3B");
path=path.replace(/#/g,"%23");
path=path.replace(/=/g,"%3D");
path=path.replace(/\$/g,"%24");
path=path.replace(/,/g,"%2C");
path=path.replace(/'/g,"%27");
path=path.replace(/"/g,"%22");
return path
};
self.handleLoginRedirect=function(){if(!loginRedirected){loginRedirected=true;
alert(Granite.I18n.get("Your request could not be completed because you have been signed out."));
var l=util.getTopWindow().document.location;
l.href=self.externalize(sling.LOGIN_URL)+"?resource="+l.pathname+encodeURIComponent(l.search)+l.hash
}};
self.getXhrHook=function(url,method,params){method=method||"GET";
if(window.G_XHR_HOOK&&$.isFunction(G_XHR_HOOK)){var p={url:url,method:method};
if(params){p.params=params
}return G_XHR_HOOK(p)
}return null
};
self.eval=function(response){if(typeof response!="object"){response=$.ajax({url:response,type:"get",async:false})
}try{return eval("("+(response.body?response.body:response.responseText)+")")
}catch(e){}return null
};
return self
}())
}(Granite,Granite.Util,Granite.Sling,jQuery));
(function(Granite,util,http,$){Granite.I18n=(function(){var dicts={},initialized=false,urlPrefix="/libs/cq/i18n/dict.",urlSuffix=".json",currentLocale="en",pseudoTranslations=false,languages=null,self={};
self.LOCALE_DEFAULT="en";
self.PSEUDO_LANGUAGE="zz";
self.PSEUDO_PATTERN_KEY="_pseudoPattern_";
self.init=function(config){if(!config){config=new Object()
}if(config.locale){this.setLocale(config.locale)
}urlPrefix=config.urlPrefix||urlPrefix;
urlSuffix=config.urlSuffix||urlSuffix;
initialized=true
};
self.setLocale=function(locale){currentLocale=locale
};
self.getLocale=function(){if(currentLocale&&$.isFunction(currentLocale)){currentLocale=currentLocale()
}return currentLocale
};
self.setUrlPrefix=function(prefix){urlPrefix=prefix
};
self.setUrlSuffix=function(suffix){urlSuffix=suffix
};
self.getDictionary=function(locale){locale=locale||self.getLocale()||Granite.I18n.LOCALE_DEFAULT;
if(!dicts[locale]){pseudoTranslations=(locale.indexOf(self.PSEUDO_LANGUAGE)==0);
var url=urlPrefix+locale+urlSuffix;
try{var response=$.ajax(url,{async:false,dataType:"json"});
dicts[locale]=$.parseJSON(response.responseText)
}catch(e){}if(!dicts[locale]){dicts[locale]={}
}}return dicts[locale]
};
self.get=function(text,snippets,note){var dict,newText,lookupText;
if(initialized){dict=self.getDictionary()
}lookupText=pseudoTranslations?self.PSEUDO_PATTERN_KEY:note?text+" (("+note+"))":text;
if(dict){newText=dict[lookupText]
}if(!newText){newText=text
}if(pseudoTranslations){newText=newText.replace("{string}",text).replace("{comment}",note?note:"")
}return util.patchText(newText,snippets)
};
self.getVar=function(text,note){if(!text){return null
}return self.get(text,null,note)
};
self.getLanguages=function(){if(!languages){try{var json=http.eval("/libs/wcm/core/resources/languages.overlay.infinity.json");
$.each(json,function(name,lang){lang.title=self.getVar(lang.language);
if(lang.title&&lang.country&&lang.country!="*"){lang.title+=" ("+self.getVar(lang.country)+")"
}});
languages=json
}catch(e){languages={}
}}return languages
};
self.parseLocale=function(langCode){if(!langCode){return null
}var pos=langCode.indexOf("_");
if(pos<0){pos=langCode.indexOf("-")
}var language,country;
if(pos<0){language=langCode;
country=null
}else{language=langCode.substring(0,pos);
country=langCode.substring(pos+1)
}return{code:langCode,language:language,country:country}
};
return self
}())
}(Granite,Granite.Util,Granite.HTTP,jQuery));
(function(b,c){var a=function(){var e={visibility:"hidden",position:"absolute",width:"30px",height:"30px","-webkit-border-radius":"20px","border-radius":"20px",border:"5px solid orange","-webkit-user-select":"none","user-select":"none",opacity:"0.5","z-index":"2000","pointer-events":"none"};
var f={};
var d=[];
return{debugWithMouse:false,init:function(){var g=this;
c(document).on("touchstart.touchindicator touchmove.touchindicator touchend.touchindicator",function(j){var h=j.originalEvent.touches;
g.update(h);
return true
});
if(this.debugWithMouse){c(document).on("mousemove.touchindicator",function(h){h.identifer="fake";
g.update([h]);
return true
})
}},update:function(k){var h={};
for(var j=0;
j<k.length;
j++){var m=k[j];
var l=m.identifier;
var g=f[l];
if(!g){g=d.pop();
if(!g){g=c("<div></div>").css(e);
c("body").append(g)
}}h[l]=g;
g.offset({left:m.pageX-20,top:m.pageY-20});
g.css("visibility","visible")
}for(l in f){if(f.hasOwnProperty(l)&&!h[l]){g=f[l];
g.css("visibility","hidden");
d.push(g)
}}f=h
}}
};
b.TouchIndicator=new a()
}(Granite,jQuery));
(function(c,a,b,d){c.OptOutUtil=(function(){var e={};
var f=[];
var g=[];
e.init=function(h){if(h){f=h.cookieNames?h.cookieNames:f;
g=h.whitelistCookieNames?h.whitelistCookieNames:g
}};
e.getCookieNames=function(){return f
};
e.getWhitelistCookieNames=function(){return g
};
e.isOptedOut=function(){var k=document.cookie.split(";");
for(var j=0;
j<k.length;
j++){var h=k[j];
var l=h.split("=")[0].trim();
if(d.inArray(l,e.getCookieNames())>-1){return true
}}return false
};
e.maySetCookie=function(h){return !(e.isOptedOut()&&d.inArray(h,e.getWhitelistCookieNames())===-1)
};
return e
}())
}(Granite,Granite.Util,Granite.HTTP,jQuery));
Granite.OptOutUtil.init(window.GraniteOptOutConfig);
Granite.HTTP.detectContextPath();
Granite.I18n.init();
(function(c,b,d){var a;
b.Granite=b.Granite||{};
b.Granite.$=b.Granite.$||c;
b._g=b._g||{};
b._g.$=b._g.$||c;
a=Granite.HTTP;
c.ajaxSetup({externalize:true,encodePath:true,hook:true,beforeSend:function(f,e){if(typeof G_IS_HOOKED=="undefined"||!G_IS_HOOKED(e.url)){if(e.externalize){e.url=a.externalize(e.url)
}if(e.encodePath){e.url=a.encodePathOfURI(e.url)
}}if(e.hook){var g=a.getXhrHook(e.url,e.type,e.data);
if(g){e.url=g.url;
if(g.params){if(e.type.toUpperCase()=="GET"){e.url+="?"+c.param(g.params)
}else{e.data=c.param(g.params)
}}}}},statusCode:{403:function(e){if(e.getResponseHeader("X-Reason")==="Authentication Failed"){a.handleLoginRedirect()
}}}});
c.ajaxSettings.traditional=true
}(jQuery,this));
window.$CQ=_g.$;
window._g=window._g||{};
_g.shared={};
if(window.console===undefined){window.console={log:function(a){}}
}_g.shared.HTTP=new function(){var createResponse=function(){var response=new Object();
response.headers=new Object();
response.body=new Object();
return response
};
var getResponseFromXhr=function(request){if(!request){return null
}var response=createResponse();
response.body=request.responseText;
response.headers[_g.HTTP.HEADER_STATUS]=request.status;
response.responseText=request.responseText;
response.status=request.status;
return response
};
return{EXTENSION_HTML:".html",EXTENSION_JSON:".json",EXTENSION_RES:".res",HEADER_STATUS:"Status",HEADER_MESSAGE:"Message",HEADER_LOCATION:"Location",HEADER_PATH:"Path",PARAM_NO_CACHE:"cq_ck",get:function(url,callback,scope,suppressForbiddenCheck){url=_g.HTTP.getXhrHookedURL(_g.HTTP.externalize(url,true));
if(callback!=undefined){return _g.$.ajax({type:"GET",url:url,externalize:false,encodePath:false,hook:false,complete:function(request,textStatus){var response=getResponseFromXhr(request);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(response)
}callback.call(scope||this,this,textStatus=="success",response)
}})
}else{try{var request=_g.$.ajax({type:"GET",url:url,async:false,externalize:false,encodePath:false,hook:false});
var response=getResponseFromXhr(request);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(response)
}return response
}catch(e){return null
}}},post:function(url,callback,params,scope,suppressErrorMsg,suppressForbiddenCheck){url=_g.HTTP.externalize(url,true);
var hook=_g.HTTP.getXhrHook(url,"POST",params);
if(hook){url=hook.url;
params=hook.params
}if(callback!=undefined){return _g.$.ajax({type:"POST",url:url,data:params,externalize:false,encodePath:false,hook:false,complete:function(request,textStatus){var response=_g.HTTP.buildPostResponseFromHTML(request.responseText);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(request)
}callback.call(scope||this,this,textStatus=="success",response)
}})
}else{try{var request=_g.$.ajax({type:"POST",url:url,data:params,async:false,externalize:false,encodePath:false,hook:false});
var response=_g.HTTP.buildPostResponseFromHTML(request.responseText);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(request)
}return response
}catch(e){return null
}}},getParameter:function(url,name){var params=_g.HTTP.getParameters(url,name);
return params!=null?params[0]:null
},getParameters:function(url,name){var values=[];
if(!name){return null
}name=encodeURIComponent(name);
if(url.indexOf("?")==-1){return null
}var query=url.substring(url.indexOf("?")+1);
if(query.indexOf(name)==-1){return null
}var queryPts=query.split("&");
for(var i=0;
i<queryPts.length;
i++){var paramPts=queryPts[i].split("=");
if(paramPts[0]==name){values.push(paramPts.length>1?decodeURIComponent(paramPts[1]):"")
}}return values.length>0?values:null
},addParameter:function(url,name,value){if(value&&value instanceof Array){for(var i=0;
i<value.length;
i++){url=_g.HTTP.addParameter(url,name,value[i])
}return url
}var separator=url.indexOf("?")==-1?"?":"&";
var hashIdx=url.indexOf("#");
if(hashIdx<0){return url+separator+encodeURIComponent(name)+"="+encodeURIComponent(value)
}else{var hash=url.substring(hashIdx);
url=url.substring(0,hashIdx);
return url+separator+encodeURIComponent(name)+"="+encodeURIComponent(value)+hash
}},setParameter:function(url,name,value){url=_g.HTTP.removeParameter(url,name);
return _g.HTTP.addParameter(url,name,value)
},removeParameter:function(url,name){var pattern0="?"+encodeURIComponent(name)+"=";
var pattern1="&"+encodeURIComponent(name)+"=";
var pattern;
if(url.indexOf(pattern0)!=-1){pattern=pattern0
}else{if(url.indexOf(pattern1)!=-1){pattern=pattern1
}else{return url
}}var indexCutStart=url.indexOf(pattern);
var begin=url.substring(0,indexCutStart);
var indexCutEnd=url.indexOf("&",indexCutStart+1);
var end="";
if(indexCutEnd!=-1){end=url.substring(indexCutEnd);
if(end.indexOf("&")==0){end=end.replace("&","?")
}}return begin+end
},removeParameters:Granite.HTTP.removeParameters,addSelector:function(url,selector,index){if(!index){index=0
}var post="";
var pIndex=url.indexOf("?");
if(pIndex==-1){pIndex=url.indexOf("#")
}if(pIndex!=-1){post=url.substring(pIndex);
url=url.substring(0,pIndex)
}var sIndex=url.lastIndexOf("/");
var main=url.substring(sIndex);
if(main.indexOf("."+selector+".")==-1){var path=url.substring(0,sIndex);
var obj=main.split(".");
var newMain="";
var delim="";
if(index>obj.length-2||index==-1){index=obj.length-2
}for(var i=0;
i<obj.length;
i++){newMain+=delim+obj[i];
delim=".";
if(index==i){newMain+=delim+selector
}}return path+newMain+post
}else{return url
}},setSelector:function(url,selector,index){var post="";
var pIndex=url.indexOf("?");
if(pIndex==-1){pIndex=url.indexOf("#")
}if(pIndex!=-1){post=url.substring(pIndex);
url=url.substring(0,pIndex)
}var selectors=_g.HTTP.getSelectors(url);
var ext=url.substring(url.lastIndexOf("."));
url=url.substring(0,url.lastIndexOf("."));
var fragment=(selectors.length>0)?url.replace("."+selectors.join("."),""):url;
if(selectors.length>0){for(var i=0;
i<selectors.length;
i++){if(index==i){fragment+="."+selector
}else{fragment+="."+selectors[i]
}}}else{fragment+="."+selector
}return fragment+ext+post
},addSelectors:function(url,selectors){var res=url;
if(url&&selectors&&selectors.length){for(var i=0;
i<selectors.length;
i++){res=_g.HTTP.addSelector(res,selectors[i],i)
}}return res
},getAnchor:function(url){if(url.indexOf("#")!=-1){return url.substring(url.indexOf("#")+1)
}return""
},setAnchor:function(url,anchor){return _g.HTTP.removeAnchor(url)+"#"+anchor
},removeAnchor:Granite.HTTP.removeAnchor,noCaching:function(url){return _g.HTTP.setParameter(url,_g.HTTP.PARAM_NO_CACHE,new Date().valueOf())
},buildPostResponseFromNode:function(node,response){if(!node){return null
}if(response==undefined){response=createResponse()
}for(var i=0;
i<node.childNodes.length;
i++){var child=node.childNodes[i];
if(child.tagName){if(child.id){if(child.href){response.headers[child.id]=child.href
}else{response.headers[child.id]=child.innerHTML
}}response=_g.HTTP.buildPostResponseFromNode(child,response)
}}return response
},buildPostResponseFromHTML:function(html){var response=createResponse();
try{if(html.responseText!=undefined){html=html.responseText
}else{if(typeof html!="string"){html=html.toString()
}}var div=document.createElement("div");
div.innerHTML=html;
response=_g.HTTP.buildPostResponseFromNode(div,response);
div=null
}catch(e){}return response
},getCookie:function(name){var cname=encodeURIComponent(name)+"=";
var dc=document.cookie;
if(dc.length>0){var begin=dc.indexOf(cname);
if(begin!=-1){begin+=cname.length;
var end=dc.indexOf(";",begin);
if(end==-1){end=dc.length
}return decodeURIComponent(dc.substring(begin,end))
}}return null
},setCookie:function(name,value,path,days,domain,secure){if(typeof(days)!="number"){days=7
}var date;
if(days>0){date=new Date();
date.setTime(date.getTime()+(days*24*60*60*1000))
}else{date=new Date(0)
}document.cookie=encodeURIComponent(name)+"="+encodeURIComponent(value)+"; "+(days!=0?"expires="+date.toGMTString()+"; ":"")+(domain?"domain="+domain+"; ":"")+(path?"path="+path:"")+(secure?"; secure":"");
return value
},clearCookie:function(name,path,domain,secure){_g.HTTP.setCookie(name,"null",path||"",-1,domain||"",secure||"")
},getSchemeAndAuthority:Granite.HTTP.getSchemeAndAuthority,getContextPath:Granite.HTTP.getContextPath,externalize:function(url,encode){if((typeof G_IS_HOOKED!="undefined")&&G_IS_HOOKED(url)){return url
}if(encode){url=_g.HTTP.encodePathOfURI(url)
}url=Granite.HTTP.externalize(url);
return url
},internalize:Granite.HTTP.internalize,getPath:Granite.HTTP.getPath,getSuffix:function(){if(window.CQURLInfo&&CQURLInfo.suffix){return CQURLInfo.suffix
}return null
},getSelectors:function(url){if(!url&&window.CQURLInfo){if(CQURLInfo.selectors){return CQURLInfo.selectors
}}var selectors=[];
url=url||window.location.href;
url=_g.HTTP.removeParameters(url);
url=_g.HTTP.removeAnchor(url);
var fragment=url.substring(url.lastIndexOf("/"));
if(fragment){var split=fragment.split(".");
if(split.length>2){for(var i=0;
i<split.length;
i++){if(i>0&&i<split.length-1){selectors.push(split[i])
}}}}return selectors
},getExtension:function(url){if(!url&&window.CQURLInfo){if(CQURLInfo.extension){return CQURLInfo.extension
}}url=url||window.location.href;
url=_g.HTTP.removeParameters(url);
url=_g.HTTP.removeAnchor(url);
var pos=url.lastIndexOf(".");
if(pos<0){return""
}url=url.substring(pos+1);
pos=url.indexOf("/");
if(pos<0){return url
}return url.substring(0,pos)
},encodePathOfURI:Granite.HTTP.encodePathOfURI,encodePath:Granite.HTTP.encodePath,eval:Granite.HTTP.eval,isOkStatus:function(status){try{return(new String(status).indexOf("2")==0)
}catch(e){return false
}},isOk:function(response){try{return _g.HTTP.isOkStatus(response.headers[_g.HTTP.HEADER_STATUS])
}catch(e){return false
}},handleForbidden:function(response,suppressLogin){try{if(response[_g.HTTP.HEADER_STATUS.toLowerCase()]==403){Granite.HTTP.handleLoginRedirect();
return true
}return false
}catch(e){return false
}},getXhrHook:Granite.HTTP.getXhrHook,getXhrHookedURL:function(url,method,params){var hook=_g.HTTP.getXhrHook(url,method,params);
if(hook){return hook.url
}return url
},reloadHook:function(url){if(typeof G_RELOAD_HOOK!="undefined"&&_g.$.isFunction(G_RELOAD_HOOK)){if(CQURLInfo.selectorString!=""){url=_g.HTTP.addSelector(url,CQURLInfo.selectorString)
}url=G_RELOAD_HOOK(url)||url
}return url
}}
};
_g.HTTP=_g.shared.HTTP;
_g.shared.Util=new function(){return{reload:function(win,url,preventHistory){if(!win){win=window
}if(!url){url=_g.HTTP.noCaching(win.location.href)
}url=_g.HTTP.reloadHook(url);
if(preventHistory){win.location.replace(url)
}else{win.location.href=url
}},load:function(url,preventHistory){_g.Util.reload(window,url,preventHistory)
},open:function(url,win,name,options){if(!win){win=window
}if(!url){return
}url=_g.HTTP.reloadHook(url);
if(!name){name=""
}if(!options){options=""
}return win.open(url,name,options)
},htmlEncode:function(value){return !value?value:String(value).replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")
},htmlDecode:function(value){return !value?value:String(value).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&amp;/g,"&")
},ellipsis:function(value,length,word){if(value&&value.length>length){if(word){var vs=value.substr(0,length-2);
var index=Math.max(vs.lastIndexOf(" "),vs.lastIndexOf("."),vs.lastIndexOf("!"),vs.lastIndexOf("?"),vs.lastIndexOf(";"));
if(index==-1||index<(length-15)){return value.substr(0,length-3)+"..."
}else{return vs.substr(0,index)+"..."
}}else{return value.substr(0,length-3)+"..."
}}return value
},patchText:Granite.Util.patchText,eval:function(response){return _g.HTTP.eval(response)
},getTopWindow:Granite.Util.getTopWindow}
};
_g.Util=_g.shared.Util;
_g.shared.Sling=function(){return{SELECTOR_INFINITY:Granite.Sling.SELECTOR_INFINITY,CHARSET:Granite.Sling.CHARSET,STATUS:Granite.Sling.STATUS,STATUS_BROWSER:Granite.Sling.STATUS_BROWSER,OPERATION:Granite.Sling.OPERATION,OPERATION_DELETE:Granite.Sling.OPERATION_DELETE,OPERATION_MOVE:Granite.Sling.OPERATION_MOVE,DELETE_SUFFIX:Granite.Sling.DELETE_SUFFIX,TYPEHINT_SUFFIX:Granite.Sling.TYPEHINT_SUFFIX,COPY_SUFFIX:Granite.Sling.COPY_SUFFIX,MOVE_SUFFIX:Granite.Sling.MOVE_SUFFIX,ORDER:Granite.Sling.ORDER,REPLACE:Granite.Sling.REPLACE,DESTINATION:Granite.Sling.DESTINATION,SAVE_PARAM_PREFIX:Granite.Sling.SAVE_PARAM_PREFIX,IGNORE_PARAM:Granite.Sling.IGNORE_PARAM,REQUEST_LOGIN_PARAM:Granite.Sling.REQUEST_LOGIN_PARAM,LOGIN_URL:Granite.Sling.LOGIN_URL,LOGOUT_URL:Granite.Sling.LOGOUT_URL,processBinaryData:function(a){if(a&&a[":jcr:data"]!=undefined){var b=new Object();
b.size=a[":jcr:data"];
b.type=a["jcr:mimeType"];
b.date=a["jcr:lastModified"];
a=b
}return a
},getContentPath:function(c,a,b){var d=a;
if(d.lastIndexOf(".")>d.lastIndexOf("/")){d=d.substr(0,d.indexOf(".",d.lastIndexOf("/")))
}if(c){if(c.indexOf("/")==0){d=c
}else{if(b){while(c.indexOf("../")==0){c=c.substring(3);
d=d.substring(0,d.lastIndexOf("/"))
}}c=c.replace("./","");
d=d+"/"+c
}}return d
}}
}();
_g.Sling=_g.shared.Sling;
_g.shared.XSS=new function(){return{getXSSPropertyName:function(a){if(!a){return""
}if(_g.XSS.KEY_REGEXP.test(a)){return a
}return a+=_g.XSS.KEY_SUFFIX
},getXSSRecordPropertyValue:function(e,c,a){var d="";
if(e&&c){var b=e.get(this.getXSSPropertyName(c));
if(b){d=b
}else{d=e.get(c)
}if(a&&!isNaN(a)){d=_g.Util.ellipsis(d,a,true)
}}return d
},getXSSTablePropertyValue:function(d,c,a){var e="";
if(d&&c){var b=d[this.getXSSPropertyName(c)];
if(b){e=b
}else{e=d[c]
}if(a&&!isNaN(a)){e=_g.Util.ellipsis(e,a,true)
}}return e
},getXSSValue:function(a){if(a){return _g.Util.htmlEncode(a)
}else{return""
}},updatePropertyName:function(a,b){if(!a||!b||!a[b]){return
}if(a.xssProtect&&!a.xssKeepPropName){a[b]=this.getXSSPropertyName(a[b])
}},xssPropertyRenderer:function(d,b,c,a){if(a&&a.dataIndex&&c&&c.data&&c.data[this.getXSSPropertyName(a.dataIndex)]){d=c.data[this.getXSSPropertyName(a.dataIndex)];
if(a.ellipsisLimit&&!isNaN(a.ellipsisLimit)){d=_g.Util.ellipsis(d,a.ellipsisLimit,true)
}return d
}else{if(d){return d
}else{return""
}}}}
};
_g.XSS=_g.shared.XSS;
_g.XSS.KEY_SUFFIX="_xss";
_g.XSS.KEY_REGEXP=new RegExp(_g.XSS.KEY_SUFFIX+"$");
_g.shared.I18n=Granite.I18n;
_g.I18n=_g.shared.I18n;
_g.shared.I18n.getMessage=Granite.I18n.get;
_g.shared.I18n.getVarMessage=Granite.I18n.getVar;
_g.shared.String=new function(){return{startsWith:function(d,b){if(d==null||b==null){return d==null&&b==null
}if(b.length>d.length){return false
}var a=d.toString();
var c=b.toString();
return(a.indexOf(c)==0)
},endsWith:function(b,a){if(b==null||a==null){return b==null&&a==null
}if(a.length>b.length){return false
}b=b.toString();
a=a.toString();
return(b.lastIndexOf(a)==(b.length-a.length))
},contains:function(b,a){if(b==null||a==null){return false
}b=b.toString();
a=a.toString();
return(b.indexOf(a)>=0)
}}
};
_g.String=_g.shared.String;
_g.shared.ClientSidePersistence=function(a){var b={PERSISTENCE_NAME:_g.shared.ClientSidePersistence.decoratePersistenceName("ClientSidePersistence"),config:{},cache:null,getMode:function(){return this.config.mode
},getWindow:function(){return this.config.window||_g.shared.Util.getTopWindow()
},debug:function(){if(console){var c=this.getMap();
var e="[ClientSidePersistence -> mode="+this.getMode().name+", container="+(this.config.container||"")+"]\n";
var d=0;
var f=new RegExp("^"+this.config.container+"/");
for(var h=0,l=Object.keys(c).sort(),j=null;
h<l.length;
h++){var k=l[h];
if(this.config.container&&(typeof(k)=="string")&&!k.match(f)){continue
}var g=c[k];
e+="-["+ ++d+"]-> '"+k.replace(f,"")+"' = '"+decodeURIComponent(g)+"'\n"
}if(!d){e+="(container is empty)"
}console.log(e)
}},keyName:function(c){return(this.config.container?(this.config.container+"/"):"")+c
},getKeys:function(){var f=this.getMap();
var e=[];
if(f){for(var c in f){if(this.config.container){if(c.indexOf(this.config.container+"/")==0){var d=c.substring(this.config.container.length+1);
e.push(d)
}}else{e.push(c)
}}}return e
},get:function(c){var d=this.getMap()[this.keyName(c)];
return d?decodeURIComponent(d):d
},set:function(d,g){d=(typeof d==="string")?d.replace(/:=/g,""):"";
var f={key:d};
d=this.keyName(d);
if(!d.length){return
}var c=[];
var h=this.getMap();
f.action=h[d]?"update":"set";
if(g){h[d]=encodeURIComponent(g)
}else{f.action="remove";
delete h[d]
}for(var e in h){c.push(e+":="+h[e])
}this.cache=h;
this.write(c.join("|"));
_g.$.extend(f,{value:g,mode:this.getMode().name,container:this.config.container});
_g.$(_g.shared.ClientSidePersistence).trigger(_g.shared.ClientSidePersistence.EVENT_NAME,f)
},getMap:function(){if(!this.cache||!this.config.useCache){var f=this.read().split("|");
var d={};
for(var c=0;
c<f.length;
c++){var g=f[c].split(":=");
var e=g[0];
if(e&&e.length){d[e]=g[1]||""
}}this.cache=d
}return this.cache
},remove:function(c){this.set(c)
},clearMap:function(){this.write()
},read:function(){return this.config.mode.read(this)||""
},write:function(c){this.config.mode.write(this,c||"")
}};
_g.$.extend(b.config,_g.shared.ClientSidePersistence.getDefaultConfig(),a);
if(b.config.useContainer===false){b.config.container=null
}if((b.config.mode===_g.shared.ClientSidePersistence.MODE_SESSION)&&(!window.sessionStorage||!window.sessionStorage.getItem||!window.sessionStorage.setItem)){b.config.mode=_g.shared.ClientSidePersistence.MODE_LOCAL
}if((b.config.mode===_g.shared.ClientSidePersistence.MODE_LOCAL)&&(!window.localStorage||!window.localStorage.getItem||!window.localStorage.setItem)){b.config.mode=_g.shared.ClientSidePersistence.MODE_WINDOW
}return b
};
_g.shared.ClientSidePersistence.EVENT_NAME="ClientSidePersistence";
_g.shared.ClientSidePersistence.MODE_SESSION={name:"session",read:function(a){return a.getWindow().sessionStorage.getItem(a.PERSISTENCE_NAME)
},write:function(a,b){if(Granite.OptOutUtil.isOptedOut()){return
}a.getWindow().sessionStorage.setItem(a.PERSISTENCE_NAME,b)
}};
_g.shared.ClientSidePersistence.MODE_LOCAL={name:"local",read:function(a){return a.getWindow().localStorage.getItem(a.PERSISTENCE_NAME)
},write:function(a,b){if(Granite.OptOutUtil.isOptedOut()){return
}a.getWindow().localStorage.setItem(a.PERSISTENCE_NAME,b)
}};
_g.shared.ClientSidePersistence.decoratePersistenceName=function(a){return a
};
_g.shared.ClientSidePersistence.MODE_WINDOW={name:"window",read:function(a){return a.getWindow().name
},write:function(a,b){if(Granite.OptOutUtil.isOptedOut()){return
}a.getWindow().name=b
}};
_g.shared.ClientSidePersistence.MODE_COOKIE={COOKIE_NAME:_g.shared.ClientSidePersistence.decoratePersistenceName("SessionPersistence"),name:"cookie",read:function(a){return _g.shared.ClientSidePersistence.CookieHelper.read(this.COOKIE_NAME)
},write:function(a,b){if(Granite.OptOutUtil.isOptedOut()&&!Granite.OptOutUtil.maySetCookie(this.COOKIE_NAME)){return
}if(!b){_g.shared.ClientSidePersistence.CookieHelper.erase(this.COOKIE_NAME)
}else{_g.shared.ClientSidePersistence.CookieHelper.set(this.COOKIE_NAME,b,365)
}}};
_g.shared.ClientSidePersistence.getDefaultConfig=function(){return{window:_g.shared.Util.getTopWindow(),useCache:false,container:null,mode:_g.shared.ClientSidePersistence.MODE_LOCAL}
};
_g.shared.ClientSidePersistence.CookieHelper={set:function(c,d,e){var a="";
if(e){var b=new Date();
b.setTime(b.getTime()+(e*24*60*60*1000));
a="; expires="+b.toGMTString()
}if(d){d=encodeURIComponent(d)
}document.cookie=c+"="+d+a+"; path=/"
},read:function(b){var f=b+"=";
var a=document.cookie.split(";");
for(var d=0;
d<a.length;
d++){var g=a[d];
while(g.charAt(0)==" "){g=g.substring(1,g.length)
}if(g.indexOf(f)==0){var e=g.substring(f.length,g.length);
return e?decodeURIComponent(e):null
}}return null
},erase:function(a){_g.shared.ClientSidePersistence.CookieHelper.set(a,"",-1)
}};
_g.shared.ClientSidePersistence.clearAllMaps=function(){var a=[_g.shared.ClientSidePersistence.MODE_COOKIE,_g.shared.ClientSidePersistence.MODE_LOCAL,_g.shared.ClientSidePersistence.MODE_SESSION,_g.shared.ClientSidePersistence.MODE_WINDOW];
_g.$.each(a,function(d,c){var b=new _g.shared.ClientSidePersistence({mode:c});
b.clearMap()
})
};
_g.I18n.init();
window.CQ=window.CQ||{};
CQ.shared=_g.shared;
CQ.Sling=CQ.shared.Sling;
CQ.I18n=CQ.shared.I18n;
G_XHR_HOOK=typeof CQ_XHR_HOOK!="undefined"?CQ_XHR_HOOK:undefined;
G_RELOAD_HOOK=typeof CQ_RELOAD_HOOK!="undefined"?CQ_RELOAD_HOOK:undefined;
G_IS_HOOKED=typeof CQ_IS_HOOKED!="undefined"?CQ_IS_HOOKED:undefined;
G_CONTENT_PATH=typeof CQ_CONTENT_PATH!="undefined"?CQ_CONTENT_PATH:undefined;
CQ.shared.Form=function(){var e=function(){var j=new Object();
var k=document.getElementsByTagName("label");
for(var h=0;
h<k.length;
h++){var g=k[h].htmlFor;
if(g){j[g]=k[h]
}}return j
};
var f=function(h){var j="";
var g=function(l){if(l.nodeType==3){j+=l.nodeValue
}if(l.nodeName.toLowerCase()=="select"||l.nodeName.toLowerCase()=="input"||l.nodeName.toLowerCase()=="textarea"||l.nodeName.toLowerCase()=="button"){return
}for(var k=0;
l.childNodes&&k<l.childNodes.length;
k++){g(l.childNodes[k])
}};
g(h);
return j
};
var c=function(g){return g.replace(/-\d+$/,"")
};
var b=function(h,g){if(!g){g=e()
}if(g[h]){return f(g[h])
}return null
};
var a=function(j){var h;
var k=j.nodeName.toLowerCase();
var g=d(j,"type")?j.getAttribute("type"):undefined;
if(k=="input"){if(g=="radio"||g=="checkbox"){if(d(j,"checked")){h=j.getAttribute("value")
}}else{if(j.type=="text"){h=j.defaultValue
}else{h=j.value
}}}else{if(k=="textarea"){h=j.value
}else{if(k=="option"&&d(j,"selected")){h=j.getAttribute("value")
}}}return h
};
var d=function(h,g){if(h==null){return false
}return(h.getAttribute(g)!=null)
};
return{searchArray:function(h,g,k){for(var j=0;
j<h.length;
j++){if(h[j][g]&&h[j][g]==k){return h[j]
}}return null
},getLabelForField:function(g,j){if(!j){j=e()
}var k=g.getAttribute("id");
if(k&&j[k]){return f(j[k])
}var h=g.parentNode;
while(h){if(h.nodeName.toLowerCase()=="label"){return f(h)
}h=h.parentNode
}return g.getAttribute("name")
},getFields:function(){var k=e();
var g=[];
var h=function(o,p){var n=o.getAttribute("name");
var q=o.nodeName.toLowerCase();
var t;
if(q=="input"||q=="textarea"){var m=d(o,"type")?o.getAttribute("type").toLowerCase():"text";
if(m=="button"||m=="submit"||m=="reset"){return
}t=CQ.shared.Form.searchArray(g,"value",n);
if(!t){g.push({text:CQ.shared.Form.getLabelForField(o,k),value:n,name:n,enumeration:undefined,local:p,type:q,defaultValue:a(o),node:o});
t=g[g.length-1]
}if(m=="radio"||(t.local&&m=="checkbox")){if(!t.enumeration){var u=o.getAttribute("id");
if(u){var w=c(u);
var v=b(w,k);
t.text=(v?v:n)
}else{t.text=n
}t.enumeration=[]
}t.enumeration.push({text:CQ.shared.Form.getLabelForField(o,k),value:o.getAttribute("value"),defaultValue:a(o),node:o})
}}else{if(q=="select"){g.push({text:CQ.shared.Form.getLabelForField(o,k),value:n,name:n,enumeration:[],local:p,type:q,defaultValue:undefined,node:o});
t=g[g.length-1];
var l=o.getElementsByTagName("option");
for(var r=0;
r<l.length;
r++){t.enumeration.push({text:l[r].innerHTML,value:l[r].getAttribute("value"),defaultValue:a(l[r]),node:l[r]})
}}}};
var j=function(n,m){if(n.nodeName.toLowerCase()=="div"&&$CQ(n).hasClass("section")){m=true
}if(n.getAttribute&&n.getAttribute("name")){h(n,m)
}for(var l=0;
n.childNodes&&l<n.childNodes.length;
l++){var o=n.childNodes[l];
if(o.nodeType==1){j(o,m)
}}};
j(document,false);
return g
}}
}();
CQ.shared.User=function(infoData){return{data:null,language:null,userPropsPath:null,getUserPropsUrl:function(){if(!this.userPropsPath){this.userPropsPath=CQ.shared.User.PROXY_URI
}return this.userPropsPath
},load:function(){var url=this.getUserPropsUrl();
url=CQ.shared.HTTP.noCaching(url);
var response=CQ.shared.HTTP.get(url);
if(CQ.shared.HTTP.isOk(response)){this.data=CQ.shared.Util.eval(response)
}},init:function(infoData,force){if(!this.initialized||force){if(infoData){this.data=infoData
}else{this.load()
}this.initialized=true
}return this.data
},lazyInit:function(){this.lazyLoad=function(){this.load();
this.initialized=true
}
},isInitialized:function(){return this.initialized
},getLanguage:function(){if(!this.isInitialized()&&this.lazyLoad){this.lazyLoad.call(this)
}this.language=this.data&&this.data.preferences&&this.data.preferences["language"]?this.data.preferences["language"]:"en";
return this.language
}}
}();
CQ.shared.User.PROXY_URI=CQ.shared.HTTP.externalize("/libs/cq/security/userinfo"+CQ.shared.HTTP.EXTENSION_JSON);
CQ.shared.User.lazyInit();
CQ.shared.I18n.init({locale:function(){return CQ.shared.User.getLanguage()
},urlPrefix:"/libs/cq/i18n/dict."});
(function(a){a(function(){function c(g,h){try{if(a.cq.isAuthor()||window.location.hash=="#debug"){if(typeof console!="undefined"&&typeof console.log!="undefined"){console.log(g);
console.log(h)
}alert(g.name+":\n"+g.message+".\n"+h+".")
}}catch(j){}}try{var d=a.browser.msie?0:250;
function b(g){try{if(window.location.hash.length>0&&a(window.location.hash,g).length>0){window.location=(window.location+"").replace(window.location.hash,"")
}}catch(h){c(h,"Could not remove hash")
}}try{a(".cq-carousel").each(function(){var w=a(this);
var g=+a("var[title='play-delay']",this).text();
if(!g){g=6000
}var k=+a("var[title='transition-time']",this).text();
if(!k){k=1000
}var u=a(".cq-carousel-banners",this);
var o=a(".cq-carousel-banner-switch",this);
var v=o.find("a");
var p=a(".cq-carousel-banner-item",this);
var e=p.outerWidth();
var q=p.filter(":first");
var m=null;
var h=null;
var l=0;
var n=a("a.cq-carousel-control-prev",this);
n.click(function(){if(n.is(".cq-carousel-active")){a(v[(l+v.length-1)%v.length]).click()
}return false
});
var t=a("a.cq-carousel-control-next",this);
t.click(function(){if(t.is(".cq-carousel-active")){a(v[(l+1)%v.length]).click()
}return false
});
if(v.length>1){t.addClass("cq-carousel-active")
}function j(){r();
if(g>0){h=setInterval(function(){a(v[(l+1)%v.length]).click()
},g)
}}function r(){if(h!==null){clearInterval(h);
h=null
}}if(d||a.browser.version>6){q.css("left",0)
}else{q.show()
}v.click(function(){var z=a(this);
var x=p.filter(z.attr("href"));
var y=x.prevAll().length;
var A=(y>l||h!==null)?1:-1;
if(!z.is(".cq-carousel-active")){v.removeClass("cq-carousel-active");
z.addClass("cq-carousel-active");
if(q.is(":animated")){q.stop(true,true);
m.stop(true,true)
}if(d){x.css({left:A*e}).animate({left:0,opacity:1},k);
q.animate({left:-A*e,opacity:0},k)
}else{if(a.browser.version>6){x.css({left:A*e,opacity:1}).animate({left:0},k);
q.animate({left:-A*e},k)
}else{x.fadeIn();
q.fadeOut()
}}m=q;
q=x;
l=y;
if(l>0){n.addClass("cq-carousel-active")
}else{n.removeClass("cq-carousel-active")
}if(l<v.length-1){t.addClass("cq-carousel-active")
}else{t.removeClass("cq-carousel-active")
}}return false
}).each(function(){var x=a(this);
x.attr("title",x.text())
}).filter(":first").addClass("cq-carousel-active");
j();
w.hover(function(){r();
n.fadeIn();
t.fadeIn()
},function(){j();
n.fadeOut();
t.fadeOut()
});
b(this)
})
}catch(f){c(f,"Could not initialize the banners")
}}catch(f){c(f,"Init failed")
}})
})($CQ||$);
function cq5forms_isArray(a){return typeof a.length=="number"&&a.item
}function cq5forms_showMsg(e,c,d,a){var b=document.forms[e].elements[c];
alert(d);
if(cq5forms_isArray(b)){if(!a){a=0
}b[a].focus()
}else{b.focus()
}}function cq5forms_isEmpty(b){if(b===undefined){return false
}var a=true;
if(cq5forms_isArray(b)){for(i=0;
i<b.length;
i++){if(b[i].type=="radio"||b[i].type=="checkbox"){if(b[i].checked){a=false
}}else{if(b[i].localName=="option"){if(b[i].selected){a=false
}}else{if(b[i].value.length>0){a=false
}}}}}else{if(b.type=="radio"||b.type=="checkbox"){if(b.checked){a=false
}}else{if(b.value.length>0){a=false
}}}return a
}function cq5forms_regcheck(f,d){var b=false;
var c=d.exec(f);
if(c){var a=f.length;
var e=c[0].length;
b=(e==a)
}return b
}function cq5forms_multiResourceChange(a,b,c){if(!c){if(!a){a=window.event
}if(a.keyCode<48&&a.keyCode!=8&&a.keyCode!=46){return
}}try{document.getElementById(b).checked=true
}catch(d){}}if(!window.CQ_Analytics){window.CQ_Analytics={}
}CQ_Analytics.Operator=(function(){return function(){}
})();
CQ_Analytics.Operator.IS="is";
CQ_Analytics.Operator.EQUALS="equals";
CQ_Analytics.Operator.NOT_EQUAL="notequal";
CQ_Analytics.Operator.GREATER="greater";
CQ_Analytics.Operator.GREATER_OR_EQUAL="greaterorequal";
CQ_Analytics.Operator.OLDER="older";
CQ_Analytics.Operator.OLDER_OR_EQUAL="olderorequal";
CQ_Analytics.Operator.LESS="less";
CQ_Analytics.Operator.LESS_OR_EQUAL="lessorequal";
CQ_Analytics.Operator.YOUNGER="younger";
CQ_Analytics.Operator.YOUNGER_OR_EQUAL="youngerorequal";
CQ_Analytics.Operator.CONTAINS="contains";
CQ_Analytics.Operator.BEGINS_WITH="beginswith";
CQ_Analytics.OperatorActions=function(){var mapping={};
var addOperator=function(name,text,operation){mapping[name]=[text,operation]
};
addOperator(CQ_Analytics.Operator.EQUALS,"equals","==");
addOperator(CQ_Analytics.Operator.IS,"is","==");
addOperator(CQ_Analytics.Operator.NOT_EQUAL,"is not equal to","!=");
addOperator(CQ_Analytics.Operator.GREATER,"is greater than",">");
addOperator(CQ_Analytics.Operator.GREATER_OR_EQUAL,"is equal to or greater than",">=");
addOperator(CQ_Analytics.Operator.OLDER,"is older than",">");
addOperator(CQ_Analytics.Operator.OLDER_OR_EQUAL,"is equal to or older than",">=");
addOperator(CQ_Analytics.Operator.LESS,"is less than","<");
addOperator(CQ_Analytics.Operator.LESS_OR_EQUAL,"is equal to or less than","<=");
addOperator(CQ_Analytics.Operator.YOUNGER,"is younger than","<");
addOperator(CQ_Analytics.Operator.YOUNGER_OR_EQUAL,"is equal to or younger than","<=");
addOperator(CQ_Analytics.Operator.CONTAINS,"contains",function(s1,s2){if(s1){if(s2){s1=""+s1;
s2=""+s2;
return s1.toLowerCase().indexOf(s2.toLowerCase())!=-1
}return true
}return false
});
addOperator(CQ_Analytics.Operator.BEGINS_WITH,"begins with",function(s1,s2){if(s1){if(s2){s1=""+s1;
s2=""+s2;
return s1.toLowerCase().indexOf(s2.toLowerCase())==0
}return true
}return false
});
var getByIndex=function(op,index){if(mapping[op]&&mapping[op][index]){return mapping[op][index]
}return""
};
var escapeQuote=function(str){if(str){str=str.replace(new RegExp("\\'","ig"),str)
}return str
};
return{getText:function(operator){return getByIndex(operator,0)
},setText:function(operator,newText){if(mapping[operator]&&mapping[operator][0]){mapping[operator][0]=newText
}},getOperation:function(operator){return getByIndex(operator,1)
},operate:function(object,property,operator,value,valueFormat){try{if(object&&object[property]){var toEval="";
var op=this.getOperation(operator);
op=op?op:operator;
var objectValue=CQ.shared.XSS.getXSSTablePropertyValue(object,property);
if(typeof op=="function"){return op.call(this,objectValue,value,valueFormat)
}else{if(valueFormat){toEval=valueFormat+"('"+objectValue+"') "+op+" "+valueFormat+"('"+value+"')"
}else{var s1=escapeQuote(objectValue);
var s2=escapeQuote(value);
toEval="'"+s1+"' "+op+" '"+s2+"'"
}var b=eval(toEval);
return b
}}}catch(e){}return false
}}
}();
CQ_Analytics.Utils=new function(){return{registerDocumentEventHandler:function(c,b){var a=window.document[c];
if(typeof window.document[c]!="function"){window.document[c]=b
}else{window.document[c]=function(d){if(a){a(d)
}b(d)
}
}},eventWrapper:function(a){return function(d){var c,b;
if(document.all){c=window.event.keyCode;
b=window.event
}else{c=(typeof(d.which)!="undefined")?d.which:0;
b=d
}if(b){a(b,c)
}}
},loadElement:function(a,b){$CQ("#"+b).load(a)
},loadTeaserElement:function(a,d){var e=$CQ("#"+d).css("height");
var f=$CQ("#"+d).height();
if(f>0){$CQ("#"+d).css("height",f)
}var g=function(m){if(m&&m!=""){var h=$CQ(m).css("display","none");
$CQ("#"+d).append(h);
h.fadeIn(function(){if(e&&e!="0px"){$CQ("#"+d).css("height",e)
}})
}else{if(e&&e!="0px"){$CQ("#"+d).css("height",e)
}}};
var j=function(h,m){if(!CQ_Analytics.Utils.teasersCache){CQ_Analytics.Utils.teasersCache={}
}CQ_Analytics.Utils.teasersCache[h]=m
};
var b=function(){if(CQ_Analytics.Utils.teasersCache&&CQ_Analytics.Utils.teasersCache[a]){g(CQ_Analytics.Utils.teasersCache[a])
}else{CQ_Analytics.Utils.teasersLoading=CQ_Analytics.Utils.teasersLoading||{};
if(CQ_Analytics.Utils.teasersLoading[a]){window.setTimeout(function(){CQ_Analytics.Utils.loadTeaserElement(a,d)
},100)
}else{CQ_Analytics.Utils.teasersLoading[a]=true;
k()
}}};
var k=function(){var m=a;
var h=location.href;
if(typeof CQ_CONTENT_PATH!="undefined"){h=CQ_CONTENT_PATH
}var n=CQ.shared.HTTP.getParameter(h,"wcmmode");
if(n){m+=(m.indexOf("?")>0?"&":"?")+"wcmmode="+n
}CQ.shared.HTTP.get(m,function(t,r,p){if(r){var q=p.body;
if(q){q=q.replace(new RegExp("\\n","ig"),"");
q=q.replace(new RegExp("\\r","ig"),"");
j(a,q);
delete CQ_Analytics.Utils.teasersLoading[a];
b()
}}else{j(a,"")
}})
};
var c=$CQ("#"+d).children().length;
if(c>0){var l=0;
$CQ("#"+d).children().fadeOut(function(){var h=$CQ(this);
window.setTimeout(function(){h.remove();
l++;
if(l>=c){b()
}},50)
})
}else{b()
}},clearElement:function(a){if(a){$CQ("#"+a).html("")
}},indexOf:function(d,c){for(var b=0,a=d.length;
b<a;
b++){if(d[b]==c){return b
}}return -1
},load:function(a,c,b){return CQ.shared.HTTP.get(a,c,b)
},post:function(a,d,c,b){return CQ.shared.HTTP.post(a,d,c,b)
},getPagePath:function(){return CQ.shared.HTTP.getPath()
},getPath:function(a){return CQ.shared.HTTP.getPath(a)
},addParameter:function(b,a,c){return CQ.shared.HTTP.addParameter(b,a,c)
},removeParameters:function(a){return CQ.shared.HTTP.removeParameters(a)
},removeAnchor:function(a){return CQ.shared.HTTP.removeAnchor(a)
},getSchemeAndAuthority:function(a){return CQ.shared.HTTP.getSchemeAndAuthority(a)
},internalize:function(a,b){return CQ.shared.HTTP.internalize(b)
},externalize:function(a,b){return CQ.shared.HTTP.externalize(a,b)
},encodePathOfURI:function(a){return CQ.shared.HTTP.encodePathOfURI(a)
},encodePath:function(a){return CQ.shared.HTTP.encodePath(a)
},getContextPath:function(){return CQ.shared.HTTP.getContextPath()
},detectContextPath:function(){return CQ.shared.HTTP.detectContextPath()
},urlEncode:function(h){if(!h){return""
}if(typeof h=="string"){return h
}var c=[];
for(var f in h){var e=h[f],b=encodeURIComponent(f);
var g=typeof e;
if(g=="undefined"){c.push(b,"=&")
}else{if(g!="function"&&g!="object"){c.push(b,"=",encodeURIComponent(e),"&")
}else{if(typeof e=="array"){if(e.length){for(var d=0,a=e.length;
d<a;
d++){c.push(b,"=",encodeURIComponent(e[d]===undefined?"":e[d]),"&")
}}else{c.push(b,"=&")
}}}}}c.pop();
return c.join("")
},getUID:function(){var a=Math.floor(Math.random()*(Math.pow(2,42)-1));
return this.getTimestamp().toString(16)+a.toString(16)
},getTimestamp:function(){var a=new Date();
return a.getTime()
},insert:function(d,c,b){if(!d||isNaN(c)||!b){return d
}var a="";
var f=0;
var e=c;
while(e<d.length){a+=d.substring(f,e)+b;
f+=c;
e+=c
}if(f<d.length){a+=d.substring(f)
}return a
},addListener:function(){if(window.addEventListener){return function(d,b,c,a){d.addEventListener(b,c,(a))
}
}else{if(window.attachEvent){return function(d,b,c,a){d.attachEvent("on"+b,c)
}
}else{return function(){}
}}},removeListener:function(){if(window.removeEventListener){return function(d,b,c,a){d.removeEventListener(b,c,(a))
}
}else{if(window.detachEvent){return function(c,a,b){c.detachEvent("on"+a,b)
}
}else{return function(){}
}}}}
};
CQ_Analytics.ClickstreamcloudRenderingUtils=new function(){return{createLink:function(f,d,b,a){var c=document.createElement("a");
c.href=a;
c.onclick=d;
c.innerHTML=f;
if(b){for(var e in b){if(b.hasOwnProperty(e)){c[e]=b[e]
}}}return c
},createStaticLink:function(d,a,c){var b=document.createElement("a");
b.href=a;
b.innerHTML=d;
b.title=c;
b.alt=c;
return b
},createNameValue:function(b,d,a,e){var c=document.createElement("span");
c.className=a||"ccl-data";
c.innerHTML=b+" = "+d;
c.title=e;
c.alt=e;
return c
},createText:function(d,a,c){var b=document.createElement("span");
b.className=a||"ccl-data";
if(d&&d.indexOf&&((d.indexOf("/home")!=-1&&d.indexOf("/image")!=-1)||(d.indexOf("/")!=-1&&d.indexOf(".png")!=-1))){b.innerHTML='<img src="'+d+'.prof.thumbnail.png" border="0">'
}else{if(d&&d.indexOf&&d.indexOf("www.gravatar.com")!=-1){b.innerHTML='<img src="'+d+'">'
}else{b.innerHTML=d
}}b.title=c;
b.alt=c;
return b
},createEditablePropertySpan:function(b,d){var a="var editSpan = this.nextSibling; this.style.display = 'none'; editSpan.style.display = 'block';";
var e="var editSpan = this.parentNode; var readSpan = this.parentNode.previousSibling;var newValue = this.value;editSpan.style.display = 'none'; readSpan.innerHTML = '"+b+" = '+value; readSpan.style.display = 'block';";
var c=document.createElement("span");
c.innerHTML='<span class="ccl-data" onclick="'+a+'">'+b+" = "+d+"</span>";
c.innerHTML+='<span class="ccl-data" style="display: none;">'+b+' = <input class="ccl-input" type="text" value="'+d+'" onblur="'+e+'"></span>';
c.className="ccl-data";
return c
}}
};
CQ_Analytics.ClientContextUtils=new function(){return{renderStoreProperty:function(f,c,b,d,e,a){if(CQ_Analytics&&CQ_Analytics.CCM){CQ_Analytics.CCM.onReady(function(){var g=function(){var h=CQ_Analytics.StoreRegistry.getStore(c);
if(h){var j=function(){var m=h.getProperty(b)||a;
var l=$CQ("#"+f);
if(l.attr("contenteditable")&&l.attr("contenteditable")!="inherit"){return
}if(typeof(m)=="string"&&((m.indexOf("/")==0&&(m.toLowerCase().indexOf(".png")!=-1||m.toLowerCase().indexOf(".jpg")!=-1||m.toLowerCase().indexOf(".gif")!=-1)||m.toLowerCase().indexOf("http")==0))){if(!m||m==""){l.children().remove();
if(CQ_Analytics.isUIAvailable){l.html(CQ.I18n.getMessage("No",null,"Ex: No address, No keywords")+" "+b)
}else{l.html("No "+b)
}}else{var k="";
if(l.parents(".cq-cc-thumbnail").length==0||m.toLowerCase().indexOf("http")==0||m.indexOf("/libs/wcm/mobile")==0){k=m.replace(new RegExp("&amp;","g"),"&")
}else{k="/etc/clientcontext/shared/thumbnail/content.png";
k=CQ.shared.HTTP.addParameter(k,"path",CQ_Analytics.Variables.replaceVariables(m))
}k=CQ_Analytics.Variables.replaceVariables(k);
if(l.find("div").css("background-image")!="url("+k+")"){if(h.fireEvent("beforepropertyrender",h,f)!==false){l.html("");
l.children().remove();
$CQ("<div>").addClass("cq-cc-thumbnail-img").css("background-image","url("+CQ.shared.HTTP.externalize(k)+")").appendTo(l);
h.fireEvent("propertyrender",h,f)
}}}}else{m=CQ_Analytics.Variables.replaceVariables(m);
if(CQ_Analytics.isUIAvailable){m=(!m||m=="")?CQ.I18n.getMessage("No",null,"Ex: No address, No keywords")+" "+b:m=d+m+e
}else{m=(!m||m=="")?"No "+b:m=d+m+e
}if(l.html()!=m){if(h.fireEvent("beforepropertyrender",h,f)!==false){l.html(m);
h.fireEvent("propertyrender",h,f)
}}}};
if(h.fireEvent("beforeinitialpropertyrender",h,f)!==false){j();
if(h.addListener){h.addListener("update",function(){j()
})
}h.fireEvent("initialpropertyrender",h,f)
}}};
CQ_Analytics.ClientContextUtils.onStoreRegistered(c,g)
})
}},renderStore:function(b,a){if(CQ_Analytics&&CQ_Analytics.CCM&&b&&a){CQ_Analytics.CCM.onReady(function(){var c=function(){var d=CQ_Analytics.StoreRegistry.getStore(a);
if(d){d.divId=b;
var e=function(){if(d.fireEvent("beforerender",d,d.divId)!==false){d.renderer(d,d.divId);
d.fireEvent("render",d,d.divId)
}};
if(d.fireEvent("beforeinitialrender",d,b)!==false){e();
if(d.addListener){d.addListener("update",function(){e()
})
}d.fireEvent("initialrender",d,b)
}}};
CQ_Analytics.ClientContextUtils.onStoreRegistered(a,c)
})
}},storesOptionsProvider:function(){var c=[];
var a=CQ_Analytics.StoreRegistry.getStores();
for(var b in a){c.push({value:b})
}return c
},storePropertiesOptionsProvider:function(c,e){var b=[];
var a=CQ_Analytics.StoreRegistry.getStore(c);
if(a){var g=a.getPropertyNames();
for(var d=0;
d<g.length;
d++){var f=g[d];
if(!CQ.shared.XSS.KEY_REGEXP.test(f)){var h={value:f};
if(e){h.text=f+" - "+a.getProperty(f)
}b.push(h)
}}}return b
},onStoreRegistered:function(b,c){if(c){var a=CQ_Analytics.StoreRegistry.getStore(b);
if(a){c.call(a,a)
}else{CQ_Analytics.CCM.addListener("storeregister",function(f,d){if(d.getName()==b){c.call(d,d)
}})
}}},onStoreInitialized:function(c,e,b){if(b===true){b=CQ_Analytics.ClientContextUtils.DEFAULT_INIT_DELAY
}var d=function(){var f=CQ_Analytics.StoreRegistry.getStore(c);
if(f.DELAYED_INIT_TIMEOUT){window.clearTimeout(f.DELAYED_INIT_TIMEOUT);
f.DELAYED_INIT_TIMEOUT=null
}if(b>0){f.DELAYED_INIT_TIMEOUT=window.setTimeout(function(){f.DELAYED_INIT_TIMEOUT=null;
e.call(f,"initialize",f)
},b)
}else{e.call(f,"initialize",f)
}};
var a=CQ_Analytics.StoreRegistry.getStore(c);
if(a){if(a.isInitialized()){d.call(a);
a.addListener("initialize",function(g,f){d.call(f)
})
}else{a.addListener("initialize",function(g,f){d.call(f)
})
}}else{CQ_Analytics.CCM.addListener("storeregister",function(g,f){if(f.getName()==c){CQ_Analytics.ClientContextUtils.onStoreInitialized(c,e,b)
}})
}},init:function(d,c){CQ_Analytics.ClientContextMgr.PATH=d;
CQ_Analytics.ClientContextMgr.loadConfig(null,true);
var a=CQ.shared.HTTP.externalize(d+"/content/jcr:content/stores.init.js");
a=CQ.shared.HTTP.addParameter(a,"path",c);
a=CQ.shared.HTTP.noCaching(a);
var b=CQ.shared.HTTP.get(a)
},initUI:function(b,a){CQ_Analytics.ClientContextUI.create(b,a)
}}
};
CQ_Analytics.ClientContextUtils.DEFAULT_INIT_DELAY=200;
CQ_Analytics.Variables=new function(){return{containsVariable:function(a){return CQ_Analytics.Variables.getVariables(a).length>0
},getVariables:function(b){if(!b||typeof(b)!="string"){return[]
}var a=b.match(new RegExp("\\$\\{([\\w/]*)\\}","ig"));
return a?a:[]
},replaceVariables:function(e){if(!e){return e
}var f="";
var d=e;
var g=CQ_Analytics.Variables.getVariables(e);
while(g.length>0&&f.indexOf(g.join())==-1){for(var c=0;
c<g.length;
c++){var b=g[c].substring(2,g[c].length-1);
var a=CQ_Analytics.ClientContext.get(b)||"";
d=CQ_Analytics.Variables.replace(d,b,a)
}f+=g.join();
g=CQ_Analytics.Variables.getVariables(d)
}return d
},replace:function(a,b,c){return a.replace(new RegExp("\\$\\{"+b+"\\}","ig"),c)
}}
};
CQ_Analytics.SessionPersistence=CQ.shared.ClientSidePersistence;
CQ_Analytics.Cookie=CQ.shared.ClientSidePersistence.CookieHelper;
CQ_Analytics.Observable=function(){this.fireEvent=function(d){if(d&&this.listeners&&!this.suppressEvents){d=d.toLowerCase();
var b=Array.prototype.slice.call(arguments,0);
var e=this.listeners.slice(0);
for(var c=0;
c<e.length;
c++){var a=e[c];
if(d==a.event){if(a.fireFn.apply(a.scope||this||window,b)===false){return false
}}}}return true
}
};
CQ_Analytics.Observable.prototype.addListener=function(c,a,b){this.listeners=this.listeners||new Array();
if(c&&a){this.listeners.push({event:c.toLowerCase(),fireFn:a,scope:b})
}};
CQ_Analytics.Observable.prototype.removeListener=function(c,a){this.listeners=this.listeners||new Array();
if(c&&a){for(var b=0;
b<this.listeners.length;
b++){if(this.listeners[b].event==c&&this.listeners[b].fireFn==a){this.listeners.splice(b,1)
}}}};
CQ_Analytics.Observable.prototype.setSuppressEvents=function(a){this.suppressEvents=a
};
CQ_Analytics.Observable.prototype.listeners=null;
CQ_Analytics.Observable.prototype.suppressEvents=false;
if(!CQ_Analytics.StoreRegistry){CQ_Analytics.StoreRegistry=new function(){var a={};
return{register:function(b){if(b.STORENAME){a[b.STORENAME]=b
}},getStores:function(){return a
},getStore:function(b){return a[b]
}}
}()
}CQ_Analytics.SessionStore=function(){};
CQ_Analytics.SessionStore.prototype=new CQ_Analytics.Observable();
CQ_Analytics.SessionStore.prototype.setProperty=function(a,b){if(this.data==null){this.init()
}this.data[a]=b;
this.fireEvent("update",a)
};
CQ_Analytics.SessionStore.prototype.setProperties=function(b){if(this.data==null){this.init()
}var d=[];
for(var a in b){if(b.hasOwnProperty(a)){d.push(a);
var c=b[a];
this.data[a]=c
}}if(d.length>0){this.fireEvent("update",d)
}};
CQ_Analytics.SessionStore.prototype.initialized=false;
CQ_Analytics.SessionStore.prototype.init=function(){this.initialized=true;
this.fireEvent("initialize",this)
};
CQ_Analytics.SessionStore.prototype.getLabel=function(a){return a
};
CQ_Analytics.SessionStore.prototype.getLink=function(a){return a
};
CQ_Analytics.SessionStore.prototype.removeProperty=function(a){if(this.data==null){this.init()
}if(this.data[a]){delete this.data[a]
}this.fireEvent("update",a)
};
CQ_Analytics.SessionStore.prototype.getPropertyNames=function(a){if(this.data==null){this.init()
}a=a?a:[];
var b=new Array();
for(var c in this.data){if(CQ_Analytics.Utils.indexOf(a,c)==-1){b.push(c)
}}return b
};
CQ_Analytics.SessionStore.prototype.getSessionStore=function(){return this
};
CQ_Analytics.SessionStore.prototype.clear=function(){this.data=null
};
CQ_Analytics.SessionStore.prototype.getData=function(b){if(this.data==null){this.init()
}if(b){var a={};
for(var c in this.data){if(CQ_Analytics.Utils.indexOf(b,c)==-1){a[c]=this.data[c]
}}return a
}else{return this.data
}};
CQ_Analytics.SessionStore.prototype.reset=function(){if(this.data!=null){this.data=null;
this.fireEvent("update")
}};
CQ_Analytics.SessionStore.prototype.getProperty=function(b,a){if(this.data==null){this.init()
}var d=this.data[b];
if(!a){var c=CQ.shared.XSS.getXSSValue(d);
return c
}return d
};
CQ_Analytics.SessionStore.prototype.getName=function(){return this.STORENAME
};
CQ_Analytics.SessionStore.prototype.addInitProperty=function(a,b){if(!this.initProperty){this.initProperty={}
}this.initProperty[a]=b
};
CQ_Analytics.SessionStore.prototype.getInitProperty=function(a){return this.initProperty?this.initProperty[a]:null
};
CQ_Analytics.SessionStore.prototype.loadInitProperties=function(c,a){if(c){for(var b in c){this.addInitProperty(b,c[b]);
if(a&&this.data&&this.data[b]===undefined){this.setProperty(b,c[b])
}}}};
CQ_Analytics.SessionStore.prototype.isInitialized=function(){return this.initialized
};
CQ_Analytics.PersistedSessionStore=function(){};
CQ_Analytics.PersistedSessionStore.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.PersistedSessionStore.prototype.STOREKEY="key";
CQ_Analytics.PersistedSessionStore.prototype.setNonPersisted=function(a){if(!this.nonPersisted){this.nonPersisted={}
}this.nonPersisted[a]=true
};
CQ_Analytics.PersistedSessionStore.EXCLUDED_PROPERTIES_REGEX="^generated*";
CQ_Analytics.PersistedSessionStore.prototype.isPersisted=function(a){if(!this.nonPersisted){this.nonPersisted={}
}return this.nonPersisted[a]!==true&&!new RegExp(CQ_Analytics.PersistedSessionStore.EXCLUDED_PROPERTIES_REGEX,"ig").test(a)&&!$CQ.isFunction(this.data[a])&&(typeof this.data[a])!="object"
};
CQ_Analytics.PersistedSessionStore.prototype.getStoreKey=function(){return this.STOREKEY
};
CQ_Analytics.PersistedSessionStore.prototype.persist=function(){if(this.fireEvent("beforepersist")!==false){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.set(this.getStoreKey(),this.toString());
this.fireEvent("persist")
}};
CQ_Analytics.PersistedSessionStore.prototype.setProperty=function(a,b){if(this.data==null){this.init()
}this.data[a]=b;
if(this.isPersisted(a)){this.persist()
}this.fireEvent("update",a)
};
CQ_Analytics.PersistedSessionStore.prototype.setProperties=function(b){if(this.data==null){this.init()
}var d=[];
var e=false;
for(var a in b){if(b.hasOwnProperty(a)){d.push(a);
var c=b[a];
this.data[a]=c;
if(this.isPersisted(a)){e=true
}}}if(e){this.persist()
}if(d.length>0){this.fireEvent("update",d)
}};
CQ_Analytics.PersistedSessionStore.prototype.toString=function(){var b=null;
if(this.data){var a=function(e){if(!e||typeof(e)!="string"){return e
}var d=e;
d=d.replace(new RegExp(",","g"),"&#44;");
d=d.replace(new RegExp("=","g"),"&#61;");
d=d.replace(new RegExp("\\|","g"),"&#124;");
return d
};
for(var c in this.data){if(this.isPersisted(c)&&this.data.hasOwnProperty(c)){b=(b===null?"":b+",");
b+=(c+"="+a(this.data[c]))
}}}return b
};
CQ_Analytics.PersistedSessionStore.prototype.parse=function(e){var d=function(h){if(!h||typeof(h)!="string"){return h
}var g=h;
g=g.replace(new RegExp("&#44;","g"),",");
g=g.replace(new RegExp("&#61;","g"),"=");
g=g.replace(new RegExp("&#124;","g"),"|");
return g
};
var c={};
var f=e.split(",");
for(var a in f){if(f.hasOwnProperty(a)){var b=f[a].split("=");
if(b.length==2){c[b[0]]=d(b[1])
}}}return c
};
CQ_Analytics.PersistedSessionStore.prototype.reset=function(a){if(this.data!=null){this.data={};
this.persist();
this.data=null;
if(!a){this.fireEvent("update")
}}};
CQ_Analytics.PersistedSessionStore.prototype.removeProperty=function(a){if(this.data==null){this.init()
}if(this.data[a]){delete this.data[a];
if(this.isPersisted(a)){this.persist()
}}this.fireEvent("update",a)
};
CQ_Analytics.PersistedSessionStore.prototype.clear=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.remove(this.getStoreKey());
this.data=null
};
if(!CQ_Analytics.ClientContextMgr){CQ_Analytics.ClientContextMgr=function(){this.clientcontext=null;
this.clientcontextToServer=null;
this.stores={};
this.data=null;
this.config=null;
this.isConfigLoaded=false;
this.areStoresLoaded=false
};
CQ_Analytics.ClientContextMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.ClientContextMgr.prototype.STOREKEY="CLIENTCONTEXT";
CQ_Analytics.ClientContextMgr.prototype.STORENAME="clientcontext";
CQ_Analytics.ClientContextMgr.prototype.INITIALIZATION_EVENT_TIMER=1000;
CQ_Analytics.ClientContextMgr.prototype.CONFIG_PATH=CQ_Analytics.Utils.externalize("/etc/clientcontext/legacy/config.json",true);
CQ_Analytics.ClientContextMgr.prototype.init=function(){if(!this.initialized){this.clientcontext={};
this.clientcontextToServer={}
}var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var b=a.get(this.getStoreKey());
if(b){this.data=this.parse(b)
}else{this.data={}
}this.initialized=true;
this.fireEvent("initialize",this)
};
CQ_Analytics.ClientContextMgr.prototype.getSessionId=function(){if(!this.data.sessionId){this.setSessionId(CQ_Analytics.Utils.getUID())
}return this.data.sessionId
};
CQ_Analytics.ClientContextMgr.prototype.setSessionId=function(a){if(a){this.setProperty("sessionId",a)
}};
CQ_Analytics.ClientContextMgr.prototype.getVisitorId=function(){return this.data.visitorId
};
CQ_Analytics.ClientContextMgr.prototype.setVisitorId=function(a){this.setProperty("visitorId",a)
};
CQ_Analytics.ClientContextMgr.prototype.getId=function(){var a=this.getVisitorId();
if(!a){return this.getSessionId()
}return a
};
CQ_Analytics.ClientContextMgr.prototype.isAnonymous=function(){var a=this.getVisitorId();
return(!a)
};
CQ_Analytics.ClientContextMgr.prototype.isMode=function(a){return CQ_Analytics.ClientContextMgr.ServerStorage.isMode(a)
};
CQ_Analytics.ClientContextMgr.prototype.get=function(a){if(this.clientcontext==null){this.init()
}if(a){return this.clientcontextToServer
}return this.clientcontext
};
CQ_Analytics.ClientContextMgr.prototype.register=function(c){if(this.clientcontext==null){this.init()
}var a=this;
this.clientcontext[c.getName()]=c.getData();
this.stores[c.getName()]=c;
CQ_Analytics.StoreRegistry.register(c);
var b=this.getStoreConfig(c.getName());
if(b.stats!==false&&b.stats!="false"){this.clientcontextToServer[c.getName()]=c.getData(b.excludedFromStats)
}if(this.initTimer){window.clearTimeout(this.initTimer);
this.initTimer=null
}this.initTimer=window.setTimeout(function(){a.fireEvent("storesinitialize");
a.areStoresInitialized=true
},this.INITIALIZATION_EVENT_TIMER);
c.addListener("update",function(){a.update(c)
});
CQ_Analytics.ClientContextMgr.ServerStorage.handleStoreRegistration(c);
this.addListener("clear",function(){c.clear()
});
this.fireEvent("storeregister",c);
this.fireEvent("storeupdate",c)
};
CQ_Analytics.ClientContextMgr.prototype.update=function(b){if(this.clientcontext==null){this.init()
}this.clientcontext[b.getName()]=b.getData();
var a=this.getStoreConfig(b.getName());
if(a.stats!==false&&a.stats!="false"){this.clientcontextToServer[b.getName()]=b.getData(a.excludedFromStats)
}this.fireEvent("storeupdate",b)
};
CQ_Analytics.ClientContextMgr.prototype.startPosting=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.startPosting()
};
CQ_Analytics.ClientContextMgr.prototype.stopPosting=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.stopPosting()
};
CQ_Analytics.ClientContextMgr.prototype.post=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.post()
};
CQ_Analytics.ClientContextMgr.prototype.getCCMToJCR=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.getCCMToJCR()
};
CQ_Analytics.ClientContextMgr.prototype.getName=function(){return this.STORENAME
};
CQ_Analytics.ClientContextMgr.prototype.clear=function(){this.clientcontext=null;
this.clientcontextToServer=null;
this.fireEvent("clear")
};
CQ_Analytics.ClientContextMgr.prototype.getRegisteredStore=function(a){return this.stores&&this.stores[a]?this.stores[a]:null
};
CQ_Analytics.ClientContextMgr.prototype.loadConfig=function(c,autoConfig){var setConfig=function(ccm,config){ccm.config=config;
ccm.isConfigLoaded=true;
ccm.fireEvent("configloaded");
ccm.fireEvent("storesloaded");
ccm.areStoresLoaded=true
};
if(c){setConfig(this,c)
}else{if(!autoConfig){var params={};
params.path=CQ_Analytics.Utils.getPagePath();
params.cq_ck=new Date().valueOf();
var url=this.CONFIG_PATH;
url+="?"+CQ_Analytics.Utils.urlEncode(params);
CQ_Analytics.Utils.load(url,function(data,status,response){var config={};
try{config=eval("config = "+response.responseText)
}catch(error){}setConfig(this,config)
},this)
}else{setConfig(this,{})
}}};
CQ_Analytics.ClientContextMgr.prototype.getConfig=function(){return this.config
};
CQ_Analytics.ClientContextMgr.prototype.getStoreConfig=function(a){if(this.config&&this.config.configs&&this.config.configs[a]&&this.config.configs[a]["store"]){return this.config.configs[a]["store"]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getEditConfig=function(a){if(this.config&&this.config.configs&&this.config.configs[a]&&this.config.configs[a]["edit"]){return this.config.configs[a]["edit"]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getUIConfig=function(a){if(this.config&&this.config.configs&&this.config.configs[a]&&this.config.configs[a]["ui"]){return this.config.configs[a]["ui"]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getInitialData=function(a){if(this.config&&this.config.data&&this.config.data[a]){return this.config.data[a]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getStores=function(){return this.stores
};
CQ_Analytics.ClientContextMgr.prototype.onReady=function(b,a){if(b){if(this.areStoresLoaded){b.call(a)
}else{this.addListener("storesloaded",b,a)
}}};
CQ_Analytics.ClientContextMgr=CQ_Analytics.CCM=new CQ_Analytics.ClientContextMgr();
CQ_Analytics.ClickstreamcloudMgr=CQ_Analytics.CCM;
CQ_Analytics.ContextCloudMgr=CQ_Analytics.CCM;
CQ_Analytics.ClientContextMgr.PATH=null;
CQ_Analytics.ClientContextMgr.getClientContextURL=function(a){return CQ_Analytics.ClientContextMgr.PATH+a
};
window.setTimeout(function(){CQ_Analytics.CCM.init()
},1);
CQ_Analytics.Utils.addListener(window,"unload",function(){try{for(var b in CQ_Analytics.ClientContextMgr){delete CQ_Analytics.ClientContextMgr[b]
}CQ_Analytics.ClientContextMgr=null
}catch(a){}CQ_Analytics.CCM=null
})
}if(CQ_Analytics.ClientContextMgr&&!CQ_Analytics.ClientContextMgr.ServerStorage){CQ_Analytics.ClientContextMgr.ServerStorage=function(){this.posting=false;
this.initialized=false
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_PAGELOAD=1;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_TIMER=2;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_DATAUPDATE=4;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_TIMER=600;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_PROCESS_TIMER=60;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE=6;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_PATH="/var/statistics/";
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.init=function(){if(this.isMode(CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_TIMER)){var a=this;
var b=function(){a.timer=window.setInterval(function(){try{var d=parseInt(a.data.lastPost);
var f=false;
if(isNaN(d)){f=true
}else{var e=new Date().getTime();
if(e>d+CQ_Analytics.ClientContextMgr.ServerStorage.POST_TIMER*1000){f=true
}}}catch(c){}if(f){a.post()
}},CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER*1000)
};
b.call(this)
}this.initialized=true
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.isMode=function(a){return(CQ_Analytics.CCM.POST_MODE&a)>0
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.handleStoreRegistration=function(a){if(!this.initialized){this.init()
}if(this.isMode(CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_DATAUPDATE)){a.addListener("persist",function(){CQ_Analytics.ClientContextMgr.ServerStorage.post(a)
})
}};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.startPosting=function(){this.posting=true
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.stopPosting=function(){this.posting=false
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.post=function(d,f){if(this.posting||f){try{var g=this.getCCMToJCR(d);
var e=CQ_Analytics.Utils.getTimestamp();
g["./jcr:primaryType"]="nt:unstructured";
g["./sessionId"]=CQ_Analytics.CCM.getSessionId();
var c=this.POST_PATH+"clientcontext/";
if(CQ_Analytics.CCM.isAnonymous()){var a=CQ_Analytics.Utils.insert(CQ_Analytics.CCM.getId(),2,"/");
c+="anonymous/"+a+"/"+e
}else{c+="users/"+CQ_Analytics.CCM.getId()+"/"+e
}CQ_Analytics.Utils.post(c,null,g);
this.lastPost=e
}catch(b){}}};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.getCCMToJCR=function(g){var c=CQ_Analytics.CCM.get(true);
var e={};
for(var j in c){if(!g||j==g){var a=c[j],b=encodeURIComponent(j);
var f=typeof a;
if(f=="object"){for(var d in a){var h=a[d];
d=d.replace(":","/");
e["./"+j+"/./"+d]=h
}}else{e["./"+j]=a
}}}return e
};
CQ_Analytics.ClientContextMgr.ServerStorage=new CQ_Analytics.ClientContextMgr.ServerStorage();
CQ_Analytics.ClickstreamcloudMgr.POST_MODE_PAGELOAD=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_PAGELOAD;
CQ_Analytics.ClickstreamcloudMgr.POST_MODE_TIMER=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_TIMER;
CQ_Analytics.ClickstreamcloudMgr.POST_MODE_DATAUPDATE=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_DATAUPDATE;
CQ_Analytics.ClickstreamcloudMgr.POST_TIMER=CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER;
CQ_Analytics.ClickstreamcloudMgr.POST_PROCESS_TIMER=CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER;
CQ_Analytics.ClickstreamcloudMgr.POST_MODE=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE;
CQ_Analytics.ClickstreamcloudMgr.POST_PATH=CQ_Analytics.ClientContextMgr.ServerStorage.POST_PATH
}CQ_Analytics.Percentile={};
CQ_Analytics.Percentile.matchesPercentiles=function(b){var d=ClientContext.get("/surferinfo/percentile");
if(!d){d=Math.round(Math.random()*100);
ClientContext.set("/surferinfo/percentile",d)
}for(var c=0;
c<b.length;
c++){var a=b[c];
if((a.start<=d)&&(d<a.end)){return true
}}return false
};
if(!CQ_Analytics.SegmentMgr){CQ_Analytics.SegmentMgr=function(){this.SEGMENTATION_ROOT="/etc/segmentation";
this.SEGMENT_SELECTOR=".segment.js";
this.SEGMENTATION_SCRIPT_LOADER="cq-segmentation-loader";
this.segments={};
this.boosts={};
var a=this;
this.fireUpdate=function(){a.fireEvent("update")
};
this.init()
};
CQ_Analytics.SegmentMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.SegmentMgr.prototype.STORENAME="segments";
CQ_Analytics.SegmentMgr.prototype.register=function(a,c,b){this.segments[a]=c;
if(this.rulesCache&&this.rulesCache[a]){this.rulesCache[a]=false
}this.boosts[a]=!isNaN(b)?parseInt(b):0;
this.fireUpdate()
};
CQ_Analytics.SegmentMgr.prototype.resolveArray=function(e,g,b){g=g||CQ_Analytics.ClientContextMgr.get();
if(!(e instanceof Array)){return this.resolve(e,g)
}b=(b=="AND"?"AND":"OR");
var a=(b=="AND");
for(var d=0;
d<e.length;
d++){var f=e[d];
var c=this.resolve(f,g);
if(b=="AND"){if(c!==true){return c
}}else{if(c===true){return true
}}}return a
};
CQ_Analytics.SegmentMgr.prototype.resolve=function(segmentPath,clientcontext){clientcontext=clientcontext||CQ_Analytics.ClientContextMgr.get();
if(!segmentPath){return false
}if(segmentPath instanceof Array){return this.resolveArray(segmentPath,clientcontext)
}if(segmentPath.indexOf(this.SEGMENTATION_ROOT)!=0){return false
}if(segmentPath==this.SEGMENTATION_ROOT){return true
}if(!this.segments[segmentPath]){return true
}var parent=segmentPath.substring(0,segmentPath.lastIndexOf("/"));
if(parent.indexOf(this.SEGMENTATION_ROOT)==0){var pres=this.resolve(parent,clientcontext);
if(pres!==true){return pres
}}var rules="function(clientcontext, contextcloud, clickstreamcloud) { return true ";
rules+=" && ( "+this.segments[segmentPath]+" ) ";
rules+=";}";
var res=true;
try{var f=null;
this.rulesCache=this.rulesCache||{};
if(this.rulesCache[segmentPath]){f=this.rulesCache[segmentPath]
}else{eval("f = "+rules+"");
this.rulesCache[segmentPath]=f
}var e=(f==null||f(clientcontext,clientcontext,clientcontext));
res=res&&(e===true)
}catch(error){return"Unresolved - Error while evaluating segment "+segmentPath+" : "+error.message
}return res
};
CQ_Analytics.SegmentMgr.prototype.getResolved=function(c){c=c||CQ_Analytics.ClientContextMgr.get();
var a=new Array();
for(var b in this.segments){if(this.resolve(b,c)===true){a.push(b)
}}return a
};
CQ_Analytics.SegmentMgr.prototype.getMaxBoost=function(e,g){if(!(e instanceof Array)){return this.getBoost(e)
}var c=0;
for(var d=0;
d<e.length;
d++){var f=e[d];
if(this.resolve(f,g)===true){var a=this.boosts[f]||0;
if(a>c){c=a
}}}return c
};
CQ_Analytics.SegmentMgr.prototype.getBoost=function(a){if(!(a instanceof Array)){a=[a]
}return this.boosts[a]||0
};
CQ_Analytics.SegmentMgr.prototype.reload=function(path){var url=path;
if(!url){url=this.SEGMENTATION_ROOT
}if(url){if(url.indexOf(this.SEGMENT_SELECTOR)==-1){url+=this.SEGMENT_SELECTOR
}try{CQ_Analytics.Utils.load(url,function(config,status,response){if(response&&response.responseText){eval(response.responseText)
}},this);
var response=CQ.HTTP.get(scripts[i].src)
}catch(err){}}};
CQ_Analytics.SegmentMgr.prototype.getSessionStore=function(){return this
};
CQ_Analytics.SegmentMgr.prototype.getProperty=function(a){return a
};
CQ_Analytics.SegmentMgr.prototype.getLink=function(a){return a+".html"
};
CQ_Analytics.SegmentMgr.prototype.getLabel=function(c){if(c){var b=c;
var a=b.lastIndexOf("/");
if(a!=-1){b=b.substring(a+1,b.length)
}var d=this.resolve(c);
if(d===true){return b
}else{if(d!==true){return'<span class="invalid" title="'+d+'" alt="'+d+'">'+b+"</span>"
}}}return c
};
CQ_Analytics.SegmentMgr.prototype.getPropertyNames=function(){return this.getResolved()
};
CQ_Analytics.SegmentMgr=new CQ_Analytics.SegmentMgr();
CQ_Analytics.SegmentMgr.loadSegments=function(a){CQ_Analytics.SegmentMgr.areSegmentsLoaded=false;
CQ.shared.HTTP.get(CQ.shared.HTTP.externalize(a+".segment.js"));
CQ_Analytics.SegmentMgr.areSegmentsLoaded=true;
this.fireEvent("segmentsload")
};
CQ_Analytics.SegmentMgr.renderer=function(a,c){if(a&&a.STORENAME==CQ_Analytics.SegmentMgr.STORENAME){var e=a.getPropertyNames();
var f=[];
f.push("<div>");
for(var d=0;
d<e.length;
d++){var b=e[d];
f.push('<span title="'+a.getProperty(b)+'" ><a href="'+CQ.shared.HTTP.externalize(a.getLink(b))+'"  title="'+a.getProperty(b)+'" >'+a.getLabel(b)+"</a></span>")
}f.push("</div>");
$CQ("#"+c).children().remove();
$CQ("#"+c).append(f.join(""))
}};
CQ_Analytics.ClientContextMgr.addListener("storeupdate",CQ_Analytics.SegmentMgr.fireUpdate);
CQ_Analytics.Utils.addListener(window,"unload",function(){try{for(var b in CQ_Analytics.SegmentMgr){delete CQ_Analytics.SegmentMgr[b]
}}catch(a){}CQ_Analytics.SegmentMgr=null
})
}if(!CQ_Analytics.StrategyMgr){CQ_Analytics.StrategyMgr=function(){this.strategies={}
};
CQ_Analytics.StrategyMgr.prototype={};
CQ_Analytics.StrategyMgr.prototype.isRegistered=function(a){return !!this.strategies[a]
};
CQ_Analytics.StrategyMgr.prototype.register=function(b,a){if(typeof a=="function"){this.strategies[b]=a
}};
CQ_Analytics.StrategyMgr.prototype.choose=function(b,a){if(a.length==1){return a[0]
}if(this.strategies[b]){return this.strategies[b].call(this,a)
}return null
};
CQ_Analytics.StrategyMgr=new CQ_Analytics.StrategyMgr()
}CQ_Analytics.StrategyMgr.register("clickstream-score",function(h){if(h.length==1){return h[0]
}var a=[];
if(CQ_Analytics.TagCloudMgr){var m=CQ_Analytics.TagCloudMgr.getTags();
m=m||{};
var l=-1;
for(var e=0;
e<h.length;
e++){var g=0;
var k=h[e].tags;
if(k){for(var d=0;
d<k.length;
d++){var f=k[d].tagID;
g+=parseInt(m[f])||0
}}if(g==l){a.push(h[e])
}else{if(g>l){a=[];
a.push(h[e]);
l=g
}}}}else{a=h
}if(a.length==1){return a[0]
}var b=null;
if(CQ_Analytics.PageDataMgr){b=CQ_Analytics.PageDataMgr.getProperty("random")
}if(!b){b=window.CQ_StrategyRandom
}if(!b){b=window.CQ_StrategyRandom=Math.random()
}if(parseFloat(b)>1){b=1/b
}if(parseFloat(b)==1){b=0
}var c=Math.floor(b*a.length);
return a[c]
});
CQ_Analytics.StrategyMgr.register("first",function(a){return a[0]
});
CQ_Analytics.StrategyMgr.register("random",function(c){var a=null;
if(CQ_Analytics.PageDataMgr){a=CQ_Analytics.PageDataMgr.getProperty("random")
}if(!a){a=window.CQ_StrategyRandom
}if(!a){a=window.CQ_StrategyRandom=Math.random()
}if(parseFloat(a)>1){a=1/a
}if(parseFloat(a)==1){a=0
}var b=Math.floor(a*c.length);
return c[b]
});
if(!CQ_Analytics.PageDataMgr){CQ_Analytics.PageDataMgr=function(){};
CQ_Analytics.PageDataMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.PageDataMgr.prototype.STORENAME="pagedata";
CQ_Analytics.PageDataMgr.prototype.FORCE_EXPERIENCE_COOKIE="cq-forceexperience";
CQ_Analytics.PageDataMgr.prototype.init=function(){this.data={};
for(var a in this.initProperty){this.data[a]=this.initProperty[a]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.PageDataMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.PageDataMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.PageDataMgr.prototype.setExperience=function(a){CQ.shared.HTTP.setCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE,a,"/")
};
CQ_Analytics.PageDataMgr.prototype.getExperience=function(){return CQ.shared.HTTP.getCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE,"/")
};
CQ_Analytics.PageDataMgr.prototype.clearExperience=function(){CQ.shared.HTTP.clearCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE,"/")
};
CQ_Analytics.PageDataMgr=new CQ_Analytics.PageDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){this.loadInitProperties(CQ_Analytics.CCM.getInitialData(this.getName()));
this.init();
CQ_Analytics.CCM.register(this)
},CQ_Analytics.PageDataMgr)
}CQ_Analytics.BrowserInfo=function(){var g=navigator.userAgent.toLowerCase();
var d=function(b){return b.test(g)
};
var f=function(){if(d(/opera/)){return{browserFamily:"Opera",browserVersion:""}
}if(d(/chrome/)){return{browserFamily:"Chrome",browserVersion:""}
}if(d(/safari/)){if(d(/applewebkit\/4/)){return{browserFamily:"Safari",browserVersion:"2"}
}if(d(/version\/3/)){return{browserFamily:"Safari",browserVersion:"3"}
}if(d(/version\/4/)){return{browserFamily:"Safari",browserVersion:"4"}
}if(d(/version\/5/)){return{browserFamily:"Safari",browserVersion:"5"}
}if(d(/version\/6/)){return{browserFamily:"Safari",browserVersion:"6"}
}return{browserFamily:"Safari",browserVersion:"7 or higher"}
}if(d(/webkit/)){return{browserFamily:"WebKit",browserVersion:""}
}if(d(/msie/)){if(d(/msie 6/)){return{browserFamily:"IE",browserVersion:"6"}
}if(d(/msie 7/)){return{browserFamily:"IE",browserVersion:"7"}
}if(d(/msie 8/)){return{browserFamily:"IE",browserVersion:"8"}
}if(d(/msie 9/)){return{browserFamily:"IE",browserVersion:"9"}
}if(d(/msie 10/)){return{browserFamily:"IE",browserVersion:"10"}
}return{browserFamily:"IE",browserVersion:"11 or higher"}
}if(d(/gecko/)){if(d(/rv:1\.8/)){return{browserFamily:"Firefox",browserVersion:"2"}
}if(d(/rv:1\.9/)){return{browserFamily:"Firefox",browserVersion:"3"}
}if(d(/rv:2.0/)){return{browserFamily:"Firefox",browserVersion:"4"}
}if(d(/rv:5./)){return{browserFamily:"Firefox",browserVersion:"5"}
}if(d(/rv:6./)){return{browserFamily:"Firefox",browserVersion:"6"}
}if(d(/rv:7./)){return{browserFamily:"Firefox",browserVersion:"7"}
}if(d(/rv:8./)){return{browserFamily:"Firefox",browserVersion:"8"}
}if(d(/rv:9./)){return{browserFamily:"Firefox",browserVersion:"9"}
}return{browserFamily:"Firefox",browserVersion:"10 or higher"}
}var b=d(/adobeair/);
if(b){return{browserFamily:"Adobe AIR",browserVersion:""}
}return{browserFamily:"Unresolved",browserVersion:"Unresolved"}
};
var e=function(){if(d(/windows 98|win98/)){return"Windows 98"
}if(d(/windows nt 5.0|windows 2000/)){return"Windows 2000"
}if(d(/windows nt 5.1|windows xp/)){return"Windows XP"
}if(d(/windows nt 5.2/)){return"Windows Server 2003"
}if(d(/windows nt 6.0/)){return"Windows Vista"
}if(d(/windows nt 6.1/)){return"Windows 7"
}if(d(/windows nt 4.0|winnt4.0|winnt/)){return"Windows NT 4.0"
}if(d(/windows me/)){return"Windows ME"
}if(d(/mac os x/)){if(d(/ipad/)||d(/iphone/)){return"iOS"
}return"Mac OS X"
}if(d(/macintosh|mac os/)){return"Mac OS"
}if(d(/android/)){return"Android"
}if(d(/linux/)){return"Linux"
}return"Unresolved"
};
var c=function(){if(d(/ipad/)){return"iPad"
}if(d(/iphone/)){return"iPhone"
}if(d(/mobi/)){return"Mobile"
}return"Desktop"
};
var a=f.call();
this.browserFamily=a.browserFamily;
this.browserVersion=a.browserVersion;
this.OSName=e.call();
this.deviceType=c.call();
this.ua=g;
var h=/^https/i.test(window.location.protocol);
this.screenResolution=screen.width+"x"+screen.height
};
CQ_Analytics.BrowserInfo.prototype={getBrowserName:function(){return this.browserFamily+" "+this.browserVersion
},getBrowserFamily:function(){return this.browserFamily
},getBrowserVersion:function(){return this.browserVersion
},getOSName:function(){return this.OSName
},getScreenResolution:function(){return this.screenResolution
},getDeviceType:function(){return this.deviceType
},getUserAgent:function(){return this.ua
},isMobile:function(a){if(!a){a=this.getDeviceType()
}a=a?a.toLowerCase():"desktop";
return a!="desktop"
},isIE:function(a){return this.getBrowserFamily()=="IE"&&(a?this.getBrowserVersion()==a:true)
},isIE6:function(){return this.isIE("6")
},isIE7:function(){return this.isIE("7")
},isIE8:function(){return this.isIE("8")
},isIE9:function(){return this.isIE("9")
}};
CQ_Analytics.BrowserInfoInstance=new CQ_Analytics.BrowserInfo();
if(!CQ_Analytics.MousePositionMgr){CQ_Analytics.MousePositionMgr=function(){this.position={x:0,y:0};
this.getPageX=function(c){var b=c.pageX;
if(!b&&0!==b){b=c.clientX||0
}return b
};
this.getPageY=function(b){var c=b.pageY;
if(!c&&0!==c){c=b.clientY||0
}return c
};
var a=this;
this.timer=null;
$CQ(document).bind("mousemove",function(h,g,f,l){var j=h||window.event;
if(j){if(!a.timer){var d=a.getPageX(j);
var k=a.getPageY(j);
a.timer=setTimeout(function(){a.setPosition(d,k);
a.timer=null
},500)
}}});
this.init()
};
CQ_Analytics.MousePositionMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.MousePositionMgr.prototype.STORENAME="mouseposition";
CQ_Analytics.MousePositionMgr.prototype.setPosition=function(a,b){this.position.x=a;
this.position.y=b;
this.fireEvent("update")
};
CQ_Analytics.MousePositionMgr.prototype.getProperty=function(a){return this.position[a]
};
CQ_Analytics.MousePositionMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.MousePositionMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.MousePositionMgr.prototype.getPropertyNames=function(){var a=new Array();
for(var b in this.position){a.push(b)
}return a
};
CQ_Analytics.MousePositionMgr.prototype.getSessionStore=function(){return this
};
CQ_Analytics.MousePositionMgr.prototype.getData=function(a){return this.position
};
CQ_Analytics.MousePositionMgr.prototype.clear=function(){this.position={}
};
CQ_Analytics.MousePositionMgr=new CQ_Analytics.MousePositionMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this)
},CQ_Analytics.MousePositionMgr)
}if(!CQ_Analytics.EventDataMgr){CQ_Analytics.EventDataMgr=function(){};
CQ_Analytics.EventDataMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.EventDataMgr.prototype.STORENAME="eventdata";
CQ_Analytics.EventDataMgr.prototype.init=function(){this.data={};
for(var a in this.initProperty){this.data[a]=this.initProperty[a]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.EventDataMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.EventDataMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.EventDataMgr=new CQ_Analytics.EventDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){this.loadInitProperties(CQ_Analytics.CCM.getInitialData(this.getName()));
this.init();
CQ_Analytics.CCM.register(this)
},CQ_Analytics.EventDataMgr)
}if(!window.CQ_Context){window.CQ_Context=function(){};
window.CQ_Context.prototype=new CQ_Analytics.Observable();
window.CQ_Context.prototype.getProfile=function(){return(function(){return{getUserId:function(){return this.getProperty("authorizableId")
},getDisplayName:function(){var a=this.getProperty("formattedName");
if(a){return a
}a=this.getProperty("displayName");
if(a){return a
}return this.getUserId()
},getFirstname:function(){return this.getProperty("givenName")
},getLastname:function(){return this.getProperty("familyName")
},getEmail:function(){return this.getProperty("email")
},getProperty:function(a){if(CQ_Analytics&&CQ_Analytics.ProfileDataMgr){return CQ_Analytics.ProfileDataMgr.getProperty(a)
}return""
},getProperties:function(){if(CQ_Analytics&&CQ_Analytics.ProfileDataMgr){return CQ_Analytics.ProfileDataMgr.getData()
}return{}
},getAvatar:function(){return this.getProperty("avatar")
},onUpdate:function(a,b){if(a&&CQ_Analytics&&CQ_Analytics.ProfileDataMgr){CQ_Analytics.ProfileDataMgr.addListener("update",a,b||this)
}}}
})()
};
window.CQ_Context=new window.CQ_Context()
}CQ_Analytics.Engine=function(){window.CQ_trackTeasersStats=true;
function h(){return !!(window.CQ&&CQ.WCM&&CQ.WCM.isEditMode())
}function c(m){var k=$CQ.Deferred();
var l=CQ.WCM.getEditable(m);
if(l){k.resolve(l)
}else{CQ.WCM.onEditableReady(m,function(n){k.resolve(n)
})
}return k.promise()
}function f(l,k){if(!CQ_Analytics.loadedTeasersStack){CQ_Analytics.loadedTeasersStack=[];
$CQ(window).unload(function(){try{var m=CQ_Analytics.loadedTeasersStack;
if(m){delete CQ_Analytics.loadedTeasersStack;
var o=k;
for(var p=0;
p<m.length;
p++){o=CQ.shared.HTTP.addParameter(o,"path",m[p])
}CQ.shared.HTTP.get(o,function(){})
}}catch(n){}})
}CQ_Analytics.loadedTeasersStack.push(l.path)
}function d(q,p,m){var o="",r;
function k(x,w,y,v){return'<a href="'+w+'" class="cq-teaser-segment-link"><img src="'+y+'" class="cq-teaser-decision-thumbnail '+(v?"cq-teaser-decision-match":"cq-teaser-decision-nomatch")+'"></a>'+x+"<br>"
}for(var n=0;
n<q.length;
n++){var l=q[n];
var u=CQ.shared.HTTP.externalize(l.teaser.path+".html");
if(l.hasOwnProperty("boost")){if(l.noSegment){r=CQ.I18n.getMessage("Experience: {0} - match (no segments, boost = {1})",[l.teaser.title,l.boost])
}else{r=CQ.I18n.getMessage("Experience: {0} - match (boost = {1})",[l.teaser.title,l.boost])
}var t=k(r,u,l.teaser.thumbnail,true);
if(p===l.teaser.path){o+="<b>"+t+"</b>"
}else{o+=t
}}else{if(l.unknownSegment){r=CQ.I18n.getMessage("Experience: {0} - no match (unknown segment)",[l.teaser.title])
}else{r=CQ.I18n.getMessage("Experience: {0} - no match",[l.teaser.title])
}o+=k(r,u,l.teaser.thumbnail,false)
}}o+="<br>";
if(m){o+=CQ.I18n.getMessage("Strategy <b>{0}</b> selected current teaser.",m)
}else{o+=CQ.I18n.getMessage("No strategy configured, used the first match.")
}o+="<br>";
return o
}function j(m,l,k,n){m.done(function(o){if(o.teaserToolTip){o.teaserToolTip.hide();
o.teaserToolTip.remove()
}o.teaserToolTip=new CQ.Ext.Tip({html:d(l,k,n),title:CQ.I18n.getMessage("Selection decision"),width:450,autoHide:false,closable:true,height:300,floating:true,autoHeight:false,bodyStyle:"overflow-y: scroll;"});
o.on(CQ.wcm.EditRollover.EVENT_SHOW_HIGHTLIGHT,function(p){if(!this.teaserInfoButton){this.teaserInfoButton=CQ.Ext.DomHelper.append("CQ",{tag:"div",cls:"x-tool x-tool-help cq-teaser-tooltip-tool"},true);
this.teaserInfoButton.position("absolute");
this.teaserInfoButton.on("click",function(){var q=this.getXY();
o.teaserToolTip.setPosition(q[0]-460,q[1]-100);
o.teaserToolTip.show()
})
}this.teaserInfoButton.anchorTo(p.frameBottom.getEl(),"tr",[-26,-15]);
this.teaserInfoButton.show()
});
o.on(CQ.wcm.EditRollover.EVENT_HIDE_HIGHTLIGHT,function(p){if(this.teaserInfoButton){this.teaserInfoButton.hide()
}})
})
}function g(k){k.done(function(l){if(l.teaserToolTip){l.teaserToolTip.hide();
l.teaserToolTip.remove();
l.teaserToolTip=null
}})
}function b(u,t){var o=[];
var q=0;
for(var m=0;
m<u.length;
m++){var l=u[m],p=l.segments;
var k;
if(t){k={teaser:l};
t.push(k)
}var n=!p||p.length===0;
if(n&&k){k.noSegment=true
}if(!n&&CQ_Analytics.SegmentMgr.resolve(p)){n=true;
if(p&&p.length>0){if(!CQ_Analytics.SegmentMgr.segments[p[0]]){n=false;
if(k){k.unknownSegment=true
}}}}if(n){var r=CQ_Analytics.SegmentMgr.getMaxBoost(p);
if(k){k.boost=r
}if(r===q){o.push(l)
}else{if(r>q){o=[];
o.push(l);
q=r
}}}}return o
}var a={};
function e(k,l){CQ_Analytics.Engine.stopTeaserLoader(k);
a[k]=l
}return{stopTeaserLoader:function(l){var k=l.path||l;
if(!k){return
}var m=a[k];
if(m){CQ_Analytics.SegmentMgr.removeListener("update",m);
delete a[k]
}},resolveTeaser:function(n,m,k){var l=b(n,k);
if(l.length===0){return null
}return CQ_Analytics.StrategyMgr.choose(m,l)||l[0]
},loadTeaser:function(k){var n,m;
if(h()){m=CQ.WCM.getEditablePathFromDOM(document.getElementById(k.targetID));
n=c(m)
}var o=ClientContext.get("campaign");
if(o&&o.isCampaignSelected()){return
}var l=function(){var r=CQ_Analytics.PageDataMgr.getExperience();
if(r){CQ_Analytics.PageDataMgr.clearExperience();
var t="/_jcr_content/par.html";
if(h()){t+="?wcmmode=disabled"
}CQ_Analytics.Utils.loadElement(r+t,k.targetID);
return
}var q=null;
var p=function(){var v=null;
if(h()){v=[]
}var w=CQ_Analytics.Engine.resolveTeaser(k.teasers,k.strategy,v);
if(w){if(!q||q.path!==w.path){q=w;
var u=w.url;
if(h()){u+="?wcmmode=disabled"
}CQ_Analytics.Utils.loadTeaserElement(u,k.targetID);
if(window.CQ_trackTeasersStats&&k.trackingURL){f(w,k.trackingURL)
}if(n){j(n,v,q.path,k.strategy)
}}}else{if(n){g(n)
}CQ_Analytics.Utils.clearElement(k.targetID);
q=null
}};
p.call();
if(CQ_Analytics.SegmentMgr){if(m){e(m,p)
}CQ_Analytics.SegmentMgr.addListener("update",p)
}};
if(CQ_Analytics.CCM.areStoresInitialized){l.call(this)
}else{CQ_Analytics.CCM.addListener("storesinitialize",l)
}}}
}();
window.CQ_trackTeasersStats=true;
function initializeTeaserLoader(b,f,g,e,a,d){e=!!(CQ.Ext&&(e=="true"||e===true));
if(window.CQ_Analytics){var c=function(){var n="/_jcr_content/par.html";
if(e){n+="?wcmmode=disabled"
}var l=CQ_Analytics.PageDataMgr.getExperience();
if(l){CQ_Analytics.PageDataMgr.clearExperience();
CQ_Analytics.Utils.loadElement(l+n,g);
return
}var m=function(q){var t="";
var x=new Array();
if(CQ_Analytics.SegmentMgr){var v=0;
for(var r=0;
r<b.length;
r++){var u=CQ.shared.HTTP.externalize(b[r].path+".html");
if(!b[r]["segments"]||b[r]["segments"].length==0||CQ_Analytics.SegmentMgr.resolveArray(b[r]["segments"])===true){var o=CQ_Analytics.SegmentMgr.getMaxBoost(b[r]["segments"]);
var w=[b[r]["title"],o,b[r].thumbnail,u];
if(q==b[r].path){t+=CQ.I18n.getMessage('<b><a href="{3}" class="cq-teaser-segment-link"><img src="{2}" class="cq-teaser-decision-thumbnail cq-teaser-decision-match"></a>Experience: {0} - match ( boost = {1} )</b><br>',w)
}else{t+=CQ.I18n.getMessage('<a href="{3}" class="cq-teaser-segment-link"><img src="{2}" class="cq-teaser-decision-thumbnail cq-teaser-decision-match"></a>Experience: {0} - match ( boost = {1} )<br>',w)
}if(o==v){x.push(b[r])
}else{if(o>v){x=new Array();
x.push(b[r]);
v=o
}}}else{var w=[b[r]["title"],b[r].thumbnail,u];
t+=CQ.I18n.getMessage('<a href="{2}" class="cq-teaser-segment-link"><img src="{1}" class="cq-teaser-decision-thumbnail cq-teaser-decision-nomatch"></a>Experience: {0} - no match<br>',w)
}}}t+=CQ.I18n.getMessage("<br>Strategy <b>{0}</b> selected current teaser.<br>",f);
return t
};
var k=null;
var h=null;
var j=function(){var w=new Array();
if(CQ_Analytics.SegmentMgr){var u=0;
for(var r=0;
r<b.length;
r++){if(!b[r]["segments"]||b[r]["segments"].length==0||CQ_Analytics.SegmentMgr.resolveArray(b[r]["segments"])===true){var o=CQ_Analytics.SegmentMgr.getMaxBoost(b[r]["segments"]);
if(o==u){w.push(b[r])
}else{if(o>u){w=new Array();
w.push(b[r]);
u=o
}}}}}if(w.length>0){var v=w[0];
if(CQ_Analytics.StrategyMgr){var t=CQ_Analytics.StrategyMgr.choose(f,w);
if(t!=null){v=t
}}if(!k||k.path!=v.path){k=v;
var p=v.path+n;
p=CQ.shared.HTTP.addSelectors(p,CQ.shared.HTTP.getSelectors(window.location.href));
CQ_Analytics.Utils.loadTeaserElement(p,g);
if(window.CQ_trackTeasersStats&&a){if(!CQ_Analytics.loadedTeasersStack){CQ_Analytics.loadedTeasersStack=[];
$CQ(window).unload(function(){try{var x=CQ_Analytics.loadedTeasersStack;
if(x){delete CQ_Analytics.loadedTeasersStack;
var z=a;
for(var A=0;
A<x.length;
A++){z=CQ.shared.HTTP.addParameter(z,"path",x[A])
}CQ.shared.HTTP.get(z,function(){})
}}catch(y){}})
}CQ_Analytics.loadedTeasersStack.push(v.path)
}if(e){if(d){var q=CQ.WCM.getEditable(d);
if(q){if(q&&q.teaserToolTip){q.teaserToolTip.hide();
q.teaserToolTip.remove();
q.teaserToolTip=null
}else{q.on(CQ.wcm.EditRollover.EVENT_SHOW_HIGHTLIGHT,function(x){if(!this.teaserInfoButton){this.teaserInfoButton=CQ.Ext.DomHelper.append("CQ",{tag:"div",cls:"x-tool x-tool-help cq-teaser-tooltip-tool"},true);
this.teaserInfoButton.position("absolute");
this.teaserInfoButton.on("click",function(){if(!q.teaserToolTip){q.teaserToolTip=new CQ.Ext.Tip({html:m(k.path),title:CQ.I18n.getMessage("Selection decision"),width:450,autoHide:false,closable:true,height:300,floating:true,autoHeight:false,bodyStyle:"overflow-y: scroll;"})
}var y=this.getXY();
q.teaserToolTip.setPosition(y[0]-460,y[1]-100);
q.teaserToolTip.show()
})
}this.teaserInfoButton.anchorTo(x.frameBottom.getEl(),"tr",[-26,-15]);
this.teaserInfoButton.show()
});
q.on(CQ.wcm.EditRollover.EVENT_HIDE_HIGHTLIGHT,function(x){if(this.teaserInfoButton){this.teaserInfoButton.hide()
}})
}}}}}}else{if(e){var q=CQ.WCM.getEditable(d);
if(q&&q.teaserToolTip){q.teaserToolTip.hide();
q.teaserToolTip.remove();
q.teaserToolTip=null
}}CQ_Analytics.Utils.clearElement(g);
k=null
}};
j.call();
if(CQ_Analytics.SegmentMgr){CQ_Analytics.SegmentMgr.addListener("update",j)
}};
if(CQ_Analytics.CCM.areStoresInitialized){c.call(this)
}else{CQ_Analytics.CCM.addListener("storesinitialize",c)
}}}window.CQ_trackLandingPagesStats=true;
function initializeLandingPageLoader(f,d,e,c,a){c=CQ.Ext&&(c=="true"||c===true);
if(window.CQ_Analytics){var g=".html";
var b=function(){var j=null;
var h=function(){var l=new Array();
if(CQ_Analytics.SegmentMgr){var t=0;
for(var p=0;
p<f.length;
p++){if(!f[p]["segments"]||f[p]["segments"].length==0||CQ_Analytics.SegmentMgr.resolveArray(f[p]["segments"])===true){var w=CQ_Analytics.SegmentMgr.getMaxBoost(f[p]["segments"]);
if(w==t){l.push(f[p])
}else{if(w>t){l=new Array();
l.push(f[p]);
t=w
}}}}}if(l.length>0){var o=l[0];
if(CQ_Analytics.StrategyMgr){var u=CQ_Analytics.StrategyMgr.choose(d,l);
if(u!=null){o=u
}}if(!j||j.path!=o.path){var y=j;
j=o;
var n=CQ.shared.HTTP.get(o.path+g);
var z=n.responseText;
var q=function(L,B){var I="";
if(L&&L.indexOf('id="'+B+'"')!=-1){var H=L.indexOf('id="'+B+'"');
var C=L.substring(0,H).lastIndexOf("<div");
var G=L.substring(C);
var K=G.split(new RegExp("<div","ig"));
var E=0;
for(var F=0;
F<K.length;
F++){E++;
var J=K[F].split(new RegExp("</div","ig"));
for(var D=1;
D<J.length;
D++){E--;
if(E==1){var A=K[F].lastIndexOf("</div")+6;
A=G.indexOf(K[F])+A;
G=G.substring(0,A);
G=G.substring(G.indexOf(">")+1,G.lastIndexOf("</div"));
return G
}}}}return""
};
z=q(z,e);
var v=$CQ("#"+e)[0];
var r=function(C,A){if(c){var D=CQ.WCM.getEditables();
for(var E in D){var B=D[E];
if(!C||B.path.indexOf(C)!=-1){B.hide();
B.remove()
}}}};
var m=document.createElement("div");
m.innerHTML=z;
if(y){$CQ("object",v).parent().fadeOut("slow");
$CQ("img",v).fadeOut("slow");
$CQ(v).slideUp("slow",function(){r(y.path,false);
$CQ(v).children().remove();
var A=v.insertBefore(m,v.firstChild);
$CQ(v).slideDown("slow",function(){if(c){CQ.DOM.executeScripts(CQ.Ext.get(m))
}})
})
}else{var k=v.insertBefore(m,v.firstChild);
$CQ(v).slideDown("slow",function(){if(c){CQ.DOM.executeScripts(CQ.Ext.get(m))
}})
}try{if(window.CQ_trackLandingPagesStats&&a){if(!CQ_Analytics.loadedLandingPagesStack){CQ_Analytics.loadedLandingPagesStack=[];
$CQ(window).unload(function(){try{var D=CQ_Analytics.loadedLandingPagesStack;
if(D){delete CQ_Analytics.loadedLandingPagesStack;
var B=a;
for(var C=0;
C<D.length;
C++){B=CQ.shared.HTTP.addParameter(B,"path",D[C])
}CQ.shared.HTTP.get(B,function(){})
}}catch(A){}})
}CQ_Analytics.loadedLandingPagesStack.push(o.path)
}}catch(x){}}}else{CQ_Analytics.Utils.clearElement(e);
j=null
}};
h.call();
if(CQ_Analytics.SegmentMgr){CQ_Analytics.SegmentMgr.addListener("update",h)
}};
if(CQ_Analytics.ClickstreamcloudMgr){if(CQ_Analytics.ClickstreamcloudMgr.areStoresLoaded){b.call(this)
}else{CQ_Analytics.ClickstreamcloudMgr.addListener("storesloaded",b)
}}}}CQ_Analytics.PersistedJSONStore=function(){};
CQ_Analytics.PersistedJSONStore.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.PersistedJSONStore.prototype.STOREKEY="";
CQ_Analytics.PersistedJSONStore.prototype.STORENAME="";
CQ_Analytics.PersistedJSONStore.prototype.init=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var b=a.get(this.getStoreKey());
if(!b||b==""){this.data={};
for(var c in this.initProperty){this.data[c]=this.initProperty[c]
}}else{this.data=this.parse(b)
}this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.PersistedJSONStore.prototype.clear=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.remove(this.getStoreKey());
this.data=null;
this.initProperty={}
};
CQ_Analytics.PersistedJSONStore.prototype.initJSON=function(b,c){if(!c){this.initProperty={}
}var a=function(g,d,f){for(var e in f){if(typeof f[e]=="object"){a(g,d?d+"/"+e:e,f[e])
}else{g[d?d+"/"+e:e]=f[e]
}}};
a(this.initProperty,null,b)
};
CQ_Analytics.PersistedJSONStore.prototype.getJSON=function(){var e=this.getData();
var c={};
for(var g in e){var d=g.split("/");
var f=c;
for(var b=0;
b<d.length;
b++){var a=d[b];
if(b==d.length-1){f[a]=e[g]
}else{f[a]=f[a]||{};
f=f[a]
}}}return c
};
CQ_Analytics.PersistedJSONStore.getInstance=function(a,c){var b=new CQ_Analytics.PersistedJSONStore();
b.STOREKEY=a.toUpperCase();
b.STORENAME=a;
b.initJSON(c);
return b
};
CQ_Analytics.PersistedJSONStore.registerNewInstance=function(a,b){var c=CQ_Analytics.PersistedJSONStore.getInstance(a,b);
c.init();
CQ_Analytics.CCM.register(c);
return c
};
CQ_Analytics.JSONStore=function(){};
CQ_Analytics.JSONStore.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.JSONStore.prototype.STOREKEY="";
CQ_Analytics.JSONStore.prototype.STORENAME="";
CQ_Analytics.JSONStore.prototype.init=function(){this.data={};
for(var a in this.initProperty){this.data[a]=this.initProperty[a]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.JSONStore.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.JSONStore.prototype.initJSON=function(b,c){if(!c){this.initProperty={}
}var a=function(g,d,f){for(var e in f){if(typeof f[e]=="object"){a(g,d?d+"/"+e:e,f[e])
}else{g[d?d+"/"+e:e]=f[e]
}}};
a(this.initProperty,null,b)
};
CQ_Analytics.JSONStore.prototype.getJSON=function(){var e=this.getData();
var c={};
for(var g in e){var d=g.split("/");
var f=c;
for(var b=0;
b<d.length;
b++){var a=d[b];
if(b==d.length-1){f[a]=e[g]
}else{f[a]=f[a]||{};
f=f[a]
}}}return c
};
CQ_Analytics.JSONStore.getInstance=function(a,c){var b=new CQ_Analytics.JSONStore();
b.STOREKEY=a.toUpperCase();
b.STORENAME=a;
b.initJSON(c);
return b
};
CQ_Analytics.JSONStore.registerNewInstance=function(a,b){var c=CQ_Analytics.JSONStore.getInstance(a,b);
c.init();
CQ_Analytics.CCM.register(c);
return c
};
CQ_Analytics.PersistedJSONPStore=function(){};
CQ_Analytics.PersistedJSONPStore.prototype=new CQ_Analytics.PersistedJSONStore();
CQ_Analytics.PersistedJSONPStore.prototype.setServiceURL=function(a){this.serviceURL=a
};
CQ_Analytics.PersistedJSONPStore.prototype.getServiceURL=function(){return this.serviceURL
};
CQ_Analytics.PersistedJSONPStore.prototype.load=function(d,a,e){var c=this.getName();
if(!CQ_Analytics.PersistedJSONPStore.JSONPCallbacks[this.getName()]){CQ_Analytics.PersistedJSONPStore.JSONPCallbacks[c]=function(g){var f=CQ_Analytics.CCM.getRegisteredStore(c);
if(f){f.initJSON(g);
if(a){f.initJSON(a,true)
}}if(e){e.call(f)
}}
}if(d){this.setServiceURL(d)
}var b=this.serviceURL;
b=b.replace("${callback}","CQ_Analytics.PersistedJSONPStore.JSONPCallbacks."+c);
$CQ.getScript(b)
};
CQ_Analytics.PersistedJSONPStore.JSONPCallbacks={};
CQ_Analytics.PersistedJSONPStore.getInstance=function(e,f,b,a,d){if(e&&f){try{var g=new CQ_Analytics.PersistedJSONPStore();
g.STOREKEY=e.toUpperCase();
g.STORENAME=e;
if(f){g.setServiceURL(f)
}if(!a){g.load(f,b,d)
}return g
}catch(c){console.log("Cannot create the JSONP store",e,f,c)
}}return null
};
CQ_Analytics.PersistedJSONPStore.registerNewInstance=function(d,e,b,f){if(!e){return null
}if(!d){var a=CQ.shared.HTTP.getSchemeAndAuthority(e);
if(a){if(a.indexOf(".")!=-1){a=a.substring(0,a.lastIndexOf("."));
d=a.substring(a.lastIndexOf(".")+1)
}else{d=a.substring(a.lastIndexOf("/")+1)
}}else{d=e
}}var c=CQ_Analytics.PersistedJSONPStore.getInstance(d,e,b,false,function(){this.init();
this.reset();
if(f){f.call(this)
}});
if(c!=null){CQ_Analytics.CCM.register(c);
return c
}return null
};
CQ_Analytics.JSONPStore=function(){};
CQ_Analytics.JSONPStore.prototype=new CQ_Analytics.JSONStore();
CQ_Analytics.JSONPStore.prototype.setServiceURL=function(a){this.serviceURL=a
};
CQ_Analytics.JSONPStore.prototype.getServiceURL=function(){return this.serviceURL
};
CQ_Analytics.JSONPStore.prototype.load=function(d,a,e){var c=this.getName();
if(!CQ_Analytics.JSONPStore.JSONPCallbacks[this.getName()]){CQ_Analytics.JSONPStore.JSONPCallbacks[c]=function(g){var f=CQ_Analytics.CCM.getRegisteredStore(c);
if(f){f.initJSON(g);
if(a){f.initJSON(a,true)
}}if(e){e.call(f)
}}
}if(d){this.setServiceURL(d)
}var b=this.serviceURL;
b=b.replace("${callback}","CQ_Analytics.JSONPStore.JSONPCallbacks."+c);
$CQ.getScript(b)
};
CQ_Analytics.JSONPStore.JSONPCallbacks={};
CQ_Analytics.JSONPStore.getInstance=function(e,f,b,a,d){if(e){try{var g=new CQ_Analytics.JSONPStore();
g.STOREKEY=e.toUpperCase();
g.STORENAME=e;
if(f){g.setServiceURL(f);
if(!a){g.load(f,b,d)
}}return g
}catch(c){console.log("Cannot create the JSONP store",e,f,c)
}}return null
};
CQ_Analytics.JSONPStore.registerNewInstance=function(d,e,b,f){if(!d&&e){var a=CQ.shared.HTTP.getSchemeAndAuthority(e);
if(a){if(a.indexOf(".")!=-1){a=a.substring(0,a.lastIndexOf("."));
d=a.substring(a.lastIndexOf(".")+1)
}else{d=a.substring(a.lastIndexOf("/")+1)
}}else{d=e
}}var c=CQ_Analytics.JSONPStore.getInstance(d,e,b,false,function(){this.init();
this.reset();
if(f){f.call(this)
}});
if(c!=null){CQ_Analytics.CCM.register(c);
return c
}return null
};
CQ_Analytics.record=function(d){if(d.collect){return[d.event,d.values]
}else{if(d.event){d.options=d.options||{};
try{CQ_Analytics.recordBeforeCallbacks.sort(function(j,h){return j.rank-h.rank
});
for(var g in CQ_Analytics.recordBeforeCallbacks){if(CQ_Analytics.recordBeforeCallbacks[g].func.call(this,d)){return
}}}catch(e){}var a=d.dataMgr||CQ_Analytics.EventDataMgr;
a.reset();
if(typeof d.event=="string"){a.setProperty("events",d.event)
}else{a.setProperty("events",d.event.join("\u2026"))
}if(d.values){for(var c in d.values){var b=a;
var f=c.split(".");
if(c.indexOf(".")>=0&&CQ_Analytics.StoreRegistry.getStore(f[0])){b=CQ_Analytics.StoreRegistry.getStore(f[0]);
f=f[1]
}b.setProperty(f,d.values[c])
}}try{CQ_Analytics.recordAfterCallbacks.sort(function(j,h){return j.rank-h.rank
});
for(var g in CQ_Analytics.recordAfterCallbacks){if(CQ_Analytics.recordAfterCallbacks[g].func.call(this,d)){return
}}}catch(e){}}}};
CQ_Analytics.recordBeforeCallbacks=[];
CQ_Analytics.recordAfterCallbacks=[];
CQ_Analytics.registerBeforeCallback=function(b,a){CQ_Analytics.recordBeforeCallbacks.push({rank:a,func:b})
};
CQ_Analytics.registerAfterCallback=function(b,a){CQ_Analytics.recordAfterCallbacks.push({rank:a,func:b})
};
if(!CQ_Analytics.ClientContext){CQ_Analytics.ClientContext=new function(){return{get:function(f,c){if(f){if(f.indexOf("/")!=0){f="/"+f
}var d=f.split("/")[1];
var b=f.substring(f.indexOf("/"+d)+d.length+2,f.length);
var a=CQ_Analytics.CCM.getRegisteredStore(d);
if(a){if(b){var e=a.getProperty(b);
if(e&&c){e=CQ_Analytics.Variables.replaceVariables(e)
}return e
}return a
}}return null
},set:function(e,d){if(e){if(e.indexOf("/")!=0){e="/"+e
}var c=e.split("/")[1];
var b=e.substring(e.indexOf("/"+c)+c.length+2,e.length);
var a=CQ_Analytics.CCM.getRegisteredStore(c);
if(a){if(b){a.setProperty(b,d)
}}}},clear:function(){var a=CQ_Analytics.CCM.getStores();
if(a){for(var b in a){if(a[b].clear){a[b].clear()
}}}},reset:function(){var a=CQ_Analytics.CCM.getStores();
if(a){for(var b in a){if(a[b].reset){a[b].reset()
}}}},persist:function(a){CQ_Analytics.ClientContextMgr.ServerStorage.post(a,true)
}}
}();
window.ClientContext=CQ_Analytics.ClientContext;
window.ContextCloud=CQ_Analytics.ClientContext
}if(!CQ_Analytics.ClientContext){CQ_Analytics.ClientContext=new function(){return{get:function(f,c){if(f){if(f.indexOf("/")!=0){f="/"+f
}var d=f.split("/")[1];
var b=f.substring(f.indexOf("/"+d)+d.length+2,f.length);
var a=CQ_Analytics.CCM.getRegisteredStore(d);
if(a){if(b){var e=a.getProperty(b);
if(e&&c){e=CQ_Analytics.Variables.replaceVariables(e)
}return e
}return a
}}return null
},set:function(e,d){if(e){if(e.indexOf("/")!=0){e="/"+e
}var c=e.split("/")[1];
var b=e.substring(e.indexOf("/"+c)+c.length+2,e.length);
var a=CQ_Analytics.CCM.getRegisteredStore(c);
if(a){if(b){a.setProperty(b,d)
}}}},clear:function(){var a=CQ_Analytics.CCM.getStores();
if(a){for(var b in a){if(a[b].clear){a[b].clear()
}}}},reset:function(){var a=CQ_Analytics.CCM.getStores();
if(a){for(var b in a){if(a[b].reset){a[b].reset()
}}}},persist:function(a){CQ_Analytics.ClientContextMgr.ServerStorage.post(a,true)
}}
}();
window.ClientContext=CQ_Analytics.ClientContext;
window.ContextCloud=CQ_Analytics.ClientContext
}if(CQ_Analytics&&!CQ_Analytics.TwitterProfileDataMgr){CQ_Analytics.TwitterProfileDataMgr=function(){};
CQ_Analytics.TwitterProfileDataMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.TwitterProfileDataMgr.prototype.STOREKEY="TWITTERPROFILEDATA";
CQ_Analytics.TwitterProfileDataMgr.prototype.STORENAME="twitterprofile";
CQ_Analytics.TwitterProfileDataMgr.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.TwitterProfileDataMgr.prototype.init=function(){if(!this.data){this.data={};
for(var a in this.initProperty){this.data[a]=this.initProperty[a]
}}};
CQ_Analytics.TwitterProfileDataMgr.prototype.getLoaderURL=function(){return CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/twitterprofiledata/loader.json")
};
CQ_Analytics.TwitterProfileDataMgr.prototype.loadProfile=function(authorizableId){CQ_Analytics.TwitterProfileDataMgr.lastUid=authorizableId;
var url=this.getLoaderURL();
url=CQ_Analytics.Utils.addParameter(url,"authorizableId",authorizableId);
try{var object=CQ.shared.HTTP.eval(url);
if(object){this.data={};
for(var p in object){this.data[p]=object[p]
}this.fireEvent("update");
if(CQ_Analytics.ClickstreamcloudEditor){CQ_Analytics.ClickstreamcloudEditor.reload()
}return true
}}catch(error){if(console&&console.log){console.log("Error during profile loading",error)
}}return false
};
CQ_Analytics.TwitterProfileDataMgr=new CQ_Analytics.TwitterProfileDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this)
},CQ_Analytics.TwitterProfileDataMgr)
}if(!CQ_Analytics.FacebookProfileDataMgr){CQ_Analytics.FacebookProfileDataMgr=function(){};
CQ_Analytics.FacebookProfileDataMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.FacebookProfileDataMgr.prototype.STOREKEY="FBPROFILEDATA";
CQ_Analytics.FacebookProfileDataMgr.prototype.STORENAME="facebookprofile";
CQ_Analytics.FacebookProfileDataMgr.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.FacebookProfileDataMgr.prototype.init=function(){if(!this.data){this.data={};
for(var a in this.initProperty){this.data[a]=this.initProperty[a]
}}};
CQ_Analytics.FacebookProfileDataMgr.prototype.getLoaderURL=function(){return CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/fbprofiledata/loader.json")
};
CQ_Analytics.FacebookProfileDataMgr.prototype.loadProfile=function(authorizableId){CQ_Analytics.FacebookProfileDataMgr.lastUid=authorizableId;
var url=this.getLoaderURL();
url=CQ_Analytics.Utils.addParameter(url,"authorizableId",authorizableId);
try{var object=CQ.shared.HTTP.eval(url);
if(object){this.data={};
for(var p in object){this.data[p]=object[p]
}this.fireEvent("update");
this.fireEvent("checkBirthday");
if(CQ_Analytics.ClickstreamcloudEditor){CQ_Analytics.ClickstreamcloudEditor.reload()
}return true
}}catch(error){if(console&&console.log){console.log("Error during profile loading",error)
}}return false
};
CQ_Analytics.FacebookProfileDataMgr=new CQ_Analytics.FacebookProfileDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this)
},CQ_Analytics.FacebookProfileDataMgr)
}if(!CQ_Analytics.FacebookInterestsMgr){CQ_Analytics.FacebookInterestsMgr=function(){};
CQ_Analytics.FacebookInterestsMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.FacebookInterestsMgr.prototype.STOREKEY="FBINTERESTSDATA";
CQ_Analytics.FacebookInterestsMgr.prototype.STORENAME="fbinterests";
CQ_Analytics.FacebookInterestsMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.FacebookInterestsMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.FacebookInterestsMgr.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.FacebookInterestsMgr.prototype.getLoaderURL=function(){return CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/fbinterestsdata/loader.json")
};
CQ_Analytics.FacebookInterestsMgr.prototype.loadProfile=function(authorizableId){if(authorizableId){var url=this.getLoaderURL();
url=CQ_Analytics.Utils.addParameter(url,"authorizableId",authorizableId);
CQ_Analytics.FacebookInterestsMgr.lastUid=authorizableId;
try{var object=CQ.shared.HTTP.eval(url);
if(object){this.data={};
for(var p in object){this.data[p]=object[p]
}if(CQ_Analytics.ClickstreamcloudEditor){CQ_Analytics.ClickstreamcloudEditor.reload()
}return true
}}catch(error){if(console&&console.log){console.log("Error during profile loading",error)
}}}return false
};
CQ_Analytics.FacebookInterestsMgr=new CQ_Analytics.FacebookInterestsMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this)
},CQ_Analytics.FacebookInterestsMgr)
}if(!CQ_Analytics.ViewedProducts){CQ_Analytics.ViewedProducts=function(){this.data=null;
this.MAX_COUNT=20
};
CQ_Analytics.ViewedProducts.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.ViewedProducts.prototype.STOREKEY="VIEWEDPRODUCTS";
CQ_Analytics.ViewedProducts.prototype.STORENAME="viewedproducts";
CQ_Analytics.ViewedProducts.prototype.record=function(c,d,b){if(!this.data){this.init()
}for(var a=0;
a<this.data.length;
a++){if(this.data[a].path==c){this.data.splice(a,1);
break
}}if(this.data.length==this.MAX_COUNT){this.data.shift()
}this.data.push({path:c,title:d,image:b});
this.persist();
this.fireEvent("update")
};
CQ_Analytics.ViewedProducts.prototype.mostRecent=function(){if(!this.data){this.init()
}if(this.data.length>0){return this.data[this.data.length-1]
}else{return null
}};
CQ_Analytics.ViewedProducts.prototype.mostRecentNotInCart=function(){if(!this.data){this.init()
}if(!CQ_Analytics.CartMgr){return this.mostRecent()
}for(var a=this.data.length-1;
a>=0;
a--){var b=this.data[a];
if(!CQ_Analytics.CartHelper.containsProduct(CQ_Analytics.CartMgr.getData(),b.path,1)){return b
}}return null
};
CQ_Analytics.ViewedProducts.prototype.getData=function(a){if(!this.data){this.init()
}return this.data
};
CQ_Analytics.ViewedProducts.prototype.init=function(){var b=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var d=b.get(this.getStoreKey());
d=d===null?"":new String(d);
var e=d.split(";");
this.data=[];
for(var c=0;
c<e.length;
c++){var a=e[c].split(",");
if(a.length>=3){this.data.push({path:a[0],title:a[1],image:a[2]})
}}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.ViewedProducts.prototype.persist=function(){if(this.fireEvent("beforepersist")!==false){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var d=[];
for(var b=0;
b<this.data.length;
b++){var c=this.data[b];
d.push(c.path+","+c.title+","+c.image)
}a.set(this.getStoreKey(),d.join(";"));
this.fireEvent("persist")
}};
CQ_Analytics.ViewedProducts.prototype.reset=function(){this.clear();
this.fireEvent("update")
};
CQ_Analytics.ViewedProducts.prototype.clear=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.remove(this.getStoreKey());
this.data=[]
};
CQ_Analytics.ViewedProducts=new CQ_Analytics.ViewedProducts();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this)
},CQ_Analytics.ViewedProducts)
}if(!CQ_Analytics.TagCloudMgr){CQ_Analytics.TagCloudMgr=function(){this.data=null;
this.addedTags={};
this.frequencies=null;
this.initialTags=null;
this.initialAddedTags={};
this.copyObject=function(c){var b={};
for(var a in c){b[a]=c[a]
}return b
}
};
CQ_Analytics.TagCloudMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.TagCloudMgr.prototype.STOREKEY="TAGCLOUD";
CQ_Analytics.TagCloudMgr.prototype.STORENAME="tagcloud";
CQ_Analytics.TagCloudMgr.prototype.parseTagList=function(a){var c={};
var b=a.split(",");
for(var d in b){if(b.hasOwnProperty(d)){var e=b[d].split("=");
if(e.length==2){c[e[0]]=parseInt(e[1])
}}}return c
};
CQ_Analytics.TagCloudMgr.prototype.parseString=function(a){this.data=this.parseTagList(a);
return this
};
CQ_Analytics.TagCloudMgr.prototype.add=function(a){this.addedTags[a]=true;
this.data[a]=(this.data[a]||0)+1
};
CQ_Analytics.TagCloudMgr.prototype.each=function(b){for(var a in this.data){if(this.data.hasOwnProperty(a)){b(a,this.data[a])
}}};
CQ_Analytics.TagCloudMgr.prototype.calculateFrequencies=function(){var c={};
var a=[];
this.each(function(d,e){if(!c[e]){a.push(e)
}c[e]=true
});
a.sort(function b(e,d){if(e>d){return 1
}if(e<d){return -1
}return 0
});
return a
};
CQ_Analytics.TagCloudMgr.prototype.calculateNtile=function(b,c){if(this.frequencies===null){this.frequencies=this.calculateFrequencies()
}var a=0;
while(true){if((a>=(this.frequencies.length-1))||(this.frequencies[a]>=b)){return Math.ceil((a+1)/this.frequencies.length*c)
}a++
}};
CQ_Analytics.TagCloudMgr.prototype.getTags=function(){return this.data
};
CQ_Analytics.TagCloudMgr.prototype.getData=function(a){return this.getTags()
};
CQ_Analytics.TagCloudMgr.prototype.getTag=function(a){return this.data[a]>0?this.data[a]:0
};
CQ_Analytics.TagCloudMgr.prototype.init=function(a){var b=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var d=b.get(this.getStoreKey());
d=d===null?"":new String(d);
this.data=this.parseTagList(d);
if(a){for(var c in a){if(a.hasOwnProperty(c)){this.add(a[c])
}}}this.initialTags=this.copyObject(this.data);
this.initialAddedTags=this.copyObject(this.addedTags);
this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.TagCloudMgr.prototype.setProperty=function(a,b){if(this.data==null){this.init()
}if(b>0){this.addedTags[a]=true;
this.data[a]=b>0?b:0
}else{delete this.addedTags[a];
delete this.data[a]
}this.persist();
this.fireEvent("update")
};
CQ_Analytics.TagCloudMgr.prototype.reset=function(){this.clear();
this.fireEvent("update")
};
CQ_Analytics.TagCloudMgr.prototype.getProperty=function(a){if(this.data==null){this.init()
}return this.data[a]>0?this.data[a]:0
};
CQ_Analytics.TagCloudMgr.prototype.removeProperty=function(a){if(this.data==null){this.init()
}this.setProperty(a,0)
};
CQ_Analytics.TagCloudMgr.prototype.clear=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.remove(this.getStoreKey());
this.addedTags={};
this.data={}
};
CQ_Analytics.TagCloudMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.TagCloudMgr.prototype.getLabel=function(b){if(b){var c=b.split(":");
var a=c[c.length-1].split("/");
b=a[a.length-1]
}return b
};
CQ_Analytics.TagCloudMgr=new CQ_Analytics.TagCloudMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this)
},CQ_Analytics.TagCloudMgr)
}if(!CQ_Analytics.SurferInfoMgr){CQ_Analytics.SurferInfoMgr=function(){};
CQ_Analytics.SurferInfoMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.SurferInfoMgr.prototype.STOREKEY="SURFERINFO";
CQ_Analytics.SurferInfoMgr.prototype.STORENAME="surferinfo";
CQ_Analytics.SurferInfoMgr.prototype.init=function(){this.data={};
for(var a in this.initProperty){this.data[a]=this.initProperty[a]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.SurferInfoMgr.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.SurferInfoMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.SurferInfoMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.SurferInfoMgr=new CQ_Analytics.SurferInfoMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){var b=CQ_Analytics.BrowserInfoInstance;
this.addInitProperty("browserFamily",b.getBrowserFamily());
this.addInitProperty("browserVersion",b.getBrowserVersion());
this.addInitProperty("browser","${/surferinfo/browserFamily} ${/surferinfo/browserVersion}");
this.addInitProperty("OS",b.getOSName());
this.addInitProperty("resolution",b.getScreenResolution());
this.addInitProperty("device",b.getDeviceType());
this.addInitProperty("isMobile",b.isMobile());
this.addInitProperty("userAgent",b.getUserAgent());
var a=new Date();
this.addInitProperty("day",a.getDate());
this.addInitProperty("month",a.getMonth()+1);
this.addInitProperty("year",a.getFullYear());
this.addInitProperty("hours",a.getHours());
this.addInitProperty("minutes",a.getMinutes());
var c="${/surferinfo/browserFamily}";
if(b.isMobile()){c="${/surferinfo/device}"
}this.addInitProperty("image",c);
var d=CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/surferinfo/resources/${/surferinfo/image}.png");
this.addInitProperty("thumbnail",d);
if(CQ_Analytics.MousePositionMgr){CQ_Analytics.MousePositionMgr.addListener("update",function(){this.setProperty("mouse X",CQ_Analytics.MousePositionMgr.getProperty("x"));
this.setProperty("mouse Y",CQ_Analytics.MousePositionMgr.getProperty("y"))
},this)
}this.addListener("update",function(){var f=this.getProperty("device");
var g="${/surferinfo/browserFamily}";
if(b.isMobile(f)){g="${/surferinfo/device}"
}var e=this.getProperty("image");
if(e!=g){this.setProperty("image",g)
}},this);
CQ_Analytics.CCM.register(this)
},CQ_Analytics.SurferInfoMgr)
}if(!CQ_Analytics.SocialGraphMgr){CQ_Analytics.SocialGraphMgr=CQ_Analytics.JSONPStore.registerNewInstance("socialgraph");
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this);
CQ_Analytics.ProfileDataMgr.addListener("update",function(){var a=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
if(a!=this.lastUid){this.fireEvent("update")
}},CQ_Analytics.SocialGraphMgr)
},CQ_Analytics.SocialGraphMgr)
}if(CQ_Analytics.SegmentMgr&&!CQ_Analytics.SegmentMgr.isResolvedRegistered){CQ_Analytics.SegmentMgr.isResolvedRegistered=true;
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.StoreRegistry.register(CQ_Analytics.SegmentMgr);
CQ_Analytics.CCM.fireEvent("storeregister",CQ_Analytics.SegmentMgr)
},CQ_Analytics.SegmentMgr)
}if(!CQ_Analytics.ProfileDataMgr){CQ_Analytics.ProfileDataMgr=function(){this.addListener("beforepersist",function(){this.checkAuthorizableId()
},this)
};
CQ_Analytics.ProfileDataMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.ProfileDataMgr.prototype.STOREKEY="PROFILEDATA";
CQ_Analytics.ProfileDataMgr.prototype.STORENAME="profile";
CQ_Analytics.ProfileDataMgr.prototype.LOADER_PATH=CQ_Analytics.Utils.externalize("/libs/cq/personalization/components/profileloader/content/load.js",true);
CQ_Analytics.ProfileDataMgr.prototype.PROFILE_LOADER=CQ_Analytics.Utils.externalize("/libs/cq/personalization/components/profileloader/content/load.json",true);
CQ_Analytics.ProfileDataMgr.prototype.init=function(){this.persistence=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
$CQ(CQ.shared.ClientSidePersistence).bind(CQ.shared.ClientSidePersistence.EVENT_NAME,function(d,f){if(!f){return
}if(((f.key==="CLIENTCONTEXT")||(f.key==="PROFILEDATA"))&&(f.mode!=CQ.shared.ClientSidePersistence.MODE_COOKIE.name)){var c=new CQ.shared.ClientSidePersistence({container:"",mode:CQ.shared.ClientSidePersistence.MODE_COOKIE});
var e=c.get(f.key);
if(f.key==="PROFILEDATA"&&(!e||e=="")){CQ.shared.ClientSidePersistence.clearAllMaps()
}c.set(f.key,f.value)
}});
var a=this.persistence.get(this.getStoreKey());
if(!a||a==""){this.data={};
for(var b in this.initProperty){this.data[b]=this.initProperty[b]
}}else{this.data=this.parse(a)
}this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.ProfileDataMgr.prototype.checkAuthorizableId=function(){if(!this.data){this.init()
}if(this.data.authorizableId){CQ_Analytics.CCM.setVisitorId(this.data.authorizableId)
}else{CQ_Analytics.CCM.setVisitorId("")
}};
CQ_Analytics.ProfileDataMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.ProfileDataMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.ProfileDataMgr.prototype.clear=function(){if(this.persistence){this.persistence.remove(this.getStoreKey())
}this.data=null;
this.initProperty={}
};
CQ_Analytics.ProfileDataMgr.prototype.getLoaderURL=function(){return CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/profiledata/loader.json")
};
CQ_Analytics.ProfileDataMgr.prototype.loadProfile=function(authorizableId){var url=this.getLoaderURL();
url=CQ_Analytics.Utils.addParameter(url,"authorizableId",authorizableId);
try{var object=CQ.shared.HTTP.eval(url);
if(object){this.data={};
for(var p in object){this.data[p]=object[p]
}this.persist();
this.fireEvent("initialize",this);
this.fireEvent("update");
if(CQ_Analytics.ClickstreamcloudEditor){CQ_Analytics.ClickstreamcloudEditor.reload()
}return true
}}catch(error){if(console&&console.log){console.log("Error during profile loading",error)
}}return false
};
CQ_Analytics.ProfileDataMgr=new CQ_Analytics.ProfileDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){this.checkAuthorizableId();
this.addListener("update",function(a,j){if(j=="birthday"||!j){var k=this.getProperty("birthday");
var l=this.getProperty("age");
var g="";
if(k){try{var c=function(o,n){var m=new Date(n.getTime());
m.setUTCHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds());
var p=m.getTime()-o.getTime();
return p/(1000*60*60*24)
};
var d=function(m){var n=new Date(m.getFullYear(),0,0);
return c(m,n)*-1
};
var h=new Date(Date.parse(k));
if(!isNaN(h.getTime())){var f=new Date();
if(d(h)==d(f)&&h.getMonth()==f.getMonth()){g=CQ.shared.HTTP.externalize(CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/profiledata/resources/birthday_cake.png"))
}else{var b=f.getFullYear()-h.getFullYear();
if(d(h)>d(f)){g=b
}else{g=Math.max(0,b-1)
}}}else{g=""
}}catch(e){g=""
}}if(l!=g){this.setProperty("age",g)
}}});
CQ_Analytics.CCM.register(this)
},CQ_Analytics.ProfileDataMgr)
}if(!CQ_Analytics.GeolocationUtils){CQ_Analytics.GeolocationUtils=new function(){return{init:function(b){var d;
try{if(typeof navigator.geolocation==="undefined"){d=google.gears.factory.create("beta.geolocation")
}else{d=navigator.geolocation
}}catch(f){}var a=function(e){var g=CQ_Analytics.PersistedJSONStore.registerNewInstance(b,e);
g.addListener("update",function(h,k){var l=CQ_Analytics.ClientContext.get(b+"/latitude");
var j=CQ_Analytics.ClientContext.get(b+"/longitude");
if(!l||!j){if(k!="generatedThumbnail"){g.setProperty("generatedThumbnail",CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback)
}else{if(g.getProperty(k,true)!=CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback){g.setProperty(k,CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback)
}}}else{if(g.getProperty("generatedThumbnail",true)==CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback){g.setProperty("generatedThumbnail",g.getInitProperty("generatedThumbnail"))
}if(k=="latitude"||k=="longitude"||!k){CQ_Analytics.GeolocationUtils.computeAddress(l,j,b)
}}})
};
var c=function(j,h){var g=CQ_Analytics.StoreRegistry.getStore(b);
if(g){j=j||CQ_Analytics.GeolocationUtils.DEFAULTS;
var e=j.generatedThumbnail=g.getInitProperty("generatedThumbnail");
g.initJSON(j);
if(!h){g.init();
g.setProperty("generatedThumbnail",e)
}}else{a(j)
}};
a();
if(d){d.getCurrentPosition(function(e){var g={longitude:e.coords.longitude,latitude:e.coords.latitude};
if(e.address){g.address=e.address
}c(g,CQ_Analytics.CCM.areStoresInitialized)
},function(e){if(!CQ_Analytics.CCM.areStoresInitialized){var h="Error";
if(CQ_Analytics.isUIAvailable){h=CQ.I18n.getMessage("Connection timeout",null,"timeout while connecting geolocation service");
if(e.code==1){h=CQ.I18n.getMessage("Permission denied",null,"permission denied message from goelocation service")
}else{if(e.code==2){h=CQ.I18n.getMessage("Position unavailable",null,"geolocation service couldn't find location")
}}}var g={address:{country:h}};
c(g,CQ_Analytics.CCM.areStoresInitialized)
}})
}else{c()
}},computeAddress:function(d,b,a){CQ_Analytics.ClientContext.set(a+"/address/region");
CQ_Analytics.ClientContext.set(a+"/address/countryCode");
CQ_Analytics.ClientContext.set(a+"/address/country");
var c=function(){var e=new google.maps.LatLng(d,b);
var f=new google.maps.Geocoder();
f.geocode({location:e},function(g,j){if(j==="OK"&&g[0]&&g[0].address_components){for(var k=0;
k<g[0].address_components.length;
k++){var h=g[0].address_components[k];
if(h.types&&h.types.length){if(h.types[0]=="administrative_area_level_1"){CQ_Analytics.ClientContext.set(a+"/address/region",h.short_name)
}else{if(h.types[0]=="country"){CQ_Analytics.ClientContext.set(a+"/address/countryCode",h.short_name);
CQ_Analytics.ClientContext.set(a+"/address/country",h.long_name)
}}}}}})
};
if(!window.google){window.geocode_callback=c;
$CQ.getScript(document.location.protocol+"//maps.google.com/maps/api/js?sensor=false&callback=geocode_callback")
}else{c.call()
}}}
}();
CQ_Analytics.GeolocationUtils.DEFAULTS={latitude:37.331375,longitude:-121.893992};
CQ_Analytics.GeolocationUtils.THUMBNAILS={fallback:document.location.protocol+"//maps.googleapis.com/maps/api/staticmap?center=37,-121&zoom=0&size=80x80&sensor=false"}
}if(!CQ_Analytics.CartMgr){CQ_Analytics.CartMgr=new CQ_Analytics.SessionStore();
CQ_Analytics.CartMgr.STOREKEY="CART";
CQ_Analytics.CartMgr.STORENAME="cart";
CQ_Analytics.CartMgr.init=function(){if(!this.data){this.data={}
}else{var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var b=a.get(this.STOREKEY);
if(b){var c=b.split("=");
if(c.length>=2){this.referenceTotalPrice=c[0];
this.simulatedTotalPrice=c[1];
this.updateSimulatedPrice()
}}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
}};
CQ_Analytics.CartMgr.persist=function(){if(this.fireEvent("beforepersist")!==false){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var b=null;
if(this.referenceTotalPrice&&this.simulatedTotalPrice){b=this.referenceTotalPrice+"="+this.simulatedTotalPrice
}a.set(this.STOREKEY,b);
this.fireEvent("persist")
}};
CQ_Analytics.CartMgr.updateSimulatedPrice=function(){if(this.simulatedTotalPrice&&this.referenceTotalPrice==this.data.totalPriceFloat){this.data.totalPrice=this.simulatedTotalPrice+"";
this.data.totalPriceFloat=this.simulatedTotalPrice
}else{this.simulatedTotalPrice=null;
this.persist()
}};
CQ_Analytics.CartMgr.registerSimulatedPrice=function(a){if(this.simulatedTotalPrice){this.simulatedTotalPrice=a;
this.data.totalPrice=a+""
}else{this.referenceTotalPrice=this.data.totalPriceFloat;
this.simulatedTotalPrice=a
}this.persist()
};
CQ_Analytics.CartMgr.getProperty=function(a,k){if(!this.data){this.init()
}var f=this.data;
try{var d=a.split(".");
for(var g=0;
g<d.length-1;
g++){var b=d[g];
var c=b.indexOf("[");
var h=-1;
if(c>0){h=parseInt(b.substring(c+1,b.length-1));
b=b.substring(0,c)
}f=f[b];
if(h>=0){f=f[h]
}}var m=d[d.length-1];
if(!k){var l=CQ.shared.XSS.getXSSPropertyName(m);
if(f[l]){return f[l]
}}return f[m]
}catch(j){return undefined
}};
CQ_Analytics.CartMgr.validate=function(a,c){if(a=="totalPriceFloat"){var b=parseFloat(c);
return b>=0
}else{if(a.indexOf(".quantity")>0){var d=parseInt(c);
return d>=0
}}return true
};
CQ_Analytics.CartMgr.setProperty=function(a,h){if(!this.data){this.init()
}if(!this.validate(a,h)){this.fireEvent("update",a);
return
}if(a=="totalPriceFloat"){this.registerSimulatedPrice(h)
}var e=this.data;
var d=a.split(".");
for(var f=0;
f<d.length-1;
f++){var b=d[f];
var c=b.indexOf("[");
var g=-1;
if(c>0){g=parseInt(b.substring(c+1,b.length-1));
b=b.substring(0,c)
}if(!e[b]){e[b]={}
}e=e[b];
if(g>=0){if(!e[g]){e[g]={}
}e=e[g]
}}var k=d[d.length-1];
e[k]=h;
var j=CQ.shared.XSS.getXSSPropertyName(k);
this.data[j]=CQ.shared.XSS.getXSSValue(h);
this.fireEvent("update",a)
};
CQ_Analytics.CartMgr.update=function(){var a=this;
if(this.updateUrl){$CQ.ajax({url:this.updateUrl,type:"POST",data:{cart:JSON.stringify(a.data)},externalize:false,encodePath:false,hook:true,success:function(b){a.data=b;
a.updateSimulatedPrice();
CQ_Analytics.ClientContextUtils.renderStore(CQ_Analytics.CartMgr.divId,CQ_Analytics.CartMgr.STORENAME);
a.fireEvent("updatecomplete");
a.fireEvent("update")
}})
}};
CQ_Analytics.CartMgr.clear=function(){if(this.data.entries){this.data.entries=[]
}if(this.data.vouchers){this.data.vouchers=[]
}this.data.totalPrice="0";
this.referenceTotalPrice=null;
this.simulatedTotalPrice=null
};
CQ_Analytics.CartMgr.reset=function(){this.clear();
this.fireEvent("update");
this.persist();
this.update()
};
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this);
CQ_Analytics.SegmentMgr.addListener("update",function(){if(!this.promotionsMap){return
}if(!this.data.promotions){this.data.promotions=[]
}var f=CQ_Analytics.SegmentMgr.getResolved();
var e=[];
for(var d=0;
d<this.promotionsMap.length;
d++){var a=this.promotionsMap[d];
var h=false;
var g=a.segments.split(",");
for(var b=0;
b<g.length;
b++){if($CQ.inArray(g[b],f)>=0){h=true;
break
}}if(h){e.push(a.path)
}}var c=false;
for(var d=0;
d<this.data.promotions.length;
d++){var k=this.data.promotions[d];
var b=$CQ.inArray(k.path,e);
if(b>=0){e.splice(b,1)
}else{this.data.promotions.splice(d--,1);
c=true
}}for(var d=0;
d<e.length;
d++){var k={path:e[d]};
this.data.promotions.push(k);
c=true
}if(c){this.update()
}},CQ_Analytics.CartMgr)
},CQ_Analytics.CartMgr)
}if(!CQ_Analytics.CartHelper){CQ_Analytics.CartHelper=(function(){return{containsProduct:function(e,d,f){var g=d?d.substring(0,d.lastIndexOf("#")):null;
for(var a=0;
e.entries&&a<e.entries.length;
a++){var c=e.entries[a];
var b=c.page.substring(0,c.page.lastIndexOf("#"));
if((!d||b==g)&&(!f||c.quantity>=f)){return true
}}return false
}}
})()
}if(!CQ_Analytics.CampaignMgr){CQ_Analytics.CampaignMgr=function(){};
CQ_Analytics.CampaignMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.CampaignMgr.prototype.STOREKEY="CAMPAIGN";
CQ_Analytics.CampaignMgr.prototype.STORENAME="campaign";
CQ_Analytics.CampaignMgr.prototype.DEFAULT_EXPERIENCE="DEFAULT";
CQ_Analytics.CampaignMgr.prototype.init=function(){var c;
this.persistence=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var a=this.persistence.get(this.getStoreKey());
if(!this.data){this.data={}
}if(!a||a===""){for(c in this.initProperty){if(this.initProperty.hasOwnProperty(c)){this.data[c]=this.initProperty[c]
}}}else{this.data=this.parse(a);
var b=this.getInitProperty("campaigns");
if(b){this.data.campaigns=b
}}this.validate();
this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.CampaignMgr.prototype.validate=function(){if(this.data.campaigns){if(!this.getCampaignBy("path",this.data.path)&&!this.getCampaignBy("id",this.data.id)){this.setCampaign(null)
}if(this.data["recipe/path"]!==CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE){if(!this.getExperienceBy("path",this.data["recipe/path"])&&!this.getExperienceBy("id",this.data["recipe/id"])){this.setExperience(null)
}}}};
CQ_Analytics.CampaignMgr.prototype.getCampaignBy=function(e,b){if(!this.data||!this.data.campaigns){return null
}var a,c=this.data.campaigns;
for(a=0;
a<c.length;
a++){var d=c[a];
if(d[e]===b){return d
}}return null
};
CQ_Analytics.CampaignMgr.prototype.getExperienceBy=function(g,d){if(!this.data||!this.data.campaigns){return null
}var c,e=this.data.campaigns;
for(c=0;
c<e.length;
c++){var f=e[c];
for(var a=0;
a<f.experiences.length;
a++){var b=f.experiences[a];
if(b[g]===d){return b
}}}return null
};
CQ_Analytics.CampaignMgr.prototype.setCampaign=function(a){this.setProperties({name:a?a.title:"",path:a?a.path:"",id:a?a.id:"","recipe/name":a?CQ.I18n.getMessage("(default)"):"","recipe/path":a?this.DEFAULT_EXPERIENCE:"","recipe/id":a?this.DEFAULT_EXPERIENCE:""})
};
CQ_Analytics.CampaignMgr.prototype.setExperience=function(a){this.setProperties({"recipe/name":a?a.title:"","recipe/path":a?a.path:"","recipe/id":a?a.id:""})
};
CQ_Analytics.CampaignMgr.prototype.setProperty=function(a,b){if(a==="id"||a==="path"){this.setCampaign(this.getCampaignBy(a,b));
return
}else{if(a==="recipe/id"||a==="recipe/path"){if(b!==CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE){this.setExperience(this.getExperienceBy(a.substring("recipe/".length),b));
return
}}}CQ_Analytics.PersistedSessionStore.prototype.setProperty.call(this,a,b)
};
CQ_Analytics.CampaignMgr.prototype.isCampaignSelected=function(){return this.getProperty("path")!==""
};
CQ_Analytics.CampaignMgr.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.CampaignMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.CampaignMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.CampaignMgr=new CQ_Analytics.CampaignMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this)
},CQ_Analytics.CampaignMgr)
}if(!CQ_Analytics.ActivityStreamMgr){CQ_Analytics.ActivityStreamMgr=CQ_Analytics.JSONStore.registerNewInstance("activitystream",{});
CQ_Analytics.ActivityStreamMgr.internalRenderer=function(c,a){var b=c+".form.html";
b+=CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/activitystream.html");
b+="?limit=3";
CQ.shared.HTTP.get(b,function(e,f,d){$CQ("#"+a).children().remove();
if(f){$CQ("#"+a).append(d.body)
}})
};
CQ_Analytics.ActivityStreamMgr.renderer=function(b,a){if(!b.isReady){b.isReady=true;
CQ_Analytics.ClientContextUtils.onStoreRegistered("profile",function(c){c.addListener("update",function(e,f){var g=this.getProperty("path");
if(g!=CQ_Analytics.ActivityStreamMgr.currentProfilePath){CQ_Analytics.ActivityStreamMgr.currentProfilePath=g;
CQ_Analytics.ActivityStreamMgr.internalRenderer(g,a)
}},c);
var d=c.getProperty("path");
CQ_Analytics.ActivityStreamMgr.currentProfilePath=d;
CQ_Analytics.ActivityStreamMgr.internalRenderer(d,a)
})
}return""
}
}if(!CQ_Analytics.DcomRecentlyViewed){CQ_Analytics.DcomRecentlyViewed=function(){this.data=null;
this.MAX_COUNT=10
};
CQ_Analytics.DcomRecentlyViewed.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.DcomRecentlyViewed.prototype.STOREKEY="RECENTLYVIEWED";
CQ_Analytics.DcomRecentlyViewed.prototype.STORENAME="recentlyviewed";
CQ_Analytics.DcomRecentlyViewed.prototype.dcomRecord=function(h,k,a,g,e,d,c,j,f){if(!this.data){this.dcomInit()
}for(var b=0;
b<this.data.length;
b++){if(this.data[b].path==k){this.data.splice(b,1);
break
}}if(this.data.length==this.MAX_COUNT){this.data.shift()
}this.data.push({path:k,title:h,pageType:a,prop1:g,prop2:e,prop3:d,prop4:c,template:j,hashValue:f});
this.dcomPersist();
this.fireEvent("update")
};
CQ_Analytics.DcomRecentlyViewed.prototype.mostRecent=function(){if(!this.data){this.dcomInit()
}if(this.data.length>0){return this.data[this.data.length-1]
}else{return null
}};
CQ_Analytics.DcomRecentlyViewed.prototype.mostRecentNotInCart=function(){if(!this.data){this.dcomInit()
}if(!CQ_Analytics.CartMgr){return this.mostRecent()
}for(var a=this.data.length-1;
a>=0;
a--){var b=this.data[a];
if(!CQ_Analytics.CartHelper.containsProduct(CQ_Analytics.CartMgr.getData(),b.path,1)){return b
}}return null
};
CQ_Analytics.DcomRecentlyViewed.prototype.dcomRecent=function(e,b){var a=[];
if(!this.data){this.dcomInit()
}if(!CQ_Analytics.CartMgr){b=false
}for(var c=this.data.length-1;
c>=0&&e>0;
c--){var d=this.data[c];
if(b&&CQ_Analytics.CartHelper.containsProduct(CQ_Analytics.CartMgr.getData(),d.path,1)){continue
}a.push(d);
e--
}return a
};
CQ_Analytics.DcomRecentlyViewed.prototype.getData=function(a){if(!this.data){this.dcomInit()
}return this.data
};
CQ_Analytics.DcomRecentlyViewed.prototype.dcomInit=function(){var b=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var d=b.get(this.getStoreKey());
d=d===null?"":new String(d);
var e=d.split("`");
this.data=[];
for(var c=0;
c<e.length;
c++){var a=e[c].split("^");
this.data.push({path:a[0],title:a[1],pageType:a[2],prop1:a[3],prop2:a[4],prop3:a[5],prop4:a[6],template:a[7],hashValue:a[8]})
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.DcomRecentlyViewed.prototype.dcomPersist=function(){if(this.fireEvent("beforepersist")!==false){var b=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var e=[];
for(var c=0;
c<this.data.length;
c++){var d=this.data[c];
var a=d.path+"^"+d.title+"^"+d.pageType+"^"+d.prop1+"^"+d.prop2+"^"+d.prop3+"^"+d.prop4+"^"+d.template+"^"+d.hashValue;
e.push(a)
}b.set(this.getStoreKey(),e.join("`"));
this.fireEvent("persist")
}};
CQ_Analytics.DcomRecentlyViewed.prototype.reset=function(){this.clear();
this.fireEvent("update")
};
CQ_Analytics.DcomRecentlyViewed.prototype.clear=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.remove(this.getStoreKey());
this.data=[]
};
CQ_Analytics.DcomRecentlyViewed=new CQ_Analytics.DcomRecentlyViewed();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this)
},CQ_Analytics.DcomRecentlyViewed)
}var s_code="",s_objectID;
function s_gi(k,o,C){var q="s.version='H.25';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visibilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){while(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr()}',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;s.t();s.eo=0;if(s.nrs>0&&s.useForcedLinkTracking&&e.target){t=e.target.target;if(e.target.dispatchEvent&&(!t||t==\\'_self\\'||t==\\'_top\\'||(s.wd.name&&t==s.wd.name))){e.stopPropagation();e.stopImmediatePropagation();e.preventDefault();n=s.d.createEvent(\"MouseEvents\");n.initMouseEvent(\"click\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget);n.s_fe=1;s.bct=e.target;s.bce=n;}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",y=window,f=y.s_c_il,b=navigator,A=b.userAgent,z=b.appVersion,p=z.indexOf("MSIE "),d=A.indexOf("Netscape6/"),t,h,g,r,B;
if(k){k=k.toLowerCase();
if(f){for(g=0;
g<2;
g++){for(h=0;
h<f.length;
h++){B=f[h];
r=B._c;
if((!r||r=="s_c"||(g>0&&r=="s_l"))&&(B.oun==k||(B.fs&&B.sa&&B.fs(B.oun,k)))){if(B.sa){B.sa(k)
}if(r=="s_c"){return B
}}else{B=0
}}}}}y.s_an="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
y.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
y.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
y.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
y.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
y.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
y.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':a");
y.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){if(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
q=s_d(q);
if(p>0){t=parseInt(h=z.substring(p+5));
if(t>3){t=parseFloat(h)
}}else{if(d>0){t=parseFloat(A.substring(d+10))
}else{t=parseFloat(z)
}}if(t<5||z.indexOf("Opera")>=0||A.indexOf("Opera")>=0){q=s_ft(q)
}if(!B){B=new Object;
if(!y.s_c_in){y.s_c_il=new Array;
y.s_c_in=0
}B._il=y.s_c_il;
B._in=y.s_c_in;
B._il[B._in]=B;
y.s_c_in++
}B._c="s_c";
(new Function("s","un","pg","ss",q))(B,k,o,C);
return B
}function s_giqf(){var a=window,e=a.s_giq,c,b,d;
if(e){for(c=0;
c<e.length;
c++){b=e[c];
d=s_gi(b.oun);
d.sa(b.un);
d.setTagContainer(b.tagContainerName)
}}a.s_giq=0
}s_giqf();
if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c,d){for(var b=(d||0),a=this.length;
b<a;
b++){if(this[b]===c){return b
}}return -1
}
}function record(g,a,j,d,e){var b={};
b.event=g;
b.values=a;
b.collect=j;
b.options=d;
b.componentPath=e;
var h=function(f){return function(k){f.call(this,k.event,k.values);
return false
}
};
for(var c=record.callbacks.length-1;
c>=0;
c--){CQ_Analytics.registerAfterCallback(h(record.callbacks[c]),150-c);
record.callbacks.pop()
}return CQ_Analytics.record(b)
}record.callbacks=[];
CQ_Analytics.Sitecatalyst={events:[],trackVars:[],settings:[],stores:CQ_Analytics.StoreRegistry.getStores(),hasEvent:function(e){var c=CQ_Analytics.StoreRegistry.getStore("eventdata");
var b=c.getProperty("events").split("\u2026");
var d=b.length;
while(d--){if(b[d]===e){return true
}}return false
},setEvar:function(evar,value){if(evar.match(/^eventdata\.events\./)){if(this.hasEvent(evar.replace(/.+\./,""))){this.events.push(value);
this.updateLinkTrackEvents()
}}else{if(value!=""){for(var store in this.stores){try{eval("var "+store+"=this.stores[store].data")
}catch(e){}}try{s[evar]=CQ_Analytics.Variables.replaceVariables(eval(value))
}catch(e){console.log("Could not set "+evar+": "+e)
}if(this.trackVars.indexOf(evar)<0){this.trackVars.push(evar)
}}}},updateLinkTrackEvents:function(){s.events=this.events.join(",");
s.linkTrackEvents=s.events
},updateLinkTrackVars:function(){s.linkTrackVars=this.trackVars.join(",")
},eraseTrackVars:function(b){for(var a=0;
a<this.trackVars.length;
a++){var c=this.trackVars[a];
if(c!=="events"){if(b){b[c]=s[c]
}delete s[c]
}}this.trackVars=[]
},saveEvars:function(){var a={events:this.events,trackVars:this.trackVars,linkTrackVars:s.linkTrackVars,linkTrackEvents:s.linkTrackEvents};
this.events=[];
this.eraseTrackVars(a);
this.settings.push(a)
},restoreEvars:function(){var a=this.settings.pop();
this.events=a.events;
delete a.events;
this.trackVars=a.trackVars;
delete a.trackVars;
this.updateLinkTrackEvents();
this.eraseTrackVars();
for(var b in a){s[b]=a[b]
}},stopTrackingTemporarily:function(){var a={trackDownloadLinks:s.trackDownloadLinks,trackExternalLinks:s.trackExternalLinks};
s.trackDownloadLinks=false;
s.trackExternalLinks=false;
(function(){for(var b in a){s[b]=a[b]
}}).defer(200)
},trackLink:function(d){var e=d.options.obj||"",b;
var a=d.options.defaultLinkType||"o";
if(typeof e.href!=="undefined"){b=s.lt(e.href)
}b=b||a;
var c=s.tl(e,b,"");
if(c){document.write(c)
}this.stopTrackingTemporarily()
},customTrack:function(obj){var events=obj.getAttribute("adhocevents")||"";
var evars=obj.getAttribute("adhocevars")||"";
if(events||evars){for(var store in this.stores){try{eval("var "+store+"=this.stores[store].data")
}catch(e){}}try{eval("evars = {"+evars+"}")
}catch(e){}CQ_Analytics.Sitecatalyst.saveEvars();
try{var linkTrackVars=[];
if(events.length>0){s.linkTrackEvents=s.events=events;
linkTrackVars.push("events")
}for(var key in evars){linkTrackVars.push(key);
var value="'"+escape(evars[key])+"'";
this.setEvar(key,value)
}if(linkTrackVars.length>0){s.linkTrackVars=linkTrackVars.join(",")
}this.trackLink({options:{obj:obj}})
}finally{CQ_Analytics.Sitecatalyst.restoreEvars()
}}},collect:function(){var elements=document.getElementsByTagName("*");
var evnts={};
var alldata={};
var eventdata=CQ_Analytics.StoreRegistry.getStore("eventdata");
for(var i=0;
i<elements.length;
i++){if(elements[i].getAttribute("record")){var trackres=eval("record("+elements[i].getAttribute("record")+",true)");
var event=trackres[0];
evnts[event]=event;
var data=trackres[1];
for(var j in data){var store=eventdata;
var prop=j.split(".");
if(j.indexOf(".")>=0&&CQ_Analytics.StoreRegistry.getStore(prop[0])){store=CQ_Analytics.StoreRegistry.getStore(prop[0]);
prop=prop[1]
}store.setProperty(prop,data[j])
}}}var myevents=[];
for(i in evnts){myevents.push(i)
}eventdata.setProperty("events",myevents.join("\u2026"))
}};
window.Modernizr=function(ay,ax,aw){function U(b){ao.cssText=b
}function T(d,c){return U(ak.join(d+";")+(c||""))
}function S(d,c){return typeof d===c
}function R(d,c){return !!~(""+d).indexOf(c)
}function Q(f,c){for(var h in f){var g=f[h];
if(!R(g,"-")&&ao[g]!==aw){return c=="pfx"?g:!0
}}return !1
}function P(g,c,k){for(var j in g){var h=c[g[j]];
if(h!==aw){return k===!1?g[j]:S(h,"function")?h.bind(k||c):h
}}return !1
}function O(g,f,k){var j=g.charAt(0).toUpperCase()+g.slice(1),h=(g+" "+ai.join(j+" ")+j).split(" ");
return S(f,"string")||S(f,"undefined")?Q(h,f):(h=(g+" "+ah.join(j+" ")+j).split(" "),P(h,f,k))
}function N(){au.input=function(f){for(var b=0,a=f.length;
b<a;
b++){ad[f[b]]=f[b] in an
}return ad.list&&(ad.list=!!ax.createElement("datalist")&&!!ay.HTMLDataListElement),ad
}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),au.inputtypes=function(b){for(var l=0,k,j,g,c=b.length;
l<c;
l++){an.setAttribute("type",j=b[l]),k=an.type!=="text",k&&(an.value=am,an.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(j)&&an.style.WebkitAppearance!==aw?(ar.appendChild(an),g=ax.defaultView,k=g.getComputedStyle&&g.getComputedStyle(an,null).WebkitAppearance!=="textfield"&&an.offsetHeight!==0,ar.removeChild(an)):/^(search|tel)$/.test(j)||(/^(url|email)$/.test(j)?k=an.checkValidity&&an.checkValidity()===!1:k=an.value!=am)),ae[b[l]]=!!k
}return ae
}("search tel url email datetime date month week time datetime-local number range color".split(" "))
}var av="2.7.1",au={},at=!0,ar=ax.documentElement,aq="modernizr",ap=ax.createElement(aq),ao=ap.style,an=ax.createElement("input"),am=":)",al={}.toString,ak=" -webkit- -moz- -o- -ms- ".split(" "),aj="Webkit Moz O ms",ai=aj.split(" "),ah=aj.toLowerCase().split(" "),ag={svg:"http://www.w3.org/2000/svg"},af={},ae={},ad={},ac=[],ab=ac.slice,aa,Z=function(w,v,u,t){var r,q,p,o,h=ax.createElement("div"),g=ax.body,b=g||ax.createElement("body");
if(parseInt(u,10)){while(u--){p=ax.createElement("div"),p.id=t?t[u]:aq+(u+1),h.appendChild(p)
}}return r=["&#173;",'<style id="s',aq,'">',w,"</style>"].join(""),h.id=aq,(g?h:b).innerHTML+=r,b.appendChild(h),g||(b.style.background="",b.style.overflow="hidden",o=ar.style.overflow,ar.style.overflow="hidden",ar.appendChild(b)),q=v(h,w),g?h.parentNode.removeChild(h):(b.parentNode.removeChild(b),ar.style.overflow=o),!!q
},Y=function(a){var f=ay.matchMedia||ay.msMatchMedia;
if(f){return f(a).matches
}var e;
return Z("@media "+a+" { #"+aq+" { position: absolute; } }",function(c){e=(ay.getComputedStyle?getComputedStyle(c,null):c.currentStyle)["position"]=="absolute"
}),e
},X=function(){function c(h,g){g=g||ax.createElement(b[h]||"div"),h="on"+h;
var a=h in g;
return a||(g.setAttribute||(g=ax.createElement("div")),g.setAttribute&&g.removeAttribute&&(g.setAttribute(h,""),a=S(g[h],"function"),S(g[h],"undefined")||(g[h]=aw),g.removeAttribute(h))),g=null,a
}var b={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};
return c
}(),W={}.hasOwnProperty,V;
!S(W,"undefined")&&!S(W.call,"undefined")?V=function(d,c){return W.call(d,c)
}:V=function(d,c){return c in d&&S(d.constructor.prototype[c],"undefined")
},Function.prototype.bind||(Function.prototype.bind=function(a){var h=this;
if(typeof h!="function"){throw new TypeError
}var g=ab.call(arguments,1),f=function(){if(this instanceof f){var b=function(){};
b.prototype=h.prototype;
var d=new b,c=h.apply(d,g.concat(ab.call(arguments)));
return Object(c)===c?c:d
}return h.apply(a,g.concat(ab.call(arguments)))
};
return f
}),af.flexbox=function(){return O("flexWrap")
},af.flexboxlegacy=function(){return O("boxDirection")
},af.canvas=function(){var b=ax.createElement("canvas");
return !!b.getContext&&!!b.getContext("2d")
},af.canvastext=function(){return !!au.canvas&&!!S(ax.createElement("canvas").getContext("2d").fillText,"function")
},af.webgl=function(){return !!ay.WebGLRenderingContext
},af.touch=function(){var a;
return"ontouchstart" in ay||ay.DocumentTouch&&ax instanceof DocumentTouch?a=!0:Z(["@media (",ak.join("touch-enabled),("),aq,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=b.offsetTop===9
}),a
},af.geolocation=function(){return"geolocation" in navigator
},af.postmessage=function(){return !!ay.postMessage
},af.websqldatabase=function(){return !!ay.openDatabase
},af.indexedDB=function(){return !!O("indexedDB",ay)
},af.hashchange=function(){return X("hashchange",ay)&&(ax.documentMode===aw||ax.documentMode>7)
},af.history=function(){return !!ay.history&&!!history.pushState
},af.draganddrop=function(){var b=ax.createElement("div");
return"draggable" in b||"ondragstart" in b&&"ondrop" in b
},af.websockets=function(){return"WebSocket" in ay||"MozWebSocket" in ay
},af.rgba=function(){return U("background-color:rgba(150,255,150,.5)"),R(ao.backgroundColor,"rgba")
},af.hsla=function(){return U("background-color:hsla(120,40%,100%,.5)"),R(ao.backgroundColor,"rgba")||R(ao.backgroundColor,"hsla")
},af.multiplebgs=function(){return U("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(ao.background)
},af.backgroundsize=function(){return O("backgroundSize")
},af.borderimage=function(){return O("borderImage")
},af.borderradius=function(){return O("borderRadius")
},af.boxshadow=function(){return O("boxShadow")
},af.textshadow=function(){return ax.createElement("div").style.textShadow===""
},af.opacity=function(){return T("opacity:.55"),/^0.55$/.test(ao.opacity)
},af.cssanimations=function(){return O("animationName")
},af.csscolumns=function(){return O("columnCount")
},af.cssgradients=function(){var e="background-image:",d="gradient(linear,left top,right bottom,from(#9f9),to(white));",f="linear-gradient(left top,#9f9, white);";
return U((e+"-webkit- ".split(" ").join(d+e)+ak.join(f+e)).slice(0,-e.length)),R(ao.backgroundImage,"gradient")
},af.cssreflections=function(){return O("boxReflect")
},af.csstransforms=function(){return !!O("transform")
},af.csstransforms3d=function(){var b=!!O("perspective");
return b&&"webkitPerspective" in ar.style&&Z("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(a,d){b=a.offsetLeft===9&&a.offsetHeight===3
}),b
},af.csstransitions=function(){return O("transition")
},af.fontface=function(){var b;
return Z('@font-face {font-family:"font";src:url("https://")}',function(l,k){var j=ax.getElementById("smodernizr"),h=j.sheet||j.styleSheet,a=h?h.cssRules&&h.cssRules[0]?h.cssRules[0].cssText:h.cssText||"":"";
b=/src/i.test(a)&&a.indexOf(k.split(" ")[0])===0
}),b
},af.generatedcontent=function(){var b;
return Z(["#",aq,"{font:0/0 a}#",aq,':after{content:"',am,'";visibility:hidden;font:3px/1 a}'].join(""),function(a){b=a.offsetHeight>=3
}),b
},af.video=function(){var b=ax.createElement("video"),f=!1;
try{if(f=!!b.canPlayType){f=new Boolean(f),f.ogg=b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),f.h264=b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),f.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")
}}catch(e){}return f
},af.audio=function(){var b=ax.createElement("audio"),f=!1;
try{if(f=!!b.canPlayType){f=new Boolean(f),f.ogg=b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),f.mp3=b.canPlayType("audio/mpeg;").replace(/^no$/,""),f.wav=b.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),f.m4a=(b.canPlayType("audio/x-m4a;")||b.canPlayType("audio/aac;")).replace(/^no$/,"")
}}catch(e){}return f
},af.localstorage=function(){try{return localStorage.setItem(aq,aq),localStorage.removeItem(aq),!0
}catch(b){return !1
}},af.sessionstorage=function(){try{return sessionStorage.setItem(aq,aq),sessionStorage.removeItem(aq),!0
}catch(b){return !1
}},af.webworkers=function(){return !!ay.Worker
},af.applicationcache=function(){return !!ay.applicationCache
},af.svg=function(){return !!ax.createElementNS&&!!ax.createElementNS(ag.svg,"svg").createSVGRect
},af.inlinesvg=function(){var b=ax.createElement("div");
return b.innerHTML="<svg/>",(b.firstChild&&b.firstChild.namespaceURI)==ag.svg
},af.smil=function(){return !!ax.createElementNS&&/SVGAnimate/.test(al.call(ax.createElementNS(ag.svg,"animate")))
},af.svgclippaths=function(){return !!ax.createElementNS&&/SVGClipPath/.test(al.call(ax.createElementNS(ag.svg,"clipPath")))
};
for(var M in af){V(af,M)&&(aa=M.toLowerCase(),au[aa]=af[M](),ac.push((au[aa]?"":"no-")+aa))
}return au.input||N(),au.addTest=function(e,c){if(typeof e=="object"){for(var f in e){V(e,f)&&au.addTest(f,e[f])
}}else{e=e.toLowerCase();
if(au[e]!==aw){return au
}c=typeof c=="function"?c():c,typeof at!="undefined"&&at&&(ar.className+=" "+(c?"":"no-")+e),au[e]=c
}return au
},U(""),ap=an=null,au._version=av,au._prefixes=ak,au._domPrefixes=ah,au._cssomPrefixes=ai,au.mq=Y,au.hasEvent=X,au.testProp=function(b){return Q([b])
},au.testAllProps=O,au.testStyles=Z,ar.className=ar.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(at?" js "+ac.join(" "):""),au
}(this,this.document),function(ab,aa){function Q(f,e){var h=f.createElement("p"),g=f.getElementsByTagName("head")[0]||f.documentElement;
return h.innerHTML="x<style>"+e+"</style>",g.insertBefore(h.lastChild,g.firstChild)
}function P(){var b=I.elements;
return typeof b=="string"?b.split(" "):b
}function O(d){var c=S[d[U]];
return c||(c={},T++,d[U]=T,S[T]=c),c
}function N(b,h,f){h||(h=aa);
if(R){return h.createElement(b)
}f||(f=O(h));
var e;
return f.cache[b]?e=f.cache[b].cloneNode():W.test(b)?e=(f.cache[b]=f.createElem(b)).cloneNode():e=f.createElem(b),e.canHaveChildren&&!X.test(b)&&!e.tagUrn?f.frag.appendChild(e):e
}function M(b,m){b||(b=aa);
if(R){return b.createDocumentFragment()
}m=m||O(b);
var l=m.frag.cloneNode(),k=0,j=P(),h=j.length;
for(;
k<h;
k++){l.createElement(j[k])
}return l
}function K(d,c){c.cache||(c.cache={},c.createElem=d.createElement,c.createFrag=d.createDocumentFragment,c.frag=c.createFrag()),d.createElement=function(a){return I.shivMethods?N(a,d,c):c.createElem(a)
},d.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+P().join().replace(/\w+/g,function(b){return c.createElem(b),c.frag.createElement(b),'c("'+b+'")'
})+");return n}")(I,c.frag)
}function J(b){b||(b=aa);
var d=O(b);
return I.shivCSS&&!V&&!d.hasCSS&&(d.hasCSS=!!Q(b,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),R||K(b,d),b
}function E(h){var g,m=h.getElementsByTagName("*"),l=m.length,k=RegExp("^(?:"+P().join("|")+")$","i"),j=[];
while(l--){g=m[l],k.test(g.nodeName)&&j.push(g.applyElement(D(g)))
}return j
}function D(g){var f,k=g.attributes,j=k.length,h=g.ownerDocument.createElement(G+":"+g.nodeName);
while(j--){f=k[j],f.specified&&h.setAttribute(f.nodeName,f.nodeValue)
}return h.style.cssText=g.style.cssText,h
}function C(h){var g,m=h.split("{"),l=m.length,k=RegExp("(^|[\\s,>+~])("+P().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),j="$1"+G+"\\:$2";
while(l--){g=m[l]=m[l].split("}"),g[g.length-1]=g[g.length-1].replace(k,j),m[l]=g.join("}")
}return m.join("{")
}function B(d){var c=d.length;
while(c--){d[c].removeNode()
}}function L(j){function k(){clearTimeout(n._removeSheetTimer),h&&h.removeNode(!0),h=null
}var h,o,n=O(j),m=j.namespaces,l=j.parentWindow;
return !F||j.printShived?j:(typeof m[G]=="undefined"&&m.add(G),l.attachEvent("onbeforeprint",function(){k();
var t,r,q,p=j.styleSheets,g=[],c=p.length,b=Array(c);
while(c--){b[c]=p[c]
}while(q=b.pop()){if(!q.disabled&&H.test(q.media)){try{t=q.imports,r=t.length
}catch(a){r=0
}for(c=0;
c<r;
c++){b.push(t[c])
}try{g.push(q.cssText)
}catch(a){}}}g=C(g.reverse().join("")),o=E(j),h=Q(j,g)
}),l.attachEvent("onafterprint",function(){B(o),clearTimeout(n._removeSheetTimer),n._removeSheetTimer=setTimeout(k,500)
}),j.printShived=!0,j)
}var Z="3.7.0",Y=ab.html5||{},X=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,W=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,V,U="_html5shiv",T=0,S={},R;
(function(){try{var b=aa.createElement("a");
b.innerHTML="<xyz></xyz>",V="hidden" in b,R=b.childNodes.length==1||function(){aa.createElement("a");
var c=aa.createDocumentFragment();
return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"
}()
}catch(d){V=!0,R=!0
}})();
var I={elements:Y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:Z,shivCSS:Y.shivCSS!==!1,supportsUnknownElements:R,shivMethods:Y.shivMethods!==!1,type:"default",shivDocument:J,createElement:N,createDocumentFragment:M};
ab.html5=I,J(aa);
var H=/^$|\b(?:all|print)\b/,G="html5shiv",F=!R&&function(){var a=aa.documentElement;
return typeof aa.namespaces!="undefined"&&typeof aa.parentWindow!="undefined"&&typeof a.applyElement!="undefined"&&typeof a.removeNode!="undefined"&&typeof ab.attachEvent!="undefined"
}();
I.type+=" print",I.shivPrint=L,L(aa)
}(this,document),function(ad,ac,ab){function aa(b){return"[object Function]"==P.call(b)
}function Z(b){return"string"==typeof b
}function Y(){}function X(b){return !b||"loaded"==b||"complete"==b||"uninitialized"==b
}function W(){var b=O.shift();
M=1,b?b.t?R(function(){("c"==b.t?L.injectCss:L.injectJs)(b.s,0,b.a,b.x,b.e,1)
},0):(b(),W()):M=0
}function V(x,w,v,t,q,p,n){function m(a){if(!g&&X(h.readyState)&&(y.r=g=1,!M&&W(),h.onload=h.onreadystatechange=null,a)){"img"!=x&&R(function(){I.removeChild(h)
},50);
for(var c in D[w]){D[w].hasOwnProperty(c)&&D[w][c].onload()
}}}var n=n||L.errorTimeout,h=ac.createElement(x),g=0,b=0,y={t:v,s:w,e:q,a:p,x:n};
1===D[w]&&(b=1,D[w]=[]),"object"==x?h.data=w:(h.src=w,h.type=x),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){m.call(this,b)
},O.splice(t,0,y),"img"!=x&&(b||2===D[w]?(I.insertBefore(h,J?null:Q),R(m,n)):D[w].push(h))
}function U(g,e,k,j,h){return M=0,e=e||"j",Z(g)?V("c"==e?G:H,g,e,this.i++,k,j,h):(O.splice(this.i++,0,g),1==O.length&&W()),this
}function T(){var b=L;
return b.loader={load:U,i:0},b
}var S=ac.documentElement,R=ad.setTimeout,Q=ac.getElementsByTagName("script")[0],P={}.toString,O=[],M=0,K="MozAppearance" in S.style,J=K&&!!ac.createRange().compareNode,I=J?S:Q.parentNode,S=ad.opera&&"[object Opera]"==P.call(ad.opera),S=!!ac.attachEvent&&!S,H=K?"object":S?"script":"img",G=S?"script":H,F=Array.isArray||function(b){return"[object Array]"==P.call(b)
},E=[],D={},C={timeout:function(d,c){return c.length&&(d.timeout=c[0]),d
}},N,L;
L=function(e){function c(j){var j=j.split("!"),h=E.length,r=j.pop(),q=j.length,r={url:r,origUrl:r,prefixes:j},p,o,l;
for(o=0;
o<q;
o++){l=j[o].split("="),(p=C[l.shift()])&&(r=p(r,l))
}for(o=0;
o<h;
o++){r=E[o](r)
}return r
}function n(b,t,r,q,p){var o=c(b),l=o.autoCallback;
o.url.split(".").pop().split("?").shift(),o.bypass||(t&&(t=aa(t)?t:t[b]||t[q]||t[b.split("/").pop().split("?")[0]]),o.instead?o.instead(b,t,r,q,p):(D[o.url]?o.noexec=!0:D[o.url]=1,r.load(o.url,o.forceCSS||!o.forceJS&&"css"==o.url.split(".").pop().split("?").shift()?"c":ab,o.noexec,o.attrs,o.timeout),(aa(t)||aa(l))&&r.load(function(){T(),t&&t(o.origUrl,p,q),l&&l(o.origUrl,p,q),D[o.url]=2
})))
}function m(x,w){function v(b,h){if(b){if(Z(b)){h||(r=function(){var j=[].slice.call(arguments);
q.apply(this,j),p()
}),n(b,r,w,0,u)
}else{if(Object(b)===b){for(g in o=function(){var a=0,j;
for(j in b){b.hasOwnProperty(j)&&a++
}return a
}(),b){b.hasOwnProperty(g)&&(!h&&!--o&&(aa(r)?r=function(){var j=[].slice.call(arguments);
q.apply(this,j),p()
}:r[g]=function(j){return function(){var a=[].slice.call(arguments);
j&&j.apply(this,a),p()
}
}(q[g])),n(b[g],r,w,g,u))
}}}}else{!h&&p()
}}var u=!!x.test,t=x.load||x.both,r=x.callback||Y,q=r,p=x.complete||Y,o,g;
v(u?x.yep:x.nope,!!t),t&&v(t)
}var k,f,d=this.yepnope.loader;
if(Z(e)){n(e,0,d,0)
}else{if(F(e)){for(k=0;
k<e.length;
k++){f=e[k],Z(f)?n(f,0,d,0):F(f)?L(f):Object(f)===f&&m(f,d)
}}else{Object(e)===e&&m(e,d)
}}},L.addPrefix=function(d,c){C[d]=c
},L.addFilter=function(b){E.push(b)
},L.errorTimeout=10000,null==ac.readyState&&ac.addEventListener&&(ac.readyState="loading",ac.addEventListener("DOMContentLoaded",N=function(){ac.removeEventListener("DOMContentLoaded",N,0),ac.readyState="complete"
},0)),ad.yepnope=T(),ad.yepnope.executeStack=W,ad.yepnope.injectJs=function(r,q,p,n,m,h){var g=ac.createElement("script"),f,b,n=n||L.errorTimeout;
g.src=r;
for(b in p){g.setAttribute(b,p[b])
}q=h?W:q||Y,g.onreadystatechange=g.onload=function(){!f&&X(g.readyState)&&(f=1,q(),g.onload=g.onreadystatechange=null)
},R(function(){f||(f=1,q(1))
},n),m?g.onload():Q.parentNode.insertBefore(g,Q)
},ad.yepnope.injectCss=function(b,n,m,l,k,h){var l=ac.createElement("link"),f,n=h?W:n||Y;
l.href=b,l.rel="stylesheet",l.type="text/css";
for(f in m){l.setAttribute(f,m[f])
}k||(Q.parentNode.insertBefore(l,Q),R(n,0))
}
}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))
};
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||(function(m,l){var o,j=m.documentElement,h=j.firstElementChild||j.firstChild,n=m.createElement("body"),k=m.createElement("div");
k.id="mq-test-1";
k.style.cssText="position:absolute;top:-100em";
n.style.background="none";
n.appendChild(k);
return function(a){k.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>';
j.insertBefore(n,h);
o=k.offsetWidth==42;
j.removeChild(n);
return{matches:o,media:a}
}
})(document);
(function(){(function(p){var A=this||(0,eval)("this"),w=A.document,K=A.navigator,t=A.jQuery,C=A.JSON;
(function(p){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?p(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],p):p(A.ko={})
})(function(z){function G(a,c){return null===a||typeof a in M?a===c:!1
}function N(a,c){var d;
return function(){d||(d=setTimeout(function(){d=p;
a()
},c))
}
}function O(a,c){var d;
return function(){clearTimeout(d);
d=setTimeout(a,c)
}
}function H(b,c,d,e){a.d[b]={init:function(b,h,g,k,l){var n,r;
a.ba(function(){var g=a.a.c(h()),k=!d!==!g,s=!r;
if(s||c||k!==n){s&&a.ca.fa()&&(r=a.a.lb(a.e.childNodes(b),!0)),k?(s||a.e.U(b,a.a.lb(r)),a.gb(e?e(l,g):l,b)):a.e.da(b),n=k
}},null,{G:b});
return{controlsDescendantBindings:!0}
}};
a.g.aa[b]=!1;
a.e.Q[b]=!0
}var a="undefined"!==typeof z?z:{};
a.b=function(b,c){for(var d=b.split("."),e=a,f=0;
f<d.length-1;
f++){e=e[d[f]]
}e[d[d.length-1]]=c
};
a.s=function(a,c,d){a[c]=d
};
a.version="3.1.0";
a.b("version",a.version);
a.a=function(){function b(a,b){for(var c in a){a.hasOwnProperty(c)&&b(c,a[c])
}}function c(a,b){if(b){for(var c in b){b.hasOwnProperty(c)&&(a[c]=b[c])
}}return a
}function d(a,b){a.__proto__=b;
return a
}var e={__proto__:[]} instanceof Array,f={},h={};
f[K&&/Firefox\/2/i.test(K.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];
f.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
b(f,function(a,b){if(b.length){for(var c=0,d=b.length;
c<d;
c++){h[b[c]]=a
}}});
var g={propertychange:!0},k=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");
b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];
){}return 4<a?a:p
}();
return{mb:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],r:function(a,b){for(var c=0,d=a.length;
c<d;
c++){b(a[c],c)
}},l:function(a,b){if("function"==typeof Array.prototype.indexOf){return Array.prototype.indexOf.call(a,b)
}for(var c=0,d=a.length;
c<d;
c++){if(a[c]===b){return c
}}return -1
},hb:function(a,b,c){for(var d=0,e=a.length;
d<e;
d++){if(b.call(c,a[d],d)){return a[d]
}}return null
},ma:function(b,c){var d=a.a.l(b,c);
0<d?b.splice(d,1):0===d&&b.shift()
},ib:function(b){b=b||[];
for(var c=[],d=0,e=b.length;
d<e;
d++){0>a.a.l(c,b[d])&&c.push(b[d])
}return c
},ya:function(a,b){a=a||[];
for(var c=[],d=0,e=a.length;
d<e;
d++){c.push(b(a[d],d))
}return c
},la:function(a,b){a=a||[];
for(var c=[],d=0,e=a.length;
d<e;
d++){b(a[d],d)&&c.push(a[d])
}return c
},$:function(a,b){if(b instanceof Array){a.push.apply(a,b)
}else{for(var c=0,d=b.length;
c<d;
c++){a.push(b[c])
}}return a
},Y:function(b,c,d){var e=a.a.l(a.a.Sa(b),c);
0>e?d&&b.push(c):d||b.splice(e,1)
},na:e,extend:c,ra:d,sa:e?d:c,A:b,Oa:function(a,b){if(!a){return a
}var c={},d;
for(d in a){a.hasOwnProperty(d)&&(c[d]=b(a[d],d,a))
}return c
},Fa:function(b){for(;
b.firstChild;
){a.removeNode(b.firstChild)
}},ec:function(b){b=a.a.R(b);
for(var c=w.createElement("div"),d=0,e=b.length;
d<e;
d++){c.appendChild(a.M(b[d]))
}return c
},lb:function(b,c){for(var d=0,e=b.length,g=[];
d<e;
d++){var k=b[d].cloneNode(!0);
g.push(c?a.M(k):k)
}return g
},U:function(b,c){a.a.Fa(b);
if(c){for(var d=0,e=c.length;
d<e;
d++){b.appendChild(c[d])
}}},Bb:function(b,c){var d=b.nodeType?[b]:b;
if(0<d.length){for(var e=d[0],g=e.parentNode,k=0,h=c.length;
k<h;
k++){g.insertBefore(c[k],e)
}k=0;
for(h=d.length;
k<h;
k++){a.removeNode(d[k])
}}},ea:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;
a.length&&a[0].parentNode!==b;
){a.shift()
}if(1<a.length){var c=a[0],d=a[a.length-1];
for(a.length=0;
c!==d;
){if(a.push(c),c=c.nextSibling,!c){return
}}a.push(d)
}}return a
},Db:function(a,b){7>k?a.setAttribute("selected",b):a.selected=b
},ta:function(a){return null===a||a===p?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")
},oc:function(b,c){for(var d=[],e=(b||"").split(c),g=0,k=e.length;
g<k;
g++){var h=a.a.ta(e[g]);
""!==h&&d.push(h)
}return d
},kc:function(a,b){a=a||"";
return b.length>a.length?!1:a.substring(0,b.length)===b
},Sb:function(a,b){if(a===b){return !0
}if(11===a.nodeType){return !1
}if(b.contains){return b.contains(3===a.nodeType?a.parentNode:a)
}if(b.compareDocumentPosition){return 16==(b.compareDocumentPosition(a)&16)
}for(;
a&&a!=b;
){a=a.parentNode
}return !!a
},Ea:function(b){return a.a.Sb(b,b.ownerDocument.documentElement)
},eb:function(b){return !!a.a.hb(b,a.a.Ea)
},B:function(a){return a&&a.tagName&&a.tagName.toLowerCase()
},q:function(b,c,d){var e=k&&g[c];
if(!e&&t){t(b).bind(c,d)
}else{if(e||"function"!=typeof b.addEventListener){if("undefined"!=typeof b.attachEvent){var h=function(a){d.call(b,a)
},f="on"+c;
b.attachEvent(f,h);
a.a.u.ja(b,function(){b.detachEvent(f,h)
})
}else{throw Error("Browser doesn't support addEventListener or attachEvent")
}}else{b.addEventListener(c,d,!1)
}}},ha:function(b,c){if(!b||!b.nodeType){throw Error("element must be a DOM node when calling triggerEvent")
}var d;
"input"===a.a.B(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;
if(t&&!d){t(b).trigger(c)
}else{if("function"==typeof w.createEvent){if("function"==typeof b.dispatchEvent){d=w.createEvent(h[c]||"HTMLEvents"),d.initEvent(c,!0,!0,A,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d)
}else{throw Error("The supplied element doesn't support dispatchEvent")
}}else{if(d&&b.click){b.click()
}else{if("undefined"!=typeof b.fireEvent){b.fireEvent("on"+c)
}else{throw Error("Browser doesn't support triggering events")
}}}}},c:function(b){return a.v(b)?b():b
},Sa:function(b){return a.v(b)?b.o():b
},ua:function(b,c,d){if(c){var e=/\S+/g,g=b.className.match(e)||[];
a.a.r(c.match(e),function(b){a.a.Y(g,b,d)
});
b.className=g.join(" ")
}},Xa:function(b,c){var d=a.a.c(c);
if(null===d||d===p){d=""
}var e=a.e.firstChild(b);
!e||3!=e.nodeType||a.e.nextSibling(e)?a.e.U(b,[b.ownerDocument.createTextNode(d)]):e.data=d;
a.a.Vb(b)
},Cb:function(a,b){a.name=b;
if(7>=k){try{a.mergeAttributes(w.createElement("<input name='"+a.name+"'/>"),!1)
}catch(c){}}},Vb:function(a){9<=k&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))
},Tb:function(a){if(k){var b=a.style.width;
a.style.width=0;
a.style.width=b
}},ic:function(b,c){b=a.a.c(b);
c=a.a.c(c);
for(var d=[],e=b;
e<=c;
e++){d.push(e)
}return d
},R:function(a){for(var b=[],c=0,d=a.length;
c<d;
c++){b.push(a[c])
}return b
},mc:6===k,nc:7===k,oa:k,ob:function(b,c){for(var d=a.a.R(b.getElementsByTagName("input")).concat(a.a.R(b.getElementsByTagName("textarea"))),e="string"==typeof c?function(a){return a.name===c
}:function(a){return c.test(a.name)
},g=[],k=d.length-1;
0<=k;
k--){e(d[k])&&g.push(d[k])
}return g
},fc:function(b){return"string"==typeof b&&(b=a.a.ta(b))?C&&C.parse?C.parse(b):(new Function("return "+b))():null
},Ya:function(b,c,d){if(!C||!C.stringify){throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js")
}return C.stringify(a.a.c(b),c,d)
},gc:function(c,d,e){e=e||{};
var g=e.params||{},k=e.includeFields||this.mb,h=c;
if("object"==typeof c&&"form"===a.a.B(c)){for(var h=c.action,f=k.length-1;
0<=f;
f--){for(var u=a.a.ob(c,k[f]),D=u.length-1;
0<=D;
D--){g[u[D].name]=u[D].value
}}}d=a.a.c(d);
var y=w.createElement("form");
y.style.display="none";
y.action=h;
y.method="post";
for(var p in d){c=w.createElement("input"),c.name=p,c.value=a.a.Ya(a.a.c(d[p])),y.appendChild(c)
}b(g,function(a,b){var c=w.createElement("input");
c.name=a;
c.value=b;
y.appendChild(c)
});
w.body.appendChild(y);
e.submitter?e.submitter(y):y.submit();
setTimeout(function(){y.parentNode.removeChild(y)
},0)
}}
}();
a.b("utils",a.a);
a.b("utils.arrayForEach",a.a.r);
a.b("utils.arrayFirst",a.a.hb);
a.b("utils.arrayFilter",a.a.la);
a.b("utils.arrayGetDistinctValues",a.a.ib);
a.b("utils.arrayIndexOf",a.a.l);
a.b("utils.arrayMap",a.a.ya);
a.b("utils.arrayPushAll",a.a.$);
a.b("utils.arrayRemoveItem",a.a.ma);
a.b("utils.extend",a.a.extend);
a.b("utils.fieldsIncludedWithJsonPost",a.a.mb);
a.b("utils.getFormFields",a.a.ob);
a.b("utils.peekObservable",a.a.Sa);
a.b("utils.postJson",a.a.gc);
a.b("utils.parseJson",a.a.fc);
a.b("utils.registerEventHandler",a.a.q);
a.b("utils.stringifyJson",a.a.Ya);
a.b("utils.range",a.a.ic);
a.b("utils.toggleDomNodeCssClass",a.a.ua);
a.b("utils.triggerEvent",a.a.ha);
a.b("utils.unwrapObservable",a.a.c);
a.b("utils.objectForEach",a.a.A);
a.b("utils.addOrRemoveItem",a.a.Y);
a.b("unwrap",a.a.c);
Function.prototype.bind||(Function.prototype.bind=function(a){var c=this,d=Array.prototype.slice.call(arguments);
a=d.shift();
return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))
}
});
a.a.f=new function(){function a(b,h){var g=b[d];
if(!g||"null"===g||!e[g]){if(!h){return p
}g=b[d]="ko"+c++;
e[g]={}
}return e[g]
}var c=0,d="__ko__"+(new Date).getTime(),e={};
return{get:function(c,d){var e=a(c,!1);
return e===p?p:e[d]
},set:function(c,d,e){if(e!==p||a(c,!1)!==p){a(c,!0)[d]=e
}},clear:function(a){var b=a[d];
return b?(delete e[b],a[d]=null,!0):!1
},L:function(){return c+++d
}}
};
a.b("utils.domData",a.a.f);
a.b("utils.domData.clear",a.a.f.clear);
a.a.u=new function(){function b(b,c){var e=a.a.f.get(b,d);
e===p&&c&&(e=[],a.a.f.set(b,d,e));
return e
}function c(d){var e=b(d,!1);
if(e){for(var e=e.slice(0),k=0;
k<e.length;
k++){e[k](d)
}}a.a.f.clear(d);
a.a.u.cleanExternalData(d);
if(f[d.nodeType]){for(e=d.firstChild;
d=e;
){e=d.nextSibling,8===d.nodeType&&c(d)
}}}var d=a.a.f.L(),e={1:!0,8:!0,9:!0},f={1:!0,9:!0};
return{ja:function(a,c){if("function"!=typeof c){throw Error("Callback must be a function")
}b(a,!0).push(c)
},Ab:function(c,e){var k=b(c,!1);
k&&(a.a.ma(k,e),0==k.length&&a.a.f.set(c,d,p))
},M:function(b){if(e[b.nodeType]&&(c(b),f[b.nodeType])){var d=[];
a.a.$(d,b.getElementsByTagName("*"));
for(var k=0,l=d.length;
k<l;
k++){c(d[k])
}}return b
},removeNode:function(b){a.M(b);
b.parentNode&&b.parentNode.removeChild(b)
},cleanExternalData:function(a){t&&"function"==typeof t.cleanData&&t.cleanData([a])
}}
};
a.M=a.a.u.M;
a.removeNode=a.a.u.removeNode;
a.b("cleanNode",a.M);
a.b("removeNode",a.removeNode);
a.b("utils.domNodeDisposal",a.a.u);
a.b("utils.domNodeDisposal.addDisposeCallback",a.a.u.ja);
a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.u.Ab);
(function(){a.a.Qa=function(b){var c;
if(t){if(t.parseHTML){c=t.parseHTML(b)||[]
}else{if((c=t.clean([b]))&&c[0]){for(b=c[0];
b.parentNode&&11!==b.parentNode.nodeType;
){b=b.parentNode
}b.parentNode&&b.parentNode.removeChild(b)
}}}else{var d=a.a.ta(b).toLowerCase();
c=w.createElement("div");
d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];
b="ignored<div>"+d[1]+b+d[2]+"</div>";
for("function"==typeof A.innerShiv?c.appendChild(A.innerShiv(b)):c.innerHTML=b;
d[0]--;
){c=c.lastChild
}c=a.a.R(c.lastChild.childNodes)
}return c
};
a.a.Va=function(b,c){a.a.Fa(b);
c=a.a.c(c);
if(null!==c&&c!==p){if("string"!=typeof c&&(c=c.toString()),t){t(b).html(c)
}else{for(var d=a.a.Qa(c),e=0;
e<d.length;
e++){b.appendChild(d[e])
}}}}
})();
a.b("utils.parseHtmlFragment",a.a.Qa);
a.b("utils.setHtml",a.a.Va);
a.w=function(){function b(c,e){if(c){if(8==c.nodeType){var f=a.w.xb(c.nodeValue);
null!=f&&e.push({Rb:c,cc:f})
}else{if(1==c.nodeType){for(var f=0,h=c.childNodes,g=h.length;
f<g;
f++){b(h[f],e)
}}}}}var c={};
return{Na:function(a){if("function"!=typeof a){throw Error("You can only pass a function to ko.memoization.memoize()")
}var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);
c[b]=a;
return"\x3c!--[ko_memo:"+b+"]--\x3e"
},Hb:function(a,b){var f=c[a];
if(f===p){throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.")
}try{return f.apply(null,b||[]),!0
}finally{delete c[a]
}},Ib:function(c,e){var f=[];
b(c,f);
for(var h=0,g=f.length;
h<g;
h++){var k=f[h].Rb,l=[k];
e&&a.a.$(l,e);
a.w.Hb(f[h].cc,l);
k.nodeValue="";
k.parentNode&&k.parentNode.removeChild(k)
}},xb:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null
}}
}();
a.b("memoization",a.w);
a.b("memoization.memoize",a.w.Na);
a.b("memoization.unmemoize",a.w.Hb);
a.b("memoization.parseMemoText",a.w.xb);
a.b("memoization.unmemoizeDomNodeAndDescendants",a.w.Ib);
a.Ga={throttle:function(b,c){b.throttleEvaluation=c;
var d=null;
return a.h({read:b,write:function(a){clearTimeout(d);
d=setTimeout(function(){b(a)
},c)
}})
},rateLimit:function(a,c){var d,e,f;
"number"==typeof c?d=c:(d=c.timeout,e=c.method);
f="notifyWhenChangesStop"==e?O:N;
a.Ma(function(a){return f(a,d)
})
},notify:function(a,c){a.equalityComparer="always"==c?null:G
}};
var M={undefined:1,"boolean":1,number:1,string:1};
a.b("extenders",a.Ga);
a.Fb=function(b,c,d){this.target=b;
this.za=c;
this.Qb=d;
this.sb=!1;
a.s(this,"dispose",this.F)
};
a.Fb.prototype.F=function(){this.sb=!0;
this.Qb()
};
a.N=function(){a.a.sa(this,a.N.fn);
this.H={}
};
var F="change";
z={V:function(b,c,d){var e=this;
d=d||F;
var f=new a.Fb(e,c?b.bind(c):b,function(){a.a.ma(e.H[d],f)
});
e.o&&e.o();
e.H[d]||(e.H[d]=[]);
e.H[d].push(f);
return f
},notifySubscribers:function(b,c){c=c||F;
if(this.qb(c)){try{a.k.jb();
for(var d=this.H[c].slice(0),e=0,f;
f=d[e];
++e){f.sb||f.za(b)
}}finally{a.k.end()
}}},Ma:function(b){var c=this,d=a.v(c),e,f,h;
c.ia||(c.ia=c.notifySubscribers,c.notifySubscribers=function(a,b){b&&b!==F?"beforeChange"===b?c.bb(a):c.ia(a,b):c.cb(a)
});
var g=b(function(){d&&h===c&&(h=c());
e=!1;
c.Ka(f,h)&&c.ia(f=h)
});
c.cb=function(a){e=!0;
h=a;
g()
};
c.bb=function(a){e||(f=a,c.ia(a,"beforeChange"))
}
},qb:function(a){return this.H[a]&&this.H[a].length
},Wb:function(){var b=0;
a.a.A(this.H,function(a,d){b+=d.length
});
return b
},Ka:function(a,c){return !this.equalityComparer||!this.equalityComparer(a,c)
},extend:function(b){var c=this;
b&&a.a.A(b,function(b,e){var f=a.Ga[b];
"function"==typeof f&&(c=f(c,e)||c)
});
return c
}};
a.s(z,"subscribe",z.V);
a.s(z,"extend",z.extend);
a.s(z,"getSubscriptionsCount",z.Wb);
a.a.na&&a.a.ra(z,Function.prototype);
a.N.fn=z;
a.tb=function(a){return null!=a&&"function"==typeof a.V&&"function"==typeof a.notifySubscribers
};
a.b("subscribable",a.N);
a.b("isSubscribable",a.tb);
a.ca=a.k=function(){function b(a){d.push(e);
e=a
}function c(){e=d.pop()
}var d=[],e,f=0;
return{jb:b,end:c,zb:function(b){if(e){if(!a.tb(b)){throw Error("Only subscribable things can act as dependencies")
}e.za(b,b.Kb||(b.Kb=++f))
}},t:function(a,d,e){try{return b(),a.apply(d,e||[])
}finally{c()
}},fa:function(){if(e){return e.ba.fa()
}},pa:function(){if(e){return e.pa
}}}
}();
a.b("computedContext",a.ca);
a.b("computedContext.getDependenciesCount",a.ca.fa);
a.b("computedContext.isInitial",a.ca.pa);
a.m=function(b){function c(){if(0<arguments.length){return c.Ka(d,arguments[0])&&(c.P(),d=arguments[0],c.O()),this
}a.k.zb(c);
return d
}var d=b;
a.N.call(c);
a.a.sa(c,a.m.fn);
c.o=function(){return d
};
c.O=function(){c.notifySubscribers(d)
};
c.P=function(){c.notifySubscribers(d,"beforeChange")
};
a.s(c,"peek",c.o);
a.s(c,"valueHasMutated",c.O);
a.s(c,"valueWillMutate",c.P);
return c
};
a.m.fn={equalityComparer:G};
var E=a.m.hc="__ko_proto__";
a.m.fn[E]=a.m;
a.a.na&&a.a.ra(a.m.fn,a.N.fn);
a.Ha=function(b,c){return null===b||b===p||b[E]===p?!1:b[E]===c?!0:a.Ha(b[E],c)
};
a.v=function(b){return a.Ha(b,a.m)
};
a.ub=function(b){return"function"==typeof b&&b[E]===a.m||"function"==typeof b&&b[E]===a.h&&b.Yb?!0:!1
};
a.b("observable",a.m);
a.b("isObservable",a.v);
a.b("isWriteableObservable",a.ub);
a.T=function(b){b=b||[];
if("object"!=typeof b||!("length" in b)){throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.")
}b=a.m(b);
a.a.sa(b,a.T.fn);
return b.extend({trackArrayChanges:!0})
};
a.T.fn={remove:function(b){for(var c=this.o(),d=[],e="function"!=typeof b||a.v(b)?function(a){return a===b
}:b,f=0;
f<c.length;
f++){var h=c[f];
e(h)&&(0===d.length&&this.P(),d.push(h),c.splice(f,1),f--)
}d.length&&this.O();
return d
},removeAll:function(b){if(b===p){var c=this.o(),d=c.slice(0);
this.P();
c.splice(0,c.length);
this.O();
return d
}return b?this.remove(function(c){return 0<=a.a.l(b,c)
}):[]
},destroy:function(b){var c=this.o(),d="function"!=typeof b||a.v(b)?function(a){return a===b
}:b;
this.P();
for(var e=c.length-1;
0<=e;
e--){d(c[e])&&(c[e]._destroy=!0)
}this.O()
},destroyAll:function(b){return b===p?this.destroy(function(){return !0
}):b?this.destroy(function(c){return 0<=a.a.l(b,c)
}):[]
},indexOf:function(b){var c=this();
return a.a.l(c,b)
},replace:function(a,c){var d=this.indexOf(a);
0<=d&&(this.P(),this.o()[d]=c,this.O())
}};
a.a.r("pop push reverse shift sort splice unshift".split(" "),function(b){a.T.fn[b]=function(){var a=this.o();
this.P();
this.kb(a,b,arguments);
a=a[b].apply(a,arguments);
this.O();
return a
}
});
a.a.r(["slice"],function(b){a.T.fn[b]=function(){var a=this();
return a[b].apply(a,arguments)
}
});
a.a.na&&a.a.ra(a.T.fn,a.m.fn);
a.b("observableArray",a.T);
var I="arrayChange";
a.Ga.trackArrayChanges=function(b){function c(){if(!d){d=!0;
var c=b.notifySubscribers;
b.notifySubscribers=function(a,b){b&&b!==F||++f;
return c.apply(this,arguments)
};
var k=[].concat(b.o()||[]);
e=null;
b.V(function(c){c=[].concat(c||[]);
if(b.qb(I)){var d;
if(!e||1<f){e=a.a.Aa(k,c,{sparse:!0})
}d=e;
d.length&&b.notifySubscribers(d,I)
}k=c;
e=null;
f=0
})
}}if(!b.kb){var d=!1,e=null,f=0,h=b.V;
b.V=b.subscribe=function(a,b,d){d===I&&c();
return h.apply(this,arguments)
};
b.kb=function(b,c,l){function h(a,b,c){return r[r.length]={status:a,value:b,index:c}
}if(d&&!f){var r=[],m=b.length,q=l.length,s=0;
switch(c){case"push":s=m;
case"unshift":for(c=0;
c<q;
c++){h("added",l[c],s+c)
}break;
case"pop":s=m-1;
case"shift":m&&h("deleted",b[s],s);
break;
case"splice":c=Math.min(Math.max(0,0>l[0]?m+l[0]:l[0]),m);
for(var m=1===q?m:Math.min(c+(l[1]||0),m),q=c+q-2,s=Math.max(m,q),B=[],u=[],D=2;
c<s;
++c,++D){c<m&&u.push(h("deleted",b[c],c)),c<q&&B.push(h("added",l[D],c))
}a.a.nb(u,B);
break;
default:return
}e=r
}}
}};
a.ba=a.h=function(b,c,d){function e(){q=!0;
a.a.A(v,function(a,b){b.F()
});
v={};
x=0;
n=!1
}function f(){var a=g.throttleEvaluation;
a&&0<=a?(clearTimeout(t),t=setTimeout(h,a)):g.wa?g.wa():h()
}function h(){if(!r&&!q){if(y&&y()){if(!m){p();
return
}}else{m=!1
}r=!0;
try{var b=v,d=x;
a.k.jb({za:function(a,c){q||(d&&b[c]?(v[c]=b[c],++x,delete b[c],--d):v[c]||(v[c]=a.V(f),++x))
},ba:g,pa:!x});
v={};
x=0;
try{var e=c?s.call(c):s()
}finally{a.k.end(),d&&a.a.A(b,function(a,b){b.F()
}),n=!1
}g.Ka(l,e)&&(g.notifySubscribers(l,"beforeChange"),l=e,g.wa&&!g.throttleEvaluation||g.notifySubscribers(l))
}finally{r=!1
}x||p()
}}function g(){if(0<arguments.length){if("function"===typeof B){B.apply(c,arguments)
}else{throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.")
}return this
}n&&h();
a.k.zb(g);
return l
}function k(){return n||0<x
}var l,n=!0,r=!1,m=!1,q=!1,s=b;
s&&"object"==typeof s?(d=s,s=d.read):(d=d||{},s||(s=d.read));
if("function"!=typeof s){throw Error("Pass a function that returns the value of the ko.computed")
}var B=d.write,u=d.disposeWhenNodeIsRemoved||d.G||null,D=d.disposeWhen||d.Da,y=D,p=e,v={},x=0,t=null;
c||(c=d.owner);
a.N.call(g);
a.a.sa(g,a.h.fn);
g.o=function(){n&&!x&&h();
return l
};
g.fa=function(){return x
};
g.Yb="function"===typeof d.write;
g.F=function(){p()
};
g.ga=k;
var w=g.Ma;
g.Ma=function(a){w.call(g,a);
g.wa=function(){g.bb(l);
n=!0;
g.cb(g)
}
};
a.s(g,"peek",g.o);
a.s(g,"dispose",g.F);
a.s(g,"isActive",g.ga);
a.s(g,"getDependenciesCount",g.fa);
u&&(m=!0,u.nodeType&&(y=function(){return !a.a.Ea(u)||D&&D()
}));
!0!==d.deferEvaluation&&h();
u&&k()&&u.nodeType&&(p=function(){a.a.u.Ab(u,p);
e()
},a.a.u.ja(u,p));
return g
};
a.$b=function(b){return a.Ha(b,a.h)
};
z=a.m.hc;
a.h[z]=a.m;
a.h.fn={equalityComparer:G};
a.h.fn[z]=a.h;
a.a.na&&a.a.ra(a.h.fn,a.N.fn);
a.b("dependentObservable",a.h);
a.b("computed",a.h);
a.b("isComputed",a.$b);
(function(){function b(a,f,h){h=h||new d;
a=f(a);
if("object"!=typeof a||null===a||a===p||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean){return a
}var g=a instanceof Array?[]:{};
h.save(a,g);
c(a,function(c){var d=f(a[c]);
switch(typeof d){case"boolean":case"number":case"string":case"function":g[c]=d;
break;
case"object":case"undefined":var n=h.get(d);
g[c]=n!==p?n:b(d,f,h)
}});
return g
}function c(a,b){if(a instanceof Array){for(var c=0;
c<a.length;
c++){b(c)
}"function"==typeof a.toJSON&&b("toJSON")
}else{for(c in a){b(c)
}}}function d(){this.keys=[];
this.ab=[]
}a.Gb=function(c){if(0==arguments.length){throw Error("When calling ko.toJS, pass the object you want to convert.")
}return b(c,function(b){for(var c=0;
a.v(b)&&10>c;
c++){b=b()
}return b
})
};
a.toJSON=function(b,c,d){b=a.Gb(b);
return a.a.Ya(b,c,d)
};
d.prototype={save:function(b,c){var d=a.a.l(this.keys,b);
0<=d?this.ab[d]=c:(this.keys.push(b),this.ab.push(c))
},get:function(b){b=a.a.l(this.keys,b);
return 0<=b?this.ab[b]:p
}}
})();
a.b("toJS",a.Gb);
a.b("toJSON",a.toJSON);
(function(){a.i={p:function(b){switch(a.a.B(b)){case"option":return !0===b.__ko__hasDomDataOptionValue__?a.a.f.get(b,a.d.options.Pa):7>=a.a.oa?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;
case"select":return 0<=b.selectedIndex?a.i.p(b.options[b.selectedIndex]):p;
default:return b.value
}},X:function(b,c,d){switch(a.a.B(b)){case"option":switch(typeof c){case"string":a.a.f.set(b,a.d.options.Pa,p);
"__ko__hasDomDataOptionValue__" in b&&delete b.__ko__hasDomDataOptionValue__;
b.value=c;
break;
default:a.a.f.set(b,a.d.options.Pa,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof c?c:""
}break;
case"select":if(""===c||null===c){c=p
}for(var e=-1,f=0,h=b.options.length,g;
f<h;
++f){if(g=a.i.p(b.options[f]),g==c||""==g&&c===p){e=f;
break
}}if(d||0<=e||c===p&&1<b.size){b.selectedIndex=e
}break;
default:if(null===c||c===p){c=""
}b.value=c
}}}
})();
a.b("selectExtensions",a.i);
a.b("selectExtensions.readValue",a.i.p);
a.b("selectExtensions.writeValue",a.i.X);
a.g=function(){function b(b){b=a.a.ta(b);
123===b.charCodeAt(0)&&(b=b.slice(1,-1));
var c=[],d=b.match(e),g,m,q=0;
if(d){d.push(",");
for(var s=0,B;
B=d[s];
++s){var u=B.charCodeAt(0);
if(44===u){if(0>=q){g&&c.push(m?{key:g,value:m.join("")}:{unknown:g});
g=m=q=0;
continue
}}else{if(58===u){if(!m){continue
}}else{if(47===u&&s&&1<B.length){(u=d[s-1].match(f))&&!h[u[0]]&&(b=b.substr(b.indexOf(B)+1),d=b.match(e),d.push(","),s=-1,B="/")
}else{if(40===u||123===u||91===u){++q
}else{if(41===u||125===u||93===u){--q
}else{if(!g&&!m){g=34===u||39===u?B.slice(1,-1):B;
continue
}}}}}}m?m.push(B):m=[B]
}}return c
}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,h={"in":1,"return":1,"typeof":1},g={};
return{aa:[],W:g,Ra:b,qa:function(e,l){function f(b,e){var l,k=a.getBindingHandler(b);
if(k&&k.preprocess?e=k.preprocess(e,b,f):1){if(k=g[b]){l=e,0<=a.a.l(c,l)?l=!1:(k=l.match(d),l=null===k?!1:k[1]?"Object("+k[1]+")"+k[2]:l),k=l
}k&&m.push("'"+b+"':function(_z){"+l+"=_z}");
q&&(e="function(){return "+e+" }");
h.push("'"+b+"':"+e)
}}l=l||{};
var h=[],m=[],q=l.valueAccessors,s="string"===typeof e?b(e):e;
a.a.r(s,function(a){f(a.key||a.unknown,a.value)
});
m.length&&f("_ko_property_writers","{"+m.join(",")+" }");
return h.join(",")
},bc:function(a,b){for(var c=0;
c<a.length;
c++){if(a[c].key==b){return !0
}}return !1
},va:function(b,c,d,e,g){if(b&&a.v(b)){!a.ub(b)||g&&b.o()===e||b(e)
}else{if((b=c.get("_ko_property_writers"))&&b[d]){b[d](e)
}}}}
}();
a.b("expressionRewriting",a.g);
a.b("expressionRewriting.bindingRewriteValidators",a.g.aa);
a.b("expressionRewriting.parseObjectLiteral",a.g.Ra);
a.b("expressionRewriting.preProcessBindings",a.g.qa);
a.b("expressionRewriting._twoWayBindings",a.g.W);
a.b("jsonExpressionRewriting",a.g);
a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.g.qa);
(function(){function b(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)
}function c(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)
}function d(a,d){for(var e=a,g=1,k=[];
e=e.nextSibling;
){if(c(e)&&(g--,0===g)){return k
}k.push(e);
b(e)&&g++
}if(!d){throw Error("Cannot find closing comment tag to match: "+a.nodeValue)
}return null
}function e(a,b){var c=d(a,b);
return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:null
}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,h=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,g=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,k={ul:!0,ol:!0};
a.e={Q:{},childNodes:function(a){return b(a)?d(a):a.childNodes
},da:function(c){if(b(c)){c=a.e.childNodes(c);
for(var d=0,e=c.length;
d<e;
d++){a.removeNode(c[d])
}}else{a.a.Fa(c)
}},U:function(c,d){if(b(c)){a.e.da(c);
for(var e=c.nextSibling,g=0,k=d.length;
g<k;
g++){e.parentNode.insertBefore(d[g],e)
}}else{a.a.U(c,d)
}},yb:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)
},rb:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.e.yb(c,d)
},firstChild:function(a){return b(a)?!a.nextSibling||c(a.nextSibling)?null:a.nextSibling:a.firstChild
},nextSibling:function(a){b(a)&&(a=e(a));
return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling
},Xb:b,lc:function(a){return(a=(f?a.text:a.nodeValue).match(h))?a[1]:null
},wb:function(d){if(k[a.a.B(d)]){var g=d.firstChild;
if(g){do{if(1===g.nodeType){var f;
f=g.firstChild;
var h=null;
if(f){do{if(h){h.push(f)
}else{if(b(f)){var q=e(f,!0);
q?f=q:h=[f]
}else{c(f)&&(h=[f])
}}}while(f=f.nextSibling)
}if(f=h){for(h=g.nextSibling,q=0;
q<f.length;
q++){h?d.insertBefore(f[q],h):d.appendChild(f[q])
}}}}while(g=g.nextSibling)
}}}}
})();
a.b("virtualElements",a.e);
a.b("virtualElements.allowedBindings",a.e.Q);
a.b("virtualElements.emptyNode",a.e.da);
a.b("virtualElements.insertAfter",a.e.rb);
a.b("virtualElements.prepend",a.e.yb);
a.b("virtualElements.setDomNodeChildren",a.e.U);
(function(){a.J=function(){this.Nb={}
};
a.a.extend(a.J.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind");
case 8:return a.e.Xb(b);
default:return !1
}},getBindings:function(a,c){var d=this.getBindingsString(a,c);
return d?this.parseBindingsString(d,c,a):null
},getBindingAccessors:function(a,c){var d=this.getBindingsString(a,c);
return d?this.parseBindingsString(d,c,a,{valueAccessors:!0}):null
},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");
case 8:return a.e.lc(b);
default:return null
}},parseBindingsString:function(b,c,d,e){try{var f=this.Nb,h=b+(e&&e.valueAccessors||""),g;
if(!(g=f[h])){var k,l="with($context){with($data||{}){return{"+a.g.qa(b,e)+"}}}";
k=new Function("$context","$element",l);
g=f[h]=k
}return g(c,d)
}catch(n){throw n.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+n.message,n
}}});
a.J.instance=new a.J
})();
a.b("bindingProvider",a.J);
(function(){function b(a){return function(){return a
}
}function c(a){return a()
}function d(b){return a.a.Oa(a.k.t(b),function(a,c){return function(){return b()[c]
}
})
}function e(a,b){return d(this.getBindings.bind(this,a,b))
}function f(b,c,d){var e,g=a.e.firstChild(c),k=a.J.instance,f=k.preprocessNode;
if(f){for(;
e=g;
){g=a.e.nextSibling(e),f.call(k,e)
}g=a.e.firstChild(c)
}for(;
e=g;
){g=a.e.nextSibling(e),h(b,e,d)
}}function h(b,c,d){var e=!0,g=1===c.nodeType;
g&&a.e.wb(c);
if(g&&d||a.J.instance.nodeHasBindings(c)){e=k(c,null,b,d).shouldBindDescendants
}e&&!n[a.a.B(c)]&&f(b,c,!g)
}function g(b){var c=[],d={},e=[];
a.a.A(b,function y(g){if(!d[g]){var k=a.getBindingHandler(g);
k&&(k.after&&(e.push(g),a.a.r(k.after,function(c){if(b[c]){if(-1!==a.a.l(e,c)){throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "))
}y(c)
}}),e.length--),c.push({key:g,pb:k}));
d[g]=!0
}});
return c
}function k(b,d,k,f){var h=a.a.f.get(b,r);
if(!d){if(h){throw Error("You cannot apply bindings multiple times to the same element.")
}a.a.f.set(b,r,!0)
}!h&&f&&a.Eb(b,k);
var l;
if(d&&"function"!==typeof d){l=d
}else{var n=a.J.instance,m=n.getBindingAccessors||e,x=a.h(function(){(l=d?d(k,b):m.call(n,b,k))&&k.D&&k.D();
return l
},null,{G:b});
l&&x.ga()||(x=null)
}var t;
if(l){var w=x?function(a){return function(){return c(x()[a])
}
}:function(a){return l[a]
},z=function(){return a.a.Oa(x?x():l,c)
};
z.get=function(a){return l[a]&&c(w(a))
};
z.has=function(a){return a in l
};
f=g(l);
a.a.r(f,function(c){var d=c.pb.init,e=c.pb.update,g=c.key;
if(8===b.nodeType&&!a.e.Q[g]){throw Error("The binding '"+g+"' cannot be used with virtual elements")
}try{"function"==typeof d&&a.k.t(function(){var a=d(b,w(g),z,k.$data,k);
if(a&&a.controlsDescendantBindings){if(t!==p){throw Error("Multiple bindings ("+t+" and "+g+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")
}t=g
}}),"function"==typeof e&&a.h(function(){e(b,w(g),z,k.$data,k)
},null,{G:b})
}catch(f){throw f.message='Unable to process binding "'+g+": "+l[g]+'"\nMessage: '+f.message,f
}})
}return{shouldBindDescendants:t===p}
}function l(b){return b&&b instanceof a.I?b:new a.I(b)
}a.d={};
var n={script:!0};
a.getBindingHandler=function(b){return a.d[b]
};
a.I=function(b,c,d,e){var g=this,k="function"==typeof b&&!a.v(b),f,h=a.h(function(){var f=k?b():b,l=a.a.c(f);
c?(c.D&&c.D(),a.a.extend(g,c),h&&(g.D=h)):(g.$parents=[],g.$root=l,g.ko=a);
g.$rawData=f;
g.$data=l;
d&&(g[d]=l);
e&&e(g,c,l);
return g.$data
},null,{Da:function(){return f&&!a.a.eb(f)
},G:!0});
h.ga()&&(g.D=h,h.equalityComparer=null,f=[],h.Jb=function(b){f.push(b);
a.a.u.ja(b,function(b){a.a.ma(f,b);
f.length||(h.F(),g.D=h=p)
})
})
};
a.I.prototype.createChildContext=function(b,c,d){return new a.I(b,this,c,function(a,b){a.$parentContext=b;
a.$parent=b.$data;
a.$parents=(b.$parents||[]).slice(0);
a.$parents.unshift(a.$parent);
d&&d(a)
})
};
a.I.prototype.extend=function(b){return new a.I(this.D||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;
a.a.extend(c,"function"==typeof b?b():b)
})
};
var r=a.a.f.L(),m=a.a.f.L();
a.Eb=function(b,c){if(2==arguments.length){a.a.f.set(b,m,c),c.D&&c.D.Jb(b)
}else{return a.a.f.get(b,m)
}};
a.xa=function(b,c,d){1===b.nodeType&&a.e.wb(b);
return k(b,c,l(d),!0)
};
a.Lb=function(c,e,g){g=l(g);
return a.xa(c,"function"===typeof e?d(e.bind(null,g,c)):a.a.Oa(e,b),g)
};
a.gb=function(a,b){1!==b.nodeType&&8!==b.nodeType||f(l(a),b,!0)
};
a.fb=function(a,b){!t&&A.jQuery&&(t=A.jQuery);
if(b&&1!==b.nodeType&&8!==b.nodeType){throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node")
}b=b||A.document.body;
h(l(a),b,!0)
};
a.Ca=function(b){switch(b.nodeType){case 1:case 8:var c=a.Eb(b);
if(c){return c
}if(b.parentNode){return a.Ca(b.parentNode)
}}return p
};
a.Pb=function(b){return(b=a.Ca(b))?b.$data:p
};
a.b("bindingHandlers",a.d);
a.b("applyBindings",a.fb);
a.b("applyBindingsToDescendants",a.gb);
a.b("applyBindingAccessorsToNode",a.xa);
a.b("applyBindingsToNode",a.Lb);
a.b("contextFor",a.Ca);
a.b("dataFor",a.Pb)
})();
var L={"class":"className","for":"htmlFor"};
a.d.attr={update:function(b,c){var d=a.a.c(c())||{};
a.a.A(d,function(c,d){d=a.a.c(d);
var h=!1===d||null===d||d===p;
h&&b.removeAttribute(c);
8>=a.a.oa&&c in L?(c=L[c],h?b.removeAttribute(c):b[c]=d):h||b.setAttribute(c,d.toString());
"name"===c&&a.a.Cb(b,h?"":d.toString())
})
}};
(function(){a.d.checked={after:["value","attr"],init:function(b,c,d){function e(){return d.has("checkedValue")?a.a.c(d.get("checkedValue")):b.value
}function f(){var g=b.checked,f=r?e():g;
if(!a.ca.pa()&&(!k||g)){var h=a.k.t(c);
l?n!==f?(g&&(a.a.Y(h,f,!0),a.a.Y(h,n,!1)),n=f):a.a.Y(h,f,g):a.g.va(h,d,"checked",f,!0)
}}function h(){var d=a.a.c(c());
b.checked=l?0<=a.a.l(d,e()):g?d:e()===d
}var g="checkbox"==b.type,k="radio"==b.type;
if(g||k){var l=g&&a.a.c(c()) instanceof Array,n=l?e():p,r=k||l;
k&&!b.name&&a.d.uniqueName.init(b,function(){return !0
});
a.ba(f,null,{G:b});
a.a.q(b,"click",f);
a.ba(h,null,{G:b})
}}};
a.g.W.checked=!0;
a.d.checkedValue={update:function(b,c){b.value=a.a.c(c())
}}
})();
a.d.css={update:function(b,c){var d=a.a.c(c());
"object"==typeof d?a.a.A(d,function(c,d){d=a.a.c(d);
a.a.ua(b,c,d)
}):(d=String(d||""),a.a.ua(b,b.__ko__cssValue,!1),b.__ko__cssValue=d,a.a.ua(b,d,!0))
}};
a.d.enable={update:function(b,c){var d=a.a.c(c());
d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)
}};
a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return !a.a.c(c())
})
}};
a.d.event={init:function(b,c,d,e,f){var h=c()||{};
a.a.A(h,function(g){"string"==typeof g&&a.a.q(b,g,function(b){var h,n=c()[g];
if(n){try{var r=a.a.R(arguments);
e=f.$data;
r.unshift(e);
h=n.apply(e,r)
}finally{!0!==h&&(b.preventDefault?b.preventDefault():b.returnValue=!1)
}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())
}})
})
}};
a.d.foreach={vb:function(b){return function(){var c=b(),d=a.a.Sa(c);
if(!d||"number"==typeof d.length){return{foreach:c,templateEngine:a.K.Ja}
}a.a.c(c);
return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.K.Ja}
}
},init:function(b,c){return a.d.template.init(b,a.d.foreach.vb(c))
},update:function(b,c,d,e,f){return a.d.template.update(b,a.d.foreach.vb(c),d,e,f)
}};
a.g.aa.foreach=!1;
a.e.Q.foreach=!0;
a.d.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;
var k=b.ownerDocument;
if("activeElement" in k){var f;
try{f=k.activeElement
}catch(h){f=k.body
}e=f===b
}k=c();
a.g.va(k,d,"hasfocus",e,!0);
b.__ko_hasfocusLastValue=e;
b.__ko_hasfocusUpdating=!1
}var f=e.bind(null,!0),h=e.bind(null,!1);
a.a.q(b,"focus",f);
a.a.q(b,"focusin",f);
a.a.q(b,"blur",h);
a.a.q(b,"focusout",h)
},update:function(b,c){var d=!!a.a.c(c());
b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),a.k.t(a.a.ha,null,[b,d?"focusin":"focusout"]))
}};
a.g.W.hasfocus=!0;
a.d.hasFocus=a.d.hasfocus;
a.g.W.hasFocus=!0;
a.d.html={init:function(){return{controlsDescendantBindings:!0}
},update:function(b,c){a.a.Va(b,c())
}};
H("if");
H("ifnot",!1,!0);
H("with",!0,!1,function(a,c){return a.createChildContext(c)
});
var J={};
a.d.options={init:function(b){if("select"!==a.a.B(b)){throw Error("options binding applies only to SELECT elements")
}for(;
0<b.length;
){b.remove(0)
}return{controlsDescendantBindings:!0}
},update:function(b,c,d){function e(){return a.a.la(b.options,function(a){return a.selected
})
}function f(a,b,c){var d=typeof b;
return"function"==d?b(a):"string"==d?a[b]:c
}function h(c,d){if(r.length){var e=0<=a.a.l(r,a.i.p(d[0]));
a.a.Db(d[0],e);
m&&!e&&a.k.t(a.a.ha,null,[b,"change"])
}}var g=0!=b.length&&b.multiple?b.scrollTop:null,k=a.a.c(c()),l=d.get("optionsIncludeDestroyed");
c={};
var n,r;
r=b.multiple?a.a.ya(e(),a.i.p):0<=b.selectedIndex?[a.i.p(b.options[b.selectedIndex])]:[];
k&&("undefined"==typeof k.length&&(k=[k]),n=a.a.la(k,function(b){return l||b===p||null===b||!a.a.c(b._destroy)
}),d.has("optionsCaption")&&(k=a.a.c(d.get("optionsCaption")),null!==k&&k!==p&&n.unshift(J)));
var m=!1;
c.beforeRemove=function(a){b.removeChild(a)
};
k=h;
d.has("optionsAfterRender")&&(k=function(b,c){h(0,c);
a.k.t(d.get("optionsAfterRender"),null,[c[0],b!==J?b:p])
});
a.a.Ua(b,n,function(c,e,g){g.length&&(r=g[0].selected?[a.i.p(g[0])]:[],m=!0);
e=b.ownerDocument.createElement("option");
c===J?(a.a.Xa(e,d.get("optionsCaption")),a.i.X(e,p)):(g=f(c,d.get("optionsValue"),c),a.i.X(e,a.a.c(g)),c=f(c,d.get("optionsText"),g),a.a.Xa(e,c));
return[e]
},c,k);
a.k.t(function(){d.get("valueAllowUnset")&&d.has("value")?a.i.X(b,a.a.c(d.get("value")),!0):(b.multiple?r.length&&e().length<r.length:r.length&&0<=b.selectedIndex?a.i.p(b.options[b.selectedIndex])!==r[0]:r.length||0<=b.selectedIndex)&&a.a.ha(b,"change")
});
a.a.Tb(b);
g&&20<Math.abs(g-b.scrollTop)&&(b.scrollTop=g)
}};
a.d.options.Pa=a.a.f.L();
a.d.selectedOptions={after:["options","foreach"],init:function(b,c,d){a.a.q(b,"change",function(){var e=c(),f=[];
a.a.r(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.i.p(b))
});
a.g.va(e,d,"selectedOptions",f)
})
},update:function(b,c){if("select"!=a.a.B(b)){throw Error("values binding applies only to SELECT elements")
}var d=a.a.c(c());
d&&"number"==typeof d.length&&a.a.r(b.getElementsByTagName("option"),function(b){var c=0<=a.a.l(d,a.i.p(b));
a.a.Db(b,c)
})
}};
a.g.W.selectedOptions=!0;
a.d.style={update:function(b,c){var d=a.a.c(c()||{});
a.a.A(d,function(c,d){d=a.a.c(d);
b.style[c]=d||""
})
}};
a.d.submit={init:function(b,c,d,e,f){if("function"!=typeof c()){throw Error("The value for a submit binding must be a function")
}a.a.q(b,"submit",function(a){var d,e=c();
try{d=e.call(f.$data,b)
}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)
}})
}};
a.d.text={init:function(){return{controlsDescendantBindings:!0}
},update:function(b,c){a.a.Xa(b,c())
}};
a.e.Q.text=!0;
a.d.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.d.uniqueName.Ob;
a.a.Cb(b,d)
}}};
a.d.uniqueName.Ob=0;
a.d.value={after:["options","foreach"],init:function(b,c,d){function e(){g=!1;
var e=c(),f=a.i.p(b);
a.g.va(e,d,"value",f)
}var f=["change"],h=d.get("valueUpdate"),g=!1;
h&&("string"==typeof h&&(h=[h]),a.a.$(f,h),f=a.a.ib(f));
!a.a.oa||"input"!=b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.l(f,"propertychange")||(a.a.q(b,"propertychange",function(){g=!0
}),a.a.q(b,"focus",function(){g=!1
}),a.a.q(b,"blur",function(){g&&e()
}));
a.a.r(f,function(c){var d=e;
a.a.kc(c,"after")&&(d=function(){setTimeout(e,0)
},c=c.substring(5));
a.a.q(b,c,d)
})
},update:function(b,c,d){var e=a.a.c(c());
c=a.i.p(b);
if(e!==c){if("select"===a.a.B(b)){var f=d.get("valueAllowUnset");
d=function(){a.i.X(b,e,f)
};
d();
f||e===a.i.p(b)?setTimeout(d,0):a.k.t(a.a.ha,null,[b,"change"])
}else{a.i.X(b,e)
}}}};
a.g.W.value=!0;
a.d.visible={update:function(b,c){var d=a.a.c(c()),e="none"!=b.style.display;
d&&!e?b.style.display="":!d&&e&&(b.style.display="none")
}};
(function(b){a.d[b]={init:function(c,d,e,f,h){return a.d.event.init.call(this,c,function(){var a={};
a[b]=d();
return a
},e,f,h)
}}
})("click");
a.C=function(){};
a.C.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource")
};
a.C.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock")
};
a.C.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||w;
var d=c.getElementById(b);
if(!d){throw Error("Cannot find template with ID "+b)
}return new a.n.j(d)
}if(1==b.nodeType||8==b.nodeType){return new a.n.Z(b)
}throw Error("Unknown template type: "+b)
};
a.C.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,e);
return this.renderTemplateSource(a,c,d)
};
a.C.prototype.isTemplateRewritten=function(a,c){return !1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")
};
a.C.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);
c=c(a.text());
a.text(c);
a.data("isRewritten",!0)
};
a.b("templateEngine",a.C);
a.Za=function(){function b(b,c,d,g){b=a.g.Ra(b);
for(var k=a.g.aa,l=0;
l<b.length;
l++){var n=b[l].key;
if(k.hasOwnProperty(n)){var r=k[n];
if("function"===typeof r){if(n=r(b[l].value)){throw Error(n)
}}else{if(!r){throw Error("This template engine does not support the '"+n+"' binding within its templates")
}}}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.g.qa(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";
return g.createJavaScriptEvaluatorBlock(d)+c
}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
return{Ub:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Za.dc(b,c)
},d)
},dc:function(a,f){return a.replace(c,function(a,c,d,e,n){return b(n,c,d,f)
}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)
})
},Mb:function(b,c){return a.w.Na(function(d,g){var k=d.nextSibling;
k&&k.nodeName.toLowerCase()===c&&a.xa(k,b,g)
})
}}
}();
a.b("__tr_ambtns",a.Za.Mb);
(function(){a.n={};
a.n.j=function(a){this.j=a
};
a.n.j.prototype.text=function(){var b=a.a.B(this.j),b="script"===b?"text":"textarea"===b?"value":"innerHTML";
if(0==arguments.length){return this.j[b]
}var c=arguments[0];
"innerHTML"===b?a.a.Va(this.j,c):this.j[b]=c
};
var b=a.a.f.L()+"_";
a.n.j.prototype.data=function(c){if(1===arguments.length){return a.a.f.get(this.j,b+c)
}a.a.f.set(this.j,b+c,arguments[1])
};
var c=a.a.f.L();
a.n.Z=function(a){this.j=a
};
a.n.Z.prototype=new a.n.j;
a.n.Z.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.j,c)||{};
b.$a===p&&b.Ba&&(b.$a=b.Ba.innerHTML);
return b.$a
}a.a.f.set(this.j,c,{$a:arguments[0]})
};
a.n.j.prototype.nodes=function(){if(0==arguments.length){return(a.a.f.get(this.j,c)||{}).Ba
}a.a.f.set(this.j,c,{Ba:arguments[0]})
};
a.b("templateSources",a.n);
a.b("templateSources.domElement",a.n.j);
a.b("templateSources.anonymousTemplate",a.n.Z)
})();
(function(){function b(b,c,d){var e;
for(c=a.e.nextSibling(c);
b&&(e=b)!==c;
){b=a.e.nextSibling(e),d(e,b)
}}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],h=e.parentNode,m=a.J.instance,q=m.preprocessNode;
if(q){b(e,f,function(a,b){var c=a.previousSibling,d=q.call(m,a);
d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))
});
c.length=0;
if(!e){return
}e===f?c.push(e):(c.push(e,f),a.a.ea(c,h))
}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.fb(d,b)
});
b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.w.Ib(b,[d])
});
a.a.ea(c,h)
}}function d(a){return a.nodeType?a:0<a.length?a[0]:null
}function e(b,e,h,n,r){r=r||{};
var m=b&&d(b),m=m&&m.ownerDocument,q=r.templateEngine||f;
a.Za.Ub(h,q,m);
h=q.renderTemplate(h,n,r,m);
if("number"!=typeof h.length||0<h.length&&"number"!=typeof h[0].nodeType){throw Error("Template engine must return an array of DOM nodes")
}m=!1;
switch(e){case"replaceChildren":a.e.U(b,h);
m=!0;
break;
case"replaceNode":a.a.Bb(b,h);
m=!0;
break;
case"ignoreTargetNode":break;
default:throw Error("Unknown renderMode: "+e)
}m&&(c(h,n),r.afterRender&&a.k.t(r.afterRender,null,[h,n.$data]));
return h
}var f;
a.Wa=function(b){if(b!=p&&!(b instanceof a.C)){throw Error("templateEngine must inherit from ko.templateEngine")
}f=b
};
a.Ta=function(b,c,h,n,r){h=h||{};
if((h.templateEngine||f)==p){throw Error("Set a template engine before calling renderTemplate")
}r=r||"replaceChildren";
if(n){var m=d(n);
return a.h(function(){var f=c&&c instanceof a.I?c:new a.I(a.a.c(c)),p=a.v(b)?b():"function"==typeof b?b(f.$data,f):b,f=e(n,r,p,f,h);
"replaceNode"==r&&(n=f,m=d(n))
},null,{Da:function(){return !m||!a.a.Ea(m)
},G:m&&"replaceNode"==r?m.parentNode:m})
}return a.w.Na(function(d){a.Ta(b,c,h,d,"replaceNode")
})
};
a.jc=function(b,d,f,h,r){function m(a,b){c(b,s);
f.afterRender&&f.afterRender(b,a)
}function q(a,c){s=r.createChildContext(a,f.as,function(a){a.$index=c
});
var d="function"==typeof b?b(a,s):b;
return e(null,"ignoreTargetNode",d,s,f)
}var s;
return a.h(function(){var b=a.a.c(d)||[];
"undefined"==typeof b.length&&(b=[b]);
b=a.a.la(b,function(b){return f.includeDestroyed||b===p||null===b||!a.a.c(b._destroy)
});
a.k.t(a.a.Ua,null,[h,b,q,f,m])
},null,{G:h})
};
var h=a.a.f.L();
a.d.template={init:function(b,c){var d=a.a.c(c());
"string"==typeof d||d.name?a.e.da(b):(d=a.e.childNodes(b),d=a.a.ec(d),(new a.n.Z(b)).nodes(d));
return{controlsDescendantBindings:!0}
},update:function(b,c,d,e,f){var m=c(),q;
c=a.a.c(m);
d=!0;
e=null;
"string"==typeof c?c={}:(m=c.name,"if" in c&&(d=a.a.c(c["if"])),d&&"ifnot" in c&&(d=!a.a.c(c.ifnot)),q=a.a.c(c.data));
"foreach" in c?e=a.jc(m||b,d&&c.foreach||[],c,b,f):d?(f="data" in c?f.createChildContext(q,c.as):f,e=a.Ta(m||b,f,c,b)):a.e.da(b);
f=e;
(q=a.a.f.get(b,h))&&"function"==typeof q.F&&q.F();
a.a.f.set(b,h,f&&f.ga()?f:p)
}};
a.g.aa.template=function(b){b=a.g.Ra(b);
return 1==b.length&&b[0].unknown||a.g.bc(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"
};
a.e.Q.template=!0
})();
a.b("setTemplateEngine",a.Wa);
a.b("renderTemplate",a.Ta);
a.a.nb=function(a,c,d){if(a.length&&c.length){var e,f,h,g,k;
for(e=f=0;
(!d||e<d)&&(g=a[f]);
++f){for(h=0;
k=c[h];
++h){if(g.value===k.value){g.moved=k.index;
k.moved=g.index;
c.splice(h,1);
e=h=0;
break
}}e+=h
}}};
a.a.Aa=function(){function b(b,d,e,f,h){var g=Math.min,k=Math.max,l=[],n,p=b.length,m,q=d.length,s=q-p||1,t=p+q+1,u,w,y;
for(n=0;
n<=p;
n++){for(w=u,l.push(u=[]),y=g(q,n+s),m=k(0,n-1);
m<=y;
m++){u[m]=m?n?b[n-1]===d[m-1]?w[m-1]:g(w[m]||t,u[m-1]||t)+1:m+1:n+1
}}g=[];
k=[];
s=[];
n=p;
for(m=q;
n||m;
){q=l[n][m]-1,m&&q===l[n][m-1]?k.push(g[g.length]={status:e,value:d[--m],index:m}):n&&q===l[n-1][m]?s.push(g[g.length]={status:f,value:b[--n],index:n}):(--m,--n,h.sparse||g.push({status:"retained",value:d[m]}))
}a.a.nb(k,s,10*p);
return g.reverse()
}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};
a=a||[];
d=d||[];
return a.length<=d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)
}
}();
a.b("utils.compareArrays",a.a.Aa);
(function(){function b(b,c,f,h,g){var k=[],l=a.h(function(){var l=c(f,g,a.a.ea(k,b))||[];
0<k.length&&(a.a.Bb(k,l),h&&a.k.t(h,null,[f,l,g]));
k.length=0;
a.a.$(k,l)
},null,{G:b,Da:function(){return !a.a.eb(k)
}});
return{S:k,h:l.ga()?l:p}
}var c=a.a.f.L();
a.a.Ua=function(d,e,f,h,g){function k(b,c){v=r[c];
u!==c&&(z[b]=v);
v.Ia(u++);
a.a.ea(v.S,d);
s.push(v);
y.push(v)
}function l(b,c){if(b){for(var d=0,e=c.length;
d<e;
d++){c[d]&&a.a.r(c[d].S,function(a){b(a,d,c[d].ka)
})
}}}e=e||[];
h=h||{};
var n=a.a.f.get(d,c)===p,r=a.a.f.get(d,c)||[],m=a.a.ya(r,function(a){return a.ka
}),q=a.a.Aa(m,e,h.dontLimitMoves),s=[],t=0,u=0,w=[],y=[];
e=[];
for(var z=[],m=[],v,x=0,A,C;
A=q[x];
x++){switch(C=A.moved,A.status){case"deleted":C===p&&(v=r[t],v.h&&v.h.F(),w.push.apply(w,a.a.ea(v.S,d)),h.beforeRemove&&(e[x]=v,y.push(v)));
t++;
break;
case"retained":k(x,t++);
break;
case"added":C!==p?k(x,C):(v={ka:A.value,Ia:a.m(u++)},s.push(v),y.push(v),n||(m[x]=v))
}}l(h.beforeMove,z);
a.a.r(w,h.beforeRemove?a.M:a.removeNode);
for(var x=0,n=a.e.firstChild(d),E;
v=y[x];
x++){v.S||a.a.extend(v,b(d,f,v.ka,g,v.Ia));
for(t=0;
q=v.S[t];
n=q.nextSibling,E=q,t++){q!==n&&a.e.rb(d,q,E)
}!v.Zb&&g&&(g(v.ka,v.S,v.Ia),v.Zb=!0)
}l(h.beforeRemove,e);
l(h.afterMove,z);
l(h.afterAdd,m);
a.a.f.set(d,c,s)
}
})();
a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Ua);
a.K=function(){this.allowTemplateRewriting=!1
};
a.K.prototype=new a.C;
a.K.prototype.renderTemplateSource=function(b){var c=(9>a.a.oa?0:b.nodes)?b.nodes():null;
if(c){return a.a.R(c.cloneNode(!0).childNodes)
}b=b.text();
return a.a.Qa(b)
};
a.K.Ja=new a.K;
a.Wa(a.K.Ja);
a.b("nativeTemplateEngine",a.K);
(function(){a.La=function(){var a=this.ac=function(){if(!t||!t.tmpl){return 0
}try{if(0<=t.tmpl.tag.tmpl.open.toString().indexOf("__")){return 2
}}catch(a){}return 1
}();
this.renderTemplateSource=function(b,e,f){f=f||{};
if(2>a){throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.")
}var h=b.data("precompiled");
h||(h=b.text()||"",h=t.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));
b=[e.$data];
e=t.extend({koBindingContext:e},f.templateOptions);
e=t.tmpl(h,b,e);
e.appendTo(w.createElement("div"));
t.fragments={};
return e
};
this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"
};
this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")
};
0<a&&(t.tmpl.tag.ko_code={open:"__.push($1 || '');"},t.tmpl.tag.ko_with={open:"with($1) {",close:"} "})
};
a.La.prototype=new a.C;
var b=new a.La;
0<b.ac&&a.Wa(b);
a.b("jqueryTmplTemplateEngine",a.La)
})()
})
})()
})();
(function(a){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?a(require("knockout"),exports):"function"===typeof define&&define.amd?define(["knockout","exports"],a):a(ko,ko.mapping={})
})(function(X,W){function q(z,y){var B,x;
for(x in y){if(y.hasOwnProperty(x)&&y[x]){if(B=W.getType(z[x]),x&&z[x]&&"array"!==B&&"string"!==B){q(z[x],y[x])
}else{if("array"===W.getType(z[x])&&"array"===W.getType(y[x])){B=z;
for(var p=x,h=z[x],f=y[x],C={},j=h.length-1;
0<=j;
--j){C[h[j]]=h[j]
}for(j=f.length-1;
0<=j;
--j){C[f[j]]=f[j]
}h=[];
f=void 0;
for(f in C){h.push(C[f])
}B[p]=h
}else{z[x]=y[x]
}}}}}function A(e,h){var f={};
q(f,e);
q(f,h);
return f
}function o(h,y){for(var j=A({},h),x=m.length-1;
0<=x;
x--){var p=m[x];
j[p]&&(j[""] instanceof Object||(j[""]={}),j[""][p]=j[p],delete j[p])
}y&&(j.ignore=V(y.ignore,j.ignore),j.include=V(y.include,j.include),j.copy=V(y.copy,j.copy),j.observe=V(y.observe,j.observe));
j.ignore=V(j.ignore,U.ignore);
j.include=V(j.include,U.include);
j.copy=V(j.copy,U.copy);
j.observe=V(j.observe,U.observe);
j.mappedProperties=j.mappedProperties||{};
j.copiedProperties=j.copiedProperties||{};
return j
}function V(e,f){"array"!==W.getType(e)&&(e="undefined"===W.getType(e)?[]:[e]);
"array"!==W.getType(f)&&(f="undefined"===W.getType(f)?[]:[f]);
return X.utils.arrayGetDistinctValues(e.concat(f))
}function w(ad,ac,ae,ab,T,S,Q){var H="array"===W.getType(X.utils.unwrapObservable(ac));
S=S||"";
if(W.isMapped(ad)){var aa=X.utils.unwrapObservable(ad)[M];
ae=A(aa,ae)
}var Y=Q||T,Z=function(){return ae[ab]&&ae[ab].create instanceof Function
},C=function(h){var x=v,j=X.dependentObservable;
X.dependentObservable=function(z,y,ah){ah=ah||{};
z&&"object"==typeof z&&(ah=z);
var af=ah.deferEvaluation,ag=!1;
ah.deferEvaluation=!0;
z=new u(z,y,ah);
if(!af){var B=z,af=X.dependentObservable;
X.dependentObservable=u;
z=X.isWriteableObservable(B);
X.dependentObservable=af;
af=u({read:function(){ag||(X.utils.arrayRemoveItem(x,B),ag=!0);
return B.apply(B,arguments)
},write:z&&function(ai){return B(ai)
},deferEvaluation:!0});
af.__DO=B;
z=af;
x.push(z)
}return z
};
X.dependentObservable.fn=u.fn;
X.computed=X.dependentObservable;
h=X.utils.unwrapObservable(T) instanceof Array?ae[ab].create({data:h||ac,parent:Y,skip:l}):ae[ab].create({data:h||ac,parent:Y});
X.dependentObservable=j;
X.computed=X.dependentObservable;
return h
},G=function(){return ae[ab]&&ae[ab].update instanceof Function
},F=function(h,x){var j={data:x||ac,parent:Y,target:X.utils.unwrapObservable(h)};
X.isWriteableObservable(h)&&(j.observable=h);
return ae[ab].update(j)
};
if(Q=t.get(ac)){return Q
}ab=ab||"";
if(H){var H=[],K=!1,R=function(h){return h
};
ae[ab]&&ae[ab].key&&(R=ae[ab].key,K=!0);
X.isObservable(ad)||(ad=X.observableArray([]),ad.mappedRemove=function(h){var j="function"==typeof h?h:function(x){return x===R(h)
};
return ad.remove(function(x){return j(R(x))
})
},ad.mappedRemoveAll=function(h){var j=D(h,R);
return ad.remove(function(x){return -1!=X.utils.arrayIndexOf(j,R(x))
})
},ad.mappedDestroy=function(h){var j="function"==typeof h?h:function(x){return x===R(h)
};
return ad.destroy(function(x){return j(R(x))
})
},ad.mappedDestroyAll=function(h){var j=D(h,R);
return ad.destroy(function(x){return -1!=X.utils.arrayIndexOf(j,R(x))
})
},ad.mappedIndexOf=function(h){var j=D(ad(),R);
h=R(h);
return X.utils.arrayIndexOf(j,h)
},ad.mappedGet=function(h){return ad()[ad.mappedIndexOf(h)]
},ad.mappedCreate=function(h){if(-1!==ad.mappedIndexOf(h)){throw Error("There already is an object with the key that you specified.")
}var j=Z()?C(h):h;
G()&&(h=F(j,h),X.isWriteableObservable(j)?j(h):j=h);
ad.push(j);
return j
});
Q=D(X.utils.unwrapObservable(ad),R).sort();
aa=D(ac,R);
K&&aa.sort();
K=X.utils.compareArrays(Q,aa);
Q={};
var p,P=X.utils.unwrapObservable(ac),f={},e=!0,aa=0;
for(p=P.length;
aa<p;
aa++){var L=R(P[aa]);
if(void 0===L||L instanceof Object){e=!1;
break
}f[L]=P[aa]
}var P=[],O=0,aa=0;
for(p=K.length;
aa<p;
aa++){var L=K[aa],N,E=S+"["+aa+"]";
switch(L.status){case"added":var I=e?f[L.value]:n(X.utils.unwrapObservable(ac),L.value,R);
N=w(void 0,I,ae,ab,ad,E,T);
Z()||(N=X.utils.unwrapObservable(N));
E=k(X.utils.unwrapObservable(ac),I,Q);
N===l?O++:P[E-O]=N;
Q[E]=!0;
break;
case"retained":I=e?f[L.value]:n(X.utils.unwrapObservable(ac),L.value,R);
N=n(ad,L.value,R);
w(N,I,ae,ab,ad,E,T);
E=k(X.utils.unwrapObservable(ac),I,Q);
P[E]=N;
Q[E]=!0;
break;
case"deleted":N=n(ad,L.value,R)
}H.push({event:L.status,item:N})
}ad(P);
ae[ab]&&ae[ab].arrayChanged&&X.utils.arrayForEach(H,function(h){ae[ab].arrayChanged(h.event,h.item)
})
}else{if(g(ac)){ad=X.utils.unwrapObservable(ad);
if(!ad){if(Z()){return K=C(),G()&&(K=F(K)),K
}if(G()){return F(K)
}ad={}
}G()&&(ad=F(ad));
t.save(ac,ad);
if(G()){return ad
}d(ac,function(y){var x=S.length?S+"."+y:y;
if(-1==X.utils.arrayIndexOf(ae.ignore,x)){if(-1!=X.utils.arrayIndexOf(ae.copy,x)){ad[y]=ac[y]
}else{if("object"!=typeof ac[y]&&"array"!=typeof ac[y]&&0<ae.observe.length&&-1==X.utils.arrayIndexOf(ae.observe,x)){ad[y]=ac[y],ae.copiedProperties[x]=!0
}else{var j=t.get(ac[y]),h=w(ad[y],ac[y],ae,y,ad,x,ad),j=j||h;
if(0<ae.observe.length&&-1==X.utils.arrayIndexOf(ae.observe,x)){ad[y]=j(),ae.copiedProperties[x]=!0
}else{if(X.isWriteableObservable(ad[y])){if(j=X.utils.unwrapObservable(j),ad[y]()!==j){ad[y](j)
}}else{j=void 0===ad[y]?j:X.utils.unwrapObservable(j),ad[y]=j
}ae.mappedProperties[x]=!0
}}}}})
}else{switch(W.getType(ac)){case"function":G()?X.isWriteableObservable(ac)?(ac(F(ac)),ad=ac):ad=F(ac):ad=ac;
break;
default:if(X.isWriteableObservable(ad)){return N=G()?F(ad):X.utils.unwrapObservable(ac),ad(N),N
}Z()||G();
ad=Z()?C():X.observable(X.utils.unwrapObservable(ac));
G()&&ad(F(ad))
}}}return ad
}function k(f,x,h){for(var p=0,j=f.length;
p<j;
p++){if(!0!==h[p]&&f[p]===x){return p
}}return null
}function c(e,h){var f;
h&&(f=h(e));
"undefined"===W.getType(f)&&(f=e);
return X.utils.unwrapObservable(f)
}function n(e,y,j){e=X.utils.unwrapObservable(e);
for(var x=0,p=e.length;
x<p;
x++){var h=e[x];
if(c(h,j)===y){return h
}}throw Error("When calling ko.update*, the key '"+y+"' was not found!")
}function D(e,f){return X.utils.arrayMap(X.utils.unwrapObservable(e),function(h){return f?c(h,f):h
})
}function d(e,h){if("array"===W.getType(e)){for(var f=0;
f<e.length;
f++){h(f)
}}else{for(f in e){h(f)
}}}function g(e){var f=W.getType(e);
return("object"===f||"array"===f)&&null!==e
}function a(){var e=[],f=[];
this.save=function(h,p){var j=X.utils.arrayIndexOf(e,h);
0<=j?f[j]=p:(e.push(h),f.push(p))
};
this.get=function(h){h=X.utils.arrayIndexOf(e,h);
return 0<=h?f[h]:void 0
}
}function b(){var e={},f=function(h){var p;
try{p=h
}catch(j){p="$$$"
}h=e[p];
void 0===h&&(h=new a,e[p]=h);
return h
};
this.save=function(j,h){f(j).save(j,h)
};
this.get=function(h){return f(h).get(h)
}
}var M="__ko_mapping__",u=X.dependentObservable,J=0,v,t,m=["create","update","key","arrayChanged"],l={},r={include:["_destroy"],ignore:[],copy:[],observe:[]},U=r;
W.isMapped=function(e){return(e=X.utils.unwrapObservable(e))&&e[M]
};
W.fromJS=function(h){if(0==arguments.length){throw Error("When calling ko.fromJS, pass the object you want to convert.")
}try{J++||(v=[],t=new b);
var z,j;
2==arguments.length&&(arguments[1][M]?j=arguments[1]:z=arguments[1]);
3==arguments.length&&(z=arguments[1],j=arguments[2]);
j&&(z=A(z,j[M]));
z=o(z);
var y=w(j,h,z);
j&&(y=j);
if(!--J){for(;
v.length;
){var x=v.pop();
x&&(x(),x.__DO.throttleEvaluation=x.throttleEvaluation)
}}y[M]=A(y[M],z);
return y
}catch(p){throw J=0,p
}};
W.fromJSON=function(e){var f=X.utils.parseJson(e);
arguments[0]=f;
return W.fromJS.apply(this,arguments)
};
W.updateFromJS=function(){throw Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!")
};
W.updateFromJSON=function(){throw Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!")
};
W.toJS=function(e,f){U||W.resetDefaultOptions();
if(0==arguments.length){throw Error("When calling ko.mapping.toJS, pass the object you want to convert.")
}if("array"!==W.getType(U.ignore)){throw Error("ko.mapping.defaultOptions().ignore should be an array.")
}if("array"!==W.getType(U.include)){throw Error("ko.mapping.defaultOptions().include should be an array.")
}if("array"!==W.getType(U.copy)){throw Error("ko.mapping.defaultOptions().copy should be an array.")
}f=o(f,e[M]);
return W.visitModel(e,function(h){return X.utils.unwrapObservable(h)
},f)
};
W.toJSON=function(e,h){var f=W.toJS(e,h);
return X.utils.stringifyJson(f)
};
W.defaultOptions=function(){if(0<arguments.length){U=arguments[0]
}else{return U
}};
W.resetDefaultOptions=function(){U={include:r.include.slice(0),ignore:r.ignore.slice(0),copy:r.copy.slice(0)}
};
W.getType=function(e){if(e&&"object"===typeof e){if(e.constructor===Date){return"date"
}if(e.constructor===Array){return"array"
}}return typeof e
};
W.visitModel=function(e,x,h){h=h||{};
h.visitedObjects=h.visitedObjects||new b;
var p,j=X.utils.unwrapObservable(e);
if(g(j)){h=o(h,j[M]),x(e,h.parentName),p="array"===W.getType(j)?[]:{}
}else{return x(e,h.parentName)
}h.visitedObjects.save(e,p);
var f=h.parentName;
d(j,function(y){if(!(h.ignore&&-1!=X.utils.arrayIndexOf(h.ignore,y))){var z=j[y],C=h,B=f||"";
"array"===W.getType(j)?f&&(B+="["+y+"]"):(f&&(B+="."),B+=y);
C.parentName=B;
if(!(-1===X.utils.arrayIndexOf(h.copy,y)&&-1===X.utils.arrayIndexOf(h.include,y)&&j[M]&&j[M].mappedProperties&&!j[M].mappedProperties[y]&&j[M].copiedProperties&&!j[M].copiedProperties[y]&&"array"!==W.getType(j))){switch(W.getType(X.utils.unwrapObservable(z))){case"object":case"array":case"undefined":C=h.visitedObjects.get(z);
p[y]="undefined"!==W.getType(C)?C:W.visitModel(z,x,h);
break;
default:p[y]=x(z,h.parentName)
}}}});
return p
}
});
ko.bindingHandlers.typeahead={init:function(b,f,e,g,c){var h=$(b);
var e=e();
var d={source:ko.utils.unwrapObservable(f())};
if(e.typeahead){$.each(e.typeahead,function(k,l){d[k]=ko.utils.unwrapObservable(l)
})
}h.attr("autocomplete","off");
h.typeahead(d);
if(e.typeahead.autoselect!==undefined&&e.typeahead.autoselect===false){var a=h.data("typeahead");
var j=a.render;
a.render=function(){var k=j.apply(this,arguments);
k.$menu.children().first().removeClass("active");
return k
}
}}};
/*!
 * jQuery UI 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(f,e){function g(a){return !f(a).parents().andSelf().filter(function(){return f.curCSS(this,"visibility")==="hidden"||f.expr.filters.hidden(this)
}).length
}function h(a,m){var l=a.nodeName.toLowerCase();
if("area"===l){var k=a.parentNode,j=k.name,d;
if(!a.href||!j||k.nodeName.toLowerCase()!=="map"){return !1
}d=f("img[usemap=#"+j+"]")[0];
return !!d&&g(d)
}return(/input|select|textarea|button|object/.test(l)?!a.disabled:"a"==l?a.href||m:m)&&g(a)
}f.ui=f.ui||{};
f.ui.version||(f.extend(f.ui,{version:"1.8.18",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),f.fn.extend({propAttr:f.fn.prop||f.fn.attr,_focus:f.fn.focus,focus:function(a,d){return typeof a=="number"?this.each(function(){var b=this;
setTimeout(function(){f(b).focus(),d&&d.call(b)
},a)
}):this._focus.apply(this,arguments)
},scrollParent:function(){var a;
f.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?a=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(f.curCSS(this,"position",1))&&/(auto|scroll)/.test(f.curCSS(this,"overflow",1)+f.curCSS(this,"overflow-y",1)+f.curCSS(this,"overflow-x",1))
}).eq(0):a=this.parents().filter(function(){return/(auto|scroll)/.test(f.curCSS(this,"overflow",1)+f.curCSS(this,"overflow-y",1)+f.curCSS(this,"overflow-x",1))
}).eq(0);
return/fixed/.test(this.css("position"))||!a.length?f(document):a
},zIndex:function(k){if(k!==e){return this.css("zIndex",k)
}if(this.length){var j=f(this[0]),b,a;
while(j.length&&j[0]!==document){b=j.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){a=parseInt(j.css("zIndex"),10);
if(!isNaN(a)&&a!==0){return a
}}j=j.parent()
}}return 0
},disableSelection:function(){return this.bind((f.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(b){b.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}}),f.each(["Width","Height"],function(m,l){function a(n,q,p,o){f.each(k,function(){q-=parseFloat(f.curCSS(n,"padding"+this,!0))||0,p&&(q-=parseFloat(f.curCSS(n,"border"+this+"Width",!0))||0),o&&(q-=parseFloat(f.curCSS(n,"margin"+this,!0))||0)
});
return q
}var k=l==="Width"?["Left","Right"]:["Top","Bottom"],j=l.toLowerCase(),b={innerWidth:f.fn.innerWidth,innerHeight:f.fn.innerHeight,outerWidth:f.fn.outerWidth,outerHeight:f.fn.outerHeight};
f.fn["inner"+l]=function(d){if(d===e){return b["inner"+l].call(this)
}return this.each(function(){f(this).css(j,a(this,d)+"px")
})
},f.fn["outer"+l]=function(d,n){if(typeof d!="number"){return b["outer"+l].call(this,d)
}return this.each(function(){f(this).css(j,a(this,d,!0,n)+"px")
})
}
}),f.extend(f.expr[":"],{data:function(a,k,j){return !!f.data(a,j[3])
},focusable:function(a){return h(a,!isNaN(f.attr(a,"tabindex")))
},tabbable:function(a){var j=f.attr(a,"tabindex"),c=isNaN(j);
return(c||j>=0)&&h(a,!c)
}}),f(function(){var a=document.body,d=a.appendChild(d=document.createElement("div"));
d.offsetHeight,f.extend(d.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),f.support.minHeight=d.offsetHeight===100,f.support.selectstart="onselectstart" in d,a.removeChild(d).style.display="none"
}),f.extend(f.ui,{plugin:{add:function(a,m,l){var k=f.ui[a].prototype;
for(var j in l){k.plugins[j]=k.plugins[j]||[],k.plugins[j].push([m,l[j]])
}},call:function(k,j,n){var m=k.plugins[j];
if(!!m&&!!k.element[0].parentNode){for(var l=0;
l<m.length;
l++){k.options[m[l][0]]&&m[l][1].apply(k.element,n)
}}}},contains:function(d,c){return document.compareDocumentPosition?d.compareDocumentPosition(c)&16:d!==c&&d.contains(c)
},hasScroll:function(a,l){if(f(a).css("overflow")==="hidden"){return !1
}var k=l&&l==="left"?"scrollLeft":"scrollTop",j=!1;
if(a[k]>0){return !0
}a[k]=1,j=a[k]>0,a[k]=0;
return j
},isOverAxis:function(j,d,k){return j>d&&j<d+k
},isOver:function(a,n,m,l,k,j){return f.ui.isOverAxis(a,m,k)&&f.ui.isOverAxis(n,l,j)
}}))
})(jQuery);
jQuery.effects||function(y,x){function m(a){if(!a||typeof a=="number"||y.fx.speeds[a]){return !0
}if(typeof a=="string"&&!y.effects[a]){return !0
}return !1
}function n(a,h,g,f){typeof a=="object"&&(f=h,g=null,h=a,a=h.effect),y.isFunction(h)&&(f=h,g=null,h={});
if(typeof h=="number"||y.fx.speeds[h]){f=g,g=h,h={}
}y.isFunction(g)&&(f=g,g=null),h=h||{},g=g||h.duration,g=y.fx.off?0:typeof g=="number"?g:g in y.fx.speeds?y.fx.speeds[g]:y.fx.speeds._default,f=f||h.complete;
return[a,h,g,f]
}function o(f,e){var h={_:0},g;
for(g in e){f[g]!=e[g]&&(h[g]=e[g])
}return h
}function p(a){var f,e;
for(f in a){e=a[f],(e==null||y.isFunction(e)||f in r||/scrollbar/.test(f)||!/color/i.test(f)&&isNaN(parseFloat(e)))&&delete a[f]
}return a
}function q(){var g=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,f={},k,j;
if(g&&g.length&&g[0]&&g[g[0]]){var h=g.length;
while(h--){k=g[h],typeof g[k]=="string"&&(j=k.replace(/\-(\w)/g,function(d,c){return c.toUpperCase()
}),f[j]=g[k])
}}else{for(k in g){typeof g[k]=="string"&&(f[k]=g[k])
}}return f
}function v(a,f){var c;
do{c=y.curCSS(a,f);
if(c!=""&&c!="transparent"||y.nodeName(a,"body")){break
}f="backgroundColor"
}while(a=a.parentNode);
return w(c)
}function w(a){var d;
if(a&&a.constructor==Array&&a.length==3){return a
}if(d=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a)){return[parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10)]
}if(d=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(a)){return[parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55]
}if(d=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(a)){return[parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16)]
}if(d=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(a)){return[parseInt(d[1]+d[1],16),parseInt(d[2]+d[2],16),parseInt(d[3]+d[3],16)]
}if(d=/rgba\(0, 0, 0, 0\)/.exec(a)){return u.transparent
}return u[y.trim(a).toLowerCase()]
}y.effects={},y.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(a,c){y.fx.step[c]=function(b){b.colorInit||(b.start=v(b.elem,c),b.end=w(b.end),b.colorInit=!0),b.elem.style[c]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"
}
});
var u={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},t=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
y.effects.animateClass=function(a,h,g,f){y.isFunction(g)&&(f=g,g=null);
return this.queue(function(){var e=y(this),d=e.attr("style")||" ",c=p(q.call(this)),b,j=e.attr("class");
y.each(t,function(k,l){a[l]&&e[l+"Class"](a[l])
}),b=p(q.call(this)),e.attr("class",j),e.animate(o(c,b),{queue:!1,duration:h,easing:g,complete:function(){y.each(t,function(k,l){a[l]&&e[l+"Class"](a[l])
}),typeof e.attr("style")=="object"?(e.attr("style").cssText="",e.attr("style").cssText=d):e.attr("style",d),f&&f.apply(this,arguments),y.dequeue(this)
}})
})
},y.fn.extend({_addClass:y.fn.addClass,addClass:function(a,h,g,f){return h?y.effects.animateClass.apply(this,[{add:a},h,g,f]):this._addClass(a)
},_removeClass:y.fn.removeClass,removeClass:function(a,h,g,f){return h?y.effects.animateClass.apply(this,[{remove:a},h,g,f]):this._removeClass(a)
},_toggleClass:y.fn.toggleClass,toggleClass:function(k,j,h,b,a){return typeof j=="boolean"||j===x?h?y.effects.animateClass.apply(this,[j?{add:k}:{remove:k},h,b,a]):this._toggleClass(k,j):y.effects.animateClass.apply(this,[{toggle:k},j,h,b])
},switchClass:function(a,k,j,h,g){return y.effects.animateClass.apply(this,[{add:k,remove:a},j,h,g])
}}),y.extend(y.effects,{version:"1.8.18",save:function(e,d){for(var f=0;
f<d.length;
f++){d[f]!==null&&e.data("ec.storage."+d[f],e[0].style[d[f]])
}},restore:function(e,d){for(var f=0;
f<d.length;
f++){d[f]!==null&&e.css(d[f],e.data("ec.storage."+d[f]))
}},setMode:function(d,c){c=="toggle"&&(c=d.is(":hidden")?"show":"hide");
return c
},getBaseline:function(f,e){var h,g;
switch(f[0]){case"top":h=0;
break;
case"middle":h=0.5;
break;
case"bottom":h=1;
break;
default:h=f[0]/e.height
}switch(f[1]){case"left":g=0;
break;
case"center":g=0.5;
break;
case"right":g=1;
break;
default:g=f[1]/e.width
}return{x:g,y:h}
},createWrapper:function(a){if(a.parent().is(".ui-effects-wrapper")){return a.parent()
}var h={width:a.outerWidth(!0),height:a.outerHeight(!0),"float":a.css("float")},g=y("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),f=document.activeElement;
a.wrap(g),(a[0]===f||y.contains(a[0],f))&&y(f).focus(),g=a.parent(),a.css("position")=="static"?(g.css({position:"relative"}),a.css({position:"relative"})):(y.extend(h,{position:a.css("position"),zIndex:a.css("z-index")}),y.each(["top","left","bottom","right"],function(b,c){h[c]=a.css(c),isNaN(parseInt(h[c],10))&&(h[c]="auto")
}),a.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"}));
return g.css(h).show()
},removeWrapper:function(a){var f,e=document.activeElement;
if(a.parent().is(".ui-effects-wrapper")){f=a.parent().replaceWith(a),(a[0]===e||y.contains(a[0],e))&&y(e).focus();
return f
}return a
},setTransition:function(a,h,g,f){f=f||{},y.each(h,function(b,d){unit=a.cssUnit(d),unit[0]>0&&(f[d]=unit[0]*g+unit[1])
});
return f
}}),y.fn.extend({effect:function(a,C,B,A){var z=n.apply(this,arguments),l={options:z[1],duration:z[2],callback:z[3]},k=l.options.mode,j=y.effects[a];
if(y.fx.off||!j){return k?this[k](l.duration,l.callback):this.each(function(){l.callback&&l.callback.call(this)
})
}return j.call(this,l)
},_show:y.fn.show,show:function(d){if(m(d)){return this._show.apply(this,arguments)
}var c=n.apply(this,arguments);
c[1].mode="show";
return this.effect.apply(this,c)
},_hide:y.fn.hide,hide:function(d){if(m(d)){return this._hide.apply(this,arguments)
}var c=n.apply(this,arguments);
c[1].mode="hide";
return this.effect.apply(this,c)
},__toggle:y.fn.toggle,toggle:function(a){if(m(a)||typeof a=="boolean"||y.isFunction(a)){return this.__toggle.apply(this,arguments)
}var d=n.apply(this,arguments);
d[1].mode="toggle";
return this.effect.apply(this,d)
},cssUnit:function(a){var f=this.css(a),e=[];
y.each(["em","px","%","pt"],function(d,c){f.indexOf(c)>0&&(e=[parseFloat(f),c])
});
return e
}}),y.easing.jswing=y.easing.swing,y.extend(y.easing,{def:"easeOutQuad",swing:function(a,k,j,h,g){return y.easing[y.easing.def](a,k,j,h,g)
},easeInQuad:function(g,f,k,j,h){return j*(f/=h)*f+k
},easeOutQuad:function(g,f,k,j,h){return -j*(f/=h)*(f-2)+k
},easeInOutQuad:function(g,f,k,j,h){if((f/=h/2)<1){return j/2*f*f+k
}return -j/2*(--f*(f-2)-1)+k
},easeInCubic:function(g,f,k,j,h){return j*(f/=h)*f*f+k
},easeOutCubic:function(g,f,k,j,h){return j*((f=f/h-1)*f*f+1)+k
},easeInOutCubic:function(g,f,k,j,h){if((f/=h/2)<1){return j/2*f*f*f+k
}return j/2*((f-=2)*f*f+2)+k
},easeInQuart:function(g,f,k,j,h){return j*(f/=h)*f*f*f+k
},easeOutQuart:function(g,f,k,j,h){return -j*((f=f/h-1)*f*f*f-1)+k
},easeInOutQuart:function(g,f,k,j,h){if((f/=h/2)<1){return j/2*f*f*f*f+k
}return -j/2*((f-=2)*f*f*f-2)+k
},easeInQuint:function(g,f,k,j,h){return j*(f/=h)*f*f*f*f+k
},easeOutQuint:function(g,f,k,j,h){return j*((f=f/h-1)*f*f*f*f+1)+k
},easeInOutQuint:function(g,f,k,j,h){if((f/=h/2)<1){return j/2*f*f*f*f*f+k
}return j/2*((f-=2)*f*f*f*f+2)+k
},easeInSine:function(g,f,k,j,h){return -j*Math.cos(f/h*(Math.PI/2))+j+k
},easeOutSine:function(g,f,k,j,h){return j*Math.sin(f/h*(Math.PI/2))+k
},easeInOutSine:function(g,f,k,j,h){return -j/2*(Math.cos(Math.PI*f/h)-1)+k
},easeInExpo:function(g,f,k,j,h){return f==0?k:j*Math.pow(2,10*(f/h-1))+k
},easeOutExpo:function(g,f,k,j,h){return f==h?k+j:j*(-Math.pow(2,-10*f/h)+1)+k
},easeInOutExpo:function(g,f,k,j,h){if(f==0){return k
}if(f==h){return k+j
}if((f/=h/2)<1){return j/2*Math.pow(2,10*(f-1))+k
}return j/2*(-Math.pow(2,-10*--f)+2)+k
},easeInCirc:function(g,f,k,j,h){return -j*(Math.sqrt(1-(f/=h)*f)-1)+k
},easeOutCirc:function(g,f,k,j,h){return j*Math.sqrt(1-(f=f/h-1)*f)+k
},easeInOutCirc:function(g,f,k,j,h){if((f/=h/2)<1){return -j/2*(Math.sqrt(1-f*f)-1)+k
}return j/2*(Math.sqrt(1-(f-=2)*f)+1)+k
},easeInElastic:function(k,j,D,C,B){var A=1.70158,z=0,l=C;
if(j==0){return D
}if((j/=B)==1){return D+C
}z||(z=B*0.3);
if(l<Math.abs(C)){l=C;
var A=z/4
}else{var A=z/(2*Math.PI)*Math.asin(C/l)
}return -(l*Math.pow(2,10*(j-=1))*Math.sin((j*B-A)*2*Math.PI/z))+D
},easeOutElastic:function(k,j,D,C,B){var A=1.70158,z=0,l=C;
if(j==0){return D
}if((j/=B)==1){return D+C
}z||(z=B*0.3);
if(l<Math.abs(C)){l=C;
var A=z/4
}else{var A=z/(2*Math.PI)*Math.asin(C/l)
}return l*Math.pow(2,-10*j)*Math.sin((j*B-A)*2*Math.PI/z)+C+D
},easeInOutElastic:function(k,j,D,C,B){var A=1.70158,z=0,l=C;
if(j==0){return D
}if((j/=B/2)==2){return D+C
}z||(z=B*0.3*1.5);
if(l<Math.abs(C)){l=C;
var A=z/4
}else{var A=z/(2*Math.PI)*Math.asin(C/l)
}if(j<1){return -0.5*l*Math.pow(2,10*(j-=1))*Math.sin((j*B-A)*2*Math.PI/z)+D
}return l*Math.pow(2,-10*(j-=1))*Math.sin((j*B-A)*2*Math.PI/z)*0.5+C+D
},easeInBack:function(b,z,l,k,j,h){h==x&&(h=1.70158);
return k*(z/=j)*z*((h+1)*z-h)+l
},easeOutBack:function(b,z,l,k,j,h){h==x&&(h=1.70158);
return k*((z=z/j-1)*z*((h+1)*z+h)+1)+l
},easeInOutBack:function(b,z,l,k,j,h){h==x&&(h=1.70158);
if((z/=j/2)<1){return k/2*z*z*(((h*=1.525)+1)*z-h)+l
}return k/2*((z-=2)*z*(((h*=1.525)+1)*z+h)+2)+l
},easeInBounce:function(a,k,j,h,g){return h-y.easing.easeOutBounce(a,g-k,0,h,g)+j
},easeOutBounce:function(g,f,k,j,h){return(f/=h)<1/2.75?j*7.5625*f*f+k:f<2/2.75?j*(7.5625*(f-=1.5/2.75)*f+0.75)+k:f<2.5/2.75?j*(7.5625*(f-=2.25/2.75)*f+0.9375)+k:j*(7.5625*(f-=2.625/2.75)*f+0.984375)+k
},easeInOutBounce:function(a,k,j,h,g){if(k<g/2){return y.easing.easeInBounce(a,k*2,0,h,g)*0.5+j
}return y.easing.easeOutBounce(a,k*2-g,0,h,g)*0.5+h*0.5+j
}})
}(jQuery);
(function(d,c){d.effects.clip=function(a){return this.queue(function(){var t=d(this),r=["position","top","bottom","left","right","height","width"],q=d.effects.setMode(t,a.options.mode||"hide"),p=a.options.direction||"vertical";
d.effects.save(t,r),t.show();
var o=d.effects.createWrapper(t).css({overflow:"hidden"}),n=t[0].tagName=="IMG"?o:t,m={size:p=="vertical"?"height":"width",position:p=="vertical"?"top":"left"},l=p=="vertical"?n.height():n.width();
q=="show"&&(n.css(m.size,0),n.css(m.position,l/2));
var b={};
b[m.size]=q=="show"?l:0,b[m.position]=q=="show"?0:l/2,n.animate(b,{queue:!1,duration:a.duration,easing:a.options.easing,complete:function(){q=="hide"&&t.hide(),d.effects.restore(t,r),d.effects.removeWrapper(t),a.callback&&a.callback.apply(t[0],arguments),t.dequeue()
}})
})
}
})(jQuery);
(function(d,c){d.effects.fade=function(a){return this.queue(function(){var e=d(this),b=d.effects.setMode(e,a.options.mode||"hide");
e.animate({opacity:b},{queue:!1,duration:a.duration,easing:a.options.easing,complete:function(){a.callback&&a.callback.apply(this,arguments),e.dequeue()
}})
})
}
})(jQuery);
(function(d,c){d.effects.puff=function(a){return this.queue(function(){var l=d(this),k=d.effects.setMode(l,a.options.mode||"hide"),j=parseInt(a.options.percent,10)||150,h=j/100,b={height:l.height(),width:l.width()};
d.extend(a.options,{fade:!0,mode:k,percent:k=="hide"?j:100,from:k=="hide"?b:{height:b.height*h,width:b.width*h}}),l.effect("scale",a.options,a.duration,a.callback),l.dequeue()
})
},d.effects.scale=function(a){return this.queue(function(){var q=d(this),p=d.extend(!0,{},a.options),o=d.effects.setMode(q,a.options.mode||"effect"),n=parseInt(a.options.percent,10)||(parseInt(a.options.percent,10)==0?0:o=="hide"?0:100),m=a.options.direction||"both",l=a.options.origin;
o!="effect"&&(p.origin=l||["middle","center"],p.restore=!0);
var k={height:q.height(),width:q.width()};
q.from=a.options.from||(o=="show"?{height:0,width:0}:k);
var b={y:m!="horizontal"?n/100:1,x:m!="vertical"?n/100:1};
q.to={height:k.height*b.y,width:k.width*b.x},a.options.fade&&(o=="show"&&(q.from.opacity=0,q.to.opacity=1),o=="hide"&&(q.from.opacity=1,q.to.opacity=0)),p.from=q.from,p.to=q.to,p.mode=o,q.effect("size",p,a.duration,a.callback),q.dequeue()
})
},d.effects.size=function(a){return this.queue(function(){var D=d(this),C=["position","top","bottom","left","right","width","height","overflow","opacity"],B=["position","top","bottom","left","right","overflow","opacity"],A=["width","height","overflow"],z=["fontSize"],y=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],x=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],w=d.effects.setMode(D,a.options.mode||"effect"),v=a.options.restore||!1,u=a.options.scale||"both",t=a.options.origin,r={height:D.height(),width:D.width()};
D.from=a.options.from||r,D.to=a.options.to||r;
if(t){var o=d.effects.getBaseline(t,r);
D.from.top=(r.height-D.from.height)*o.y,D.from.left=(r.width-D.from.width)*o.x,D.to.top=(r.height-D.to.height)*o.y,D.to.left=(r.width-D.to.width)*o.x
}var b={from:{y:D.from.height/r.height,x:D.from.width/r.width},to:{y:D.to.height/r.height,x:D.to.width/r.width}};
if(u=="box"||u=="both"){b.from.y!=b.to.y&&(C=C.concat(y),D.from=d.effects.setTransition(D,y,b.from.y,D.from),D.to=d.effects.setTransition(D,y,b.to.y,D.to)),b.from.x!=b.to.x&&(C=C.concat(x),D.from=d.effects.setTransition(D,x,b.from.x,D.from),D.to=d.effects.setTransition(D,x,b.to.x,D.to))
}(u=="content"||u=="both")&&b.from.y!=b.to.y&&(C=C.concat(z),D.from=d.effects.setTransition(D,z,b.from.y,D.from),D.to=d.effects.setTransition(D,z,b.to.y,D.to)),d.effects.save(D,v?C:B),D.show(),d.effects.createWrapper(D),D.css("overflow","hidden").css(D.from);
if(u=="content"||u=="both"){y=y.concat(["marginTop","marginBottom"]).concat(z),x=x.concat(["marginLeft","marginRight"]),A=C.concat(y).concat(x),D.find("*[width]").each(function(){child=d(this),v&&d.effects.save(child,A);
var e={height:child.height(),width:child.width()};
child.from={height:e.height*b.from.y,width:e.width*b.from.x},child.to={height:e.height*b.to.y,width:e.width*b.to.x},b.from.y!=b.to.y&&(child.from=d.effects.setTransition(child,y,b.from.y,child.from),child.to=d.effects.setTransition(child,y,b.to.y,child.to)),b.from.x!=b.to.x&&(child.from=d.effects.setTransition(child,x,b.from.x,child.from),child.to=d.effects.setTransition(child,x,b.to.x,child.to)),child.css(child.from),child.animate(child.to,a.duration,a.options.easing,function(){v&&d.effects.restore(child,A)
})
})
}D.animate(D.to,{queue:!1,duration:a.duration,easing:a.options.easing,complete:function(){D.to.opacity===0&&D.css("opacity",D.from.opacity),w=="hide"&&D.hide(),d.effects.restore(D,v?C:B),d.effects.removeWrapper(D),a.callback&&a.callback.apply(this,arguments),D.dequeue()
}})
})
}
})(jQuery);
/*!
 * jQuery Smooth Scroll Plugin v1.4.5
 *
 * Date: Sun Mar 11 18:17:42 2012 EDT
 * Requires: jQuery v1.3+
 *
 * Copyright 2012, Karl Swedberg
 * Dual licensed under the MIT and GPL licenses (just like jQuery):
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 *
 *
 *
*/
(function(c){function a(b){return b.replace(/(:|\.)/g,"\\$1")
}var e=function(h){var f=[],b=false,g=h.dir&&h.dir=="left"?"scrollLeft":"scrollTop";
this.each(function(){if(!(this==document||this==window)){var j=c(this);
if(j[g]()>0){f.push(this)
}else{j[g](1);
b=j[g]()>0;
j[g](0);
b&&f.push(this)
}}});
if(h.el==="first"&&f.length){f=[f.shift()]
}return f
},d="ontouchend" in document;
c.fn.extend({scrollable:function(b){return this.pushStack(e.call(this,{dir:b}))
},firstScrollable:function(b){return this.pushStack(e.call(this,{el:"first",dir:b}))
},smoothScroll:function(g){g=g||{};
var f=c.extend({},c.fn.smoothScroll.defaults,g),b=c.smoothScroll.filterPath(location.pathname);
this.die("click.smoothscroll").live("click.smoothscroll",function(u){var r={},p=c(this),t=location.hostname===this.hostname||!this.hostname,q=f.scrollTarget||(c.smoothScroll.filterPath(this.pathname)||b)===b,n=a(this.hash),o=true;
if(!f.scrollTarget&&(!t||!q||!n)){o=false
}else{t=f.exclude;
q=0;
for(var m=t.length;
o&&q<m;
){if(p.is(a(t[q++]))){o=false
}}t=f.excludeWithin;
q=0;
for(m=t.length;
o&&q<m;
){if(p.closest(t[q++]).length){o=false
}}}if(o){u.preventDefault();
c.extend(r,f,{scrollTarget:f.scrollTarget||n,link:this});
c.smoothScroll(r)
}});
return this
}});
c.smoothScroll=function(q,o){var r,p,m,j;
j=0;
p="offset";
var n="scrollTop",l={},b=false;
m=[];
if(typeof q==="number"){r=c.fn.smoothScroll.defaults;
m=q
}else{r=c.extend({},c.fn.smoothScroll.defaults,q||{});
if(r.scrollElement){p="position";
r.scrollElement.css("position")=="static"&&r.scrollElement.css("position","relative")
}m=o||c(r.scrollTarget)[p]()&&c(r.scrollTarget)[p]()[r.direction]||0
}r=c.extend({link:null},r);
n=r.direction=="left"?"scrollLeft":n;
if(r.scrollElement){p=r.scrollElement;
j=p[n]()
}else{p=c("html, body").firstScrollable();
b=d&&"scrollTo" in window
}l[n]=m+j+r.offset;
r.beforeScroll.call(p,r);
if(b){m=r.direction=="left"?[l[n],0]:[0,l[n]];
window.scrollTo.apply(window,m);
r.afterScroll.call(r.link,r)
}else{j=r.speed;
if(j==="auto"){j=l[n]||p.scrollTop();
j/=r.autoCoefficent
}p.animate(l,{duration:j,easing:r.easing,complete:function(){r.afterScroll.call(r.link,r)
}})
}};
c.smoothScroll.version="1.4.4";
c.smoothScroll.filterPath=function(b){return b.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")
};
c.fn.smoothScroll.defaults={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2}
})(jQuery);
if(typeof YAHOO=="undefined"||!YAHOO){var YAHOO={}
}YAHOO.namespace=function(){var a=arguments,b=null,d,e,c;
for(d=0;
d<a.length;
d=d+1){c=(""+a[d]).split(".");
b=YAHOO;
for(e=(c[0]=="YAHOO")?1:0;
e<c.length;
e=e+1){b[c[e]]=b[c[e]]||{};
b=b[c[e]]
}}return b
};
YAHOO.log=function(b,a,c){var d=YAHOO.widget.Logger;
if(d&&d.log){return d.log(b,a,c)
}else{return false
}};
YAHOO.register=function(d,j,a){var e=YAHOO.env.modules,c,f,g,h,b;
if(!e[d]){e[d]={versions:[],builds:[]}
}c=e[d];
f=a.version;
g=a.build;
h=YAHOO.env.listeners;
c.name=d;
c.version=f;
c.build=g;
c.versions.push(f);
c.builds.push(g);
c.mainClass=j;
for(b=0;
b<h.length;
b=b+1){h[b](c)
}if(j){j.VERSION=f;
j.BUILD=g
}else{YAHOO.log("mainClass is undefined for module "+d,"warn")
}};
YAHOO.env=YAHOO.env||{modules:[],listeners:[]};
YAHOO.env.getVersion=function(a){return YAHOO.env.modules[a]||null
};
YAHOO.env.ua=function(){var e=function(j){var h=0;
return parseFloat(j.replace(/\./g,function(){return(h++==1)?"":"."
}))
},b=navigator,c={ie:0,opera:0,gecko:0,webkit:0,mobile:null,air:0,caja:b.cajaVersion,secure:false,os:null},f=navigator&&navigator.userAgent,d=window&&window.location,g=d&&d.href,a;
c.secure=g&&(g.toLowerCase().indexOf("https")===0);
if(f){if((/windows|win32/i).test(f)){c.os="windows"
}else{if((/macintosh/i).test(f)){c.os="macintosh"
}}if((/KHTML/).test(f)){c.webkit=1
}a=f.match(/AppleWebKit\/([^\s]*)/);
if(a&&a[1]){c.webkit=e(a[1]);
if(/ Mobile\//.test(f)){c.mobile="Apple"
}else{a=f.match(/NokiaN[^\/]*/);
if(a){c.mobile=a[0]
}}a=f.match(/AdobeAIR\/([^\s]*)/);
if(a){c.air=a[0]
}}if(!c.webkit){a=f.match(/Opera[\s\/]([^\s]*)/);
if(a&&a[1]){c.opera=e(a[1]);
a=f.match(/Opera Mini[^;]*/);
if(a){c.mobile=a[0]
}}else{a=f.match(/MSIE\s([^;]*)/);
if(a&&a[1]){c.ie=e(a[1])
}else{a=f.match(/Gecko\/([^\s]*)/);
if(a){c.gecko=1;
a=f.match(/rv:([^\s\)]*)/);
if(a&&a[1]){c.gecko=e(a[1])
}}}}}}return c
}();
(function(){YAHOO.namespace("util","widget","example");
if("undefined"!==typeof YAHOO_config){var d=YAHOO_config.listener,a=YAHOO.env.listeners,b=true,c;
if(d){for(c=0;
c<a.length;
c++){if(a[c]==d){b=false;
break
}}if(b){a.push(d)
}}}})();
YAHOO.lang=YAHOO.lang||{};
(function(){var h=YAHOO.lang,a=Object.prototype,b="[object Array]",g="[object Function]",c="[object Object]",e=[],d=["toString","valueOf"],f={isArray:function(j){return a.toString.apply(j)===b
},isBoolean:function(j){return typeof j==="boolean"
},isFunction:function(j){return(typeof j==="function")||a.toString.apply(j)===g
},isNull:function(j){return j===null
},isNumber:function(j){return typeof j==="number"&&isFinite(j)
},isObject:function(j){return(j&&(typeof j==="object"||h.isFunction(j)))||false
},isString:function(j){return typeof j==="string"
},isUndefined:function(j){return typeof j==="undefined"
},_IEEnumFix:(YAHOO.env.ua.ie)?function(k,l){var m,n,j;
for(m=0;
m<d.length;
m=m+1){n=d[m];
j=l[n];
if(h.isFunction(j)&&j!=a[n]){k[n]=j
}}}:function(){},extend:function(j,n,k){if(!n||!j){throw new Error("extend failed, please check that all dependencies are included.")
}var l=function(){},m;
l.prototype=n.prototype;
j.prototype=new l();
j.prototype.constructor=j;
j.superclass=n.prototype;
if(n.prototype.constructor==a.constructor){n.prototype.constructor=n
}if(k){for(m in k){if(h.hasOwnProperty(k,m)){j.prototype[m]=k[m]
}}h._IEEnumFix(j.prototype,k)
}},augmentObject:function(o,j){if(!j||!o){throw new Error("Absorb failed, verify dependencies.")
}var m=arguments,k,n,l=m[2];
if(l&&l!==true){for(k=2;
k<m.length;
k=k+1){o[m[k]]=j[m[k]]
}}else{for(n in j){if(l||!(n in o)){o[n]=j[n]
}}h._IEEnumFix(o,j)
}},augmentProto:function(j,k){if(!k||!j){throw new Error("Augment failed, verify dependencies.")
}var m=[j.prototype,k.prototype],l;
for(l=2;
l<arguments.length;
l=l+1){m.push(arguments[l])
}h.augmentObject.apply(this,m)
},dump:function(r,m){var p,n,k=[],j="{...}",q="f(){...}",l=", ",o=" => ";
if(!h.isObject(r)){return r+""
}else{if(r instanceof Date||("nodeType" in r&&"tagName" in r)){return r
}else{if(h.isFunction(r)){return q
}}}m=(h.isNumber(m))?m:3;
if(h.isArray(r)){k.push("[");
for(p=0,n=r.length;
p<n;
p=p+1){if(h.isObject(r[p])){k.push((m>0)?h.dump(r[p],m-1):j)
}else{k.push(r[p])
}k.push(l)
}if(k.length>1){k.pop()
}k.push("]")
}else{k.push("{");
for(p in r){if(h.hasOwnProperty(r,p)){k.push(p+o);
if(h.isObject(r[p])){k.push((m>0)?h.dump(r[p],m-1):j)
}else{k.push(r[p])
}k.push(l)
}}if(k.length>1){k.pop()
}k.push("}")
}return k.join("")
},substitute:function(j,z,q){var v,w,x,n,m,k,o=[],y,u="dump",p=" ",A="{",l="}",r,t;
for(;
;
){v=j.lastIndexOf(A);
if(v<0){break
}w=j.indexOf(l,v);
if(v+1>=w){break
}y=j.substring(v+1,w);
n=y;
k=null;
x=n.indexOf(p);
if(x>-1){k=n.substring(x+1);
n=n.substring(0,x)
}m=z[n];
if(q){m=q(n,m,k)
}if(h.isObject(m)){if(h.isArray(m)){m=h.dump(m,parseInt(k,10))
}else{k=k||"";
r=k.indexOf(u);
if(r>-1){k=k.substring(4)
}t=m.toString();
if(t===c||r>-1){m=h.dump(m,parseInt(k,10))
}else{m=t
}}}else{if(!h.isString(m)&&!h.isNumber(m)){m="~-"+o.length+"-~";
o[o.length]=y
}}j=j.substring(0,v)+m+j.substring(w+1)
}for(v=o.length-1;
v>=0;
v=v-1){j=j.replace(new RegExp("~-"+v+"-~"),"{"+o[v]+"}","g")
}return j
},trim:function(k){try{return k.replace(/^\s+|\s+$/g,"")
}catch(j){return k
}},merge:function(){var j={},l=arguments,m=l.length,k;
for(k=0;
k<m;
k=k+1){h.augmentObject(j,l[k],true)
}return j
},later:function(k,q,j,o,n){k=k||0;
q=q||{};
var p=j,l=o,m,r;
if(h.isString(j)){p=q[j]
}if(!p){throw new TypeError("method undefined")
}if(l&&!h.isArray(l)){l=[o]
}m=function(){p.apply(q,l||e)
};
r=(n)?setInterval(m,k):setTimeout(m,k);
return{interval:n,cancel:function(){if(this.interval){clearInterval(r)
}else{clearTimeout(r)
}}}
},isValue:function(j){return(h.isObject(j)||h.isString(j)||h.isNumber(j)||h.isBoolean(j))
}};
h.hasOwnProperty=(a.hasOwnProperty)?function(k,j){return k&&k.hasOwnProperty(j)
}:function(k,j){return !h.isUndefined(k[j])&&k.constructor.prototype[j]!==k[j]
};
f.augmentObject(h,f,true);
YAHOO.util.Lang=h;
h.augment=h.augmentProto;
YAHOO.augment=h.augmentProto;
YAHOO.extend=h.extend
})();
YAHOO.register("yahoo",YAHOO,{version:"2.8.0r4",build:"2449"});
YAHOO.util.Get=function(){var g={},h=0,b=0,p=false,f=YAHOO.env.ua,a=YAHOO.lang;
var k=function(v,y,B){var x=B||window,A=x.document,z=A.createElement(v);
for(var w in y){if(y[w]&&YAHOO.lang.hasOwnProperty(y,w)){z.setAttribute(w,y[w])
}}return z
};
var l=function(x,w,y){var v={id:"yui__dyn_"+(b++),type:"text/css",rel:"stylesheet",href:x};
if(y){a.augmentObject(v,y)
}return k("link",v,w)
};
var d=function(x,w,y){var v={id:"yui__dyn_"+(b++),type:"text/javascript",src:x};
if(y){a.augmentObject(v,y)
}return k("script",v,w)
};
var u=function(w,v){return{tId:w.tId,win:w.win,data:w.data,nodes:w.nodes,msg:v,purge:function(){q(this.tId)
}}
};
var t=function(y,v){var x=g[v],w=(a.isString(y))?x.win.document.getElementById(y):y;
if(!w){c(v,"target node not found: "+y)
}return w
};
var c=function(v,w){var y=g[v];
if(y.onFailure){var x=y.scope||y.win;
y.onFailure.call(x,u(y,w))
}};
var r=function(v){var y=g[v];
y.finished=true;
if(y.aborted){var w="transaction "+v+" was aborted";
c(v,w);
return
}if(y.onSuccess){var x=y.scope||y.win;
y.onSuccess.call(x,u(y))
}};
var e=function(v){var x=g[v];
if(x.onTimeout){var w=x.scope||x;
x.onTimeout.call(w,u(x))
}};
var n=function(z,v){var A=g[z];
if(A.timer){A.timer.cancel()
}if(A.aborted){var x="transaction "+z+" was aborted";
c(z,x);
return
}if(v){A.url.shift();
if(A.varName){A.varName.shift()
}}else{A.url=(a.isString(A.url))?[A.url]:A.url;
if(A.varName){A.varName=(a.isString(A.varName))?[A.varName]:A.varName
}}var D=A.win,E=D.document,F=E.getElementsByTagName("head")[0],y;
if(A.url.length===0){if(A.type==="script"&&f.webkit&&f.webkit<420&&!A.finalpass&&!A.varName){var w=d(null,A.win,A.attributes);
w.innerHTML='YAHOO.util.Get._finalize("'+z+'");';
A.nodes.push(w);
F.appendChild(w)
}else{r(z)
}return
}var B=A.url[0];
if(!B){A.url.shift();
return n(z)
}if(A.timeout){A.timer=a.later(A.timeout,A,e,z)
}if(A.type==="script"){y=d(B,D,A.attributes)
}else{y=l(B,D,A.attributes)
}o(A.type,y,z,B,D,A.url.length);
A.nodes.push(y);
if(A.insertBefore){var C=t(A.insertBefore,z);
if(C){C.parentNode.insertBefore(y,C)
}}else{F.appendChild(y)
}if((f.webkit||f.gecko)&&A.type==="css"){n(z,B)
}};
var j=function(){if(p){return
}p=true;
for(var w in g){var v=g[w];
if(v.autopurge&&v.finished){q(v.tId);
delete g[w]
}}p=false
};
var q=function(v){if(g[v]){var B=g[v],A=B.nodes,x=A.length,C=B.win.document,E=C.getElementsByTagName("head")[0],z,w,y,D;
if(B.insertBefore){z=t(B.insertBefore,v);
if(z){E=z.parentNode
}}for(w=0;
w<x;
w=w+1){y=A[w];
if(y.clearAttributes){y.clearAttributes()
}else{for(D in y){delete y[D]
}}E.removeChild(y)
}B.nodes=[]
}};
var m=function(x,y,w){var z="q"+(h++);
w=w||{};
if(h%YAHOO.util.Get.PURGE_THRESH===0){j()
}g[z]=a.merge(w,{tId:z,type:x,url:y,finished:false,aborted:false,nodes:[]});
var v=g[z];
v.win=v.win||window;
v.scope=v.scope||v.win;
v.autopurge=("autopurge" in v)?v.autopurge:(x==="script")?true:false;
if(w.charset){v.attributes=v.attributes||{};
v.attributes.charset=w.charset
}a.later(0,v,n,z);
return{tId:z}
};
var o=function(C,x,y,A,w,v,D){var E=D||n;
if(f.ie){x.onreadystatechange=function(){var F=this.readyState;
if("loaded"===F||"complete"===F){x.onreadystatechange=null;
E(y,A)
}}
}else{if(f.webkit){if(C==="script"){if(f.webkit>=420){x.addEventListener("load",function(){E(y,A)
})
}else{var B=g[y];
if(B.varName){var z=YAHOO.util.Get.POLL_FREQ;
B.maxattempts=YAHOO.util.Get.TIMEOUT/z;
B.attempts=0;
B._cache=B.varName[0].split(".");
B.timer=a.later(z,B,function(F){var I=this._cache,J=I.length,K=this.win,H;
for(H=0;
H<J;
H=H+1){K=K[I[H]];
if(!K){this.attempts++;
if(this.attempts++>this.maxattempts){var G="Over retry limit, giving up";
B.timer.cancel();
c(y,G)
}else{}return
}}B.timer.cancel();
E(y,A)
},null,true)
}else{a.later(YAHOO.util.Get.POLL_FREQ,null,E,[y,A])
}}}}else{x.onload=function(){E(y,A)
}
}}};
return{POLL_FREQ:10,PURGE_THRESH:20,TIMEOUT:2000,_finalize:function(v){a.later(0,null,r,v)
},abort:function(w){var v=(a.isString(w))?w:w.tId;
var x=g[v];
if(x){x.aborted=true
}},script:function(w,v){return m("script",w,v)
},css:function(w,v){return m("css",w,v)
}}
}();
YAHOO.register("get",YAHOO.util.Get,{version:"2.8.0r4",build:"2449"});
(function(){var Y=YAHOO,util=Y.util,lang=Y.lang,env=Y.env,PROV="_provides",SUPER="_supersedes",REQ="expanded",AFTER="_after";
var YUI={dupsAllowed:{yahoo:true,get:true},info:{root:"2.8.0r4/build/",base:"http://yui.yahooapis.com/2.8.0r4/build/",comboBase:"http://yui.yahooapis.com/combo?",skin:{defaultSkin:"sam",base:"assets/skins/",path:"skin.css",after:["reset","fonts","grids","base"],rollup:3},dupsAllowed:["yahoo","get"],moduleInfo:{animation:{type:"js",path:"animation/animation-min.js",requires:["dom","event"]},autocomplete:{type:"js",path:"autocomplete/autocomplete-min.js",requires:["dom","event","datasource"],optional:["connection","animation"],skinnable:true},base:{type:"css",path:"base/base-min.css",after:["reset","fonts","grids"]},button:{type:"js",path:"button/button-min.js",requires:["element"],optional:["menu"],skinnable:true},calendar:{type:"js",path:"calendar/calendar-min.js",requires:["event","dom"],supersedes:["datemeth"],skinnable:true},carousel:{type:"js",path:"carousel/carousel-min.js",requires:["element"],optional:["animation"],skinnable:true},charts:{type:"js",path:"charts/charts-min.js",requires:["element","json","datasource","swf"]},colorpicker:{type:"js",path:"colorpicker/colorpicker-min.js",requires:["slider","element"],optional:["animation"],skinnable:true},connection:{type:"js",path:"connection/connection-min.js",requires:["event"],supersedes:["connectioncore"]},connectioncore:{type:"js",path:"connection/connection_core-min.js",requires:["event"],pkg:"connection"},container:{type:"js",path:"container/container-min.js",requires:["dom","event"],optional:["dragdrop","animation","connection"],supersedes:["containercore"],skinnable:true},containercore:{type:"js",path:"container/container_core-min.js",requires:["dom","event"],pkg:"container"},cookie:{type:"js",path:"cookie/cookie-min.js",requires:["yahoo"]},datasource:{type:"js",path:"datasource/datasource-min.js",requires:["event"],optional:["connection"]},datatable:{type:"js",path:"datatable/datatable-min.js",requires:["element","datasource"],optional:["calendar","dragdrop","paginator"],skinnable:true},datemath:{type:"js",path:"datemath/datemath-min.js",requires:["yahoo"]},dom:{type:"js",path:"dom/dom-min.js",requires:["yahoo"]},dragdrop:{type:"js",path:"dragdrop/dragdrop-min.js",requires:["dom","event"]},editor:{type:"js",path:"editor/editor-min.js",requires:["menu","element","button"],optional:["animation","dragdrop"],supersedes:["simpleeditor"],skinnable:true},element:{type:"js",path:"element/element-min.js",requires:["dom","event"],optional:["event-mouseenter","event-delegate"]},"element-delegate":{type:"js",path:"element-delegate/element-delegate-min.js",requires:["element"]},event:{type:"js",path:"event/event-min.js",requires:["yahoo"]},"event-simulate":{type:"js",path:"event-simulate/event-simulate-min.js",requires:["event"]},"event-delegate":{type:"js",path:"event-delegate/event-delegate-min.js",requires:["event"],optional:["selector"]},"event-mouseenter":{type:"js",path:"event-mouseenter/event-mouseenter-min.js",requires:["dom","event"]},fonts:{type:"css",path:"fonts/fonts-min.css"},get:{type:"js",path:"get/get-min.js",requires:["yahoo"]},grids:{type:"css",path:"grids/grids-min.css",requires:["fonts"],optional:["reset"]},history:{type:"js",path:"history/history-min.js",requires:["event"]},imagecropper:{type:"js",path:"imagecropper/imagecropper-min.js",requires:["dragdrop","element","resize"],skinnable:true},imageloader:{type:"js",path:"imageloader/imageloader-min.js",requires:["event","dom"]},json:{type:"js",path:"json/json-min.js",requires:["yahoo"]},layout:{type:"js",path:"layout/layout-min.js",requires:["element"],optional:["animation","dragdrop","resize","selector"],skinnable:true},logger:{type:"js",path:"logger/logger-min.js",requires:["event","dom"],optional:["dragdrop"],skinnable:true},menu:{type:"js",path:"menu/menu-min.js",requires:["containercore"],skinnable:true},paginator:{type:"js",path:"paginator/paginator-min.js",requires:["element"],skinnable:true},profiler:{type:"js",path:"profiler/profiler-min.js",requires:["yahoo"]},profilerviewer:{type:"js",path:"profilerviewer/profilerviewer-min.js",requires:["profiler","yuiloader","element"],skinnable:true},progressbar:{type:"js",path:"progressbar/progressbar-min.js",requires:["element"],optional:["animation"],skinnable:true},reset:{type:"css",path:"reset/reset-min.css"},"reset-fonts-grids":{type:"css",path:"reset-fonts-grids/reset-fonts-grids.css",supersedes:["reset","fonts","grids","reset-fonts"],rollup:4},"reset-fonts":{type:"css",path:"reset-fonts/reset-fonts.css",supersedes:["reset","fonts"],rollup:2},resize:{type:"js",path:"resize/resize-min.js",requires:["dragdrop","element"],optional:["animation"],skinnable:true},selector:{type:"js",path:"selector/selector-min.js",requires:["yahoo","dom"]},simpleeditor:{type:"js",path:"editor/simpleeditor-min.js",requires:["element"],optional:["containercore","menu","button","animation","dragdrop"],skinnable:true,pkg:"editor"},slider:{type:"js",path:"slider/slider-min.js",requires:["dragdrop"],optional:["animation"],skinnable:true},storage:{type:"js",path:"storage/storage-min.js",requires:["yahoo","event","cookie"],optional:["swfstore"]},stylesheet:{type:"js",path:"stylesheet/stylesheet-min.js",requires:["yahoo"]},swf:{type:"js",path:"swf/swf-min.js",requires:["element"],supersedes:["swfdetect"]},swfdetect:{type:"js",path:"swfdetect/swfdetect-min.js",requires:["yahoo"]},swfstore:{type:"js",path:"swfstore/swfstore-min.js",requires:["element","cookie","swf"]},tabview:{type:"js",path:"tabview/tabview-min.js",requires:["element"],optional:["connection"],skinnable:true},treeview:{type:"js",path:"treeview/treeview-min.js",requires:["event","dom"],optional:["json","animation","calendar"],skinnable:true},uploader:{type:"js",path:"uploader/uploader-min.js",requires:["element"]},utilities:{type:"js",path:"utilities/utilities.js",supersedes:["yahoo","event","dragdrop","animation","dom","connection","element","yahoo-dom-event","get","yuiloader","yuiloader-dom-event"],rollup:8},yahoo:{type:"js",path:"yahoo/yahoo-min.js"},"yahoo-dom-event":{type:"js",path:"yahoo-dom-event/yahoo-dom-event.js",supersedes:["yahoo","event","dom"],rollup:3},yuiloader:{type:"js",path:"yuiloader/yuiloader-min.js",supersedes:["yahoo","get"]},"yuiloader-dom-event":{type:"js",path:"yuiloader-dom-event/yuiloader-dom-event.js",supersedes:["yahoo","dom","event","get","yuiloader","yahoo-dom-event"],rollup:5},yuitest:{type:"js",path:"yuitest/yuitest-min.js",requires:["logger"],optional:["event-simulate"],skinnable:true}}},ObjectUtil:{appendArray:function(o,a){if(a){for(var i=0;
i<a.length;
i=i+1){o[a[i]]=true
}}},keys:function(o,ordered){var a=[],i;
for(i in o){if(lang.hasOwnProperty(o,i)){a.push(i)
}}return a
}},ArrayUtil:{appendArray:function(a1,a2){Array.prototype.push.apply(a1,a2)
},indexOf:function(a,val){for(var i=0;
i<a.length;
i=i+1){if(a[i]===val){return i
}}return -1
},toObject:function(a){var o={};
for(var i=0;
i<a.length;
i=i+1){o[a[i]]=true
}return o
},uniq:function(a){return YUI.ObjectUtil.keys(YUI.ArrayUtil.toObject(a))
}}};
YAHOO.util.YUILoader=function(o){this._internalCallback=null;
this._useYahooListener=false;
this.onSuccess=null;
this.onFailure=Y.log;
this.onProgress=null;
this.onTimeout=null;
this.scope=this;
this.data=null;
this.insertBefore=null;
this.charset=null;
this.varName=null;
this.base=YUI.info.base;
this.comboBase=YUI.info.comboBase;
this.combine=false;
this.root=YUI.info.root;
this.timeout=0;
this.ignore=null;
this.force=null;
this.allowRollup=true;
this.filter=null;
this.required={};
this.moduleInfo=lang.merge(YUI.info.moduleInfo);
this.rollups=null;
this.loadOptional=false;
this.sorted=[];
this.loaded={};
this.dirty=true;
this.inserted={};
var self=this;
env.listeners.push(function(m){if(self._useYahooListener){self.loadNext(m.name)
}});
this.skin=lang.merge(YUI.info.skin);
this._config(o)
};
Y.util.YUILoader.prototype={FILTERS:{RAW:{searchExp:"-min\\.js",replaceStr:".js"},DEBUG:{searchExp:"-min\\.js",replaceStr:"-debug.js"}},SKIN_PREFIX:"skin-",_config:function(o){if(o){for(var i in o){if(lang.hasOwnProperty(o,i)){if(i=="require"){this.require(o[i])
}else{this[i]=o[i]
}}}}var f=this.filter;
if(lang.isString(f)){f=f.toUpperCase();
if(f==="DEBUG"){this.require("logger")
}if(!Y.widget.LogWriter){Y.widget.LogWriter=function(){return Y
}
}this.filter=this.FILTERS[f]
}},addModule:function(o){if(!o||!o.name||!o.type||(!o.path&&!o.fullpath)){return false
}o.ext=("ext" in o)?o.ext:true;
o.requires=o.requires||[];
this.moduleInfo[o.name]=o;
this.dirty=true;
return true
},require:function(what){var a=(typeof what==="string")?arguments:what;
this.dirty=true;
YUI.ObjectUtil.appendArray(this.required,a)
},_addSkin:function(skin,mod){var name=this.formatSkin(skin),info=this.moduleInfo,sinf=this.skin,ext=info[mod]&&info[mod].ext;
if(!info[name]){this.addModule({name:name,type:"css",path:sinf.base+skin+"/"+sinf.path,after:sinf.after,rollup:sinf.rollup,ext:ext})
}if(mod){name=this.formatSkin(skin,mod);
if(!info[name]){var mdef=info[mod],pkg=mdef.pkg||mod;
this.addModule({name:name,type:"css",after:sinf.after,path:pkg+"/"+sinf.base+skin+"/"+mod+".css",ext:ext})
}}return name
},getRequires:function(mod){if(!mod){return[]
}if(!this.dirty&&mod.expanded){return mod.expanded
}mod.requires=mod.requires||[];
var i,d=[],r=mod.requires,o=mod.optional,info=this.moduleInfo,m;
for(i=0;
i<r.length;
i=i+1){d.push(r[i]);
m=info[r[i]];
YUI.ArrayUtil.appendArray(d,this.getRequires(m))
}if(o&&this.loadOptional){for(i=0;
i<o.length;
i=i+1){d.push(o[i]);
YUI.ArrayUtil.appendArray(d,this.getRequires(info[o[i]]))
}}mod.expanded=YUI.ArrayUtil.uniq(d);
return mod.expanded
},getProvides:function(name,notMe){var addMe=!(notMe),ckey=(addMe)?PROV:SUPER,m=this.moduleInfo[name],o={};
if(!m){return o
}if(m[ckey]){return m[ckey]
}var s=m.supersedes,done={},me=this;
var add=function(mm){if(!done[mm]){done[mm]=true;
lang.augmentObject(o,me.getProvides(mm))
}};
if(s){for(var i=0;
i<s.length;
i=i+1){add(s[i])
}}m[SUPER]=o;
m[PROV]=lang.merge(o);
m[PROV][name]=true;
return m[ckey]
},calculate:function(o){if(o||this.dirty){this._config(o);
this._setup();
this._explode();
if(this.allowRollup){this._rollup()
}this._reduce();
this._sort();
this.dirty=false
}},_setup:function(){var info=this.moduleInfo,name,i,j;
for(name in info){if(lang.hasOwnProperty(info,name)){var m=info[name];
if(m&&m.skinnable){var o=this.skin.overrides,smod;
if(o&&o[name]){for(i=0;
i<o[name].length;
i=i+1){smod=this._addSkin(o[name][i],name)
}}else{smod=this._addSkin(this.skin.defaultSkin,name)
}m.requires.push(smod)
}}}var l=lang.merge(this.inserted);
if(!this._sandbox){l=lang.merge(l,env.modules)
}if(this.ignore){YUI.ObjectUtil.appendArray(l,this.ignore)
}if(this.force){for(i=0;
i<this.force.length;
i=i+1){if(this.force[i] in l){delete l[this.force[i]]
}}}for(j in l){if(lang.hasOwnProperty(l,j)){lang.augmentObject(l,this.getProvides(j))
}}this.loaded=l
},_explode:function(){var r=this.required,i,mod;
for(i in r){if(lang.hasOwnProperty(r,i)){mod=this.moduleInfo[i];
if(mod){var req=this.getRequires(mod);
if(req){YUI.ObjectUtil.appendArray(r,req)
}}}}},_skin:function(){},formatSkin:function(skin,mod){var s=this.SKIN_PREFIX+skin;
if(mod){s=s+"-"+mod
}return s
},parseSkin:function(mod){if(mod.indexOf(this.SKIN_PREFIX)===0){var a=mod.split("-");
return{skin:a[1],module:a[2]}
}return null
},_rollup:function(){var i,j,m,s,rollups={},r=this.required,roll,info=this.moduleInfo;
if(this.dirty||!this.rollups){for(i in info){if(lang.hasOwnProperty(info,i)){m=info[i];
if(m&&m.rollup){rollups[i]=m
}}}this.rollups=rollups
}for(;
;
){var rolled=false;
for(i in rollups){if(!r[i]&&!this.loaded[i]){m=info[i];
s=m.supersedes;
roll=false;
if(!m.rollup){continue
}var skin=(m.ext)?false:this.parseSkin(i),c=0;
if(skin){for(j in r){if(lang.hasOwnProperty(r,j)){if(i!==j&&this.parseSkin(j)){c++;
roll=(c>=m.rollup);
if(roll){break
}}}}}else{for(j=0;
j<s.length;
j=j+1){if(this.loaded[s[j]]&&(!YUI.dupsAllowed[s[j]])){roll=false;
break
}else{if(r[s[j]]){c++;
roll=(c>=m.rollup);
if(roll){break
}}}}}if(roll){r[i]=true;
rolled=true;
this.getRequires(m)
}}}if(!rolled){break
}}},_reduce:function(){var i,j,s,m,r=this.required;
for(i in r){if(i in this.loaded){delete r[i]
}else{var skinDef=this.parseSkin(i);
if(skinDef){if(!skinDef.module){var skin_pre=this.SKIN_PREFIX+skinDef.skin;
for(j in r){if(lang.hasOwnProperty(r,j)){m=this.moduleInfo[j];
var ext=m&&m.ext;
if(!ext&&j!==i&&j.indexOf(skin_pre)>-1){delete r[j]
}}}}}else{m=this.moduleInfo[i];
s=m&&m.supersedes;
if(s){for(j=0;
j<s.length;
j=j+1){if(s[j] in r){delete r[s[j]]
}}}}}}},_onFailure:function(msg){YAHOO.log("Failure","info","loader");
var f=this.onFailure;
if(f){f.call(this.scope,{msg:"failure: "+msg,data:this.data,success:false})
}},_onTimeout:function(){YAHOO.log("Timeout","info","loader");
var f=this.onTimeout;
if(f){f.call(this.scope,{msg:"timeout",data:this.data,success:false})
}},_sort:function(){var s=[],info=this.moduleInfo,loaded=this.loaded,checkOptional=!this.loadOptional,me=this;
var requires=function(aa,bb){var mm=info[aa];
if(loaded[bb]||!mm){return false
}var ii,rr=mm.expanded,after=mm.after,other=info[bb],optional=mm.optional;
if(rr&&YUI.ArrayUtil.indexOf(rr,bb)>-1){return true
}if(after&&YUI.ArrayUtil.indexOf(after,bb)>-1){return true
}if(checkOptional&&optional&&YUI.ArrayUtil.indexOf(optional,bb)>-1){return true
}var ss=info[bb]&&info[bb].supersedes;
if(ss){for(ii=0;
ii<ss.length;
ii=ii+1){if(requires(aa,ss[ii])){return true
}}}if(mm.ext&&mm.type=="css"&&!other.ext&&other.type=="css"){return true
}return false
};
for(var i in this.required){if(lang.hasOwnProperty(this.required,i)){s.push(i)
}}var p=0;
for(;
;
){var l=s.length,a,b,j,k,moved=false;
for(j=p;
j<l;
j=j+1){a=s[j];
for(k=j+1;
k<l;
k=k+1){if(requires(a,s[k])){b=s.splice(k,1);
s.splice(j,0,b[0]);
moved=true;
break
}}if(moved){break
}else{p=p+1
}}if(!moved){break
}}this.sorted=s
},toString:function(){var o={type:"YUILoader",base:this.base,filter:this.filter,required:this.required,loaded:this.loaded,inserted:this.inserted};
lang.dump(o,1)
},_combine:function(){this._combining=[];
var self=this,s=this.sorted,len=s.length,js=this.comboBase,css=this.comboBase,target,startLen=js.length,i,m,type=this.loadType;
YAHOO.log("type "+type);
for(i=0;
i<len;
i=i+1){m=this.moduleInfo[s[i]];
if(m&&!m.ext&&(!type||type===m.type)){target=this.root+m.path;
target+="&";
if(m.type=="js"){js+=target
}else{css+=target
}this._combining.push(s[i])
}}if(this._combining.length){YAHOO.log("Attempting to combine: "+this._combining,"info","loader");
var callback=function(o){var c=this._combining,len=c.length,i,m;
for(i=0;
i<len;
i=i+1){this.inserted[c[i]]=true
}this.loadNext(o.data)
},loadScript=function(){if(js.length>startLen){YAHOO.util.Get.script(self._filter(js),{data:self._loading,onSuccess:callback,onFailure:self._onFailure,onTimeout:self._onTimeout,insertBefore:self.insertBefore,charset:self.charset,timeout:self.timeout,scope:self})
}};
if(css.length>startLen){YAHOO.util.Get.css(this._filter(css),{data:this._loading,onSuccess:loadScript,onFailure:this._onFailure,onTimeout:this._onTimeout,insertBefore:this.insertBefore,charset:this.charset,timeout:this.timeout,scope:self})
}else{loadScript()
}return
}else{this.loadNext(this._loading)
}},insert:function(o,type){this.calculate(o);
this._loading=true;
this.loadType=type;
if(this.combine){return this._combine()
}if(!type){var self=this;
this._internalCallback=function(){self._internalCallback=null;
self.insert(null,"js")
};
this.insert(null,"css");
return
}this.loadNext()
},sandbox:function(o,type){this._config(o);
if(!this.onSuccess){throw new Error("You must supply an onSuccess handler for your sandbox")
}this._sandbox=true;
var self=this;
if(!type||type!=="js"){this._internalCallback=function(){self._internalCallback=null;
self.sandbox(null,"js")
};
this.insert(null,"css");
return
}if(!util.Connect){var ld=new YAHOO.util.YUILoader();
ld.insert({base:this.base,filter:this.filter,require:"connection",insertBefore:this.insertBefore,charset:this.charset,onSuccess:function(){this.sandbox(null,"js")
},scope:this},"js");
return
}this._scriptText=[];
this._loadCount=0;
this._stopCount=this.sorted.length;
this._xhr=[];
this.calculate();
var s=this.sorted,l=s.length,i,m,url;
for(i=0;
i<l;
i=i+1){m=this.moduleInfo[s[i]];
if(!m){this._onFailure("undefined module "+m);
for(var j=0;
j<this._xhr.length;
j=j+1){this._xhr[j].abort()
}return
}if(m.type!=="js"){this._loadCount++;
continue
}url=m.fullpath;
url=(url)?this._filter(url):this._url(m.path);
var xhrData={success:function(o){var idx=o.argument[0],name=o.argument[2];
this._scriptText[idx]=o.responseText;
if(this.onProgress){this.onProgress.call(this.scope,{name:name,scriptText:o.responseText,xhrResponse:o,data:this.data})
}this._loadCount++;
if(this._loadCount>=this._stopCount){var v=this.varName||"YAHOO";
var t="(function() {\n";
var b="\nreturn "+v+";\n})();";
var ref=eval(t+this._scriptText.join("\n")+b);
this._pushEvents(ref);
if(ref){this.onSuccess.call(this.scope,{reference:ref,data:this.data})
}else{this._onFailure.call(this.varName+" reference failure")
}}},failure:function(o){this.onFailure.call(this.scope,{msg:"XHR failure",xhrResponse:o,data:this.data})
},scope:this,argument:[i,url,s[i]]};
this._xhr.push(util.Connect.asyncRequest("GET",url,xhrData))
}},loadNext:function(mname){if(!this._loading){return
}if(mname){if(mname!==this._loading){return
}this.inserted[mname]=true;
if(this.onProgress){this.onProgress.call(this.scope,{name:mname,data:this.data})
}}var s=this.sorted,len=s.length,i,m;
for(i=0;
i<len;
i=i+1){if(s[i] in this.inserted){continue
}if(s[i]===this._loading){return
}m=this.moduleInfo[s[i]];
if(!m){this.onFailure.call(this.scope,{msg:"undefined module "+m,data:this.data});
return
}if(!this.loadType||this.loadType===m.type){this._loading=s[i];
var fn=(m.type==="css")?util.Get.css:util.Get.script,url=m.fullpath,self=this,c=function(o){self.loadNext(o.data)
};
url=(url)?this._filter(url):this._url(m.path);
if(env.ua.webkit&&env.ua.webkit<420&&m.type==="js"&&!m.varName){c=null;
this._useYahooListener=true
}fn(url,{data:s[i],onSuccess:c,onFailure:this._onFailure,onTimeout:this._onTimeout,insertBefore:this.insertBefore,charset:this.charset,timeout:this.timeout,varName:m.varName,scope:self});
return
}}this._loading=null;
if(this._internalCallback){var f=this._internalCallback;
this._internalCallback=null;
f.call(this)
}else{if(this.onSuccess){this._pushEvents();
this.onSuccess.call(this.scope,{data:this.data})
}}},_pushEvents:function(ref){var r=ref||YAHOO;
if(r.util&&r.util.Event){r.util.Event._load()
}},_filter:function(str){var f=this.filter;
return(f)?str.replace(new RegExp(f.searchExp,"g"),f.replaceStr):str
},_url:function(path){return this._filter((this.base||"")+path)
}}
})();
YAHOO.register("yuiloader",YAHOO.util.YUILoader,{version:"2.8.0r4",build:"2449"});
(function(){YAHOO.env._id_counter=YAHOO.env._id_counter||0;
var ao=YAHOO.util,ai=YAHOO.lang,aE=YAHOO.env.ua,at=YAHOO.lang.trim,aN={},aJ={},ag=/^t(?:able|d|h)$/i,y=/color$/i,aj=window.document,z=aj.documentElement,aM="ownerDocument",aD="defaultView",av="documentElement",ax="compatMode",aP="offsetLeft",ae="offsetTop",aw="offsetParent",x="parentNode",aF="nodeType",aq="tagName",af="scrollLeft",aI="scrollTop",ad="getBoundingClientRect",au="getComputedStyle",aQ="currentStyle",ah="CSS1Compat",aO="BackCompat",aK="class",an="className",ak="",ar=" ",ay="(?:^|\\s)",aG="(?= |$)",Y="g",aB="position",aL="fixed",G="relative",aH="left",aC="top",az="medium",aA="borderLeftWidth",ac="borderTopWidth",ap=aE.opera,al=aE.webkit,am=aE.gecko,aa=aE.ie;
ao.Dom={CUSTOM_ATTRIBUTES:(!z.hasAttribute)?{"for":"htmlFor","class":an}:{htmlFor:"for",className:aK},DOT_ATTRIBUTES:{},get:function(f){var c,a,e,g,d,b;
if(f){if(f[aF]||f.item){return f
}if(typeof f==="string"){c=f;
f=aj.getElementById(f);
b=(f)?f.attributes:null;
if(f&&b&&b.id&&b.id.value===c){return f
}else{if(f&&aj.all){f=null;
a=aj.all[c];
for(g=0,d=a.length;
g<d;
++g){if(a[g].id===c){return a[g]
}}}}return f
}if(YAHOO.util.Element&&f instanceof YAHOO.util.Element){f=f.get("element")
}if("length" in f){e=[];
for(g=0,d=f.length;
g<d;
++g){e[e.length]=ao.Dom.get(f[g])
}return e
}return f
}return null
},getComputedStyle:function(a,b){if(window[au]){return a[aM][aD][au](a,null)[b]
}else{if(a[aQ]){return ao.Dom.IE_ComputedStyle.get(a,b)
}}},getStyle:function(a,b){return ao.Dom.batch(a,ao.Dom._getStyle,b)
},_getStyle:function(){if(window[au]){return function(b,d){d=(d==="float")?d="cssFloat":ao.Dom._toCamel(d);
var a=b.style[d],c;
if(!a){c=b[aM][aD][au](b,null);
if(c){a=c[d]
}}return a
}
}else{if(z[aQ]){return function(b,e){var a;
switch(e){case"opacity":a=100;
try{a=b.filters["DXImageTransform.Microsoft.Alpha"].opacity
}catch(d){try{a=b.filters("alpha").opacity
}catch(c){}}return a/100;
case"float":e="styleFloat";
default:e=ao.Dom._toCamel(e);
a=b[aQ]?b[aQ][e]:null;
return(b.style[e]||a)
}}
}}}(),setStyle:function(b,c,a){ao.Dom.batch(b,ao.Dom._setStyle,{prop:c,val:a})
},_setStyle:function(){if(aa){return function(c,b){var a=ao.Dom._toCamel(b.prop),d=b.val;
if(c){switch(a){case"opacity":if(ai.isString(c.style.filter)){c.style.filter="alpha(opacity="+d*100+")";
if(!c[aQ]||!c[aQ].hasLayout){c.style.zoom=1
}}break;
case"float":a="styleFloat";
default:c.style[a]=d
}}else{}}
}else{return function(c,b){var a=ao.Dom._toCamel(b.prop),d=b.val;
if(c){if(a=="float"){a="cssFloat"
}c.style[a]=d
}else{}}
}}(),getXY:function(a){return ao.Dom.batch(a,ao.Dom._getXY)
},_canPosition:function(a){return(ao.Dom._getStyle(a,"display")!=="none"&&ao.Dom._inDoc(a))
},_getXY:function(){if(aj[av][ad]){return function(k){var j,a,h,c,d,e,f,m,l,g=Math.floor,b=false;
if(ao.Dom._canPosition(k)){h=k[ad]();
c=k[aM];
j=ao.Dom.getDocumentScrollLeft(c);
a=ao.Dom.getDocumentScrollTop(c);
b=[g(h[aH]),g(h[aC])];
if(aa&&aE.ie<8){d=2;
e=2;
f=c[ax];
if(aE.ie===6){if(f!==aO){d=0;
e=0
}}if((f===aO)){m=ab(c[av],aA);
l=ab(c[av],ac);
if(m!==az){d=parseInt(m,10)
}if(l!==az){e=parseInt(l,10)
}}b[0]-=d;
b[1]-=e
}if((a||j)){b[0]+=j;
b[1]+=a
}b[0]=g(b[0]);
b[1]=g(b[1])
}else{}return b
}
}else{return function(h){var a,g,f,d,c,e=false,b=h;
if(ao.Dom._canPosition(h)){e=[h[aP],h[ae]];
a=ao.Dom.getDocumentScrollLeft(h[aM]);
g=ao.Dom.getDocumentScrollTop(h[aM]);
c=((am||aE.webkit>519)?true:false);
while((b=b[aw])){e[0]+=b[aP];
e[1]+=b[ae];
if(c){e=ao.Dom._calcBorders(b,e)
}}if(ao.Dom._getStyle(h,aB)!==aL){b=h;
while((b=b[x])&&b[aq]){f=b[aI];
d=b[af];
if(am&&(ao.Dom._getStyle(b,"overflow")!=="visible")){e=ao.Dom._calcBorders(b,e)
}if(f||d){e[0]-=d;
e[1]-=f
}}e[0]+=a;
e[1]+=g
}else{if(ap){e[0]-=a;
e[1]-=g
}else{if(al||am){e[0]+=a;
e[1]+=g
}}}e[0]=Math.floor(e[0]);
e[1]=Math.floor(e[1])
}else{}return e
}
}}(),getX:function(a){var b=function(c){return ao.Dom.getXY(c)[0]
};
return ao.Dom.batch(a,b,ao.Dom,true)
},getY:function(a){var b=function(c){return ao.Dom.getXY(c)[1]
};
return ao.Dom.batch(a,b,ao.Dom,true)
},setXY:function(b,a,c){ao.Dom.batch(b,ao.Dom._setXY,{pos:a,noRetry:c})
},_setXY:function(j,f){var e=ao.Dom._getStyle(j,aB),g=ao.Dom.setStyle,b=f.pos,a=f.noRetry,d=[parseInt(ao.Dom.getComputedStyle(j,aH),10),parseInt(ao.Dom.getComputedStyle(j,aC),10)],c,h;
if(e=="static"){e=G;
g(j,aB,e)
}c=ao.Dom._getXY(j);
if(!b||c===false){return false
}if(isNaN(d[0])){d[0]=(e==G)?0:j[aP]
}if(isNaN(d[1])){d[1]=(e==G)?0:j[ae]
}if(b[0]!==null){g(j,aH,b[0]-c[0]+d[0]+"px")
}if(b[1]!==null){g(j,aC,b[1]-c[1]+d[1]+"px")
}if(!a){h=ao.Dom._getXY(j);
if((b[0]!==null&&h[0]!=b[0])||(b[1]!==null&&h[1]!=b[1])){ao.Dom._setXY(j,{pos:b,noRetry:true})
}}},setX:function(b,a){ao.Dom.setXY(b,[a,null])
},setY:function(a,b){ao.Dom.setXY(a,[null,b])
},getRegion:function(a){var b=function(c){var d=false;
if(ao.Dom._canPosition(c)){d=ao.Region.getRegion(c)
}else{}return d
};
return ao.Dom.batch(a,b,ao.Dom,true)
},getClientWidth:function(){return ao.Dom.getViewportWidth()
},getClientHeight:function(){return ao.Dom.getViewportHeight()
},getElementsByClassName:function(f,b,e,c,k,d){b=b||"*";
e=(e)?ao.Dom.get(e):null||aj;
if(!e){return[]
}var a=[],l=e.getElementsByTagName(b),h=ao.Dom.hasClass;
for(var j=0,g=l.length;
j<g;
++j){if(h(l[j],f)){a[a.length]=l[j]
}}if(c){ao.Dom.batch(a,c,k,d)
}return a
},hasClass:function(b,a){return ao.Dom.batch(b,ao.Dom._hasClass,a)
},_hasClass:function(a,c){var b=false,d;
if(a&&c){d=ao.Dom._getAttribute(a,an)||ak;
if(c.exec){b=c.test(d)
}else{b=c&&(ar+d+ar).indexOf(ar+c+ar)>-1
}}else{}return b
},addClass:function(b,a){return ao.Dom.batch(b,ao.Dom._addClass,a)
},_addClass:function(a,c){var b=false,d;
if(a&&c){d=ao.Dom._getAttribute(a,an)||ak;
if(!ao.Dom._hasClass(a,c)){ao.Dom.setAttribute(a,an,at(d+ar+c));
b=true
}}else{}return b
},removeClass:function(b,a){return ao.Dom.batch(b,ao.Dom._removeClass,a)
},_removeClass:function(f,a){var e=false,d,c,b;
if(f&&a){d=ao.Dom._getAttribute(f,an)||ak;
ao.Dom.setAttribute(f,an,d.replace(ao.Dom._getClassRegex(a),ak));
c=ao.Dom._getAttribute(f,an);
if(d!==c){ao.Dom.setAttribute(f,an,at(c));
e=true;
if(ao.Dom._getAttribute(f,an)===""){b=(f.hasAttribute&&f.hasAttribute(aK))?aK:an;
f.removeAttribute(b)
}}}else{}return e
},replaceClass:function(a,c,b){return ao.Dom.batch(a,ao.Dom._replaceClass,{from:c,to:b})
},_replaceClass:function(g,a){var f,c,e,b=false,d;
if(g&&a){c=a.from;
e=a.to;
if(!e){b=false
}else{if(!c){b=ao.Dom._addClass(g,a.to)
}else{if(c!==e){d=ao.Dom._getAttribute(g,an)||ak;
f=(ar+d.replace(ao.Dom._getClassRegex(c),ar+e)).split(ao.Dom._getClassRegex(e));
f.splice(1,0,ar+e);
ao.Dom.setAttribute(g,an,at(f.join(ak)));
b=true
}}}}else{}return b
},generateId:function(b,a){a=a||"yui-gen";
var c=function(e){if(e&&e.id){return e.id
}var d=a+YAHOO.env._id_counter++;
if(e){if(e[aM]&&e[aM].getElementById(d)){return ao.Dom.generateId(e,d+a)
}e.id=d
}return d
};
return ao.Dom.batch(b,c,ao.Dom,true)||c.apply(ao.Dom,arguments)
},isAncestor:function(c,a){c=ao.Dom.get(c);
a=ao.Dom.get(a);
var b=false;
if((c&&a)&&(c[aF]&&a[aF])){if(c.contains&&c!==a){b=c.contains(a)
}else{if(c.compareDocumentPosition){b=!!(c.compareDocumentPosition(a)&16)
}}}else{}return b
},inDocument:function(a,b){return ao.Dom._inDoc(ao.Dom.get(a),b)
},_inDoc:function(c,a){var b=false;
if(c&&c[aq]){a=a||c[aM];
b=ao.Dom.isAncestor(a[av],c)
}else{}return b
},getElementsBy:function(a,b,f,d,j,e,c){b=b||"*";
f=(f)?ao.Dom.get(f):null||aj;
if(!f){return[]
}var k=[],l=f.getElementsByTagName(b);
for(var h=0,g=l.length;
h<g;
++h){if(a(l[h])){if(c){k=l[h];
break
}else{k[k.length]=l[h]
}}}if(d){ao.Dom.batch(k,d,j,e)
}return k
},getElementBy:function(a,b,c){return ao.Dom.getElementsBy(a,b,c,null,null,null,true)
},batch:function(a,c,f,e){var g=[],d=(e)?f:window;
a=(a&&(a[aq]||a.item))?a:ao.Dom.get(a);
if(a&&c){if(a[aq]||a.length===undefined){return c.call(d,a,f)
}for(var b=0;
b<a.length;
++b){g[g.length]=c.call(d,a[b],f)
}}else{return false
}return g
},getDocumentHeight:function(){var b=(aj[ax]!=ah||al)?aj.body.scrollHeight:z.scrollHeight,a=Math.max(b,ao.Dom.getViewportHeight());
return a
},getDocumentWidth:function(){var b=(aj[ax]!=ah||al)?aj.body.scrollWidth:z.scrollWidth,a=Math.max(b,ao.Dom.getViewportWidth());
return a
},getViewportHeight:function(){var a=self.innerHeight,b=aj[ax];
if((b||aa)&&!ap){a=(b==ah)?z.clientHeight:aj.body.clientHeight
}return a
},getViewportWidth:function(){var a=self.innerWidth,b=aj[ax];
if(b||aa){a=(b==ah)?z.clientWidth:aj.body.clientWidth
}return a
},getAncestorBy:function(a,b){while((a=a[x])){if(ao.Dom._testElement(a,b)){return a
}}return null
},getAncestorByClassName:function(c,b){c=ao.Dom.get(c);
if(!c){return null
}var a=function(d){return ao.Dom.hasClass(d,b)
};
return ao.Dom.getAncestorBy(c,a)
},getAncestorByTagName:function(c,b){c=ao.Dom.get(c);
if(!c){return null
}var a=function(d){return d[aq]&&d[aq].toUpperCase()==b.toUpperCase()
};
return ao.Dom.getAncestorBy(c,a)
},getPreviousSiblingBy:function(a,b){while(a){a=a.previousSibling;
if(ao.Dom._testElement(a,b)){return a
}}return null
},getPreviousSibling:function(a){a=ao.Dom.get(a);
if(!a){return null
}return ao.Dom.getPreviousSiblingBy(a)
},getNextSiblingBy:function(a,b){while(a){a=a.nextSibling;
if(ao.Dom._testElement(a,b)){return a
}}return null
},getNextSibling:function(a){a=ao.Dom.get(a);
if(!a){return null
}return ao.Dom.getNextSiblingBy(a)
},getFirstChildBy:function(b,a){var c=(ao.Dom._testElement(b.firstChild,a))?b.firstChild:null;
return c||ao.Dom.getNextSiblingBy(b.firstChild,a)
},getFirstChild:function(a,b){a=ao.Dom.get(a);
if(!a){return null
}return ao.Dom.getFirstChildBy(a)
},getLastChildBy:function(b,a){if(!b){return null
}var c=(ao.Dom._testElement(b.lastChild,a))?b.lastChild:null;
return c||ao.Dom.getPreviousSiblingBy(b.lastChild,a)
},getLastChild:function(a){a=ao.Dom.get(a);
return ao.Dom.getLastChildBy(a)
},getChildrenBy:function(c,d){var a=ao.Dom.getFirstChildBy(c,d),b=a?[a]:[];
ao.Dom.getNextSiblingBy(a,function(e){if(!d||d(e)){b[b.length]=e
}return false
});
return b
},getChildren:function(a){a=ao.Dom.get(a);
if(!a){}return ao.Dom.getChildrenBy(a)
},getDocumentScrollLeft:function(a){a=a||aj;
return Math.max(a[av].scrollLeft,a.body.scrollLeft)
},getDocumentScrollTop:function(a){a=a||aj;
return Math.max(a[av].scrollTop,a.body.scrollTop)
},insertBefore:function(b,a){b=ao.Dom.get(b);
a=ao.Dom.get(a);
if(!b||!a||!a[x]){return null
}return a[x].insertBefore(b,a)
},insertAfter:function(b,a){b=ao.Dom.get(b);
a=ao.Dom.get(a);
if(!b||!a||!a[x]){return null
}if(a.nextSibling){return a[x].insertBefore(b,a.nextSibling)
}else{return a[x].appendChild(b)
}},getClientRegion:function(){var a=ao.Dom.getDocumentScrollTop(),c=ao.Dom.getDocumentScrollLeft(),d=ao.Dom.getViewportWidth()+c,b=ao.Dom.getViewportHeight()+a;
return new ao.Region(a,d,b,c)
},setAttribute:function(c,b,a){ao.Dom.batch(c,ao.Dom._setAttribute,{attr:b,val:a})
},_setAttribute:function(a,c){var b=ao.Dom._toCamel(c.attr),d=c.val;
if(a&&a.setAttribute){if(ao.Dom.DOT_ATTRIBUTES[b]){a[b]=d
}else{b=ao.Dom.CUSTOM_ATTRIBUTES[b]||b;
a.setAttribute(b,d)
}}else{}},getAttribute:function(b,a){return ao.Dom.batch(b,ao.Dom._getAttribute,a)
},_getAttribute:function(c,b){var a;
b=ao.Dom.CUSTOM_ATTRIBUTES[b]||b;
if(c&&c.getAttribute){a=c.getAttribute(b,2)
}else{}return a
},_toCamel:function(c){var a=aN;
function b(e,d){return d.toUpperCase()
}return a[c]||(a[c]=c.indexOf("-")===-1?c:c.replace(/-([a-z])/gi,b))
},_getClassRegex:function(b){var a;
if(b!==undefined){if(b.exec){a=b
}else{a=aJ[b];
if(!a){b=b.replace(ao.Dom._patterns.CLASS_RE_TOKENS,"\\$1");
a=aJ[b]=new RegExp(ay+b+aG,Y)
}}}return a
},_patterns:{ROOT_TAG:/^body|html$/i,CLASS_RE_TOKENS:/([\.\(\)\^\$\*\+\?\|\[\]\{\}\\])/g},_testElement:function(a,b){return a&&a[aF]==1&&(!b||b(a))
},_calcBorders:function(a,d){var c=parseInt(ao.Dom[au](a,ac),10)||0,b=parseInt(ao.Dom[au](a,aA),10)||0;
if(am){if(ag.test(a[aq])){c=0;
b=0
}}d[0]+=b;
d[1]+=c;
return d
}};
var ab=ao.Dom[au];
if(aE.opera){ao.Dom[au]=function(c,b){var a=ab(c,b);
if(y.test(b)){a=ao.Dom.Color.toRGB(a)
}return a
}
}if(aE.webkit){ao.Dom[au]=function(c,b){var a=ab(c,b);
if(a==="rgba(0, 0, 0, 0)"){a="transparent"
}return a
}
}if(aE.ie&&aE.ie>=8&&aj.documentElement.hasAttribute){ao.Dom.DOT_ATTRIBUTES.type=true
}})();
YAHOO.util.Region=function(c,b,a,d){this.top=c;
this.y=c;
this[1]=c;
this.right=b;
this.bottom=a;
this.left=d;
this.x=d;
this[0]=d;
this.width=this.right-this.left;
this.height=this.bottom-this.top
};
YAHOO.util.Region.prototype.contains=function(a){return(a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom)
};
YAHOO.util.Region.prototype.getArea=function(){return((this.bottom-this.top)*(this.right-this.left))
};
YAHOO.util.Region.prototype.intersect=function(b){var d=Math.max(this.top,b.top),c=Math.min(this.right,b.right),a=Math.min(this.bottom,b.bottom),e=Math.max(this.left,b.left);
if(a>=d&&c>=e){return new YAHOO.util.Region(d,c,a,e)
}else{return null
}};
YAHOO.util.Region.prototype.union=function(b){var d=Math.min(this.top,b.top),c=Math.max(this.right,b.right),a=Math.max(this.bottom,b.bottom),e=Math.min(this.left,b.left);
return new YAHOO.util.Region(d,c,a,e)
};
YAHOO.util.Region.prototype.toString=function(){return("Region {top: "+this.top+", right: "+this.right+", bottom: "+this.bottom+", left: "+this.left+", height: "+this.height+", width: "+this.width+"}")
};
YAHOO.util.Region.getRegion=function(d){var b=YAHOO.util.Dom.getXY(d),e=b[1],c=b[0]+d.offsetWidth,a=b[1]+d.offsetHeight,f=b[0];
return new YAHOO.util.Region(e,c,a,f)
};
YAHOO.util.Point=function(a,b){if(YAHOO.lang.isArray(a)){b=a[1];
a=a[0]
}YAHOO.util.Point.superclass.constructor.call(this,b,a,b,a)
};
YAHOO.extend(YAHOO.util.Point,YAHOO.util.Region);
(function(){var x=YAHOO.util,y="clientTop",t="clientLeft",o="parentNode",n="right",a="hasLayout",p="px",c="opacity",m="auto",v="borderLeftWidth",r="borderTopWidth",h="borderRightWidth",b="borderBottomWidth",e="visible",g="transparent",k="height",u="width",q="style",d="currentStyle",f=/^width|height$/,j=/^(\d[.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz|%){1}?/i,l={get:function(C,A){var B="",z=C[d][A];
if(A===c){B=x.Dom.getStyle(C,c)
}else{if(!z||(z.indexOf&&z.indexOf(p)>-1)){B=z
}else{if(x.Dom.IE_COMPUTED[A]){B=x.Dom.IE_COMPUTED[A](C,A)
}else{if(j.test(z)){B=x.Dom.IE.ComputedStyle.getPixel(C,A)
}else{B=z
}}}}return B
},getOffset:function(C,B){var z=C[d][B],G=B.charAt(0).toUpperCase()+B.substr(1),F="offset"+G,E="pixel"+G,A="",D;
if(z==m){D=C[F];
if(D===undefined){A=0
}A=D;
if(f.test(B)){C[q][B]=D;
if(C[F]>D){A=D-(C[F]-D)
}C[q][B]=m
}}else{if(!C[q][E]&&!C[q][B]){C[q][B]=z
}A=C[q][E]
}return A+p
},getBorderWidth:function(B,z){var A=null;
if(!B[d][a]){B[q].zoom=1
}switch(z){case r:A=B[y];
break;
case b:A=B.offsetHeight-B.clientHeight-B[y];
break;
case v:A=B[t];
break;
case h:A=B.offsetWidth-B.clientWidth-B[t];
break
}return A+p
},getPixel:function(C,D){var A=null,z=C[d][n],B=C[d][D];
C[q][n]=B;
A=C[q].pixelRight;
C[q][n]=z;
return A+p
},getMargin:function(A,B){var z;
if(A[d][B]==m){z=0+p
}else{z=x.Dom.IE.ComputedStyle.getPixel(A,B)
}return z
},getVisibility:function(A,B){var z;
while((z=A[d])&&z[B]=="inherit"){A=A[o]
}return(z)?z[B]:e
},getColor:function(z,A){return x.Dom.Color.toRGB(z[d][A])||g
},getBorderColor:function(B,C){var A=B[d],z=A[C]||A.color;
return x.Dom.Color.toRGB(x.Dom.Color.toHex(z))
}},w={};
w.top=w.right=w.bottom=w.left=w[u]=w[k]=l.getOffset;
w.color=l.getColor;
w[r]=w[h]=w[b]=w[v]=l.getBorderWidth;
w.marginTop=w.marginRight=w.marginBottom=w.marginLeft=l.getMargin;
w.visibility=l.getVisibility;
w.borderColor=w.borderTopColor=w.borderRightColor=w.borderBottomColor=w.borderLeftColor=l.getBorderColor;
x.Dom.IE_COMPUTED=w;
x.Dom.IE_ComputedStyle=l
})();
(function(){var c="toString",a=parseInt,d=RegExp,b=YAHOO.util;
b.Dom.Color={KEYWORDS:{black:"000",silver:"c0c0c0",gray:"808080",white:"fff",maroon:"800000",red:"f00",purple:"800080",fuchsia:"f0f",green:"008000",lime:"0f0",olive:"808000",yellow:"ff0",navy:"000080",blue:"00f",teal:"008080",aqua:"0ff"},re_RGB:/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,re_hex:/^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,re_hex3:/([0-9A-F])/gi,toRGB:function(e){if(!b.Dom.Color.re_RGB.test(e)){e=b.Dom.Color.toHex(e)
}if(b.Dom.Color.re_hex.exec(e)){e="rgb("+[a(d.$1,16),a(d.$2,16),a(d.$3,16)].join(", ")+")"
}return e
},toHex:function(e){e=b.Dom.Color.KEYWORDS[e]||e;
if(b.Dom.Color.re_RGB.exec(e)){var f=(d.$1.length===1)?"0"+d.$1:Number(d.$1),g=(d.$2.length===1)?"0"+d.$2:Number(d.$2),h=(d.$3.length===1)?"0"+d.$3:Number(d.$3);
e=[f[c](16),g[c](16),h[c](16)].join("")
}if(e.length<6){e=e.replace(b.Dom.Color.re_hex3,"$1$1")
}if(e!=="transparent"&&e.indexOf("#")<0){e="#"+e
}return e.toLowerCase()
}}
}());
YAHOO.register("dom",YAHOO.util.Dom,{version:"2.8.0r4",build:"2449"});
YAHOO.util.CustomEvent=function(d,e,f,a,c){this.type=d;
this.scope=e||window;
this.silent=f;
this.fireOnce=c;
this.fired=false;
this.firedWith=null;
this.signature=a||YAHOO.util.CustomEvent.LIST;
this.subscribers=[];
if(!this.silent){}var b="_YUICEOnSubscribe";
if(d!==b){this.subscribeEvent=new YAHOO.util.CustomEvent(b,this,true)
}this.lastError=null
};
YAHOO.util.CustomEvent.LIST=0;
YAHOO.util.CustomEvent.FLAT=1;
YAHOO.util.CustomEvent.prototype={subscribe:function(d,c,b){if(!d){throw new Error("Invalid callback for subscriber to '"+this.type+"'")
}if(this.subscribeEvent){this.subscribeEvent.fire(d,c,b)
}var a=new YAHOO.util.Subscriber(d,c,b);
if(this.fireOnce&&this.fired){this.notify(a,this.firedWith)
}else{this.subscribers.push(a)
}},unsubscribe:function(d,b){if(!d){return this.unsubscribeAll()
}var c=false;
for(var f=0,a=this.subscribers.length;
f<a;
++f){var e=this.subscribers[f];
if(e&&e.contains(d,b)){this._delete(f);
c=true
}}return c
},fire:function(){this.lastError=null;
var b=[],a=this.subscribers.length;
var f=[].slice.call(arguments,0),g=true,d,h=false;
if(this.fireOnce){if(this.fired){return true
}else{this.firedWith=f
}}this.fired=true;
if(!a&&this.silent){return true
}if(!this.silent){}var e=this.subscribers.slice();
for(d=0;
d<a;
++d){var c=e[d];
if(!c){h=true
}else{g=this.notify(c,f);
if(false===g){if(!this.silent){}break
}}}return(g!==false)
},notify:function(d,g){var h,b=null,e=d.getScope(this.scope),a=YAHOO.util.Event.throwErrors;
if(!this.silent){}if(this.signature==YAHOO.util.CustomEvent.FLAT){if(g.length>0){b=g[0]
}try{h=d.fn.call(e,b,d.obj)
}catch(c){this.lastError=c;
if(a){throw c
}}}else{try{h=d.fn.call(e,this.type,g,d.obj)
}catch(f){this.lastError=f;
if(a){throw f
}}}return h
},unsubscribeAll:function(){var a=this.subscribers.length,b;
for(b=a-1;
b>-1;
b--){this._delete(b)
}this.subscribers=[];
return a
},_delete:function(a){var b=this.subscribers[a];
if(b){delete b.fn;
delete b.obj
}this.subscribers.splice(a,1)
},toString:function(){return"CustomEvent: '"+this.type+"', context: "+this.scope
}};
YAHOO.util.Subscriber=function(a,c,b){this.fn=a;
this.obj=YAHOO.lang.isUndefined(c)?null:c;
this.overrideContext=b
};
YAHOO.util.Subscriber.prototype.getScope=function(a){if(this.overrideContext){if(this.overrideContext===true){return this.obj
}else{return this.overrideContext
}}return a
};
YAHOO.util.Subscriber.prototype.contains=function(a,b){if(b){return(this.fn==a&&this.obj==b)
}else{return(this.fn==a)
}};
YAHOO.util.Subscriber.prototype.toString=function(){return"Subscriber { obj: "+this.obj+", overrideContext: "+(this.overrideContext||"no")+" }"
};
if(!YAHOO.util.Event){YAHOO.util.Event=function(){var h=false,g=[],e=[],d=0,k=[],c=0,b={63232:38,63233:40,63234:37,63235:39,63276:33,63277:34,25:9},a=YAHOO.env.ua.ie,j="focusin",f="focusout";
return{POLL_RETRYS:500,POLL_INTERVAL:40,EL:0,TYPE:1,FN:2,WFN:3,UNLOAD_OBJ:3,ADJ_SCOPE:4,OBJ:5,OVERRIDE:6,CAPTURE:7,lastError:null,isSafari:YAHOO.env.ua.webkit,webkit:YAHOO.env.ua.webkit,isIE:a,_interval:null,_dri:null,_specialTypes:{focusin:(a?"focusin":"focus"),focusout:(a?"focusout":"blur")},DOMReady:false,throwErrors:false,startInterval:function(){if(!this._interval){this._interval=YAHOO.lang.later(this.POLL_INTERVAL,this,this._tryPreloadAttach,null,true)
}},onAvailable:function(n,r,p,o,q){var m=(YAHOO.lang.isString(n))?[n]:n;
for(var l=0;
l<m.length;
l=l+1){k.push({id:m[l],fn:r,obj:p,overrideContext:o,checkReady:q})
}d=this.POLL_RETRYS;
this.startInterval()
},onContentReady:function(n,m,l,o){this.onAvailable(n,m,l,o,true)
},onDOMReady:function(){this.DOMReadyEvent.subscribe.apply(this.DOMReadyEvent,arguments)
},_addListener:function(y,A,o,v,q,l){if(!o||!o.call){return false
}if(this._isValidCollection(y)){var n=true;
for(var u=0,r=y.length;
u<r;
++u){n=this.on(y[u],A,o,v,q)&&n
}return n
}else{if(YAHOO.lang.isString(y)){var w=this.getEl(y);
if(w){y=w
}else{this.onAvailable(y,function(){YAHOO.util.Event._addListener(y,A,o,v,q,l)
});
return true
}}}if(!y){return false
}if("unload"==A&&v!==this){e[e.length]=[y,A,o,v,q];
return true
}var z=y;
if(q){if(q===true){z=v
}else{z=q
}}var x=function(B){return o.call(z,YAHOO.util.Event.getEvent(B,y),v)
};
var m=[y,A,o,x,z,v,q,l];
var t=g.length;
g[t]=m;
try{this._simpleAdd(y,A,x,l)
}catch(p){this.lastError=p;
this.removeListener(y,A,o);
return false
}return true
},_getType:function(l){return this._specialTypes[l]||l
},addListener:function(q,n,l,p,o){var m=((n==j||n==f)&&!YAHOO.env.ua.ie)?true:false;
return this._addListener(q,this._getType(n),l,p,o,m)
},addFocusListener:function(l,m,o,n){return this.on(l,j,m,o,n)
},removeFocusListener:function(l,m){return this.removeListener(l,j,m)
},addBlurListener:function(l,m,o,n){return this.on(l,f,m,o,n)
},removeBlurListener:function(l,m){return this.removeListener(l,f,m)
},removeListener:function(v,w,o){var u,q,l;
w=this._getType(w);
if(typeof v=="string"){v=this.getEl(v)
}else{if(this._isValidCollection(v)){var n=true;
for(u=v.length-1;
u>-1;
u--){n=(this.removeListener(v[u],w,o)&&n)
}return n
}}if(!o||!o.call){return this.purgeElement(v,false,w)
}if("unload"==w){for(u=e.length-1;
u>-1;
u--){l=e[u];
if(l&&l[0]==v&&l[1]==w&&l[2]==o){e.splice(u,1);
return true
}}return false
}var t=null;
var r=arguments[3];
if("undefined"===typeof r){r=this._getCacheIndex(g,v,w,o)
}if(r>=0){t=g[r]
}if(!v||!t){return false
}var m=t[this.CAPTURE]===true?true:false;
try{this._simpleRemove(v,w,t[this.WFN],m)
}catch(p){this.lastError=p;
return false
}delete g[r][this.WFN];
delete g[r][this.FN];
g.splice(r,1);
return true
},getTarget:function(n,l){var m=n.target||n.srcElement;
return this.resolveTextNode(m)
},resolveTextNode:function(l){try{if(l&&3==l.nodeType){return l.parentNode
}}catch(m){}return l
},getPageX:function(l){var m=l.pageX;
if(!m&&0!==m){m=l.clientX||0;
if(this.isIE){m+=this._getScrollLeft()
}}return m
},getPageY:function(m){var l=m.pageY;
if(!l&&0!==l){l=m.clientY||0;
if(this.isIE){l+=this._getScrollTop()
}}return l
},getXY:function(l){return[this.getPageX(l),this.getPageY(l)]
},getRelatedTarget:function(l){var m=l.relatedTarget;
if(!m){if(l.type=="mouseout"){m=l.toElement
}else{if(l.type=="mouseover"){m=l.fromElement
}}}return this.resolveTextNode(m)
},getTime:function(n){if(!n.time){var l=new Date().getTime();
try{n.time=l
}catch(m){this.lastError=m;
return l
}}return n.time
},stopEvent:function(l){this.stopPropagation(l);
this.preventDefault(l)
},stopPropagation:function(l){if(l.stopPropagation){l.stopPropagation()
}else{l.cancelBubble=true
}},preventDefault:function(l){if(l.preventDefault){l.preventDefault()
}else{l.returnValue=false
}},getEvent:function(o,m){var l=o||window.event;
if(!l){var n=this.getEvent.caller;
while(n){l=n.arguments[0];
if(l&&Event==l.constructor){break
}n=n.caller
}}return l
},getCharCode:function(l){var m=l.keyCode||l.charCode||0;
if(YAHOO.env.ua.webkit&&(m in b)){m=b[m]
}return m
},_getCacheIndex:function(r,o,n,p){for(var q=0,l=r.length;
q<l;
q=q+1){var m=r[q];
if(m&&m[this.FN]==p&&m[this.EL]==o&&m[this.TYPE]==n){return q
}}return -1
},generateId:function(m){var l=m.id;
if(!l){l="yuievtautoid-"+c;
++c;
m.id=l
}return l
},_isValidCollection:function(l){try{return(l&&typeof l!=="string"&&l.length&&!l.tagName&&!l.alert&&typeof l[0]!=="undefined")
}catch(m){return false
}},elCache:{},getEl:function(l){return(typeof l==="string")?document.getElementById(l):l
},clearCache:function(){},DOMReadyEvent:new YAHOO.util.CustomEvent("DOMReady",YAHOO,0,0,1),_load:function(l){if(!h){h=true;
var m=YAHOO.util.Event;
m._ready();
m._tryPreloadAttach()
}},_ready:function(l){var m=YAHOO.util.Event;
if(!m.DOMReady){m.DOMReady=true;
m.DOMReadyEvent.fire();
m._simpleRemove(document,"DOMContentLoaded",m._ready)
}},_tryPreloadAttach:function(){if(k.length===0){d=0;
if(this._interval){this._interval.cancel();
this._interval=null
}return
}if(this.locked){return
}if(this.isIE){if(!this.DOMReady){this.startInterval();
return
}}this.locked=true;
var o=!h;
if(!o){o=(d>0&&k.length>0)
}var p=[];
var n=function(v,u){var w=v;
if(u.overrideContext){if(u.overrideContext===true){w=u.obj
}else{w=u.overrideContext
}}u.fn.call(w,u.obj)
};
var l,m,q,r,t=[];
for(l=0,m=k.length;
l<m;
l=l+1){q=k[l];
if(q){r=this.getEl(q.id);
if(r){if(q.checkReady){if(h||r.nextSibling||!o){t.push(q);
k[l]=null
}}else{n(r,q);
k[l]=null
}}else{p.push(q)
}}}for(l=0,m=t.length;
l<m;
l=l+1){q=t[l];
n(this.getEl(q.id),q)
}d--;
if(o){for(l=k.length-1;
l>-1;
l--){q=k[l];
if(!q||!q.id){k.splice(l,1)
}}this.startInterval()
}else{if(this._interval){this._interval.cancel();
this._interval=null
}}this.locked=false
},purgeElement:function(q,p,n){var t=(YAHOO.lang.isString(q))?this.getEl(q):q;
var o=this.getListeners(t,n),r,m;
if(o){for(r=o.length-1;
r>-1;
r--){var l=o[r];
this.removeListener(t,l.type,l.fn)
}}if(p&&t&&t.childNodes){for(r=0,m=t.childNodes.length;
r<m;
++r){this.purgeElement(t.childNodes[r],p,n)
}}},getListeners:function(t,v){var p=[],u;
if(!v){u=[g,e]
}else{if(v==="unload"){u=[e]
}else{v=this._getType(v);
u=[g]
}}var n=(YAHOO.lang.isString(t))?this.getEl(t):t;
for(var q=0;
q<u.length;
q=q+1){var l=u[q];
if(l){for(var o=0,m=l.length;
o<m;
++o){var r=l[o];
if(r&&r[this.EL]===n&&(!v||v===r[this.TYPE])){p.push({type:r[this.TYPE],fn:r[this.FN],obj:r[this.OBJ],adjust:r[this.OVERRIDE],scope:r[this.ADJ_SCOPE],index:o})
}}}}return(p.length)?p:null
},_unload:function(m){var t=YAHOO.util.Event,p,q,r,n,o,l=e.slice(),u;
for(p=0,n=e.length;
p<n;
++p){r=l[p];
if(r){u=window;
if(r[t.ADJ_SCOPE]){if(r[t.ADJ_SCOPE]===true){u=r[t.UNLOAD_OBJ]
}else{u=r[t.ADJ_SCOPE]
}}r[t.FN].call(u,t.getEvent(m,r[t.EL]),r[t.UNLOAD_OBJ]);
l[p]=null
}}r=null;
u=null;
e=null;
if(g){for(q=g.length-1;
q>-1;
q--){r=g[q];
if(r){t.removeListener(r[t.EL],r[t.TYPE],r[t.FN],q)
}}r=null
}t._simpleRemove(window,"unload",t._unload)
},_getScrollLeft:function(){return this._getScroll()[1]
},_getScrollTop:function(){return this._getScroll()[0]
},_getScroll:function(){var m=document.documentElement,l=document.body;
if(m&&(m.scrollTop||m.scrollLeft)){return[m.scrollTop,m.scrollLeft]
}else{if(l){return[l.scrollTop,l.scrollLeft]
}else{return[0,0]
}}},regCE:function(){},_simpleAdd:function(){if(window.addEventListener){return function(o,n,l,m){o.addEventListener(n,l,(m))
}
}else{if(window.attachEvent){return function(o,n,l,m){o.attachEvent("on"+n,l)
}
}else{return function(){}
}}}(),_simpleRemove:function(){if(window.removeEventListener){return function(o,n,l,m){o.removeEventListener(n,l,(m))
}
}else{if(window.detachEvent){return function(l,n,m){l.detachEvent("on"+n,m)
}
}else{return function(){}
}}}()}
}();
(function(){var a=YAHOO.util.Event;
a.on=a.addListener;
a.onFocus=a.addFocusListener;
a.onBlur=a.addBlurListener;
if(a.isIE){if(self!==self.top){document.onreadystatechange=function(){if(document.readyState=="complete"){document.onreadystatechange=null;
a._ready()
}}
}else{YAHOO.util.Event.onDOMReady(YAHOO.util.Event._tryPreloadAttach,YAHOO.util.Event,true);
var b=document.createElement("p");
a._dri=setInterval(function(){try{b.doScroll("left");
clearInterval(a._dri);
a._dri=null;
a._ready();
b=null
}catch(c){}},a.POLL_INTERVAL)
}}else{if(a.webkit&&a.webkit<525){a._dri=setInterval(function(){var c=document.readyState;
if("loaded"==c||"complete"==c){clearInterval(a._dri);
a._dri=null;
a._ready()
}},a.POLL_INTERVAL)
}else{a._simpleAdd(document,"DOMContentLoaded",a._ready)
}}a._simpleAdd(window,"load",a._load);
a._simpleAdd(window,"unload",a._unload);
a._tryPreloadAttach()
})()
}YAHOO.util.EventProvider=function(){};
YAHOO.util.EventProvider.prototype={__yui_events:null,__yui_subscribers:null,subscribe:function(a,e,b,c){this.__yui_events=this.__yui_events||{};
var d=this.__yui_events[a];
if(d){d.subscribe(e,b,c)
}else{this.__yui_subscribers=this.__yui_subscribers||{};
var f=this.__yui_subscribers;
if(!f[a]){f[a]=[]
}f[a].push({fn:e,obj:b,overrideContext:c})
}},unsubscribe:function(f,d,b){this.__yui_events=this.__yui_events||{};
var a=this.__yui_events;
if(f){var c=a[f];
if(c){return c.unsubscribe(d,b)
}}else{var g=true;
for(var e in a){if(YAHOO.lang.hasOwnProperty(a,e)){g=g&&a[e].unsubscribe(d,b)
}}return g
}return false
},unsubscribeAll:function(a){return this.unsubscribe(a)
},createEvent:function(g,b){this.__yui_events=this.__yui_events||{};
var d=b||{},e=this.__yui_events,c;
if(e[g]){}else{c=new YAHOO.util.CustomEvent(g,d.scope||this,d.silent,YAHOO.util.CustomEvent.FLAT,d.fireOnce);
e[g]=c;
if(d.onSubscribeCallback){c.subscribeEvent.subscribe(d.onSubscribeCallback)
}this.__yui_subscribers=this.__yui_subscribers||{};
var a=this.__yui_subscribers[g];
if(a){for(var f=0;
f<a.length;
++f){c.subscribe(a[f].fn,a[f].obj,a[f].overrideContext)
}}}return e[g]
},fireEvent:function(d){this.__yui_events=this.__yui_events||{};
var b=this.__yui_events[d];
if(!b){return null
}var a=[];
for(var c=1;
c<arguments.length;
++c){a.push(arguments[c])
}return b.fire.apply(b,a)
},hasEvent:function(a){if(this.__yui_events){if(this.__yui_events[a]){return true
}}return false
}};
(function(){var a=YAHOO.util.Event,b=YAHOO.lang;
YAHOO.util.KeyListener=function(j,d,h,g){if(!j){}else{if(!d){}else{if(!h){}}}if(!g){g=YAHOO.util.KeyListener.KEYDOWN
}var f=new YAHOO.util.CustomEvent("keyPressed");
this.enabledEvent=new YAHOO.util.CustomEvent("enabled");
this.disabledEvent=new YAHOO.util.CustomEvent("disabled");
if(b.isString(j)){j=document.getElementById(j)
}if(b.isFunction(h)){f.subscribe(h)
}else{f.subscribe(h.fn,h.scope,h.correctScope)
}function e(n,o){if(!d.shift){d.shift=false
}if(!d.alt){d.alt=false
}if(!d.ctrl){d.ctrl=false
}if(n.shiftKey==d.shift&&n.altKey==d.alt&&n.ctrlKey==d.ctrl){var m,p=d.keys,k;
if(YAHOO.lang.isArray(p)){for(var l=0;
l<p.length;
l++){m=p[l];
k=a.getCharCode(n);
if(m==k){f.fire(k,n);
break
}}}else{k=a.getCharCode(n);
if(p==k){f.fire(k,n)
}}}}this.enable=function(){if(!this.enabled){a.on(j,g,e);
this.enabledEvent.fire(d)
}this.enabled=true
};
this.disable=function(){if(this.enabled){a.removeListener(j,g,e);
this.disabledEvent.fire(d)
}this.enabled=false
};
this.toString=function(){return"KeyListener ["+d.keys+"] "+j.tagName+(j.id?"["+j.id+"]":"")
}
};
var c=YAHOO.util.KeyListener;
c.KEYDOWN="keydown";
c.KEYUP="keyup";
c.KEY={ALT:18,BACK_SPACE:8,CAPS_LOCK:20,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,META:224,NUM_LOCK:144,PAGE_DOWN:34,PAGE_UP:33,PAUSE:19,PRINTSCREEN:44,RIGHT:39,SCROLL_LOCK:145,SHIFT:16,SPACE:32,TAB:9,UP:38}
})();
YAHOO.register("event",YAHOO.util.Event,{version:"2.8.0r4",build:"2449"});
YAHOO.util.Connect={_msxml_progid:["Microsoft.XMLHTTP","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP"],_http_headers:{},_has_http_headers:false,_use_default_post_header:true,_default_post_header:"application/x-www-form-urlencoded; charset=UTF-8",_default_form_header:"application/x-www-form-urlencoded",_use_default_xhr_header:true,_default_xhr_header:"XMLHttpRequest",_has_default_headers:true,_default_headers:{},_poll:{},_timeOut:{},_polling_interval:50,_transaction_id:0,startEvent:new YAHOO.util.CustomEvent("start"),completeEvent:new YAHOO.util.CustomEvent("complete"),successEvent:new YAHOO.util.CustomEvent("success"),failureEvent:new YAHOO.util.CustomEvent("failure"),abortEvent:new YAHOO.util.CustomEvent("abort"),_customEvents:{onStart:["startEvent","start"],onComplete:["completeEvent","complete"],onSuccess:["successEvent","success"],onFailure:["failureEvent","failure"],onUpload:["uploadEvent","upload"],onAbort:["abortEvent","abort"]},setProgId:function(a){this._msxml_progid.unshift(a)
},setDefaultPostHeader:function(a){if(typeof a=="string"){this._default_post_header=a
}else{if(typeof a=="boolean"){this._use_default_post_header=a
}}},setDefaultXhrHeader:function(a){if(typeof a=="string"){this._default_xhr_header=a
}else{this._use_default_xhr_header=a
}},setPollingInterval:function(a){if(typeof a=="number"&&isFinite(a)){this._polling_interval=a
}},createXhrObject:function(b){var d,a,f;
try{a=new XMLHttpRequest();
d={conn:a,tId:b,xhr:true}
}catch(e){for(f=0;
f<this._msxml_progid.length;
++f){try{a=new ActiveXObject(this._msxml_progid[f]);
d={conn:a,tId:b,xhr:true};
break
}catch(c){}}}finally{return d
}},getConnectionObject:function(a){var c,b=this._transaction_id;
try{if(!a){c=this.createXhrObject(b)
}else{c={tId:b};
if(a==="xdr"){c.conn=this._transport;
c.xdr=true
}else{if(a==="upload"){c.upload=true
}}}if(c){this._transaction_id++
}}catch(d){}return c
},asyncRequest:function(b,e,c,a){var d,f,g=(c&&c.argument)?c.argument:null;
if(this._isFileUpload){f="upload"
}else{if(c.xdr){f="xdr"
}}d=this.getConnectionObject(f);
if(!d){return null
}else{if(c&&c.customevents){this.initCustomEvents(d,c)
}if(this._isFormSubmit){if(this._isFileUpload){this.uploadFile(d,c,e,a);
return d
}if(b.toUpperCase()=="GET"){if(this._sFormData.length!==0){e+=((e.indexOf("?")==-1)?"?":"&")+this._sFormData
}}else{if(b.toUpperCase()=="POST"){a=a?this._sFormData+"&"+a:this._sFormData
}}}if(b.toUpperCase()=="GET"&&(c&&c.cache===false)){e+=((e.indexOf("?")==-1)?"?":"&")+"rnd="+new Date().valueOf().toString()
}if(this._use_default_xhr_header){if(!this._default_headers["X-Requested-With"]){this.initHeader("X-Requested-With",this._default_xhr_header,true)
}}if((b.toUpperCase()==="POST"&&this._use_default_post_header)&&this._isFormSubmit===false){this.initHeader("Content-Type",this._default_post_header)
}if(d.xdr){this.xdr(d,b,e,c,a);
return d
}d.conn.open(b,e,true);
if(this._has_default_headers||this._has_http_headers){this.setHeader(d)
}this.handleReadyState(d,c);
d.conn.send(a||"");
if(this._isFormSubmit===true){this.resetFormState()
}this.startEvent.fire(d,g);
if(d.startEvent){d.startEvent.fire(d,g)
}return d
}},initCustomEvents:function(a,b){var c;
for(c in b.customevents){if(this._customEvents[c][0]){a[this._customEvents[c][0]]=new YAHOO.util.CustomEvent(this._customEvents[c][1],(b.scope)?b.scope:null);
a[this._customEvents[c][0]].subscribe(b.customevents[c])
}}},handleReadyState:function(c,b){var d=this,a=(b&&b.argument)?b.argument:null;
if(b&&b.timeout){this._timeOut[c.tId]=window.setTimeout(function(){d.abort(c,b,true)
},b.timeout)
}this._poll[c.tId]=window.setInterval(function(){if(c.conn&&c.conn.readyState===4){window.clearInterval(d._poll[c.tId]);
delete d._poll[c.tId];
if(b&&b.timeout){window.clearTimeout(d._timeOut[c.tId]);
delete d._timeOut[c.tId]
}d.completeEvent.fire(c,a);
if(c.completeEvent){c.completeEvent.fire(c,a)
}d.handleTransactionResponse(c,b)
}},this._polling_interval)
},handleTransactionResponse:function(c,f,a){var k,d,h=(f&&f.argument)?f.argument:null,b=(c.r&&c.r.statusText==="xdr:success")?true:false,g=(c.r&&c.r.statusText==="xdr:failure")?true:false,e=a;
try{if((c.conn.status!==undefined&&c.conn.status!==0)||b){k=c.conn.status
}else{if(g&&!e){k=0
}else{k=13030
}}}catch(j){k=13030
}if((k>=200&&k<300)||k===1223||b){d=c.xdr?c.r:this.createResponseObject(c,h);
if(f&&f.success){if(!f.scope){f.success(d)
}else{f.success.apply(f.scope,[d])
}}this.successEvent.fire(d);
if(c.successEvent){c.successEvent.fire(d)
}}else{switch(k){case 12002:case 12029:case 12030:case 12031:case 12152:case 13030:d=this.createExceptionObject(c.tId,h,(a?a:false));
if(f&&f.failure){if(!f.scope){f.failure(d)
}else{f.failure.apply(f.scope,[d])
}}break;
default:d=(c.xdr)?c.response:this.createResponseObject(c,h);
if(f&&f.failure){if(!f.scope){f.failure(d)
}else{f.failure.apply(f.scope,[d])
}}}this.failureEvent.fire(d);
if(c.failureEvent){c.failureEvent.fire(d)
}}this.releaseObject(c);
d=null
},createResponseObject:function(d,g){var a={},e={},j,b,h,c;
try{b=d.conn.getAllResponseHeaders();
h=b.split("\n");
for(j=0;
j<h.length;
j++){c=h[j].indexOf(":");
if(c!=-1){e[h[j].substring(0,c)]=YAHOO.lang.trim(h[j].substring(c+2))
}}}catch(f){}a.tId=d.tId;
a.status=(d.conn.status==1223)?204:d.conn.status;
a.statusText=(d.conn.status==1223)?"No Content":d.conn.statusText;
a.getResponseHeader=e;
a.getAllResponseHeaders=b;
a.responseText=d.conn.responseText;
a.responseXML=d.conn.responseXML;
if(g){a.argument=g
}return a
},createExceptionObject:function(b,f,a){var d=0,c="communication failure",g=-1,h="transaction aborted",e={};
e.tId=b;
if(a){e.status=g;
e.statusText=h
}else{e.status=d;
e.statusText=c
}if(f){e.argument=f
}return e
},initHeader:function(a,b,c){var d=(c)?this._default_headers:this._http_headers;
d[a]=b;
if(c){this._has_default_headers=true
}else{this._has_http_headers=true
}},setHeader:function(a){var b;
if(this._has_default_headers){for(b in this._default_headers){if(YAHOO.lang.hasOwnProperty(this._default_headers,b)){a.conn.setRequestHeader(b,this._default_headers[b])
}}}if(this._has_http_headers){for(b in this._http_headers){if(YAHOO.lang.hasOwnProperty(this._http_headers,b)){a.conn.setRequestHeader(b,this._http_headers[b])
}}this._http_headers={};
this._has_http_headers=false
}},resetDefaultHeaders:function(){this._default_headers={};
this._has_default_headers=false
},abort:function(d,b,a){var e,g=(b&&b.argument)?b.argument:null;
d=d||{};
if(d.conn){if(d.xhr){if(this.isCallInProgress(d)){d.conn.abort();
window.clearInterval(this._poll[d.tId]);
delete this._poll[d.tId];
if(a){window.clearTimeout(this._timeOut[d.tId]);
delete this._timeOut[d.tId]
}e=true
}}else{if(d.xdr){d.conn.abort(d.tId);
e=true
}}}else{if(d.upload){var f="yuiIO"+d.tId;
var c=document.getElementById(f);
if(c){YAHOO.util.Event.removeListener(c,"load");
document.body.removeChild(c);
if(a){window.clearTimeout(this._timeOut[d.tId]);
delete this._timeOut[d.tId]
}e=true
}}else{e=false
}}if(e===true){this.abortEvent.fire(d,g);
if(d.abortEvent){d.abortEvent.fire(d,g)
}this.handleTransactionResponse(d,b,true)
}return e
},isCallInProgress:function(a){a=a||{};
if(a.xhr&&a.conn){return a.conn.readyState!==4&&a.conn.readyState!==0
}else{if(a.xdr&&a.conn){return a.conn.isCallInProgress(a.tId)
}else{if(a.upload===true){return document.getElementById("yuiIO"+a.tId)?true:false
}else{return false
}}}},releaseObject:function(a){if(a&&a.conn){a.conn=null;
a=null
}}};
(function(){var c=YAHOO.util.Connect,b={};
function f(l){var k='<object id="YUIConnectionSwf" type="application/x-shockwave-flash" data="'+l+'" width="0" height="0"><param name="movie" value="'+l+'"><param name="allowScriptAccess" value="always"></object>',j=document.createElement("div");
document.body.appendChild(j);
j.innerHTML=k
}function h(j,m,l,n,k){b[parseInt(j.tId)]={o:j,c:n};
if(k){n.method=m;
n.data=k
}j.conn.send(l,n,j.tId)
}function e(j){f(j);
c._transport=document.getElementById("YUIConnectionSwf")
}function g(){c.xdrReadyEvent.fire()
}function a(j,k){if(j){c.startEvent.fire(j,k.argument);
if(j.startEvent){j.startEvent.fire(j,k.argument)
}}}function d(k){var j=b[k.tId].o,l=b[k.tId].c;
if(k.statusText==="xdr:start"){a(j,l);
return
}k.responseText=decodeURI(k.responseText);
j.r=k;
if(l.argument){j.r.argument=l.argument
}this.handleTransactionResponse(j,l,k.statusText==="xdr:abort"?true:false);
delete b[k.tId]
}c.xdr=h;
c.swf=f;
c.transport=e;
c.xdrReadyEvent=new YAHOO.util.CustomEvent("xdrReady");
c.xdrReady=g;
c.handleXdrResponse=d
})();
(function(){var e=YAHOO.util.Connect,c=YAHOO.util.Event;
e._isFormSubmit=false;
e._isFileUpload=false;
e._formNode=null;
e._sFormData=null;
e._submitElementValue=null;
e.uploadEvent=new YAHOO.util.CustomEvent("upload"),e._hasSubmitListener=function(){if(c){c.addListener(document,"click",function(h){var j=c.getTarget(h),k=j.nodeName.toLowerCase();
if((k==="input"||k==="button")&&(j.type&&j.type.toLowerCase()=="submit")){e._submitElementValue=encodeURIComponent(j.name)+"="+encodeURIComponent(j.value)
}});
return true
}return false
}();
function b(l,q,w){var m,x,n,p,h,o=false,t=[],j=0,u,r,v,k,y;
this.resetFormState();
if(typeof l=="string"){m=(document.getElementById(l)||document.forms[l])
}else{if(typeof l=="object"){m=l
}else{return
}}if(q){this.createFrame(w?w:null);
this._isFormSubmit=true;
this._isFileUpload=true;
this._formNode=m;
return
}for(u=0,r=m.elements.length;
u<r;
++u){x=m.elements[u];
h=x.disabled;
n=x.name;
if(!h&&n){n=encodeURIComponent(n)+"=";
p=encodeURIComponent(x.value);
switch(x.type){case"select-one":if(x.selectedIndex>-1){y=x.options[x.selectedIndex];
t[j++]=n+encodeURIComponent((y.attributes.value&&y.attributes.value.specified)?y.value:y.text)
}break;
case"select-multiple":if(x.selectedIndex>-1){for(v=x.selectedIndex,k=x.options.length;
v<k;
++v){y=x.options[v];
if(y.selected){t[j++]=n+encodeURIComponent((y.attributes.value&&y.attributes.value.specified)?y.value:y.text)
}}}break;
case"radio":case"checkbox":if(x.checked){t[j++]=n+p
}break;
case"file":case undefined:case"reset":case"button":break;
case"submit":if(o===false){if(this._hasSubmitListener&&this._submitElementValue){t[j++]=this._submitElementValue
}o=true
}break;
default:t[j++]=n+p
}}}this._isFormSubmit=true;
this._sFormData=t.join("&");
this.initHeader("Content-Type",this._default_form_header);
return this._sFormData
}function f(){this._isFormSubmit=false;
this._isFileUpload=false;
this._formNode=null;
this._sFormData=""
}function g(k){var j="yuiIO"+this._transaction_id,h;
if(YAHOO.env.ua.ie){h=document.createElement('<iframe id="'+j+'" name="'+j+'" />');
if(typeof k=="boolean"){h.src="javascript:false"
}}else{h=document.createElement("iframe");
h.id=j;
h.name=j
}h.style.position="absolute";
h.style.top="-1000px";
h.style.left="-1000px";
document.body.appendChild(h)
}function d(m){var j=[],l=m.split("&"),k,h;
for(k=0;
k<l.length;
k++){h=l[k].indexOf("=");
if(h!=-1){j[k]=document.createElement("input");
j[k].type="hidden";
j[k].name=decodeURIComponent(l[k].substring(0,h));
j[k].value=decodeURIComponent(l[k].substring(h+1));
this._formNode.appendChild(j[k])
}}return j
}function a(v,j,u,w){var o="yuiIO"+v.tId,n="multipart/form-data",l=document.getElementById(o),t=(document.documentMode&&document.documentMode===8)?true:false,h=this,m=(j&&j.argument)?j.argument:null,k,p,x,q,y,r;
y={action:this._formNode.getAttribute("action"),method:this._formNode.getAttribute("method"),target:this._formNode.getAttribute("target")};
this._formNode.setAttribute("action",u);
this._formNode.setAttribute("method","POST");
this._formNode.setAttribute("target",o);
if(YAHOO.env.ua.ie&&!t){this._formNode.setAttribute("encoding",n)
}else{this._formNode.setAttribute("enctype",n)
}if(w){k=this.appendPostData(w)
}this._formNode.submit();
this.startEvent.fire(v,m);
if(v.startEvent){v.startEvent.fire(v,m)
}if(j&&j.timeout){this._timeOut[v.tId]=window.setTimeout(function(){h.abort(v,j,true)
},j.timeout)
}if(k&&k.length>0){for(p=0;
p<k.length;
p++){this._formNode.removeChild(k[p])
}}for(x in y){if(YAHOO.lang.hasOwnProperty(y,x)){if(y[x]){this._formNode.setAttribute(x,y[x])
}else{this._formNode.removeAttribute(x)
}}}this.resetFormState();
r=function(){if(j&&j.timeout){window.clearTimeout(h._timeOut[v.tId]);
delete h._timeOut[v.tId]
}h.completeEvent.fire(v,m);
if(v.completeEvent){v.completeEvent.fire(v,m)
}q={tId:v.tId,argument:j.argument};
try{q.responseText=l.contentWindow.document.body?l.contentWindow.document.body.innerHTML:l.contentWindow.document.documentElement.textContent;
q.responseXML=l.contentWindow.document.XMLDocument?l.contentWindow.document.XMLDocument:l.contentWindow.document
}catch(z){}if(j&&j.upload){if(!j.scope){j.upload(q)
}else{j.upload.apply(j.scope,[q])
}}h.uploadEvent.fire(q);
if(v.uploadEvent){v.uploadEvent.fire(q)
}c.removeListener(l,"load",r);
setTimeout(function(){document.body.removeChild(l);
h.releaseObject(v)
},100)
};
c.addListener(l,"load",r)
}e.setForm=b;
e.resetFormState=f;
e.createFrame=g;
e.appendPostData=d;
e.uploadFile=a
})();
YAHOO.register("connection",YAHOO.util.Connect,{version:"2.8.0r4",build:"2449"});
(function(){var b=YAHOO.util;
var a=function(e,f,d,c){if(!e){}this.init(e,f,d,c)
};
a.NAME="Anim";
a.prototype={toString:function(){var d=this.getEl()||{};
var c=d.id||d.tagName;
return(this.constructor.NAME+": "+c)
},patterns:{noNegatives:/width|height|opacity|padding/i,offsetAttribute:/^((width|height)|(top|left))$/,defaultUnit:/width|height|top$|bottom$|left$|right$/i,offsetUnit:/\d+(em|%|en|ex|pt|in|cm|mm|pc)$/i},doMethod:function(e,c,d){return this.method(this.currentFrame,c,d-c,this.totalFrames)
},setAttribute:function(f,c,d){var e=this.getEl();
if(this.patterns.noNegatives.test(f)){c=(c>0)?c:0
}if(f in e&&!("style" in e&&f in e.style)){e[f]=c
}else{b.Dom.setStyle(e,f,c+d)
}},getAttribute:function(h){var f=this.getEl();
var d=b.Dom.getStyle(f,h);
if(d!=="auto"&&!this.patterns.offsetUnit.test(d)){return parseFloat(d)
}var g=this.patterns.offsetAttribute.exec(h)||[];
var c=!!(g[3]);
var e=!!(g[2]);
if("style" in f){if(e||(b.Dom.getStyle(f,"position")=="absolute"&&c)){d=f["offset"+g[0].charAt(0).toUpperCase()+g[0].substr(1)]
}else{d=0
}}else{if(h in f){d=f[h]
}}return d
},getDefaultUnit:function(c){if(this.patterns.defaultUnit.test(c)){return"px"
}return""
},setRuntimeAttribute:function(h){var c;
var g;
var f=this.attributes;
this.runtimeAttributes[h]={};
var d=function(k){return(typeof k!=="undefined")
};
if(!d(f[h]["to"])&&!d(f[h]["by"])){return false
}c=(d(f[h]["from"]))?f[h]["from"]:this.getAttribute(h);
if(d(f[h]["to"])){g=f[h]["to"]
}else{if(d(f[h]["by"])){if(c.constructor==Array){g=[];
for(var e=0,j=c.length;
e<j;
++e){g[e]=c[e]+f[h]["by"][e]*1
}}else{g=c+f[h]["by"]*1
}}}this.runtimeAttributes[h].start=c;
this.runtimeAttributes[h].end=g;
this.runtimeAttributes[h].unit=(d(f[h].unit))?f[h]["unit"]:this.getDefaultUnit(h);
return true
},init:function(m,g,h,d){var c=false;
var l=null;
var j=0;
m=b.Dom.get(m);
this.attributes=g||{};
this.duration=!YAHOO.lang.isUndefined(h)?h:1;
this.method=d||b.Easing.easeNone;
this.useSeconds=true;
this.currentFrame=0;
this.totalFrames=b.AnimMgr.fps;
this.setEl=function(n){m=b.Dom.get(n)
};
this.getEl=function(){return m
};
this.isAnimated=function(){return c
};
this.getStartTime=function(){return l
};
this.runtimeAttributes={};
this.animate=function(){if(this.isAnimated()){return false
}this.currentFrame=0;
this.totalFrames=(this.useSeconds)?Math.ceil(b.AnimMgr.fps*this.duration):this.duration;
if(this.duration===0&&this.useSeconds){this.totalFrames=1
}b.AnimMgr.registerElement(this);
return true
};
this.stop=function(n){if(!this.isAnimated()){return false
}if(n){this.currentFrame=this.totalFrames;
this._onTween.fire()
}b.AnimMgr.stop(this)
};
var e=function(){this.onStart.fire();
this.runtimeAttributes={};
for(var n in this.attributes){this.setRuntimeAttribute(n)
}c=true;
j=0;
l=new Date()
};
var f=function(){var n={duration:new Date()-this.getStartTime(),currentFrame:this.currentFrame};
n.toString=function(){return("duration: "+n.duration+", currentFrame: "+n.currentFrame)
};
this.onTween.fire(n);
var o=this.runtimeAttributes;
for(var p in o){this.setAttribute(p,this.doMethod(p,o[p].start,o[p].end),o[p].unit)
}j+=1
};
var k=function(){var o=(new Date()-l)/1000;
var n={duration:o,frames:j,fps:j/o};
n.toString=function(){return("duration: "+n.duration+", frames: "+n.frames+", fps: "+n.fps)
};
c=false;
j=0;
this.onComplete.fire(n)
};
this._onStart=new b.CustomEvent("_start",this,true);
this.onStart=new b.CustomEvent("start",this);
this.onTween=new b.CustomEvent("tween",this);
this._onTween=new b.CustomEvent("_tween",this,true);
this.onComplete=new b.CustomEvent("complete",this);
this._onComplete=new b.CustomEvent("_complete",this,true);
this._onStart.subscribe(e);
this._onTween.subscribe(f);
this._onComplete.subscribe(k)
}};
b.Anim=a
})();
YAHOO.util.AnimMgr=new function(){var d=null;
var e=[];
var a=0;
this.fps=1000;
this.delay=1;
this.registerElement=function(f){e[e.length]=f;
a+=1;
f._onStart.fire();
this.start()
};
this.unRegister=function(f,g){g=g||b(f);
if(!f.isAnimated()||g===-1){return false
}f._onComplete.fire();
e.splice(g,1);
a-=1;
if(a<=0){this.stop()
}return true
};
this.start=function(){if(d===null){d=setInterval(this.run,this.delay)
}};
this.stop=function(f){if(!f){clearInterval(d);
for(var g=0,h=e.length;
g<h;
++g){this.unRegister(e[0],0)
}e=[];
d=null;
a=0
}else{this.unRegister(f)
}};
this.run=function(){for(var f=0,h=e.length;
f<h;
++f){var g=e[f];
if(!g||!g.isAnimated()){continue
}if(g.currentFrame<g.totalFrames||g.totalFrames===null){g.currentFrame+=1;
if(g.useSeconds){c(g)
}g._onTween.fire()
}else{YAHOO.util.AnimMgr.stop(g,f)
}}};
var b=function(f){for(var g=0,h=e.length;
g<h;
++g){if(e[g]===f){return g
}}return -1
};
var c=function(k){var g=k.totalFrames;
var h=k.currentFrame;
var j=(k.currentFrame*k.duration*1000/k.totalFrames);
var l=(new Date()-k.getStartTime());
var f=0;
if(l<k.duration*1000){f=Math.round((l/j-1)*k.currentFrame)
}else{f=g-(h+1)
}if(f>0&&isFinite(f)){if(k.currentFrame+f>=g){f=g-(h+1)
}k.currentFrame+=f
}};
this._queue=e;
this._getIndex=b
};
YAHOO.util.Bezier=new function(){this.getPosition=function(c,d){var b=c.length;
var e=[];
for(var f=0;
f<b;
++f){e[f]=[c[f][0],c[f][1]]
}for(var a=1;
a<b;
++a){for(f=0;
f<b-a;
++f){e[f][0]=(1-d)*e[f][0]+d*e[parseInt(f+1,10)][0];
e[f][1]=(1-d)*e[f][1]+d*e[parseInt(f+1,10)][1]
}}return[e[0][0],e[0][1]]
}
};
(function(){var a=function(g,h,f,e){a.superclass.constructor.call(this,g,h,f,e)
};
a.NAME="ColorAnim";
a.DEFAULT_BGCOLOR="#fff";
var c=YAHOO.util;
YAHOO.extend(a,c.Anim);
var b=a.superclass;
var d=a.prototype;
d.patterns.color=/color$/i;
d.patterns.rgb=/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i;
d.patterns.hex=/^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i;
d.patterns.hex3=/^#?([0-9A-F]{1})([0-9A-F]{1})([0-9A-F]{1})$/i;
d.patterns.transparent=/^transparent|rgba\(0, 0, 0, 0\)$/;
d.parseColor=function(f){if(f.length==3){return f
}var e=this.patterns.hex.exec(f);
if(e&&e.length==4){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]
}e=this.patterns.rgb.exec(f);
if(e&&e.length==4){return[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10)]
}e=this.patterns.hex3.exec(f);
if(e&&e.length==4){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]
}return null
};
d.getAttribute=function(j){var g=this.getEl();
if(this.patterns.color.test(j)){var e=YAHOO.util.Dom.getStyle(g,j);
var f=this;
if(this.patterns.transparent.test(e)){var h=YAHOO.util.Dom.getAncestorBy(g,function(k){return !f.patterns.transparent.test(e)
});
if(h){e=c.Dom.getStyle(h,j)
}else{e=a.DEFAULT_BGCOLOR
}}}else{e=b.getAttribute.call(this,j)
}return e
};
d.doMethod=function(j,e,h){var f;
if(this.patterns.color.test(j)){f=[];
for(var g=0,k=e.length;
g<k;
++g){f[g]=b.doMethod.call(this,j,e[g],h[g])
}f="rgb("+Math.floor(f[0])+","+Math.floor(f[1])+","+Math.floor(f[2])+")"
}else{f=b.doMethod.call(this,j,e,h)
}return f
};
d.setRuntimeAttribute=function(j){b.setRuntimeAttribute.call(this,j);
if(this.patterns.color.test(j)){var g=this.attributes;
var e=this.parseColor(this.runtimeAttributes[j].start);
var h=this.parseColor(this.runtimeAttributes[j].end);
if(typeof g[j]["to"]==="undefined"&&typeof g[j]["by"]!=="undefined"){h=this.parseColor(g[j].by);
for(var f=0,k=e.length;
f<k;
++f){h[f]=e[f]+h[f]
}}this.runtimeAttributes[j].start=e;
this.runtimeAttributes[j].end=h
}};
c.ColorAnim=a
})();
YAHOO.util.Easing={easeNone:function(d,a,b,c){return b*d/c+a
},easeIn:function(d,a,b,c){return b*(d/=c)*d+a
},easeOut:function(d,a,b,c){return -b*(d/=c)*(d-2)+a
},easeBoth:function(d,a,b,c){if((d/=c/2)<1){return b/2*d*d+a
}return -b/2*((--d)*(d-2)-1)+a
},easeInStrong:function(d,a,b,c){return b*(d/=c)*d*d*d+a
},easeOutStrong:function(d,a,b,c){return -b*((d=d/c-1)*d*d*d-1)+a
},easeBothStrong:function(d,a,b,c){if((d/=c/2)<1){return b/2*d*d*d*d+a
}return -b/2*((d-=2)*d*d*d-2)+a
},elasticIn:function(f,a,b,c,g,d){if(f==0){return a
}if((f/=c)==1){return a+b
}if(!d){d=c*0.3
}if(!g||g<Math.abs(b)){g=b;
var e=d/4
}else{var e=d/(2*Math.PI)*Math.asin(b/g)
}return -(g*Math.pow(2,10*(f-=1))*Math.sin((f*c-e)*(2*Math.PI)/d))+a
},elasticOut:function(f,a,b,c,g,d){if(f==0){return a
}if((f/=c)==1){return a+b
}if(!d){d=c*0.3
}if(!g||g<Math.abs(b)){g=b;
var e=d/4
}else{var e=d/(2*Math.PI)*Math.asin(b/g)
}return g*Math.pow(2,-10*f)*Math.sin((f*c-e)*(2*Math.PI)/d)+b+a
},elasticBoth:function(f,a,b,c,g,d){if(f==0){return a
}if((f/=c/2)==2){return a+b
}if(!d){d=c*(0.3*1.5)
}if(!g||g<Math.abs(b)){g=b;
var e=d/4
}else{var e=d/(2*Math.PI)*Math.asin(b/g)
}if(f<1){return -0.5*(g*Math.pow(2,10*(f-=1))*Math.sin((f*c-e)*(2*Math.PI)/d))+a
}return g*Math.pow(2,-10*(f-=1))*Math.sin((f*c-e)*(2*Math.PI)/d)*0.5+b+a
},backIn:function(e,a,b,c,d){if(typeof d=="undefined"){d=1.70158
}return b*(e/=c)*e*((d+1)*e-d)+a
},backOut:function(e,a,b,c,d){if(typeof d=="undefined"){d=1.70158
}return b*((e=e/c-1)*e*((d+1)*e+d)+1)+a
},backBoth:function(e,a,b,c,d){if(typeof d=="undefined"){d=1.70158
}if((e/=c/2)<1){return b/2*(e*e*(((d*=(1.525))+1)*e-d))+a
}return b/2*((e-=2)*e*(((d*=(1.525))+1)*e+d)+2)+a
},bounceIn:function(d,a,b,c){return b-YAHOO.util.Easing.bounceOut(c-d,0,b,c)+a
},bounceOut:function(d,a,b,c){if((d/=c)<(1/2.75)){return b*(7.5625*d*d)+a
}else{if(d<(2/2.75)){return b*(7.5625*(d-=(1.5/2.75))*d+0.75)+a
}else{if(d<(2.5/2.75)){return b*(7.5625*(d-=(2.25/2.75))*d+0.9375)+a
}}}return b*(7.5625*(d-=(2.625/2.75))*d+0.984375)+a
},bounceBoth:function(d,a,b,c){if(d<c/2){return YAHOO.util.Easing.bounceIn(d*2,0,b,c)*0.5+a
}return YAHOO.util.Easing.bounceOut(d*2-c,0,b,c)*0.5+b*0.5+a
}};
(function(){var a=function(j,k,h,g){if(j){a.superclass.constructor.call(this,j,k,h,g)
}};
a.NAME="Motion";
var c=YAHOO.util;
YAHOO.extend(a,c.ColorAnim);
var b=a.superclass;
var e=a.prototype;
e.patterns.points=/^points$/i;
e.setAttribute=function(j,g,h){if(this.patterns.points.test(j)){h=h||"px";
b.setAttribute.call(this,"left",g[0],h);
b.setAttribute.call(this,"top",g[1],h)
}else{b.setAttribute.call(this,j,g,h)
}};
e.getAttribute=function(h){if(this.patterns.points.test(h)){var g=[b.getAttribute.call(this,"left"),b.getAttribute.call(this,"top")]
}else{g=b.getAttribute.call(this,h)
}return g
};
e.doMethod=function(l,g,k){var h=null;
if(this.patterns.points.test(l)){var j=this.method(this.currentFrame,0,100,this.totalFrames)/100;
h=c.Bezier.getPosition(this.runtimeAttributes[l],j)
}else{h=b.doMethod.call(this,l,g,k)
}return h
};
e.setRuntimeAttribute=function(g){if(this.patterns.points.test(g)){var p=this.getEl();
var n=this.attributes;
var q;
var l=n.points["control"]||[];
var o;
var k,h;
if(l.length>0&&!(l[0] instanceof Array)){l=[l]
}else{var m=[];
for(k=0,h=l.length;
k<h;
++k){m[k]=l[k]
}l=m
}if(c.Dom.getStyle(p,"position")=="static"){c.Dom.setStyle(p,"position","relative")
}if(d(n.points["from"])){c.Dom.setXY(p,n.points["from"])
}else{c.Dom.setXY(p,c.Dom.getXY(p))
}q=this.getAttribute("points");
if(d(n.points["to"])){o=f.call(this,n.points["to"],q);
var j=c.Dom.getXY(this.getEl());
for(k=0,h=l.length;
k<h;
++k){l[k]=f.call(this,l[k],q)
}}else{if(d(n.points["by"])){o=[q[0]+n.points["by"][0],q[1]+n.points["by"][1]];
for(k=0,h=l.length;
k<h;
++k){l[k]=[q[0]+l[k][0],q[1]+l[k][1]]
}}}this.runtimeAttributes[g]=[q];
if(l.length>0){this.runtimeAttributes[g]=this.runtimeAttributes[g].concat(l)
}this.runtimeAttributes[g][this.runtimeAttributes[g].length]=o
}else{b.setRuntimeAttribute.call(this,g)
}};
var f=function(j,g){var h=c.Dom.getXY(this.getEl());
j=[j[0]-h[0]+g[0],j[1]-h[1]+g[1]];
return j
};
var d=function(g){return(typeof g!=="undefined")
};
c.Motion=a
})();
(function(){var b=function(g,h,f,e){if(g){b.superclass.constructor.call(this,g,h,f,e)
}};
b.NAME="Scroll";
var d=YAHOO.util;
YAHOO.extend(b,d.ColorAnim);
var c=b.superclass;
var a=b.prototype;
a.doMethod=function(h,e,g){var f=null;
if(h=="scroll"){f=[this.method(this.currentFrame,e[0],g[0]-e[0],this.totalFrames),this.method(this.currentFrame,e[1],g[1]-e[1],this.totalFrames)]
}else{f=c.doMethod.call(this,h,e,g)
}return f
};
a.getAttribute=function(g){var e=null;
var f=this.getEl();
if(g=="scroll"){e=[f.scrollLeft,f.scrollTop]
}else{e=c.getAttribute.call(this,g)
}return e
};
a.setAttribute=function(h,e,f){var g=this.getEl();
if(h=="scroll"){g.scrollLeft=e[0];
g.scrollTop=e[1]
}else{c.setAttribute.call(this,h,e,f)
}};
d.Scroll=b
})();
YAHOO.register("animation",YAHOO.util.Anim,{version:"2.8.0r4",build:"2449"});
if(!YAHOO.util.DragDropMgr){YAHOO.util.DragDropMgr=function(){var a=YAHOO.util.Event,b=YAHOO.util.Dom;
return{useShim:false,_shimActive:false,_shimState:false,_debugShim:false,_createShim:function(){var c=document.createElement("div");
c.id="yui-ddm-shim";
if(document.body.firstChild){document.body.insertBefore(c,document.body.firstChild)
}else{document.body.appendChild(c)
}c.style.display="none";
c.style.backgroundColor="red";
c.style.position="absolute";
c.style.zIndex="99999";
b.setStyle(c,"opacity","0");
this._shim=c;
a.on(c,"mouseup",this.handleMouseUp,this,true);
a.on(c,"mousemove",this.handleMouseMove,this,true);
a.on(window,"scroll",this._sizeShim,this,true)
},_sizeShim:function(){if(this._shimActive){var c=this._shim;
c.style.height=b.getDocumentHeight()+"px";
c.style.width=b.getDocumentWidth()+"px";
c.style.top="0";
c.style.left="0"
}},_activateShim:function(){if(this.useShim){if(!this._shim){this._createShim()
}this._shimActive=true;
var d=this._shim,c="0";
if(this._debugShim){c=".5"
}b.setStyle(d,"opacity",c);
this._sizeShim();
d.style.display="block"
}},_deactivateShim:function(){this._shim.style.display="none";
this._shimActive=false
},_shim:null,ids:{},handleIds:{},dragCurrent:null,dragOvers:{},deltaX:0,deltaY:0,preventDefault:true,stopPropagation:true,initialized:false,locked:false,interactionInfo:null,init:function(){this.initialized=true
},POINT:0,INTERSECT:1,STRICT_INTERSECT:2,mode:0,_execOnAll:function(e,f){for(var d in this.ids){for(var g in this.ids[d]){var c=this.ids[d][g];
if(!this.isTypeOfDD(c)){continue
}c[e].apply(c,f)
}}},_onLoad:function(){this.init();
a.on(document,"mouseup",this.handleMouseUp,this,true);
a.on(document,"mousemove",this.handleMouseMove,this,true);
a.on(window,"unload",this._onUnload,this,true);
a.on(window,"resize",this._onResize,this,true)
},_onResize:function(c){this._execOnAll("resetConstraints",[])
},lock:function(){this.locked=true
},unlock:function(){this.locked=false
},isLocked:function(){return this.locked
},locationCache:{},useCache:true,clickPixelThresh:3,clickTimeThresh:1000,dragThreshMet:false,clickTimeout:null,startX:0,startY:0,fromTimeout:false,regDragDrop:function(c,d){if(!this.initialized){this.init()
}if(!this.ids[d]){this.ids[d]={}
}this.ids[d][c.id]=c
},removeDDFromGroup:function(c,e){if(!this.ids[e]){this.ids[e]={}
}var d=this.ids[e];
if(d&&d[c.id]){delete d[c.id]
}},_remove:function(c){for(var d in c.groups){if(d){var e=this.ids[d];
if(e&&e[c.id]){delete e[c.id]
}}}delete this.handleIds[c.id]
},regHandle:function(c,d){if(!this.handleIds[c]){this.handleIds[c]={}
}this.handleIds[c][d]=d
},isDragDrop:function(c){return(this.getDDById(c))?true:false
},getRelated:function(c,g){var d=[];
for(var e in c.groups){for(var f in this.ids[e]){var h=this.ids[e][f];
if(!this.isTypeOfDD(h)){continue
}if(!g||h.isTarget){d[d.length]=h
}}}return d
},isLegalTarget:function(c,d){var f=this.getRelated(c,true);
for(var e=0,g=f.length;
e<g;
++e){if(f[e].id==d.id){return true
}}return false
},isTypeOfDD:function(c){return(c&&c.__ygDragDrop)
},isHandle:function(c,d){return(this.handleIds[c]&&this.handleIds[c][d])
},getDDById:function(c){for(var d in this.ids){if(this.ids[d][c]){return this.ids[d][c]
}}return null
},handleMouseDown:function(c,d){this.currentTarget=YAHOO.util.Event.getTarget(c);
this.dragCurrent=d;
var e=d.getEl();
this.startX=YAHOO.util.Event.getPageX(c);
this.startY=YAHOO.util.Event.getPageY(c);
this.deltaX=this.startX-e.offsetLeft;
this.deltaY=this.startY-e.offsetTop;
this.dragThreshMet=false;
this.clickTimeout=setTimeout(function(){var f=YAHOO.util.DDM;
f.startDrag(f.startX,f.startY);
f.fromTimeout=true
},this.clickTimeThresh)
},startDrag:function(e,c){if(this.dragCurrent&&this.dragCurrent.useShim){this._shimState=this.useShim;
this.useShim=true
}this._activateShim();
clearTimeout(this.clickTimeout);
var d=this.dragCurrent;
if(d&&d.events.b4StartDrag){d.b4StartDrag(e,c);
d.fireEvent("b4StartDragEvent",{x:e,y:c})
}if(d&&d.events.startDrag){d.startDrag(e,c);
d.fireEvent("startDragEvent",{x:e,y:c})
}this.dragThreshMet=true
},handleMouseUp:function(c){if(this.dragCurrent){clearTimeout(this.clickTimeout);
if(this.dragThreshMet){if(this.fromTimeout){this.fromTimeout=false;
this.handleMouseMove(c)
}this.fromTimeout=false;
this.fireEvents(c,true)
}else{}this.stopDrag(c);
this.stopEvent(c)
}},stopEvent:function(c){if(this.stopPropagation){YAHOO.util.Event.stopPropagation(c)
}if(this.preventDefault){YAHOO.util.Event.preventDefault(c)
}},stopDrag:function(c,d){var e=this.dragCurrent;
if(e&&!d){if(this.dragThreshMet){if(e.events.b4EndDrag){e.b4EndDrag(c);
e.fireEvent("b4EndDragEvent",{e:c})
}if(e.events.endDrag){e.endDrag(c);
e.fireEvent("endDragEvent",{e:c})
}}if(e.events.mouseUp){e.onMouseUp(c);
e.fireEvent("mouseUpEvent",{e:c})
}}if(this._shimActive){this._deactivateShim();
if(this.dragCurrent&&this.dragCurrent.useShim){this.useShim=this._shimState;
this._shimState=false
}}this.dragCurrent=null;
this.dragOvers={}
},handleMouseMove:function(c){var f=this.dragCurrent;
if(f){if(YAHOO.util.Event.isIE&&!c.button){this.stopEvent(c);
return this.handleMouseUp(c)
}else{if(c.clientX<0||c.clientY<0){}}if(!this.dragThreshMet){var d=Math.abs(this.startX-YAHOO.util.Event.getPageX(c));
var e=Math.abs(this.startY-YAHOO.util.Event.getPageY(c));
if(d>this.clickPixelThresh||e>this.clickPixelThresh){this.startDrag(this.startX,this.startY)
}}if(this.dragThreshMet){if(f&&f.events.b4Drag){f.b4Drag(c);
f.fireEvent("b4DragEvent",{e:c})
}if(f&&f.events.drag){f.onDrag(c);
f.fireEvent("dragEvent",{e:c})
}if(f){this.fireEvents(c,false)
}}this.stopEvent(c)
}},fireEvents:function(j,u){var ae=this.dragCurrent;
if(!ae||ae.isLocked()||ae.dragOnly){return
}var r=YAHOO.util.Event.getPageX(j),t=YAHOO.util.Event.getPageY(j),p=new YAHOO.util.Point(r,t),v=ae.getTargetCoord(p.x,p.y),A=ae.getDragEl(),B=["out","over","drop","enter"],k=new YAHOO.util.Region(v.y,v.x+A.offsetWidth,v.y+A.offsetHeight,v.x),x=[],aa={},o=[],ad={outEvts:[],overEvts:[],dropEvts:[],enterEvts:[]};
for(var m in this.dragOvers){var ac=this.dragOvers[m];
if(!this.isTypeOfDD(ac)){continue
}if(!this.isOverTarget(p,ac,this.mode,k)){ad.outEvts.push(ac)
}x[m]=true;
delete this.dragOvers[m]
}for(var n in ae.groups){if("string"!=typeof n){continue
}for(m in this.ids[n]){var z=this.ids[n][m];
if(!this.isTypeOfDD(z)){continue
}if(z.isTarget&&!z.isLocked()&&z!=ae){if(this.isOverTarget(p,z,this.mode,k)){aa[n]=true;
if(u){ad.dropEvts.push(z)
}else{if(!x[z.id]){ad.enterEvts.push(z)
}else{ad.overEvts.push(z)
}this.dragOvers[z.id]=z
}}}}}this.interactionInfo={out:ad.outEvts,enter:ad.enterEvts,over:ad.overEvts,drop:ad.dropEvts,point:p,draggedRegion:k,sourceRegion:this.locationCache[ae.id],validDrop:u};
for(var ab in aa){o.push(ab)
}if(u&&!ad.dropEvts.length){this.interactionInfo.validDrop=false;
if(ae.events.invalidDrop){ae.onInvalidDrop(j);
ae.fireEvent("invalidDropEvent",{e:j})
}}for(m=0;
m<B.length;
m++){var f=null;
if(ad[B[m]+"Evts"]){f=ad[B[m]+"Evts"]
}if(f&&f.length){var y=B[m].charAt(0).toUpperCase()+B[m].substr(1),g="onDrag"+y,w="b4Drag"+y,q="drag"+y+"Event",h="drag"+y;
if(this.mode){if(ae.events[w]){ae[w](j,f,o);
ae.fireEvent(w+"Event",{event:j,info:f,group:o})
}if(ae.events[h]){ae[g](j,f,o);
ae.fireEvent(q,{event:j,info:f,group:o})
}}else{for(var e=0,l=f.length;
e<l;
++e){if(ae.events[w]){ae[w](j,f[e].id,o[0]);
ae.fireEvent(w+"Event",{event:j,info:f[e].id,group:o[0]})
}if(ae.events[h]){ae[g](j,f[e].id,o[0]);
ae.fireEvent(q,{event:j,info:f[e].id,group:o[0]})
}}}}}},getBestMatch:function(e){var c=null;
var f=e.length;
if(f==1){c=e[0]
}else{for(var d=0;
d<f;
++d){var g=e[d];
if(this.mode==this.INTERSECT&&g.cursorIsOver){c=g;
break
}else{if(!c||!c.overlap||(g.overlap&&c.overlap.getArea()<g.overlap.getArea())){c=g
}}}}return c
},refreshCache:function(g){var e=g||this.ids;
for(var h in e){if("string"!=typeof h){continue
}for(var f in this.ids[h]){var d=this.ids[h][f];
if(this.isTypeOfDD(d)){var c=this.getLocation(d);
if(c){this.locationCache[d.id]=c
}else{delete this.locationCache[d.id]
}}}}},verifyEl:function(d){try{if(d){var e=d.offsetParent;
if(e){return true
}}}catch(c){}return false
},getLocation:function(l){if(!this.isTypeOfDD(l)){return null
}var n=l.getEl(),h,o,c,f,g,e,d,j,m;
try{h=YAHOO.util.Dom.getXY(n)
}catch(k){}if(!h){return null
}o=h[0];
c=o+n.offsetWidth;
f=h[1];
g=f+n.offsetHeight;
e=f-l.padding[0];
d=c+l.padding[1];
j=g+l.padding[2];
m=o-l.padding[3];
return new YAHOO.util.Region(e,d,j,m)
},isOverTarget:function(e,d,l,k){var j=this.locationCache[d.id];
if(!j||!this.useCache){j=this.getLocation(d);
this.locationCache[d.id]=j
}if(!j){return false
}d.cursorIsOver=j.contains(e);
var f=this.dragCurrent;
if(!f||(!l&&!f.constrainX&&!f.constrainY)){return d.cursorIsOver
}d.overlap=null;
if(!k){var h=f.getTargetCoord(e.x,e.y);
var c=f.getDragEl();
k=new YAHOO.util.Region(h.y,h.x+c.offsetWidth,h.y+c.offsetHeight,h.x)
}var g=k.intersect(j);
if(g){d.overlap=g;
return(l)?true:d.cursorIsOver
}else{return false
}},_onUnload:function(c,d){this.unregAll()
},unregAll:function(){if(this.dragCurrent){this.stopDrag();
this.dragCurrent=null
}this._execOnAll("unreg",[]);
this.ids={}
},elementCache:{},getElWrapper:function(c){var d=this.elementCache[c];
if(!d||!d.el){d=this.elementCache[c]=new this.ElementWrapper(YAHOO.util.Dom.get(c))
}return d
},getElement:function(c){return YAHOO.util.Dom.get(c)
},getCss:function(c){var d=YAHOO.util.Dom.get(c);
return(d)?d.style:null
},ElementWrapper:function(c){this.el=c||null;
this.id=this.el&&c.id;
this.css=this.el&&c.style
},getPosX:function(c){return YAHOO.util.Dom.getX(c)
},getPosY:function(c){return YAHOO.util.Dom.getY(c)
},swapNode:function(d,f){if(d.swapNode){d.swapNode(f)
}else{var c=f.parentNode;
var e=f.nextSibling;
if(e==d){c.insertBefore(d,f)
}else{if(f==d.nextSibling){c.insertBefore(f,d)
}else{d.parentNode.replaceChild(f,d);
c.insertBefore(d,e)
}}}},getScroll:function(){var d,f,c=document.documentElement,e=document.body;
if(c&&(c.scrollTop||c.scrollLeft)){d=c.scrollTop;
f=c.scrollLeft
}else{if(e){d=e.scrollTop;
f=e.scrollLeft
}else{}}return{top:d,left:f}
},getStyle:function(c,d){return YAHOO.util.Dom.getStyle(c,d)
},getScrollTop:function(){return this.getScroll().top
},getScrollLeft:function(){return this.getScroll().left
},moveToEl:function(e,c){var d=YAHOO.util.Dom.getXY(c);
YAHOO.util.Dom.setXY(e,d)
},getClientHeight:function(){return YAHOO.util.Dom.getViewportHeight()
},getClientWidth:function(){return YAHOO.util.Dom.getViewportWidth()
},numericSort:function(c,d){return(c-d)
},_timeoutCount:0,_addListeners:function(){var c=YAHOO.util.DDM;
if(YAHOO.util.Event&&document){c._onLoad()
}else{if(c._timeoutCount>2000){}else{setTimeout(c._addListeners,10);
if(document&&document.body){c._timeoutCount+=1
}}}},handleWasClicked:function(e,c){if(this.isHandle(c,e.id)){return true
}else{var d=e.parentNode;
while(d){if(this.isHandle(c,d.id)){return true
}else{d=d.parentNode
}}}return false
}}
}();
YAHOO.util.DDM=YAHOO.util.DragDropMgr;
YAHOO.util.DDM._addListeners()
}(function(){var a=YAHOO.util.Event;
var b=YAHOO.util.Dom;
YAHOO.util.DragDrop=function(c,e,d){if(c){this.init(c,e,d)
}};
YAHOO.util.DragDrop.prototype={events:null,on:function(){this.subscribe.apply(this,arguments)
},id:null,config:null,dragElId:null,handleElId:null,invalidHandleTypes:null,invalidHandleIds:null,invalidHandleClasses:null,startPageX:0,startPageY:0,groups:null,locked:false,lock:function(){this.locked=true
},unlock:function(){this.locked=false
},isTarget:true,padding:null,dragOnly:false,useShim:false,_domRef:null,__ygDragDrop:true,constrainX:false,constrainY:false,minX:0,maxX:0,minY:0,maxY:0,deltaX:0,deltaY:0,maintainOffset:false,xTicks:null,yTicks:null,primaryButtonOnly:true,available:false,hasOuterHandles:false,cursorIsOver:false,overlap:null,b4StartDrag:function(d,c){},startDrag:function(d,c){},b4Drag:function(c){},onDrag:function(c){},onDragEnter:function(d,c){},b4DragOver:function(c){},onDragOver:function(d,c){},b4DragOut:function(c){},onDragOut:function(d,c){},b4DragDrop:function(c){},onDragDrop:function(d,c){},onInvalidDrop:function(c){},b4EndDrag:function(c){},endDrag:function(c){},b4MouseDown:function(c){},onMouseDown:function(c){},onMouseUp:function(c){},onAvailable:function(){},getEl:function(){if(!this._domRef){this._domRef=b.get(this.id)
}return this._domRef
},getDragEl:function(){return b.get(this.dragElId)
},init:function(c,f,e){this.initTarget(c,f,e);
a.on(this._domRef||this.id,"mousedown",this.handleMouseDown,this,true);
for(var d in this.events){this.createEvent(d+"Event")
}},initTarget:function(c,e,d){this.config=d||{};
this.events={};
this.DDM=YAHOO.util.DDM;
this.groups={};
if(typeof c!=="string"){this._domRef=c;
c=b.generateId(c)
}this.id=c;
this.addToGroup((e)?e:"default");
this.handleElId=c;
a.onAvailable(c,this.handleOnAvailable,this,true);
this.setDragElId(c);
this.invalidHandleTypes={A:"A"};
this.invalidHandleIds={};
this.invalidHandleClasses=[];
this.applyConfig()
},applyConfig:function(){this.events={mouseDown:true,b4MouseDown:true,mouseUp:true,b4StartDrag:true,startDrag:true,b4EndDrag:true,endDrag:true,drag:true,b4Drag:true,invalidDrop:true,b4DragOut:true,dragOut:true,dragEnter:true,b4DragOver:true,dragOver:true,b4DragDrop:true,dragDrop:true};
if(this.config.events){for(var c in this.config.events){if(this.config.events[c]===false){this.events[c]=false
}}}this.padding=this.config.padding||[0,0,0,0];
this.isTarget=(this.config.isTarget!==false);
this.maintainOffset=(this.config.maintainOffset);
this.primaryButtonOnly=(this.config.primaryButtonOnly!==false);
this.dragOnly=((this.config.dragOnly===true)?true:false);
this.useShim=((this.config.useShim===true)?true:false)
},handleOnAvailable:function(){this.available=true;
this.resetConstraints();
this.onAvailable()
},setPadding:function(d,f,c,e){if(!f&&0!==f){this.padding=[d,d,d,d]
}else{if(!c&&0!==c){this.padding=[d,f,d,f]
}else{this.padding=[d,f,c,e]
}}},setInitPosition:function(e,f){var d=this.getEl();
if(!this.DDM.verifyEl(d)){if(d&&d.style&&(d.style.display=="none")){}else{}return
}var g=e||0;
var h=f||0;
var c=b.getXY(d);
this.initPageX=c[0]-g;
this.initPageY=c[1]-h;
this.lastPageX=c[0];
this.lastPageY=c[1];
this.setStartPosition(c)
},setStartPosition:function(c){var d=c||b.getXY(this.getEl());
this.deltaSetXY=null;
this.startPageX=d[0];
this.startPageY=d[1]
},addToGroup:function(c){this.groups[c]=true;
this.DDM.regDragDrop(this,c)
},removeFromGroup:function(c){if(this.groups[c]){delete this.groups[c]
}this.DDM.removeDDFromGroup(this,c)
},setDragElId:function(c){this.dragElId=c
},setHandleElId:function(c){if(typeof c!=="string"){c=b.generateId(c)
}this.handleElId=c;
this.DDM.regHandle(this.id,c)
},setOuterHandleElId:function(c){if(typeof c!=="string"){c=b.generateId(c)
}a.on(c,"mousedown",this.handleMouseDown,this,true);
this.setHandleElId(c);
this.hasOuterHandles=true
},unreg:function(){a.removeListener(this.id,"mousedown",this.handleMouseDown);
this._domRef=null;
this.DDM._remove(this)
},isLocked:function(){return(this.DDM.isLocked()||this.locked)
},handleMouseDown:function(c,d){var j=c.which||c.button;
if(this.primaryButtonOnly&&j>1){return
}if(this.isLocked()){return
}var k=this.b4MouseDown(c),g=true;
if(this.events.b4MouseDown){g=this.fireEvent("b4MouseDownEvent",c)
}var h=this.onMouseDown(c),e=true;
if(this.events.mouseDown){e=this.fireEvent("mouseDownEvent",c)
}if((k===false)||(h===false)||(g===false)||(e===false)){return
}this.DDM.refreshCache(this.groups);
var f=new YAHOO.util.Point(a.getPageX(c),a.getPageY(c));
if(!this.hasOuterHandles&&!this.DDM.isOverTarget(f,this)){}else{if(this.clickValidator(c)){this.setStartPosition();
this.DDM.handleMouseDown(c,this);
this.DDM.stopEvent(c)
}else{}}},clickValidator:function(c){var d=YAHOO.util.Event.getTarget(c);
return(this.isValidHandleChild(d)&&(this.id==this.handleElId||this.DDM.handleWasClicked(d,this.id)))
},getTargetCoord:function(d,e){var f=d-this.deltaX;
var c=e-this.deltaY;
if(this.constrainX){if(f<this.minX){f=this.minX
}if(f>this.maxX){f=this.maxX
}}if(this.constrainY){if(c<this.minY){c=this.minY
}if(c>this.maxY){c=this.maxY
}}f=this.getTick(f,this.xTicks);
c=this.getTick(c,this.yTicks);
return{x:f,y:c}
},addInvalidHandleType:function(d){var c=d.toUpperCase();
this.invalidHandleTypes[c]=c
},addInvalidHandleId:function(c){if(typeof c!=="string"){c=b.generateId(c)
}this.invalidHandleIds[c]=c
},addInvalidHandleClass:function(c){this.invalidHandleClasses.push(c)
},removeInvalidHandleType:function(d){var c=d.toUpperCase();
delete this.invalidHandleTypes[c]
},removeInvalidHandleId:function(c){if(typeof c!=="string"){c=b.generateId(c)
}delete this.invalidHandleIds[c]
},removeInvalidHandleClass:function(d){for(var c=0,e=this.invalidHandleClasses.length;
c<e;
++c){if(this.invalidHandleClasses[c]==d){delete this.invalidHandleClasses[c]
}}},isValidHandleChild:function(e){var f=true;
var c;
try{c=e.nodeName.toUpperCase()
}catch(d){c=e.nodeName
}f=f&&!this.invalidHandleTypes[c];
f=f&&!this.invalidHandleIds[e.id];
for(var g=0,h=this.invalidHandleClasses.length;
f&&g<h;
++g){f=!b.hasClass(e,this.invalidHandleClasses[g])
}return f
},setXTicks:function(c,f){this.xTicks=[];
this.xTickSize=f;
var d={};
for(var e=this.initPageX;
e>=this.minX;
e=e-f){if(!d[e]){this.xTicks[this.xTicks.length]=e;
d[e]=true
}}for(e=this.initPageX;
e<=this.maxX;
e=e+f){if(!d[e]){this.xTicks[this.xTicks.length]=e;
d[e]=true
}}this.xTicks.sort(this.DDM.numericSort)
},setYTicks:function(c,f){this.yTicks=[];
this.yTickSize=f;
var d={};
for(var e=this.initPageY;
e>=this.minY;
e=e-f){if(!d[e]){this.yTicks[this.yTicks.length]=e;
d[e]=true
}}for(e=this.initPageY;
e<=this.maxY;
e=e+f){if(!d[e]){this.yTicks[this.yTicks.length]=e;
d[e]=true
}}this.yTicks.sort(this.DDM.numericSort)
},setXConstraint:function(c,d,e){this.leftConstraint=parseInt(c,10);
this.rightConstraint=parseInt(d,10);
this.minX=this.initPageX-this.leftConstraint;
this.maxX=this.initPageX+this.rightConstraint;
if(e){this.setXTicks(this.initPageX,e)
}this.constrainX=true
},clearConstraints:function(){this.constrainX=false;
this.constrainY=false;
this.clearTicks()
},clearTicks:function(){this.xTicks=null;
this.yTicks=null;
this.xTickSize=0;
this.yTickSize=0
},setYConstraint:function(e,c,d){this.topConstraint=parseInt(e,10);
this.bottomConstraint=parseInt(c,10);
this.minY=this.initPageY-this.topConstraint;
this.maxY=this.initPageY+this.bottomConstraint;
if(d){this.setYTicks(this.initPageY,d)
}this.constrainY=true
},resetConstraints:function(){if(this.initPageX||this.initPageX===0){var c=(this.maintainOffset)?this.lastPageX-this.initPageX:0;
var d=(this.maintainOffset)?this.lastPageY-this.initPageY:0;
this.setInitPosition(c,d)
}else{this.setInitPosition()
}if(this.constrainX){this.setXConstraint(this.leftConstraint,this.rightConstraint,this.xTickSize)
}if(this.constrainY){this.setYConstraint(this.topConstraint,this.bottomConstraint,this.yTickSize)
}},getTick:function(c,f){if(!f){return c
}else{if(f[0]>=c){return f[0]
}else{for(var h=0,j=f.length;
h<j;
++h){var g=h+1;
if(f[g]&&f[g]>=c){var d=c-f[h];
var e=f[g]-c;
return(e>d)?f[h]:f[g]
}}return f[f.length-1]
}}},toString:function(){return("DragDrop "+this.id)
}};
YAHOO.augment(YAHOO.util.DragDrop,YAHOO.util.EventProvider)
})();
YAHOO.util.DD=function(b,a,c){if(b){this.init(b,a,c)
}};
YAHOO.extend(YAHOO.util.DD,YAHOO.util.DragDrop,{scroll:true,autoOffset:function(c,d){var a=c-this.startPageX;
var b=d-this.startPageY;
this.setDelta(a,b)
},setDelta:function(b,a){this.deltaX=b;
this.deltaY=a
},setDragElPos:function(b,c){var a=this.getDragEl();
this.alignElWithMouse(a,b,c)
},alignElWithMouse:function(g,c,d){var e=this.getTargetCoord(c,d);
if(!this.deltaSetXY){var b=[e.x,e.y];
YAHOO.util.Dom.setXY(g,b);
var f=parseInt(YAHOO.util.Dom.getStyle(g,"left"),10);
var h=parseInt(YAHOO.util.Dom.getStyle(g,"top"),10);
this.deltaSetXY=[f-e.x,h-e.y]
}else{YAHOO.util.Dom.setStyle(g,"left",(e.x+this.deltaSetXY[0])+"px");
YAHOO.util.Dom.setStyle(g,"top",(e.y+this.deltaSetXY[1])+"px")
}this.cachePosition(e.x,e.y);
var a=this;
setTimeout(function(){a.autoScroll.call(a,e.x,e.y,g.offsetHeight,g.offsetWidth)
},0)
},cachePosition:function(c,a){if(c){this.lastPageX=c;
this.lastPageY=a
}else{var b=YAHOO.util.Dom.getXY(this.getEl());
this.lastPageX=b[0];
this.lastPageY=b[1]
}},autoScroll:function(j,k,o,h){if(this.scroll){var g=this.DDM.getClientHeight();
var c=this.DDM.getClientWidth();
var e=this.DDM.getScrollTop();
var a=this.DDM.getScrollLeft();
var l=o+k;
var f=h+j;
var m=(g+e-k-this.deltaY);
var n=(c+a-j-this.deltaX);
var b=40;
var d=(document.all)?80:30;
if(l>g&&m<b){window.scrollTo(a,e+d)
}if(k<e&&e>0&&k-e<b){window.scrollTo(a,e-d)
}if(f>c&&n<b){window.scrollTo(a+d,e)
}if(j<a&&a>0&&j-a<b){window.scrollTo(a-d,e)
}}},applyConfig:function(){YAHOO.util.DD.superclass.applyConfig.call(this);
this.scroll=(this.config.scroll!==false)
},b4MouseDown:function(a){this.setStartPosition();
this.autoOffset(YAHOO.util.Event.getPageX(a),YAHOO.util.Event.getPageY(a))
},b4Drag:function(a){this.setDragElPos(YAHOO.util.Event.getPageX(a),YAHOO.util.Event.getPageY(a))
},toString:function(){return("DD "+this.id)
}});
YAHOO.util.DDProxy=function(b,a,c){if(b){this.init(b,a,c);
this.initFrame()
}};
YAHOO.util.DDProxy.dragElId="ygddfdiv";
YAHOO.extend(YAHOO.util.DDProxy,YAHOO.util.DD,{resizeFrame:true,centerFrame:false,createFrame:function(){var f=this,a=document.body;
if(!a||!a.firstChild){setTimeout(function(){f.createFrame()
},50);
return
}var b=this.getDragEl(),c=YAHOO.util.Dom;
if(!b){b=document.createElement("div");
b.id=this.dragElId;
var d=b.style;
d.position="absolute";
d.visibility="hidden";
d.cursor="move";
d.border="2px solid #aaa";
d.zIndex=999;
d.height="25px";
d.width="25px";
var e=document.createElement("div");
c.setStyle(e,"height","100%");
c.setStyle(e,"width","100%");
c.setStyle(e,"background-color","#ccc");
c.setStyle(e,"opacity","0");
b.appendChild(e);
a.insertBefore(b,a.firstChild)
}},initFrame:function(){this.createFrame()
},applyConfig:function(){YAHOO.util.DDProxy.superclass.applyConfig.call(this);
this.resizeFrame=(this.config.resizeFrame!==false);
this.centerFrame=(this.config.centerFrame);
this.setDragElId(this.config.dragElId||YAHOO.util.DDProxy.dragElId)
},showFrame:function(b,c){var d=this.getEl();
var a=this.getDragEl();
var e=a.style;
this._resizeProxy();
if(this.centerFrame){this.setDelta(Math.round(parseInt(e.width,10)/2),Math.round(parseInt(e.height,10)/2))
}this.setDragElPos(b,c);
YAHOO.util.Dom.setStyle(a,"visibility","visible")
},_resizeProxy:function(){if(this.resizeFrame){var f=YAHOO.util.Dom;
var c=this.getEl();
var b=this.getDragEl();
var g=parseInt(f.getStyle(b,"borderTopWidth"),10);
var e=parseInt(f.getStyle(b,"borderRightWidth"),10);
var h=parseInt(f.getStyle(b,"borderBottomWidth"),10);
var a=parseInt(f.getStyle(b,"borderLeftWidth"),10);
if(isNaN(g)){g=0
}if(isNaN(e)){e=0
}if(isNaN(h)){h=0
}if(isNaN(a)){a=0
}var j=Math.max(0,c.offsetWidth-e-a);
var d=Math.max(0,c.offsetHeight-g-h);
f.setStyle(b,"width",j+"px");
f.setStyle(b,"height",d+"px")
}},b4MouseDown:function(c){this.setStartPosition();
var a=YAHOO.util.Event.getPageX(c);
var b=YAHOO.util.Event.getPageY(c);
this.autoOffset(a,b)
},b4StartDrag:function(a,b){this.showFrame(a,b)
},b4EndDrag:function(a){YAHOO.util.Dom.setStyle(this.getDragEl(),"visibility","hidden")
},endDrag:function(b){var c=YAHOO.util.Dom;
var d=this.getEl();
var a=this.getDragEl();
c.setStyle(a,"visibility","");
c.setStyle(d,"visibility","hidden");
YAHOO.util.DDM.moveToEl(d,a);
c.setStyle(a,"visibility","hidden");
c.setStyle(d,"visibility","")
},toString:function(){return("DDProxy "+this.id)
}});
YAHOO.util.DDTarget=function(b,a,c){if(b){this.initTarget(b,a,c)
}};
YAHOO.extend(YAHOO.util.DDTarget,YAHOO.util.DragDrop,{toString:function(){return("DDTarget "+this.id)
}});
YAHOO.register("dragdrop",YAHOO.util.DragDropMgr,{version:"2.8.0r4",build:"2449"});
YAHOO.util.Attribute=function(b,a){if(a){this.owner=a;
this.configure(b,true)
}};
YAHOO.util.Attribute.prototype={name:undefined,value:null,owner:null,readOnly:false,writeOnce:false,_initialConfig:null,_written:false,method:null,setter:null,getter:null,validator:null,getValue:function(){var a=this.value;
if(this.getter){a=this.getter.call(this.owner,this.name,a)
}return a
},setValue:function(b,f){var c,a=this.owner,e=this.name;
var d={type:e,prevValue:this.getValue(),newValue:b};
if(this.readOnly||(this.writeOnce&&this._written)){return false
}if(this.validator&&!this.validator.call(a,b)){return false
}if(!f){c=a.fireBeforeChangeEvent(d);
if(c===false){return false
}}if(this.setter){b=this.setter.call(a,b,this.name);
if(b===undefined){}}if(this.method){this.method.call(a,b,this.name)
}this.value=b;
this._written=true;
d.type=e;
if(!f){this.owner.fireChangeEvent(d)
}return true
},configure:function(c,b){c=c||{};
if(b){this._written=false
}this._initialConfig=this._initialConfig||{};
for(var a in c){if(c.hasOwnProperty(a)){this[a]=c[a];
if(b){this._initialConfig[a]=c[a]
}}}},resetValue:function(){return this.setValue(this._initialConfig.value)
},resetConfig:function(){this.configure(this._initialConfig,true)
},refresh:function(a){this.setValue(this.value,a)
}};
(function(){var a=YAHOO.util.Lang;
YAHOO.util.AttributeProvider=function(){};
YAHOO.util.AttributeProvider.prototype={_configs:null,get:function(b){this._configs=this._configs||{};
var c=this._configs[b];
if(!c||!this._configs.hasOwnProperty(b)){return null
}return c.getValue()
},set:function(c,b,e){this._configs=this._configs||{};
var d=this._configs[c];
if(!d){return false
}return d.setValue(b,e)
},getAttributeKeys:function(){this._configs=this._configs;
var b=[],c;
for(c in this._configs){if(a.hasOwnProperty(this._configs,c)&&!a.isUndefined(this._configs[c])){b[b.length]=c
}}return b
},setAttributes:function(b,d){for(var c in b){if(a.hasOwnProperty(b,c)){this.set(c,b[c],d)
}}},resetValue:function(b,c){this._configs=this._configs||{};
if(this._configs[b]){this.set(b,this._configs[b]._initialConfig.value,c);
return true
}return false
},refresh:function(c,e){this._configs=this._configs||{};
var b=this._configs;
c=((a.isString(c))?[c]:c)||this.getAttributeKeys();
for(var d=0,f=c.length;
d<f;
++d){if(b.hasOwnProperty(c[d])){this._configs[c[d]].refresh(e)
}}},register:function(c,b){this.setAttributeConfig(c,b)
},getAttributeConfig:function(c){this._configs=this._configs||{};
var d=this._configs[c]||{};
var b={};
for(c in d){if(a.hasOwnProperty(d,c)){b[c]=d[c]
}}return b
},setAttributeConfig:function(d,c,b){this._configs=this._configs||{};
c=c||{};
if(!this._configs[d]){c.name=d;
this._configs[d]=this.createAttribute(c)
}else{this._configs[d].configure(c,b)
}},configureAttribute:function(d,c,b){this.setAttributeConfig(d,c,b)
},resetAttributeConfig:function(b){this._configs=this._configs||{};
this._configs[b].resetConfig()
},subscribe:function(c,b){this._events=this._events||{};
if(!(c in this._events)){this._events[c]=this.createEvent(c)
}YAHOO.util.EventProvider.prototype.subscribe.apply(this,arguments)
},on:function(){this.subscribe.apply(this,arguments)
},addListener:function(){this.subscribe.apply(this,arguments)
},fireBeforeChangeEvent:function(b){var c="before";
c+=b.type.charAt(0).toUpperCase()+b.type.substr(1)+"Change";
b.type=c;
return this.fireEvent(b.type,b)
},fireChangeEvent:function(b){b.type+="Change";
return this.fireEvent(b.type,b)
},createAttribute:function(b){return new YAHOO.util.Attribute(b,this)
}};
YAHOO.augment(YAHOO.util.AttributeProvider,YAHOO.util.EventProvider)
})();
(function(){var d=YAHOO.util.Dom,b=YAHOO.util.AttributeProvider,c={mouseenter:true,mouseleave:true};
var a=function(f,e){this.init.apply(this,arguments)
};
a.DOM_EVENTS={click:true,dblclick:true,keydown:true,keypress:true,keyup:true,mousedown:true,mousemove:true,mouseout:true,mouseover:true,mouseup:true,mouseenter:true,mouseleave:true,focus:true,blur:true,submit:true,change:true};
a.prototype={DOM_EVENTS:null,DEFAULT_HTML_SETTER:function(e,g){var f=this.get("element");
if(f){f[g]=e
}return e
},DEFAULT_HTML_GETTER:function(g){var f=this.get("element"),e;
if(f){e=f[g]
}return e
},appendChild:function(e){e=e.get?e.get("element"):e;
return this.get("element").appendChild(e)
},getElementsByTagName:function(e){return this.get("element").getElementsByTagName(e)
},hasChildNodes:function(){return this.get("element").hasChildNodes()
},insertBefore:function(f,e){f=f.get?f.get("element"):f;
e=(e&&e.get)?e.get("element"):e;
return this.get("element").insertBefore(f,e)
},removeChild:function(e){e=e.get?e.get("element"):e;
return this.get("element").removeChild(e)
},replaceChild:function(f,e){f=f.get?f.get("element"):f;
e=e.get?e.get("element"):e;
return this.get("element").replaceChild(f,e)
},initAttributes:function(e){},addListener:function(f,g,e,h){h=h||this;
var l=YAHOO.util.Event,j=this.get("element")||this.get("id"),k=this;
if(c[f]&&!l._createMouseDelegate){return false
}if(!this._events[f]){if(j&&this.DOM_EVENTS[f]){l.on(j,f,function(n,m){if(n.srcElement&&!n.target){n.target=n.srcElement
}if((n.toElement&&!n.relatedTarget)||(n.fromElement&&!n.relatedTarget)){n.relatedTarget=l.getRelatedTarget(n)
}if(!n.currentTarget){n.currentTarget=j
}k.fireEvent(f,n,m)
},e,h)
}this.createEvent(f,{scope:this})
}return YAHOO.util.EventProvider.prototype.subscribe.apply(this,arguments)
},on:function(){return this.addListener.apply(this,arguments)
},subscribe:function(){return this.addListener.apply(this,arguments)
},removeListener:function(e,f){return this.unsubscribe.apply(this,arguments)
},addClass:function(e){d.addClass(this.get("element"),e)
},getElementsByClassName:function(e,f){return d.getElementsByClassName(e,f,this.get("element"))
},hasClass:function(e){return d.hasClass(this.get("element"),e)
},removeClass:function(e){return d.removeClass(this.get("element"),e)
},replaceClass:function(e,f){return d.replaceClass(this.get("element"),e,f)
},setStyle:function(e,f){return d.setStyle(this.get("element"),e,f)
},getStyle:function(e){return d.getStyle(this.get("element"),e)
},fireQueue:function(){var f=this._queue;
for(var e=0,g=f.length;
e<g;
++e){this[f[e][0]].apply(this,f[e][1])
}},appendTo:function(f,e){f=(f.get)?f.get("element"):d.get(f);
this.fireEvent("beforeAppendTo",{type:"beforeAppendTo",target:f});
e=(e&&e.get)?e.get("element"):d.get(e);
var g=this.get("element");
if(!g){return false
}if(!f){return false
}if(g.parent!=f){if(e){f.insertBefore(g,e)
}else{f.appendChild(g)
}}this.fireEvent("appendTo",{type:"appendTo",target:f});
return g
},get:function(g){var e=this._configs||{},f=e.element;
if(f&&!e[g]&&!YAHOO.lang.isUndefined(f.value[g])){this._setHTMLAttrConfig(g)
}return b.prototype.get.call(this,g)
},setAttributes:function(e,h){var k={},g=this._configOrder;
for(var f=0,l=g.length;
f<l;
++f){if(e[g[f]]!==undefined){k[g[f]]=true;
this.set(g[f],e[g[f]],h)
}}for(var j in e){if(e.hasOwnProperty(j)&&!k[j]){this.set(j,e[j],h)
}}},set:function(g,e,h){var f=this.get("element");
if(!f){this._queue[this._queue.length]=["set",arguments];
if(this._configs[g]){this._configs[g].value=e
}return
}if(!this._configs[g]&&!YAHOO.lang.isUndefined(f[g])){this._setHTMLAttrConfig(g)
}return b.prototype.set.apply(this,arguments)
},setAttributeConfig:function(g,f,e){this._configOrder.push(g);
b.prototype.setAttributeConfig.apply(this,arguments)
},createEvent:function(e,f){this._events[e]=true;
return b.prototype.createEvent.apply(this,arguments)
},init:function(e,f){this._initElement(e,f)
},destroy:function(){var e=this.get("element");
YAHOO.util.Event.purgeElement(e,true);
this.unsubscribeAll();
if(e&&e.parentNode){e.parentNode.removeChild(e)
}this._queue=[];
this._events={};
this._configs={};
this._configOrder=[]
},_initElement:function(g,h){this._queue=this._queue||[];
this._events=this._events||{};
this._configs=this._configs||{};
this._configOrder=[];
h=h||{};
h.element=h.element||g||null;
var e=false;
var j=a.DOM_EVENTS;
this.DOM_EVENTS=this.DOM_EVENTS||{};
for(var f in j){if(j.hasOwnProperty(f)){this.DOM_EVENTS[f]=j[f]
}}if(typeof h.element==="string"){this._setHTMLAttrConfig("id",{value:h.element})
}if(d.get(h.element)){e=true;
this._initHTMLElement(h);
this._initContent(h)
}YAHOO.util.Event.onAvailable(h.element,function(){if(!e){this._initHTMLElement(h)
}this.fireEvent("available",{type:"available",target:d.get(h.element)})
},this,true);
YAHOO.util.Event.onContentReady(h.element,function(){if(!e){this._initContent(h)
}this.fireEvent("contentReady",{type:"contentReady",target:d.get(h.element)})
},this,true)
},_initHTMLElement:function(e){this.setAttributeConfig("element",{value:d.get(e.element),readOnly:true})
},_initContent:function(e){this.initAttributes(e);
this.setAttributes(e,true);
this.fireQueue()
},_setHTMLAttrConfig:function(g,e){var f=this.get("element");
e=e||{};
e.name=g;
e.setter=e.setter||this.DEFAULT_HTML_SETTER;
e.getter=e.getter||this.DEFAULT_HTML_GETTER;
e.value=e.value||f[g];
this._configs[g]=new YAHOO.util.Attribute(e,this)
}};
YAHOO.augment(a,b);
YAHOO.util.Element=a
})();
YAHOO.register("element",YAHOO.util.Element,{version:"2.8.0r4",build:"2449"});
YAHOO.register("utilities",YAHOO,{version:"2.8.0r4",build:"2449"});
(function(){var lang=YAHOO.lang,util=YAHOO.util,Ev=util.Event;
util.DataSourceBase=function(oLiveData,oConfigs){if(oLiveData===null||oLiveData===undefined){return
}this.liveData=oLiveData;
this._oQueue={interval:null,conn:null,requests:[]};
this.responseSchema={};
if(oConfigs&&(oConfigs.constructor==Object)){for(var sConfig in oConfigs){if(sConfig){this[sConfig]=oConfigs[sConfig]
}}}var maxCacheEntries=this.maxCacheEntries;
if(!lang.isNumber(maxCacheEntries)||(maxCacheEntries<0)){maxCacheEntries=0
}this._aIntervals=[];
this.createEvent("cacheRequestEvent");
this.createEvent("cacheResponseEvent");
this.createEvent("requestEvent");
this.createEvent("responseEvent");
this.createEvent("responseParseEvent");
this.createEvent("responseCacheEvent");
this.createEvent("dataErrorEvent");
this.createEvent("cacheFlushEvent");
var DS=util.DataSourceBase;
this._sName="DataSource instance"+DS._nIndex;
DS._nIndex++
};
var DS=util.DataSourceBase;
lang.augmentObject(DS,{TYPE_UNKNOWN:-1,TYPE_JSARRAY:0,TYPE_JSFUNCTION:1,TYPE_XHR:2,TYPE_JSON:3,TYPE_XML:4,TYPE_TEXT:5,TYPE_HTMLTABLE:6,TYPE_SCRIPTNODE:7,TYPE_LOCAL:8,ERROR_DATAINVALID:"Invalid data",ERROR_DATANULL:"Null data",_nIndex:0,_nTransactionId:0,_getLocationValue:function(field,context){var locator=field.locator||field.key||field,xmldoc=context.ownerDocument||context,result,res,value=null;
try{if(!lang.isUndefined(xmldoc.evaluate)){result=xmldoc.evaluate(locator,context,xmldoc.createNSResolver(!context.ownerDocument?context.documentElement:context.ownerDocument.documentElement),0,null);
while(res=result.iterateNext()){value=res.textContent
}}else{xmldoc.setProperty("SelectionLanguage","XPath");
result=context.selectNodes(locator)[0];
value=result.value||result.text||null
}return value
}catch(e){}},issueCallback:function(callback,params,error,scope){if(lang.isFunction(callback)){callback.apply(scope,params)
}else{if(lang.isObject(callback)){scope=callback.scope||scope||window;
var callbackFunc=callback.success;
if(error){callbackFunc=callback.failure
}if(callbackFunc){callbackFunc.apply(scope,params.concat([callback.argument]))
}}}},parseString:function(oData){if(!lang.isValue(oData)){return null
}var string=oData+"";
if(lang.isString(string)){return string
}else{return null
}},parseNumber:function(oData){if(!lang.isValue(oData)||(oData==="")){return null
}var number=oData*1;
if(lang.isNumber(number)){return number
}else{return null
}},convertNumber:function(oData){return DS.parseNumber(oData)
},parseDate:function(oData){var date=null;
if(!(oData instanceof Date)){date=new Date(oData)
}else{return oData
}if(date instanceof Date){return date
}else{return null
}},convertDate:function(oData){return DS.parseDate(oData)
}});
DS.Parser={string:DS.parseString,number:DS.parseNumber,date:DS.parseDate};
DS.prototype={_sName:null,_aCache:null,_oQueue:null,_aIntervals:null,maxCacheEntries:0,liveData:null,dataType:DS.TYPE_UNKNOWN,responseType:DS.TYPE_UNKNOWN,responseSchema:null,useXPath:false,toString:function(){return this._sName
},getCachedResponse:function(oRequest,oCallback,oCaller){var aCache=this._aCache;
if(this.maxCacheEntries>0){if(!aCache){this._aCache=[]
}else{var nCacheLength=aCache.length;
if(nCacheLength>0){var oResponse=null;
this.fireEvent("cacheRequestEvent",{request:oRequest,callback:oCallback,caller:oCaller});
for(var i=nCacheLength-1;
i>=0;
i--){var oCacheElem=aCache[i];
if(this.isCacheHit(oRequest,oCacheElem.request)){oResponse=oCacheElem.response;
this.fireEvent("cacheResponseEvent",{request:oRequest,response:oResponse,callback:oCallback,caller:oCaller});
if(i<nCacheLength-1){aCache.splice(i,1);
this.addToCache(oRequest,oResponse)
}oResponse.cached=true;
break
}}return oResponse
}}}else{if(aCache){this._aCache=null
}}return null
},isCacheHit:function(oRequest,oCachedRequest){return(oRequest===oCachedRequest)
},addToCache:function(oRequest,oResponse){var aCache=this._aCache;
if(!aCache){return
}while(aCache.length>=this.maxCacheEntries){aCache.shift()
}var oCacheElem={request:oRequest,response:oResponse};
aCache[aCache.length]=oCacheElem;
this.fireEvent("responseCacheEvent",{request:oRequest,response:oResponse})
},flushCache:function(){if(this._aCache){this._aCache=[];
this.fireEvent("cacheFlushEvent")
}},setInterval:function(nMsec,oRequest,oCallback,oCaller){if(lang.isNumber(nMsec)&&(nMsec>=0)){var oSelf=this;
var nId=setInterval(function(){oSelf.makeConnection(oRequest,oCallback,oCaller)
},nMsec);
this._aIntervals.push(nId);
return nId
}else{}},clearInterval:function(nId){var tracker=this._aIntervals||[];
for(var i=tracker.length-1;
i>-1;
i--){if(tracker[i]===nId){tracker.splice(i,1);
clearInterval(nId)
}}},clearAllIntervals:function(){var tracker=this._aIntervals||[];
for(var i=tracker.length-1;
i>-1;
i--){clearInterval(tracker[i])
}tracker=[]
},sendRequest:function(oRequest,oCallback,oCaller){var oCachedResponse=this.getCachedResponse(oRequest,oCallback,oCaller);
if(oCachedResponse){DS.issueCallback(oCallback,[oRequest,oCachedResponse],false,oCaller);
return null
}return this.makeConnection(oRequest,oCallback,oCaller)
},makeConnection:function(oRequest,oCallback,oCaller){var tId=DS._nTransactionId++;
this.fireEvent("requestEvent",{tId:tId,request:oRequest,callback:oCallback,caller:oCaller});
var oRawResponse=this.liveData;
this.handleResponse(oRequest,oRawResponse,oCallback,oCaller,tId);
return tId
},handleResponse:function(oRequest,oRawResponse,oCallback,oCaller,tId){this.fireEvent("responseEvent",{tId:tId,request:oRequest,response:oRawResponse,callback:oCallback,caller:oCaller});
var xhr=(this.dataType==DS.TYPE_XHR)?true:false;
var oParsedResponse=null;
var oFullResponse=oRawResponse;
if(this.responseType===DS.TYPE_UNKNOWN){var ctype=(oRawResponse&&oRawResponse.getResponseHeader)?oRawResponse.getResponseHeader["Content-Type"]:null;
if(ctype){if(ctype.indexOf("text/xml")>-1){this.responseType=DS.TYPE_XML
}else{if(ctype.indexOf("application/json")>-1){this.responseType=DS.TYPE_JSON
}else{if(ctype.indexOf("text/plain")>-1){this.responseType=DS.TYPE_TEXT
}}}}else{if(YAHOO.lang.isArray(oRawResponse)){this.responseType=DS.TYPE_JSARRAY
}else{if(oRawResponse&&oRawResponse.nodeType&&(oRawResponse.nodeType===9||oRawResponse.nodeType===1||oRawResponse.nodeType===11)){this.responseType=DS.TYPE_XML
}else{if(oRawResponse&&oRawResponse.nodeName&&(oRawResponse.nodeName.toLowerCase()=="table")){this.responseType=DS.TYPE_HTMLTABLE
}else{if(YAHOO.lang.isObject(oRawResponse)){this.responseType=DS.TYPE_JSON
}else{if(YAHOO.lang.isString(oRawResponse)){this.responseType=DS.TYPE_TEXT
}}}}}}}switch(this.responseType){case DS.TYPE_JSARRAY:if(xhr&&oRawResponse&&oRawResponse.responseText){oFullResponse=oRawResponse.responseText
}try{if(lang.isString(oFullResponse)){var parseArgs=[oFullResponse].concat(this.parseJSONArgs);
if(lang.JSON){oFullResponse=lang.JSON.parse.apply(lang.JSON,parseArgs)
}else{if(window.JSON&&JSON.parse){oFullResponse=JSON.parse.apply(JSON,parseArgs)
}else{if(oFullResponse.parseJSON){oFullResponse=oFullResponse.parseJSON.apply(oFullResponse,parseArgs.slice(1))
}else{while(oFullResponse.length>0&&(oFullResponse.charAt(0)!="{")&&(oFullResponse.charAt(0)!="[")){oFullResponse=oFullResponse.substring(1,oFullResponse.length)
}if(oFullResponse.length>0){var arrayEnd=Math.max(oFullResponse.lastIndexOf("]"),oFullResponse.lastIndexOf("}"));
oFullResponse=oFullResponse.substring(0,arrayEnd+1);
oFullResponse=eval("("+oFullResponse+")")
}}}}}}catch(e1){}oFullResponse=this.doBeforeParseData(oRequest,oFullResponse,oCallback);
oParsedResponse=this.parseArrayData(oRequest,oFullResponse);
break;
case DS.TYPE_JSON:if(xhr&&oRawResponse&&oRawResponse.responseText){oFullResponse=oRawResponse.responseText
}try{if(lang.isString(oFullResponse)){var parseArgs=[oFullResponse].concat(this.parseJSONArgs);
if(lang.JSON){oFullResponse=lang.JSON.parse.apply(lang.JSON,parseArgs)
}else{if(window.JSON&&JSON.parse){oFullResponse=JSON.parse.apply(JSON,parseArgs)
}else{if(oFullResponse.parseJSON){oFullResponse=oFullResponse.parseJSON.apply(oFullResponse,parseArgs.slice(1))
}else{while(oFullResponse.length>0&&(oFullResponse.charAt(0)!="{")&&(oFullResponse.charAt(0)!="[")){oFullResponse=oFullResponse.substring(1,oFullResponse.length)
}if(oFullResponse.length>0){var objEnd=Math.max(oFullResponse.lastIndexOf("]"),oFullResponse.lastIndexOf("}"));
oFullResponse=oFullResponse.substring(0,objEnd+1);
oFullResponse=eval("("+oFullResponse+")")
}}}}}}catch(e){}oFullResponse=this.doBeforeParseData(oRequest,oFullResponse,oCallback);
oParsedResponse=this.parseJSONData(oRequest,oFullResponse);
break;
case DS.TYPE_HTMLTABLE:if(xhr&&oRawResponse.responseText){var el=document.createElement("div");
el.innerHTML=oRawResponse.responseText;
oFullResponse=el.getElementsByTagName("table")[0]
}oFullResponse=this.doBeforeParseData(oRequest,oFullResponse,oCallback);
oParsedResponse=this.parseHTMLTableData(oRequest,oFullResponse);
break;
case DS.TYPE_XML:if(xhr&&oRawResponse.responseXML){oFullResponse=oRawResponse.responseXML
}oFullResponse=this.doBeforeParseData(oRequest,oFullResponse,oCallback);
oParsedResponse=this.parseXMLData(oRequest,oFullResponse);
break;
case DS.TYPE_TEXT:if(xhr&&lang.isString(oRawResponse.responseText)){oFullResponse=oRawResponse.responseText
}oFullResponse=this.doBeforeParseData(oRequest,oFullResponse,oCallback);
oParsedResponse=this.parseTextData(oRequest,oFullResponse);
break;
default:oFullResponse=this.doBeforeParseData(oRequest,oFullResponse,oCallback);
oParsedResponse=this.parseData(oRequest,oFullResponse);
break
}oParsedResponse=oParsedResponse||{};
if(!oParsedResponse.results){oParsedResponse.results=[]
}if(!oParsedResponse.meta){oParsedResponse.meta={}
}if(!oParsedResponse.error){oParsedResponse=this.doBeforeCallback(oRequest,oFullResponse,oParsedResponse,oCallback);
this.fireEvent("responseParseEvent",{request:oRequest,response:oParsedResponse,callback:oCallback,caller:oCaller});
this.addToCache(oRequest,oParsedResponse)
}else{oParsedResponse.error=true;
this.fireEvent("dataErrorEvent",{request:oRequest,response:oRawResponse,callback:oCallback,caller:oCaller,message:DS.ERROR_DATANULL})
}oParsedResponse.tId=tId;
DS.issueCallback(oCallback,[oRequest,oParsedResponse],oParsedResponse.error,oCaller)
},doBeforeParseData:function(oRequest,oFullResponse,oCallback){return oFullResponse
},doBeforeCallback:function(oRequest,oFullResponse,oParsedResponse,oCallback){return oParsedResponse
},parseData:function(oRequest,oFullResponse){if(lang.isValue(oFullResponse)){var oParsedResponse={results:oFullResponse,meta:{}};
return oParsedResponse
}return null
},parseArrayData:function(oRequest,oFullResponse){if(lang.isArray(oFullResponse)){var results=[],i,j,rec,field,data;
if(lang.isArray(this.responseSchema.fields)){var fields=this.responseSchema.fields;
for(i=fields.length-1;
i>=0;
--i){if(typeof fields[i]!=="object"){fields[i]={key:fields[i]}
}}var parsers={},p;
for(i=fields.length-1;
i>=0;
--i){p=(typeof fields[i].parser==="function"?fields[i].parser:DS.Parser[fields[i].parser+""])||fields[i].converter;
if(p){parsers[fields[i].key]=p
}}var arrType=lang.isArray(oFullResponse[0]);
for(i=oFullResponse.length-1;
i>-1;
i--){var oResult={};
rec=oFullResponse[i];
if(typeof rec==="object"){for(j=fields.length-1;
j>-1;
j--){field=fields[j];
data=arrType?rec[j]:rec[field.key];
if(parsers[field.key]){data=parsers[field.key].call(this,data)
}if(data===undefined){data=null
}oResult[field.key]=data
}}else{if(lang.isString(rec)){for(j=fields.length-1;
j>-1;
j--){field=fields[j];
data=rec;
if(parsers[field.key]){data=parsers[field.key].call(this,data)
}if(data===undefined){data=null
}oResult[field.key]=data
}}}results[i]=oResult
}}else{results=oFullResponse
}var oParsedResponse={results:results};
return oParsedResponse
}return null
},parseTextData:function(oRequest,oFullResponse){if(lang.isString(oFullResponse)){if(lang.isString(this.responseSchema.recordDelim)&&lang.isString(this.responseSchema.fieldDelim)){var oParsedResponse={results:[]};
var recDelim=this.responseSchema.recordDelim;
var fieldDelim=this.responseSchema.fieldDelim;
if(oFullResponse.length>0){var newLength=oFullResponse.length-recDelim.length;
if(oFullResponse.substr(newLength)==recDelim){oFullResponse=oFullResponse.substr(0,newLength)
}if(oFullResponse.length>0){var recordsarray=oFullResponse.split(recDelim);
for(var i=0,len=recordsarray.length,recIdx=0;
i<len;
++i){var bError=false,sRecord=recordsarray[i];
if(lang.isString(sRecord)&&(sRecord.length>0)){var fielddataarray=recordsarray[i].split(fieldDelim);
var oResult={};
if(lang.isArray(this.responseSchema.fields)){var fields=this.responseSchema.fields;
for(var j=fields.length-1;
j>-1;
j--){try{var data=fielddataarray[j];
if(lang.isString(data)){if(data.charAt(0)=='"'){data=data.substr(1)
}if(data.charAt(data.length-1)=='"'){data=data.substr(0,data.length-1)
}var field=fields[j];
var key=(lang.isValue(field.key))?field.key:field;
if(!field.parser&&field.converter){field.parser=field.converter
}var parser=(typeof field.parser==="function")?field.parser:DS.Parser[field.parser+""];
if(parser){data=parser.call(this,data)
}if(data===undefined){data=null
}oResult[key]=data
}else{bError=true
}}catch(e){bError=true
}}}else{oResult=fielddataarray
}if(!bError){oParsedResponse.results[recIdx++]=oResult
}}}}}return oParsedResponse
}}return null
},parseXMLResult:function(result){var oResult={},schema=this.responseSchema;
try{for(var m=schema.fields.length-1;
m>=0;
m--){var field=schema.fields[m];
var key=(lang.isValue(field.key))?field.key:field;
var data=null;
if(this.useXPath){data=YAHOO.util.DataSource._getLocationValue(field,result)
}else{var xmlAttr=result.attributes.getNamedItem(key);
if(xmlAttr){data=xmlAttr.value
}else{var xmlNode=result.getElementsByTagName(key);
if(xmlNode&&xmlNode.item(0)){var item=xmlNode.item(0);
data=(item)?((item.text)?item.text:(item.textContent)?item.textContent:null):null;
if(!data){var datapieces=[];
for(var j=0,len=item.childNodes.length;
j<len;
j++){if(item.childNodes[j].nodeValue){datapieces[datapieces.length]=item.childNodes[j].nodeValue
}}if(datapieces.length>0){data=datapieces.join("")
}}}}}if(data===null){data=""
}if(!field.parser&&field.converter){field.parser=field.converter
}var parser=(typeof field.parser==="function")?field.parser:DS.Parser[field.parser+""];
if(parser){data=parser.call(this,data)
}if(data===undefined){data=null
}oResult[key]=data
}}catch(e){}return oResult
},parseXMLData:function(oRequest,oFullResponse){var bError=false,schema=this.responseSchema,oParsedResponse={meta:{}},xmlList=null,metaNode=schema.metaNode,metaLocators=schema.metaFields||{},i,k,loc,v;
try{if(this.useXPath){for(k in metaLocators){oParsedResponse.meta[k]=YAHOO.util.DataSource._getLocationValue(metaLocators[k],oFullResponse)
}}else{metaNode=metaNode?oFullResponse.getElementsByTagName(metaNode)[0]:oFullResponse;
if(metaNode){for(k in metaLocators){if(lang.hasOwnProperty(metaLocators,k)){loc=metaLocators[k];
v=metaNode.getElementsByTagName(loc)[0];
if(v){v=v.firstChild.nodeValue
}else{v=metaNode.attributes.getNamedItem(loc);
if(v){v=v.value
}}if(lang.isValue(v)){oParsedResponse.meta[k]=v
}}}}}xmlList=(schema.resultNode)?oFullResponse.getElementsByTagName(schema.resultNode):null
}catch(e){}if(!xmlList||!lang.isArray(schema.fields)){bError=true
}else{oParsedResponse.results=[];
for(i=xmlList.length-1;
i>=0;
--i){var oResult=this.parseXMLResult(xmlList.item(i));
oParsedResponse.results[i]=oResult
}}if(bError){oParsedResponse.error=true
}else{}return oParsedResponse
},parseJSONData:function(oRequest,oFullResponse){var oParsedResponse={results:[],meta:{}};
if(lang.isObject(oFullResponse)&&this.responseSchema.resultsList){var schema=this.responseSchema,fields=schema.fields,resultsList=oFullResponse,results=[],metaFields=schema.metaFields||{},fieldParsers=[],fieldPaths=[],simpleFields=[],bError=false,i,len,j,v,key,parser,path;
var buildPath=function(needle){var path=null,keys=[],i=0;
if(needle){needle=needle.replace(/\[(['"])(.*?)\1\]/g,function(x,$1,$2){keys[i]=$2;
return".@"+(i++)
}).replace(/\[(\d+)\]/g,function(x,$1){keys[i]=parseInt($1,10)|0;
return".@"+(i++)
}).replace(/^\./,"");
if(!/[^\w\.\$@]/.test(needle)){path=needle.split(".");
for(i=path.length-1;
i>=0;
--i){if(path[i].charAt(0)==="@"){path[i]=keys[parseInt(path[i].substr(1),10)]
}}}else{}}return path
};
var walkPath=function(path,origin){var v=origin,i=0,len=path.length;
for(;
i<len&&v;
++i){v=v[path[i]]
}return v
};
path=buildPath(schema.resultsList);
if(path){resultsList=walkPath(path,oFullResponse);
if(resultsList===undefined){bError=true
}}else{bError=true
}if(!resultsList){resultsList=[]
}if(!lang.isArray(resultsList)){resultsList=[resultsList]
}if(!bError){if(schema.fields){var field;
for(i=0,len=fields.length;
i<len;
i++){field=fields[i];
key=field.key||field;
parser=((typeof field.parser==="function")?field.parser:DS.Parser[field.parser+""])||field.converter;
path=buildPath(key);
if(parser){fieldParsers[fieldParsers.length]={key:key,parser:parser}
}if(path){if(path.length>1){fieldPaths[fieldPaths.length]={key:key,path:path}
}else{simpleFields[simpleFields.length]={key:key,path:path[0]}
}}else{}}for(i=resultsList.length-1;
i>=0;
--i){var r=resultsList[i],rec={};
if(r){for(j=simpleFields.length-1;
j>=0;
--j){rec[simpleFields[j].key]=(r[simpleFields[j].path]!==undefined)?r[simpleFields[j].path]:r[j]
}for(j=fieldPaths.length-1;
j>=0;
--j){rec[fieldPaths[j].key]=walkPath(fieldPaths[j].path,r)
}for(j=fieldParsers.length-1;
j>=0;
--j){var p=fieldParsers[j].key;
rec[p]=fieldParsers[j].parser(rec[p]);
if(rec[p]===undefined){rec[p]=null
}}}results[i]=rec
}}else{results=resultsList
}for(key in metaFields){if(lang.hasOwnProperty(metaFields,key)){path=buildPath(metaFields[key]);
if(path){v=walkPath(path,oFullResponse);
oParsedResponse.meta[key]=v
}}}}else{oParsedResponse.error=true
}oParsedResponse.results=results
}else{oParsedResponse.error=true
}return oParsedResponse
},parseHTMLTableData:function(oRequest,oFullResponse){var bError=false;
var elTable=oFullResponse;
var fields=this.responseSchema.fields;
var oParsedResponse={results:[]};
if(lang.isArray(fields)){for(var i=0;
i<elTable.tBodies.length;
i++){var elTbody=elTable.tBodies[i];
for(var j=elTbody.rows.length-1;
j>-1;
j--){var elRow=elTbody.rows[j];
var oResult={};
for(var k=fields.length-1;
k>-1;
k--){var field=fields[k];
var key=(lang.isValue(field.key))?field.key:field;
var data=elRow.cells[k].innerHTML;
if(!field.parser&&field.converter){field.parser=field.converter
}var parser=(typeof field.parser==="function")?field.parser:DS.Parser[field.parser+""];
if(parser){data=parser.call(this,data)
}if(data===undefined){data=null
}oResult[key]=data
}oParsedResponse.results[j]=oResult
}}}else{bError=true
}if(bError){oParsedResponse.error=true
}else{}return oParsedResponse
}};
lang.augmentProto(DS,util.EventProvider);
util.LocalDataSource=function(oLiveData,oConfigs){this.dataType=DS.TYPE_LOCAL;
if(oLiveData){if(YAHOO.lang.isArray(oLiveData)){this.responseType=DS.TYPE_JSARRAY
}else{if(oLiveData.nodeType&&oLiveData.nodeType==9){this.responseType=DS.TYPE_XML
}else{if(oLiveData.nodeName&&(oLiveData.nodeName.toLowerCase()=="table")){this.responseType=DS.TYPE_HTMLTABLE;
oLiveData=oLiveData.cloneNode(true)
}else{if(YAHOO.lang.isString(oLiveData)){this.responseType=DS.TYPE_TEXT
}else{if(YAHOO.lang.isObject(oLiveData)){this.responseType=DS.TYPE_JSON
}}}}}}else{oLiveData=[];
this.responseType=DS.TYPE_JSARRAY
}util.LocalDataSource.superclass.constructor.call(this,oLiveData,oConfigs)
};
lang.extend(util.LocalDataSource,DS);
lang.augmentObject(util.LocalDataSource,DS);
util.FunctionDataSource=function(oLiveData,oConfigs){this.dataType=DS.TYPE_JSFUNCTION;
oLiveData=oLiveData||function(){};
util.FunctionDataSource.superclass.constructor.call(this,oLiveData,oConfigs)
};
lang.extend(util.FunctionDataSource,DS,{scope:null,makeConnection:function(oRequest,oCallback,oCaller){var tId=DS._nTransactionId++;
this.fireEvent("requestEvent",{tId:tId,request:oRequest,callback:oCallback,caller:oCaller});
var oRawResponse=(this.scope)?this.liveData.call(this.scope,oRequest,this):this.liveData(oRequest);
if(this.responseType===DS.TYPE_UNKNOWN){if(YAHOO.lang.isArray(oRawResponse)){this.responseType=DS.TYPE_JSARRAY
}else{if(oRawResponse&&oRawResponse.nodeType&&oRawResponse.nodeType==9){this.responseType=DS.TYPE_XML
}else{if(oRawResponse&&oRawResponse.nodeName&&(oRawResponse.nodeName.toLowerCase()=="table")){this.responseType=DS.TYPE_HTMLTABLE
}else{if(YAHOO.lang.isObject(oRawResponse)){this.responseType=DS.TYPE_JSON
}else{if(YAHOO.lang.isString(oRawResponse)){this.responseType=DS.TYPE_TEXT
}}}}}}this.handleResponse(oRequest,oRawResponse,oCallback,oCaller,tId);
return tId
}});
lang.augmentObject(util.FunctionDataSource,DS);
util.ScriptNodeDataSource=function(oLiveData,oConfigs){this.dataType=DS.TYPE_SCRIPTNODE;
oLiveData=oLiveData||"";
util.ScriptNodeDataSource.superclass.constructor.call(this,oLiveData,oConfigs)
};
lang.extend(util.ScriptNodeDataSource,DS,{getUtility:util.Get,asyncMode:"allowAll",scriptCallbackParam:"callback",generateRequestCallback:function(id){return"&"+this.scriptCallbackParam+"=YAHOO.util.ScriptNodeDataSource.callbacks["+id+"]"
},doBeforeGetScriptNode:function(sUri){return sUri
},makeConnection:function(oRequest,oCallback,oCaller){var tId=DS._nTransactionId++;
this.fireEvent("requestEvent",{tId:tId,request:oRequest,callback:oCallback,caller:oCaller});
if(util.ScriptNodeDataSource._nPending===0){util.ScriptNodeDataSource.callbacks=[];
util.ScriptNodeDataSource._nId=0
}var id=util.ScriptNodeDataSource._nId;
util.ScriptNodeDataSource._nId++;
var oSelf=this;
util.ScriptNodeDataSource.callbacks[id]=function(oRawResponse){if((oSelf.asyncMode!=="ignoreStaleResponses")||(id===util.ScriptNodeDataSource.callbacks.length-1)){if(oSelf.responseType===DS.TYPE_UNKNOWN){if(YAHOO.lang.isArray(oRawResponse)){oSelf.responseType=DS.TYPE_JSARRAY
}else{if(oRawResponse.nodeType&&oRawResponse.nodeType==9){oSelf.responseType=DS.TYPE_XML
}else{if(oRawResponse.nodeName&&(oRawResponse.nodeName.toLowerCase()=="table")){oSelf.responseType=DS.TYPE_HTMLTABLE
}else{if(YAHOO.lang.isObject(oRawResponse)){oSelf.responseType=DS.TYPE_JSON
}else{if(YAHOO.lang.isString(oRawResponse)){oSelf.responseType=DS.TYPE_TEXT
}}}}}}oSelf.handleResponse(oRequest,oRawResponse,oCallback,oCaller,tId)
}else{}delete util.ScriptNodeDataSource.callbacks[id]
};
util.ScriptNodeDataSource._nPending++;
var sUri=this.liveData+oRequest+this.generateRequestCallback(id);
sUri=this.doBeforeGetScriptNode(sUri);
this.getUtility.script(sUri,{autopurge:true,onsuccess:util.ScriptNodeDataSource._bumpPendingDown,onfail:util.ScriptNodeDataSource._bumpPendingDown});
return tId
}});
lang.augmentObject(util.ScriptNodeDataSource,DS);
lang.augmentObject(util.ScriptNodeDataSource,{_nId:0,_nPending:0,callbacks:[]});
util.XHRDataSource=function(oLiveData,oConfigs){this.dataType=DS.TYPE_XHR;
this.connMgr=this.connMgr||util.Connect;
oLiveData=oLiveData||"";
util.XHRDataSource.superclass.constructor.call(this,oLiveData,oConfigs)
};
lang.extend(util.XHRDataSource,DS,{connMgr:null,connXhrMode:"allowAll",connMethodPost:false,connTimeout:0,makeConnection:function(oRequest,oCallback,oCaller){var oRawResponse=null;
var tId=DS._nTransactionId++;
this.fireEvent("requestEvent",{tId:tId,request:oRequest,callback:oCallback,caller:oCaller});
var oSelf=this;
var oConnMgr=this.connMgr;
var oQueue=this._oQueue;
var _xhrSuccess=function(oResponse){if(oResponse&&(this.connXhrMode=="ignoreStaleResponses")&&(oResponse.tId!=oQueue.conn.tId)){return null
}else{if(!oResponse){this.fireEvent("dataErrorEvent",{request:oRequest,response:null,callback:oCallback,caller:oCaller,message:DS.ERROR_DATANULL});
DS.issueCallback(oCallback,[oRequest,{error:true}],true,oCaller);
return null
}else{if(this.responseType===DS.TYPE_UNKNOWN){var ctype=(oResponse.getResponseHeader)?oResponse.getResponseHeader["Content-Type"]:null;
if(ctype){if(ctype.indexOf("text/xml")>-1){this.responseType=DS.TYPE_XML
}else{if(ctype.indexOf("application/json")>-1){this.responseType=DS.TYPE_JSON
}else{if(ctype.indexOf("text/plain")>-1){this.responseType=DS.TYPE_TEXT
}}}}}this.handleResponse(oRequest,oResponse,oCallback,oCaller,tId)
}}};
var _xhrFailure=function(oResponse){this.fireEvent("dataErrorEvent",{request:oRequest,response:oResponse,callback:oCallback,caller:oCaller,message:DS.ERROR_DATAINVALID});
if(lang.isString(this.liveData)&&lang.isString(oRequest)&&(this.liveData.lastIndexOf("?")!==this.liveData.length-1)&&(oRequest.indexOf("?")!==0)){}oResponse=oResponse||{};
oResponse.error=true;
DS.issueCallback(oCallback,[oRequest,oResponse],true,oCaller);
return null
};
var _xhrCallback={success:_xhrSuccess,failure:_xhrFailure,scope:this};
if(lang.isNumber(this.connTimeout)){_xhrCallback.timeout=this.connTimeout
}if(this.connXhrMode=="cancelStaleRequests"){if(oQueue.conn){if(oConnMgr.abort){oConnMgr.abort(oQueue.conn);
oQueue.conn=null
}else{}}}if(oConnMgr&&oConnMgr.asyncRequest){var sLiveData=this.liveData;
var isPost=this.connMethodPost;
var sMethod=(isPost)?"POST":"GET";
var sUri=(isPost||!lang.isValue(oRequest))?sLiveData:sLiveData+oRequest;
var sRequest=(isPost)?oRequest:null;
if(this.connXhrMode!="queueRequests"){oQueue.conn=oConnMgr.asyncRequest(sMethod,sUri,_xhrCallback,sRequest)
}else{if(oQueue.conn){var allRequests=oQueue.requests;
allRequests.push({request:oRequest,callback:_xhrCallback});
if(!oQueue.interval){oQueue.interval=setInterval(function(){if(oConnMgr.isCallInProgress(oQueue.conn)){return
}else{if(allRequests.length>0){sUri=(isPost||!lang.isValue(allRequests[0].request))?sLiveData:sLiveData+allRequests[0].request;
sRequest=(isPost)?allRequests[0].request:null;
oQueue.conn=oConnMgr.asyncRequest(sMethod,sUri,allRequests[0].callback,sRequest);
allRequests.shift()
}else{clearInterval(oQueue.interval);
oQueue.interval=null
}}},50)
}}else{oQueue.conn=oConnMgr.asyncRequest(sMethod,sUri,_xhrCallback,sRequest)
}}}else{DS.issueCallback(oCallback,[oRequest,{error:true}],true,oCaller)
}return tId
}});
lang.augmentObject(util.XHRDataSource,DS);
util.DataSource=function(oLiveData,oConfigs){oConfigs=oConfigs||{};
var dataType=oConfigs.dataType;
if(dataType){if(dataType==DS.TYPE_LOCAL){lang.augmentObject(util.DataSource,util.LocalDataSource);
return new util.LocalDataSource(oLiveData,oConfigs)
}else{if(dataType==DS.TYPE_XHR){lang.augmentObject(util.DataSource,util.XHRDataSource);
return new util.XHRDataSource(oLiveData,oConfigs)
}else{if(dataType==DS.TYPE_SCRIPTNODE){lang.augmentObject(util.DataSource,util.ScriptNodeDataSource);
return new util.ScriptNodeDataSource(oLiveData,oConfigs)
}else{if(dataType==DS.TYPE_JSFUNCTION){lang.augmentObject(util.DataSource,util.FunctionDataSource);
return new util.FunctionDataSource(oLiveData,oConfigs)
}}}}}if(YAHOO.lang.isString(oLiveData)){lang.augmentObject(util.DataSource,util.XHRDataSource);
return new util.XHRDataSource(oLiveData,oConfigs)
}else{if(YAHOO.lang.isFunction(oLiveData)){lang.augmentObject(util.DataSource,util.FunctionDataSource);
return new util.FunctionDataSource(oLiveData,oConfigs)
}else{lang.augmentObject(util.DataSource,util.LocalDataSource);
return new util.LocalDataSource(oLiveData,oConfigs)
}}};
lang.augmentObject(util.DataSource,DS)
})();
YAHOO.util.Number={format:function(c,j){if(!isFinite(+c)){return""
}c=!isFinite(+c)?0:+c;
j=YAHOO.lang.merge(YAHOO.util.Number.format.defaults,(j||{}));
var b=c<0,h=Math.abs(c),d=j.decimalPlaces,e=j.thousandsSeparator,f,g,a;
if(d<0){f=h-(h%1)+"";
a=f.length+d;
if(a>0){f=Number("."+f).toFixed(a).slice(2)+new Array(f.length-a+1).join("0")
}else{f="0"
}}else{f=h<1&&h>=0.5&&!d?"1":h.toFixed(d)
}if(h>1000){g=f.split(/\D/);
a=g[0].length%3||3;
g[0]=g[0].slice(0,a)+g[0].slice(a).replace(/(\d{3})/g,e+"$1");
f=g.join(j.decimalSeparator)
}f=j.prefix+f+j.suffix;
return b?j.negativeFormat.replace(/#/,f):f
}};
YAHOO.util.Number.format.defaults={decimalSeparator:".",decimalPlaces:null,thousandsSeparator:"",prefix:"",suffix:"",negativeFormat:"-#"};
(function(){var a=function(e,c,d){if(typeof d==="undefined"){d=10
}for(;
parseInt(e,10)<d&&d>1;
d/=10){e=c.toString()+e
}return e.toString()
};
var b={formats:{a:function(c,d){return d.a[c.getDay()]
},A:function(c,d){return d.A[c.getDay()]
},b:function(c,d){return d.b[c.getMonth()]
},B:function(c,d){return d.B[c.getMonth()]
},C:function(c){return a(parseInt(c.getFullYear()/100,10),0)
},d:["getDate","0"],e:["getDate"," "],g:function(c){return a(parseInt(b.formats.G(c)%100,10),0)
},G:function(d){var c=d.getFullYear();
var e=parseInt(b.formats.V(d),10);
var f=parseInt(b.formats.W(d),10);
if(f>e){c++
}else{if(f===0&&e>=52){c--
}}return c
},H:["getHours","0"],I:function(c){var d=c.getHours()%12;
return a(d===0?12:d,0)
},j:function(c){var d=new Date(""+c.getFullYear()+"/1/1 GMT");
var f=new Date(""+c.getFullYear()+"/"+(c.getMonth()+1)+"/"+c.getDate()+" GMT");
var g=f-d;
var e=parseInt(g/60000/60/24,10)+1;
return a(e,0,100)
},k:["getHours"," "],l:function(c){var d=c.getHours()%12;
return a(d===0?12:d," ")
},m:function(c){return a(c.getMonth()+1,0)
},M:["getMinutes","0"],p:function(c,d){return d.p[c.getHours()>=12?1:0]
},P:function(c,d){return d.P[c.getHours()>=12?1:0]
},s:function(c,d){return parseInt(c.getTime()/1000,10)
},S:["getSeconds","0"],u:function(d){var c=d.getDay();
return c===0?7:c
},U:function(c){var f=parseInt(b.formats.j(c),10);
var d=6-c.getDay();
var e=parseInt((f+d)/7,10);
return a(e,0)
},V:function(c){var d=parseInt(b.formats.W(c),10);
var f=(new Date(""+c.getFullYear()+"/1/1")).getDay();
var e=d+(f>4||f<=1?0:1);
if(e===53&&(new Date(""+c.getFullYear()+"/12/31")).getDay()<4){e=1
}else{if(e===0){e=b.formats.V(new Date(""+(c.getFullYear()-1)+"/12/31"))
}}return a(e,0)
},w:"getDay",W:function(c){var f=parseInt(b.formats.j(c),10);
var d=7-b.formats.u(c);
var e=parseInt((f+d)/7,10);
return a(e,0,10)
},y:function(c){return a(c.getFullYear()%100,0)
},Y:"getFullYear",z:function(d){var e=d.getTimezoneOffset();
var f=a(parseInt(Math.abs(e/60),10),0);
var c=a(Math.abs(e%60),0);
return(e>0?"-":"+")+f+c
},Z:function(d){var c=d.toString().replace(/^.*:\d\d( GMT[+-]\d+)? \(?([A-Za-z ]+)\)?\d*$/,"$2").replace(/[a-z ]/g,"");
if(c.length>4){c=b.formats.z(d)
}return c
},"%":function(c){return"%"
}},aggregates:{c:"locale",D:"%m/%d/%y",F:"%Y-%m-%d",h:"%b",n:"\n",r:"locale",R:"%H:%M",t:"\t",T:"%H:%M:%S",x:"locale",X:"locale"},format:function(f,g,j){g=g||{};
if(!(f instanceof Date)){return YAHOO.lang.isValue(f)?f:""
}var e=g.format||"%m/%d/%Y";
if(e==="YYYY/MM/DD"){e="%Y/%m/%d"
}else{if(e==="DD/MM/YYYY"){e="%d/%m/%Y"
}else{if(e==="MM/DD/YYYY"){e="%m/%d/%Y"
}}}j=j||"en";
if(!(j in YAHOO.util.DateLocale)){if(j.replace(/-[a-zA-Z]+$/,"") in YAHOO.util.DateLocale){j=j.replace(/-[a-zA-Z]+$/,"")
}else{j="en"
}}var c=YAHOO.util.DateLocale[j];
var k=function(l,m){var n=b.aggregates[m];
return(n==="locale"?c[m]:n)
};
var h=function(l,m){var n=b.formats[m];
if(typeof n==="string"){return f[n]()
}else{if(typeof n==="function"){return n.call(f,f,c)
}else{if(typeof n==="object"&&typeof n[0]==="string"){return a(f[n[0]](),n[1])
}else{return m
}}}};
while(e.match(/%[cDFhnrRtTxX]/)){e=e.replace(/%([cDFhnrRtTxX])/g,k)
}var d=e.replace(/%([aAbBCdegGHIjklmMpPsSuUVwWyYzZ%])/g,h);
k=h=undefined;
return d
}};
YAHOO.namespace("YAHOO.util");
YAHOO.util.Date=b;
YAHOO.util.DateLocale={a:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],b:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],B:["January","February","March","April","May","June","July","August","September","October","November","December"],c:"%a %d %b %Y %T %Z",p:["AM","PM"],P:["am","pm"],r:"%I:%M:%S %p",x:"%d/%m/%y",X:"%T"};
YAHOO.util.DateLocale.en=YAHOO.lang.merge(YAHOO.util.DateLocale,{});
YAHOO.util.DateLocale["en-US"]=YAHOO.lang.merge(YAHOO.util.DateLocale.en,{c:"%a %d %b %Y %I:%M:%S %p %Z",x:"%m/%d/%Y",X:"%I:%M:%S %p"});
YAHOO.util.DateLocale["en-GB"]=YAHOO.lang.merge(YAHOO.util.DateLocale.en,{r:"%l:%M:%S %P %Z"});
YAHOO.util.DateLocale["en-AU"]=YAHOO.lang.merge(YAHOO.util.DateLocale.en)
})();
YAHOO.register("datasource",YAHOO.util.DataSource,{version:"2.8.0r4",build:"2449"});
YAHOO.widget.DS_JSArray=YAHOO.util.LocalDataSource;
YAHOO.widget.DS_JSFunction=YAHOO.util.FunctionDataSource;
YAHOO.widget.DS_XHR=function(d,a,b){var c=new YAHOO.util.XHRDataSource(d,b);
c._aDeprecatedSchema=a;
return c
};
YAHOO.widget.DS_ScriptNode=function(d,a,b){var c=new YAHOO.util.ScriptNodeDataSource(d,b);
c._aDeprecatedSchema=a;
return c
};
YAHOO.widget.DS_XHR.TYPE_JSON=YAHOO.util.DataSourceBase.TYPE_JSON;
YAHOO.widget.DS_XHR.TYPE_XML=YAHOO.util.DataSourceBase.TYPE_XML;
YAHOO.widget.DS_XHR.TYPE_FLAT=YAHOO.util.DataSourceBase.TYPE_TEXT;
YAHOO.widget.AutoComplete=function(j,c,f,b){if(j&&c&&f){if(f&&YAHOO.lang.isFunction(f.sendRequest)){this.dataSource=f
}else{return
}this.key=0;
var a=f.responseSchema;
if(f._aDeprecatedSchema){var e=f._aDeprecatedSchema;
if(YAHOO.lang.isArray(e)){if((f.responseType===YAHOO.util.DataSourceBase.TYPE_JSON)||(f.responseType===YAHOO.util.DataSourceBase.TYPE_UNKNOWN)){a.resultsList=e[0];
this.key=e[1];
a.fields=(e.length<3)?null:e.slice(1)
}else{if(f.responseType===YAHOO.util.DataSourceBase.TYPE_XML){a.resultNode=e[0];
this.key=e[1];
a.fields=e.slice(1)
}else{if(f.responseType===YAHOO.util.DataSourceBase.TYPE_TEXT){a.recordDelim=e[0];
a.fieldDelim=e[1]
}}}f.responseSchema=a
}}if(YAHOO.util.Dom.inDocument(j)){if(YAHOO.lang.isString(j)){this._sName="instance"+YAHOO.widget.AutoComplete._nIndex+" "+j;
this._elTextbox=document.getElementById(j)
}else{this._sName=(j.id)?"instance"+YAHOO.widget.AutoComplete._nIndex+" "+j.id:"instance"+YAHOO.widget.AutoComplete._nIndex;
this._elTextbox=j
}YAHOO.util.Dom.addClass(this._elTextbox,"yui-ac-input")
}else{return
}if(YAHOO.util.Dom.inDocument(c)){if(YAHOO.lang.isString(c)){this._elContainer=document.getElementById(c)
}else{this._elContainer=c
}if(this._elContainer.style.display=="none"){}var l=this._elContainer.parentNode;
var d=l.tagName.toLowerCase();
if(d=="div"){YAHOO.util.Dom.addClass(l,"yui-ac")
}else{}}else{return
}if(this.dataSource.dataType===YAHOO.util.DataSourceBase.TYPE_LOCAL){this.applyLocalFilter=true
}if(b&&(b.constructor==Object)){for(var g in b){if(g){this[g]=b[g]
}}}this._initContainerEl();
this._initProps();
this._initListEl();
this._initContainerHelperEls();
var h=this;
var k=this._elTextbox;
YAHOO.util.Event.addListener(k,"keyup",h._onTextboxKeyUp,h);
YAHOO.util.Event.addListener(k,"keydown",h._onTextboxKeyDown,h);
YAHOO.util.Event.addListener(k,"focus",h._onTextboxFocus,h);
YAHOO.util.Event.addListener(k,"blur",h._onTextboxBlur,h);
YAHOO.util.Event.addListener(c,"mouseover",h._onContainerMouseover,h);
YAHOO.util.Event.addListener(c,"mouseout",h._onContainerMouseout,h);
YAHOO.util.Event.addListener(c,"click",h._onContainerClick,h);
YAHOO.util.Event.addListener(c,"scroll",h._onContainerScroll,h);
YAHOO.util.Event.addListener(c,"resize",h._onContainerResize,h);
YAHOO.util.Event.addListener(k,"keypress",h._onTextboxKeyPress,h);
YAHOO.util.Event.addListener(window,"unload",h._onWindowUnload,h);
this.textboxFocusEvent=new YAHOO.util.CustomEvent("textboxFocus",this);
this.textboxKeyEvent=new YAHOO.util.CustomEvent("textboxKey",this);
this.dataRequestEvent=new YAHOO.util.CustomEvent("dataRequest",this);
this.dataReturnEvent=new YAHOO.util.CustomEvent("dataReturn",this);
this.dataErrorEvent=new YAHOO.util.CustomEvent("dataError",this);
this.containerPopulateEvent=new YAHOO.util.CustomEvent("containerPopulate",this);
this.containerExpandEvent=new YAHOO.util.CustomEvent("containerExpand",this);
this.typeAheadEvent=new YAHOO.util.CustomEvent("typeAhead",this);
this.itemMouseOverEvent=new YAHOO.util.CustomEvent("itemMouseOver",this);
this.itemMouseOutEvent=new YAHOO.util.CustomEvent("itemMouseOut",this);
this.itemArrowToEvent=new YAHOO.util.CustomEvent("itemArrowTo",this);
this.itemArrowFromEvent=new YAHOO.util.CustomEvent("itemArrowFrom",this);
this.itemSelectEvent=new YAHOO.util.CustomEvent("itemSelect",this);
this.unmatchedItemSelectEvent=new YAHOO.util.CustomEvent("unmatchedItemSelect",this);
this.selectionEnforceEvent=new YAHOO.util.CustomEvent("selectionEnforce",this);
this.containerCollapseEvent=new YAHOO.util.CustomEvent("containerCollapse",this);
this.textboxBlurEvent=new YAHOO.util.CustomEvent("textboxBlur",this);
this.textboxChangeEvent=new YAHOO.util.CustomEvent("textboxChange",this);
k.setAttribute("autocomplete","off");
YAHOO.widget.AutoComplete._nIndex++
}else{}};
YAHOO.widget.AutoComplete.prototype.dataSource=null;
YAHOO.widget.AutoComplete.prototype.applyLocalFilter=null;
YAHOO.widget.AutoComplete.prototype.queryMatchCase=false;
YAHOO.widget.AutoComplete.prototype.queryMatchContains=false;
YAHOO.widget.AutoComplete.prototype.queryMatchSubset=false;
YAHOO.widget.AutoComplete.prototype.minQueryLength=1;
YAHOO.widget.AutoComplete.prototype.maxResultsDisplayed=10;
YAHOO.widget.AutoComplete.prototype.queryDelay=0.2;
YAHOO.widget.AutoComplete.prototype.typeAheadDelay=0.5;
YAHOO.widget.AutoComplete.prototype.queryInterval=500;
YAHOO.widget.AutoComplete.prototype.highlightClassName="yui-ac-highlight";
YAHOO.widget.AutoComplete.prototype.prehighlightClassName=null;
YAHOO.widget.AutoComplete.prototype.delimChar=null;
YAHOO.widget.AutoComplete.prototype.autoHighlight=true;
YAHOO.widget.AutoComplete.prototype.typeAhead=false;
YAHOO.widget.AutoComplete.prototype.animHoriz=false;
YAHOO.widget.AutoComplete.prototype.animVert=true;
YAHOO.widget.AutoComplete.prototype.animSpeed=0.3;
YAHOO.widget.AutoComplete.prototype.forceSelection=false;
YAHOO.widget.AutoComplete.prototype.allowBrowserAutocomplete=true;
YAHOO.widget.AutoComplete.prototype.alwaysShowContainer=false;
YAHOO.widget.AutoComplete.prototype.useIFrame=false;
YAHOO.widget.AutoComplete.prototype.useShadow=false;
YAHOO.widget.AutoComplete.prototype.suppressInputUpdate=false;
YAHOO.widget.AutoComplete.prototype.resultTypeList=true;
YAHOO.widget.AutoComplete.prototype.queryQuestionMark=true;
YAHOO.widget.AutoComplete.prototype.autoSnapContainer=true;
YAHOO.widget.AutoComplete.prototype.toString=function(){return"AutoComplete "+this._sName
};
YAHOO.widget.AutoComplete.prototype.getInputEl=function(){return this._elTextbox
};
YAHOO.widget.AutoComplete.prototype.getContainerEl=function(){return this._elContainer
};
YAHOO.widget.AutoComplete.prototype.isFocused=function(){return this._bFocused
};
YAHOO.widget.AutoComplete.prototype.isContainerOpen=function(){return this._bContainerOpen
};
YAHOO.widget.AutoComplete.prototype.getListEl=function(){return this._elList
};
YAHOO.widget.AutoComplete.prototype.getListItemMatch=function(a){if(a._sResultMatch){return a._sResultMatch
}else{return null
}};
YAHOO.widget.AutoComplete.prototype.getListItemData=function(a){if(a._oResultData){return a._oResultData
}else{return null
}};
YAHOO.widget.AutoComplete.prototype.getListItemIndex=function(a){if(YAHOO.lang.isNumber(a._nItemIndex)){return a._nItemIndex
}else{return null
}};
YAHOO.widget.AutoComplete.prototype.setHeader=function(b){if(this._elHeader){var a=this._elHeader;
if(b){a.innerHTML=b;
a.style.display=""
}else{a.innerHTML="";
a.style.display="none"
}}};
YAHOO.widget.AutoComplete.prototype.setFooter=function(b){if(this._elFooter){var a=this._elFooter;
if(b){a.innerHTML=b;
a.style.display=""
}else{a.innerHTML="";
a.style.display="none"
}}};
YAHOO.widget.AutoComplete.prototype.setBody=function(a){if(this._elBody){var b=this._elBody;
YAHOO.util.Event.purgeElement(b,true);
if(a){b.innerHTML=a;
b.style.display=""
}else{b.innerHTML="";
b.style.display="none"
}this._elList=null
}};
YAHOO.widget.AutoComplete.prototype.generateRequest=function(b){var a=this.dataSource.dataType;
if(a===YAHOO.util.DataSourceBase.TYPE_XHR){if(!this.dataSource.connMethodPost){b=(this.queryQuestionMark?"?":"")+(this.dataSource.scriptQueryParam||"query")+"="+b+(this.dataSource.scriptQueryAppend?("&"+this.dataSource.scriptQueryAppend):"")
}else{b=(this.dataSource.scriptQueryParam||"query")+"="+b+(this.dataSource.scriptQueryAppend?("&"+this.dataSource.scriptQueryAppend):"")
}}else{if(a===YAHOO.util.DataSourceBase.TYPE_SCRIPTNODE){b="&"+(this.dataSource.scriptQueryParam||"query")+"="+b+(this.dataSource.scriptQueryAppend?("&"+this.dataSource.scriptQueryAppend):"")
}}return b
};
YAHOO.widget.AutoComplete.prototype.sendQuery=function(b){this._bFocused=true;
var a=(this.delimChar)?this._elTextbox.value+b:b;
this._sendQuery(a)
};
YAHOO.widget.AutoComplete.prototype.snapContainer=function(){var a=this._elTextbox,b=YAHOO.util.Dom.getXY(a);
b[1]+=YAHOO.util.Dom.get(a).offsetHeight+2;
YAHOO.util.Dom.setXY(this._elContainer,b)
};
YAHOO.widget.AutoComplete.prototype.expandContainer=function(){this._toggleContainer(true)
};
YAHOO.widget.AutoComplete.prototype.collapseContainer=function(){this._toggleContainer(false)
};
YAHOO.widget.AutoComplete.prototype.clearList=function(){var b=this._elList.childNodes,a=b.length-1;
for(;
a>-1;
a--){b[a].style.display="none"
}};
YAHOO.widget.AutoComplete.prototype.getSubsetMatches=function(b){var c,d,a;
for(var e=b.length;
e>=this.minQueryLength;
e--){a=this.generateRequest(b.substr(0,e));
this.dataRequestEvent.fire(this,c,a);
d=this.dataSource.getCachedResponse(a);
if(d){return this.filterResults.apply(this.dataSource,[b,d,d,{scope:this}])
}}return null
};
YAHOO.widget.AutoComplete.prototype.preparseRawResponse=function(c,d,a){var b=((this.responseStripAfter!=="")&&(d.indexOf))?d.indexOf(this.responseStripAfter):-1;
if(b!=-1){d=d.substring(0,b)
}return d
};
YAHOO.widget.AutoComplete.prototype.filterResults=function(l,j,e,k){if(k&&k.argument&&k.argument.query){l=k.argument.query
}if(l&&l!==""){e=YAHOO.widget.AutoComplete._cloneObject(e);
var n=k.scope,f=this,b=e.results,h=[],c=n.maxResultsDisplayed,m=(f.queryMatchCase||n.queryMatchCase),d=(f.queryMatchContains||n.queryMatchContains);
for(var a=0,o=b.length;
a<o;
a++){var q=b[a];
var r=null;
if(YAHOO.lang.isString(q)){r=q
}else{if(YAHOO.lang.isArray(q)){r=q[0]
}else{if(this.responseSchema.fields){var g=this.responseSchema.fields[0].key||this.responseSchema.fields[0];
r=q[g]
}else{if(this.key){r=q[this.key]
}}}}if(YAHOO.lang.isString(r)){var p=(m)?r.indexOf(decodeURIComponent(l)):r.toLowerCase().indexOf(decodeURIComponent(l).toLowerCase());
if((!d&&(p===0))||(d&&(p>-1))){h.push(q)
}}if(o>c&&h.length===c){break
}}e.results=h
}else{}return e
};
YAHOO.widget.AutoComplete.prototype.handleResponse=function(b,a,c){if((this instanceof YAHOO.widget.AutoComplete)&&this._sName){this._populateList(b,a,c)
}};
YAHOO.widget.AutoComplete.prototype.doBeforeLoadData=function(b,a,c){return true
};
YAHOO.widget.AutoComplete.prototype.formatResult=function(d,b,a){var c=(a)?a:"";
return c
};
YAHOO.widget.AutoComplete.prototype.doBeforeExpandContainer=function(b,a,c,d){return true
};
YAHOO.widget.AutoComplete.prototype.destroy=function(){var d=this.toString();
var a=this._elTextbox;
var b=this._elContainer;
this.textboxFocusEvent.unsubscribeAll();
this.textboxKeyEvent.unsubscribeAll();
this.dataRequestEvent.unsubscribeAll();
this.dataReturnEvent.unsubscribeAll();
this.dataErrorEvent.unsubscribeAll();
this.containerPopulateEvent.unsubscribeAll();
this.containerExpandEvent.unsubscribeAll();
this.typeAheadEvent.unsubscribeAll();
this.itemMouseOverEvent.unsubscribeAll();
this.itemMouseOutEvent.unsubscribeAll();
this.itemArrowToEvent.unsubscribeAll();
this.itemArrowFromEvent.unsubscribeAll();
this.itemSelectEvent.unsubscribeAll();
this.unmatchedItemSelectEvent.unsubscribeAll();
this.selectionEnforceEvent.unsubscribeAll();
this.containerCollapseEvent.unsubscribeAll();
this.textboxBlurEvent.unsubscribeAll();
this.textboxChangeEvent.unsubscribeAll();
YAHOO.util.Event.purgeElement(a,true);
YAHOO.util.Event.purgeElement(b,true);
b.innerHTML="";
for(var c in this){if(YAHOO.lang.hasOwnProperty(this,c)){this[c]=null
}}};
YAHOO.widget.AutoComplete.prototype.textboxFocusEvent=null;
YAHOO.widget.AutoComplete.prototype.textboxKeyEvent=null;
YAHOO.widget.AutoComplete.prototype.dataRequestEvent=null;
YAHOO.widget.AutoComplete.prototype.dataReturnEvent=null;
YAHOO.widget.AutoComplete.prototype.dataErrorEvent=null;
YAHOO.widget.AutoComplete.prototype.containerPopulateEvent=null;
YAHOO.widget.AutoComplete.prototype.containerExpandEvent=null;
YAHOO.widget.AutoComplete.prototype.typeAheadEvent=null;
YAHOO.widget.AutoComplete.prototype.itemMouseOverEvent=null;
YAHOO.widget.AutoComplete.prototype.itemMouseOutEvent=null;
YAHOO.widget.AutoComplete.prototype.itemArrowToEvent=null;
YAHOO.widget.AutoComplete.prototype.itemArrowFromEvent=null;
YAHOO.widget.AutoComplete.prototype.itemSelectEvent=null;
YAHOO.widget.AutoComplete.prototype.unmatchedItemSelectEvent=null;
YAHOO.widget.AutoComplete.prototype.selectionEnforceEvent=null;
YAHOO.widget.AutoComplete.prototype.containerCollapseEvent=null;
YAHOO.widget.AutoComplete.prototype.textboxBlurEvent=null;
YAHOO.widget.AutoComplete.prototype.textboxChangeEvent=null;
YAHOO.widget.AutoComplete._nIndex=0;
YAHOO.widget.AutoComplete.prototype._sName=null;
YAHOO.widget.AutoComplete.prototype._elTextbox=null;
YAHOO.widget.AutoComplete.prototype._elContainer=null;
YAHOO.widget.AutoComplete.prototype._elContent=null;
YAHOO.widget.AutoComplete.prototype._elHeader=null;
YAHOO.widget.AutoComplete.prototype._elBody=null;
YAHOO.widget.AutoComplete.prototype._elFooter=null;
YAHOO.widget.AutoComplete.prototype._elShadow=null;
YAHOO.widget.AutoComplete.prototype._elIFrame=null;
YAHOO.widget.AutoComplete.prototype._bFocused=false;
YAHOO.widget.AutoComplete.prototype._oAnim=null;
YAHOO.widget.AutoComplete.prototype._bContainerOpen=false;
YAHOO.widget.AutoComplete.prototype._bOverContainer=false;
YAHOO.widget.AutoComplete.prototype._elList=null;
YAHOO.widget.AutoComplete.prototype._nDisplayedItems=0;
YAHOO.widget.AutoComplete.prototype._sCurQuery=null;
YAHOO.widget.AutoComplete.prototype._sPastSelections="";
YAHOO.widget.AutoComplete.prototype._sInitInputValue=null;
YAHOO.widget.AutoComplete.prototype._elCurListItem=null;
YAHOO.widget.AutoComplete.prototype._elCurPrehighlightItem=null;
YAHOO.widget.AutoComplete.prototype._bItemSelected=false;
YAHOO.widget.AutoComplete.prototype._nKeyCode=null;
YAHOO.widget.AutoComplete.prototype._nDelayID=-1;
YAHOO.widget.AutoComplete.prototype._nTypeAheadDelayID=-1;
YAHOO.widget.AutoComplete.prototype._iFrameSrc="javascript:false;";
YAHOO.widget.AutoComplete.prototype._queryInterval=null;
YAHOO.widget.AutoComplete.prototype._sLastTextboxValue=null;
YAHOO.widget.AutoComplete.prototype._initProps=function(){var f=this.minQueryLength;
if(!YAHOO.lang.isNumber(f)){this.minQueryLength=1
}var c=this.maxResultsDisplayed;
if(!YAHOO.lang.isNumber(c)||(c<1)){this.maxResultsDisplayed=10
}var b=this.queryDelay;
if(!YAHOO.lang.isNumber(b)||(b<0)){this.queryDelay=0.2
}var e=this.typeAheadDelay;
if(!YAHOO.lang.isNumber(e)||(e<0)){this.typeAheadDelay=0.2
}var a=this.delimChar;
if(YAHOO.lang.isString(a)&&(a.length>0)){this.delimChar=[a]
}else{if(!YAHOO.lang.isArray(a)){this.delimChar=null
}}var d=this.animSpeed;
if((this.animHoriz||this.animVert)&&YAHOO.util.Anim){if(!YAHOO.lang.isNumber(d)||(d<0)){this.animSpeed=0.3
}if(!this._oAnim){this._oAnim=new YAHOO.util.Anim(this._elContent,{},this.animSpeed)
}else{this._oAnim.duration=this.animSpeed
}}if(this.forceSelection&&a){}};
YAHOO.widget.AutoComplete.prototype._initContainerHelperEls=function(){if(this.useShadow&&!this._elShadow){var a=document.createElement("div");
a.className="yui-ac-shadow";
a.style.width=0;
a.style.height=0;
this._elShadow=this._elContainer.appendChild(a)
}if(this.useIFrame&&!this._elIFrame){var b=document.createElement("iframe");
b.src=this._iFrameSrc;
b.frameBorder=0;
b.scrolling="no";
b.style.position="absolute";
b.style.width=0;
b.style.height=0;
b.style.padding=0;
b.tabIndex=-1;
b.role="presentation";
b.title="Presentational iframe shim";
this._elIFrame=this._elContainer.appendChild(b)
}};
YAHOO.widget.AutoComplete.prototype._initContainerEl=function(){YAHOO.util.Dom.addClass(this._elContainer,"yui-ac-container");
if(!this._elContent){var c=document.createElement("div");
c.className="yui-ac-content";
c.style.display="none";
this._elContent=this._elContainer.appendChild(c);
var d=document.createElement("div");
d.className="yui-ac-hd";
d.style.display="none";
this._elHeader=this._elContent.appendChild(d);
var b=document.createElement("div");
b.className="yui-ac-bd";
this._elBody=this._elContent.appendChild(b);
var a=document.createElement("div");
a.className="yui-ac-ft";
a.style.display="none";
this._elFooter=this._elContent.appendChild(a)
}else{}};
YAHOO.widget.AutoComplete.prototype._initListEl=function(){var c=this.maxResultsDisplayed,a=this._elList||document.createElement("ul"),d;
while(a.childNodes.length<c){d=document.createElement("li");
d.style.display="none";
d._nItemIndex=a.childNodes.length;
a.appendChild(d)
}if(!this._elList){var b=this._elBody;
YAHOO.util.Event.purgeElement(b,true);
b.innerHTML="";
this._elList=b.appendChild(a)
}this._elBody.style.display=""
};
YAHOO.widget.AutoComplete.prototype._focus=function(){var a=this;
setTimeout(function(){try{a._elTextbox.focus()
}catch(b){}},0)
};
YAHOO.widget.AutoComplete.prototype._enableIntervalDetection=function(){var a=this;
if(!a._queryInterval&&a.queryInterval){a._queryInterval=setInterval(function(){a._onInterval()
},a.queryInterval)
}};
YAHOO.widget.AutoComplete.prototype.enableIntervalDetection=YAHOO.widget.AutoComplete.prototype._enableIntervalDetection;
YAHOO.widget.AutoComplete.prototype._onInterval=function(){var a=this._elTextbox.value;
var b=this._sLastTextboxValue;
if(a!=b){this._sLastTextboxValue=a;
this._sendQuery(a)
}};
YAHOO.widget.AutoComplete.prototype._clearInterval=function(){if(this._queryInterval){clearInterval(this._queryInterval);
this._queryInterval=null
}};
YAHOO.widget.AutoComplete.prototype._isIgnoreKey=function(a){if((a==9)||(a==13)||(a==16)||(a==17)||(a>=18&&a<=20)||(a==27)||(a>=33&&a<=35)||(a>=36&&a<=40)||(a>=44&&a<=45)||(a==229)){return true
}return false
};
YAHOO.widget.AutoComplete.prototype._sendQuery=function(b){if(this.minQueryLength<0){this._toggleContainer(false);
return
}if(this.delimChar){var a=this._extractQuery(b);
b=a.query;
this._sPastSelections=a.previous
}if((b&&(b.length<this.minQueryLength))||(!b&&this.minQueryLength>0)){if(this._nDelayID!=-1){clearTimeout(this._nDelayID)
}this._toggleContainer(false);
return
}b=encodeURIComponent(b);
this._nDelayID=-1;
if(this.dataSource.queryMatchSubset||this.queryMatchSubset){var c=this.getSubsetMatches(b);
if(c){this.handleResponse(b,c,{query:b});
return
}}if(this.dataSource.responseStripAfter){this.dataSource.doBeforeParseData=this.preparseRawResponse
}if(this.applyLocalFilter){this.dataSource.doBeforeCallback=this.filterResults
}var d=this.generateRequest(b);
this.dataRequestEvent.fire(this,b,d);
this.dataSource.sendRequest(d,{success:this.handleResponse,failure:this.handleResponse,scope:this,argument:{query:b}})
};
YAHOO.widget.AutoComplete.prototype._populateListItem=function(c,a,b){c.innerHTML=this.formatResult(a,b,c._sResultMatch)
};
YAHOO.widget.AutoComplete.prototype._populateList=function(j,o,r){if(this._nTypeAheadDelayID!=-1){clearTimeout(this._nTypeAheadDelayID)
}j=(r&&r.query)?r.query:j;
var m=this.doBeforeLoadData(j,o,r);
if(m&&!o.error){this.dataReturnEvent.fire(this,j,o.results);
if(this._bFocused){var g=decodeURIComponent(j);
this._sCurQuery=g;
this._bItemSelected=false;
var b=o.results,u=Math.min(b.length,this.maxResultsDisplayed),k=(this.dataSource.responseSchema.fields)?(this.dataSource.responseSchema.fields[0].key||this.dataSource.responseSchema.fields[0]):0;
if(u>0){if(!this._elList||(this._elList.childNodes.length<u)){this._initListEl()
}this._initContainerHelperEls();
var l=this._elList.childNodes;
for(var c=u-1;
c>=0;
c--){var d=l[c],p=b[c];
if(this.resultTypeList){var t=[];
t[0]=(YAHOO.lang.isString(p))?p:p[k]||p[this.key];
var h=this.dataSource.responseSchema.fields;
if(YAHOO.lang.isArray(h)&&(h.length>1)){for(var f=1,a=h.length;
f<a;
f++){t[t.length]=p[h[f].key||h[f]]
}}else{if(YAHOO.lang.isArray(p)){t=p
}else{if(YAHOO.lang.isString(p)){t=[p]
}else{t[1]=p
}}}p=t
}d._sResultMatch=(YAHOO.lang.isString(p))?p:(YAHOO.lang.isArray(p))?p[0]:(p[k]||"");
d._oResultData=p;
this._populateListItem(d,p,g);
d.style.display=""
}if(u<l.length){var n;
for(var e=l.length-1;
e>=u;
e--){n=l[e];
n.style.display="none"
}}this._nDisplayedItems=u;
this.containerPopulateEvent.fire(this,j,b);
if(this.autoHighlight){var q=this._elList.firstChild;
this._toggleHighlight(q,"to");
this.itemArrowToEvent.fire(this,q);
this._typeAhead(q,j)
}else{this._toggleHighlight(this._elCurListItem,"from")
}m=this._doBeforeExpandContainer(this._elTextbox,this._elContainer,j,b);
this._toggleContainer(m)
}else{this._toggleContainer(false)
}return
}}else{this.dataErrorEvent.fire(this,j,o)
}};
YAHOO.widget.AutoComplete.prototype._doBeforeExpandContainer=function(b,a,c,d){if(this.autoSnapContainer){this.snapContainer()
}return this.doBeforeExpandContainer(b,a,c,d)
};
YAHOO.widget.AutoComplete.prototype._clearSelection=function(){var a=(this.delimChar)?this._extractQuery(this._elTextbox.value):{previous:"",query:this._elTextbox.value};
this._elTextbox.value=a.previous;
this.selectionEnforceEvent.fire(this,a.query)
};
YAHOO.widget.AutoComplete.prototype._textMatchesOption=function(){var a=null;
for(var d=0;
d<this._nDisplayedItems;
d++){var c=this._elList.childNodes[d];
var b=(""+c._sResultMatch).toLowerCase();
if(b==this._sCurQuery.toLowerCase()){a=c;
break
}}return(a)
};
YAHOO.widget.AutoComplete.prototype._typeAhead=function(d,b){if(!this.typeAhead||(this._nKeyCode==8)){return
}var a=this,c=this._elTextbox;
if(c.setSelectionRange||c.createTextRange){this._nTypeAheadDelayID=setTimeout(function(){var f=c.value.length;
a._updateValue(d);
var e=c.value.length;
a._selectText(c,f,e);
var g=c.value.substr(f,e);
a.typeAheadEvent.fire(a,b,g)
},(this.typeAheadDelay*1000))
}};
YAHOO.widget.AutoComplete.prototype._selectText=function(b,a,d){if(b.setSelectionRange){b.setSelectionRange(a,d)
}else{if(b.createTextRange){var c=b.createTextRange();
c.moveStart("character",a);
c.moveEnd("character",d-b.value.length);
c.select()
}else{b.select()
}}};
YAHOO.widget.AutoComplete.prototype._extractQuery=function(b){var g=this.delimChar,d=-1,c,e,h=g.length-1,f;
for(;
h>=0;
h--){c=b.lastIndexOf(g[h]);
if(c>d){d=c
}}if(g[h]==" "){for(var a=g.length-1;
a>=0;
a--){if(b[d-1]==g[a]){d--;
break
}}}if(d>-1){e=d+1;
while(b.charAt(e)==" "){e+=1
}f=b.substring(0,e);
b=b.substr(e)
}else{f=""
}return{previous:f,query:b}
};
YAHOO.widget.AutoComplete.prototype._toggleContainerHelpers=function(c){var b=this._elContent.offsetWidth+"px";
var e=this._elContent.offsetHeight+"px";
if(this.useIFrame&&this._elIFrame){var d=this._elIFrame;
if(c){d.style.width=b;
d.style.height=e;
d.style.padding=""
}else{d.style.width=0;
d.style.height=0;
d.style.padding=0
}}if(this.useShadow&&this._elShadow){var a=this._elShadow;
if(c){a.style.width=b;
a.style.height=e
}else{a.style.width=0;
a.style.height=0
}}};
YAHOO.widget.AutoComplete.prototype._toggleContainer=function(f){var a=this._elContainer;
if(this.alwaysShowContainer&&this._bContainerOpen){return
}if(!f){this._toggleHighlight(this._elCurListItem,"from");
this._nDisplayedItems=0;
this._sCurQuery=null;
if(this._elContent.style.display=="none"){return
}}var d=this._oAnim;
if(d&&d.getEl()&&(this.animHoriz||this.animVert)){if(d.isAnimated()){d.stop(true)
}var h=this._elContent.cloneNode(true);
a.appendChild(h);
h.style.top="-9000px";
h.style.width="";
h.style.height="";
h.style.display="";
var j=h.offsetWidth;
var b=h.offsetHeight;
var c=(this.animHoriz)?0:j;
var k=(this.animVert)?0:b;
d.attributes=(f)?{width:{to:j},height:{to:b}}:{width:{to:c},height:{to:k}};
if(f&&!this._bContainerOpen){this._elContent.style.width=c+"px";
this._elContent.style.height=k+"px"
}else{this._elContent.style.width=j+"px";
this._elContent.style.height=b+"px"
}a.removeChild(h);
h=null;
var g=this;
var e=function(){d.onComplete.unsubscribeAll();
if(f){g._toggleContainerHelpers(true);
g._bContainerOpen=f;
g.containerExpandEvent.fire(g)
}else{g._elContent.style.display="none";
g._bContainerOpen=f;
g.containerCollapseEvent.fire(g)
}};
this._toggleContainerHelpers(false);
this._elContent.style.display="";
d.onComplete.subscribe(e);
d.animate()
}else{if(f){this._elContent.style.display="";
this._toggleContainerHelpers(true);
this._bContainerOpen=f;
this.containerExpandEvent.fire(this)
}else{this._toggleContainerHelpers(false);
this._elContent.style.display="none";
this._bContainerOpen=f;
this.containerCollapseEvent.fire(this)
}}};
YAHOO.widget.AutoComplete.prototype._toggleHighlight=function(a,b){if(a){var c=this.highlightClassName;
if(this._elCurListItem){YAHOO.util.Dom.removeClass(this._elCurListItem,c);
this._elCurListItem=null
}if((b=="to")&&c){YAHOO.util.Dom.addClass(a,c);
this._elCurListItem=a
}}};
YAHOO.widget.AutoComplete.prototype._togglePrehighlight=function(c,b){var a=this.prehighlightClassName;
if(this._elCurPrehighlightItem){YAHOO.util.Dom.removeClass(this._elCurPrehighlightItem,a)
}if(c==this._elCurListItem){return
}if((b=="mouseover")&&a){YAHOO.util.Dom.addClass(c,a);
this._elCurPrehighlightItem=c
}else{YAHOO.util.Dom.removeClass(c,a)
}};
YAHOO.widget.AutoComplete.prototype._updateValue=function(e){if(!this.suppressInputUpdate){var b=this._elTextbox;
var c=(this.delimChar)?(this.delimChar[0]||this.delimChar):null;
var f=e._sResultMatch;
var d="";
if(c){d=this._sPastSelections;
d+=f+c;
if(c!=" "){d+=" "
}}else{d=f
}b.value=d;
if(b.type=="textarea"){b.scrollTop=b.scrollHeight
}var a=b.value.length;
this._selectText(b,a,a);
this._elCurListItem=e
}};
YAHOO.widget.AutoComplete.prototype._selectItem=function(a){this._bItemSelected=true;
this._updateValue(a);
this._sPastSelections=this._elTextbox.value;
this._clearInterval();
this.itemSelectEvent.fire(this,a,a._oResultData);
this._toggleContainer(false)
};
YAHOO.widget.AutoComplete.prototype._jumpSelection=function(){if(this._elCurListItem){this._selectItem(this._elCurListItem)
}else{this._toggleContainer(false)
}};
YAHOO.widget.AutoComplete.prototype._moveSelection=function(g){if(this._bContainerOpen){var f=this._elCurListItem,a=-1;
if(f){a=f._nItemIndex
}var j=(g==40)?(a+1):(a-1);
if(j<-2||j>=this._nDisplayedItems){return
}if(f){this._toggleHighlight(f,"from");
this.itemArrowFromEvent.fire(this,f)
}if(j==-1){if(this.delimChar){this._elTextbox.value=this._sPastSelections+this._sCurQuery
}else{this._elTextbox.value=this._sCurQuery
}return
}if(j==-2){this._toggleContainer(false);
return
}var h=this._elList.childNodes[j],c=this._elContent,b=YAHOO.util.Dom.getStyle(c,"overflow"),e=YAHOO.util.Dom.getStyle(c,"overflowY"),d=((b=="auto")||(b=="scroll")||(e=="auto")||(e=="scroll"));
if(d&&(j>-1)&&(j<this._nDisplayedItems)){if(g==40){if((h.offsetTop+h.offsetHeight)>(c.scrollTop+c.offsetHeight)){c.scrollTop=(h.offsetTop+h.offsetHeight)-c.offsetHeight
}else{if((h.offsetTop+h.offsetHeight)<c.scrollTop){c.scrollTop=h.offsetTop
}}}else{if(h.offsetTop<c.scrollTop){this._elContent.scrollTop=h.offsetTop
}else{if(h.offsetTop>(c.scrollTop+c.offsetHeight)){this._elContent.scrollTop=(h.offsetTop+h.offsetHeight)-c.offsetHeight
}}}}this._toggleHighlight(h,"to");
this.itemArrowToEvent.fire(this,h);
if(this.typeAhead){this._updateValue(h)
}}};
YAHOO.widget.AutoComplete.prototype._onContainerMouseover=function(a,c){var b=YAHOO.util.Event.getTarget(a);
var d=b.nodeName.toLowerCase();
while(b&&(d!="table")){switch(d){case"body":return;
case"li":if(c.prehighlightClassName){c._togglePrehighlight(b,"mouseover")
}else{c._toggleHighlight(b,"to")
}c.itemMouseOverEvent.fire(c,b);
break;
case"div":if(YAHOO.util.Dom.hasClass(b,"yui-ac-container")){c._bOverContainer=true;
return
}break;
default:break
}b=b.parentNode;
if(b){d=b.nodeName.toLowerCase()
}}};
YAHOO.widget.AutoComplete.prototype._onContainerMouseout=function(a,c){var b=YAHOO.util.Event.getTarget(a);
var d=b.nodeName.toLowerCase();
while(b&&(d!="table")){switch(d){case"body":return;
case"li":if(c.prehighlightClassName){c._togglePrehighlight(b,"mouseout")
}else{c._toggleHighlight(b,"from")
}c.itemMouseOutEvent.fire(c,b);
break;
case"ul":c._toggleHighlight(c._elCurListItem,"to");
break;
case"div":if(YAHOO.util.Dom.hasClass(b,"yui-ac-container")){c._bOverContainer=false;
return
}break;
default:break
}b=b.parentNode;
if(b){d=b.nodeName.toLowerCase()
}}};
YAHOO.widget.AutoComplete.prototype._onContainerClick=function(a,c){var b=YAHOO.util.Event.getTarget(a);
var d=b.nodeName.toLowerCase();
while(b&&(d!="table")){switch(d){case"body":return;
case"li":c._toggleHighlight(b,"to");
c._selectItem(b);
return;
default:break
}b=b.parentNode;
if(b){d=b.nodeName.toLowerCase()
}}};
YAHOO.widget.AutoComplete.prototype._onContainerScroll=function(a,b){b._focus()
};
YAHOO.widget.AutoComplete.prototype._onContainerResize=function(a,b){b._toggleContainerHelpers(b._bContainerOpen)
};
YAHOO.widget.AutoComplete.prototype._onTextboxKeyDown=function(a,c){var b=a.keyCode;
if(c._nTypeAheadDelayID!=-1){clearTimeout(c._nTypeAheadDelayID)
}switch(b){case 9:if(!YAHOO.env.ua.opera&&(navigator.userAgent.toLowerCase().indexOf("mac")==-1)||(YAHOO.env.ua.webkit>420)){if(c._elCurListItem){if(c.delimChar&&(c._nKeyCode!=b)){if(c._bContainerOpen){YAHOO.util.Event.stopEvent(a)
}}c._selectItem(c._elCurListItem)
}else{c._toggleContainer(false)
}}break;
case 13:if(!YAHOO.env.ua.opera&&(navigator.userAgent.toLowerCase().indexOf("mac")==-1)||(YAHOO.env.ua.webkit>420)){if(c._elCurListItem){if(c._nKeyCode!=b){if(c._bContainerOpen){YAHOO.util.Event.stopEvent(a)
}}c._selectItem(c._elCurListItem)
}else{c._toggleContainer(false)
}}break;
case 27:c._toggleContainer(false);
return;
case 39:c._jumpSelection();
break;
case 38:if(c._bContainerOpen){YAHOO.util.Event.stopEvent(a);
c._moveSelection(b)
}break;
case 40:if(c._bContainerOpen){YAHOO.util.Event.stopEvent(a);
c._moveSelection(b)
}break;
default:c._bItemSelected=false;
c._toggleHighlight(c._elCurListItem,"from");
c.textboxKeyEvent.fire(c,b);
break
}if(b===18){c._enableIntervalDetection()
}c._nKeyCode=b
};
YAHOO.widget.AutoComplete.prototype._onTextboxKeyPress=function(a,c){var b=a.keyCode;
if(YAHOO.env.ua.opera||(navigator.userAgent.toLowerCase().indexOf("mac")!=-1)&&(YAHOO.env.ua.webkit<420)){switch(b){case 9:if(c._bContainerOpen){if(c.delimChar){YAHOO.util.Event.stopEvent(a)
}if(c._elCurListItem){c._selectItem(c._elCurListItem)
}else{c._toggleContainer(false)
}}break;
case 13:if(c._bContainerOpen){YAHOO.util.Event.stopEvent(a);
if(c._elCurListItem){c._selectItem(c._elCurListItem)
}else{c._toggleContainer(false)
}}break;
default:break
}}else{if(b==229){c._enableIntervalDetection()
}}};
YAHOO.widget.AutoComplete.prototype._onTextboxKeyUp=function(a,c){var d=this.value;
c._initProps();
var b=a.keyCode;
if(c._isIgnoreKey(b)){return
}if(c._nDelayID!=-1){clearTimeout(c._nDelayID)
}c._nDelayID=setTimeout(function(){c._sendQuery(d)
},(c.queryDelay*1000))
};
YAHOO.widget.AutoComplete.prototype._onTextboxFocus=function(a,b){if(!b._bFocused){b._elTextbox.setAttribute("autocomplete","off");
b._bFocused=true;
b._sInitInputValue=b._elTextbox.value;
b.textboxFocusEvent.fire(b)
}};
YAHOO.widget.AutoComplete.prototype._onTextboxBlur=function(a,b){if(!b._bOverContainer||(b._nKeyCode==9)){if(!b._bItemSelected){var c=b._textMatchesOption();
if(!b._bContainerOpen||(b._bContainerOpen&&(c===null))){if(b.forceSelection){b._clearSelection()
}else{b.unmatchedItemSelectEvent.fire(b,b._sCurQuery)
}}else{if(b.forceSelection){b._selectItem(c)
}}}b._clearInterval();
b._bFocused=false;
if(b._sInitInputValue!==b._elTextbox.value){b.textboxChangeEvent.fire(b)
}b.textboxBlurEvent.fire(b);
b._toggleContainer(false)
}else{b._focus()
}};
YAHOO.widget.AutoComplete.prototype._onWindowUnload=function(a,b){if(b&&b._elTextbox&&b.allowBrowserAutocomplete){b._elTextbox.setAttribute("autocomplete","on")
}};
YAHOO.widget.AutoComplete.prototype.doBeforeSendQuery=function(a){return this.generateRequest(a)
};
YAHOO.widget.AutoComplete.prototype.getListItems=function(){var b=[],c=this._elList.childNodes;
for(var a=c.length-1;
a>=0;
a--){b[a]=c[a]
}return b
};
YAHOO.widget.AutoComplete._cloneObject=function(d){if(!YAHOO.lang.isValue(d)){return d
}var b={};
if(YAHOO.lang.isFunction(d)){b=d
}else{if(YAHOO.lang.isArray(d)){var c=[];
for(var e=0,f=d.length;
e<f;
e++){c[e]=YAHOO.widget.AutoComplete._cloneObject(d[e])
}b=c
}else{if(YAHOO.lang.isObject(d)){for(var a in d){if(YAHOO.lang.hasOwnProperty(d,a)){if(YAHOO.lang.isValue(d[a])&&YAHOO.lang.isObject(d[a])||YAHOO.lang.isArray(d[a])){b[a]=YAHOO.widget.AutoComplete._cloneObject(d[a])
}else{b[a]=d[a]
}}}}else{b=d
}}}return b
};
YAHOO.register("autocomplete",YAHOO.widget.AutoComplete,{version:"2.8.0r4",build:"2449"});
var desktopExtn=".desktop";
var tabletExtn=".tablet";
var mobileExtn=".mobile";
var renditionsPath="/_jcr_content/renditions/cq5dam.web.";
function setImage(c,a,b){var d=a+b;
switch(d){case"1:1.desktop":c=c+renditionsPath+"231.231.desktop.jpeg";
break;
case"4:1.desktop":c=c+renditionsPath+"1400.350.desktop.jpeg";
break;
case"2:1.desktop":c=c+renditionsPath+"700.350.desktop.jpeg";
break;
case"1:1.mobile":c=c+renditionsPath+"250.250.mobile.jpeg";
break;
case"4:1.mobile":c=c+renditionsPath+"768.192.mobile.jpeg";
break;
case"2:1.mobile":c=c+renditionsPath+"400.200.mobile.jpeg";
break;
case"1:1.tablet":c=c+renditionsPath+"350.350.tablet.jpeg";
break;
case"4:1.tablet":c=c+renditionsPath+"1024.256.tablet.jpeg";
break;
case"2:1.tablet":c=c+renditionsPath+"500.250.tablet.jpeg";
break
}return c
}function setAllImgsRendition(){var a=$("img[data-orgsrc]");
if(a!=null){for(var d=0;
d<a.length;
d++){var b=$(a[d]);
var f=b.attr("data-orgsrc");
var e=b.attr("data-aspectratio");
if(f!=""){var c=f.indexOf("jcr:content");
if(c!=-1){f=(f.substring(0,c-1))
}if(matchMedia("(max-width: 767px)").matches){b.attr("src",setImage(f,e,mobileExtn))
}else{if(matchMedia("(min-width: 768px) and (max-width: 1023px)").matches){b.attr("src",setImage(f,e,tabletExtn))
}else{if(matchMedia("(min-width: 1024px)").matches){b.attr("src",setImage(f,e,desktopExtn))
}}}}}}}function setAllDesktopImages(){var a=$("img[data-orgsrc]");
if(a!=null){for(var c=0;
c<a.length;
c++){var b=$(a[c]);
var e=b.attr("data-orgsrc");
var d=b.attr("data-aspectratio");
b.attr("src",setImage(e,d,desktopExtn))
}}}var mboxCopyright="Copyright 1996-2012. Adobe Systems Incorporated. All rights reserved.";
mboxUrlBuilder=function(d,c){this.a=d;
this.b=c;
this.c=new Array();
this.d=function(a){return a
};
this.f=null
};
mboxUrlBuilder.prototype.addParameter=function(f,e){var d=new RegExp("('|\")");
if(d.exec(f)){throw"Parameter '"+f+"' contains invalid characters"
}for(var c=0;
c<this.c.length;
c++){var b=this.c[c];
if(b.name==f){b.value=e;
return this
}}var a=new Object();
a.name=f;
a.value=e;
this.c[this.c.length]=a;
return this
};
mboxUrlBuilder.prototype.addParameters=function(d){if(!d){return this
}for(var b=0;
b<d.length;
b++){var a=d[b].indexOf("=");
if(a==-1||a==0){continue
}this.addParameter(d[b].substring(0,a),d[b].substring(a+1,d[b].length))
}return this
};
mboxUrlBuilder.prototype.setServerType=function(a){this.o=a
};
mboxUrlBuilder.prototype.setBasePath=function(a){this.f=a
};
mboxUrlBuilder.prototype.setUrlProcessAction=function(a){this.d=a
};
mboxUrlBuilder.prototype.buildUrl=function(){var f=this.f?this.f:"/m2/"+this.b+"/mbox/"+this.o;
var d=document.location.protocol=="file:"?"http:":document.location.protocol;
var g=d+"//"+this.a+f;
var c=g.indexOf("?")!=-1?"&":"?";
for(var b=0;
b<this.c.length;
b++){var a=this.c[b];
g+=c+encodeURIComponent(a.name)+"="+encodeURIComponent(a.value);
c="&"
}return this.t(this.d(g))
};
mboxUrlBuilder.prototype.getParameters=function(){return this.c
};
mboxUrlBuilder.prototype.setParameters=function(a){this.c=a
};
mboxUrlBuilder.prototype.clone=function(){var b=new mboxUrlBuilder(this.a,this.b);
b.setServerType(this.o);
b.setBasePath(this.f);
b.setUrlProcessAction(this.d);
for(var a=0;
a<this.c.length;
a++){b.addParameter(this.c[a].name,this.c[a].value)
}return b
};
mboxUrlBuilder.prototype.t=function(a){return a.replace(/\"/g,"&quot;").replace(/>/g,"&gt;")
};
mboxStandardFetcher=function(){};
mboxStandardFetcher.prototype.getType=function(){return"standard"
};
mboxStandardFetcher.prototype.fetch=function(a){a.setServerType(this.getType());
document.write('<script src="'+a.buildUrl()+'" language="JavaScript"><\/script>')
};
mboxStandardFetcher.prototype.cancel=function(){};
mboxAjaxFetcher=function(){};
mboxAjaxFetcher.prototype.getType=function(){return"ajax"
};
mboxAjaxFetcher.prototype.fetch=function(a){a.setServerType(this.getType());
var b=a.buildUrl();
this.x=document.createElement("script");
this.x.src=b;
document.body.appendChild(this.x)
};
mboxAjaxFetcher.prototype.cancel=function(){};
mboxMap=function(){this.y=new Object();
this.z=new Array()
};
mboxMap.prototype.put=function(a,b){if(!this.y[a]){this.z[this.z.length]=a
}this.y[a]=b
};
mboxMap.prototype.get=function(a){return this.y[a]
};
mboxMap.prototype.remove=function(a){this.y[a]=undefined
};
mboxMap.prototype.each=function(d){for(var b=0;
b<this.z.length;
b++){var a=this.z[b];
var c=this.y[a];
if(c){var e=d(a,c);
if(e===false){break
}}}};
mboxFactory=function(e,a,d){this.E=false;
this.C=e;
this.D=d;
this.F=new mboxList();
mboxFactories.put(d,this);
this.G=typeof document.createElement("div").replaceChild!="undefined"&&(function(){return true
})()&&typeof document.getElementById!="undefined"&&typeof(window.attachEvent||document.addEventListener||window.addEventListener)!="undefined"&&typeof encodeURIComponent!="undefined";
this.H=this.G&&mboxGetPageParameter("mboxDisable")==null;
var c=d=="default";
this.J=new mboxCookieManager("mbox"+(c?"":("-"+d)),(function(){return mboxCookiePageDomain()
})());
this.H=this.H&&this.J.isEnabled()&&(this.J.getCookie("disable")==null);
if(this.isAdmin()){this.enable()
}this.K();
this.L=mboxGenerateId();
this.M=mboxScreenHeight();
this.N=mboxScreenWidth();
this.O=mboxBrowserWidth();
this.P=mboxBrowserHeight();
this.Q=mboxScreenColorDepth();
this.R=mboxBrowserTimeOffset();
this.S=new mboxSession(this.L,"mboxSession","session",31*60,this.J);
this.T=new mboxPC("PC",1209600,this.J);
this.w=new mboxUrlBuilder(e,a);
this.U(this.w,c);
this.V=new Date().getTime();
this.W=this.V;
var f=this;
this.addOnLoad(function(){f.W=new Date().getTime()
});
if(this.G){this.addOnLoad(function(){f.E=true;
f.getMboxes().each(function(b){b.setFetcher(new mboxAjaxFetcher());
b.finalize()
})
});
if(this.H){this.limitTraffic(100,10368000);
this.Z();
this._=new mboxSignaler(function(b,g){return f.create(b,g)
},this.J)
}}};
mboxFactory.prototype.isEnabled=function(){return this.H
};
mboxFactory.prototype.getDisableReason=function(){return this.J.getCookie("disable")
};
mboxFactory.prototype.isSupported=function(){return this.G
};
mboxFactory.prototype.disable=function(b,a){if(typeof b=="undefined"){b=60*60
}if(typeof a=="undefined"){a="unspecified"
}if(!this.isAdmin()){this.H=false;
this.J.setCookie("disable",a,b)
}};
mboxFactory.prototype.enable=function(){this.H=true;
this.J.deleteCookie("disable")
};
mboxFactory.prototype.isAdmin=function(){return document.location.href.indexOf("mboxEnv")!=-1
};
mboxFactory.prototype.limitTraffic=function(a,b){};
mboxFactory.prototype.addOnLoad=function(a){if(this.isDomLoaded()){a()
}else{var b=false;
var c=function(){if(b){return
}b=true;
a()
};
this.hb.push(c);
if(this.isDomLoaded()&&!b){c()
}}};
mboxFactory.prototype.getEllapsedTime=function(){return this.W-this.V
};
mboxFactory.prototype.getEllapsedTimeUntil=function(a){return a-this.V
};
mboxFactory.prototype.getMboxes=function(){return this.F
};
mboxFactory.prototype.get=function(b,a){return this.F.get(b).getById(a||0)
};
mboxFactory.prototype.update=function(a,d){if(!this.isEnabled()){return
}if(!this.isDomLoaded()){var b=this;
this.addOnLoad(function(){b.update(a,d)
});
return
}if(this.F.get(a).length()==0){throw"Mbox "+a+" is not defined"
}this.F.get(a).each(function(c){c.getUrlBuilder().addParameter("mboxPage",mboxGenerateId());
c.load(d)
})
};
mboxFactory.prototype.create=function(o,k,h){if(!this.isSupported()){return null
}var j=this.w.clone();
j.addParameter("mboxCount",this.F.length()+1);
j.addParameters(k);
var n=this.F.get(o).length();
var d=this.D+"-"+o+"-"+n;
var m;
if(h){m=new mboxLocatorNode(h)
}else{if(this.E){throw"The page has already been loaded, can't write marker"
}m=new mboxLocatorDefault(d)
}try{var b=this;
var g="mboxImported-"+d;
var a=new mbox(o,n,j,m,g);
if(this.H){a.setFetcher(this.E?new mboxAjaxFetcher():new mboxStandardFetcher())
}a.setOnError(function(c,e){a.setMessage(c);
a.activate();
if(!a.isActivated()){b.disable(60*60,c);
window.location.reload(false)
}});
this.F.add(a)
}catch(l){this.disable();
throw'Failed creating mbox "'+o+'", the error was: '+l
}var f=new Date();
j.addParameter("mboxTime",f.getTime()-(f.getTimezoneOffset()*60000));
return a
};
mboxFactory.prototype.getCookieManager=function(){return this.J
};
mboxFactory.prototype.getPageId=function(){return this.L
};
mboxFactory.prototype.getPCId=function(){return this.T
};
mboxFactory.prototype.getSessionId=function(){return this.S
};
mboxFactory.prototype.getSignaler=function(){return this._
};
mboxFactory.prototype.getUrlBuilder=function(){return this.w
};
mboxFactory.prototype.U=function(b,a){b.addParameter("mboxHost",document.location.hostname).addParameter("mboxSession",this.S.getId());
if(!a){b.addParameter("mboxFactoryId",this.D)
}if(this.T.getId()!=null){b.addParameter("mboxPC",this.T.getId())
}b.addParameter("mboxPage",this.L);
b.addParameter("screenHeight",this.M);
b.addParameter("screenWidth",this.N);
b.addParameter("browserWidth",this.O);
b.addParameter("browserHeight",this.P);
b.addParameter("browserTimeOffset",this.R);
b.addParameter("colorDepth",this.Q);
b.setUrlProcessAction(function(d){d+="&mboxURL="+encodeURIComponent(document.location);
var c=encodeURIComponent(document.referrer);
if(d.length+c.length<2000){d+="&mboxReferrer="+c
}d+="&mboxVersion="+mboxVersion;
return d
})
};
mboxFactory.prototype.sb=function(){return""
};
mboxFactory.prototype.Z=function(){document.write("<style>.mboxDefault { visibility:hidden; }</style>")
};
mboxFactory.prototype.isDomLoaded=function(){return this.E
};
mboxFactory.prototype.K=function(){if(this.hb!=null){return
}this.hb=new Array();
var a=this;
(function(){var b=document.addEventListener?"DOMContentLoaded":"onreadystatechange";
var c=false;
var d=function(){if(c){return
}c=true;
for(var f=0;
f<a.hb.length;
++f){a.hb[f]()
}};
if(document.addEventListener){document.addEventListener(b,function(){document.removeEventListener(b,arguments.callee,false);
d()
},false);
window.addEventListener("load",function(){document.removeEventListener("load",arguments.callee,false);
d()
},false)
}else{if(document.attachEvent){if(self!==self.top){document.attachEvent(b,function(){if(document.readyState==="complete"){document.detachEvent(b,arguments.callee);
d()
}})
}else{var e=function(){try{document.documentElement.doScroll("left");
d()
}catch(f){setTimeout(e,13)
}};
e()
}}}if(document.readyState==="complete"){d()
}})()
};
mboxSignaler=function(b,d){this.J=d;
var c=d.getCookieNames("signal-");
for(var e=0;
e<c.length;
e++){var g=c[e];
var a=d.getCookie(g).split("&");
var f=b(a[0],a);
f.load();
d.deleteCookie(g)
}};
mboxSignaler.prototype.signal=function(a,b){this.J.setCookie("signal-"+a,mboxShiftArray(arguments).join("&"),45*60)
};
mboxList=function(){this.F=new Array()
};
mboxList.prototype.add=function(a){if(a!=null){this.F[this.F.length]=a
}};
mboxList.prototype.get=function(b){var d=new mboxList();
for(var a=0;
a<this.F.length;
a++){var c=this.F[a];
if(c.getName()==b){d.add(c)
}}return d
};
mboxList.prototype.getById=function(a){return this.F[a]
};
mboxList.prototype.length=function(){return this.F.length
};
mboxList.prototype.each=function(b){if(typeof b!="function"){throw"Action must be a function, was: "+typeof(b)
}for(var a=0;
a<this.F.length;
a++){b(this.F[a])
}};
mboxLocatorDefault=function(a){this.g="mboxMarker-"+a;
document.write('<div id="'+this.g+'" style="visibility:hidden;display:none">&nbsp;</div>')
};
mboxLocatorDefault.prototype.locate=function(){var a=document.getElementById(this.g);
while(a!=null){if(a.nodeType==1){if(a.className=="mboxDefault"){return a
}}a=a.previousSibling
}return null
};
mboxLocatorDefault.prototype.force=function(){var a=document.createElement("div");
a.className="mboxDefault";
var b=document.getElementById(this.g);
b.parentNode.insertBefore(a,b);
return a
};
mboxLocatorNode=function(a){this.Eb=a
};
mboxLocatorNode.prototype.locate=function(){return typeof this.Eb=="string"?document.getElementById(this.Eb):this.Eb
};
mboxLocatorNode.prototype.force=function(){return null
};
mboxCreate=function(a){var b=mboxFactoryDefault.create(a,mboxShiftArray(arguments));
if(b){b.load()
}return b
};
mboxDefine=function(a,b){var c=mboxFactoryDefault.create(b,mboxShiftArray(mboxShiftArray(arguments)),a);
return c
};
mboxUpdate=function(a){mboxFactoryDefault.update(a,mboxShiftArray(arguments))
};
mbox=function(e,c,b,d,a){this.Kb=null;
this.Lb=0;
this.mb=d;
this.nb=a;
this.Mb=null;
this.Nb=new mboxOfferContent();
this.Fb=null;
this.w=b;
this.message="";
this.Ob=new Object();
this.Pb=0;
this.Ib=c;
this.g=e;
this.Qb();
b.addParameter("mbox",e).addParameter("mboxId",c);
this.Rb=function(){};
this.Sb=function(){};
this.Tb=null
};
mbox.prototype.getId=function(){return this.Ib
};
mbox.prototype.Qb=function(){if(this.g.length>250){throw"Mbox Name "+this.g+" exceeds max length of 250 characters."
}else{if(this.g.match(/^\s+|\s+$/g)){throw"Mbox Name "+this.g+" has leading/trailing whitespace(s)."
}}};
mbox.prototype.getName=function(){return this.g
};
mbox.prototype.getParameters=function(){var d=this.w.getParameters();
var b=new Array();
for(var a=0;
a<d.length;
a++){if(d[a].name.indexOf("mbox")!=0){b[b.length]=d[a].name+"="+d[a].value
}}return b
};
mbox.prototype.setOnLoad=function(a){this.Sb=a;
return this
};
mbox.prototype.setMessage=function(a){this.message=a;
return this
};
mbox.prototype.setOnError=function(a){this.Rb=a;
return this
};
mbox.prototype.setFetcher=function(a){if(this.Mb){this.Mb.cancel()
}this.Mb=a;
return this
};
mbox.prototype.getFetcher=function(){return this.Mb
};
mbox.prototype.load=function(d){if(this.Mb==null){return this
}this.setEventTime("load.start");
this.cancelTimeout();
this.Lb=0;
var a=(d&&d.length>0)?this.w.clone().addParameters(d):this.w;
this.Mb.fetch(a);
var b=this;
this.Vb=setTimeout(function(){b.Rb("browser timeout",b.Mb.getType())
},15000);
this.setEventTime("load.end");
return this
};
mbox.prototype.loaded=function(){this.cancelTimeout();
if(!this.activate()){var a=this;
setTimeout(function(){a.loaded()
},100)
}};
mbox.prototype.activate=function(){if(this.Lb){return this.Lb
}this.setEventTime("activate"+ ++this.Pb+".start");
if(this.show()){this.cancelTimeout();
this.Lb=1
}this.setEventTime("activate"+this.Pb+".end");
return this.Lb
};
mbox.prototype.isActivated=function(){return this.Lb
};
mbox.prototype.setOffer=function(a){if(a&&a.show&&a.setOnLoad){this.Nb=a
}else{throw"Invalid offer"
}return this
};
mbox.prototype.getOffer=function(){return this.Nb
};
mbox.prototype.show=function(){this.setEventTime("show.start");
var a=this.Nb.show(this);
this.setEventTime(a==1?"show.end.ok":"show.end");
return a
};
mbox.prototype.showContent=function(a){if(a==null){return 0
}if(this.Fb==null||!this.Fb.parentNode){this.Fb=this.getDefaultDiv();
if(this.Fb==null){return 0
}}if(this.Fb!=a){this.Xb(this.Fb);
this.Fb.parentNode.replaceChild(a,this.Fb);
this.Fb=a
}this.Yb(a);
this.Sb();
return 1
};
mbox.prototype.hide=function(){this.setEventTime("hide.start");
var a=this.showContent(this.getDefaultDiv());
this.setEventTime(a==1?"hide.end.ok":"hide.end.fail");
return a
};
mbox.prototype.finalize=function(){this.setEventTime("finalize.start");
this.cancelTimeout();
if(this.getDefaultDiv()==null){if(this.mb.force()!=null){this.setMessage("No default content, an empty one has been added")
}else{this.setMessage("Unable to locate mbox")
}}if(!this.activate()){this.hide();
this.setEventTime("finalize.end.hide")
}this.setEventTime("finalize.end.ok")
};
mbox.prototype.cancelTimeout=function(){if(this.Vb){clearTimeout(this.Vb)
}if(this.Mb!=null){this.Mb.cancel()
}};
mbox.prototype.getDiv=function(){return this.Fb
};
mbox.prototype.getDefaultDiv=function(){if(this.Tb==null){this.Tb=this.mb.locate()
}return this.Tb
};
mbox.prototype.setEventTime=function(a){this.Ob[a]=(new Date()).getTime()
};
mbox.prototype.getEventTimes=function(){return this.Ob
};
mbox.prototype.getImportName=function(){return this.nb
};
mbox.prototype.getURL=function(){return this.w.buildUrl()
};
mbox.prototype.getUrlBuilder=function(){return this.w
};
mbox.prototype._b=function(a){return a.style.display!="none"
};
mbox.prototype.Yb=function(a){this.ac(a,true)
};
mbox.prototype.Xb=function(a){this.ac(a,false)
};
mbox.prototype.ac=function(b,a){b.style.visibility=a?"visible":"hidden";
b.style.display=a?"block":"none"
};
mboxOfferContent=function(){this.Sb=function(){}
};
mboxOfferContent.prototype.show=function(a){var b=a.showContent(document.getElementById(a.getImportName()));
if(b==1){this.Sb()
}return b
};
mboxOfferContent.prototype.setOnLoad=function(a){this.Sb=a
};
mboxOfferAjax=function(a){this.Wb=a;
this.Sb=function(){}
};
mboxOfferAjax.prototype.setOnLoad=function(a){this.Sb=a
};
mboxOfferAjax.prototype.show=function(a){var c=document.createElement("div");
c.id=a.getImportName();
c.innerHTML=this.Wb;
var b=a.showContent(c);
if(b==1){this.Sb()
}return b
};
mboxOfferDefault=function(){this.Sb=function(){}
};
mboxOfferDefault.prototype.setOnLoad=function(a){this.Sb=a
};
mboxOfferDefault.prototype.show=function(a){var b=a.hide();
if(b==1){this.Sb()
}return b
};
mboxCookieManager=function mboxCookieManager(b,a){this.g=b;
this.dc=a==""||a.indexOf(".")==-1?"":"; domain="+a;
this.ec=new mboxMap();
this.loadCookies()
};
mboxCookieManager.prototype.isEnabled=function(){this.setCookie("check","true",60);
this.loadCookies();
return this.getCookie("check")=="true"
};
mboxCookieManager.prototype.setCookie=function(c,b,d){if(typeof c!="undefined"&&typeof b!="undefined"&&typeof d!="undefined"){var a=new Object();
a.name=c;
a.value=escape(b);
a.expireOn=Math.ceil(d+new Date().getTime()/1000);
this.ec.put(c,a);
this.saveCookies()
}};
mboxCookieManager.prototype.getCookie=function(b){var a=this.ec.get(b);
return a?unescape(a.value):null
};
mboxCookieManager.prototype.deleteCookie=function(a){this.ec.remove(a);
this.saveCookies()
};
mboxCookieManager.prototype.getCookieNames=function(a){var b=new Array();
this.ec.each(function(d,c){if(d.indexOf(a)==0){b[b.length]=d
}});
return b
};
mboxCookieManager.prototype.saveCookies=function(){var a=false;
var b="disable";
var c=new Array();
var d=0;
this.ec.each(function(h,f){if(!a||h===b){c[c.length]=h+"#"+f.value+"#"+f.expireOn;
if(d<f.expireOn){d=f.expireOn
}}});
var e=new Date(d*1000);
document.cookie=this.g+"="+c.join("|")+"; expires="+e.toGMTString()+"; path=/"+this.dc
};
mboxCookieManager.prototype.loadCookies=function(){this.ec=new mboxMap();
var g=document.cookie.indexOf(this.g+"=");
if(g!=-1){var a=document.cookie.indexOf(";",g);
if(a==-1){a=document.cookie.indexOf(",",g);
if(a==-1){a=document.cookie.length
}}var c=document.cookie.substring(g+this.g.length+1,a).split("|");
var e=Math.ceil(new Date().getTime()/1000);
for(var b=0;
b<c.length;
b++){var d=c[b].split("#");
if(e<=d[2]){var f=new Object();
f.name=d[0];
f.value=d[1];
f.expireOn=d[2];
this.ec.put(f.name,f)
}}}};
mboxSession=function(e,a,d,c,b){this.tc=a;
this.Ab=d;
this.uc=c;
this.J=b;
this.vc=false;
this.Ib=typeof mboxForceSessionId!="undefined"?mboxForceSessionId:mboxGetPageParameter(this.tc);
if(this.Ib==null||this.Ib.length==0){this.Ib=b.getCookie(d);
if(this.Ib==null||this.Ib.length==0){this.Ib=e;
this.vc=true
}}b.setCookie(d,this.Ib,c)
};
mboxSession.prototype.getId=function(){return this.Ib
};
mboxSession.prototype.forceId=function(a){this.Ib=a;
this.J.setCookie(this.Ab,this.Ib,this.uc)
};
mboxPC=function(c,b,a){this.Ab=c;
this.uc=b;
this.J=a;
this.Ib=typeof mboxForcePCId!="undefined"?mboxForcePCId:a.getCookie(c);
if(this.Ib!=null){a.setCookie(c,this.Ib,b)
}};
mboxPC.prototype.getId=function(){return this.Ib
};
mboxPC.prototype.forceId=function(a){if(this.Ib!=a){this.Ib=a;
this.J.setCookie(this.Ab,this.Ib,this.uc);
return true
}return false
};
mboxGetPageParameter=function(a){var d=null;
var b=new RegExp(a+"=([^&]*)");
var c=b.exec(document.location);
if(c!=null&&c.length>=2){d=c[1]
}return d
};
mboxSetCookie=function(b,a,c){return mboxFactoryDefault.getCookieManager().setCookie(b,a,c)
};
mboxGetCookie=function(a){return mboxFactoryDefault.getCookieManager().getCookie(a)
};
mboxCookiePageDomain=function(){var b=(/([^:]*)(:[0-9]{0,5})?/).exec(document.location.host)[1];
var a=/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/;
if(!a.exec(b)){var c=(/([^\.]+\.[^\.]{3}|[^\.]+\.[^\.]+\.[^\.]{2})$/).exec(b);
if(c){b=c[0]
}}return b?b:""
};
mboxShiftArray=function(c){var b=new Array();
for(var a=1;
a<c.length;
a++){b[b.length]=c[a]
}return b
};
mboxGenerateId=function(){return(new Date()).getTime()+"-"+Math.floor(Math.random()*999999)
};
mboxScreenHeight=function(){return screen.height
};
mboxScreenWidth=function(){return screen.width
};
mboxBrowserWidth=function(){return(window.innerWidth)?window.innerWidth:document.documentElement?document.documentElement.clientWidth:document.body.clientWidth
};
mboxBrowserHeight=function(){return(window.innerHeight)?window.innerHeight:document.documentElement?document.documentElement.clientHeight:document.body.clientHeight
};
mboxBrowserTimeOffset=function(){return -new Date().getTimezoneOffset()
};
mboxScreenColorDepth=function(){return screen.pixelDepth
};
if(typeof mboxVersion=="undefined"){var mboxVersion=41;
var mboxFactories=new mboxMap();
var mboxFactoryDefault=new mboxFactory("deloittetouchetohmat.tt.omtrdc.net","deloittetouchetohmat","default")
}if(mboxGetPageParameter("mboxDebug")!=null||mboxFactoryDefault.getCookieManager().getCookie("debug")!=null){setTimeout(function(){if(typeof mboxDebugLoaded=="undefined"){alert("Could not load the remote debug.\nPlease check your connection to Test&amp;Target servers")
}},60*60);
document.write('<script language="Javascript1.2" src="http://admin3.testandtarget.omniture.com/admin/mbox/mbox_debug.jsp?mboxServerHost=deloittetouchetohmat.tt.omtrdc.net&clientCode=deloittetouchetohmat"><\/script>')
}mboxScPluginFetcher=function(a,c){this.b=a;
this.Cc=c
};
mboxScPluginFetcher.prototype.Dc=function(a){a.setBasePath("/m2/"+this.b+"/sc/standard");
this.Ec(a);
var b=a.buildUrl();
b+="&scPluginVersion=1";
return b
};
mboxScPluginFetcher.prototype.Ec=function(a){var c=["dynamicVariablePrefix","visitorID","vmk","ppu","charSet","visitorNamespace","cookieDomainPeriods","cookieLifetime","pageName","currencyCode","variableProvider","channel","server","pageType","transactionID","purchaseID","campaign","state","zip","events","products","linkName","linkType","resolution","colorDepth","javascriptVersion","javaEnabled","cookiesEnabled","browserWidth","browserHeight","connectionType","homepage","pe","pev1","pev2","pev3","visitorSampling","visitorSamplingGroup","dynamicAccountSelection","dynamicAccountList","dynamicAccountMatch","trackDownloadLinks","trackExternalLinks","trackInlineStats","linkLeaveQueryString","linkDownloadFileTypes","linkExternalFilters","linkInternalFilters","linkTrackVars","linkTrackEvents","linkNames","lnk","eo"];
for(var b=0;
b<c.length;
b++){this.Gc(c[b],a)
}for(var b=1;
b<=75;
b++){this.Gc("prop"+b,a);
this.Gc("eVar"+b,a);
this.Gc("hier"+b,a)
}};
mboxScPluginFetcher.prototype.Gc=function(c,a){var b=this.Cc[c];
if(typeof(b)==="undefined"||b===null||b===""){return
}a.addParameter(c,b)
};
mboxScPluginFetcher.prototype.cancel=function(){};
mboxScPluginFetcher.prototype.fetch=function(a){a.setServerType(this.getType());
var b=this.Dc(a);
this.x=document.createElement("script");
this.x.src=b;
document.body.appendChild(this.x)
};
mboxScPluginFetcher.prototype.getType=function(){return"ajax"
};
function mboxLoadSCPlugin(a){if(!a){return null
}a.m_tt=function(c){var b=c.m_i("tt");
b.H=true;
b.b="deloittetouchetohmat";
b._t=function(){if(!this.isEnabled()){return
}var e=this.Jc();
if(e){var d=new mboxScPluginFetcher(this.b,this.s);
e.setFetcher(d);
e.load()
}};
b.isEnabled=function(){return this.H&&mboxFactoryDefault.isEnabled()
};
b.Jc=function(){var d=this.Kc();
var e=document.createElement("DIV");
return mboxFactoryDefault.create(d,new Array(),e)
};
b.Kc=function(){var d=this.s.events&&this.s.events.indexOf("purchase")!=-1;
return"SiteCatalyst: "+(d?"purchase":"event")
}
};
return a.loadModule("tt")
}function aam_tnt_cb(){if(typeof(arguments[0].stuff)!="undefined"&&arguments[0].stuff!=""){for(var b=0;
b<arguments[0].stuff.length;
b++){if(arguments[0].stuff[b].cn=="aam_tnt"){if(arguments[0].stuff[0].cv.split(",")){var a=arguments[0].stuff[b].cv.split(",");
var c=mboxFactoryDefault.getUrlBuilder();
c.addParameters(a)
}}}}}$(function(){function a(){setTimeout(function(){var b=window.innerWidth;
var c=$("#janrainModal div.janrain-capture-ui").outerWidth();
$("#janrainModal").css({left:(b-c)/2+"px",width:c+"px"});
$("#janrainModalOverlay").css("width",b+"px")
},0)
}$("#capture_signin_link").click(function(){a()
})
});
var shareimg=encodeURIComponent($('meta[property="og:image"]').attr("content"));
var sharedesc=encodeURIComponent($('meta[property="og:description"]').attr("content"));
var shareurl=encodeURIComponent($('meta[property="og:url"]').attr("content"));
var sharetitle=encodeURIComponent($('meta[property="og:title"]').attr("content"));
var sharesite=$('meta[name="twitter:site"]').attr("content").replace("@","");
var sharesitename=encodeURIComponent($('meta[property="og:site_name"]').attr("content"));
var fbAppId,facebookshare,shareclose,twittershare,linkedinshare,googleplusshare,emailshare,weiboshare,renrenshare,vkshare,pinterestshare;
$(function(){if($("#facebook-share").length!==0){fbAppId=$("li#facebook-share").attr("data-fbvalue");
shareclose=$("li#facebook-share").attr("data-fbredirect");
facebookshare="https://www.facebook.com/dialog/feed?&app_id="+fbAppId+"&link="+shareurl+"#~#&picture="+shareimg+"&name="+sharetitle+"&description="+sharedesc+"&redirect_uri="+shareclose+"&display=popup"
}if($("#twitter-share").length!==0){twittershare="https://twitter.com/intent/tweet?&url="+shareurl+"#~#&text="+sharetitle+"&via="+sharesite
}if($("#linkedin-share").length!==0){linkedinshare="https://www.linkedin.com/cws/share?&url="+shareurl+"#~#&mini=true&token=&ro=false&title="+sharetitle+"&isFramed=true&summary="+sharedesc+"&source="+sharesitename
}if($("#googleplus-share").length!==0){googleplusshare="https://plus.google.com/share?url="+shareurl+"#~#"
}if($("#email-share").length!==0){emailshare="mailto:?subject="+sharetitle+"&body="+sharedesc+"%0D%0A%0D%0A"+shareurl
}if($("#weibo-share").length!==0){weiboshare="http://service.weibo.com/share/share.php?url="+shareurl+"#~#&appkey=&title="+sharedesc+"&pic=&ralateUid=&language=zh_cn"
}if($("#renren-share").length!==0){renrenshare="http://share.renren.com/share/buttonshare.do?link="+shareurl+"#~#&title="+sharedesc
}if($("#vk-share").length!==0){vkshare="http://vkontakte.ru/share.php?url="+shareurl+"#~#&title="+sharetitle+"&description="+sharedesc+"&display=widget"
}if($("#xing-share").length!==0){xingshare="https://www.xing.com/social_plugins/share?url="+shareurl+"#~#&wtmc=XING&sc_p=xing-share"
}if($("#pinterest-share").length!==0){pinterestshare="https://pinterest.com/pin/create/button/?url="+shareurl+"#~#&media="+shareimg+"&description="+sharedesc
}});
var launchShare=function(c,a,b){trackSocialShareEvnets(c);
a=encodeURIComponent("?id="+a);
if(c==="email"){window.location.href=b+a
}else{b=b.replace("#~#",a);
switch(c){case"pinterest":window.open(b,"Share","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=280,width=600");
break;
case"twitter":window.open(b,"Share","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=280,width=600");
break;
default:window.open(b,"Share","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=480,width=600")
}}};
function trackSocialShareEvnets(c){if(c!=undefined){var a=new Array();
a[0]="event12";
a[1]="event32";
var b=new Object();
b.eVar54=c+"_share";
b.pageName=sc_currentPageName+"_SocialShare_"+c+"_share";
recordSitecatEvent(a,b,"SocialShare")
}}$(".social-share-links a").click(function(a){a.preventDefault()
});
var ssb={aConts:[],mouseY:0,N:0,asd:0,sc:0,sp:0,to:0,scrollbar:function(c){var b=document.getElementById(c);
if(!ssb.init()){return false
}var a=b.cloneNode(false);
a.style.overflow="hidden";
b.parentNode.appendChild(a);
a.appendChild(b);
b.style.position="absolute";
b.style.left=b.style.top="0px";
b.style.width=b.style.height="100%";
ssb.aConts[ssb.N++]=b;
b.sg=false;
b.st=this.create_div("ssb_st no-click-close",b,a);
b.sb=this.create_div("ssb_sb no-click-close",b,a);
b.su=this.create_div("ssb_up no-click-close icon-chevron-up",b,a);
b.sd=this.create_div("ssb_down no-click-close icon-chevron",b,a);
b.sb.ontouchstart=function(g){if(!this.cont.sg){try{if(!g){g=window.event
}var d=g.changedTouches;
ssb.asd=this.cont;
this.cont.yZ=d[0].screenY;
this.cont.sZ=b.scrollTop;
this.cont.sg=true;
this.className="ssb_sb ssb_sb_down"
}catch(f){}}return false
};
b.sb.onmousedown=function(d){if(!this.cont.sg){if(!d){d=window.event
}ssb.asd=this.cont;
this.cont.yZ=d.screenY;
this.cont.sZ=b.scrollTop;
this.cont.sg=true;
this.className="ssb_sb ssb_sb_down"
}return false
};
b.st.onmousedown=function(d){if(!d){d=window.event
}ssb.asd=this.cont;
ssb.mouseY=d.clientY+document.body.scrollTop+document.documentElement.scrollTop;
for(var f=this.cont,g=0;
f!=null;
f=f.offsetParent){g+=f.offsetTop
}this.cont.scrollTop=(ssb.mouseY-g-(this.cont.ratio*this.cont.offsetHeight/2)-this.cont.sw)/this.cont.ratio;
this.cont.sb.onmousedown(d)
};
b.su.onmousedown=b.su.ondblclick=function(d){ssb.mousedown(this,-1);
return false
};
b.sd.onmousedown=b.sd.ondblclick=function(d){ssb.mousedown(this,1);
return false
};
b.su.onmouseout=b.su.onmouseup=ssb.clear;
b.sd.onmouseout=b.sd.onmouseup=ssb.clear;
b.sb.onmouseover=function(d){if(!this.cont.sg){this.className="ssb_sb no-click-close ssb_sb_over"
}return false
};
b.sb.onmouseout=function(d){if(!this.cont.sg){this.className="ssb_sb no-click-close"
}return false
};
b.ssb_onscroll=function(){if(this.offsetHeight>0){this.ratio=(this.offsetHeight-2*this.sw)/this.scrollHeight;
this.sb.style.top=Math.floor(this.sw+this.scrollTop*this.ratio)+"px"
}};
b.sw=20;
b.ssb_onscroll();
ssb.refresh();
b.onscroll=b.ssb_onscroll;
return b
},init:function(){if(window.oper||(!window.addEventListener&&!window.attachEvent)){return false
}function a(d,c,b){if(window.addEventListener){d.addEventListener(c,b,false);
ssb.w3c=true;
return true
}if(window.attachEvent){return d.attachEvent("on"+c,b)
}return false
}a(window.document,"mousemove",ssb.onmousemove);
a(window.document,"touchmove",ssb.ontouchmove);
a(window.document,"mouseup",ssb.onmouseup);
a(window.document,"touchend",ssb.onmouseup);
a(window,"resize",ssb.refresh);
return true
},create_div:function(e,b,a){var d=document.createElement("div");
d.cont=b;
d.className=e;
a.appendChild(d);
return d
},clear:function(){clearTimeout(ssb.to);
ssb.sc=0;
return false
},refresh:function(){for(var a=0,c=ssb.N;
a<c;
a++){var b=ssb.aConts[a];
b.ssb_onscroll();
b.sb.style.width=b.st.style.width=b.su.style.width=b.su.style.height=b.sd.style.width=b.sd.style.height=b.sw+"px";
if(b.offsetHeight>0){b.sb.style.height=Math.ceil(Math.max(b.sw*0.5,b.ratio*b.offsetHeight)+1)+"px"
}}},arrow_scroll:function(){if(ssb.sc!=0){ssb.asd.scrollTop+=6*ssb.sc/ssb.asd.ratio;
ssb.to=setTimeout(ssb.arrow_scroll,ssb.sp);
ssb.sp=32
}},mousedown:function(b,a){if(ssb.sc==0){b.cont.sb.className="ssb_sb ssb_sb_down";
ssb.asd=b.cont;
ssb.sc=a;
ssb.sp=400;
ssb.arrow_scroll()
}},ontouchmove:function(a){if(!a){a=window.event
}ssb.mouseY=a.changedTouches[0].screenY;
if(ssb.asd.sg){ssb.asd.scrollTop=ssb.asd.sZ+(ssb.mouseY-ssb.asd.yZ)/ssb.asd.ratio
}},onmousemove:function(a){if(!a){a=window.event
}ssb.mouseY=a.screenY;
if(ssb.asd.sg){ssb.asd.scrollTop=ssb.asd.sZ+(ssb.mouseY-ssb.asd.yZ)/ssb.asd.ratio
}},onmouseup:function(b){if(!b){b=window.event
}var a=(b.target)?b.target:b.srcElement;
if(ssb.asd&&document.releasecapture){ssb.asd.releasecapture()
}document.onselectstart="";
ssb.clear();
ssb.asd.sg=false
}};
window.onload=function(){var a=$(".location-container");
if(a.length){ssb.scrollbar("site-selector");
$("#site-selector").removeClass("no-click-close").addClass("no-click-close");
document.getElementById("site-options").style.display="none";
$(".location-container").removeClass("visibility-hidden")
}};
var dCookie=new dcomCookies();
var cookieMsgAvailable=false;
var cookieData;
$(document).ready(function(){if((isEditMode===false)&&(parseInt($.browser.version,10)!==7)){$(document).on("click","#cookieaccept",function(b){var a=dCookie.createCookie();
if(a){$("body").animate({marginTop:0},"slow");
$(".cookie-container").slideUp("slow");
$(".cookie-container").remove()
}});
dCookie.CookiePopup()
}});
if(isEditMode===false){var lap=false;
$(window).resize(function(){if(lap!==false){clearTimeout(lap)
}if(!($(".ie").length)){$("body").css({marginTop:0});
$(".cookie-container").remove();
lap=setTimeout(dCookie.cookieOnResize,1000)
}})
}function dcomCookies(){var a=this;
this.cookieOnResize=function(){var b=new dcomCookies();
a.CookiePopup()
};
this.CookiePopup=function(){var c=this;
var b=c.getCookie("overlayDismissed");
if(b==null){if(!cookieMsgAvailable){$.getJSON("/deloitte/cookiemessage?a="+new Date().getTime(),function(d){}).done(function(d){cookieMsgAvailable=true;
cookieData=d;
if(d.overlayEnabled){c.setupCookieMessage(d.overlayMessage)
}})
}else{if(cookieData.overlayEnabled){c.setupCookieMessage(cookieData.overlayMessage)
}}}};
this.setupCookieMessage=function(c){var j=document.createElement("div");
$(j).addClass("cookie-container").attr("role","alertdialog").attr("aria-label",cookieLabel);
var b=document.createElement("form");
$(b).attr("id","cookieoptinform").attr("name","cookieoptinform");
var h=document.createElement("div");
$(h).addClass("cookie-popup");
var k=document.createElement("div");
$(k).addClass("cookie-msg").html(c);
var d=document.createElement("div");
$(d).addClass("accept-btn");
var l='<a class="cookie-accept" id="cookieaccept" role="button" href="#" ><i class="icon-check" ></i>'+buttonText+"</a>";
$(d).append(l);
$(h).append(k);
$(h).append(d);
$(b).append(h);
$(j).append(b);
$(j).css({top:"-9999px",display:"block"});
$("body").prepend(j);
$(".cookie-msg").css({width:$(".cookie-popup").width()-($(".accept-btn").width()+50)});
var g=$(".cookie-container").outerHeight(true);
var f=$(".cookie-popup");
var e=((g>60)?(g/2)-30:0);
$(j).css({top:"",display:"none"});
if($(".cookie-container")){$("body").animate({marginTop:g},"slow");
$(".cookie-container").slideDown("slow");
$(".accept-btn").css({"margin-top":e})
}};
this.getCookie=function(e){var d=e+"=";
var b=document.cookie.split(";");
for(var f=0;
f<b.length;
f++){var g=$.trim(b[f]);
if(g.indexOf(d)==0){return g.substring(d.length,g.length)
}}return null
};
this.createCookie=function(){var c="overlayDismissed";
var j=90;
var d=new Date();
d.setTime(d.getTime()+(j*24*60*60*1000));
var b="expires="+d.toGMTString();
var h="accept";
var g=(/([^:]*)(:[0-9]{0,5})?/).exec(document.location.host)[1];
var k=/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/;
if(!k.exec(g)){var f=(/([^\.]+\.[^\.]{3}|[^\.]+\.[^\.]+\.[^\.]{2})$/).exec(g);
if(f){g=f[0]
}}var e=g?g:"";
if(document.cookie=c+"=accept; domain=deloitte.com; expires="+d.toGMTString()+"; path=/"){return true
}else{return false
}}
}$(document).ready(function(){$("#searchform").append('<i class="icon-search submit-button"></i>');
$("#searchform > input:last-of-type").attr("value"," ");
$("#searchform .icon-search").click(function(){$("header .search #searchform").submit()
})
});