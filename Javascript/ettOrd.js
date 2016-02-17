<p id="setning"></p>

    <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script>

         var webpageListJSON = {

        txtList:[
        //indexPage - 3txt
        {
            "txt1": "Ved å kalle Breivik demon fraskriver vi oss en del av ansvaret som samfunn. Det synes jeg er galt. Han er et menneske som har gjort grusomme handlinger, det må vi forholde oss til. Første gang jeg så han, på politihuset 23 juli, hadde jeg også noen bilder:",
            "txt2": "Hvordan ser han ut, mannen som har gjort disse tingene? Man han er et menneske. Han har vokst opp i Oslo, gått på de samme skolene som oss, har en mor og en far. På et eller annet tispunkt har han hatt de samme drømmene som mange barn har – og så har det gått galt.",
            "txt3": "Så jeg tror ikke på å demoniserer ham. Da vil ikke vi som samfunn lære noe.",
            "txtRef": "- Geir Lippestad, 2012"
        },
        // var setningJSON = {"tekst": "Dette er en tekst"};
        var sisteOrdArray = setningJSON.tekst.split(" ");

        for(var i = 0; i < sisteOrdArray.length; i++){
            $("#setning").append(sisteOrdArray[i] + " ");
        }

        $("#setning").append("<a href='http://aftenposten.no'>" + sisteOrdArray[sisteOrdArray.length - 1] + "</a>");
    </script>
