!function(b){var a=function(d,c){this.options=c;
this.$element=b(d).delegate('[data-dismiss="modal"]',"click.dismiss.modal",b.proxy(this.hide,this));
this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)
};
a.prototype={constructor:a,toggle:function(){return this[!this.isShown?"show":"hide"]()
},show:function(){var c=this,d=b.Event("show");
this.$element.trigger(d);
if(this.isShown||d.isDefaultPrevented()){return
}b("body").addClass("modal-open");
this.isShown=true;
this.escape();
this.backdrop(function(){var e=b.support.transition&&c.$element.hasClass("fade");
if(!c.$element.parent().length){c.$element.appendTo(document.body)
}c.$element.show();
if(e){c.$element[0].offsetWidth
}c.$element.addClass("in").attr("aria-hidden",false).focus();
c.enforceFocus();
e?c.$element.one(b.support.transition.end,function(){c.$element.trigger("shown")
}):c.$element.trigger("shown")
})
},hide:function(d){d&&d.preventDefault();
var c=this;
d=b.Event("hide");
this.$element.trigger(d);
if(!this.isShown||d.isDefaultPrevented()){return
}this.isShown=false;
b("body").removeClass("modal-open");
this.escape();
b(document).off("focusin.modal");
this.$element.removeClass("in").attr("aria-hidden",true);
b.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()
},enforceFocus:function(){var c=this;
b(document).on("focusin.modal",function(d){if(c.$element[0]!==d.target&&!c.$element.has(d.target).length){c.$element.focus()
}})
},escape:function(){var c=this;
if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.modal",function(d){d.which==27&&c.hide()
})
}else{if(!this.isShown){this.$element.off("keyup.dismiss.modal")
}}},hideWithTransition:function(){var c=this,d=setTimeout(function(){c.$element.off(b.support.transition.end);
c.hideModal()
},500);
this.$element.one(b.support.transition.end,function(){clearTimeout(d);
c.hideModal()
})
},hideModal:function(c){this.$element.hide().trigger("hidden");
this.backdrop()
},removeBackdrop:function(){this.$backdrop.remove();
this.$backdrop=null
},backdrop:function(f){var e=this,d=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var c=b.support.transition&&d;
this.$backdrop=b('<div class="modal-backdrop '+d+'" />').appendTo(document.body);
if(this.options.backdrop!="static"){this.$backdrop.click(b.proxy(this.hide,this))
}if(c){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
c?this.$backdrop.one(b.support.transition.end,f):f()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
b.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(b.support.transition.end,b.proxy(this.removeBackdrop,this)):this.removeBackdrop()
}else{if(f){f()
}}}}};
b.fn.modal=function(c){return this.each(function(){var f=b(this),e=f.data("modal"),d=b.extend({},b.fn.modal.defaults,f.data(),typeof c=="object"&&c);
if(!e){f.data("modal",(e=new a(this,d)))
}if(typeof c=="string"){e[c]()
}else{if(d.show){e.show()
}}})
};
b.fn.modal.defaults={backdrop:true,keyboard:true,show:true};
b.fn.modal.Constructor=a;
b(function(){b("body").on("click.modal.data-api",'[data-toggle="modal"]',function(h){var g=b(this),d=g.attr("href"),c=b(g.attr("data-target")||(d&&d.replace(/.*(?=#[^\s]+$)/,""))),f=c.data("modal")?"toggle":b.extend({remote:!/#/.test(d)&&d},c.data(),g.data());
h.preventDefault();
c.modal(f).one("hide",function(){g.focus()
})
})
})
}(window.jQuery);
!function(d,c){"function"==typeof define&&define.amd?define(["jquery"],c):c("object"==typeof exports?require("jquery"):d.jQuery)
}(this,function(L){function K(e,d){for(var f=e.length;
--f;
){if(+e[f]!==+d[f]){return !1
}}return !0
}function J(a){var d={range:!0,animate:!0};
return"boolean"==typeof a?d.animate=a:L.extend(d,a),d
}function I(r,q,p,o,n,m,l,k,a){this.elements="array"===L.type(r)?[+r[0],+r[2],+r[4],+r[1],+r[3],+r[5],0,0,1]:[r,q,p,o,n,m,l||0,k||0,a||1]
}function H(e,d,f){this.elements=[e,d,f]
}function G(a,m){if(!(this instanceof G)){return new G(a,m)
}1!==a.nodeType&&L.error("Panzoom called on non-Element node"),L.contains(document,a)||L.error("Panzoom element must be attached to the document");
var l=L.data(a,B);
if(l){return l
}this.options=m=L.extend({},G.defaults,m),this.elem=a;
var k=this.$elem=L(a);
this.$set=m.$set&&m.$set.length?m.$set:k,this.$doc=L(a.ownerDocument||document),this.$parent=k.parent(),this.isSVG=x.test(a.namespaceURI)&&"svg"!==a.nodeName.toLowerCase(),this.panning=!1,this._buildTransform(),this.isSVG||(this._transform=L.cssProps.transform.replace(y,"-$1").toLowerCase()),this._buildTransition(),this.resetDimensions();
var j=L(),f=this;
L.each(["$zoomIn","$zoomOut","$zoomRange","$reset"],function(d,c){f[c]=m[c]||j
}),this.enable(),L.data(a,B,this)
}var F="over out down up move enter leave cancel".split(" "),E=L.extend({},L.event.mouseHooks),D={};
if(window.PointerEvent){L.each(F,function(a,d){L.event.fixHooks[D[d]="pointer"+d]=E
})
}else{var C=E.props;
E.props=C.concat(["touches","changedTouches","targetTouches","altKey","ctrlKey","metaKey","shiftKey"]),E.filter=function(f,e){var h,g=C.length;
if(!e.pageX&&e.touches&&(h=e.touches[0])){for(;
g--;
){f[C[g]]=h[C[g]]
}}return f
},L.each(F,function(a,f){if(2>a){D[f]="mouse"+f
}else{var e="touch"+("down"===f?"start":"up"===f?"end":f);
L.event.fixHooks[e]=E,D[f]=e+" mouse"+f
}})
}L.pointertouch=D;
var B="__pz__",A=Array.prototype.slice,z=!!window.PointerEvent,y=/([A-Z])/g,x=/^http:[\w\.\/]+svg$/,w=/^inline/,v="(\\-?[\\d\\.e]+)",u="\\,?\\s*",t=new RegExp("^matrix\\("+v+u+v+u+v+u+v+u+v+u+v+"\\)$");
return I.prototype={x:function(e){var d=e instanceof H,h=this.elements,g=e.elements;
return d&&3===g.length?new H(h[0]*g[0]+h[1]*g[1]+h[2]*g[2],h[3]*g[0]+h[4]*g[1]+h[5]*g[2],h[6]*g[0]+h[7]*g[1]+h[8]*g[2]):g.length===h.length?new I(h[0]*g[0]+h[1]*g[3]+h[2]*g[6],h[0]*g[1]+h[1]*g[4]+h[2]*g[7],h[0]*g[2]+h[1]*g[5]+h[2]*g[8],h[3]*g[0]+h[4]*g[3]+h[5]*g[6],h[3]*g[1]+h[4]*g[4]+h[5]*g[7],h[3]*g[2]+h[4]*g[5]+h[5]*g[8],h[6]*g[0]+h[7]*g[3]+h[8]*g[6],h[6]*g[1]+h[7]*g[4]+h[8]*g[7],h[6]*g[2]+h[7]*g[5]+h[8]*g[8]):!1
},inverse:function(){var d=1/this.determinant(),c=this.elements;
return new I(d*(c[8]*c[4]-c[7]*c[5]),d*-(c[8]*c[1]-c[7]*c[2]),d*(c[5]*c[1]-c[4]*c[2]),d*-(c[8]*c[3]-c[6]*c[5]),d*(c[8]*c[0]-c[6]*c[2]),d*-(c[5]*c[0]-c[3]*c[2]),d*(c[7]*c[3]-c[6]*c[4]),d*-(c[7]*c[0]-c[6]*c[1]),d*(c[4]*c[0]-c[3]*c[1]))
},determinant:function(){var b=this.elements;
return b[0]*(b[8]*b[4]-b[7]*b[5])-b[3]*(b[8]*b[1]-b[7]*b[2])+b[6]*(b[5]*b[1]-b[4]*b[2])
}},H.prototype.e=I.prototype.e=function(b){return this.elements[b]
},G.rmatrix=t,G.events=L.pointertouch,G.defaults={eventNamespace:".panzoom",transition:!0,cursor:"move",disablePan:!1,disableZoom:!1,increment:0.3,minScale:0.4,maxScale:5,rangeStep:0.05,duration:200,easing:"ease-in-out",contain:!1},G.prototype={constructor:G,instance:function(){return this
},enable:function(){this._initStyle(),this._bind(),this.disabled=!1
},disable:function(){this.disabled=!0,this._resetStyle(),this._unbind()
},isDisabled:function(){return this.disabled
},destroy:function(){this.disable(),L.removeData(this.elem,B)
},resetDimensions:function(){var a=this.$parent;
this.container={width:a.width(),height:a.height()};
var h=this.elem,g=this.$elem,f=this.dimensions=this.isSVG?{left:h.getAttribute("x")||0,top:h.getAttribute("y")||0,width:h.getAttribute("width")||g.outerWidth(),height:h.getAttribute("height")||g.outerHeight(),margin:{left:0,top:0}}:{left:L.css(h,"left",!0)||0,top:L.css(h,"top",!0)||0,width:g.outerWidth(),height:g.outerHeight(),margin:{top:L.css(h,"marginTop",!0)||0,left:L.css(h,"marginLeft",!0)||0}};
f.widthBorder=L.css(h,"borderLeftWidth",!0)+L.css(h,"borderRightWidth",!0)||0,f.heightBorder=L.css(h,"borderTopWidth",!0)+L.css(h,"borderBottomWidth",!0)||0
},reset:function(d){d=J(d);
var c=this.setMatrix(this._origTransform,d);
d.silent||this._trigger("reset",c)
},resetZoom:function(d){d=J(d);
var c=this.getMatrix(this._origTransform);
d.dValue=c[3],this.zoom(c[0],d)
},resetPan:function(d){var c=this.getMatrix(this._origTransform);
this.pan(c[4],c[5],J(d))
},setTransform:function(a){for(var h=this.isSVG?"attr":"style",g=this.$set,f=g.length;
f--;
){L[h](g[f],"transform",a)
}},getTransform:function(a){var d=this.$set[0];
return a?this.setTransform(a):a=L[this.isSVG?"attr":"style"](d,"transform"),"none"===a||t.test(a)||this.isSVG||this.setTransform(a=L.css(d,"transform")),a||"none"
},getMatrix:function(d){var c=t.exec(d||this.getTransform());
return c&&c.shift(),c||[1,0,0,1,0,0]
},setMatrix:function(S,R){if(!this.disabled){R||(R={}),"string"==typeof S&&(S=this.getMatrix(S));
var Q,P,O,N,M,s,r,q,p=+S[0],o=this.$parent,a="undefined"!=typeof R.contain?R.contain:this.options.contain;
return a&&(Q=this._checkDims(),P=this.container,O=(Q.width*Math.abs(p)-P.width)/2,N=(Q.height*Math.abs(p)-P.height)/2,r=Q.left+Q.margin.left,q=Q.top+Q.margin.top,"invert"===a?(M=Q.width>P.width?Q.width-P.width:0,s=Q.height>P.height?Q.height-P.height:0,O+=(P.width-Q.width)/2,N+=(P.height-Q.height)/2,S[4]=Math.max(Math.min(S[4],O-r),-O-r-M),S[5]=Math.max(Math.min(S[5],N-q),-N-q-s+Q.heightBorder)):(s=P.height>Q.height?P.height-Q.height:0,"center"===o.css("textAlign")&&w.test(L.css(this.elem,"display"))?M=0:(M=P.width>Q.width?P.width-Q.width:0,O=N=0),S[4]=Math.min(Math.max(S[4],O-r),-O-r+M),S[5]=Math.min(Math.max(S[5],N-q),-N-q+s))),"skip"!==R.animate&&this.transition(!R.animate),R.range&&this.$zoomRange.val(p),this.setTransform("matrix("+S.join(",")+")"),R.silent||this._trigger("change",S),S
}},isPanning:function(){return this.panning
},transition:function(a){for(var h=a||!this.options.transition?"none":this._transition,g=this.$set,f=g.length;
f--;
){L.style(g[f],"transition")!==h&&L.style(g[f],"transition",h)
}},pan:function(f,e,h){if(!this.options.disablePan){h||(h={});
var g=h.matrix;
g||(g=this.getMatrix()),h.relative&&(f+=+g[4],e+=+g[5]),g[4]=f,g[5]=e,this.setMatrix(g,h),h.silent||this._trigger("pan",g[4],g[5])
}},zoom:function(W,V){"object"==typeof W?(V=W,W=null):V||(V={});
var U=L.extend({},this.options,V);
if(!U.disableZoom){var T=!1,S=U.matrix||this.getMatrix();
"number"!=typeof W&&(W=+S[0]+U.increment*(W?-1:1),T=!0),W>U.maxScale?W=U.maxScale:W<U.minScale&&(W=U.minScale);
var R=U.focal;
if(R&&!U.disablePan){T=!1;
var Q=this._checkDims(),P=R.clientX-Q.width/2,O=R.clientY-Q.height/2,N=new H(P,O,1),M=new I(S),s=this.$parent.offset(),e=new I(1,0,s.left-this.$doc.scrollLeft(),0,1,s.top-this.$doc.scrollTop()),d=M.inverse().x(e.inverse().x(N)),a=W/S[0];
M=M.x(new I([a,0,0,a,0,0])),N=e.x(M.x(d)),S[4]=+S[4]+(P-N.e(0)),S[5]=+S[5]+(O-N.e(1))
}S[0]=W,S[3]="number"==typeof U.dValue?U.dValue:W,this.setMatrix(S,{animate:"boolean"==typeof U.animate?U.animate:T,range:!U.noSetRange}),U.silent||this._trigger("zoom",S[0],U)
}},option:function(a,f){var e;
if(!a){return L.extend({},this.options)
}if("string"==typeof a){if(1===arguments.length){return void 0!==this.options[a]?this.options[a]:null
}e={},e[a]=f
}else{e=a
}this._setOptions(e)
},_setOptions:function(a){L.each(a,L.proxy(function(d,e){switch(d){case"disablePan":this._resetStyle();
case"$zoomIn":case"$zoomOut":case"$zoomRange":case"$reset":case"disableZoom":case"onStart":case"onChange":case"onZoom":case"onPan":case"onEnd":case"onReset":case"eventNamespace":this._unbind()
}switch(this.options[d]=e,d){case"disablePan":this._initStyle();
case"$zoomIn":case"$zoomOut":case"$zoomRange":case"$reset":this[d]=e;
case"disableZoom":case"onStart":case"onChange":case"onZoom":case"onPan":case"onEnd":case"onReset":case"eventNamespace":this._bind();
break;
case"cursor":L.style(this.elem,"cursor",e);
break;
case"minScale":this.$zoomRange.attr("min",e);
break;
case"maxScale":this.$zoomRange.attr("max",e);
break;
case"rangeStep":this.$zoomRange.attr("step",e);
break;
case"startTransform":this._buildTransform();
break;
case"duration":case"easing":this._buildTransition();
case"transition":this.transition();
break;
case"$set":e instanceof L&&e.length&&(this.$set=e)
}},this))
},_initStyle:function(){this.options.disablePan||this.$elem.css("cursor",this.options.cursor);
var a=this.$parent;
if(a.length&&!L.nodeName(a[0],"body")){var d={overflow:"hidden"};
"static"===a.css("position")&&(d.position="relative"),a.css(d)
}},_resetStyle:function(){this.$elem.css({cursor:"",transition:""}),this.$parent.css({overflow:"",position:""})
},_bind:function(){var M=this,s=this.options,r=s.eventNamespace,q=z?"pointerdown"+r:"touchstart"+r+" mousedown"+r,p=z?"pointerup"+r:"touchend"+r+" click"+r,o={},n=this.$reset,m=this.$zoomRange;
if(L.each(["Start","Change","Zoom","Pan","End","Reset"],function(){var c=s["on"+this];
L.isFunction(c)&&(o["panzoom"+this.toLowerCase()+r]=c)
}),s.disablePan&&s.disableZoom||(o[q]=function(b){var c;
("touchstart"===b.type?!(c=b.touches)||(1!==c.length||s.disablePan)&&2!==c.length:s.disablePan||1!==b.which)||(b.preventDefault(),b.stopPropagation(),M._startMove(b,c))
}),this.$elem.on(o),n.length&&n.on(p,function(b){b.preventDefault(),M.reset()
}),m.length&&m.attr({step:s.rangeStep===G.defaults.rangeStep&&m.attr("step")||s.rangeStep,min:s.minScale,max:s.maxScale}).prop({value:this.getMatrix()[0]}),!s.disableZoom){var f=this.$zoomIn,a=this.$zoomOut;
f.length&&a.length&&(f.on(p,function(b){b.preventDefault(),M.zoom()
}),a.on(p,function(b){b.preventDefault(),M.zoom(!0)
})),m.length&&(o={},o[(z?"pointerdown":"mousedown")+r]=function(){M.transition(!0)
},o["change"+r]=function(){M.zoom(+this.value,{noSetRange:!0})
},m.on(o))
}},_unbind:function(){this.$elem.add(this.$zoomIn).add(this.$zoomOut).add(this.$reset).off(this.options.eventNamespace)
},_buildTransform:function(){return this._origTransform=this.getTransform(this.options.startTransform)
},_buildTransition:function(){var b=this.options;
this._transform&&(this._transition=this._transform+" "+b.duration+"ms "+b.easing)
},_checkDims:function(){var b=this.dimensions;
return(b.width===b.widthBorder||b.height===b.heightBorder)&&this.resetDimensions(),this.dimensions
},_getDistance:function(e){var d=e[0],f=e[1];
return Math.sqrt(Math.pow(Math.abs(f.clientX-d.clientX),2)+Math.pow(Math.abs(f.clientY-d.clientY),2))
},_getMiddle:function(e){var d=e[0],f=e[1];
return{clientX:(f.clientX-d.clientX)/2+d.clientX,clientY:(f.clientY-d.clientY)/2+d.clientY}
},_trigger:function(b){"string"==typeof b&&(b="panzoom"+b),this.$elem.triggerHandler(b,[this].concat(A.call(arguments,1)))
},_startMove:function(aa,Z){var Y,X,W,V,U,T,S,R,Q=this,P=this.options,O=P.eventNamespace,N=this.getMatrix(),M=N.slice(0),m=+M[4],b=+M[5],a={matrix:N,animate:"skip"};
z?(X="pointermove",W="pointerup"):"touchstart"===aa.type?(X="touchmove",W="touchend"):(X="mousemove",W="mouseup"),X+=O,W+=O,this.transition(!0),this.panning=!0,this._trigger("start",aa,Z),Z&&2===Z.length?(V=this._getDistance(Z),U=+N[0],T=this._getMiddle(Z),Y=function(e){e.preventDefault();
var d=Q._getMiddle(Z=e.touches),f=Q._getDistance(Z)-V;
Q.zoom(f*(P.increment/100)+U,{focal:d,matrix:N}),Q.pan(+N[4]+d.clientX-T.clientX,+N[5]+d.clientY-T.clientY,a),T=d
}):(S=aa.pageX,R=aa.pageY,Y=function(c){c.preventDefault(),Q.pan(m+c.pageX-S,b+c.pageY-R,a)
}),L(document).off(O).on(X,Y).on(W,function(d){d.preventDefault(),L(this).off(O),Q.panning=!1,d.type="panzoomend",Q._trigger(d,N,!K(N,M))
})
}},L.Panzoom=G,L.fn.panzoom=function(a){var k,j,h,f;
return"string"==typeof a?(f=[],j=A.call(arguments,1),this.each(function(){k=L.data(this,B),k?"_"!==a.charAt(0)&&"function"==typeof(h=k[a])&&void 0!==(h=h.apply(k,j))&&f.push(h):f.push(void 0)
}),f.length?1===f.length?f[0]:f:this):this.each(function(){new G(this,a)
})
},G
});
/*! rangeslider.js - v0.2.8 | (c) 2014 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */
"use strict";
!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):b(jQuery)
}(function(r){function q(){var b=document.createElement("input");
return b.setAttribute("type","range"),"text"!==b.type
}function p(e,d){var f=Array.prototype.slice.call(arguments,2);
return setTimeout(function(){return e.apply(null,f)
},d)
}function o(d,c){return c=c||100,function(){if(!d.debouncing){var a=Array.prototype.slice.apply(arguments);
d.lastReturnVal=d.apply(window,a),d.debouncing=!0
}return clearTimeout(d.debounceTimeout),d.debounceTimeout=setTimeout(function(){d.debouncing=!1
},c),d.lastReturnVal
}
}function n(a,d){if(this.$window=r(window),this.$document=r(document),this.$element=r(a),this.options=r.extend({},j,d),this._defaults=j,this._name=m,this.startEvent=this.options.startEvent.join("."+m+" ")+"."+m,this.moveEvent=this.options.moveEvent.join("."+m+" ")+"."+m,this.endEvent=this.options.endEvent.join("."+m+" ")+"."+m,this.polyfill=this.options.polyfill,this.onInit=this.options.onInit,this.onSlide=this.options.onSlide,this.onSlideEnd=this.options.onSlideEnd,this.polyfill&&k){return !1
}this.identifier="js-"+m+"-"+ +new Date,this.min=parseFloat(this.$element[0].getAttribute("min"))||0,this.max=parseFloat(this.$element[0].getAttribute("max"))||100,this.value=parseFloat(this.$element[0].value)||this.min+(this.max-this.min)/2,this.step=parseFloat(this.$element[0].getAttribute("step"))||1,this.$fill=r('<div class="'+this.options.fillClass+'" />'),this.$handle=r('<div class="'+this.options.handleClass+'" />'),this.$range=r('<div class="'+this.options.rangeClass+'" id="'+this.identifier+'" />').insertBefore(this.$element).prepend(this.$fill,this.$handle),this.$element.css({position:"absolute",width:"1px",height:"1px",overflow:"hidden",visibility:"hidden"}),this.handleDown=r.proxy(this.handleDown,this),this.handleMove=r.proxy(this.handleMove,this),this.handleEnd=r.proxy(this.handleEnd,this),this.init();
var c=this;
this.$window.on("resize."+m,o(function(){p(function(){c.update()
},300)
},20)),this.$document.on(this.startEvent,"#"+this.identifier,this.handleDown),this.$element.on("change."+m,function(f,e){if(!e||e.origin!==m){var h=f.target.value,g=c.getPositionFromValue(h);
c.setPosition(g)
}})
}var m="rangeslider",l=[],k=q(),j={polyfill:!0,rangeClass:"rangeslider",fillClass:"rangeslider__fill",handleClass:"rangeslider__handle",startEvent:["mousedown","touchstart","pointerdown"],moveEvent:["mousemove","touchmove","pointermove"],endEvent:["mouseup","touchend","pointerup"]};
n.prototype.init=function(){this.update(),this.onInit&&"function"==typeof this.onInit&&this.onInit()
},n.prototype.update=function(){this.handleWidth=this.$handle[0].offsetWidth,this.rangeWidth=this.$range[0].offsetWidth,this.maxHandleX=this.rangeWidth-this.handleWidth,this.grabX=this.handleWidth/2,this.position=this.getPositionFromValue(this.value),this.setPosition(this.position)
},n.prototype.handleDown=function(e){if(e.preventDefault(),this.$document.on(this.moveEvent,this.handleMove),this.$document.on(this.endEvent,this.handleEnd),!((" "+e.target.className+" ").replace(/[\n\t]/g," ").indexOf(this.options.handleClass)>-1)){var d=this.getRelativePosition(this.$range[0],e),f=this.getPositionFromNode(this.$handle[0])-this.getPositionFromNode(this.$range[0]);
this.setPosition(d-this.grabX),d>=f&&d<f+this.handleWidth&&(this.grabX=d-f)
}},n.prototype.handleMove=function(d){d.preventDefault();
var c=this.getRelativePosition(this.$range[0],d);
this.setPosition(c-this.grabX)
},n.prototype.handleEnd=function(d){d.preventDefault(),this.$document.off(this.moveEvent,this.handleMove),this.$document.off(this.endEvent,this.handleEnd);
var c=this.getRelativePosition(this.$range[0],d);
this.onSlideEnd&&"function"==typeof this.onSlideEnd&&this.onSlideEnd(c-this.grabX,this.value)
},n.prototype.cap=function(e,d,f){return d>e?d:e>f?f:e
},n.prototype.setPosition=function(e){var d,f;
d=this.getValueFromPosition(this.cap(e,0,this.maxHandleX))/this.step*this.step,f=this.getPositionFromValue(d),this.$fill[0].style.width=f+this.grabX+"px",this.$handle[0].style.left=f+"px",this.setValue(d),this.position=f,this.value=d,this.onSlide&&"function"==typeof this.onSlide&&this.onSlide(f,d)
},n.prototype.getPositionFromNode=function(d){for(var c=0;
null!==d;
){c+=d.offsetLeft,d=d.offsetParent
}return c
},n.prototype.getRelativePosition=function(d,c){return(c.pageX||c.originalEvent.clientX||c.originalEvent.touches[0].clientX||c.currentPoint.x)-this.getPositionFromNode(d)
},n.prototype.getPositionFromValue=function(e){var d,f;
return d=(e-this.min)/(this.max-this.min),f=d*this.maxHandleX
},n.prototype.getValueFromPosition=function(e){var d,f;
return d=e/this.maxHandleX,f=this.step*Math.ceil((d*(this.max-this.min)+this.min)/this.step),Number(f.toFixed(2))
},n.prototype.setValue=function(b){this.$element.val(b).trigger("change",{origin:m})
},n.prototype.destroy=function(){this.$document.off(this.startEvent,"#"+this.identifier,this.handleDown),this.$element.off("."+m).removeAttr("style").removeData("plugin_"+m),this.$range&&this.$range.length&&this.$range[0].parentNode.removeChild(this.$range[0]),l.splice(l.indexOf(this.$element[0]),1),l.length||this.$window.off("."+m)
},r.fn[m]=function(a){return this.each(function(){var e=r(this),b=e.data("plugin_"+m);
b||(e.data("plugin_"+m,b=new n(this,a)),l.push(this)),"string"==typeof a&&b[a]()
})
}
});
var renditionCache={};
var renditionPath="/_jcr_content/renditions/";
function setInfographicRendition(d){var e=$("#infographic-zoom-"+d);
var c=$("#infographic-zoom-modal-"+d);
var g=e.find(".infographic-img");
var a=c.find(".infographic-img");
if(g!=null&&a!=null){var h=g.attr("data-svgsrc");
var b=g.attr("data-alt");
var j="";
if(h!=""&&h!=null&&h!=undefined){var f=h.split(".").pop().toLowerCase();
if(f=="png"){imgsrc=h
}else{imgsrc=h+renditionPath+"image.png"
}if(matchMedia("(max-width: 767px)").matches||matchMedia("(max-device-width: 767px)").matches){j=h+renditionPath+"mobile.svg";
if(renditionCache[h]==null){$.ajax({type:"HEAD",async:true,url:j,success:function(k){renditionCache[h]={mobile:true};
createSvgObject(e,g,j,imgsrc,b);
createSvgObject(c,a,j,imgsrc,b)
},error:function(m,k,l){renditionCache[h]={mobile:false};
createSvgObject(e,g,h,imgsrc,b);
createSvgObject(c,a,h,imgsrc,b)
}})
}else{if(renditionCache[h].mobile){createSvgObject(e,g,j,imgsrc,b);
createSvgObject(c,a,j,imgsrc,b)
}else{createSvgObject(e,g,h,imgsrc,b);
createSvgObject(c,a,h,imgsrc,b)
}}}else{createSvgObject(e,g,h,imgsrc,b);
createSvgObject(c,a,h,imgsrc,b)
}}}}function createSvgObject(j,a,c,k,e){var f=$(j).attr("id");
var d=f+"_svg";
var b=$("#"+d);
var h=true;
if(!Modernizr.svg){if(b.length<=0){var g=$('<img class="panzoom"  id="'+d+'" src="'+k+'" alt="'+CQ.shared.XSS.getXSSValue(e)+'" width="100%"  preserveAspectRatio="xMinYMin meet" >');
$(a).append(g)
}}else{if(b.length>0){if($("#"+d).attr("data")==c){h=false
}}if(h){var g=null;
g=$('<img class="panzoom" src="'+c+'" id="'+d+'" alt="'+CQ.shared.XSS.getXSSValue(e)+'" />');
$(a).empty();
$(a).append(g);
j.find(".panzoom").panzoom({$zoomIn:j.find(".zoom-in"),$zoomOut:j.find(".zoom-out"),$zoomRange:j.find(".zoom-range"),$reset:j.find(".reset"),$set:$("#"+d)});
j.find(".zoom-range").rangeslider({polyfill:false,onInit:function(){},onSlide:function(l,m){},onSlideEnd:function(l){}})
}}}function recordSiteCatalystEventsForInfoDownload(c){var a=new Array();
a[0]="event40";
a[1]="event22";
a[2]="event23";
var b=new Object();
b.infographics_eVar44=c;
recordSitecatEvent(a,b,"Infogrpahics_Download")
}function recordSiteCatalystForExpandFullscreen(d,c){var a=new Array();
a[0]="event41";
a[1]="event23";
var b=new Object();
b.infographics_eVar44=d;
recordSitecatEvent(a,b,c)
}function recordSiteCatalystEventsForInfozoom(c,d){var a=new Array();
a[0]="event42";
a[1]="event23";
var b=new Object();
b.infographics_eVar44=c;
if($("#"+d).data("isSiteCatCalled")){recordSitecatEvent(a,b,"Infogrpahics_zoom")
}}$(document).ready(function(){var a=$(".infographic");
if(a.length>0){a.each(function(){var c=$(" .infographic-zoom > div",this).attr("id");
var b=c.substring(17);
setInfographicRendition(b);
$("#"+c).data("isSiteCatCalled",true);
$("#"+c+" button.nonmodal").click(function(d){recordSiteCatalystEventsForInfozoom($(d.target).parent().parent().attr("data-sitecat-title"),c);
$("#"+c).data("isSiteCatCalled",false)
});
$("#"+c+" button.expand").click(function(d){recordSiteCatalystForExpandFullscreen($(d.target).closest(".infographics-panel").attr("data-sitecat-title"),"Infogrpahics_Expand")
});
$("#"+c+" button.full-screen").click(function(d){recordSiteCatalystForExpandFullscreen($(d.target).closest(".infographics-panel").attr("data-sitecat-title"),"Infogrpahics_Fullscreen")
});
$("a.page-intro-copy").click(function(d){recordSiteCatalystEventsForInfoDownload($(d.target).attr("data-sitecat-title"))
})
});
$(window).resize(function(){a.each(function(){var c=$(" .infographic-zoom > div",this).attr("id");
var b=c.substring(17);
setInfographicRendition(b)
})
})
}});
$(document).ready(function(){$(".show-button").click(function(){var b=$(this).attr("id");
var a=$(this).attr("data-setheight");
if($(this).hasClass("collapse")){$(this).attr("title",expandKey);
$(this).removeClass("collapse").addClass("expand");
$('.infographic-img[data-expandbutton="'+b+'"]').animate({height:a+"px"},1000)
}else{$(this).attr("title",collapseKey);
$(this).removeClass("expand").addClass("collapse");
$('.infographic-img[data-expandbutton="'+b+'"]').css({height:"auto"})
}});
$(".zoom-in").click(function(){var a=$(this).siblings("input.zoom-range");
var b=parseFloat(a.val());
a.val(b).change()
});
$(".zoom-out").click(function(){var a=$(this).siblings("input.zoom-range");
var b=parseFloat(a.val());
a.val(b).change()
});
$(".reset").click(function(){var a=$(this).siblings("input.zoom-range");
var b=parseFloat(a.val());
a.val(b).change()
});
$(".full-screen").click(function(){$(window).resize();
var a=$(this).attr("data-target");
setTimeout(function(){$(a+" .reset").click()
},300)
})
});
var headerHeight;
var windowWidth=window.innerWidth;
var windowHeight;
var time=500;
var leftWidth;
var rightWidth;
var rightMargin;
var leftClicked=false;
var rightClicked=false;
var returnAria=$(".return-statement .heading a span").html();
var discover=$(".main-container.content-page .green-dot-animation.left a.dot").attr("aria-labelledby");
var next=$(".main-container.content-page .green-dot-animation.right a.dot").attr("aria-labelledby");
var mainContainer=$(".main-container.content-page .content.main");
var leftContainer=$(".main-container.content-page .content.left");
var rightContainer=$(".main-container.content-page .content.right");
var leftDot=$(".main-container.content-page .green-dot-animation.left");
var rightDot=$(".main-container.content-page .green-dot-animation.right");
var leftDotLink=$(".main-container.content-page .green-dot-animation.left a.dot");
var rightDotLink=$(".main-container.content-page .green-dot-animation.right a.dot");
var leftBox=$(".main-container.content-page .box-link.left");
var rightBox=$(".main-container.content-page .box-link.right");
var returnFromLeft=$(".main-container .left .return-statement a");
var returnFromRight=$(".main-container .right .return-statement a");
var inPresent=$(".inline-nav-container .inline-nav-content-page");
var mainContainerMarginPercentDesktop=0.12;
var mainContainerMarginPercentMobile=0.02;
var mainContainerWidth;
var mainContainerLeftMargin;
var mainContainerRightMargin;
var leftDotLeft;
var rightDotRight;
var leftBoxTop;
var rightBoxBottom;
var additionalLeft=0;
var additionalRight=0;
var isDMReported=false;
var isNSReported=false;
var ns_promoList="";
var dm_promoList="";
var tagslist="";
function calculateAllMetrics(){headerHeight=$("#header").outerHeight();
windowWidth=window.innerWidth;
if(windowWidth>1400){windowWidth=1400
}windowHeight=window.innerHeight;
mainContainerWidth=mainContainer.outerWidth();
if(matchMedia("(min-width: 768px)").matches){mainContainerLeftMargin=mainContainerMarginPercentDesktop*windowWidth;
mainContainerRightMargin=mainContainerMarginPercentDesktop*windowWidth
}else{mainContainerLeftMargin=mainContainerMarginPercentMobile*windowWidth;
mainContainerRightMargin=mainContainerMarginPercentMobile*windowWidth
}}function calculateLeftDotLeft(){if(matchMedia("(min-width: 768px)").matches){var a=leftBox.outerWidth(true);
var b=leftBox.css("margin-right");
var c=leftDotLink.outerWidth();
if(b.indexOf("%")>0){b=(parseInt(b)/100)*windowWidth
}else{b=parseInt(b)
}leftDotLeft=a-b-(c/3);
if(matchMedia("(min-width: 1401px)").matches){additionalLeft=($(window).width()-mainContainer.outerWidth())/2-leftBox.outerWidth(true);
leftDotLeft+=additionalLeft
}else{additionalLeft=0
}}else{leftDotLeft=0
}}function calculateRightDotRight(){var b=rightDotLink.outerWidth();
if(matchMedia("(min-width: 768px)").matches){var a=rightBox.outerWidth(true);
var c=4;
if($.browser.msie){c=7
}rightDotRight=a+b/3-c;
if(matchMedia("(min-width: 1401px)").matches){additionalRight=($(window).width()-mainContainer.outerWidth())/2-rightBox.outerWidth(true);
rightDotRight+=additionalRight
}else{additionalRight=0
}}else{rightDotRight=b
}}function calculateLeftBoxTop(){var a=false;
if(leftContainer.css("display")=="none"){a=true;
leftContainer.show()
}leftBoxTop=headerHeight+leftContainer.children("div.return-statement").outerHeight(true)+leftContainer.children("div.green-dots-container").outerHeight(true)/2-leftBox.outerHeight(true)/2;
if(a){leftContainer.hide()
}}function calculateRightBoxBottom(){var a=false;
if(rightContainer.css("display")=="none"){a=true;
rightContainer.show()
}rightBoxBottom=rightContainer.children("div.return-statement").outerHeight(true)+rightContainer.children("div.green-dots-container").outerHeight(true)/2-rightBox.outerHeight(true)/2;
if(a){rightContainer.hide()
}}function positionDot(b){var a;
var c;
if(b=="left"){c=leftDotLink.outerHeight();
a=leftBox.outerHeight(true);
calculateLeftDotLeft();
calculateLeftBoxTop();
leftBox.css({top:leftBoxTop,left:additionalLeft});
leftBox.fadeIn(300,function(){leftDot.css("top",leftBoxTop+a/2-c/2);
leftDot.css("left",leftDotLeft);
leftDot.fadeIn(300);
if(leftContainer.css("display")=="none"){leftBox.css("visibility","visible")
}})
}else{if(b=="right"){c=rightDotLink.outerHeight();
a=rightBox.outerHeight(true);
calculateRightDotRight();
calculateRightBoxBottom();
rightBox.css({bottom:rightBoxBottom,right:additionalRight});
rightBox.fadeIn(300,function(){rightDot.css("bottom",rightBoxBottom+(a/2)+(c/2));
rightDot.css("right",rightDotRight);
rightDot.fadeIn(300);
if(rightContainer.css("display")=="none"){rightBox.css("visibility","visible")
}})
}}}function positionPageContent(){leftWidth=leftContainer.outerWidth();
leftContainer.animate({marginLeft:0-leftWidth},0);
rightWidth=rightContainer.outerWidth();
rightMargin=$(".main-container.content-page").outerWidth();
rightContainer.animate({marginLeft:rightMargin},0)
}function positionMargins(){mainContainer.css("margin-left",mainContainerLeftMargin);
mainContainer.css("margin-right",mainContainerRightMargin)
}function setLeftContentHeight(){var a=windowHeight-headerHeight;
var b=leftContainer.children("div.return-statement").outerHeight(true);
a-=leftContainer.children("div.return-statement").outerHeight(true)+leftContainer.children("div.green-dots-container").outerHeight(true);
leftContainer.children("div.left-content").css("height",a);
leftContainer.css("padding-top",b)
}function setRightContentHeight(){var b=windowHeight-headerHeight;
b-=rightContainer.children("div.return-statement").outerHeight(true)+rightContainer.children("div.green-dots-container").outerHeight(true);
rightContainer.children("div.right-content").css("height",b);
var a=0;
var c=0;
$(".right-content .content-promo-column",rightContainer).each(function(){if($(this).outerHeight(true)>a){a=$(this).outerHeight(true)
}if(isEditMode==true||isDesignMode==true||$(this).find(".promo-label").length>0){$(this).css("left",c+"%");
c+=25
}});
if(b>a){a=b
}rightContainer.children("div.right-content").children("div.alignment-container").css("height",a)
}var disableArrowKeys=function(b){var a=document.activeElement.tagName.toLowerCase();
if(a=="textarea"||a=="input"){return
}switch(b.keyCode){case 37:case 39:case 38:case 40:case 32:b.preventDefault();
break;
default:break
}};
function TestScrollup(d){alert("down");
$("#divLog").html(d.target.getAttribute("class")+"<br/>"+$("#divLog").scrollTop()+"<br/>"+$("#divLog").html());
var a=null;
if($(".main-container .right").css("display")=="block"){a=$(".main-container .right-content")
}else{a=$(".main-container .left-content")
}var b=a[0].scrollHeight;
var c=a.scrollTop();
if(a.scrollTop()==0){d.preventDefault()
}$("#divLog").html(" scrollHeight: "+b+" scrollTop"+c+$(".main-container .right-content").outerHeight()+" Sub: "+(b-c)+"<br/>"+$("#divLog").html())
}function TestScrolldown(d){alert("up");
$("#divLog").html(d.target.getAttribute("class")+"<br/>"+$("#divLog").scrollTop()+"<br/>"+$("#divLog").html());
var a=null;
if($(".main-container .right").css("display")=="block"){a=$(".main-container .right-content")
}else{a=$(".main-container .left-content")
}var b=a[0].scrollHeight;
var c=a.scrollTop();
if(a[0].scrollHeight-a.scrollTop()<=a.outerHeight()){d.preventDefault()
}$("#divLog").html(" scrollHeight: "+b+" scrollTop"+c+$(".main-container .right-content").outerHeight()+" Sub: "+(b-c)+"<br/>"+$("#divLog").html())
}var oldTouch=0;
function toggleScroll(a){if(a=="hide"){$("#footer-section").hide();
$(".main-container.content-page").css({marginBottom:"0"});
$("body").css("overflow","hidden");
window.addEventListener("keydown",disableArrowKeys,false);
$(document).on("touchstart",function(b){oldTouch=b.originalEvent.touches[0].pageY
});
$(document).on("touchmove",function(g){var c=$(g.target);
if(c.parents(".right").length==0&&c.parents(".left").length==0){g.preventDefault();
return
}if(c.getAttribute("class")=="return-statement"){g.preventDefault();
return
}var d=null;
if($(".main-container .content.right").css("display")=="block"){d=$(".main-container .right-content")
}else{d=$(".main-container .left-content")
}if(oldTouch-g.originalEvent.touches[0].pageY>0){var f=d[0].scrollHeight;
var b=d.scrollTop();
if((f-b)<=d.outerHeight()){g.preventDefault()
}}else{if(oldTouch-g.originalEvent.touches[0].pageY<0&&d.scrollTop()==0){g.preventDefault()
}}oldTouch=g.originalEvent.touches[0].pageY
})
}else{if(a=="show"){$(document).unbind("touchmove");
$(document).unbind("touchstart");
$("#footer-section").show();
$(".main-container.content-page").css({height:"auto",marginBottom:"2%"});
$("body").css("overflow","auto");
window.removeEventListener("keydown",disableArrowKeys,false)
}}}function positionLeftOnResize(){calculateLeftBoxTop();
calculateLeftDotLeft();
calculateRightDotRight();
setLeftContentHeight();
leftWidth=leftContainer.outerWidth();
mainContainer.css("margin-left",leftWidth);
leftBox.css("top",leftBoxTop);
leftDot.css("top",leftBoxTop+leftBox.outerHeight(true)/2-leftDotLink.outerHeight()/2);
var a=leftWidth-2*(leftDotLink.width()/3);
if(matchMedia("(min-width: 1400px)").matches){a+=($(window).width()-1400)/2
}else{additionalLeft=0
}leftDot.css("left",a);
leftContainer.css("margin-left",0)
}function positionRightOnResize(){var a=0.19*windowWidth;
if(matchMedia("(max-width: 767px)").matches){a=0.09*windowWidth
}var b=mainContainerWidth-a;
calculateRightBoxBottom();
calculateLeftDotLeft();
calculateRightDotRight();
setRightContentHeight();
mainContainer.css("margin-left",0-b);
mainContainer.css("margin-right",0);
rightBox.css("bottom",rightBoxBottom);
rightDot.css("bottom",rightBoxBottom+rightBox.outerHeight(true)/2+rightDotLink.outerHeight()/2);
var d=rightWidth+(2*(rightDotLink.width()/3));
if(matchMedia("(min-width: 1400px)").matches){d+=($(window).width()-1400)/2
}else{additionalRight=0
}rightDot.css("right",d);
var c=0.2;
if(matchMedia("(max-width: 767px)").matches){c=0.1
}rightContainer.css("margin-left",c*windowWidth)
}function reportDiscoverMore(){dm_promoList="";
tagslist="";
CQ_Analytics.EventDataMgr.data={};
$CQ("#sc_ns_event27").removeAttr("record");
$CQ("#sc_pl_tags").removeAttr("record");
$CQ("#sc_rel_emp_promoList").removeAttr("record");
$CQ("#templateSpan").removeAttr("record");
$CQ("#pageNameSpan").removeAttr("record");
if(!isDMReported){dm_promoList=discoverMore_promoComponentString;
for(i=0;
i<articlepage_curatedStandardComponentArray.length;
i++){if(articlepage_curatedStandardComponentArray[i]!=""){if(dm_promoList==""){dm_promoList=articlepage_curatedStandardComponentArray[i]
}else{dm_promoList+=","+articlepage_curatedStandardComponentArray[i]
}}}for(i=0;
i<articlepage_curatedFeaturedComponentArray.length;
i++){if(articlepage_curatedFeaturedComponentArray[i]!=""){if(dm_promoList==""){dm_promoList=articlepage_curatedFeaturedComponentArray[i]
}else{dm_promoList+=","+articlepage_curatedFeaturedComponentArray[i]
}}}for(i=0;
i<tagValuesArray.length;
i++){if(tagslist==""){tagslist=tagValuesArray[i]
}else{tagslist+=","+tagValuesArray[i]
}}var b=new Array();
var c=new Object();
var a=0;
if(dm_promoList!=""){if($CQ("#sc_scroll_event29")!=null&&$CQ("#sc_scroll_event29")!=undefined&&$CQ("#sc_scroll_event29")!="undefined"){$CQ("#sc_scroll_event29").removeAttr("record")
}if($CQ("#sc_scroll_event30")!=null&&$CQ("#sc_scroll_event30")!=undefined&&$CQ("#sc_scroll_event30")!="undefined"){$CQ("#sc_scroll_event30").removeAttr("record")
}$CQ("#sc_dm_event27").attr("record","'event27', {'list2':dm_promoList}")
}if(tagslist!=""){$CQ("#sc_dm_event25").attr("record","'event25', {'list1':tagslist}")
}$CQ("#templateSpan").attr("record","'pageView', {'prop52':sc_template+'_disc_more'}");
$CQ("#pageNameSpan").attr("record","'pageView', {'pageName':sc_currentPageName+'_disc_more'}");
if($CQ("#sc_pageView")!=null&&$CQ("#sc_pageView")!=undefined){$CQ("#sc_pageView").removeAttr("record")
}$CQ(document).trigger("customevent");
isDMReported=true
}}function reportNextSteps(){ns_promoList="";
$CQ("#sc_pl_tags").removeAttr("record");
$CQ("#sc_dm_event27").removeAttr("record");
$CQ("#sc_dm_event25").removeAttr("record");
$CQ("#sc_rel_emp_promoList").removeAttr("record");
$CQ("#templateSpan").removeAttr("record");
$CQ("#pageNameSpan").removeAttr("record");
CQ_Analytics.EventDataMgr.data={};
if(!isNSReported){ns_promoList=nextSteps_promoComponentString;
for(i=0;
i<articlepage_curatedCareersComponentArray.length;
i++){if(articlepage_curatedCareersComponentArray[i]!=""){if(ns_promoList==""){ns_promoList=articlepage_curatedCareersComponentArray[i]
}else{ns_promoList+=","+articlepage_curatedCareersComponentArray[i]
}}}for(i=0;
i<articlepage_curatedEmployeeComponentArray.length;
i++){if(articlepage_curatedEmployeeComponentArray[i]!=""){if(ns_promoList==""){ns_promoList=articlepage_curatedEmployeeComponentArray[i]
}else{ns_promoList+=","+articlepage_curatedEmployeeComponentArray[i]
}}}for(i=0;
i<articlepage_curatedEventComponentArray.length;
i++){if(articlepage_curatedEventComponentArray[i]!=""){if(ns_promoList==""){ns_promoList=articlepage_curatedEventComponentArray[i]
}else{ns_promoList+=","+articlepage_curatedEventComponentArray[i]
}}}for(i=0;
i<articlepage_curatedSolutionsComponentArray.length;
i++){if(articlepage_curatedSolutionsComponentArray[i]!=""){if(ns_promoList==""){ns_promoList=articlepage_curatedSolutionsComponentArray[i]
}else{ns_promoList+=","+articlepage_curatedSolutionsComponentArray[i]
}}}if(ns_promoList!=""){if($CQ("#sc_scroll_event29")!=null&&$CQ("#sc_scroll_event29")!=undefined&&$CQ("#sc_scroll_event29")!="undefined"){$CQ("#sc_scroll_event29").removeAttr("record")
}if($CQ("#sc_scroll_event30")!=null&&$CQ("#sc_scroll_event30")!=undefined&&$CQ("#sc_scroll_event30")!="undefined"){$CQ("#sc_scroll_event30").removeAttr("record")
}$CQ("#sc_ns_event27").attr("record","'event27', {'list2':ns_promoList}")
}$CQ("#templateSpan").attr("record","'pageView', {'prop52':sc_template+'_next_steps'}");
$CQ("#pageNameSpan").attr("record","'pageView', {'pageName':sc_currentPageName+'_next_steps'}");
if($CQ("#sc_pageView")!=null&&$CQ("#sc_pageView")!=undefined){$CQ("#sc_pageView").removeAttr("record")
}$CQ(document).trigger("customevent");
isNSReported=true
}}$(document).ready(function(){calculateAllMetrics();
positionPageContent();
leftContainer.css("top",headerHeight);
setTimeout(function(){positionDot("left");
positionDot("right")
},500);
leftBox.click(function(){leftDotLink.click()
});
leftDotLink.click(function(b){b.preventDefault();
if(!$(this).hasClass("selected")){toggleScroll("hide");
leftWidth=leftContainer.outerWidth();
rightBox.animate({right:"-=9999px"},time,"linear");
rightDot.animate({right:"-=9999px"},time,"linear");
$(".main-container.content-page .green-dot-animation.left a.dot span").removeClass("icon-plus").addClass("icon-chevron-right");
mainContainer.animate({marginLeft:leftWidth},time,"linear");
var a=leftWidth-2*(leftDotLink.width()/3);
if(matchMedia("(min-width: 1400px)").matches){a+=($(window).width()-1400)/2
}if(matchMedia("(max-width: 500px)").matches){mainContainer.css("height","330px")
}if(matchMedia("(max-width: 767px)").matches){mainContainer.css("height","350px")
}if(matchMedia("(min-width: 768px)").matches){mainContainer.css("height","800px")
}if(matchMedia("(min-width: 1024px)").matches){mainContainer.css("height","600px")
}leftDot.animate({left:a},time,"linear");
leftBox.css("left","-9999px");
leftContainer.show().animate({marginLeft:"0"},time,"linear");
setLeftContentHeight();
$(this).addClass("selected");
$(".main-container.content-page .green-dot-animation.left a.dot").attr("aria-labelledby",returnAria);
reportDiscoverMore()
}else{toggleScroll("show");
leftWidth=leftContainer.outerWidth();
rightBox.animate({right:additionalRight},time,"linear");
rightDot.animate({right:rightDotRight},time,"linear");
rightDot.css("bottom",rightBoxBottom+rightBox.outerHeight(true)/2+rightDotLink.outerHeight()/2);
mainContainer.animate({marginLeft:mainContainerLeftMargin},time,"linear");
leftDot.animate({left:leftDotLeft},time,"linear");
$(".main-container.content-page .green-dot-animation.left a.dot span").removeClass("icon-chevron-right").addClass("icon-plus");
leftContainer.animate({marginLeft:0-leftWidth},time,"linear",function(){$(this).hide();
leftBox.css("left",additionalLeft)
});
if(matchMedia("(max-width: 500px)").matches){mainContainer.css("height","auto")
}if(matchMedia("(max-width: 767px)").matches){mainContainer.css("height","auto")
}if(matchMedia("(min-width: 768px)").matches){mainContainer.css("height","auto")
}if(matchMedia("(min-width: 1024px)").matches){mainContainer.css("height","auto")
}$(this).removeClass("selected");
$(".main-container.content-page .green-dot-animation.left a.dot").attr("aria-labelledby",discover)
}});
returnFromLeft.click(function(a){a.preventDefault();
leftClicked=true;
leftDotLink.click();
toggleScroll("show");
leftWidth=leftContainer.outerWidth(true);
rightBox.animate({right:additionalRight},time,"linear");
rightDot.animate({right:rightDotRight},time,"linear");
rightDot.css("bottom",rightBoxBottom+rightBox.outerHeight(true)/2+rightDotLink.outerHeight()/2);
mainContainer.animate({marginLeft:mainContainerLeftMargin},time,"linear");
leftDot.animate({left:leftDotLeft},time,"linear");
$(".main-container.content-page .green-dot-animation.left a.dot span").removeClass("icon-chevron-right").addClass("icon-plus");
leftContainer.animate({marginLeft:0-leftWidth},time,"linear",function(){$(this).hide();
leftBox.css("left",additionalLeft)
});
$(".main-container.content-page .green-dot-animation.left a.dot").removeClass("selected")
});
rightBox.click(function(){rightDotLink.click()
});
rightDotLink.click(function(d){d.preventDefault();
var a=0.19*windowWidth;
if(matchMedia("(max-width: 767px)").matches){a=0.09*windowWidth
}var b=mainContainerWidth-a;
if(!$(this).hasClass("selected")){toggleScroll("hide");
rightWidth=rightContainer.outerWidth();
leftBox.animate({left:"-=9999px"},time,"linear");
leftDot.animate({left:"-=9999px"},time,"linear");
mainContainer.animate({marginLeft:0-b},time,"linear");
mainContainer.animate({marginRight:0},time,"linear");
var f=rightWidth+(2*(rightDotLink.width()/3));
if(matchMedia("(min-width: 1400px)").matches){f+=($(window).width()-1400)/2
}else{f-=14
}rightDot.animate({right:f},time,"linear");
$(".main-container.content-page .green-dot-animation.right a.dot span").removeClass("icon-chevron-right").addClass("icon-chevron-left");
rightBox.css("right","-9999px");
var c=0.2;
if(matchMedia("(max-width: 767px)").matches){c=0.1
}if(matchMedia("(max-width: 500px)").matches){mainContainer.css("height","330px")
}if(matchMedia("(max-width: 767px)").matches){mainContainer.css("height","350px")
}if(matchMedia("(min-width: 768px)").matches){mainContainer.css("height","800px")
}if(matchMedia("(min-width: 1024px)").matches){mainContainer.css("height","600px")
}rightContainer.show().animate({marginLeft:c*windowWidth},time,"linear");
setRightContentHeight();
$(this).addClass("selected");
$(".main-container.content-page .green-dot-animation.right a.dot").attr("aria-labelledby",returnAria);
reportNextSteps()
}else{toggleScroll("show");
rightWidth=rightContainer.outerWidth();
leftBox.animate({left:additionalLeft},time,"linear");
leftDot.animate({left:leftDotLeft},time,"linear");
leftDot.css("top",leftBoxTop+leftBox.outerHeight(true)/2-leftDotLink.outerHeight()/2);
mainContainer.animate({marginLeft:mainContainerLeftMargin},time,"linear");
mainContainer.animate({marginRight:mainContainerRightMargin},time,"linear");
leftDot.animate({left:leftDotLeft},time,"linear");
rightDot.animate({right:rightDotRight},time,"linear");
$(".main-container.content-page .green-dot-animation.right a.dot span").removeClass("icon-chevron-left").addClass("icon-chevron-right");
rightContainer.animate({marginLeft:rightMargin},time,"linear",function(){$(this).hide();
rightBox.css("right",additionalRight)
});
if(matchMedia("(max-width: 500px)").matches){mainContainer.css("height","auto")
}if(matchMedia("(max-width: 767px)").matches){mainContainer.css("height","auto")
}if(matchMedia("(min-width: 768px)").matches){mainContainer.css("height","auto")
}if(matchMedia("(min-width: 1024px)").matches){mainContainer.css("height","auto")
}$(this).removeClass("selected");
$(".main-container.content-page .green-dot-animation.right a.dot").attr("aria-labelledby",next)
}});
returnFromRight.click(function(a){a.preventDefault();
rightClicked=true;
rightDotLink.click();
$("#footer-section .footerlinks .first ul li a:first").focus()
});
$(".content-page .inline-nav-container-links").click(function(d){d.preventDefault();
var c=$(this).attr("href");
var b=$(c).position().top;
var a=$("#header").outerHeight(true);
var f=b+a;
if(matchMedia("(max-width: 767px)").matches){$("html, body").stop().animate({scrollTop:f},500,"swing")
}else{$("html, body").stop().animate({scrollTop:b},500,"swing")
}$(c+" a:first").focus();
return false
});
$(window).resize(function(a){if(Modernizr.touch){a.preventDefault();
calculateAllMetrics();
positionMargins();
positionPageContent()
}if(leftDotLink.hasClass("selected")){positionLeftOnResize()
}else{if(rightDotLink.hasClass("selected")){positionRightOnResize()
}else{positionDot("left");
positionDot("right")
}}})
});
$(".mobile-nav-button,.mobile-search-button,.location-link,li.subnav-item a").click(function(a){if(matchMedia("(max-width: 767px)").matches){setTimeout(function(){$(window).resize();
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){if($(".mobile-nav-button").hasClass("active")){$(".main-container.content-page .green-dot-animation.left").addClass("mobile")
}else{$(".main-container.content-page .green-dot-animation.left").removeClass("mobile")
}}},650)
}});
returnFromLeft.focusout(function(){if(!leftClicked){leftDotLink.click();
$(".content.main a:first").focus()
}leftClicked=false;
if(inPresent.length>0){$(".inline-nav-container .inline-nav-content-page a:first").focus()
}else{$(".content.main a:first").focus()
}});
returnFromRight.focusout(function(){if(!rightClicked){rightDotLink.click()
}rightClicked=false
});