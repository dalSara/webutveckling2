//Module Pattern (Bare en start.. jag måste børja nånstans..=) endre gjerne.. er ikke sikker på vad jeg gør..)

var IMAGEMODUL =(function(){

    var imagelistJSON = {imagelist:[
        {"title": "1.jpg"},
        {"title": "2.jpg"},
        {"title": "3.jpg"},
        {"title": "4.jpg"},
        {"title": "5.jpg"}
    ]};

    var getImage = function(){
        return imagelistJSON.imagelist[index].title;
    };

    var scrollTxt = function(){
        var distancePerSec = 50;

        $(".txt").mouseover(function () {
            var h = $(".txt").height();
            var targetScrollTop = h + $(window).height();
            var distanceToTravel = targetScrollTop - $(window).scrollTop();
            var animationDuration = (distanceToTravel / distancePerSec) * 1000;

            $("html, body").animate({
                scrollTop: targetScrollTop
            }, animationDuration, 'linear');
        }
                              )};
    return{
        getImage: getImage,
        scrollTxt: scrollTxt
    };
}());

//en annen app

IMAGEMODUL.getImage(0);

