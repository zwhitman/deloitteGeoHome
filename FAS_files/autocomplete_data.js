var g_staged = (document.getElementById("sp_staged") ? document.getElementById("sp_staged").value : 0);
var protocol = (document.location.protocol == "https:" ? "https:" : "http:");
var postfix = (g_staged ? "-stage/" : "/");
var acDS = new YAHOO.util.ScriptNodeDataSource((protocol + "//content.atomz.com/autocomplete/sp10/05/0c/00" + postfix));
acDS.asyncMode="ignoreStaleResponses";
acDS.maxCacheEntries = 0;
acDS.responseSchema = {resultsList: "ResultSet.Result",fields: ["phrase"]};
var acObj = new YAHOO.widget.AutoComplete("q", "autocomplete", acDS);
acObj.queryDelay = 0.2;
acObj.useShadow = false;
acObj.autoHighlight = false;
acObj.minQueryLength = 3;
acObj.maxResultsDisplayed = 10;
acObj.animVert = false;
acObj.queryQuestionMark = true;
acObj.resultTypeList = false;
acObj.formatResult = function(oResultData, sQuery, sResultMatch) {return (sResultMatch) ? sResultMatch : "";};
acObj.generateRequest = function(q) {return "?query=" + q + "&max_results=" + acObj.maxResultsDisplayed;};
var acSH = function(){document.searchform.submit();};
acObj.itemSelectEvent.subscribe(acSH);
