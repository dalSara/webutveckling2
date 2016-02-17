var SPOTLIGHTMODULE = (function(){

$("#spotlight").css({
            "width": "2000px",
            "height": "2000px",
            "left": "-2600px",
            "top": "-2700px",
            "border-radius": "50%",
            "margin": "10px",
            "border": "2200px solid black",
            "position": "absolute",
            "box-shadow": "inset 10px 10px 49px 57px rgba(0,0,0,0.65)",
            });

        $(function() {
            $("#spotlight").animate({
                height: "150px",
                width: "150px",
                "left": "-1577px",
                "top": "-1930px",
                },
                15000,
                'linear',
                function(){

                        var $mouseX = 700, $mouseY = 350;
                        var $xp = 700, $yp = 350;

                        $(document).mousemove(function(e){
                            $mouseX = e.pageX;
                            $mouseY = e.pageY;

                        });

                      var $loop = setInterval(function(){
                        $xp += (($mouseX - $xp)/2);
                        $yp += (($mouseY - $yp)/2);
                        $("#spotlight").css({left:($xp -2280)+'px',top:($yp -2280) +'px'});
                        }, 10);

                        })

                          });
}());
