//Module Pattern (Bare en start.. jag måste børja nånstans..=) endre gjerne.. er ikke sikker på vad jeg gør..)

var IMAGEMODUL =(function(){

    var imagelistJSON = {imagelist:[
        {"imgSrc": "1.jpg"},
        {"imgSrc": "2.jpg"},
        {"imgSrc": "3.jpg"},
        {"imgSrc": "4.jpg"},
        {"imgSrc": "5.jpg"}
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

