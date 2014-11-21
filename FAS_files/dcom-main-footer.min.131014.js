/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */
(function(a3,aC){var x,ag,o=a3.document,aJ=a3.location,d=a3.navigator,bh=a3.jQuery,J=a3.$,an=Array.prototype.push,a5=Array.prototype.slice,aL=Array.prototype.indexOf,A=Object.prototype.toString,W=Object.prototype.hasOwnProperty,aP=String.prototype.trim,bH=function(e,b0){return new bH.fn.init(e,b0,x)
},by=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,ab=/\S/,aW=/\s+/,D=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bp=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,a=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,bg=/^[\],:{}\s]*$/,bj=/(?:^|:|,)(?:\s*\[)+/g,bE=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,a1=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,bQ=/^-ms-/,aV=/-([\da-z])/gi,O=function(e,b0){return(b0+"").toUpperCase()
},aG=function(){if(o.addEventListener){o.removeEventListener("DOMContentLoaded",aG,false);
bH.ready()
}else{if(o.readyState==="complete"){o.detachEvent("onreadystatechange",aG);
bH.ready()
}}},aa={};
bH.fn=bH.prototype={constructor:bH,init:function(e,b3,b2){var b1,b4,b0,b5;
if(!e){return this
}if(e.nodeType){this.context=this[0]=e;
this.length=1;
return this
}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){b1=[null,e,null]
}else{b1=bp.exec(e)
}if(b1&&(b1[1]||!b3)){if(b1[1]){b3=b3 instanceof bH?b3[0]:b3;
b5=(b3&&b3.nodeType?b3.ownerDocument||b3:o);
e=bH.parseHTML(b1[1],b5,true);
if(a.test(b1[1])&&bH.isPlainObject(b3)){this.attr.call(e,b3,true)
}return bH.merge(this,e)
}else{b4=o.getElementById(b1[2]);
if(b4&&b4.parentNode){if(b4.id!==b1[2]){return b2.find(e)
}this.length=1;
this[0]=b4
}this.context=o;
this.selector=e;
return this
}}else{if(!b3||b3.jquery){return(b3||b2).find(e)
}else{return this.constructor(b3).find(e)
}}}else{if(bH.isFunction(e)){return b2.ready(e)
}}if(e.selector!==aC){this.selector=e.selector;
this.context=e.context
}return bH.makeArray(e,this)
},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length
},toArray:function(){return a5.call(this)
},get:function(e){return e==null?this.toArray():(e<0?this[this.length+e]:this[e])
},pushStack:function(b0,b2,e){var b1=bH.merge(this.constructor(),b0);
b1.prevObject=this;
b1.context=this.context;
if(b2==="find"){b1.selector=this.selector+(this.selector?" ":"")+e
}else{if(b2){b1.selector=this.selector+"."+b2+"("+e+")"
}}return b1
},each:function(b0,e){return bH.each(this,b0,e)
},ready:function(e){bH.ready.promise().done(e);
return this
},eq:function(e){e=+e;
return e===-1?this.slice(e):this.slice(e,e+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(a5.apply(this,arguments),"slice",a5.call(arguments).join(","))
},map:function(e){return this.pushStack(bH.map(this,function(b1,b0){return e.call(b1,b0,b1)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:an,sort:[].sort,splice:[].splice};
bH.fn.init.prototype=bH.fn;
bH.extend=bH.fn.extend=function(){var b8,b1,e,b0,b5,b6,b4=arguments[0]||{},b3=1,b2=arguments.length,b7=false;
if(typeof b4==="boolean"){b7=b4;
b4=arguments[1]||{};
b3=2
}if(typeof b4!=="object"&&!bH.isFunction(b4)){b4={}
}if(b2===b3){b4=this;
--b3
}for(;
b3<b2;
b3++){if((b8=arguments[b3])!=null){for(b1 in b8){e=b4[b1];
b0=b8[b1];
if(b4===b0){continue
}if(b7&&b0&&(bH.isPlainObject(b0)||(b5=bH.isArray(b0)))){if(b5){b5=false;
b6=e&&bH.isArray(e)?e:[]
}else{b6=e&&bH.isPlainObject(e)?e:{}
}b4[b1]=bH.extend(b7,b6,b0)
}else{if(b0!==aC){b4[b1]=b0
}}}}}return b4
};
bH.extend({noConflict:function(e){if(a3.$===bH){a3.$=J
}if(e&&a3.jQuery===bH){a3.jQuery=bh
}return bH
},isReady:false,readyWait:1,holdReady:function(e){if(e){bH.readyWait++
}else{bH.ready(true)
}},ready:function(e){if(e===true?--bH.readyWait:bH.isReady){return
}if(!o.body){return setTimeout(bH.ready,1)
}bH.isReady=true;
if(e!==true&&--bH.readyWait>0){return
}ag.resolveWith(o,[bH]);
if(bH.fn.trigger){bH(o).trigger("ready").off("ready")
}},isFunction:function(e){return bH.type(e)==="function"
},isArray:Array.isArray||function(e){return bH.type(e)==="array"
},isWindow:function(e){return e!=null&&e==e.window
},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)
},type:function(e){return e==null?String(e):aa[A.call(e)]||"object"
},isPlainObject:function(b2){if(!b2||bH.type(b2)!=="object"||b2.nodeType||bH.isWindow(b2)){return false
}try{if(b2.constructor&&!W.call(b2,"constructor")&&!W.call(b2.constructor.prototype,"isPrototypeOf")){return false
}}catch(b1){return false
}var b0;
for(b0 in b2){}return b0===aC||W.call(b2,b0)
},isEmptyObject:function(b0){var e;
for(e in b0){return false
}return true
},error:function(e){throw new Error(e)
},parseHTML:function(b2,b1,e){var b0;
if(!b2||typeof b2!=="string"){return null
}if(typeof b1==="boolean"){e=b1;
b1=0
}b1=b1||o;
if((b0=a.exec(b2))){return[b1.createElement(b0[1])]
}b0=bH.buildFragment([b2],b1,e?null:[]);
return bH.merge([],(b0.cacheable?bH.clone(b0.fragment):b0.fragment).childNodes)
},parseJSON:function(e){if(!e||typeof e!=="string"){return null
}e=bH.trim(e);
if(a3.JSON&&a3.JSON.parse){return a3.JSON.parse(e)
}if(bg.test(e.replace(bE,"@").replace(a1,"]").replace(bj,""))){return(new Function("return "+e))()
}bH.error("Invalid JSON: "+e)
},parseXML:function(b2){var b0,b1;
if(!b2||typeof b2!=="string"){return null
}try{if(a3.DOMParser){b1=new DOMParser();
b0=b1.parseFromString(b2,"text/xml")
}else{b0=new ActiveXObject("Microsoft.XMLDOM");
b0.async="false";
b0.loadXML(b2)
}}catch(b3){b0=aC
}if(!b0||!b0.documentElement||b0.getElementsByTagName("parsererror").length){bH.error("Invalid XML: "+b2)
}return b0
},noop:function(){},globalEval:function(e){if(e&&ab.test(e)){(a3.execScript||function(b0){a3["eval"].call(a3,b0)
})(e)
}},camelCase:function(e){return e.replace(bQ,"ms-").replace(aV,O)
},nodeName:function(b0,e){return b0.nodeName&&b0.nodeName.toLowerCase()===e.toLowerCase()
},each:function(b4,b5,b1){var b0,b2=0,b3=b4.length,e=b3===aC||bH.isFunction(b4);
if(b1){if(e){for(b0 in b4){if(b5.apply(b4[b0],b1)===false){break
}}}else{for(;
b2<b3;
){if(b5.apply(b4[b2++],b1)===false){break
}}}}else{if(e){for(b0 in b4){if(b5.call(b4[b0],b0,b4[b0])===false){break
}}}else{for(;
b2<b3;
){if(b5.call(b4[b2],b2,b4[b2++])===false){break
}}}}return b4
},trim:aP&&!aP.call("\uFEFF\xA0")?function(e){return e==null?"":aP.call(e)
}:function(e){return e==null?"":(e+"").replace(D,"")
},makeArray:function(e,b1){var b2,b0=b1||[];
if(e!=null){b2=bH.type(e);
if(e.length==null||b2==="string"||b2==="function"||b2==="regexp"||bH.isWindow(e)){an.call(b0,e)
}else{bH.merge(b0,e)
}}return b0
},inArray:function(b2,b0,b1){var e;
if(b0){if(aL){return aL.call(b0,b2,b1)
}e=b0.length;
b1=b1?b1<0?Math.max(0,e+b1):b1:0;
for(;
b1<e;
b1++){if(b1 in b0&&b0[b1]===b2){return b1
}}}return -1
},merge:function(b3,b1){var e=b1.length,b2=b3.length,b0=0;
if(typeof e==="number"){for(;
b0<e;
b0++){b3[b2++]=b1[b0]
}}else{while(b1[b0]!==aC){b3[b2++]=b1[b0++]
}}b3.length=b2;
return b3
},grep:function(b0,b5,e){var b4,b1=[],b2=0,b3=b0.length;
e=!!e;
for(;
b2<b3;
b2++){b4=!!b5(b0[b2],b2);
if(e!==b4){b1.push(b0[b2])
}}return b1
},map:function(e,b6,b7){var b4,b5,b3=[],b1=0,b0=e.length,b2=e instanceof bH||b0!==aC&&typeof b0==="number"&&((b0>0&&e[0]&&e[b0-1])||b0===0||bH.isArray(e));
if(b2){for(;
b1<b0;
b1++){b4=b6(e[b1],b1,b7);
if(b4!=null){b3[b3.length]=b4
}}}else{for(b5 in e){b4=b6(e[b5],b5,b7);
if(b4!=null){b3[b3.length]=b4
}}}return b3.concat.apply([],b3)
},guid:1,proxy:function(b3,b2){var b1,e,b0;
if(typeof b2==="string"){b1=b3[b2];
b2=b3;
b3=b1
}if(!bH.isFunction(b3)){return aC
}e=a5.call(arguments,2);
b0=function(){return b3.apply(b2,e.concat(a5.call(arguments)))
};
b0.guid=b3.guid=b3.guid||bH.guid++;
return b0
},access:function(e,b5,b8,b6,b3,b9,b7){var b1,b4=b8==null,b2=0,b0=e.length;
if(b8&&typeof b8==="object"){for(b2 in b8){bH.access(e,b5,b2,b8[b2],1,b9,b6)
}b3=1
}else{if(b6!==aC){b1=b7===aC&&bH.isFunction(b6);
if(b4){if(b1){b1=b5;
b5=function(cb,ca,cc){return b1.call(bH(cb),cc)
}
}else{b5.call(e,b6);
b5=null
}}if(b5){for(;
b2<b0;
b2++){b5(e[b2],b8,b1?b6.call(e[b2],b2,b5(e[b2],b8)):b6,b7)
}}b3=1
}}return b3?e:b4?b5.call(e):b0?b5(e[0],b8):b9
},now:function(){return(new Date()).getTime()
}});
bH.ready.promise=function(b3){if(!ag){ag=bH.Deferred();
if(o.readyState==="complete"){setTimeout(bH.ready,1)
}else{if(o.addEventListener){o.addEventListener("DOMContentLoaded",aG,false);
a3.addEventListener("load",bH.ready,false)
}else{o.attachEvent("onreadystatechange",aG);
a3.attachEvent("onload",bH.ready);
var b2=false;
try{b2=a3.frameElement==null&&o.documentElement
}catch(b1){}if(b2&&b2.doScroll){(function b0(){if(!bH.isReady){try{b2.doScroll("left")
}catch(b4){return setTimeout(b0,50)
}bH.ready()
}})()
}}}}return ag.promise(b3)
};
bH.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b0,e){aa["[object "+e+"]"]=e.toLowerCase()
});
x=bH(o);
var bV={};
function ad(b0){var e=bV[b0]={};
bH.each(b0.split(aW),function(b2,b1){e[b1]=true
});
return e
}bH.Callbacks=function(b9){b9=typeof b9==="string"?(bV[b9]||ad(b9)):bH.extend({},b9);
var b2,e,b3,b1,b4,b5,b6=[],b7=!b9.once&&[],b0=function(ca){b2=b9.memory&&ca;
e=true;
b5=b1||0;
b1=0;
b4=b6.length;
b3=true;
for(;
b6&&b5<b4;
b5++){if(b6[b5].apply(ca[0],ca[1])===false&&b9.stopOnFalse){b2=false;
break
}}b3=false;
if(b6){if(b7){if(b7.length){b0(b7.shift())
}}else{if(b2){b6=[]
}else{b8.disable()
}}}},b8={add:function(){if(b6){var cb=b6.length;
(function ca(cc){bH.each(cc,function(ce,cd){var cf=bH.type(cd);
if(cf==="function"){if(!b9.unique||!b8.has(cd)){b6.push(cd)
}}else{if(cd&&cd.length&&cf!=="string"){ca(cd)
}}})
})(arguments);
if(b3){b4=b6.length
}else{if(b2){b1=cb;
b0(b2)
}}}return this
},remove:function(){if(b6){bH.each(arguments,function(cc,ca){var cb;
while((cb=bH.inArray(ca,b6,cb))>-1){b6.splice(cb,1);
if(b3){if(cb<=b4){b4--
}if(cb<=b5){b5--
}}}})
}return this
},has:function(ca){return bH.inArray(ca,b6)>-1
},empty:function(){b6=[];
return this
},disable:function(){b6=b7=b2=aC;
return this
},disabled:function(){return !b6
},lock:function(){b7=aC;
if(!b2){b8.disable()
}return this
},locked:function(){return !b7
},fireWith:function(cb,ca){ca=ca||[];
ca=[cb,ca.slice?ca.slice():ca];
if(b6&&(!e||b7)){if(b3){b7.push(ca)
}else{b0(ca)
}}return this
},fire:function(){b8.fireWith(this,arguments);
return this
},fired:function(){return !!e
}};
return b8
};
bH.extend({Deferred:function(b1){var b0=[["resolve","done",bH.Callbacks("once memory"),"resolved"],["reject","fail",bH.Callbacks("once memory"),"rejected"],["notify","progress",bH.Callbacks("memory")]],b2="pending",b3={state:function(){return b2
},always:function(){e.done(arguments).fail(arguments);
return this
},then:function(){var b4=arguments;
return bH.Deferred(function(b5){bH.each(b0,function(b7,b6){var b9=b6[0],b8=b4[b7];
e[b6[1]](bH.isFunction(b8)?function(){var ca=b8.apply(this,arguments);
if(ca&&bH.isFunction(ca.promise)){ca.promise().done(b5.resolve).fail(b5.reject).progress(b5.notify)
}else{b5[b9+"With"](this===e?b5:this,[ca])
}}:b5[b9])
});
b4=null
}).promise()
},promise:function(b4){return b4!=null?bH.extend(b4,b3):b3
}},e={};
b3.pipe=b3.then;
bH.each(b0,function(b5,b4){var b7=b4[2],b6=b4[3];
b3[b4[1]]=b7.add;
if(b6){b7.add(function(){b2=b6
},b0[b5^1][2].disable,b0[2][2].lock)
}e[b4[0]]=b7.fire;
e[b4[0]+"With"]=b7.fireWith
});
b3.promise(e);
if(b1){b1.call(e,e)
}return e
},when:function(b3){var b1=0,b5=a5.call(arguments),e=b5.length,b0=e!==1||(b3&&bH.isFunction(b3.promise))?e:0,b8=b0===1?b3:bH.Deferred(),b2=function(ca,cb,b9){return function(cc){cb[ca]=this;
b9[ca]=arguments.length>1?a5.call(arguments):cc;
if(b9===b7){b8.notifyWith(cb,b9)
}else{if(!(--b0)){b8.resolveWith(cb,b9)
}}}
},b7,b4,b6;
if(e>1){b7=new Array(e);
b4=new Array(e);
b6=new Array(e);
for(;
b1<e;
b1++){if(b5[b1]&&bH.isFunction(b5[b1].promise)){b5[b1].promise().done(b2(b1,b6,b5)).fail(b8.reject).progress(b2(b1,b4,b7))
}else{--b0
}}}if(!b0){b8.resolveWith(b6,b5)
}return b8.promise()
}});
bH.support=(function(){var cc,cb,b9,ca,b3,b8,b7,b5,b4,b2,b0,b1=o.createElement("div");
b1.setAttribute("className","t");
b1.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
cb=b1.getElementsByTagName("*");
b9=b1.getElementsByTagName("a")[0];
if(!cb||!b9||!cb.length){return{}
}ca=o.createElement("select");
b3=ca.appendChild(o.createElement("option"));
b8=b1.getElementsByTagName("input")[0];
b9.style.cssText="top:1px;float:left;opacity:.5";
cc={leadingWhitespace:(b1.firstChild.nodeType===3),tbody:!b1.getElementsByTagName("tbody").length,htmlSerialize:!!b1.getElementsByTagName("link").length,style:/top/.test(b9.getAttribute("style")),hrefNormalized:(b9.getAttribute("href")==="/a"),opacity:/^0.5/.test(b9.style.opacity),cssFloat:!!b9.style.cssFloat,checkOn:(b8.value==="on"),optSelected:b3.selected,getSetAttribute:b1.className!=="t",enctype:!!o.createElement("form").enctype,html5Clone:o.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:(o.compatMode==="CSS1Compat"),submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};
b8.checked=true;
cc.noCloneChecked=b8.cloneNode(true).checked;
ca.disabled=true;
cc.optDisabled=!b3.disabled;
try{delete b1.test
}catch(b6){cc.deleteExpando=false
}if(!b1.addEventListener&&b1.attachEvent&&b1.fireEvent){b1.attachEvent("onclick",b0=function(){cc.noCloneEvent=false
});
b1.cloneNode(true).fireEvent("onclick");
b1.detachEvent("onclick",b0)
}b8=o.createElement("input");
b8.value="t";
b8.setAttribute("type","radio");
cc.radioValue=b8.value==="t";
b8.setAttribute("checked","checked");
b8.setAttribute("name","t");
b1.appendChild(b8);
b7=o.createDocumentFragment();
b7.appendChild(b1.lastChild);
cc.checkClone=b7.cloneNode(true).cloneNode(true).lastChild.checked;
cc.appendChecked=b8.checked;
b7.removeChild(b8);
b7.appendChild(b1);
if(b1.attachEvent){for(b4 in {submit:true,change:true,focusin:true}){b5="on"+b4;
b2=(b5 in b1);
if(!b2){b1.setAttribute(b5,"return;");
b2=(typeof b1[b5]==="function")
}cc[b4+"Bubbles"]=b2
}}bH(function(){var cd,ch,cf,cg,ce="padding:0;margin:0;border:0;display:block;overflow:hidden;",e=o.getElementsByTagName("body")[0];
if(!e){return
}cd=o.createElement("div");
cd.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
e.insertBefore(cd,e.firstChild);
ch=o.createElement("div");
cd.appendChild(ch);
ch.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
cf=ch.getElementsByTagName("td");
cf[0].style.cssText="padding:0;margin:0;border:0;display:none";
b2=(cf[0].offsetHeight===0);
cf[0].style.display="";
cf[1].style.display="none";
cc.reliableHiddenOffsets=b2&&(cf[0].offsetHeight===0);
ch.innerHTML="";
ch.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
cc.boxSizing=(ch.offsetWidth===4);
cc.doesNotIncludeMarginInBodyOffset=(e.offsetTop!==1);
if(a3.getComputedStyle){cc.pixelPosition=(a3.getComputedStyle(ch,null)||{}).top!=="1%";
cc.boxSizingReliable=(a3.getComputedStyle(ch,null)||{width:"4px"}).width==="4px";
cg=o.createElement("div");
cg.style.cssText=ch.style.cssText=ce;
cg.style.marginRight=cg.style.width="0";
ch.style.width="1px";
ch.appendChild(cg);
cc.reliableMarginRight=!parseFloat((a3.getComputedStyle(cg,null)||{}).marginRight)
}if(typeof ch.style.zoom!=="undefined"){ch.innerHTML="";
ch.style.cssText=ce+"width:1px;padding:1px;display:inline;zoom:1";
cc.inlineBlockNeedsLayout=(ch.offsetWidth===3);
ch.style.display="block";
ch.style.overflow="visible";
ch.innerHTML="<div></div>";
ch.firstChild.style.width="5px";
cc.shrinkWrapBlocks=(ch.offsetWidth!==3);
cd.style.zoom=1
}e.removeChild(cd);
cd=ch=cf=cg=null
});
b7.removeChild(b1);
cb=b9=ca=b3=b8=b7=b1=null;
return cc
})();
var bu=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,aM=/([A-Z])/g;
bH.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(bH.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?bH.cache[e[bH.expando]]:e[bH.expando];
return !!e&&!P(e)
},data:function(b2,b0,b4,b3){if(!bH.acceptData(b2)){return
}var b5,b7,b8=bH.expando,b6=typeof b0==="string",b9=b2.nodeType,e=b9?bH.cache:b2,b1=b9?b2[b8]:b2[b8]&&b8;
if((!b1||!e[b1]||(!b3&&!e[b1].data))&&b6&&b4===aC){return
}if(!b1){if(b9){b2[b8]=b1=bH.deletedIds.pop()||bH.guid++
}else{b1=b8
}}if(!e[b1]){e[b1]={};
if(!b9){e[b1].toJSON=bH.noop
}}if(typeof b0==="object"||typeof b0==="function"){if(b3){e[b1]=bH.extend(e[b1],b0)
}else{e[b1].data=bH.extend(e[b1].data,b0)
}}b5=e[b1];
if(!b3){if(!b5.data){b5.data={}
}b5=b5.data
}if(b4!==aC){b5[bH.camelCase(b0)]=b4
}if(b6){b7=b5[b0];
if(b7==null){b7=b5[bH.camelCase(b0)]
}}else{b7=b5
}return b7
},removeData:function(b2,b0,b3){if(!bH.acceptData(b2)){return
}var b6,b5,b4,b7=b2.nodeType,e=b7?bH.cache:b2,b1=b7?b2[bH.expando]:bH.expando;
if(!e[b1]){return
}if(b0){b6=b3?e[b1]:e[b1].data;
if(b6){if(!bH.isArray(b0)){if(b0 in b6){b0=[b0]
}else{b0=bH.camelCase(b0);
if(b0 in b6){b0=[b0]
}else{b0=b0.split(" ")
}}}for(b5=0,b4=b0.length;
b5<b4;
b5++){delete b6[b0[b5]]
}if(!(b3?P:bH.isEmptyObject)(b6)){return
}}}if(!b3){delete e[b1].data;
if(!P(e[b1])){return
}}if(b7){bH.cleanData([b2],true)
}else{if(bH.support.deleteExpando||e!=e.window){delete e[b1]
}else{e[b1]=null
}}},_data:function(b0,e,b1){return bH.data(b0,e,b1,true)
},acceptData:function(b0){var e=b0.nodeName&&bH.noData[b0.nodeName.toLowerCase()];
return !e||e!==true&&b0.getAttribute("classid")===e
}});
bH.fn.extend({data:function(b8,b7){var b3,b0,b6,e,b2,b1=this[0],b5=0,b4=null;
if(b8===aC){if(this.length){b4=bH.data(b1);
if(b1.nodeType===1&&!bH._data(b1,"parsedAttrs")){b6=b1.attributes;
for(b2=b6.length;
b5<b2;
b5++){e=b6[b5].name;
if(!e.indexOf("data-")){e=bH.camelCase(e.substring(5));
bw(b1,e,b4[e])
}}bH._data(b1,"parsedAttrs",true)
}}return b4
}if(typeof b8==="object"){return this.each(function(){bH.data(this,b8)
})
}b3=b8.split(".",2);
b3[1]=b3[1]?"."+b3[1]:"";
b0=b3[1]+"!";
return bH.access(this,function(b9){if(b9===aC){b4=this.triggerHandler("getData"+b0,[b3[0]]);
if(b4===aC&&b1){b4=bH.data(b1,b8);
b4=bw(b1,b8,b4)
}return b4===aC&&b3[1]?this.data(b3[0]):b4
}b3[1]=b9;
this.each(function(){var ca=bH(this);
ca.triggerHandler("setData"+b0,b3);
bH.data(this,b8,b9);
ca.triggerHandler("changeData"+b0,b3)
})
},null,b7,arguments.length>1,null,false)
},removeData:function(e){return this.each(function(){bH.removeData(this,e)
})
}});
function bw(b2,b1,b3){if(b3===aC&&b2.nodeType===1){var b0="data-"+b1.replace(aM,"-$1").toLowerCase();
b3=b2.getAttribute(b0);
if(typeof b3==="string"){try{b3=b3==="true"?true:b3==="false"?false:b3==="null"?null:+b3+""===b3?+b3:bu.test(b3)?bH.parseJSON(b3):b3
}catch(b4){}bH.data(b2,b1,b3)
}else{b3=aC
}}return b3
}function P(b0){var e;
for(e in b0){if(e==="data"&&bH.isEmptyObject(b0[e])){continue
}if(e!=="toJSON"){return false
}}return true
}bH.extend({queue:function(b1,b0,b2){var e;
if(b1){b0=(b0||"fx")+"queue";
e=bH._data(b1,b0);
if(b2){if(!e||bH.isArray(b2)){e=bH._data(b1,b0,bH.makeArray(b2))
}else{e.push(b2)
}}return e||[]
}},dequeue:function(b4,b3){b3=b3||"fx";
var b0=bH.queue(b4,b3),b5=b0.length,b2=b0.shift(),e=bH._queueHooks(b4,b3),b1=function(){bH.dequeue(b4,b3)
};
if(b2==="inprogress"){b2=b0.shift();
b5--
}if(b2){if(b3==="fx"){b0.unshift("inprogress")
}delete e.stop;
b2.call(b4,b1,e)
}if(!b5&&e){e.empty.fire()
}},_queueHooks:function(b1,b0){var e=b0+"queueHooks";
return bH._data(b1,e)||bH._data(b1,e,{empty:bH.Callbacks("once memory").add(function(){bH.removeData(b1,b0+"queue",true);
bH.removeData(b1,e,true)
})})
}});
bH.fn.extend({queue:function(e,b0){var b1=2;
if(typeof e!=="string"){b0=e;
e="fx";
b1--
}if(arguments.length<b1){return bH.queue(this[0],e)
}return b0===aC?this:this.each(function(){var b2=bH.queue(this,e,b0);
bH._queueHooks(this,e);
if(e==="fx"&&b2[0]!=="inprogress"){bH.dequeue(this,e)
}})
},dequeue:function(e){return this.each(function(){bH.dequeue(this,e)
})
},delay:function(b0,e){b0=bH.fx?bH.fx.speeds[b0]||b0:b0;
e=e||"fx";
return this.queue(e,function(b2,b1){var b3=setTimeout(b2,b0);
b1.stop=function(){clearTimeout(b3)
}
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(b1,b5){var b0,b2=1,b6=bH.Deferred(),b4=this,e=this.length,b3=function(){if(!(--b2)){b6.resolveWith(b4,[b4])
}};
if(typeof b1!=="string"){b5=b1;
b1=aC
}b1=b1||"fx";
while(e--){b0=bH._data(b4[e],b1+"queueHooks");
if(b0&&b0.empty){b2++;
b0.empty.add(b3)
}}b3();
return b6.promise(b5)
}});
var a8,bW,n,bK=/[\t\r\n]/g,aj=/\r/g,j=/^(?:button|input)$/i,aB=/^(?:button|input|object|select|textarea)$/i,E=/^a(?:rea|)$/i,N=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,bM=bH.support.getSetAttribute;
bH.fn.extend({attr:function(e,b0){return bH.access(this,bH.attr,e,b0,arguments.length>1)
},removeAttr:function(e){return this.each(function(){bH.removeAttr(this,e)
})
},prop:function(e,b0){return bH.access(this,bH.prop,e,b0,arguments.length>1)
},removeProp:function(e){e=bH.propFix[e]||e;
return this.each(function(){try{this[e]=aC;
delete this[e]
}catch(b0){}})
},addClass:function(b3){var b5,b1,b0,b2,b4,b6,e;
if(bH.isFunction(b3)){return this.each(function(b7){bH(this).addClass(b3.call(this,b7,this.className))
})
}if(b3&&typeof b3==="string"){b5=b3.split(aW);
for(b1=0,b0=this.length;
b1<b0;
b1++){b2=this[b1];
if(b2.nodeType===1){if(!b2.className&&b5.length===1){b2.className=b3
}else{b4=" "+b2.className+" ";
for(b6=0,e=b5.length;
b6<e;
b6++){if(b4.indexOf(" "+b5[b6]+" ")<0){b4+=b5[b6]+" "
}}b2.className=bH.trim(b4)
}}}}return this
},removeClass:function(b5){var b2,b3,b4,b6,b0,b1,e;
if(bH.isFunction(b5)){return this.each(function(b7){bH(this).removeClass(b5.call(this,b7,this.className))
})
}if((b5&&typeof b5==="string")||b5===aC){b2=(b5||"").split(aW);
for(b1=0,e=this.length;
b1<e;
b1++){b4=this[b1];
if(b4.nodeType===1&&b4.className){b3=(" "+b4.className+" ").replace(bK," ");
for(b6=0,b0=b2.length;
b6<b0;
b6++){while(b3.indexOf(" "+b2[b6]+" ")>=0){b3=b3.replace(" "+b2[b6]+" "," ")
}}b4.className=b5?bH.trim(b3):""
}}}return this
},toggleClass:function(b2,b0){var b1=typeof b2,e=typeof b0==="boolean";
if(bH.isFunction(b2)){return this.each(function(b3){bH(this).toggleClass(b2.call(this,b3,this.className,b0),b0)
})
}return this.each(function(){if(b1==="string"){var b5,b4=0,b3=bH(this),b6=b0,b7=b2.split(aW);
while((b5=b7[b4++])){b6=e?b6:!b3.hasClass(b5);
b3[b6?"addClass":"removeClass"](b5)
}}else{if(b1==="undefined"||b1==="boolean"){if(this.className){bH._data(this,"__className__",this.className)
}this.className=this.className||b2===false?"":bH._data(this,"__className__")||""
}}})
},hasClass:function(e){var b2=" "+e+" ",b1=0,b0=this.length;
for(;
b1<b0;
b1++){if(this[b1].nodeType===1&&(" "+this[b1].className+" ").replace(bK," ").indexOf(b2)>=0){return true
}}return false
},val:function(b2){var e,b0,b3,b1=this[0];
if(!arguments.length){if(b1){e=bH.valHooks[b1.type]||bH.valHooks[b1.nodeName.toLowerCase()];
if(e&&"get" in e&&(b0=e.get(b1,"value"))!==aC){return b0
}b0=b1.value;
return typeof b0==="string"?b0.replace(aj,""):b0==null?"":b0
}return
}b3=bH.isFunction(b2);
return this.each(function(b5){var b6,b4=bH(this);
if(this.nodeType!==1){return
}if(b3){b6=b2.call(this,b5,b4.val())
}else{b6=b2
}if(b6==null){b6=""
}else{if(typeof b6==="number"){b6+=""
}else{if(bH.isArray(b6)){b6=bH.map(b6,function(b7){return b7==null?"":b7+""
})
}}}e=bH.valHooks[this.type]||bH.valHooks[this.nodeName.toLowerCase()];
if(!e||!("set" in e)||e.set(this,b6,"value")===aC){this.value=b6
}})
}});
bH.extend({valHooks:{option:{get:function(e){var b0=e.attributes.value;
return !b0||b0.specified?e.value:e.text
}},select:{get:function(e){var b5,b1,b7=e.options,b3=e.selectedIndex,b2=e.type==="select-one"||b3<0,b6=b2?null:[],b4=b2?b3+1:b7.length,b0=b3<0?b4:b2?b3:0;
for(;
b0<b4;
b0++){b1=b7[b0];
if((b1.selected||b0===b3)&&(bH.support.optDisabled?!b1.disabled:b1.getAttribute("disabled")===null)&&(!b1.parentNode.disabled||!bH.nodeName(b1.parentNode,"optgroup"))){b5=bH(b1).val();
if(b2){return b5
}b6.push(b5)
}}return b6
},set:function(b0,b1){var e=bH.makeArray(b1);
bH(b0).find("option").each(function(){this.selected=bH.inArray(bH(this).val(),e)>=0
});
if(!e.length){b0.selectedIndex=-1
}return e
}}},attrFn:{},attr:function(b5,b2,b6,b4){var b1,e,b3,b0=b5.nodeType;
if(!b5||b0===3||b0===8||b0===2){return
}if(b4&&bH.isFunction(bH.fn[b2])){return bH(b5)[b2](b6)
}if(typeof b5.getAttribute==="undefined"){return bH.prop(b5,b2,b6)
}b3=b0!==1||!bH.isXMLDoc(b5);
if(b3){b2=b2.toLowerCase();
e=bH.attrHooks[b2]||(N.test(b2)?bW:a8)
}if(b6!==aC){if(b6===null){bH.removeAttr(b5,b2);
return
}else{if(e&&"set" in e&&b3&&(b1=e.set(b5,b6,b2))!==aC){return b1
}else{b5.setAttribute(b2,b6+"");
return b6
}}}else{if(e&&"get" in e&&b3&&(b1=e.get(b5,b2))!==null){return b1
}else{b1=b5.getAttribute(b2);
return b1===null?aC:b1
}}},removeAttr:function(b2,b4){var b3,b5,b0,e,b1=0;
if(b4&&b2.nodeType===1){b5=b4.split(aW);
for(;
b1<b5.length;
b1++){b0=b5[b1];
if(b0){b3=bH.propFix[b0]||b0;
e=N.test(b0);
if(!e){bH.attr(b2,b0,"")
}b2.removeAttribute(bM?b0:b3);
if(e&&b3 in b2){b2[b3]=false
}}}}},attrHooks:{type:{set:function(e,b0){if(j.test(e.nodeName)&&e.parentNode){bH.error("type property can't be changed")
}else{if(!bH.support.radioValue&&b0==="radio"&&bH.nodeName(e,"input")){var b1=e.value;
e.setAttribute("type",b0);
if(b1){e.value=b1
}return b0
}}}},value:{get:function(b0,e){if(a8&&bH.nodeName(b0,"button")){return a8.get(b0,e)
}return e in b0?b0.value:null
},set:function(b0,b1,e){if(a8&&bH.nodeName(b0,"button")){return a8.set(b0,b1,e)
}b0.value=b1
}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(b4,b2,b5){var b1,e,b3,b0=b4.nodeType;
if(!b4||b0===3||b0===8||b0===2){return
}b3=b0!==1||!bH.isXMLDoc(b4);
if(b3){b2=bH.propFix[b2]||b2;
e=bH.propHooks[b2]
}if(b5!==aC){if(e&&"set" in e&&(b1=e.set(b4,b5,b2))!==aC){return b1
}else{return(b4[b2]=b5)
}}else{if(e&&"get" in e&&(b1=e.get(b4,b2))!==null){return b1
}else{return b4[b2]
}}},propHooks:{tabIndex:{get:function(b0){var e=b0.getAttributeNode("tabindex");
return e&&e.specified?parseInt(e.value,10):aB.test(b0.nodeName)||E.test(b0.nodeName)&&b0.href?0:aC
}}}});
bW={get:function(b0,e){var b2,b1=bH.prop(b0,e);
return b1===true||typeof b1!=="boolean"&&(b2=b0.getAttributeNode(e))&&b2.nodeValue!==false?e.toLowerCase():aC
},set:function(b0,b2,e){var b1;
if(b2===false){bH.removeAttr(b0,e)
}else{b1=bH.propFix[e]||e;
if(b1 in b0){b0[b1]=true
}b0.setAttribute(e,e.toLowerCase())
}return e
}};
if(!bM){n={name:true,id:true,coords:true};
a8=bH.valHooks.button={get:function(b1,b0){var e;
e=b1.getAttributeNode(b0);
return e&&(n[b0]?e.value!=="":e.specified)?e.value:aC
},set:function(b1,b2,b0){var e=b1.getAttributeNode(b0);
if(!e){e=o.createAttribute(b0);
b1.setAttributeNode(e)
}return(e.value=b2+"")
}};
bH.each(["width","height"],function(b0,e){bH.attrHooks[e]=bH.extend(bH.attrHooks[e],{set:function(b1,b2){if(b2===""){b1.setAttribute(e,"auto");
return b2
}}})
});
bH.attrHooks.contenteditable={get:a8.get,set:function(b0,b1,e){if(b1===""){b1="false"
}a8.set(b0,b1,e)
}}
}if(!bH.support.hrefNormalized){bH.each(["href","src","width","height"],function(b0,e){bH.attrHooks[e]=bH.extend(bH.attrHooks[e],{get:function(b2){var b1=b2.getAttribute(e,2);
return b1===null?aC:b1
}})
})
}if(!bH.support.style){bH.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||aC
},set:function(e,b0){return(e.style.cssText=b0+"")
}}
}if(!bH.support.optSelected){bH.propHooks.selected=bH.extend(bH.propHooks.selected,{get:function(b0){var e=b0.parentNode;
if(e){e.selectedIndex;
if(e.parentNode){e.parentNode.selectedIndex
}}return null
}})
}if(!bH.support.enctype){bH.propFix.enctype="encoding"
}if(!bH.support.checkOn){bH.each(["radio","checkbox"],function(){bH.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value
}}
})
}bH.each(["radio","checkbox"],function(){bH.valHooks[this]=bH.extend(bH.valHooks[this],{set:function(e,b0){if(bH.isArray(b0)){return(e.checked=bH.inArray(bH(e).val(),b0)>=0)
}}})
});
var bF=/^(?:textarea|input|select)$/i,bs=/^([^\.]*|)(?:\.(.+)|)$/,bb=/(?:^|\s)hover(\.\S+|)\b/,a4=/^key/,bL=/^(?:mouse|contextmenu)|click/,bz=/^(?:focusinfocus|focusoutblur)$/,ar=function(e){return bH.event.special.hover?e:e.replace(bb,"mouseenter$1 mouseleave$1")
};
bH.event={add:function(b2,b6,cd,b4,b3){var b7,b5,ce,cc,cb,b9,e,ca,b0,b1,b8;
if(b2.nodeType===3||b2.nodeType===8||!b6||!cd||!(b7=bH._data(b2))){return
}if(cd.handler){b0=cd;
cd=b0.handler;
b3=b0.selector
}if(!cd.guid){cd.guid=bH.guid++
}ce=b7.events;
if(!ce){b7.events=ce={}
}b5=b7.handle;
if(!b5){b7.handle=b5=function(cf){return typeof bH!=="undefined"&&(!cf||bH.event.triggered!==cf.type)?bH.event.dispatch.apply(b5.elem,arguments):aC
};
b5.elem=b2
}b6=bH.trim(ar(b6)).split(" ");
for(cc=0;
cc<b6.length;
cc++){cb=bs.exec(b6[cc])||[];
b9=cb[1];
e=(cb[2]||"").split(".").sort();
b8=bH.event.special[b9]||{};
b9=(b3?b8.delegateType:b8.bindType)||b9;
b8=bH.event.special[b9]||{};
ca=bH.extend({type:b9,origType:cb[1],data:b4,handler:cd,guid:cd.guid,selector:b3,needsContext:b3&&bH.expr.match.needsContext.test(b3),namespace:e.join(".")},b0);
b1=ce[b9];
if(!b1){b1=ce[b9]=[];
b1.delegateCount=0;
if(!b8.setup||b8.setup.call(b2,b4,e,b5)===false){if(b2.addEventListener){b2.addEventListener(b9,b5,false)
}else{if(b2.attachEvent){b2.attachEvent("on"+b9,b5)
}}}}if(b8.add){b8.add.call(b2,ca);
if(!ca.handler.guid){ca.handler.guid=cd.guid
}}if(b3){b1.splice(b1.delegateCount++,0,ca)
}else{b1.push(ca)
}bH.event.global[b9]=true
}b2=null
},global:{},remove:function(b2,b7,cd,b3,b6){var ce,cf,ca,b1,b0,b4,b5,cc,b9,e,cb,b8=bH.hasData(b2)&&bH._data(b2);
if(!b8||!(cc=b8.events)){return
}b7=bH.trim(ar(b7||"")).split(" ");
for(ce=0;
ce<b7.length;
ce++){cf=bs.exec(b7[ce])||[];
ca=b1=cf[1];
b0=cf[2];
if(!ca){for(ca in cc){bH.event.remove(b2,ca+b7[ce],cd,b3,true)
}continue
}b9=bH.event.special[ca]||{};
ca=(b3?b9.delegateType:b9.bindType)||ca;
e=cc[ca]||[];
b4=e.length;
b0=b0?new RegExp("(^|\\.)"+b0.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
for(b5=0;
b5<e.length;
b5++){cb=e[b5];
if((b6||b1===cb.origType)&&(!cd||cd.guid===cb.guid)&&(!b0||b0.test(cb.namespace))&&(!b3||b3===cb.selector||b3==="**"&&cb.selector)){e.splice(b5--,1);
if(cb.selector){e.delegateCount--
}if(b9.remove){b9.remove.call(b2,cb)
}}}if(e.length===0&&b4!==e.length){if(!b9.teardown||b9.teardown.call(b2,b0,b8.handle)===false){bH.removeEvent(b2,ca,b8.handle)
}delete cc[ca]
}}if(bH.isEmptyObject(cc)){delete b8.handle;
bH.removeData(b2,"events",true)
}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(b0,b7,b5,ce){if(b5&&(b5.nodeType===3||b5.nodeType===8)){return
}var e,b2,b8,cc,b4,b3,ca,b9,b6,cd,cb=b0.type||b0,b1=[];
if(bz.test(cb+bH.event.triggered)){return
}if(cb.indexOf("!")>=0){cb=cb.slice(0,-1);
b2=true
}if(cb.indexOf(".")>=0){b1=cb.split(".");
cb=b1.shift();
b1.sort()
}if((!b5||bH.event.customEvent[cb])&&!bH.event.global[cb]){return
}b0=typeof b0==="object"?b0[bH.expando]?b0:new bH.Event(cb,b0):new bH.Event(cb);
b0.type=cb;
b0.isTrigger=true;
b0.exclusive=b2;
b0.namespace=b1.join(".");
b0.namespace_re=b0.namespace?new RegExp("(^|\\.)"+b1.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
b3=cb.indexOf(":")<0?"on"+cb:"";
if(!b5){e=bH.cache;
for(b8 in e){if(e[b8].events&&e[b8].events[cb]){bH.event.trigger(b0,b7,e[b8].handle.elem,true)
}}return
}b0.result=aC;
if(!b0.target){b0.target=b5
}b7=b7!=null?bH.makeArray(b7):[];
b7.unshift(b0);
ca=bH.event.special[cb]||{};
if(ca.trigger&&ca.trigger.apply(b5,b7)===false){return
}b6=[[b5,ca.bindType||cb]];
if(!ce&&!ca.noBubble&&!bH.isWindow(b5)){cd=ca.delegateType||cb;
cc=bz.test(cd+cb)?b5:b5.parentNode;
for(b4=b5;
cc;
cc=cc.parentNode){b6.push([cc,cd]);
b4=cc
}if(b4===(b5.ownerDocument||o)){b6.push([b4.defaultView||b4.parentWindow||a3,cd])
}}for(b8=0;
b8<b6.length&&!b0.isPropagationStopped();
b8++){cc=b6[b8][0];
b0.type=b6[b8][1];
b9=(bH._data(cc,"events")||{})[b0.type]&&bH._data(cc,"handle");
if(b9){b9.apply(cc,b7)
}b9=b3&&cc[b3];
if(b9&&bH.acceptData(cc)&&b9.apply&&b9.apply(cc,b7)===false){b0.preventDefault()
}}b0.type=cb;
if(!ce&&!b0.isDefaultPrevented()){if((!ca._default||ca._default.apply(b5.ownerDocument,b7)===false)&&!(cb==="click"&&bH.nodeName(b5,"a"))&&bH.acceptData(b5)){if(b3&&b5[cb]&&((cb!=="focus"&&cb!=="blur")||b0.target.offsetWidth!==0)&&!bH.isWindow(b5)){b4=b5[b3];
if(b4){b5[b3]=null
}bH.event.triggered=cb;
b5[cb]();
bH.event.triggered=aC;
if(b4){b5[b3]=b4
}}}}return b0.result
},dispatch:function(e){e=bH.event.fix(e||a3.event);
var b6,b5,cf,b9,b8,b0,b7,cd,b2,ce,b3=((bH._data(this,"events")||{})[e.type]||[]),b4=b3.delegateCount,cb=a5.call(arguments),b1=!e.exclusive&&!e.namespace,ca=bH.event.special[e.type]||{},cc=[];
cb[0]=e;
e.delegateTarget=this;
if(ca.preDispatch&&ca.preDispatch.call(this,e)===false){return
}if(b4&&!(e.button&&e.type==="click")){for(cf=e.target;
cf!=this;
cf=cf.parentNode||this){if(cf.disabled!==true||e.type!=="click"){b8={};
b7=[];
for(b6=0;
b6<b4;
b6++){cd=b3[b6];
b2=cd.selector;
if(b8[b2]===aC){b8[b2]=cd.needsContext?bH(b2,this).index(cf)>=0:bH.find(b2,this,null,[cf]).length
}if(b8[b2]){b7.push(cd)
}}if(b7.length){cc.push({elem:cf,matches:b7})
}}}}if(b3.length>b4){cc.push({elem:this,matches:b3.slice(b4)})
}for(b6=0;
b6<cc.length&&!e.isPropagationStopped();
b6++){b0=cc[b6];
e.currentTarget=b0.elem;
for(b5=0;
b5<b0.matches.length&&!e.isImmediatePropagationStopped();
b5++){cd=b0.matches[b5];
if(b1||(!e.namespace&&!cd.namespace)||e.namespace_re&&e.namespace_re.test(cd.namespace)){e.data=cd.data;
e.handleObj=cd;
b9=((bH.event.special[cd.origType]||{}).handle||cd.handler).apply(b0.elem,cb);
if(b9!==aC){e.result=b9;
if(b9===false){e.preventDefault();
e.stopPropagation()
}}}}}if(ca.postDispatch){ca.postDispatch.call(this,e)
}return e.result
},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(b0,e){if(b0.which==null){b0.which=e.charCode!=null?e.charCode:e.keyCode
}return b0
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b2,b1){var b3,b4,e,b0=b1.button,b5=b1.fromElement;
if(b2.pageX==null&&b1.clientX!=null){b3=b2.target.ownerDocument||o;
b4=b3.documentElement;
e=b3.body;
b2.pageX=b1.clientX+(b4&&b4.scrollLeft||e&&e.scrollLeft||0)-(b4&&b4.clientLeft||e&&e.clientLeft||0);
b2.pageY=b1.clientY+(b4&&b4.scrollTop||e&&e.scrollTop||0)-(b4&&b4.clientTop||e&&e.clientTop||0)
}if(!b2.relatedTarget&&b5){b2.relatedTarget=b5===b2.target?b1.toElement:b5
}if(!b2.which&&b0!==aC){b2.which=(b0&1?1:(b0&2?3:(b0&4?2:0)))
}return b2
}},fix:function(b1){if(b1[bH.expando]){return b1
}var b0,b4,e=b1,b2=bH.event.fixHooks[b1.type]||{},b3=b2.props?this.props.concat(b2.props):this.props;
b1=bH.Event(e);
for(b0=b3.length;
b0;
){b4=b3[--b0];
b1[b4]=e[b4]
}if(!b1.target){b1.target=e.srcElement||o
}if(b1.target.nodeType===3){b1.target=b1.target.parentNode
}b1.metaKey=!!b1.metaKey;
return b2.filter?b2.filter(b1,e):b1
},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(b1,b0,e){if(bH.isWindow(this)){this.onbeforeunload=e
}},teardown:function(b0,e){if(this.onbeforeunload===e){this.onbeforeunload=null
}}}},simulate:function(b1,b3,b2,b0){var b4=bH.extend(new bH.Event(),b2,{type:b1,isSimulated:true,originalEvent:{}});
if(b0){bH.event.trigger(b4,null,b3)
}else{bH.event.dispatch.call(b3,b4)
}if(b4.isDefaultPrevented()){b2.preventDefault()
}}};
bH.event.handle=bH.event.dispatch;
bH.removeEvent=o.removeEventListener?function(b0,e,b1){if(b0.removeEventListener){b0.removeEventListener(e,b1,false)
}}:function(b1,b0,b2){var e="on"+b0;
if(b1.detachEvent){if(typeof b1[e]==="undefined"){b1[e]=null
}b1.detachEvent(e,b2)
}};
bH.Event=function(b0,e){if(!(this instanceof bH.Event)){return new bH.Event(b0,e)
}if(b0&&b0.type){this.originalEvent=b0;
this.type=b0.type;
this.isDefaultPrevented=(b0.defaultPrevented||b0.returnValue===false||b0.getPreventDefault&&b0.getPreventDefault())?S:Y
}else{this.type=b0
}if(e){bH.extend(this,e)
}this.timeStamp=b0&&b0.timeStamp||bH.now();
this[bH.expando]=true
};
function Y(){return false
}function S(){return true
}bH.Event.prototype={preventDefault:function(){this.isDefaultPrevented=S;
var b0=this.originalEvent;
if(!b0){return
}if(b0.preventDefault){b0.preventDefault()
}else{b0.returnValue=false
}},stopPropagation:function(){this.isPropagationStopped=S;
var b0=this.originalEvent;
if(!b0){return
}if(b0.stopPropagation){b0.stopPropagation()
}b0.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=S;
this.stopPropagation()
},isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y};
bH.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(b0,e){bH.event.special[b0]={delegateType:e,bindType:e,handle:function(b4){var b2,b6=this,b5=b4.relatedTarget,b3=b4.handleObj,b1=b3.selector;
if(!b5||(b5!==b6&&!bH.contains(b6,b5))){b4.type=b3.origType;
b2=b3.handler.apply(this,arguments);
b4.type=e
}return b2
}}
});
if(!bH.support.submitBubbles){bH.event.special.submit={setup:function(){if(bH.nodeName(this,"form")){return false
}bH.event.add(this,"click._submit keypress._submit",function(b2){var b1=b2.target,b0=bH.nodeName(b1,"input")||bH.nodeName(b1,"button")?b1.form:aC;
if(b0&&!bH._data(b0,"_submit_attached")){bH.event.add(b0,"submit._submit",function(e){e._submit_bubble=true
});
bH._data(b0,"_submit_attached",true)
}})
},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;
if(this.parentNode&&!e.isTrigger){bH.event.simulate("submit",this.parentNode,e,true)
}}},teardown:function(){if(bH.nodeName(this,"form")){return false
}bH.event.remove(this,"._submit")
}}
}if(!bH.support.changeBubbles){bH.event.special.change={setup:function(){if(bF.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bH.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true
}});
bH.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false
}bH.event.simulate("change",this,e,true)
})
}return false
}bH.event.add(this,"beforeactivate._change",function(b1){var b0=b1.target;
if(bF.test(b0.nodeName)&&!bH._data(b0,"_change_attached")){bH.event.add(b0,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){bH.event.simulate("change",this.parentNode,e,true)
}});
bH._data(b0,"_change_attached",true)
}})
},handle:function(b0){var e=b0.target;
if(this!==e||b0.isSimulated||b0.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return b0.handleObj.handler.apply(this,arguments)
}},teardown:function(){bH.event.remove(this,"._change");
return !bF.test(this.nodeName)
}}
}if(!bH.support.focusinBubbles){bH.each({focus:"focusin",blur:"focusout"},function(b2,e){var b0=0,b1=function(b3){bH.event.simulate(e,b3.target,bH.event.fix(b3),true)
};
bH.event.special[e]={setup:function(){if(b0++===0){o.addEventListener(b2,b1,true)
}},teardown:function(){if(--b0===0){o.removeEventListener(b2,b1,true)
}}}
})
}bH.fn.extend({on:function(b1,e,b4,b3,b0){var b5,b2;
if(typeof b1==="object"){if(typeof e!=="string"){b4=b4||e;
e=aC
}for(b2 in b1){this.on(b2,e,b4,b1[b2],b0)
}return this
}if(b4==null&&b3==null){b3=e;
b4=e=aC
}else{if(b3==null){if(typeof e==="string"){b3=b4;
b4=aC
}else{b3=b4;
b4=e;
e=aC
}}}if(b3===false){b3=Y
}else{if(!b3){return this
}}if(b0===1){b5=b3;
b3=function(b6){bH().off(b6);
return b5.apply(this,arguments)
};
b3.guid=b5.guid||(b5.guid=bH.guid++)
}return this.each(function(){bH.event.add(this,b1,b3,b4,e)
})
},one:function(b0,e,b2,b1){return this.on(b0,e,b2,b1,1)
},off:function(b1,e,b3){var b0,b2;
if(b1&&b1.preventDefault&&b1.handleObj){b0=b1.handleObj;
bH(b1.delegateTarget).off(b0.namespace?b0.origType+"."+b0.namespace:b0.origType,b0.selector,b0.handler);
return this
}if(typeof b1==="object"){for(b2 in b1){this.off(b2,e,b1[b2])
}return this
}if(e===false||typeof e==="function"){b3=e;
e=aC
}if(b3===false){b3=Y
}return this.each(function(){bH.event.remove(this,b1,b3,e)
})
},bind:function(e,b1,b0){return this.on(e,null,b1,b0)
},unbind:function(e,b0){return this.off(e,null,b0)
},live:function(e,b1,b0){bH(this.context).on(e,this.selector,b1,b0);
return this
},die:function(e,b0){bH(this.context).off(e,this.selector||"**",b0);
return this
},delegate:function(e,b0,b2,b1){return this.on(b0,e,b2,b1)
},undelegate:function(e,b0,b1){return arguments.length===1?this.off(e,"**"):this.off(b0,e||"**",b1)
},trigger:function(e,b0){return this.each(function(){bH.event.trigger(e,b0,this)
})
},triggerHandler:function(e,b0){if(this[0]){return bH.event.trigger(e,b0,this[0],true)
}},toggle:function(b2){var b0=arguments,e=b2.guid||bH.guid++,b1=0,b3=function(b4){var b5=(bH._data(this,"lastToggle"+b2.guid)||0)%b1;
bH._data(this,"lastToggle"+b2.guid,b5+1);
b4.preventDefault();
return b0[b5].apply(this,arguments)||false
};
b3.guid=e;
while(b1<b0.length){b0[b1++].guid=e
}return this.click(b3)
},hover:function(e,b0){return this.mouseenter(e).mouseleave(b0||e)
}});
bH.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(b0,e){bH.fn[e]=function(b2,b1){if(b1==null){b1=b2;
b2=null
}return arguments.length>0?this.on(e,null,b2,b1):this.trigger(e)
};
if(a4.test(e)){bH.event.fixHooks[e]=bH.event.keyHooks
}if(bL.test(e)){bH.event.fixHooks[e]=bH.event.mouseHooks
}});
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function(cT,ci){var cY,cb,cM,b1,cn,cB,ce,ch,cd,cK,ca=true,cv="undefined",c0=("sizcache"+Math.random()).replace(".",""),b5=String,b9=cT.document,cc=b9.documentElement,cs=0,cg=0,cF=[].pop,cX=[].push,cm=[].slice,cp=[].indexOf||function(c9){var c8=0,e=this.length;
for(;
c8<e;
c8++){if(this[c8]===c9){return c8
}}return -1
},c2=function(e,c8){e[c0]=c8==null||c8;
return e
},c6=function(){var e={},c8=[];
return c2(function(c9,da){if(c8.push(c9)>cM.cacheLength){delete e[c8.shift()]
}return(e[c9+" "]=da)
},e)
},cV=c6(),cW=c6(),co=c6(),cz="[\\x20\\t\\r\\n\\f]",cl="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",cj=cl.replace("w","w#"),c5="([*^$|!~]?=)",cQ="\\["+cz+"*("+cl+")"+cz+"*(?:"+c5+cz+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+cj+")|)|)"+cz+"*\\]",c7=":("+cl+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+cQ+")|[^:]|\\\\.)*|.*))\\)|)",cA=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+cz+"*((?:-\\d)?\\d*)"+cz+"*\\)|)(?=[^-]|$)",cU=new RegExp("^"+cz+"+|((?:^|[^\\\\])(?:\\\\.)*)"+cz+"+$","g"),b6=new RegExp("^"+cz+"*,"+cz+"*"),cI=new RegExp("^"+cz+"*([\\x20\\t\\r\\n\\f>+~])"+cz+"*"),cN=new RegExp(c7),cP=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,cE=/^:not/,cS=/[\x20\t\r\n\f]*[+~]/,c1=/:not\($/,ct=/h\d/i,cO=/input|select|textarea|button/i,cu=/\\(?!\\)/g,cH={ID:new RegExp("^#("+cl+")"),CLASS:new RegExp("^\\.("+cl+")"),NAME:new RegExp("^\\[name=['\"]?("+cl+")['\"]?\\]"),TAG:new RegExp("^("+cl.replace("w","w*")+")"),ATTR:new RegExp("^"+cQ),PSEUDO:new RegExp("^"+c7),POS:new RegExp(cA,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+cz+"*(even|odd|(([+-]|)(\\d*)n|)"+cz+"*(?:([+-]|)"+cz+"*(\\d+)|))"+cz+"*\\)|)","i"),needsContext:new RegExp("^"+cz+"*[>+~]|"+cA,"i")},cL=function(c8){var da=b9.createElement("div");
try{return c8(da)
}catch(c9){return false
}finally{da=null
}},b8=cL(function(e){e.appendChild(b9.createComment(""));
return !e.getElementsByTagName("*").length
}),cD=cL(function(e){e.innerHTML="<a href='#'></a>";
return e.firstChild&&typeof e.firstChild.getAttribute!==cv&&e.firstChild.getAttribute("href")==="#"
}),cr=cL(function(c8){c8.innerHTML="<select></select>";
var e=typeof c8.lastChild.getAttribute("multiple");
return e!=="boolean"&&e!=="string"
}),cC=cL(function(e){e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";
if(!e.getElementsByClassName||!e.getElementsByClassName("e").length){return false
}e.lastChild.className="e";
return e.getElementsByClassName("e").length===2
}),b0=cL(function(c8){c8.id=c0+0;
c8.innerHTML="<a name='"+c0+"'></a><div name='"+c0+"'></div>";
cc.insertBefore(c8,cc.firstChild);
var e=b9.getElementsByName&&b9.getElementsByName(c0).length===2+b9.getElementsByName(c0+0).length;
cb=!b9.getElementById(c0);
cc.removeChild(c8);
return e
});
try{cm.call(cc.childNodes,0)[0].nodeType
}catch(c4){cm=function(c8){var c9,e=[];
for(;
(c9=this[c8]);
c8++){e.push(c9)
}return e
}
}function cR(da,e,dc,df){dc=dc||[];
e=e||b9;
var dd,c8,de,c9,db=e.nodeType;
if(!da||typeof da!=="string"){return dc
}if(db!==1&&db!==9){return[]
}de=cn(e);
if(!de&&!df){if((dd=cP.exec(da))){if((c9=dd[1])){if(db===9){c8=e.getElementById(c9);
if(c8&&c8.parentNode){if(c8.id===c9){dc.push(c8);
return dc
}}else{return dc
}}else{if(e.ownerDocument&&(c8=e.ownerDocument.getElementById(c9))&&cB(e,c8)&&c8.id===c9){dc.push(c8);
return dc
}}}else{if(dd[2]){cX.apply(dc,cm.call(e.getElementsByTagName(da),0));
return dc
}else{if((c9=dd[3])&&cC&&e.getElementsByClassName){cX.apply(dc,cm.call(e.getElementsByClassName(c9),0));
return dc
}}}}}return cZ(da.replace(cU,"$1"),e,dc,df,de)
}cR.matches=function(c8,e){return cR(c8,null,null,e)
};
cR.matchesSelector=function(e,c8){return cR(c8,null,null,[e]).length>0
};
function cJ(e){return function(c9){var c8=c9.nodeName.toLowerCase();
return c8==="input"&&c9.type===e
}
}function b4(e){return function(c9){var c8=c9.nodeName.toLowerCase();
return(c8==="input"||c8==="button")&&c9.type===e
}
}function cG(e){return c2(function(c8){c8=+c8;
return c2(function(c9,dd){var db,da=e([],c9.length,c8),dc=da.length;
while(dc--){if(c9[(db=da[dc])]){c9[db]=!(dd[db]=c9[db])
}}})
})
}b1=cR.getText=function(db){var da,c8="",c9=0,e=db.nodeType;
if(e){if(e===1||e===9||e===11){if(typeof db.textContent==="string"){return db.textContent
}else{for(db=db.firstChild;
db;
db=db.nextSibling){c8+=b1(db)
}}}else{if(e===3||e===4){return db.nodeValue
}}}else{for(;
(da=db[c9]);
c9++){c8+=b1(da)
}}return c8
};
cn=cR.isXML=function(e){var c8=e&&(e.ownerDocument||e).documentElement;
return c8?c8.nodeName!=="HTML":false
};
cB=cR.contains=cc.contains?function(c8,e){var da=c8.nodeType===9?c8.documentElement:c8,c9=e&&e.parentNode;
return c8===c9||!!(c9&&c9.nodeType===1&&da.contains&&da.contains(c9))
}:cc.compareDocumentPosition?function(c8,e){return e&&!!(c8.compareDocumentPosition(e)&16)
}:function(c8,e){while((e=e.parentNode)){if(e===c8){return true
}}return false
};
cR.attr=function(c9,c8){var da,e=cn(c9);
if(!e){c8=c8.toLowerCase()
}if((da=cM.attrHandle[c8])){return da(c9)
}if(e||cr){return c9.getAttribute(c8)
}da=c9.getAttributeNode(c8);
return da?typeof c9[c8]==="boolean"?c9[c8]?c8:null:da.specified?da.value:null:null
};
cM=cR.selectors={cacheLength:50,createPseudo:c2,match:cH,attrHandle:cD?{}:{href:function(e){return e.getAttribute("href",2)
},type:function(e){return e.getAttribute("type")
}},find:{ID:cb?function(da,c9,c8){if(typeof c9.getElementById!==cv&&!c8){var e=c9.getElementById(da);
return e&&e.parentNode?[e]:[]
}}:function(da,c9,c8){if(typeof c9.getElementById!==cv&&!c8){var e=c9.getElementById(da);
return e?e.id===da||typeof e.getAttributeNode!==cv&&e.getAttributeNode("id").value===da?[e]:ci:[]
}},TAG:b8?function(e,c8){if(typeof c8.getElementsByTagName!==cv){return c8.getElementsByTagName(e)
}}:function(e,db){var da=db.getElementsByTagName(e);
if(e==="*"){var dc,c9=[],c8=0;
for(;
(dc=da[c8]);
c8++){if(dc.nodeType===1){c9.push(dc)
}}return c9
}return da
},NAME:b0&&function(e,c8){if(typeof c8.getElementsByName!==cv){return c8.getElementsByName(name)
}},CLASS:cC&&function(c9,c8,e){if(typeof c8.getElementsByClassName!==cv&&!e){return c8.getElementsByClassName(c9)
}}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(cu,"");
e[3]=(e[4]||e[5]||"").replace(cu,"");
if(e[2]==="~="){e[3]=" "+e[3]+" "
}return e.slice(0,4)
},CHILD:function(e){e[1]=e[1].toLowerCase();
if(e[1]==="nth"){if(!e[2]){cR.error(e[0])
}e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd"));
e[4]=+((e[6]+e[7])||e[2]==="odd")
}else{if(e[2]){cR.error(e[0])
}}return e
},PSEUDO:function(c8){var c9,e;
if(cH.CHILD.test(c8[0])){return null
}if(c8[3]){c8[2]=c8[3]
}else{if((c9=c8[4])){if(cN.test(c9)&&(e=b2(c9,true))&&(e=c9.indexOf(")",c9.length-e)-c9.length)){c9=c9.slice(0,e);
c8[0]=c8[0].slice(0,e)
}c8[2]=c9
}}return c8.slice(0,3)
}},filter:{ID:cb?function(e){e=e.replace(cu,"");
return function(c8){return c8.getAttribute("id")===e
}
}:function(e){e=e.replace(cu,"");
return function(c9){var c8=typeof c9.getAttributeNode!==cv&&c9.getAttributeNode("id");
return c8&&c8.value===e
}
},TAG:function(e){if(e==="*"){return function(){return true
}
}e=e.replace(cu,"").toLowerCase();
return function(c8){return c8.nodeName&&c8.nodeName.toLowerCase()===e
}
},CLASS:function(e){var c8=cV[c0][e+" "];
return c8||(c8=new RegExp("(^|"+cz+")"+e+"("+cz+"|$)"))&&cV(e,function(c9){return c8.test(c9.className||(typeof c9.getAttribute!==cv&&c9.getAttribute("class"))||"")
})
},ATTR:function(c9,c8,e){return function(dc,db){var da=cR.attr(dc,c9);
if(da==null){return c8==="!="
}if(!c8){return true
}da+="";
return c8==="="?da===e:c8==="!="?da!==e:c8==="^="?e&&da.indexOf(e)===0:c8==="*="?e&&da.indexOf(e)>-1:c8==="$="?e&&da.substr(da.length-e.length)===e:c8==="~="?(" "+da+" ").indexOf(e)>-1:c8==="|="?da===e||da.substr(0,e.length+1)===e+"-":false
}
},CHILD:function(e,c9,da,c8){if(e==="nth"){return function(dd){var dc,de,db=dd.parentNode;
if(da===1&&c8===0){return true
}if(db){de=0;
for(dc=db.firstChild;
dc;
dc=dc.nextSibling){if(dc.nodeType===1){de++;
if(dd===dc){break
}}}}de-=c8;
return de===da||(de%da===0&&de/da>=0)
}
}return function(dc){var db=dc;
switch(e){case"only":case"first":while((db=db.previousSibling)){if(db.nodeType===1){return false
}}if(e==="first"){return true
}db=dc;
case"last":while((db=db.nextSibling)){if(db.nodeType===1){return false
}}return true
}}
},PSEUDO:function(da,c9){var e,c8=cM.pseudos[da]||cM.setFilters[da.toLowerCase()]||cR.error("unsupported pseudo: "+da);
if(c8[c0]){return c8(c9)
}if(c8.length>1){e=[da,da,"",c9];
return cM.setFilters.hasOwnProperty(da.toLowerCase())?c2(function(dd,df){var dc,db=c8(dd,c9),de=db.length;
while(de--){dc=cp.call(dd,db[de]);
dd[dc]=!(df[dc]=db[de])
}}):function(db){return c8(db,0,e)
}
}return c8
}},pseudos:{not:c2(function(e){var c8=[],c9=[],da=ce(e.replace(cU,"$1"));
return da[c0]?c2(function(dc,dh,df,dd){var dg,db=da(dc,null,dd,[]),de=dc.length;
while(de--){if((dg=db[de])){dc[de]=!(dh[de]=dg)
}}}):function(dd,dc,db){c8[0]=dd;
da(c8,null,db,c9);
return !c9.pop()
}
}),has:c2(function(e){return function(c8){return cR(e,c8).length>0
}
}),contains:c2(function(e){return function(c8){return(c8.textContent||c8.innerText||b1(c8)).indexOf(e)>-1
}
}),enabled:function(e){return e.disabled===false
},disabled:function(e){return e.disabled===true
},checked:function(e){var c8=e.nodeName.toLowerCase();
return(c8==="input"&&!!e.checked)||(c8==="option"&&!!e.selected)
},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex
}return e.selected===true
},parent:function(e){return !cM.pseudos.empty(e)
},empty:function(c8){var e;
c8=c8.firstChild;
while(c8){if(c8.nodeName>"@"||(e=c8.nodeType)===3||e===4){return false
}c8=c8.nextSibling
}return true
},header:function(e){return ct.test(e.nodeName)
},text:function(c9){var c8,e;
return c9.nodeName.toLowerCase()==="input"&&(c8=c9.type)==="text"&&((e=c9.getAttribute("type"))==null||e.toLowerCase()===c8)
},radio:cJ("radio"),checkbox:cJ("checkbox"),file:cJ("file"),password:cJ("password"),image:cJ("image"),submit:b4("submit"),reset:b4("reset"),button:function(c8){var e=c8.nodeName.toLowerCase();
return e==="input"&&c8.type==="button"||e==="button"
},input:function(e){return cO.test(e.nodeName)
},focus:function(e){var c8=e.ownerDocument;
return e===c8.activeElement&&(!c8.hasFocus||c8.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},active:function(e){return e===e.ownerDocument.activeElement
},first:cG(function(){return[0]
}),last:cG(function(e,c8){return[c8-1]
}),eq:cG(function(e,c9,c8){return[c8<0?c8+c9:c8]
}),even:cG(function(e,c9){for(var c8=0;
c8<c9;
c8+=2){e.push(c8)
}return e
}),odd:cG(function(e,c9){for(var c8=1;
c8<c9;
c8+=2){e.push(c8)
}return e
}),lt:cG(function(e,da,c9){for(var c8=c9<0?c9+da:c9;
--c8>=0;
){e.push(c8)
}return e
}),gt:cG(function(e,da,c9){for(var c8=c9<0?c9+da:c9;
++c8<da;
){e.push(c8)
}return e
})}};
function b3(c8,e,c9){if(c8===e){return c9
}var da=c8.nextSibling;
while(da){if(da===e){return -1
}da=da.nextSibling
}return 1
}ch=cc.compareDocumentPosition?function(c8,e){if(c8===e){cd=true;
return 0
}return(!c8.compareDocumentPosition||!e.compareDocumentPosition?c8.compareDocumentPosition:c8.compareDocumentPosition(e)&4)?-1:1
}:function(df,de){if(df===de){cd=true;
return 0
}else{if(df.sourceIndex&&de.sourceIndex){return df.sourceIndex-de.sourceIndex
}}var dc,c8,c9=[],e=[],db=df.parentNode,dd=de.parentNode,dg=db;
if(db===dd){return b3(df,de)
}else{if(!db){return -1
}else{if(!dd){return 1
}}}while(dg){c9.unshift(dg);
dg=dg.parentNode
}dg=dd;
while(dg){e.unshift(dg);
dg=dg.parentNode
}dc=c9.length;
c8=e.length;
for(var da=0;
da<dc&&da<c8;
da++){if(c9[da]!==e[da]){return b3(c9[da],e[da])
}}return da===dc?b3(df,e[da],-1):b3(c9[da],de,1)
};
[0,0].sort(ch);
ca=!cd;
cR.uniqueSort=function(c9){var da,db=[],c8=1,e=0;
cd=ca;
c9.sort(ch);
if(cd){for(;
(da=c9[c8]);
c8++){if(da===c9[c8-1]){e=db.push(c8)
}}while(e--){c9.splice(db[e],1)
}}return c9
};
cR.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)
};
function b2(db,dg){var c8,dc,de,df,dd,c9,e,da=cW[c0][db+" "];
if(da){return dg?0:da.slice(0)
}dd=db;
c9=[];
e=cM.preFilter;
while(dd){if(!c8||(dc=b6.exec(dd))){if(dc){dd=dd.slice(dc[0].length)||dd
}c9.push(de=[])
}c8=false;
if((dc=cI.exec(dd))){de.push(c8=new b5(dc.shift()));
dd=dd.slice(c8.length);
c8.type=dc[0].replace(cU," ")
}for(df in cM.filter){if((dc=cH[df].exec(dd))&&(!e[df]||(dc=e[df](dc)))){de.push(c8=new b5(dc.shift()));
dd=dd.slice(c8.length);
c8.type=df;
c8.matches=dc
}}if(!c8){break
}}return dg?dd.length:dd?cR.error(db):cW(db,c9).slice(0)
}function cx(db,c9,da){var e=c9.dir,dc=da&&c9.dir==="parentNode",c8=cg++;
return c9.first?function(df,de,dd){while((df=df[e])){if(dc||df.nodeType===1){return db(df,de,dd)
}}}:function(dg,df,de){if(!de){var dd,dh=cs+" "+c8+" ",di=dh+cY;
while((dg=dg[e])){if(dc||dg.nodeType===1){if((dd=dg[c0])===di){return dg.sizset
}else{if(typeof dd==="string"&&dd.indexOf(dh)===0){if(dg.sizset){return dg
}}else{dg[c0]=di;
if(db(dg,df,de)){dg.sizset=true;
return dg
}dg.sizset=false
}}}}}else{while((dg=dg[e])){if(dc||dg.nodeType===1){if(db(dg,df,de)){return dg
}}}}}
}function cf(e){return e.length>1?function(db,da,c8){var c9=e.length;
while(c9--){if(!e[c9](db,da,c8)){return false
}}return true
}:e[0]
}function cw(e,c8,c9,da,dd){var db,dg=[],dc=0,de=e.length,df=c8!=null;
for(;
dc<de;
dc++){if((db=e[dc])){if(!c9||c9(db,da,dd)){dg.push(db);
if(df){c8.push(dc)
}}}}return dg
}function c3(c9,c8,db,da,dc,e){if(da&&!da[c0]){da=c3(da)
}if(dc&&!dc[c0]){dc=c3(dc,e)
}return c2(function(dn,dk,df,dm){var dq,dl,dh,dg=[],dp=[],de=dk.length,dd=dn||cq(c8||"*",df.nodeType?[df]:df,[]),di=c9&&(dn||!c8)?cw(dd,dg,c9,df,dm):dd,dj=db?dc||(dn?c9:de||da)?[]:dk:di;
if(db){db(di,dj,df,dm)
}if(da){dq=cw(dj,dp);
da(dq,[],df,dm);
dl=dq.length;
while(dl--){if((dh=dq[dl])){dj[dp[dl]]=!(di[dp[dl]]=dh)
}}}if(dn){if(dc||c9){if(dc){dq=[];
dl=dj.length;
while(dl--){if((dh=dj[dl])){dq.push((di[dl]=dh))
}}dc(null,(dj=[]),dq,dm)
}dl=dj.length;
while(dl--){if((dh=dj[dl])&&(dq=dc?cp.call(dn,dh):dg[dl])>-1){dn[dq]=!(dk[dq]=dh)
}}}}else{dj=cw(dj===dk?dj.splice(de,dj.length):dj);
if(dc){dc(null,dk,dj,dm)
}else{cX.apply(dk,dj)
}}})
}function cy(dd){var c8,db,c9,dc=dd.length,dg=cM.relative[dd[0].type],dh=dg||cM.relative[" "],da=dg?1:0,de=cx(function(di){return di===c8
},dh,true),df=cx(function(di){return cp.call(c8,di)>-1
},dh,true),e=[function(dk,dj,di){return(!dg&&(di||dj!==cK))||((c8=dj).nodeType?de(dk,dj,di):df(dk,dj,di))
}];
for(;
da<dc;
da++){if((db=cM.relative[dd[da].type])){e=[cx(cf(e),db)]
}else{db=cM.filter[dd[da].type].apply(null,dd[da].matches);
if(db[c0]){c9=++da;
for(;
c9<dc;
c9++){if(cM.relative[dd[c9].type]){break
}}return c3(da>1&&cf(e),da>1&&dd.slice(0,da-1).join("").replace(cU,"$1"),db,da<c9&&cy(dd.slice(da,c9)),c9<dc&&cy((dd=dd.slice(c9))),c9<dc&&dd.join(""))
}e.push(db)
}}return cf(e)
}function b7(da,c9){var e=c9.length>0,db=da.length>0,c8=function(dl,df,dk,dj,ds){var dg,dh,dm,dr=[],dq=0,di="0",dc=dl&&[],dn=ds!=null,dp=cK,de=dl||db&&cM.find.TAG("*",ds&&df.parentNode||df),dd=(cs+=dp==null?1:Math.E);
if(dn){cK=df!==b9&&df;
cY=c8.el
}for(;
(dg=de[di])!=null;
di++){if(db&&dg){for(dh=0;
(dm=da[dh]);
dh++){if(dm(dg,df,dk)){dj.push(dg);
break
}}if(dn){cs=dd;
cY=++c8.el
}}if(e){if((dg=!dm&&dg)){dq--
}if(dl){dc.push(dg)
}}}dq+=di;
if(e&&di!==dq){for(dh=0;
(dm=c9[dh]);
dh++){dm(dc,dr,df,dk)
}if(dl){if(dq>0){while(di--){if(!(dc[di]||dr[di])){dr[di]=cF.call(dj)
}}}dr=cw(dr)
}cX.apply(dj,dr);
if(dn&&!dl&&dr.length>0&&(dq+c9.length)>1){cR.uniqueSort(dj)
}}if(dn){cs=dd;
cK=dp
}return dc
};
c8.el=0;
return e?c2(c8):c8
}ce=cR.compile=function(e,dc){var c9,c8=[],db=[],da=co[c0][e+" "];
if(!da){if(!dc){dc=b2(e)
}c9=dc.length;
while(c9--){da=cy(dc[c9]);
if(da[c0]){c8.push(da)
}else{db.push(da)
}}da=co(e,b7(db,c8))
}return da
};
function cq(c8,db,da){var c9=0,e=db.length;
for(;
c9<e;
c9++){cR(c8,db[c9],da)
}return da
}function cZ(c9,e,db,df,de){var dc,di,c8,dh,dg,dd=b2(c9),da=dd.length;
if(!df){if(dd.length===1){di=dd[0]=dd[0].slice(0);
if(di.length>2&&(c8=di[0]).type==="ID"&&e.nodeType===9&&!de&&cM.relative[di[1].type]){e=cM.find.ID(c8.matches[0].replace(cu,""),e,de)[0];
if(!e){return db
}c9=c9.slice(di.shift().length)
}for(dc=cH.POS.test(c9)?-1:di.length-1;
dc>=0;
dc--){c8=di[dc];
if(cM.relative[(dh=c8.type)]){break
}if((dg=cM.find[dh])){if((df=dg(c8.matches[0].replace(cu,""),cS.test(di[0].type)&&e.parentNode||e,de))){di.splice(dc,1);
c9=df.length&&di.join("");
if(!c9){cX.apply(db,cm.call(df,0));
return db
}break
}}}}}ce(c9,dd)(df,e,de,db,cS.test(c9));
return db
}if(b9.querySelectorAll){(function(){var dc,dd=cZ,db=/'|\\/g,c9=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,c8=[":focus"],e=[":active"],da=cc.matchesSelector||cc.mozMatchesSelector||cc.webkitMatchesSelector||cc.oMatchesSelector||cc.msMatchesSelector;
cL(function(de){de.innerHTML="<select><option selected=''></option></select>";
if(!de.querySelectorAll("[selected]").length){c8.push("\\["+cz+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
}if(!de.querySelectorAll(":checked").length){c8.push(":checked")
}});
cL(function(de){de.innerHTML="<p test=''></p>";
if(de.querySelectorAll("[test^='']").length){c8.push("[*^$]="+cz+"*(?:\"\"|'')")
}de.innerHTML="<input type='hidden'/>";
if(!de.querySelectorAll(":enabled").length){c8.push(":enabled",":disabled")
}});
c8=new RegExp(c8.join("|"));
cZ=function(dk,df,dm,dq,dp){if(!dq&&!dp&&!c8.test(dk)){var di,dn,dh=true,de=c0,dg=df,dl=df.nodeType===9&&dk;
if(df.nodeType===1&&df.nodeName.toLowerCase()!=="object"){di=b2(dk);
if((dh=df.getAttribute("id"))){de=dh.replace(db,"\\$&")
}else{df.setAttribute("id",de)
}de="[id='"+de+"'] ";
dn=di.length;
while(dn--){di[dn]=de+di[dn].join("")
}dg=cS.test(dk)&&df.parentNode||df;
dl=di.join(",")
}if(dl){try{cX.apply(dm,cm.call(dg.querySelectorAll(dl),0));
return dm
}catch(dj){}finally{if(!dh){df.removeAttribute("id")
}}}}return dd(dk,df,dm,dq,dp)
};
if(da){cL(function(df){dc=da.call(df,"div");
try{da.call(df,"[test!='']:sizzle");
e.push("!=",c7)
}catch(de){}});
e=new RegExp(e.join("|"));
cR.matchesSelector=function(df,dh){dh=dh.replace(c9,"='$1']");
if(!cn(df)&&!e.test(dh)&&!c8.test(dh)){try{var de=da.call(df,dh);
if(de||dc||df.document&&df.document.nodeType!==11){return de
}}catch(dg){}}return cR(dh,null,null,[df]).length>0
}
}})()
}cM.pseudos.nth=cM.pseudos.eq;
function ck(){}cM.filters=ck.prototype=cM.pseudos;
cM.setFilters=new ck();
cR.attr=bH.attr;
bH.find=cR;
bH.expr=cR.selectors;
bH.expr[":"]=bH.expr.pseudos;
bH.unique=cR.uniqueSort;
bH.text=cR.getText;
bH.isXMLDoc=cR.isXML;
bH.contains=cR.contains
})(a3);
var ah=/Until$/,br=/^(?:parents|prev(?:Until|All))/,am=/^.[^:#\[\.,]*$/,z=bH.expr.match.needsContext,bv={children:true,contents:true,next:true,prev:true};
bH.fn.extend({find:function(e){var b3,b0,b5,b6,b4,b2,b1=this;
if(typeof e!=="string"){return bH(e).filter(function(){for(b3=0,b0=b1.length;
b3<b0;
b3++){if(bH.contains(b1[b3],this)){return true
}}})
}b2=this.pushStack("","find",e);
for(b3=0,b0=this.length;
b3<b0;
b3++){b5=b2.length;
bH.find(e,this[b3],b2);
if(b3>0){for(b6=b5;
b6<b2.length;
b6++){for(b4=0;
b4<b5;
b4++){if(b2[b4]===b2[b6]){b2.splice(b6--,1);
break
}}}}}return b2
},has:function(b2){var b1,b0=bH(b2,this),e=b0.length;
return this.filter(function(){for(b1=0;
b1<e;
b1++){if(bH.contains(this,b0[b1])){return true
}}})
},not:function(e){return this.pushStack(aN(this,e,false),"not",e)
},filter:function(e){return this.pushStack(aN(this,e,true),"filter",e)
},is:function(e){return !!e&&(typeof e==="string"?z.test(e)?bH(e,this.context).index(this[0])>=0:bH.filter(e,this).length>0:this.filter(e).length>0)
},closest:function(b3,b2){var b4,b1=0,e=this.length,b0=[],b5=z.test(b3)||typeof b3!=="string"?bH(b3,b2||this.context):0;
for(;
b1<e;
b1++){b4=this[b1];
while(b4&&b4.ownerDocument&&b4!==b2&&b4.nodeType!==11){if(b5?b5.index(b4)>-1:bH.find.matchesSelector(b4,b3)){b0.push(b4);
break
}b4=b4.parentNode
}}b0=b0.length>1?bH.unique(b0):b0;
return this.pushStack(b0,"closest",b3)
},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1
}if(typeof e==="string"){return bH.inArray(this[0],bH(e))
}return bH.inArray(e.jquery?e[0]:e,this)
},add:function(e,b0){var b2=typeof e==="string"?bH(e,b0):bH.makeArray(e&&e.nodeType?[e]:e),b1=bH.merge(this.get(),b2);
return this.pushStack(aS(b2[0])||aS(b1[0])?b1:bH.unique(b1))
},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))
}});
bH.fn.andSelf=bH.fn.addBack;
function aS(e){return !e||!e.parentNode||e.parentNode.nodeType===11
}function aZ(b0,e){do{b0=b0[e]
}while(b0&&b0.nodeType!==1);
return b0
}bH.each({parent:function(b0){var e=b0.parentNode;
return e&&e.nodeType!==11?e:null
},parents:function(e){return bH.dir(e,"parentNode")
},parentsUntil:function(b0,e,b1){return bH.dir(b0,"parentNode",b1)
},next:function(e){return aZ(e,"nextSibling")
},prev:function(e){return aZ(e,"previousSibling")
},nextAll:function(e){return bH.dir(e,"nextSibling")
},prevAll:function(e){return bH.dir(e,"previousSibling")
},nextUntil:function(b0,e,b1){return bH.dir(b0,"nextSibling",b1)
},prevUntil:function(b0,e,b1){return bH.dir(b0,"previousSibling",b1)
},siblings:function(e){return bH.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return bH.sibling(e.firstChild)
},contents:function(e){return bH.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:bH.merge([],e.childNodes)
}},function(e,b0){bH.fn[e]=function(b3,b1){var b2=bH.map(this,b0,b3);
if(!ah.test(e)){b1=b3
}if(b1&&typeof b1==="string"){b2=bH.filter(b1,b2)
}b2=this.length>1&&!bv[e]?bH.unique(b2):b2;
if(this.length>1&&br.test(e)){b2=b2.reverse()
}return this.pushStack(b2,e,a5.call(arguments).join(","))
}
});
bH.extend({filter:function(b1,e,b0){if(b0){b1=":not("+b1+")"
}return e.length===1?bH.find.matchesSelector(e[0],b1)?[e[0]]:[]:bH.find.matches(b1,e)
},dir:function(b1,b0,b3){var e=[],b2=b1[b0];
while(b2&&b2.nodeType!==9&&(b3===aC||b2.nodeType!==1||!bH(b2).is(b3))){if(b2.nodeType===1){e.push(b2)
}b2=b2[b0]
}return e
},sibling:function(b1,b0){var e=[];
for(;
b1;
b1=b1.nextSibling){if(b1.nodeType===1&&b1!==b0){e.push(b1)
}}return e
}});
function aN(b2,b1,e){b1=b1||0;
if(bH.isFunction(b1)){return bH.grep(b2,function(b4,b3){var b5=!!b1.call(b4,b3,b4);
return b5===e
})
}else{if(b1.nodeType){return bH.grep(b2,function(b4,b3){return(b4===b1)===e
})
}else{if(typeof b1==="string"){var b0=bH.grep(b2,function(b3){return b3.nodeType===1
});
if(am.test(b1)){return bH.filter(b1,b0,!e)
}else{b1=bH.filter(b1,b0)
}}}}return bH.grep(b2,function(b4,b3){return(bH.inArray(b4,b1)>=0)===e
})
}function B(e){var b1=c.split("|"),b0=e.createDocumentFragment();
if(b0.createElement){while(b1.length){b0.createElement(b1.pop())
}}return b0
}var c="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",aw=/ jQuery\d+="(?:null|\d+)"/g,bZ=/^\s+/,az=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,p=/<([\w:]+)/,bU=/<tbody/i,K=/<|&#?\w+;/,ak=/<(?:script|style|link)/i,aq=/<(?:script|object|embed|option|style)/i,L=new RegExp("<(?:"+c+")[\\s/>]","i"),aF=/^(?:checkbox|radio)$/,bS=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,aI=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,U={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},aR=B(o),l=aR.appendChild(o.createElement("div"));
U.optgroup=U.option;
U.tbody=U.tfoot=U.colgroup=U.caption=U.thead;
U.th=U.td;
if(!bH.support.htmlSerialize){U._default=[1,"X<div>","</div>"]
}bH.fn.extend({text:function(e){return bH.access(this,function(b0){return b0===aC?bH.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(b0))
},null,e,arguments.length)
},wrapAll:function(e){if(bH.isFunction(e)){return this.each(function(b1){bH(this).wrapAll(e.call(this,b1))
})
}if(this[0]){var b0=bH(e,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){b0.insertBefore(this[0])
}b0.map(function(){var b1=this;
while(b1.firstChild&&b1.firstChild.nodeType===1){b1=b1.firstChild
}return b1
}).append(this)
}return this
},wrapInner:function(e){if(bH.isFunction(e)){return this.each(function(b0){bH(this).wrapInner(e.call(this,b0))
})
}return this.each(function(){var b0=bH(this),b1=b0.contents();
if(b1.length){b1.wrapAll(e)
}else{b0.append(e)
}})
},wrap:function(e){var b0=bH.isFunction(e);
return this.each(function(b1){bH(this).wrapAll(b0?e.call(this,b1):e)
})
},unwrap:function(){return this.parent().each(function(){if(!bH.nodeName(this,"body")){bH(this).replaceWith(this.childNodes)
}}).end()
},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11){this.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11){this.insertBefore(e,this.firstChild)
}})
},before:function(){if(!aS(this[0])){return this.domManip(arguments,false,function(b0){this.parentNode.insertBefore(b0,this)
})
}if(arguments.length){var e=bH.clean(arguments);
return this.pushStack(bH.merge(e,this),"before",this.selector)
}},after:function(){if(!aS(this[0])){return this.domManip(arguments,false,function(b0){this.parentNode.insertBefore(b0,this.nextSibling)
})
}if(arguments.length){var e=bH.clean(arguments);
return this.pushStack(bH.merge(this,e),"after",this.selector)
}},remove:function(e,b2){var b1,b0=0;
for(;
(b1=this[b0])!=null;
b0++){if(!e||bH.filter(e,[b1]).length){if(!b2&&b1.nodeType===1){bH.cleanData(b1.getElementsByTagName("*"));
bH.cleanData([b1])
}if(b1.parentNode){b1.parentNode.removeChild(b1)
}}}return this
},empty:function(){var b0,e=0;
for(;
(b0=this[e])!=null;
e++){if(b0.nodeType===1){bH.cleanData(b0.getElementsByTagName("*"))
}while(b0.firstChild){b0.removeChild(b0.firstChild)
}}return this
},clone:function(b0,e){b0=b0==null?false:b0;
e=e==null?b0:e;
return this.map(function(){return bH.clone(this,b0,e)
})
},html:function(e){return bH.access(this,function(b3){var b2=this[0]||{},b1=0,b0=this.length;
if(b3===aC){return b2.nodeType===1?b2.innerHTML.replace(aw,""):aC
}if(typeof b3==="string"&&!ak.test(b3)&&(bH.support.htmlSerialize||!L.test(b3))&&(bH.support.leadingWhitespace||!bZ.test(b3))&&!U[(p.exec(b3)||["",""])[1].toLowerCase()]){b3=b3.replace(az,"<$1></$2>");
try{for(;
b1<b0;
b1++){b2=this[b1]||{};
if(b2.nodeType===1){bH.cleanData(b2.getElementsByTagName("*"));
b2.innerHTML=b3
}}b2=0
}catch(b4){}}if(b2){this.empty().append(b3)
}},null,e,arguments.length)
},replaceWith:function(e){if(!aS(this[0])){if(bH.isFunction(e)){return this.each(function(b2){var b1=bH(this),b0=b1.html();
b1.replaceWith(e.call(this,b2,b0))
})
}if(typeof e!=="string"){e=bH(e).detach()
}return this.each(function(){var b1=this.nextSibling,b0=this.parentNode;
bH(this).remove();
if(b1){bH(b1).before(e)
}else{bH(b0).append(e)
}})
}return this.length?this.pushStack(bH(bH.isFunction(e)?e():e),"replaceWith",e):this
},detach:function(e){return this.remove(e,true)
},domManip:function(b5,b9,b8){b5=[].concat.apply([],b5);
var b1,b3,b4,b7,b2=0,b6=b5[0],b0=[],e=this.length;
if(!bH.support.checkClone&&e>1&&typeof b6==="string"&&bS.test(b6)){return this.each(function(){bH(this).domManip(b5,b9,b8)
})
}if(bH.isFunction(b6)){return this.each(function(cb){var ca=bH(this);
b5[0]=b6.call(this,cb,b9?ca.html():aC);
ca.domManip(b5,b9,b8)
})
}if(this[0]){b1=bH.buildFragment(b5,this,b0);
b4=b1.fragment;
b3=b4.firstChild;
if(b4.childNodes.length===1){b4=b3
}if(b3){b9=b9&&bH.nodeName(b3,"tr");
for(b7=b1.cacheable||e-1;
b2<e;
b2++){b8.call(b9&&bH.nodeName(this[b2],"table")?y(this[b2],"tbody"):this[b2],b2===b7?b4:bH.clone(b4,true,true))
}}b4=b3=null;
if(b0.length){bH.each(b0,function(ca,cb){if(cb.src){if(bH.ajax){bH.ajax({url:cb.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})
}else{bH.error("no ajax")
}}else{bH.globalEval((cb.text||cb.textContent||cb.innerHTML||"").replace(aI,""))
}if(cb.parentNode){cb.parentNode.removeChild(cb)
}})
}}return this
}});
function y(b0,e){return b0.getElementsByTagName(e)[0]||b0.appendChild(b0.ownerDocument.createElement(e))
}function ap(b6,b0){if(b0.nodeType!==1||!bH.hasData(b6)){return
}var b3,b2,e,b5=bH._data(b6),b4=bH._data(b0,b5),b1=b5.events;
if(b1){delete b4.handle;
b4.events={};
for(b3 in b1){for(b2=0,e=b1[b3].length;
b2<e;
b2++){bH.event.add(b0,b3,b1[b3][b2])
}}}if(b4.data){b4.data=bH.extend({},b4.data)
}}function G(b0,e){var b1;
if(e.nodeType!==1){return
}if(e.clearAttributes){e.clearAttributes()
}if(e.mergeAttributes){e.mergeAttributes(b0)
}b1=e.nodeName.toLowerCase();
if(b1==="object"){if(e.parentNode){e.outerHTML=b0.outerHTML
}if(bH.support.html5Clone&&(b0.innerHTML&&!bH.trim(e.innerHTML))){e.innerHTML=b0.innerHTML
}}else{if(b1==="input"&&aF.test(b0.type)){e.defaultChecked=e.checked=b0.checked;
if(e.value!==b0.value){e.value=b0.value
}}else{if(b1==="option"){e.selected=b0.defaultSelected
}else{if(b1==="input"||b1==="textarea"){e.defaultValue=b0.defaultValue
}else{if(b1==="script"&&e.text!==b0.text){e.text=b0.text
}}}}}e.removeAttribute(bH.expando)
}bH.buildFragment=function(b2,b3,b0){var b1,e,b4,b5=b2[0];
b3=b3||o;
b3=!b3.nodeType&&b3[0]||b3;
b3=b3.ownerDocument||b3;
if(b2.length===1&&typeof b5==="string"&&b5.length<512&&b3===o&&b5.charAt(0)==="<"&&!aq.test(b5)&&(bH.support.checkClone||!bS.test(b5))&&(bH.support.html5Clone||!L.test(b5))){e=true;
b1=bH.fragments[b5];
b4=b1!==aC
}if(!b1){b1=b3.createDocumentFragment();
bH.clean(b2,b3,b1,b0);
if(e){bH.fragments[b5]=b4&&b1
}}return{fragment:b1,cacheable:e}
};
bH.fragments={};
bH.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,b0){bH.fn[e]=function(b1){var b3,b5=0,b4=[],b7=bH(b1),b2=b7.length,b6=this.length===1&&this[0].parentNode;
if((b6==null||b6&&b6.nodeType===11&&b6.childNodes.length===1)&&b2===1){b7[b0](this[0]);
return this
}else{for(;
b5<b2;
b5++){b3=(b5>0?this.clone(true):this).get();
bH(b7[b5])[b0](b3);
b4=b4.concat(b3)
}return this.pushStack(b4,e,b7.selector)
}}
});
function m(e){if(typeof e.getElementsByTagName!=="undefined"){return e.getElementsByTagName("*")
}else{if(typeof e.querySelectorAll!=="undefined"){return e.querySelectorAll("*")
}else{return[]
}}}function bT(e){if(aF.test(e.type)){e.defaultChecked=e.checked
}}bH.extend({clone:function(b3,b5,b1){var e,b0,b2,b4;
if(bH.support.html5Clone||bH.isXMLDoc(b3)||!L.test("<"+b3.nodeName+">")){b4=b3.cloneNode(true)
}else{l.innerHTML=b3.outerHTML;
l.removeChild(b4=l.firstChild)
}if((!bH.support.noCloneEvent||!bH.support.noCloneChecked)&&(b3.nodeType===1||b3.nodeType===11)&&!bH.isXMLDoc(b3)){G(b3,b4);
e=m(b3);
b0=m(b4);
for(b2=0;
e[b2];
++b2){if(b0[b2]){G(e[b2],b0[b2])
}}}if(b5){ap(b3,b4);
if(b1){e=m(b3);
b0=m(b4);
for(b2=0;
e[b2];
++b2){ap(e[b2],b0[b2])
}}}e=b0=null;
return b4
},clean:function(cc,b1,e,b2){var b9,b8,cb,cg,b5,cf,b6,b3,b0,ca,ce,b7,b4=b1===o&&aR,cd=[];
if(!b1||typeof b1.createDocumentFragment==="undefined"){b1=o
}for(b9=0;
(cb=cc[b9])!=null;
b9++){if(typeof cb==="number"){cb+=""
}if(!cb){continue
}if(typeof cb==="string"){if(!K.test(cb)){cb=b1.createTextNode(cb)
}else{b4=b4||B(b1);
b6=b1.createElement("div");
b4.appendChild(b6);
cb=cb.replace(az,"<$1></$2>");
cg=(p.exec(cb)||["",""])[1].toLowerCase();
b5=U[cg]||U._default;
cf=b5[0];
b6.innerHTML=b5[1]+cb+b5[2];
while(cf--){b6=b6.lastChild
}if(!bH.support.tbody){b3=bU.test(cb);
b0=cg==="table"&&!b3?b6.firstChild&&b6.firstChild.childNodes:b5[1]==="<table>"&&!b3?b6.childNodes:[];
for(b8=b0.length-1;
b8>=0;
--b8){if(bH.nodeName(b0[b8],"tbody")&&!b0[b8].childNodes.length){b0[b8].parentNode.removeChild(b0[b8])
}}}if(!bH.support.leadingWhitespace&&bZ.test(cb)){b6.insertBefore(b1.createTextNode(bZ.exec(cb)[0]),b6.firstChild)
}cb=b6.childNodes;
b6.parentNode.removeChild(b6)
}}if(cb.nodeType){cd.push(cb)
}else{bH.merge(cd,cb)
}}if(b6){cb=b6=b4=null
}if(!bH.support.appendChecked){for(b9=0;
(cb=cd[b9])!=null;
b9++){if(bH.nodeName(cb,"input")){bT(cb)
}else{if(typeof cb.getElementsByTagName!=="undefined"){bH.grep(cb.getElementsByTagName("input"),bT)
}}}}if(e){ce=function(ch){if(!ch.type||bx.test(ch.type)){return b2?b2.push(ch.parentNode?ch.parentNode.removeChild(ch):ch):e.appendChild(ch)
}};
for(b9=0;
(cb=cd[b9])!=null;
b9++){if(!(bH.nodeName(cb,"script")&&ce(cb))){e.appendChild(cb);
if(typeof cb.getElementsByTagName!=="undefined"){b7=bH.grep(bH.merge([],cb.getElementsByTagName("script")),ce);
cd.splice.apply(cd,[b9+1,0].concat(b7));
b9+=b7.length
}}}}return cd
},cleanData:function(b0,b8){var b3,b1,b2,b7,b4=0,b9=bH.expando,e=bH.cache,b5=bH.support.deleteExpando,b6=bH.event.special;
for(;
(b2=b0[b4])!=null;
b4++){if(b8||bH.acceptData(b2)){b1=b2[b9];
b3=b1&&e[b1];
if(b3){if(b3.events){for(b7 in b3.events){if(b6[b7]){bH.event.remove(b2,b7)
}else{bH.removeEvent(b2,b7,b3.handle)
}}}if(e[b1]){delete e[b1];
if(b5){delete b2[b9]
}else{if(b2.removeAttribute){b2.removeAttribute(b9)
}else{b2[b9]=null
}}bH.deletedIds.push(b1)
}}}}}});
(function(){var e,b0;
bH.uaMatch=function(b2){b2=b2.toLowerCase();
var b1=/(chrome)[ \/]([\w.]+)/.exec(b2)||/(webkit)[ \/]([\w.]+)/.exec(b2)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b2)||/(msie) ([\w.]+)/.exec(b2)||b2.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b2)||[];
return{browser:b1[1]||"",version:b1[2]||"0"}
};
e=bH.uaMatch(d.userAgent);
b0={};
if(e.browser){b0[e.browser]=true;
b0.version=e.version
}if(b0.chrome){b0.webkit=true
}else{if(b0.webkit){b0.safari=true
}}bH.browser=b0;
bH.sub=function(){function b1(b4,b5){return new b1.fn.init(b4,b5)
}bH.extend(true,b1,this);
b1.superclass=this;
b1.fn=b1.prototype=this();
b1.fn.constructor=b1;
b1.sub=this.sub;
b1.fn.init=function b3(b4,b5){if(b5&&b5 instanceof bH&&!(b5 instanceof b1)){b5=b1(b5)
}return bH.fn.init.call(this,b4,b5,b2)
};
b1.fn.init.prototype=b1.fn;
var b2=b1(o);
return b1
}
})();
var F,aA,aX,bf=/alpha\([^)]*\)/i,aT=/opacity=([^)]*)/,bl=/^(top|right|bottom|left)$/,H=/^(none|table(?!-c[ea]).+)/,a0=/^margin/,a9=new RegExp("^("+by+")(.*)$","i"),X=new RegExp("^("+by+")(?!px)[a-z%]+$","i"),T=new RegExp("^([-+])=("+by+")","i"),bi={BODY:"block"},ba={position:"absolute",visibility:"hidden",display:"block"},bB={letterSpacing:0,fontWeight:400},bR=["Top","Right","Bottom","Left"],at=["Webkit","O","Moz","ms"],aK=bH.fn.toggle;
function b(b2,b0){if(b0 in b2){return b0
}var b3=b0.charAt(0).toUpperCase()+b0.slice(1),e=b0,b1=at.length;
while(b1--){b0=at[b1]+b3;
if(b0 in b2){return b0
}}return e
}function R(b0,e){b0=e||b0;
return bH.css(b0,"display")==="none"||!bH.contains(b0.ownerDocument,b0)
}function t(b4,e){var b3,b5,b0=[],b1=0,b2=b4.length;
for(;
b1<b2;
b1++){b3=b4[b1];
if(!b3.style){continue
}b0[b1]=bH._data(b3,"olddisplay");
if(e){if(!b0[b1]&&b3.style.display==="none"){b3.style.display=""
}if(b3.style.display===""&&R(b3)){b0[b1]=bH._data(b3,"olddisplay",bD(b3.nodeName))
}}else{b5=F(b3,"display");
if(!b0[b1]&&b5!=="none"){bH._data(b3,"olddisplay",b5)
}}}for(b1=0;
b1<b2;
b1++){b3=b4[b1];
if(!b3.style){continue
}if(!e||b3.style.display==="none"||b3.style.display===""){b3.style.display=e?b0[b1]||"":"none"
}}return b4
}bH.fn.extend({css:function(e,b0){return bH.access(this,function(b2,b1,b3){return b3!==aC?bH.style(b2,b1,b3):bH.css(b2,b1)
},e,b0,arguments.length>1)
},show:function(){return t(this,true)
},hide:function(){return t(this)
},toggle:function(b1,b0){var e=typeof b1==="boolean";
if(bH.isFunction(b1)&&bH.isFunction(b0)){return aK.apply(this,arguments)
}return this.each(function(){if(e?b1:R(this)){bH(this).show()
}else{bH(this).hide()
}})
}});
bH.extend({cssHooks:{opacity:{get:function(b1,b0){if(b0){var e=F(b1,"opacity");
return e===""?"1":e
}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":bH.support.cssFloat?"cssFloat":"styleFloat"},style:function(b2,b1,b8,b3){if(!b2||b2.nodeType===3||b2.nodeType===8||!b2.style){return
}var b6,b7,b9,b4=bH.camelCase(b1),b0=b2.style;
b1=bH.cssProps[b4]||(bH.cssProps[b4]=b(b0,b4));
b9=bH.cssHooks[b1]||bH.cssHooks[b4];
if(b8!==aC){b7=typeof b8;
if(b7==="string"&&(b6=T.exec(b8))){b8=(b6[1]+1)*b6[2]+parseFloat(bH.css(b2,b1));
b7="number"
}if(b8==null||b7==="number"&&isNaN(b8)){return
}if(b7==="number"&&!bH.cssNumber[b4]){b8+="px"
}if(!b9||!("set" in b9)||(b8=b9.set(b2,b8,b3))!==aC){try{b0[b1]=b8
}catch(b5){}}}else{if(b9&&"get" in b9&&(b6=b9.get(b2,false,b3))!==aC){return b6
}return b0[b1]
}},css:function(b5,b3,b4,b0){var b6,b2,e,b1=bH.camelCase(b3);
b3=bH.cssProps[b1]||(bH.cssProps[b1]=b(b5.style,b1));
e=bH.cssHooks[b3]||bH.cssHooks[b1];
if(e&&"get" in e){b6=e.get(b5,true,b0)
}if(b6===aC){b6=F(b5,b3)
}if(b6==="normal"&&b3 in bB){b6=bB[b3]
}if(b4||b0!==aC){b2=parseFloat(b6);
return b4||bH.isNumeric(b2)?b2||0:b6
}return b6
},swap:function(b3,b2,b4){var b1,b0,e={};
for(b0 in b2){e[b0]=b3.style[b0];
b3.style[b0]=b2[b0]
}b1=b4.call(b3);
for(b0 in b2){b3.style[b0]=e[b0]
}return b1
}});
if(a3.getComputedStyle){F=function(b6,b0){var e,b3,b2,b5,b4=a3.getComputedStyle(b6,null),b1=b6.style;
if(b4){e=b4.getPropertyValue(b0)||b4[b0];
if(e===""&&!bH.contains(b6.ownerDocument,b6)){e=bH.style(b6,b0)
}if(X.test(e)&&a0.test(b0)){b3=b1.width;
b2=b1.minWidth;
b5=b1.maxWidth;
b1.minWidth=b1.maxWidth=b1.width=e;
e=b4.width;
b1.width=b3;
b1.minWidth=b2;
b1.maxWidth=b5
}}return e
}
}else{if(o.documentElement.currentStyle){F=function(b3,b1){var b4,e,b0=b3.currentStyle&&b3.currentStyle[b1],b2=b3.style;
if(b0==null&&b2&&b2[b1]){b0=b2[b1]
}if(X.test(b0)&&!bl.test(b1)){b4=b2.left;
e=b3.runtimeStyle&&b3.runtimeStyle.left;
if(e){b3.runtimeStyle.left=b3.currentStyle.left
}b2.left=b1==="fontSize"?"1em":b0;
b0=b2.pixelLeft+"px";
b2.left=b4;
if(e){b3.runtimeStyle.left=e
}}return b0===""?"auto":b0
}
}}function aH(e,b1,b2){var b0=a9.exec(b1);
return b0?Math.max(0,b0[1]-(b2||0))+(b0[2]||"px"):b1
}function au(b2,b0,e,b4){var b1=e===(b4?"border":"content")?4:b0==="width"?1:0,b3=0;
for(;
b1<4;
b1+=2){if(e==="margin"){b3+=bH.css(b2,e+bR[b1],true)
}if(b4){if(e==="content"){b3-=parseFloat(F(b2,"padding"+bR[b1]))||0
}if(e!=="margin"){b3-=parseFloat(F(b2,"border"+bR[b1]+"Width"))||0
}}else{b3+=parseFloat(F(b2,"padding"+bR[b1]))||0;
if(e!=="padding"){b3+=parseFloat(F(b2,"border"+bR[b1]+"Width"))||0
}}}return b3
}function v(b2,b0,e){var b3=b0==="width"?b2.offsetWidth:b2.offsetHeight,b1=true,b4=bH.support.boxSizing&&bH.css(b2,"boxSizing")==="border-box";
if(b3<=0||b3==null){b3=F(b2,b0);
if(b3<0||b3==null){b3=b2.style[b0]
}if(X.test(b3)){return b3
}b1=b4&&(bH.support.boxSizingReliable||b3===b2.style[b0]);
b3=parseFloat(b3)||0
}return(b3+au(b2,b0,e||(b4?"border":"content"),b1))+"px"
}function bD(b1){if(bi[b1]){return bi[b1]
}var e=bH("<"+b1+">").appendTo(o.body),b0=e.css("display");
e.remove();
if(b0==="none"||b0===""){aA=o.body.appendChild(aA||bH.extend(o.createElement("iframe"),{frameBorder:0,width:0,height:0}));
if(!aX||!aA.createElement){aX=(aA.contentWindow||aA.contentDocument).document;
aX.write("<!doctype html><html><body>");
aX.close()
}e=aX.body.appendChild(aX.createElement(b1));
b0=F(e,"display");
o.body.removeChild(aA)
}bi[b1]=b0;
return b0
}bH.each(["height","width"],function(b0,e){bH.cssHooks[e]={get:function(b3,b2,b1){if(b2){if(b3.offsetWidth===0&&H.test(F(b3,"display"))){return bH.swap(b3,ba,function(){return v(b3,e,b1)
})
}else{return v(b3,e,b1)
}}},set:function(b2,b3,b1){return aH(b2,b3,b1?au(b2,e,b1,bH.support.boxSizing&&bH.css(b2,"boxSizing")==="border-box"):0)
}}
});
if(!bH.support.opacity){bH.cssHooks.opacity={get:function(b0,e){return aT.test((e&&b0.currentStyle?b0.currentStyle.filter:b0.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":e?"1":""
},set:function(b3,b4){var b2=b3.style,b0=b3.currentStyle,e=bH.isNumeric(b4)?"alpha(opacity="+b4*100+")":"",b1=b0&&b0.filter||b2.filter||"";
b2.zoom=1;
if(b4>=1&&bH.trim(b1.replace(bf,""))===""&&b2.removeAttribute){b2.removeAttribute("filter");
if(b0&&!b0.filter){return
}}b2.filter=bf.test(b1)?b1.replace(bf,e):b1+" "+e
}}
}bH(function(){if(!bH.support.reliableMarginRight){bH.cssHooks.marginRight={get:function(b0,e){return bH.swap(b0,{display:"inline-block"},function(){if(e){return F(b0,"marginRight")
}})
}}
}if(!bH.support.pixelPosition&&bH.fn.position){bH.each(["top","left"],function(e,b0){bH.cssHooks[b0]={get:function(b3,b2){if(b2){var b1=F(b3,b0);
return X.test(b1)?bH(b3).position()[b0]+"px":b1
}}}
})
}});
if(bH.expr&&bH.expr.filters){bH.expr.filters.hidden=function(e){return(e.offsetWidth===0&&e.offsetHeight===0)||(!bH.support.reliableHiddenOffsets&&((e.style&&e.style.display)||F(e,"display"))==="none")
};
bH.expr.filters.visible=function(e){return !bH.expr.filters.hidden(e)
}
}bH.each({margin:"",padding:"",border:"Width"},function(e,b0){bH.cssHooks[e+b0]={expand:function(b3){var b2,b4=typeof b3==="string"?b3.split(" "):[b3],b1={};
for(b2=0;
b2<4;
b2++){b1[e+bR[b2]+b0]=b4[b2]||b4[b2-2]||b4[0]
}return b1
}};
if(!a0.test(e)){bH.cssHooks[e+b0].set=aH
}});
var bt=/%20/g,aQ=/\[\]$/,V=/\r?\n/g,bA=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,aE=/^(?:select|textarea)/i;
bH.fn.extend({serialize:function(){return bH.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?bH.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||aE.test(this.nodeName)||bA.test(this.type))
}).map(function(e,b0){var b1=bH(this).val();
return b1==null?null:bH.isArray(b1)?bH.map(b1,function(b3,b2){return{name:b0.name,value:b3.replace(V,"\r\n")}
}):{name:b0.name,value:b1.replace(V,"\r\n")}
}).get()
}});
bH.param=function(e,b1){var b2,b0=[],b3=function(b4,b5){b5=bH.isFunction(b5)?b5():(b5==null?"":b5);
b0[b0.length]=encodeURIComponent(b4)+"="+encodeURIComponent(b5)
};
if(b1===aC){b1=bH.ajaxSettings&&bH.ajaxSettings.traditional
}if(bH.isArray(e)||(e.jquery&&!bH.isPlainObject(e))){bH.each(e,function(){b3(this.name,this.value)
})
}else{for(b2 in e){k(b2,e[b2],b1,b3)
}}return b0.join("&").replace(bt,"+")
};
function k(b1,b3,b0,b2){var e;
if(bH.isArray(b3)){bH.each(b3,function(b5,b4){if(b0||aQ.test(b1)){b2(b1,b4)
}else{k(b1+"["+(typeof b4==="object"?b5:"")+"]",b4,b0,b2)
}})
}else{if(!b0&&bH.type(b3)==="object"){for(e in b3){k(b1+"["+e+"]",b3[e],b0,b2)
}}else{b2(b1,b3)
}}}var bY,Z,ao=/#.*$/,ae=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,C=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,r=/^(?:GET|HEAD)$/,aD=/^\/\//,bO=/\?/,g=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Q=/([?&])_=[^&]*/,aU=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,bX=bH.fn.load,w={},a7={},aY=["*/"]+["*"];
try{Z=aJ.href
}catch(be){Z=o.createElement("a");
Z.href="";
Z=Z.href
}bY=aU.exec(Z.toLowerCase())||[];
function bJ(e){return function(b3,b5){if(typeof b3!=="string"){b5=b3;
b3="*"
}var b0,b6,b7,b2=b3.toLowerCase().split(aW),b1=0,b4=b2.length;
if(bH.isFunction(b5)){for(;
b1<b4;
b1++){b0=b2[b1];
b7=/^\+/.test(b0);
if(b7){b0=b0.substr(1)||"*"
}b6=e[b0]=e[b0]||[];
b6[b7?"unshift":"push"](b5)
}}}
}function q(b0,b9,b4,b7,b6,b2){b6=b6||b9.dataTypes[0];
b2=b2||{};
b2[b6]=true;
var b8,b5=b0[b6],b1=0,e=b5?b5.length:0,b3=(b0===w);
for(;
b1<e&&(b3||!b8);
b1++){b8=b5[b1](b9,b4,b7);
if(typeof b8==="string"){if(!b3||b2[b8]){b8=aC
}else{b9.dataTypes.unshift(b8);
b8=q(b0,b9,b4,b7,b8,b2)
}}}if((b3||!b8)&&!b2["*"]){b8=q(b0,b9,b4,b7,"*",b2)
}return b8
}function u(b1,b2){var b0,e,b3=bH.ajaxSettings.flatOptions||{};
for(b0 in b2){if(b2[b0]!==aC){(b3[b0]?b1:(e||(e={})))[b0]=b2[b0]
}}if(e){bH.extend(true,b1,e)
}}bH.fn.load=function(b2,b5,b6){if(typeof b2!=="string"&&bX){return bX.apply(this,arguments)
}if(!this.length){return this
}var e,b3,b1,b0=this,b4=b2.indexOf(" ");
if(b4>=0){e=b2.slice(b4,b2.length);
b2=b2.slice(0,b4)
}if(bH.isFunction(b5)){b6=b5;
b5=aC
}else{if(b5&&typeof b5==="object"){b3="POST"
}}bH.ajax({url:b2,type:b3,dataType:"html",data:b5,complete:function(b8,b7){if(b6){b0.each(b6,b1||[b8.responseText,b7,b8])
}}}).done(function(b7){b1=arguments;
b0.html(e?bH("<div>").append(b7.replace(g,"")).find(e):b7)
});
return this
};
bH.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,b0){bH.fn[b0]=function(b1){return this.on(b0,b1)
}
});
bH.each(["get","post"],function(e,b0){bH[b0]=function(b1,b3,b4,b2){if(bH.isFunction(b3)){b2=b2||b4;
b4=b3;
b3=aC
}return bH.ajax({type:b0,url:b1,data:b3,success:b4,dataType:b2})
}
});
bH.extend({getScript:function(e,b0){return bH.get(e,aC,b0,"script")
},getJSON:function(e,b0,b1){return bH.get(e,b0,b1,"json")
},ajaxSetup:function(b0,e){if(e){u(b0,bH.ajaxSettings)
}else{e=b0;
b0=bH.ajaxSettings
}u(b0,e);
return b0
},ajaxSettings:{url:Z,isLocal:C.test(bY[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":aY},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a3.String,"text html":true,"text json":bH.parseJSON,"text xml":bH.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:bJ(w),ajaxTransport:bJ(a7),ajax:function(b5,b2){if(typeof b5==="object"){b2=b5;
b5=aC
}b2=b2||{};
var b8,cm,b3,ch,ca,ce,b1,cg,b9=bH.ajaxSetup({},b2),co=b9.context||b9,cc=co!==b9&&(co.nodeType||co instanceof bH)?bH(co):bH.event,cn=bH.Deferred(),cj=bH.Callbacks("once memory"),b6=b9.statusCode||{},cd={},ck={},b4=0,b7="canceled",cf={readyState:0,setRequestHeader:function(cp,cq){if(!b4){var e=cp.toLowerCase();
cp=ck[e]=ck[e]||cp;
cd[cp]=cq
}return this
},getAllResponseHeaders:function(){return b4===2?cm:null
},getResponseHeader:function(cp){var e;
if(b4===2){if(!b3){b3={};
while((e=ae.exec(cm))){b3[e[1].toLowerCase()]=e[2]
}}e=b3[cp.toLowerCase()]
}return e===aC?null:e
},overrideMimeType:function(e){if(!b4){b9.mimeType=e
}return this
},abort:function(e){e=e||b7;
if(ch){ch.abort(e)
}cb(0,e);
return this
}};
function cb(ct,cp,cu,cr){var e,cx,cv,cs,cw,cq=cp;
if(b4===2){return
}b4=2;
if(ca){clearTimeout(ca)
}ch=aC;
cm=cr||"";
cf.readyState=ct>0?4:0;
if(cu){cs=h(b9,cf,cu)
}if(ct>=200&&ct<300||ct===304){if(b9.ifModified){cw=cf.getResponseHeader("Last-Modified");
if(cw){bH.lastModified[b8]=cw
}cw=cf.getResponseHeader("Etag");
if(cw){bH.etag[b8]=cw
}}if(ct===304){cq="notmodified";
e=true
}else{e=af(b9,cs);
cq=e.state;
cx=e.data;
cv=e.error;
e=!cv
}}else{cv=cq;
if(!cq||ct){cq="error";
if(ct<0){ct=0
}}}cf.status=ct;
cf.statusText=(cp||cq)+"";
if(e){cn.resolveWith(co,[cx,cq,cf])
}else{cn.rejectWith(co,[cf,cq,cv])
}cf.statusCode(b6);
b6=aC;
if(b1){cc.trigger("ajax"+(e?"Success":"Error"),[cf,b9,e?cx:cv])
}cj.fireWith(co,[cf,cq]);
if(b1){cc.trigger("ajaxComplete",[cf,b9]);
if(!(--bH.active)){bH.event.trigger("ajaxStop")
}}}cn.promise(cf);
cf.success=cf.done;
cf.error=cf.fail;
cf.complete=cj.add;
cf.statusCode=function(cp){if(cp){var e;
if(b4<2){for(e in cp){b6[e]=[b6[e],cp[e]]
}}else{e=cp[cf.status];
cf.always(e)
}}return this
};
b9.url=((b5||b9.url)+"").replace(ao,"").replace(aD,bY[1]+"//");
b9.dataTypes=bH.trim(b9.dataType||"*").toLowerCase().split(aW);
if(b9.crossDomain==null){ce=aU.exec(b9.url.toLowerCase());
b9.crossDomain=!!(ce&&(ce[1]!==bY[1]||ce[2]!==bY[2]||(ce[3]||(ce[1]==="http:"?80:443))!=(bY[3]||(bY[1]==="http:"?80:443))))
}if(b9.data&&b9.processData&&typeof b9.data!=="string"){b9.data=bH.param(b9.data,b9.traditional)
}q(w,b9,b2,cf);
if(b4===2){return cf
}b1=b9.global;
b9.type=b9.type.toUpperCase();
b9.hasContent=!r.test(b9.type);
if(b1&&bH.active++===0){bH.event.trigger("ajaxStart")
}if(!b9.hasContent){if(b9.data){b9.url+=(bO.test(b9.url)?"&":"?")+b9.data;
delete b9.data
}b8=b9.url;
if(b9.cache===false){var b0=bH.now(),cl=b9.url.replace(Q,"$1_="+b0);
b9.url=cl+((cl===b9.url)?(bO.test(b9.url)?"&":"?")+"_="+b0:"")
}}if(b9.data&&b9.hasContent&&b9.contentType!==false||b2.contentType){cf.setRequestHeader("Content-Type",b9.contentType)
}if(b9.ifModified){b8=b8||b9.url;
if(bH.lastModified[b8]){cf.setRequestHeader("If-Modified-Since",bH.lastModified[b8])
}if(bH.etag[b8]){cf.setRequestHeader("If-None-Match",bH.etag[b8])
}}cf.setRequestHeader("Accept",b9.dataTypes[0]&&b9.accepts[b9.dataTypes[0]]?b9.accepts[b9.dataTypes[0]]+(b9.dataTypes[0]!=="*"?", "+aY+"; q=0.01":""):b9.accepts["*"]);
for(cg in b9.headers){cf.setRequestHeader(cg,b9.headers[cg])
}if(b9.beforeSend&&(b9.beforeSend.call(co,cf,b9)===false||b4===2)){return cf.abort()
}b7="abort";
for(cg in {success:1,error:1,complete:1}){cf[cg](b9[cg])
}ch=q(a7,b9,b2,cf);
if(!ch){cb(-1,"No Transport")
}else{cf.readyState=1;
if(b1){cc.trigger("ajaxSend",[cf,b9])
}if(b9.async&&b9.timeout>0){ca=setTimeout(function(){cf.abort("timeout")
},b9.timeout)
}try{b4=1;
ch.send(cd,cb)
}catch(ci){if(b4<2){cb(-1,ci)
}else{throw ci
}}}return cf
},active:0,lastModified:{},etag:{}});
function h(b8,b7,b4){var b3,b5,b2,e,b0=b8.contents,b6=b8.dataTypes,b1=b8.responseFields;
for(b5 in b1){if(b5 in b4){b7[b1[b5]]=b4[b5]
}}while(b6[0]==="*"){b6.shift();
if(b3===aC){b3=b8.mimeType||b7.getResponseHeader("content-type")
}}if(b3){for(b5 in b0){if(b0[b5]&&b0[b5].test(b3)){b6.unshift(b5);
break
}}}if(b6[0] in b4){b2=b6[0]
}else{for(b5 in b4){if(!b6[0]||b8.converters[b5+" "+b6[0]]){b2=b5;
break
}if(!e){e=b5
}}b2=b2||e
}if(b2){if(b2!==b6[0]){b6.unshift(b2)
}return b4[b2]
}}function af(ca,b2){var b8,b0,b6,b4,b7=ca.dataTypes.slice(),b1=b7[0],b9={},b3=0;
if(ca.dataFilter){b2=ca.dataFilter(b2,ca.dataType)
}if(b7[1]){for(b8 in ca.converters){b9[b8.toLowerCase()]=ca.converters[b8]
}}for(;
(b6=b7[++b3]);
){if(b6!=="*"){if(b1!=="*"&&b1!==b6){b8=b9[b1+" "+b6]||b9["* "+b6];
if(!b8){for(b0 in b9){b4=b0.split(" ");
if(b4[1]===b6){b8=b9[b1+" "+b4[0]]||b9["* "+b4[0]];
if(b8){if(b8===true){b8=b9[b0]
}else{if(b9[b0]!==true){b6=b4[0];
b7.splice(b3--,0,b6)
}}break
}}}}if(b8!==true){if(b8&&ca["throws"]){b2=b8(b2)
}else{try{b2=b8(b2)
}catch(b5){return{state:"parsererror",error:b8?b5:"No conversion from "+b1+" to "+b6}
}}}}b1=b6
}}return{state:"success",data:b2}
}var bq=[],ax=/\?/,a6=/(=)\?(?=&|$)|\?\?/,bm=bH.now();
bH.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=bq.pop()||(bH.expando+"_"+(bm++));
this[e]=true;
return e
}});
bH.ajaxPrefilter("json jsonp",function(b9,b4,b8){var b7,e,b6,b2=b9.data,b0=b9.url,b1=b9.jsonp!==false,b5=b1&&a6.test(b0),b3=b1&&!b5&&typeof b2==="string"&&!(b9.contentType||"").indexOf("application/x-www-form-urlencoded")&&a6.test(b2);
if(b9.dataTypes[0]==="jsonp"||b5||b3){b7=b9.jsonpCallback=bH.isFunction(b9.jsonpCallback)?b9.jsonpCallback():b9.jsonpCallback;
e=a3[b7];
if(b5){b9.url=b0.replace(a6,"$1"+b7)
}else{if(b3){b9.data=b2.replace(a6,"$1"+b7)
}else{if(b1){b9.url+=(ax.test(b0)?"&":"?")+b9.jsonp+"="+b7
}}}b9.converters["script json"]=function(){if(!b6){bH.error(b7+" was not called")
}return b6[0]
};
b9.dataTypes[0]="json";
a3[b7]=function(){b6=arguments
};
b8.always(function(){a3[b7]=e;
if(b9[b7]){b9.jsonpCallback=b4.jsonpCallback;
bq.push(b7)
}if(b6&&bH.isFunction(e)){e(b6[0])
}b6=e=aC
});
return"script"
}});
bH.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){bH.globalEval(e);
return e
}}});
bH.ajaxPrefilter("script",function(e){if(e.cache===aC){e.cache=false
}if(e.crossDomain){e.type="GET";
e.global=false
}});
bH.ajaxTransport("script",function(b1){if(b1.crossDomain){var e,b0=o.head||o.getElementsByTagName("head")[0]||o.documentElement;
return{send:function(b2,b3){e=o.createElement("script");
e.async="async";
if(b1.scriptCharset){e.charset=b1.scriptCharset
}e.src=b1.url;
e.onload=e.onreadystatechange=function(b5,b4){if(b4||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;
if(b0&&e.parentNode){b0.removeChild(e)
}e=aC;
if(!b4){b3(200,"success")
}}};
b0.insertBefore(e,b0.firstChild)
},abort:function(){if(e){e.onload(0,1)
}}}
}});
var ai,aO=a3.ActiveXObject?function(){for(var e in ai){ai[e](0,1)
}}:false,av=0;
function bC(){try{return new a3.XMLHttpRequest()
}catch(b0){}}function bc(){try{return new a3.ActiveXObject("Microsoft.XMLHTTP")
}catch(b0){}}bH.ajaxSettings.xhr=a3.ActiveXObject?function(){return !this.isLocal&&bC()||bc()
}:bC;
(function(e){bH.extend(bH.support,{ajax:!!e,cors:!!e&&("withCredentials" in e)})
})(bH.ajaxSettings.xhr());
if(bH.support.ajax){bH.ajaxTransport(function(e){if(!e.crossDomain||bH.support.cors){var b0;
return{send:function(b6,b1){var b4,b3,b5=e.xhr();
if(e.username){b5.open(e.type,e.url,e.async,e.username,e.password)
}else{b5.open(e.type,e.url,e.async)
}if(e.xhrFields){for(b3 in e.xhrFields){b5[b3]=e.xhrFields[b3]
}}if(e.mimeType&&b5.overrideMimeType){b5.overrideMimeType(e.mimeType)
}if(!e.crossDomain&&!b6["X-Requested-With"]){b6["X-Requested-With"]="XMLHttpRequest"
}try{for(b3 in b6){b5.setRequestHeader(b3,b6[b3])
}}catch(b2){}b5.send((e.hasContent&&e.data)||null);
b0=function(cf,b9){var ca,b8,b7,cd,cc;
try{if(b0&&(b9||b5.readyState===4)){b0=aC;
if(b4){b5.onreadystatechange=bH.noop;
if(aO){delete ai[b4]
}}if(b9){if(b5.readyState!==4){b5.abort()
}}else{ca=b5.status;
b7=b5.getAllResponseHeaders();
cd={};
cc=b5.responseXML;
if(cc&&cc.documentElement){cd.xml=cc
}try{cd.text=b5.responseText
}catch(ce){}try{b8=b5.statusText
}catch(ce){b8=""
}if(!ca&&e.isLocal&&!e.crossDomain){ca=cd.text?200:404
}else{if(ca===1223){ca=204
}}}}}catch(cb){if(!b9){b1(-1,cb)
}}if(cd){b1(ca,b8,cd,b7)
}};
if(!e.async){b0()
}else{if(b5.readyState===4){setTimeout(b0,0)
}else{b4=++av;
if(aO){if(!ai){ai={};
bH(a3).unload(aO)
}ai[b4]=b0
}b5.onreadystatechange=b0
}}},abort:function(){if(b0){b0(0,1)
}}}
}})
}var M,ac,bP=/^(?:toggle|show|hide)$/,bI=new RegExp("^(?:([-+])=|)("+by+")([a-z%]*)$","i"),bN=/queueHooks$/,ay=[i],a2={"*":[function(e,b6){var b2,b7,b8=this.createTween(e,b6),b3=bI.exec(b6),b4=b8.cur(),b0=+b4||0,b1=1,b5=20;
if(b3){b2=+b3[2];
b7=b3[3]||(bH.cssNumber[e]?"":"px");
if(b7!=="px"&&b0){b0=bH.css(b8.elem,e,true)||b2||1;
do{b1=b1||".5";
b0=b0/b1;
bH.style(b8.elem,e,b0+b7)
}while(b1!==(b1=b8.cur()/b4)&&b1!==1&&--b5)
}b8.unit=b7;
b8.start=b0;
b8.end=b3[1]?b0+(b3[1]+1)*b2:b2
}return b8
}]};
function bk(){setTimeout(function(){M=aC
},0);
return(M=bH.now())
}function bd(b0,e){bH.each(e,function(b5,b3){var b4=(a2[b5]||[]).concat(a2["*"]),b1=0,b2=b4.length;
for(;
b1<b2;
b1++){if(b4[b1].call(b0,b5,b3)){return
}}})
}function f(b1,b5,b8){var b9,b4=0,e=0,b0=ay.length,b7=bH.Deferred().always(function(){delete b3.elem
}),b3=function(){var cf=M||bk(),cc=Math.max(0,b2.startTime+b2.duration-cf),ca=cc/b2.duration||0,ce=1-ca,cb=0,cd=b2.tweens.length;
for(;
cb<cd;
cb++){b2.tweens[cb].run(ce)
}b7.notifyWith(b1,[b2,ce,cc]);
if(ce<1&&cd){return cc
}else{b7.resolveWith(b1,[b2]);
return false
}},b2=b7.promise({elem:b1,props:bH.extend({},b5),opts:bH.extend(true,{specialEasing:{}},b8),originalProperties:b5,originalOptions:b8,startTime:M||bk(),duration:b8.duration,tweens:[],createTween:function(cd,ca,cc){var cb=bH.Tween(b1,b2.opts,cd,ca,b2.opts.specialEasing[cd]||b2.opts.easing);
b2.tweens.push(cb);
return cb
},stop:function(cb){var ca=0,cc=cb?b2.tweens.length:0;
for(;
ca<cc;
ca++){b2.tweens[ca].run(1)
}if(cb){b7.resolveWith(b1,[b2,cb])
}else{b7.rejectWith(b1,[b2,cb])
}return this
}}),b6=b2.props;
al(b6,b2.opts.specialEasing);
for(;
b4<b0;
b4++){b9=ay[b4].call(b2,b1,b6,b2.opts);
if(b9){return b9
}}bd(b2,b6);
if(bH.isFunction(b2.opts.start)){b2.opts.start.call(b1,b2)
}bH.fx.timer(bH.extend(b3,{anim:b2,queue:b2.opts.queue,elem:b1}));
return b2.progress(b2.opts.progress).done(b2.opts.done,b2.opts.complete).fail(b2.opts.fail).always(b2.opts.always)
}function al(b2,b4){var b1,b0,b5,b3,e;
for(b1 in b2){b0=bH.camelCase(b1);
b5=b4[b0];
b3=b2[b1];
if(bH.isArray(b3)){b5=b3[1];
b3=b2[b1]=b3[0]
}if(b1!==b0){b2[b0]=b3;
delete b2[b1]
}e=bH.cssHooks[b0];
if(e&&"expand" in e){b3=e.expand(b3);
delete b2[b0];
for(b1 in b3){if(!(b1 in b2)){b2[b1]=b3[b1];
b4[b1]=b5
}}}else{b4[b0]=b5
}}}bH.Animation=bH.extend(f,{tweener:function(b0,b3){if(bH.isFunction(b0)){b3=b0;
b0=["*"]
}else{b0=b0.split(" ")
}var b2,e=0,b1=b0.length;
for(;
e<b1;
e++){b2=b0[e];
a2[b2]=a2[b2]||[];
a2[b2].unshift(b3)
}},prefilter:function(b0,e){if(e){ay.unshift(b0)
}else{ay.push(b0)
}}});
function i(b3,b9,e){var b8,b1,cb,b2,cf,b5,ce,cd,cc,b4=this,b0=b3.style,ca={},b7=[],b6=b3.nodeType&&R(b3);
if(!e.queue){cd=bH._queueHooks(b3,"fx");
if(cd.unqueued==null){cd.unqueued=0;
cc=cd.empty.fire;
cd.empty.fire=function(){if(!cd.unqueued){cc()
}}
}cd.unqueued++;
b4.always(function(){b4.always(function(){cd.unqueued--;
if(!bH.queue(b3,"fx").length){cd.empty.fire()
}})
})
}if(b3.nodeType===1&&("height" in b9||"width" in b9)){e.overflow=[b0.overflow,b0.overflowX,b0.overflowY];
if(bH.css(b3,"display")==="inline"&&bH.css(b3,"float")==="none"){if(!bH.support.inlineBlockNeedsLayout||bD(b3.nodeName)==="inline"){b0.display="inline-block"
}else{b0.zoom=1
}}}if(e.overflow){b0.overflow="hidden";
if(!bH.support.shrinkWrapBlocks){b4.done(function(){b0.overflow=e.overflow[0];
b0.overflowX=e.overflow[1];
b0.overflowY=e.overflow[2]
})
}}for(b8 in b9){cb=b9[b8];
if(bP.exec(cb)){delete b9[b8];
b5=b5||cb==="toggle";
if(cb===(b6?"hide":"show")){continue
}b7.push(b8)
}}b2=b7.length;
if(b2){cf=bH._data(b3,"fxshow")||bH._data(b3,"fxshow",{});
if("hidden" in cf){b6=cf.hidden
}if(b5){cf.hidden=!b6
}if(b6){bH(b3).show()
}else{b4.done(function(){bH(b3).hide()
})
}b4.done(function(){var cg;
bH.removeData(b3,"fxshow",true);
for(cg in ca){bH.style(b3,cg,ca[cg])
}});
for(b8=0;
b8<b2;
b8++){b1=b7[b8];
ce=b4.createTween(b1,b6?cf[b1]:0);
ca[b1]=cf[b1]||bH.style(b3,b1);
if(!(b1 in cf)){cf[b1]=ce.start;
if(b6){ce.end=ce.start;
ce.start=b1==="width"||b1==="height"?1:0
}}}}}function I(b1,b0,b3,e,b2){return new I.prototype.init(b1,b0,b3,e,b2)
}bH.Tween=I;
I.prototype={constructor:I,init:function(b2,b0,b4,e,b3,b1){this.elem=b2;
this.prop=b4;
this.easing=b3||"swing";
this.options=b0;
this.start=this.now=this.cur();
this.end=e;
this.unit=b1||(bH.cssNumber[b4]?"":"px")
},cur:function(){var e=I.propHooks[this.prop];
return e&&e.get?e.get(this):I.propHooks._default.get(this)
},run:function(b1){var b0,e=I.propHooks[this.prop];
if(this.options.duration){this.pos=b0=bH.easing[this.easing](b1,this.options.duration*b1,0,1,this.options.duration)
}else{this.pos=b0=b1
}this.now=(this.end-this.start)*b0+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(e&&e.set){e.set(this)
}else{I.propHooks._default.set(this)
}return this
}};
I.prototype.init.prototype=I.prototype;
I.propHooks={_default:{get:function(b0){var e;
if(b0.elem[b0.prop]!=null&&(!b0.elem.style||b0.elem.style[b0.prop]==null)){return b0.elem[b0.prop]
}e=bH.css(b0.elem,b0.prop,false,"");
return !e||e==="auto"?0:e
},set:function(e){if(bH.fx.step[e.prop]){bH.fx.step[e.prop](e)
}else{if(e.elem.style&&(e.elem.style[bH.cssProps[e.prop]]!=null||bH.cssHooks[e.prop])){bH.style(e.elem,e.prop,e.now+e.unit)
}else{e.elem[e.prop]=e.now
}}}}};
I.propHooks.scrollTop=I.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now
}}};
bH.each(["toggle","show","hide"],function(b0,e){var b1=bH.fn[e];
bH.fn[e]=function(b2,b4,b3){return b2==null||typeof b2==="boolean"||(!b0&&bH.isFunction(b2)&&bH.isFunction(b4))?b1.apply(this,arguments):this.animate(bG(e,true),b2,b4,b3)
}
});
bH.fn.extend({fadeTo:function(e,b2,b1,b0){return this.filter(R).css("opacity",0).show().end().animate({opacity:b2},e,b1,b0)
},animate:function(b5,b2,b4,b3){var b1=bH.isEmptyObject(b5),e=bH.speed(b2,b4,b3),b0=function(){var b6=f(this,bH.extend({},b5),e);
if(b1){b6.stop(true)
}};
return b1||e.queue===false?this.each(b0):this.queue(e.queue,b0)
},stop:function(b1,b0,e){var b2=function(b3){var b4=b3.stop;
delete b3.stop;
b4(e)
};
if(typeof b1!=="string"){e=b0;
b0=b1;
b1=aC
}if(b0&&b1!==false){this.queue(b1||"fx",[])
}return this.each(function(){var b6=true,b3=b1!=null&&b1+"queueHooks",b5=bH.timers,b4=bH._data(this);
if(b3){if(b4[b3]&&b4[b3].stop){b2(b4[b3])
}}else{for(b3 in b4){if(b4[b3]&&b4[b3].stop&&bN.test(b3)){b2(b4[b3])
}}}for(b3=b5.length;
b3--;
){if(b5[b3].elem===this&&(b1==null||b5[b3].queue===b1)){b5[b3].anim.stop(e);
b6=false;
b5.splice(b3,1)
}}if(b6||!e){bH.dequeue(this,b1)
}})
}});
function bG(b1,b3){var b2,e={height:b1},b0=0;
b3=b3?1:0;
for(;
b0<4;
b0+=2-b3){b2=bR[b0];
e["margin"+b2]=e["padding"+b2]=b1
}if(b3){e.opacity=e.width=b1
}return e
}bH.each({slideDown:bG("show"),slideUp:bG("hide"),slideToggle:bG("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,b0){bH.fn[e]=function(b1,b3,b2){return this.animate(b0,b1,b3,b2)
}
});
bH.speed=function(b1,b2,b0){var e=b1&&typeof b1==="object"?bH.extend({},b1):{complete:b0||!b0&&b2||bH.isFunction(b1)&&b1,duration:b1,easing:b0&&b2||b2&&!bH.isFunction(b2)&&b2};
e.duration=bH.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in bH.fx.speeds?bH.fx.speeds[e.duration]:bH.fx.speeds._default;
if(e.queue==null||e.queue===true){e.queue="fx"
}e.old=e.complete;
e.complete=function(){if(bH.isFunction(e.old)){e.old.call(this)
}if(e.queue){bH.dequeue(this,e.queue)
}};
return e
};
bH.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}};
bH.timers=[];
bH.fx=I.prototype.init;
bH.fx.tick=function(){var b1,b0=bH.timers,e=0;
M=bH.now();
for(;
e<b0.length;
e++){b1=b0[e];
if(!b1()&&b0[e]===b1){b0.splice(e--,1)
}}if(!b0.length){bH.fx.stop()
}M=aC
};
bH.fx.timer=function(e){if(e()&&bH.timers.push(e)&&!ac){ac=setInterval(bH.fx.tick,bH.fx.interval)
}};
bH.fx.interval=13;
bH.fx.stop=function(){clearInterval(ac);
ac=null
};
bH.fx.speeds={slow:600,fast:200,_default:400};
bH.fx.step={};
if(bH.expr&&bH.expr.filters){bH.expr.filters.animated=function(e){return bH.grep(bH.timers,function(b0){return e===b0.elem
}).length
}
}var bn=/^(?:body|html)$/i;
bH.fn.offset=function(b9){if(arguments.length){return b9===aC?this:this.each(function(ca){bH.offset.setOffset(this,b9,ca)
})
}var b0,b5,b6,b3,b7,e,b2,b4={top:0,left:0},b1=this[0],b8=b1&&b1.ownerDocument;
if(!b8){return
}if((b5=b8.body)===b1){return bH.offset.bodyOffset(b1)
}b0=b8.documentElement;
if(!bH.contains(b0,b1)){return b4
}if(typeof b1.getBoundingClientRect!=="undefined"){b4=b1.getBoundingClientRect()
}b6=bo(b8);
b3=b0.clientTop||b5.clientTop||0;
b7=b0.clientLeft||b5.clientLeft||0;
e=b6.pageYOffset||b0.scrollTop;
b2=b6.pageXOffset||b0.scrollLeft;
return{top:b4.top+e-b3,left:b4.left+b2-b7}
};
bH.offset={bodyOffset:function(e){var b1=e.offsetTop,b0=e.offsetLeft;
if(bH.support.doesNotIncludeMarginInBodyOffset){b1+=parseFloat(bH.css(e,"marginTop"))||0;
b0+=parseFloat(bH.css(e,"marginLeft"))||0
}return{top:b1,left:b0}
},setOffset:function(b2,cb,b5){var b6=bH.css(b2,"position");
if(b6==="static"){b2.style.position="relative"
}var b4=bH(b2),b0=b4.offset(),e=bH.css(b2,"top"),b9=bH.css(b2,"left"),ca=(b6==="absolute"||b6==="fixed")&&bH.inArray("auto",[e,b9])>-1,b8={},b7={},b1,b3;
if(ca){b7=b4.position();
b1=b7.top;
b3=b7.left
}else{b1=parseFloat(e)||0;
b3=parseFloat(b9)||0
}if(bH.isFunction(cb)){cb=cb.call(b2,b5,b0)
}if(cb.top!=null){b8.top=(cb.top-b0.top)+b1
}if(cb.left!=null){b8.left=(cb.left-b0.left)+b3
}if("using" in cb){cb.using.call(b2,b8)
}else{b4.css(b8)
}}};
bH.fn.extend({position:function(){if(!this[0]){return
}var b1=this[0],b0=this.offsetParent(),b2=this.offset(),e=bn.test(b0[0].nodeName)?{top:0,left:0}:b0.offset();
b2.top-=parseFloat(bH.css(b1,"marginTop"))||0;
b2.left-=parseFloat(bH.css(b1,"marginLeft"))||0;
e.top+=parseFloat(bH.css(b0[0],"borderTopWidth"))||0;
e.left+=parseFloat(bH.css(b0[0],"borderLeftWidth"))||0;
return{top:b2.top-e.top,left:b2.left-e.left}
},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.body;
while(e&&(!bn.test(e.nodeName)&&bH.css(e,"position")==="static")){e=e.offsetParent
}return e||o.body
})
}});
bH.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b1,b0){var e=/Y/.test(b0);
bH.fn[b1]=function(b2){return bH.access(this,function(b3,b6,b5){var b4=bo(b3);
if(b5===aC){return b4?(b0 in b4)?b4[b0]:b4.document.documentElement[b6]:b3[b6]
}if(b4){b4.scrollTo(!e?b5:bH(b4).scrollLeft(),e?b5:bH(b4).scrollTop())
}else{b3[b6]=b5
}},b1,b2,arguments.length,null)
}
});
function bo(e){return bH.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false
}bH.each({Height:"height",Width:"width"},function(e,b0){bH.each({padding:"inner"+e,content:b0,"":"outer"+e},function(b1,b2){bH.fn[b2]=function(b6,b5){var b4=arguments.length&&(b1||typeof b6!=="boolean"),b3=b1||(b6===true||b5===true?"margin":"border");
return bH.access(this,function(b8,b7,b9){var ca;
if(bH.isWindow(b8)){return b8.document.documentElement["client"+e]
}if(b8.nodeType===9){ca=b8.documentElement;
return Math.max(b8.body["scroll"+e],ca["scroll"+e],b8.body["offset"+e],ca["offset"+e],ca["client"+e])
}return b9===aC?bH.css(b8,b7,b9,b3):bH.style(b8,b7,b9,b3)
},b0,b4?b6:aC,b4,null)
}
})
});
a3.jQuery=a3.$=bH;
if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return bH
})
}})(window);
(function(a){a.fn.jsonSuggest=function(c,b){var d={minCharacters:1,maxResults:undefined,wildCard:"",caseSensitive:false,notCharacter:"!",maxHeight:350,highlightMatches:true,onSelect:undefined,ajaxResults:false};
b=a.extend(d,b);
return this.each(function(){function h(q,v){var r=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];
if(v){for(var u=0;
u<r.length;
u++){if(r[u]===v){r.splice(u,1)
}}}var t=new RegExp("(\\"+r.join("|\\")+")","g");
return q.replace(t,"\\$1")
}var l=a(this),g=new RegExp(h(b.wildCard||""),"g"),m=a("<div />"),i,k,j;
function f(q){l.val(q.text);
a(m).html("").hide();
if(typeof b.onSelect==="function"){b.onSelect(q)
}}function e(q){a("div.resultItem",m).removeClass("hover");
a(q).addClass("hover");
i=q
}function p(u,t){t="("+t+")";
var y=true,q,x=0,v=b.caseSensitive?new RegExp(t,"g"):new RegExp(t,"ig");
a(m).html("").hide();
for(q=0;
q<u.length;
q+=1){var r=a("<div />"),w=u[q].text;
if(b.highlightMatches===true){w=w.replace(v,"<strong>$1</strong>")
}a(r).append('<p class="text">'+w+"</p>");
if(typeof u[q].extra==="string"){a(r).append('<p class="extra">'+u[q].extra+"</p>")
}if(typeof u[q].image==="string"){a(r).prepend('<img src="'+u[q].image+'" />').append('<br style="clear:both;" />')
}a(r).addClass("resultItem").addClass((y)?"odd":"even").click(function(z){return function(){f(u[z])
}
}(q)).mouseover(function(z){return function(){e(z)
}
}(r));
a(m).append(r);
y=!y;
x+=1;
if(typeof b.maxResults==="number"&&x>=b.maxResults){break
}}if(a("div",m).length>0){i=undefined;
a(m).show().css("height","auto");
if(a(m).height()>b.maxHeight){a(m).css({overflow:"auto",height:b.maxHeight+"px"})
}}}function n(w){if(this.value.length<b.minCharacters){a(m).html("").hide();
return false
}var u=[],t=(!b.wildCard)?h(this.value):h(this.value,b.wildCard).replace(g,".*"),q=true,v,r;
if(b.notCharacter&&t.indexOf(b.notCharacter)===0){t=t.substr(b.notCharacter.length,t.length);
if(t.length>0){q=false
}}t=t||".*";
t=b.wildCard?"^"+t:t;
v=b.caseSensitive?new RegExp(t):new RegExp(t,"i");
if(b.ajaxResults===true){u=c(this.value,b.wildCard,b.caseSensitive,b.notCharacter);
if(typeof u==="string"){u=JSON.parse(u)
}}else{for(r=0;
r<c.length;
r+=1){if(v.test(c[r].text)===q){u.push(c[r])
}}}p(u,t)
}function o(q){switch(q.keyCode){case 13:a(i).trigger("click");
return false;
case 40:if(typeof i==="undefined"){i=a("div.resultItem:first",m).get(0)
}else{i=a(i).next().get(0)
}e(i);
if(i){a(m).scrollTop(i.offsetTop)
}return false;
case 38:if(typeof i==="undefined"){i=a("div.resultItem:last",m).get(0)
}else{i=a(i).prev().get(0)
}e(i);
if(i){a(m).scrollTop(i.offsetTop)
}return false;
default:n.apply(this,[q])
}}a(m).addClass("jsonSuggestResults").css({top:(l.position().top+l.height()+5)+"px",left:l.position().left+"px",width:l.width()+"px"}).hide();
l.after(m).keyup(o).blur(function(r){var q=a(m).offset();
q.bottom=q.top+a(m).height();
q.right=q.left+a(m).width();
if(j<q.top||j>q.bottom||k<q.left||k>q.right){a(m).hide()
}}).focus(function(q){a(m).css({top:(l.position().top+l.height()+5)+"px",left:l.position().left+"px"});
if(a("div",m).length>0){a(m).show()
}}).attr("autocomplete","off");
a().mousemove(function(q){k=q.pageX;
j=q.pageY
});
if(a.browser.opera){l.keydown(function(q){if(q.keyCode===40){return o(q)
}})
}b.notCharacter=h(b.notCharacter||"");
if(!b.ajaxResults){if(typeof c==="function"){c=c()
}if(typeof c==="string"){c=JSON.parse(c)
}}})
}
})(jQuery);
if(!this.JSON){JSON=function(){function f(n){return n<10?"0"+n:n
}Date.prototype.toJSON=function(key){return this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z"
};
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapeable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapeable.lastIndex=0;
return escapeable.test(string)?'"'+string.replace(escapeable,function(a){var c=meta[a];
if(typeof c==="string"){return c
}return"\\u"+("0000"+(+(a.charCodeAt(0))).toString(16)).slice(-4)
})+'"':'"'+string+'"'
}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)
}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}gap+=indent;
partial=[];
if(typeof value.length==="number"&&!(value.propertyIsEnumerable("length"))){length=value.length;
for(i=0;
i<length;
i+=1){partial[i]=str(i,value)||"null"
}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;
return v
}if(rep&&typeof rep==="object"){length=rep.length;
for(i=0;
i<length;
i+=1){k=rep[i];
if(typeof k==="string"){v=str(k,value,rep);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value,rep);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;
return v
}}return{stringify:function(value,replacer,space){var i;
gap="";
indent="";
if(typeof space==="number"){for(i=0;
i<space;
i+=1){indent+=" "
}}else{if(typeof space==="string"){indent=space
}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})
},parse:function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v
}else{delete value[k]
}}}}return reviver.call(holder,key,value)
}cx.lastIndex=0;
if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+(+(a.charCodeAt(0))).toString(16)).slice(-4)
})
}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j
}throw new SyntaxError("JSON.parse")
}}
}()
}!function(b){var c=function(e,d){this.$element=b(e);
this.options=b.extend({},b.fn.typeahead.defaults,d);
this.matcher=this.options.matcher||this.matcher;
this.sorter=this.options.sorter||this.sorter;
this.highlighter=this.options.highlighter||this.highlighter;
this.updater=this.options.updater||this.updater;
this.source=this.options.source;
this.$menu=b(this.options.menu);
this.shown=false;
this.listen()
};
c.prototype={constructor:c,select:function(){var d=this.$menu.find(".active").attr("data-value");
this.$element.val(this.updater(d)).change();
return this.hide()
},updater:function(d){return d
},show:function(){var d=b.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});
this.$menu.insertAfter(this.$element).css({top:d.top+d.height,left:d.left}).show();
this.shown=true;
return this
},hide:function(){this.$menu.hide();
this.shown=false;
return this
},lookup:function(e){var d;
this.query=this.$element.val();
if(!this.query||this.query.length<this.options.minLength){return this.shown?this.hide():this
}d=b.isFunction(this.source)?this.source(this.query,b.proxy(this.process,this)):this.source;
return d?this.process(d):this
},process:function(d){var e=this;
d=b.grep(d,function(f){return e.matcher(f)
});
d=this.sorter(d);
if(!d.length){return this.shown?this.hide():this
}return this.render(d.slice(0,this.options.items)).show()
},matcher:function(d){return ~d.toLowerCase().indexOf(this.query.toLowerCase())
},sorter:function(f){var g=[],e=[],d=[],h;
while(h=f.shift()){if(!h.toLowerCase().indexOf(this.query.toLowerCase())){g.push(h)
}else{if(~h.indexOf(this.query)){e.push(h)
}else{d.push(h)
}}}return g.concat(e,d)
},highlighter:function(d){var e=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");
return d.replace(new RegExp("("+e+")","ig"),function(f,g){return"<strong>"+g+"</strong>"
})
},render:function(d){var e=this;
d=b(d).map(function(f,g){f=b(e.options.item).attr("data-value",g);
f.find("a").html(e.highlighter(g));
return f[0]
});
d.first().addClass("active");
this.$menu.html(d);
return this
},next:function(e){var f=this.$menu.find(".active").removeClass("active"),d=f.next();
if(!d.length){d=b(this.$menu.find("li")[0])
}d.addClass("active")
},prev:function(e){var f=this.$menu.find(".active").removeClass("active"),d=f.prev();
if(!d.length){d=this.$menu.find("li").last()
}d.addClass("active")
},listen:function(){this.$element.on("focus",b.proxy(this.focus,this)).on("blur",b.proxy(this.blur,this)).on("keypress",b.proxy(this.keypress,this)).on("keyup",b.proxy(this.keyup,this));
if(this.eventSupported("keydown")){this.$element.on("keydown",b.proxy(this.keydown,this))
}this.$menu.on("click",b.proxy(this.click,this)).on("mouseenter","li",b.proxy(this.mouseenter,this)).on("mouseleave","li",b.proxy(this.mouseleave,this))
},eventSupported:function(d){var e=d in this.$element;
if(!e){this.$element.setAttribute(d,"return;");
e=typeof this.$element[d]==="function"
}return e
},move:function(d){if(!this.shown){return
}switch(d.keyCode){case 9:case 13:case 27:d.preventDefault();
break;
case 38:d.preventDefault();
this.prev();
break;
case 40:d.preventDefault();
this.next();
break
}d.stopPropagation()
},keydown:function(d){this.suppressKeyPressRepeat=~b.inArray(d.keyCode,[40,38,9,13,27]);
this.move(d)
},keypress:function(d){if(this.suppressKeyPressRepeat){return
}this.move(d)
},keyup:function(d){switch(d.keyCode){case 40:case 38:case 16:case 17:case 18:break;
case 9:case 13:if(!this.shown){return
}this.select();
break;
case 27:if(!this.shown){return
}this.hide();
break;
default:this.lookup()
}d.stopPropagation();
d.preventDefault()
},focus:function(d){this.focused=true
},blur:function(d){this.focused=false;
if(!this.mousedover&&this.shown){this.hide()
}},click:function(d){d.stopPropagation();
d.preventDefault();
this.select();
this.$element.focus()
},mouseenter:function(d){this.mousedover=true;
this.$menu.find(".active").removeClass("active");
b(d.currentTarget).addClass("active")
},mouseleave:function(d){this.mousedover=false;
if(!this.focused&&this.shown){this.hide()
}}};
var a=b.fn.typeahead;
b.fn.typeahead=function(d){return this.each(function(){var g=b(this),f=g.data("typeahead"),e=typeof d=="object"&&d;
if(!f){g.data("typeahead",(f=new c(this,e)))
}if(typeof d=="string"){f[d]()
}})
};
b.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1};
b.fn.typeahead.Constructor=c;
b.fn.typeahead.noConflict=function(){b.fn.typeahead=a;
return this
};
b(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(f){var d=b(this);
if(d.data("typeahead")){return
}d.typeahead(d.data())
})
}(window.jQuery);
$(document).ready(function(){var c=$(".viewport .top-content .featured .auto-width-column .dcomparsys");
var f,h,b,a,g;
if(!Modernizr.input.placeholder){$("input[type=text]").focus(function(){var i=$(this);
if(i.val()==i.attr("placeholder")){i.val("");
i.removeClass("placeholder")
}}).blur(function(){var i=$(this);
if(i.val()==""||i.val()==i.attr("placeholder")){i.addClass("placeholder");
i.val(i.attr("placeholder"))
}}).blur();
$("input[type=text]").parents("form").submit(function(){$(this).find("input[type=text]").each(function(){var i=$(this);
if(i.val()==i.attr("placeholder")){i.val("")
}})
})
}if(c!=undefined){for(var e=0;
e<c.length;
e++){var d=$(c[e]).attr("class").split(/\s+/);
f=d[0].substr(d[0].length-1);
if(!(f=="0"||f=="1"||f=="2")){f=d[1].substr(d[1].length-1)
}if($("> .section div",c[e]).hasClass("expired-promo")){if(e==0){h=f
}else{if(e==1){b=f
}else{if(e==2){a=f
}}}}}if(h!=undefined){$(".twentyfive-fifty-twentyfive-c0").css("display","none");
$(".twentyfive-fifty-twentyfive-c1").css("left","0%");
$(".twentyfive-fifty-twentyfive-c2").css("left","51%")
}if(h!=undefined&&b!=undefined){$(".twentyfive-fifty-twentyfive-c1").css("display","none");
$(".twentyfive-fifty-twentyfive-c2").css("left","0%")
}else{if(b!=undefined){$(".twentyfive-fifty-twentyfive-c1").css("display","none");
$(".twentyfive-fifty-twentyfive-c2").css("left","26%")
}}}});
if(navigator.userAgent.indexOf("mobi")>0){$("body").addClass("mobile")
}$(window).resize(function(){if(matchMedia("(min-width: 768px)").matches){$(".search, .navigation").show();
$(".search").removeAttr("style")
}});
if(/MSIE (9\.[\.0-9]{0,})/i.test(navigator.userAgent)){$(document).ready(function(){setAllDesktopImages()
})
}else{$(document).ready(function(){setAllImgsRendition()
});
$(window).resize(function(){setAllImgsRendition()
})
}var linckClicked=null;
$("li.subnav-item").children("a").click(function(a){if(!$(this).hasClass("new-window")){$(".sub-nav").each(function(c){var d=$(this);
$(this).slideUp(function(){d.siblings(".sub-nav").hide()
})
});
if($(this).hasClass("active")){linckClicked=$(this);
$(this).siblings(".sub-nav").slideUp(function(){linckClicked.siblings(".sub-nav").hide()
}).removeClass("open");
$(this).removeClass("active")
}else{var b=0;
if($(".location-container").hasClass("open")){$(".location-container").slideUp().removeClass("open");
$("a.location-link").removeClass("active")
}if($("li.subnav-item").children("a.active").siblings(".sub-nav").length>0){linckClicked=$(this);
$("li.subnav-item a.active").siblings(".sub-nav").slideUp(function(){$("li.subnav-item a").siblings(".sub-nav").removeClass("open");
var d=linckClicked.siblings(".sub-nav");
var c=d.outerHeight();
d.height(0);
d.show();
d.animate({height:c},400).addClass("open")
});
$("li.subnav-item").children("a.active").removeClass("active");
$(this).addClass("active")
}else{$(this).siblings(".sub-nav").slideDown().addClass("open");
$(this).addClass("active")
}}}if($(this).hasClass("no-click-close")){return false
}});
$(".location-link").click(function(b){b.preventDefault();
$("#site-options").removeClass("visibility-hidden");
if($(".location-container").hasClass("open")){$(".location-container").slideUp().removeClass("open");
$("a.location-link").removeClass("active");
$(".location-link").attr("aria-expanded",false)
}else{var a=0;
if($("li.subnav-item div.sub-nav.open").length>0){$("li.subnav-item div.sub-nav.open").slideUp().removeClass("open");
$("li.subnav-item a").removeClass("active");
$(".location-link").attr("aria-expanded",false);
a=650
}$(".location-link").attr("aria-expanded",true);
$("a.location-link").addClass("active");
$(".location-container").delay(a).slideDown().addClass("open");
setTimeout(function(){ssb.aConts[0].scrollTop=0;
ssb.aConts[0].sb.style.top="20px"
},a+200)
}});
$("body").click(function(a){if(!($(a.target).hasClass("no-click-close")||$(a.target).hasClass("ssb_sb"))){if($("li.subnav-item div.sub-nav.open").length>0){$("li.subnav-item div.sub-nav.open").slideUp().removeClass("open");
$("li.subnav-item a.active").removeClass("active")
}if($(".location-container").hasClass("open")){$(".location-container").slideUp().removeClass("open");
$("a.location-link").removeClass("active")
}}});
$(".mobile-nav-button").click(function(a){$(this).toggleClass("active");
$(".navigation").slideToggle(menuSlideTime);
if(!($(".mobile-nav-button").hasClass("active"))){$(".mobile-nav-button").addClass("visited").attr("aria-expanded",false)
}if($(".mobile-nav-button").hasClass("active")){$(".mobile-nav-button").removeClass("visited").attr("aria-expanded",true)
}});
$(".mobile-search-button").click(function(a){$(".mobile-search-close").attr("aria-expanded",true);
$(this).attr("aria-expanded",true);
searchContainer.show().animate({marginLeft:0},searchSlideTime,"linear");
$(".search").css("display","block");
if($(".mobile-nav-button").hasClass("active")){$(".navigation").slideToggle(menuSlideTime);
$(".mobile-nav-button").removeClass("active").attr("aria-expanded",false)
}});
$(".mobile-search-close").click(function(a){searchContainer.animate({marginLeft:"768px"},searchSlideTime,"linear",function(){$(this).hide().attr("aria-expanded",false)
});
$(".mobile-search-button").attr("aria-expanded",false)
});
function positionContent(){$(".wrapper").css("top",$("#header").outerHeight(true));
$("#footer-section").css("top",$("#header").outerHeight(true));
$("#header").css("position","fixed");
var a=$("#header").outerHeight(true)-$(".breadcrumb-section-bar ul.language-display").outerHeight(true);
$(".sub-nav").each(function(){$(this).css("top",a)
})
}var menuSlideTime=650;
var searchSlideTime=650;
var searchContainer=$("#header div.header-container div.column.search");
$(document).ready(function(){if(matchMedia("(min-width: 768px)").matches){positionContent()
}else{searchContainer.hide()
}$(window).resize(function(){if(matchMedia("(min-width: 768px)").matches){positionContent();
searchContainer.show()
}else{$("#header").css("position","relative");
$(".wrapper").css("top","0");
$("#footer-section").css("top","0")
}})
});
var featuredHeight=$(".main-container .featured-trending-container .toggle-links span.featured").height();
var bodyBackground=$("body").css("background");
var featuredTrendingTime=800;
var greenDotsTime=1000;
var contentTime=500;
var needToSetTop=false;
var featuredTrendingContainer=$(".featured-trending-container");
var topFeaturedContent=$(".main-container .viewport .top-content .featured");
var topTrendingContent=$(".main-container .viewport .top-content .trending");
var FeaturedTrending=$(".main-container .featured-trending-container .toggle-links a.gotoslide1").attr("aria-label");
var TrendingFeatured=$(".main-container .featured-trending-container .toggle-links a.gotoslide2").attr("aria-label");
var greenDotsContainer=$(".green-dots-container");
var fReported=false;
var tReported=false;
var trendingPromos="";
function alignTopContentHeight(){var c=0;
var a=0;
var d;
var b=false;
if(topTrendingContent.css("display")=="none"){b=true
}if(b){topTrendingContent.show()
}$(".trending-promo",topTrendingContent).each(function(){if(!$(this).hasClass("mobile-version")&&$(this).outerHeight(true)>a){a=$(this).outerHeight(true)
}});
$(".auto-width-column",topFeaturedContent).children("div").each(function(){if($(this).outerHeight(true)>c){c=$(this).outerHeight(true)
}});
if(b){topTrendingContent.hide()
}topFeaturedContent.css("height",c);
topTrendingContent.css("height",a)
}function alignToggle(){if(greenDotsContainer.position()!=undefined){var a=greenDotsContainer.position().top-greenDotsContainer.outerHeight(true)/2;
if($(".cookie-container").length){var b=$(".cookie-container").outerHeight(false);
a=greenDotsContainer.position().top+b-greenDotsContainer.outerHeight(true)/2
}featuredTrendingContainer.offset({top:a+$("#header").outerHeight(true)});
a=0
}}function alignArrow(){$(".toggle-links span",featuredTrendingContainer).each(function(){var a=$(this).outerWidth(true)/2;
$("i",this).css("left",0-a)
})
}function changeArrow(a){if(a=="tablet"){$(".main-container .featured-trending-container .toggle-links span i").removeClass("icon-chevron-right").addClass("icon-chevron-down").removeAttr("style");
alignArrow()
}if(a=="desktop"){$(".main-container .featured-trending-container .toggle-links span i").removeClass("icon-chevron-down").addClass("icon-chevron-right");
$(".main-container .featured-trending-container .toggle-links span i.icon-chevron-right").css({opacity:"1.0",left:"auto"})
}}function toggleGreenDot(){if(matchMedia("(max-width: 1023px)").matches){$(".main-container .featured-trending-container .green-dot-animation").hide();
$(".main-container .featured-trending-container").css({top:0,position:"static"});
changeArrow("tablet")
}if(matchMedia("(min-width: 1024px)").matches){$(".main-container .featured-trending-container .green-dot-animation").show();
changeArrow("desktop");
alignToggle()
}}function featuredToTrending(){topFeaturedContent.animate({opacity:0},500,"linear",function(){$(this).hide().removeClass("selected");
topTrendingContent.show().css({opacity:0,visibility:"visible"}).animate({opacity:1},500,"linear");
topTrendingContent.addClass("selected");
if(matchMedia("(min-width: 1024px)").matches){alignToggle()
}$(".dot").attr("aria-label",TrendingFeatured)
});
$(".main-container .viewport .bottom-content .featured").animate({opacity:0},500,"linear",function(){$(this).hide().removeClass("selected");
$(".main-container .viewport .bottom-content .trending").show().css({opacity:0,visibility:"visible"}).animate({opacity:1},500,"linear");
$(".main-container .viewport .bottom-content .trending").addClass("selected")
});
if(matchMedia("(min-width: 1024px)").matches){$(".main-container .featured-trending-container .toggle-links span.featured").animate({top:"-="+featuredHeight},500,"linear");
$(".main-container .featured-trending-container .toggle-links span.trending").animate({top:"-="+featuredHeight},500,"linear")
}$(".featured-trending-container .toggle-links .gotoslide1").attr("aria-expanded","false");
$(".featured-trending-container .toggle-links .gotoslide2").attr("aria-expanded","true");
$(".featured-trending-container .toggle-links span.featured").removeClass("selected");
$(".featured-trending-container .toggle-links span.trending").addClass("selected");
$("body").css("background","#e5f2cb");
if(matchMedia("(max-width: 1023px)").matches){$(".main-container .featured-trending-container .toggle-links span.featured i.icon-chevron-down").animate({opacity:0},500,"linear",function(){$(".main-container .featured-trending-container .toggle-links span.trending i.icon-chevron-down").animate({opacity:1},500,"linear")
})
}trackTrendingPromos()
}function trackPageViewAgain(){CQ_Analytics.Sitecatalyst.saveEvars();
CQ_Analytics.Sitecatalyst.collect();
CQ_Analytics.Sitecatalyst.updateEvars();
s.t()
}function trackTrendingPromos(){if(!tReported){$CQ("#templateSpan").removeAttr("record");
$CQ("#pageNameSpan").removeAttr("record");
$CQ("#featured_event27").removeAttr("record");
if($CQ("#sc_scroll_event29")!=null&&$CQ("#sc_scroll_event29")!=undefined&&$CQ("#sc_scroll_event29")!="undefined"){$CQ("#sc_scroll_event29").removeAttr("record")
}if($CQ("#sc_scroll_event30")!=null&&$CQ("#sc_scroll_event30")!=undefined&&$CQ("#sc_scroll_event30")!="undefined"){$CQ("#sc_scroll_event30").removeAttr("record")
}$CQ("#trending_event27").attr("record","'event27', {'list2':trendingPromoIdString}");
$CQ("#templateSpan").attr("record","'pageView', {'prop52':sc_template+'_trending'}");
$CQ("#pageNameSpan").attr("record","'pageView', {'pageName':sc_currentPageName+'_trending'}");
$CQ(document).trigger("customevent");
tReported=true
}}function trendingToFeatured(){topTrendingContent.animate({opacity:0},500,"linear",function(){$(this).hide().removeClass("selected");
topFeaturedContent.show().css({opacity:0,visibility:"visible"}).animate({opacity:1},500,"linear");
topFeaturedContent.addClass("selected");
if(matchMedia("(min-width: 1024px)").matches){alignToggle()
}$(".dot").attr("aria-label",FeaturedTrending)
});
$(".main-container .viewport .bottom-content .trending").animate({opacity:0},500,"linear",function(){$(this).hide().removeClass("selected");
$(".main-container .viewport .bottom-content .featured").show().css({opacity:0,visibility:"visible"}).animate({opacity:1},500,"linear");
$(".main-container .viewport .bottom-content .featured").addClass("selected")
});
if(matchMedia("(min-width: 1024px)").matches){$(".main-container .featured-trending-container .toggle-links span.featured").animate({top:"+="+featuredHeight},500,"linear").addClass("selected");
$(".main-container .featured-trending-container .toggle-links span.trending").animate({top:"+="+featuredHeight},500,"linear").removeClass("selected")
}$(".featured-trending-container .toggle-links .gotoslide1").attr("aria-expanded","true");
$(".featured-trending-container .toggle-links .gotoslide2").attr("aria-expanded","false");
$(".featured-trending-container .toggle-links span.featured").addClass("selected");
$(".featured-trending-container .toggle-links span.trending").removeClass("selected");
$("body").css("background",bodyBackground);
if(matchMedia("(max-width: 1023px)").matches){$(".main-container .featured-trending-container .toggle-links span.trending i.icon-chevron-down").animate({opacity:0},500,"linear",function(){$(".main-container .featured-trending-container .toggle-links span.featured i.icon-chevron-down").animate({opacity:1},500,"linear")
})
}}function resizeToDesktop(){featuredHeight=$(".main-container .featured-trending-container .toggle-links span.featured").height();
if(needToSetTop){$(".main-container .featured-trending-container .toggle-links span.featured").removeAttr("style");
$(".main-container .featured-trending-container .toggle-links span.trending").removeAttr("style");
if($(".main-container .featured-trending-container .toggle-links span.trending").hasClass("selected")){$(".main-container .featured-trending-container .toggle-links span.featured").css({top:"-="+featuredHeight});
$(".main-container .featured-trending-container .toggle-links span.trending").css({top:"-="+featuredHeight})
}needToSetTop=false
}if(topFeaturedContent.height()==0){$(window).resize()
}}$(function(){if(matchMedia("(max-width: 767px)").matches){greenDotsTime=0
}else{setTimeout(function(){alignTopContentHeight()
},400)
}setTimeout(function(){toggleGreenDot();
$(".main-container .featured-trending-container").css({opacity:0,visibility:"visible"}).animate({opacity:1},featuredTrendingTime,"linear",function(){$(".main-container .viewport .green-dots-container").css({visibility:"visible",opacity:1}).animate({width:"100%"},greenDotsTime,"linear",function(){topFeaturedContent.css({opacity:0,visibility:"visible"}).animate({opacity:1},contentTime,"linear");
$(".main-container .viewport .bottom-content .featured").delay(500).css({opacity:0,visibility:"visible"}).animate({opacity:1},contentTime,"linear")
})
})
},400);
if(matchMedia("(max-width: 1023px)").matches){$(".main-container .featured-trending-container .toggle-links span.featured i").animate({opacity:1},3000,"linear")
}$(window).resize(function(){if(matchMedia("(max-width: 767px)").matches){topFeaturedContent.css("height","auto");
topTrendingContent.css("height","auto")
}else{setTimeout(function(){alignTopContentHeight();
if(matchMedia("(min-width: 1024px)").matches){resizeToDesktop()
}else{backToDesktop=false
}},400)
}setTimeout(function(){toggleGreenDot()
},400)
});
var a=0;
$(".main-container .featured-trending-container .green-dot-animation .dot").click(function(d){d.preventDefault();
var c=(new Date().getTime()-a);
var b=parseFloat(topFeaturedContent.css("opacity"));
if(c>500&&(b==0||b==1)){needToSetTop=false;
if(topFeaturedContent.hasClass("selected")&&$(".main-container .viewport .bottom-content .featured").hasClass("selected")){featuredToTrending()
}if(topTrendingContent.hasClass("selected")&&$(".main-container .viewport .bottom-content .trending").hasClass("selected")){trendingToFeatured()
}}a=new Date().getTime();
return false
});
$(".featured-trending-container .toggle-links .gotoslide1").click(function(){if(!$(" span",this).hasClass("selected")){needToSetTop=!needToSetTop;
trendingToFeatured()
}return false
});
$(".featured-trending-container .toggle-links .gotoslide2").click(function(){if(!$(" span",this).hasClass("selected")){needToSetTop=!needToSetTop;
featuredToTrending()
}return false
})
});
var scOnLoadReported=false;
var cse_local,cse_cx,cse_sig,cse_all;
function reportOnLinkClick(k,i){var e=self.getParameterByName("qr");
var h=i.replace("http://","").replace("https://","");
h=h.substring(h.indexOf("/"),h.lastIndexOf(".htm"));
var a="1";
var f=self.getParameterByName("p");
var g=k;
var c="";
var b=self.getParameterByName("f");
if(f!==undefined&&f!==""){a=f;
g=((f-1)*10)+k
}if(b!==undefined){if(b===""){c="all"
}else{c=b.toLowerCase().replace("more:","")
}}if(e!==undefined&&e!==""){var j=new Array();
e=e.toLowerCase();
var j=new Array();
var d=new Object();
j[0]="event38";
d.prop7=e;
d.googleSearchTermLink_eVar49=e+"|"+h;
d.googleSearchTermResult_prop49=a+"|"+g+"|"+c;
recordSitecatEvent(j,d,"GoogleSearchResultClicked")
}}var wrapInTag=function(a,e,d){var c=new RegExp(e,"gi"),b="<"+a+">$&</"+a+">";
return d.replace(c,b)
};
var highlightSearch=function(a){return wrapInTag("strong",pageVM.Query(),a)
};
CSEPage=function(){var a=this;
a.DoPage=function(){pageVM.ReplaceHash(pageVM.Query(),pageVM.Facet(),a.label(),"",false)
};
a.IsActive=ko.computed(function(){return pageVM.Page()===parseInt(a.label(),10)
});
a.IsCurrent=ko.computed(function(){if(pageVM.Page()===a.label()){return Current_page_key
}else{return View_page_key
}})
};
CSECursor=function(){var a=this;
a.pages=ko.observableArray();
a.resultCount=ko.observable();
a.LoadJSON=function(c){var b=KoMap(CSECursor);
b.pages=KoMap(CSEPage);
ko.mapping.fromJS(c,b,a)
}
};
CSEFacet=function(){var a=this;
a.label=ko.observable();
a.label_with_op=ko.observable();
a.anchor=ko.observable();
a.count=ko.observable();
a.DoFacet=function(){pageVM.ReplaceHash(pageVM.Query(),a.label_with_op(),1,"",false)
};
a.IsActive=ko.computed(function(){return pageVM.Facet()===a.label_with_op()
})
};
CSETrackResultClick=function(b,a){if($(a.target).prop("tagName")==="STRONG"){$(a.target).parent().trigger("click")
}else{reportOnLinkClick($("h2.tertiary-headline a").index(a.target)+1,$(a.target).attr("href"))
}return true
};
CSEContext=function(){var a=this;
a.facets=ko.observableArray();
a.LoadJSON=function(c){if(c.facets.length===0&&pageVM.PreviousFacets().length>0){c.facets=pageVM.PreviousFacets()
}var b=KoMap(CSEContext);
b.facets=KoMap(CSEFacet);
ko.mapping.fromJS(c,b,a)
}
};
CSESpelling=function(){var a=this;
a.correctedQuery=ko.observable();
a.originalQuery=ko.observable();
a.type=ko.observable();
a.LoadJSON=function(c){var b=KoMap(CSESpelling);
ko.mapping.fromJS(c,b,a)
};
a.TrimSuggestions=function(c){try{var c=c.split("more:");
return c[0]
}catch(b){}};
a.ShowCorrected=ko.computed(function(){return a.TrimSuggestions(a.correctedQuery())
},this);
a.ShowOriginal=ko.computed(function(){return a.TrimSuggestions(a.originalQuery())
},this);
a.DoCorrected=function(){pageVM.ReplaceHash(a.TrimSuggestions(a.correctedQuery()),pageVM.Facet(),1,pageVM.Sort(),false)
};
a.DoIncorrect=function(){pageVM.ReplaceHash(a.TrimSuggestions(a.originalQuery()),pageVM.Facet(),1,pageVM.Sort(),true)
};
a.HasSpelling=ko.computed(function(){return(typeof a.type()!=="undefined"&&a.type()!=="")
},this);
a.HasCorrected=ko.computed(function(){return(typeof a.type()!=="undefined"&&a.type()==="SPELL_CORRECTED_RESULTS")
},this);
a.HasIncorrect=ko.computed(function(){return(typeof a.originalQuery()!=="undefined"&&a.originalQuery()!=="")
},this);
a.HasDYM=ko.computed(function(){return(typeof a.type()!=="undefined"&&a.type()==="DYM")
},this)
};
CSEPromotion=function(){var a=this;
a.LoadJSON=function(c){var b=KoMap(CSEPromotion);
ko.mapping.fromJS(c,b,a)
};
a.Isthumb=ko.computed(function(){try{if(a.image===undefined){return false
}else{return true
}}catch(b){}});
a.thumbURL=ko.computed(function(){try{if(a.image===undefined){return false
}else{return(a.image.url())
}}catch(b){}});
a.BodyLines=ko.computed(function(){try{if(a.bodyLines().length){return a.bodyLines()[0].title()
}else{return""
}}catch(b){}})
};
CSEResult=function(){var a=this;
a.HasThumbnail=ko.computed(function(){return a.Thumbnail()!==""
});
a.Headline=ko.computed(function(){try{var c=a.richSnippet.metatags.ogTitle()
}catch(b){}try{return highlightSearch(c)
}catch(b){}try{var c=a.titleNoFormatting();
return highlightSearch(c)
}catch(b){}return(c)
});
a.Teaser=ko.computed(function(){try{var c=a.richSnippet.metatags.ogDescription()
}catch(b){}try{return highlightSearch(c)
}catch(b){}try{var c=a.contentNoFormatting();
return highlightSearch(c)
}catch(b){}return(c)
});
a.Url=ko.computed(function(){var c="";
try{c=a.unescapedUrl()
}catch(b){}return c
});
a.FormattedUrl=ko.computed(function(){var d="";
var c=new RegExp("litetopicpage");
try{d=a.unescapedUrl();
var b=d.split("/");
if(b.length>8){d="";
for(var e=2;
e<=b.length;
e++){if(e<5){d+=b[e]+"/"
}}d+="../"+b[b.length-1]
}else{if(c.test(b[6])){d="";
for(var e=2;
e<=b.length;
e++){if(e<5){d+=b[e]+"/"
}}d+=".. "+b[b.length-1].replace("litetopicpage.","")
}}}catch(f){}try{return highlightSearch(decodeURI(d))
}catch(f){}return decodeURI(d)
});
a.Thumbnail=ko.computed(function(){var c="";
try{c=a.metatags.ogImage()
}catch(b){}if(c===""){try{c=a.richSnippet.cseThumbnail.src()
}catch(b){}}if(!a.isValidImg(c)){c=""
}return c.trim()
});
a.isValidImg=function(b){b=b===null?"":b;
return b.indexOf("http")===0
};
a.Person=ko.computed(function(){try{if(a.richSnippet.person()){return true
}else{return false
}}catch(b){}});
a.Personinfo=ko.computed(function(){var c="";
try{var f="";
if(a.richSnippet.postaladdress.addresslocality()!==""&&a.richSnippet.postaladdress.addresscountry()!==""){f=a.richSnippet.postaladdress.addresslocality()+", "+a.richSnippet.postaladdress.addresscountry()
}c+=f
}catch(e){}try{try{var b=a.richSnippet.postaladdress.telephone();
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var d=b.replace(/[^0-9+]/g,"");
b='<a href="tel:'+d+'">'+b+"</a>"
}if(c!=""){c+=" | "+phone_key+": "+b
}else{c+=phone_key+": "+b
}}catch(e){}return c
}catch(e){}});
a.Office=ko.computed(function(){try{if(a.richSnippet.organization){return true
}else{return false
}}catch(b){}});
a.OfficeTelephone=ko.computed(function(){try{var e=a.richSnippet.organization.telephone();
var b=e.split(":");
if(b[1]!=""){e=phone_key+": "+b[1]
}if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var d=b[1].replace(/[^0-9+]/g,"");
e=phone_key+': <a href="tel:'+d+'">'+b[1]+"</a>"
}return e
}catch(c){}});
a.OfficeMap=ko.computed(function(){try{var c="https://www.google.com/maps/place/";
c+=a.richSnippet.postaladdress.streetaddress()+","+a.richSnippet.postaladdress.addresslocality()+","+a.richSnippet.postaladdress.addresscountry();
return c
}catch(b){}});
a.isFile=ko.computed(function(){try{if(a.fileFormat){return true
}else{return false
}}catch(b){}});
a.Author=ko.computed(function(){try{var b=By_key+": "+a.richSnippet.metatags.author();
return b
}catch(c){}})
};
KoMap=function(a){return{create:function(b){var c=new a();
ko.mapping.fromJS(b.data,{},c);
return c
}}
};
var SearchModel=function(){var b=this;
b.context=ko.observable();
b.cursor=ko.observable();
b.promotions=ko.observableArray();
b.spelling=ko.observable();
b.results=ko.observableArray();
b.Sort=ko.observable("");
b.Query=ko.observable("");
b.Facet=ko.observable("");
b.PreviousFacets=ko.observableArray("");
b.Page=ko.observable(1);
b.PageSize=ko.observable(10);
b.Cse=ko.observable(cse_local);
b.Force=ko.observable(false);
b.Global=ko.observable(false);
b.Global.subscribe(function(c){if(c){b.Cse(cse_all)
}else{b.Cse(cse_local)
}b.ReplaceHash(b.Query(),"",1,b.Sort(),false)
});
b.QueryWithFacet=ko.computed(function(){if(b.Facet()!==""){return b.Query()+" "+b.Facet()
}else{return b.Query()
}});
b.Start=ko.computed(function(){return parseInt(b.Page(),10)*parseInt(b.PageSize(),10)
});
b.ResultCount=ko.computed(function(){if(typeof(b.cursor())==="undefined"){return 0
}else{try{return parseInt(b.cursor().resultCount().replace(/\,/g,""),10)
}catch(c){}return 0
}});
b.ResultCountFormatted=ko.computed(function(){try{if(typeof(b.cursor())==="undefined"){return 0
}else{var c="";
try{c=parseInt(b.cursor().resultCount().replace(",",""),10)
}catch(e){}if(c>100){c=max_results
}else{c+=" "+word_results
}if(b.getParam("f")!==""){var d=b.getParam("f").replace("more:","");
return d.charAt(0).toUpperCase()+d.slice(1)+": "+c
}else{return cse_AllResultsLabel+": "+c
}}}catch(e){}});
b.HasResults=ko.computed(function(){return b.ResultCount()>0
},this);
b.HasFacets=ko.computed(function(){try{return b.context().facets().length>1
}catch(c){}},this);
b.NoResults=ko.computed(function(){return !b.HasResults()
},this);
b.HasPromotions=ko.computed(function(){return b.promotions().length>0
},this);
b.SelectedCse=ko.computed(function(){return cse_cx+b.Cse()
});
b.ReplaceHash=function(g,h,f,c,e){b.Query(g);
b.Facet(h);
var d="#qr="+encodeURIComponent(g);
if(typeof(h)!=="undefined"&&h!==""){d+="&f="+encodeURIComponent(h)
}else{d+="&i="+Math.floor(Math.random()*1000)
}if(typeof(f)!=="undefined"&&!isNaN(f)){b.Page(parseInt(f,10));
d+="&p="+encodeURIComponent(f)
}else{b.Page(1)
}if(c==="date"){b.Sort("date");
d+="&s=date"
}else{b.Sort("")
}if(e===true){b.Force(true);
d+="&fr=1"
}else{b.Force(false);
d+="&fr=0"
}window.location.hash=d
};
b.SortDate=function(){b.ReplaceHash(b.Query(),b.Facet(),b.Page(),"date",false)
};
b.SortRelevance=function(){b.ReplaceHash(b.Query(),b.Facet(),b.Page(),"",false)
};
b.searchOnSubmit=function(){b.Cse(cse_local);
var c=$("#gSearch").val();
if(resultsPage){if((c!=="")&&($("#gSearch").attr("placeholder")!==c)){b.ReplaceHash(c,"",1,b.Sort(),false)
}else{$("#gSearch").focus();
return false
}}else{if(c!==""&&($("#gSearch").attr("placeholder")!==c)){location.href=searchLocation+"#qr="+encodeURIComponent(c)
}else{$("#gSearch").focus();
return false
}}};
b.DoSearch=function(){var c=b.Query();
b.ReplaceHash(c,b.Facet(),b.Page(),b.Sort(),false)
};
var a="";
b.UpdateSearchTerm=function(d,c){a=c.currentTarget.value
};
b.TypeaheadUpdater=function(c){if(c!==undefined){if(c.match(/^http([s]?):\/\/.*/)){window.location=c
}else{$("input.gsc-input").val(c);
pageVM.searchOnSubmit()
}}else{$("input.gsc-input").val(a);
pageVM.searchOnSubmit();
return a
}};
b.TypeaheadSource=function(c,d){$.ajax({url:"https://clients1.google.com/complete/search",jsonp:"callback",type:"POST",dataType:"jsonp",data:{q:c,client:"partner",hl:cse_hl,partnerid:cse_cx+cse_local,sugexp:"gsnos%2Cn%3D13",gs_rn:25,gs_ri:"partner",types:"t",ds:"cse",cp:3,gs_id:0},success:function(g,f){var h=document.createDocumentFragment();
if(f==="success"){var i=[],e=g[1];
$.each(e,function(j,k){if(k[3]!==undefined&&k[3].a!==""){var m=k[3].a;
var l=document.createElement("li");
if(k[3].c!==""){$(l).append('<img src="'+k[3].c+'"/>')
}else{$(l).append("<div>&nbsp;</div>")
}$(l).addClass("promotions").attr("data-value",k[3].b);
$(l).append('<p><a href="'+k[3].b+'">'+m+"</a>"+k[3].d+"</p>");
$(h).append(l)
}else{i.push(k[0])
}})
}d(i);
$("#gSearchForm ul.typeahead").append(h);
$("#gSearchForm ul.typeahead").css({width:$(".gsc-input").outerWidth(true)+"px"})
}})
};
b.loading=function(){$(".wrapper").css({opacity:"0.5"});
$("#floatingCirclesG").fadeIn("slow");
if(b.HasFacets()){$(".content-filters").fadeIn("slow")
}$("#noResults").css({margin:"9999px"})
};
b.QueryParams=function(){var c={key:cse_key,hl:cse_hl,sig:cse_sig,cx:b.SelectedCse(),q:b.QueryWithFacet(),num:b.PageSize(),start:b.Start()-10,sort:b.Sort(),noncache:new Date().getTime(),prettyPrint:"false",rsz:"filtered_cse"};
if(b.Force()===true){c.nfpr=1
}return c
};
b.Search=function(){if(b.Query()!==""){b.Query(b.getParam("qr"));
b.Facet(b.getParam("f"));
var c=b.getParam("p");
if(c!==""&&!isNaN(c)){b.Page(parseInt(c,10))
}if(b.getParam("s")==="date"){b.Sort("date")
}if(b.getParam("fr")==="1"){b.Force(true)
}b.loading();
$.ajax({url:"https://www.googleapis.com/customsearch/v1element",jsonp:"callback",dataType:"jsonp",data:b.QueryParams(),success:function(f){var e=new CSEFacet();
e.label("");
e.label_with_op("");
e.anchor(cse_AllResultsLabel);
e.count(0);
if(typeof f.context!=="undefined"&&typeof f.context.facets!=="undefiend"&&f.context.facets.length>0){pageVM.PreviousFacets(f.context.facets)
}var d=new CSEContext();
d.LoadJSON(f.context);
d.facets().splice(0,0,e);
b.context(d);
var g=new CSECursor();
g.LoadJSON(f.cursor);
b.cursor(g);
var h=new CSESpelling();
if(f.spelling){h.LoadJSON(f.spelling)
}b.spelling(h);
if(f.promotions){$(".promotions").css({display:"block"});
ko.mapping.fromJS(f.promotions,KoMap(CSEPromotion),b.promotions)
}else{$(".promotions").css({display:"none"})
}if(f.results){ko.mapping.fromJS(f.results,KoMap(CSEResult),b.results)
}b.searchResultsReady()
}})
}};
b.init=function(){b.Query(b.getParam("qr"));
b.Facet(b.getParam("f"));
var c=b.getParam("p");
if(c!==""&&!isNaN(c)){b.Page(parseInt(c,10))
}if(b.getParam("s")==="date"){b.Sort("date")
}if(b.getParam("fr")==="1"){b.Force(true)
}b.Search()
};
b.getParam=function(e){var d=new RegExp("[\\?#&]"+e+"=([^&#]*)"),c=d.exec(location.search);
c=(c==null?d.exec(location.hash):c);
return c==null?"":decodeURIComponent(c[1].replace(/\+/g," "))
};
b.searchResultsReady=function(){if(b.getParam("qr")!==""){$("#gSearch").val(b.getParam("qr"));
var d=document.createDocumentFragment();
$(d).append(results_for).append(' "');
var f=document.createElement("span");
$(f).addClass("query-term").text(b.getParam("qr"));
$(d).append(f).append('"');
$(".primary-headline").empty().append(d)
}document.title=$(".primary-headline").text();
$(".search-sorting").show();
$(".primary-headline").show();
if(b.NoResults()){$("#noResults").css({margin:"0"});
$("#noResults").fadeIn("slow")
}$("#floatingCirclesG").fadeOut("slow");
$(".all-search-results").fadeIn("slow");
$(".wrapper").css({opacity:"1"});
window.scrollTo(0,0);
if(!scOnLoadReported){var e=b.getParam("qr");
var c=new Array();
var g=new Object();
if(e!=undefined&&e!=""){e=e.toLowerCase();
c[0]="event14";
if(b.NoResults()){c[0]="event39"
}g.prop7=e;
recordSitecatEvent(c,g,"GoogleSearchResultsLoaded")
}scOnLoadReported=true
}}
};
var pageVM=new SearchModel();
$(document).ready(function(){pageVM.init();
ko.applyBindings(pageVM);
$(window).on("hashchange",function(){scOnLoadReported=false;
pageVM.Search()
})
});