/**
 * @author Lance Snider - lance@lancesnider.com
 * modified with Tabletop by Kevin Dick - kbdick@389nm.com
*/

/* global $ */

(function() {
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

var goalAmount = data[0].dollarsgoal;//how much are you trying to get

/* global data */
var currentAmount = data[0].dollarsraised;//how much do you currently have (if you want to define in js, not html)
var animationTime = 3000;//in milliseconds
var numberPrefix = "";//what comes before the number (set to "" if no prefix)
var numberSuffix = "%";//what goes after the number
var tickMarkSegementCount = 4;//each segement adds 40px to the height
var widthOfNumbers = 1;//the width in px of the numbers on the left

//standard resolution images
var glassTopImg = "images/PencilThermTop.png";
var glassBodyImg = "images/PencilThermBody.png";
var redVerticalImg = "images/yellowVertical.png";
var tooltipFGImg = "images/tickShine.png";
var glassBottomImg = "images/PencilThermBottom.png";
var tootipPointImg = "images/tooltipPoint.png";
var tooltipMiddleImg = "images/tooltipMiddle.png";
var tooltipButtImg = "images/tooltipButt.png";

//high res images
var glassTopImg2x = "images/PencilThermTop.png";
var glassBodyImg2x = "images/PencilThermBody.png";
var redVerticalImg2x = "images/redVertical2x.png";
var tooltipFGImg2x = "images/tickShine2x.png";
var glassBottomImg2x = "images/PencilThermBottom.png";
var tootipPointImg2x = "images/tooltipPoint2x.png";
var tooltipMiddleImg2x = "images/tooltipMiddle2x.png";
var tooltipButtImg2x = "images/tooltipButt2x.png";

/////////////////////////////////////////
// ------ don't edit below here ------ //
/////////////////////////////////////////

var arrayOfImages;
var imgsLoaded = 0;
var tickHeight = 40;
var mercuryHeightEmpty = 0;
var numberStartY = 6;
var thermTopHeight = 221;
var thermBottomHeight = 47;
var tooltipOffset = 20;
var heightOfBody;
var mercuryId;
var tooltipId;
var resolution2x = false;

//start once the page is loaded
$( document ).ready(function() {
	determineImageSet();
});

//this checks if it's the high or normal resolution images
function determineImageSet(){
	
	resolution2x = window.devicePixelRatio == 2;//check if resolution2x
	
	if(resolution2x){	
		//switch the regular for 2x res graphics
		glassTopImg = glassTopImg2x;
		glassBodyImg = glassBodyImg2x;
		redVerticalImg = redVerticalImg2x;
		glassBottomImg = glassBottomImg2x;
		tootipPointImg = tootipPointImg2x;
		tooltipButtImg = tooltipButtImg2x;	
	}
	
	createGraphics();
}

//visually create the thermometer
function createGraphics(){
	
//add the html
	$("#goal-thermometer").html(
		"<div id='therm-numbers'>" + 
		"</div>" + 
		"<div id='therm-graphics'>" + 
			"<img id='therm-top' src='"+glassTopImg+"'></img>" + 
			"<img id='therm-body-bg' src='"+glassBodyImg+"' ></img>" + 
			"<img id='therm-body-mercury' src='"+redVerticalImg+"'></img>" + 
			"<div id='therm-body-fore'></div>" + 
			"<img id='therm-bottom' src='"+glassBottomImg+"'></img>" + 
			"<div id='therm-tooltip'>" + 
				"<img class='tip-left' src='"+tootipPointImg+"'></img>" + 
				"<div class='tip-middle'><p>$0</p></div>" + 
				"<img class='tip-right' src='"+tooltipButtImg+"'></img>" + 
			"</div>" + 
		"</div>"
	);
	
	// preload and add the background images
	$('<img/>').attr('src', tooltipFGImg).load(function(){
		$(this).remove();
		$("#therm-body-fore").css("background-image", "url('"+tooltipFGImg+"')");
		checkIfAllImagesLoaded();
	});
	
	$('<img/>').attr('src', tooltipMiddleImg).load(function(){
		$(this).remove();
		$("#therm-tooltip .tip-middle").css("background-image", "url('" + tooltipMiddleImg + "')");
		checkIfAllImagesLoaded();
	}); 
	
	//adjust the css
	heightOfBody = tickMarkSegementCount * tickHeight;
	$("#therm-graphics").css("left", widthOfNumbers)
	$("#therm-body-bg").css("height", heightOfBody);
	$("#goal-thermometer").css("height",  heightOfBody + thermTopHeight + thermBottomHeight);
	$("#therm-body-fore").css("height", heightOfBody);
	$("#therm-bottom").css("top", heightOfBody + thermTopHeight);
	mercuryId = $("#therm-body-mercury");
	mercuryId.css("top", heightOfBody + thermTopHeight);
	tooltipId = $("#therm-tooltip");
	tooltipId.css("top", heightOfBody + thermTopHeight - tooltipOffset);
	
	//add the numbers to the left
	var numbersDiv = $("#therm-numbers");
	var countPerTick = goalAmount/tickMarkSegementCount;
	var commaSepCountPerTick = commaSeparateNumber(countPerTick);
	
	//add the number
	for ( var i = 0; i < tickMarkSegementCount; i++ ) {
		
		var yPos = tickHeight * i + numberStartY;
		var style = $("<style>.pos" + i + " { top: " + yPos + "px; width:"+widthOfNumbers+"px }</style>");
		$("html > head").append(style);
		var dollarText = commaSeparateNumber(goalAmount - countPerTick * i);
		$( numbersDiv ).append( "<div class='therm-number pos" + i + "'>" +dollarText+ "</div>" );
		
	}
	
	//check that the images are loaded before anything
	arrayOfImages = new Array( "#therm-top", "#therm-body-bg", "#therm-body-mercury", "#therm-bottom");
	preload(arrayOfImages);
	
};

//check if each image is preloaded
function preload(arrayOfImages) {
	
	for(i=0;i<arrayOfImages.length;i++){
		$(arrayOfImages[i]).load(function() {   checkIfAllImagesLoaded();  });
	}
    
}

//check that all the images are preloaded
function checkIfAllImagesLoaded(){
	imgsLoaded++;
	if(imgsLoaded == arrayOfImages.length+2){
		$("#goal-thermometer").fadeTo(1000, 1, function(){
			animateThermometer();
		});
	}
}


//animate the thermometer
function animateThermometer(){
	
	var percentageComplete = currentAmount/goalAmount;
	var mercuryHeight = Math.round(heightOfBody * percentageComplete); 
	var newMercuryTop = heightOfBody + thermTopHeight - mercuryHeight;
	
	mercuryId.animate({height:mercuryHeight +1, top:newMercuryTop }, animationTime);
	tooltipId.animate({top:newMercuryTop - tooltipOffset}, {duration:animationTime});
	
	var tooltipTxt = $("#therm-tooltip .tip-middle p");
	
	//change the tooltip number as it moves
	$({tipAmount: 0}).animate({
		tipAmount: currentAmount
	}, {
		duration:animationTime,
		step:function(){
			tooltipTxt.html(commaSeparateNumber(this.tipAmount));
		}, 
		complete:function(){
			tooltipTxt.html(commaSeparateNumber(currentAmount));
		}
	});
	
}

//format the numbers with $ and commas
function commaSeparateNumber(val){
	val = Math.round(val);
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return numberPrefix + val + numberSuffix;
}

$ ("#dollar-goal").html(data[0].year);

// $ ("#dollar-goal").html(commaSeparateNumber(goalAmount));

// last brace is for closing tabletop callback
}

// end tabletop connection
})();