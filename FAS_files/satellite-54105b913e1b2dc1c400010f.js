_satellite.pushAsyncScript(function(event, target, $variables){
  if(typeof(searchLocation)!=="undefined"){
  searchLocation=searchLocation.replace("localhost:4503","www2.deloitte.com");
}
});
