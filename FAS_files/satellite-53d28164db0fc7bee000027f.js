_satellite.pushAsyncScript(function(event, target, $variables){
  var tmpFixBox = function (){
	if(window.matchMedia( "screen and (min-width:768px) and (max-width:1023px)" ).matches){
		$("#tmp-content .job-overview").attr("style","position: relative!important;");
		$("#tmp-content .job-content").attr("style","padding-left: 0%!important;");
	}else{
		$("#tmp-content .job-overview").attr("style","");
		$("#tmp-content .job-content").attr("style","");
	}
};

if($("#tmp-content .job-overview").length > 0){
	tmpFixBox();
	$( window ).resize(tmpFixBox);
}

});
