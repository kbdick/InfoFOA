
    //data connection
    // Retrieve Data from TableTop
    /* global Tabletop */
document.addEventListener('DOMContentLoaded', function() {
  		Tabletop.init( { 
  		key: "1OVgXVxrfM13WwwjqBC4jlYlzTQuSrHrn43r5T0KWbjY", 
  		callback: showInfo,
  		parseNumbers: true,
  		simpleSheet: true 
  		});
});
    // callback returning data
function showInfo(data, tabletop) { 
    console.log( "Here is the Audubon Thermometer Data", data); 
}

// end tabletop connection
