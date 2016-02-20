var TXTSCROLLMODULE = (function(){ 

scrollTxt: function(){ //Korleis få denne metoden lukka?
            var distancePerSec = 50;
            
            var h = WEBPAGEAPP.$txtSec.height();
            var targetScrollTop = h + $(window).height();
            var distanceToTravel = targetScrollTop - $(window).scrollTop();
            var animationDuration = (distanceToTravel / distancePerSec) * 1000;
                
            $("html, body").animate({
                scrollTop: targetScrollTop
            }, animationDuration, 'linear');
        }, //end scrollTxt



}()); // end scroll
Module