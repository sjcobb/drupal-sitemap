/*jQuery.fn.doFade = function(settings) {

    // if no paramaters supplied...
	settings = jQuery.extend({
		fadeColor: "black",
		duration: 200,
		fadeOn: 0.95,
		fadeOff: 0.5
	}, settings);

    var duration = settings.duration;
    var fadeOff = settings.fadeOff;
    var fadeOn = settings.fadeOn;
    var fadeColor = settings.fadeColor;
        
    $(this).hover(function(){
	  $(this)
	      .stop()
	      .data("origColor", $(this).css("background-color"))
	      .animate({
	          opacity: fadeOn,
	          backgroundColor: fadeColor
	      }, duration)
	}, function() {
	  $(this)
	      .stop()
	      .animate({
	          opacity: fadeOff,
	          backgroundColor: $(this).data("origColor")
	      }, duration)
	});

};

$(function(){

   $("li").css("opacity", "0.5");
   
   $("li").doFade({ fadeColor: "#362b40" });
   $("li li").doFade({ fadeColor: "#354668" });
   $("li li li").doFade({ fadeColor: "#304531" });
   $("li li li li").doFade({ fadeColor: "#72352d" });

});*/