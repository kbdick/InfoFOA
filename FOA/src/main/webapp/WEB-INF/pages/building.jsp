<!DOCTYPE html>
<html>
<head>
    <title>RecycleTracker</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <script src="https://code.jquery.com/jquery.js"></script>
    <!-- Bootstrap CSS -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">

    <!-- Latest compiled and minified JavaScript -->
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>

    <!-- FontAwesome CSS -->
    <link rel="stylesheet" href="/css/font-awesome.css">

    <!-- RecycleTracker CSS -->
    <link rel="stylesheet" href="/css/recycletracker.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

    <!-- jquery d3js datejs-->
    <script src="https://labratrevenge.com/d3-tip/javascripts/d3.tip.min.js"></script>
    <script src="http://d3js.org/d3.v3.min.js"></script>
    
    <!-- basic royalslider stylesheet -->
    <link rel="stylesheet" href="../../js/royalslider/royalslider.css">

    <!-- skin stylesheet (change it if you use another) -->
    <link rel="stylesheet" href="../../js/royalslider/skins/minimal-white/rs-minimal-white.css">

    <script type="text/javascript" src="../../js/jquery.tipsy.js"></script>
    
    <script type="text/javascript" src="../../js/d3LineChart.js"></script>
    
    <!-- Main slider JS script file -->
    <!-- Create it with slider online build tool for better performance. -->
    <script src="../../js/royalslider/jquery.royalslider.min.js"></script>

    <!-- full screen mode for android devices with site launched from home screen -->
    <meta name="mobile-web-app-capable" content="yes">


</head>
<body>

<!-- Start Content -->
    <div class="container">
<!-- Begin Logo -->
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <img id="img-responsive" class="logo" src="/images/RecycleTracker_Icon.png" height="30px" width="auto" alt="RT Logo">
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            </div>
        </div>
<!-- End Logo -->
<!-- Start Date and Trend Row -->
        <div class="row">
            <div class="date col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <h4 class="datestyle fa" >April 10th, 2014</h4>
            </div>
            <div class="rolling col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <h1 class="recyclepercent fa" title="This is the building's rolling average recycling rate for consumable goods.">32%</h1>
            </div>
            <div class="daily col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <h1 class="recyclechange fa" title="Nice. You increased your recycling rate from yesterday">1%</h1>
            </div>
            <div class="mood col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <h1 class="directionmeh fa fa-meh-o" title="Meh. You could still recycle better."></h1>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            </div>
        </div>
<!-- Begin Left Side Content -->
        <div class="row">
<!-- Begin Chart -->
            <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <div id="chart" class="royalSlider rsMinW">
                <iframe height=350 width=350 src="//docs.google.com/spreadsheets/d/1o2CslDz13ipgg7U3txgvRNMek38ul4S8UWJL_lravMQ/gviz/chartiframe?oid=1676362229" seamless frameborder=0 scrolling=no></iframe>
                <iframe height=350 width=350 src="//docs.google.com/spreadsheets/d/1o2CslDz13ipgg7U3txgvRNMek38ul4S8UWJL_lravMQ/gviz/chartiframe?oid=1815633658" seamless frameborder=0 scrolling=no></iframe>
                <iframe height=350 width=350 src="//docs.google.com/spreadsheets/d/1o2CslDz13ipgg7U3txgvRNMek38ul4S8UWJL_lravMQ/gviz/chartiframe?oid=1987059007" seamless frameborder=0 scrolling=no></iframe>
                <iframe height=350 width=350 src="//docs.google.com/spreadsheets/d/1o2CslDz13ipgg7U3txgvRNMek38ul4S8UWJL_lravMQ/gviz/chartiframe?oid=301490171" seamless frameborder=0 scrolling=no></iframe>
                <iframe height=350 width=350 src="//docs.google.com/spreadsheets/d/1o2CslDz13ipgg7U3txgvRNMek38ul4S8UWJL_lravMQ/gviz/chartiframe?oid=646744335" seamless frameborder=0 scrolling=no></iframe>
            </div>
            </div>
<!-- End Chart -->
<!-- End Left Content -->
<!-- Begin Right Content -->
            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <div class="royalSlider rsMinW">
                <img class="rsImg img-responsive" src="../../images/rt1.png" height="350" width="auto" alt="Soda"/>
                <img class="rsImg img-responsive" src="../../images/rt2.png" height="350" width="auto" alt="Coffee Cup"/>
                <img class="rsImg img-responsive" src="../../images/rt3.png" height="350" width="auto" alt="Coffee Sleeve"/>
                <img class="rsImg img-responsive" src="../../images/rt4.png" height="350" width="auto" alt="Tip"/>
                <img class="rsImg img-responsive" src="../../images/rt5.png" height="350" width="auto" alt="Cup Holder"/>
                <img class="rsImg img-responsive" src="../../images/rt6.png" height="350" width="auto" alt="Napkin"/>.
                <img class="rsImg img-responsive" src="../../images/rt7.png" height="350" width="auto" alt="Styrofoam"/>
                </div>
            </div>
        </div>
<!-- End Right Content -->
<!-- Begin Footer -->
        <div class="row">
            <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                <p class="marquee h3 fa">"One Man's Junk Is Another Man's Treasure."</p>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
            <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <img class="img-responive" src="/images/mmpilogo.png" height="50" width="auto" alt="Building Logo">
            </div>
        </div>
<!-- End Footer -->
    </div>
    
<script>
//Begin Carousel
jQuery(document).ready(function($) {
    $(".royalSlider").royalSlider({
        autoScaleSliderHeight: 350,
        controlNavigation: 'none',
        imageHeight: 350,
        imageScaleMode: 'fit',
        imageScalePadding: 2,
        arrowsNavAutoHide: false,
    	autoScaleSlider: false,
    	randomizeSlides: false,
    	transitionType: 'fade',
    	sliderDrag: true,
    	sliderTouch: true,
    	autoPlay: {
    		enabled: true,
    		pauseOnHover: true,
    		delay: 10000
    	}
    });  
});
//End Carousel

    $('#myFormSubmit').click(function(e){
        e.preventDefault();
        alert($('#myField').val());
        /*
         $.post('http://path/to/post',
         $('#myForm').serialize(),
         function(data, status, xhr){
         // do something here with response;
         });
         */
    });
</script>
</body>
</html>