//Module Pattern (Bare en start.. jag måste børja nånstans..=) endre gjerne.. er ikke sikker på vad jeg gør..)

var IMAGEMODUL =(function(){}{

    var imagelistJSON = {imagelist:[
        {title: "1.jpg"},
        {title: "2.jpg"},
        {title: "3.jpg"},
        {title: "4.jpg"},
        {title: "5.jpg"}

    ]};

    var getImage = function(){
        return imagelistJSON.imagelist[index];

    }

    return{
        getImage: getImage

    };


}());

//en annen app

IMAGEMODUL.getImage(0);

