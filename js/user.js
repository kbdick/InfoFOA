
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
  	

// Tabletop Callback
    function showInfo(data) {
    console.log( "Here is your data", data); 
        var currentTotal = 1367;
        return currentTotal;
    }
    var currentAmount = currentTotal;
});
