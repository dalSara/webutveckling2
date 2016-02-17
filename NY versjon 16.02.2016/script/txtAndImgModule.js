//Module Pattern (Bare en start.. jag måste børja nånstans..=) endre gjerne.. 

var TXTANDIMAGEMODUL = (function(){

    var webpageListJSON = { 
        
        txtList:[
        //indexPage - 3txt
        {
            "txt1": "Ved å kalle Breivik demon fraskriver vi oss en del av ansvaret som samfunn. Det synes jeg er galt. Han er et menneske som har gjort grusomme handlinger, det må vi forholde oss til. Første gang jeg så han, på politihuset 23 juli, hadde jeg også noen bilder:", 
            "txt2": "Hvordan ser han ut, mannen som har gjort disse tingene? Man han er et menneske. Han har vokst opp i Oslo, gått på de samme skolene som oss, har en mor og en far. På et eller annet tispunkt har han hatt de samme drømmene som mange barn har – og så har det gått galt.",
            "txt3": "Så jeg tror ikke på å demoniserer ham. Da vil ikke vi som samfunn lære noe.",
            "txtRef": "- Geir Lippestad, 2012"
        },
        //page2 - 6txt
        {
            "txt1": "Forfatteren beskriver moren som «tilsynelatende ganske ustabil», og viser til at psykologer senere konkluderte med følgende:",
            "txt2": "«Hun skjøv gutten vekk, og trakk ham til seg på en måte som gjorde ham ganske forvirret», står det i boka.",
            "txt3": "Borchgrevink skriver at moren behandlet Breivik, som da var tre år gammel, som om han var en forlengelse av den «forhatte» faren",
            "txt4": "«Hun ble provosert av smilet hans, som hun oppfattet som upassende, nedlatende og hånlig», skriver han.",
            "txt5": "Moren skal også ha beskrevet sønnen som «agressiv, klengete og hyperaktiv».",
            "txt6": "I begynnelsen av 1983 tok moren på nytt kontakt med familievernkontoret, og familien på tre da ble henvist til observasjon på SSBUs dagavdeling på Gaustad i tre uker, der familien ble observert av et team på åtte personer.",
            "txtRef": "- Utdrag fra boken ”En norsk tragedie” Aage Strom Borchgevik, 2012"
        },
        //page3 - 5txt
        {
            "txt1": "Jeg har aldri møtt ABB, men det er allikevel nok av kontaktpunkter mellom oss som gjør meg kvalifisert til å mene noe om hva jeg tror har skjedd og hvorfor.",
            "txt2": "Vi kommer begge fra venstreorienterte skillsmissehjem på Oslo Vest. Vi har begge hengt i graffiti- og kriminelle innvandrermiljøer. Begge har gått på Hartvig Nissen, og vi har begge sittet desillusjonerte på gutterommet og forbannet et samfunn som ikke har anerkjent oss som enestående eller unike bidragsytere. Men ikke minst har vi begge opplevd et Oslo i brå sosiokulturell og demografisk endring.",
            "txt3": "Både på Silkestrå (hvor ABB vokste opp) og på Hovseter (hvor jeg vokste opp) flyttet det i løpet av 80- og 90-tallet en stor gruppe ikke-vestlige innvandrere inn i nabolaget. De aller fleste var lovlydige borgere, men det er ikke til å komme bort fra at en betydelig andel av kriminaliteten i vårt miljø ble begått av ikke-etniske nordmenn. Mange med bakgrunn fra land med Islam som hovedreligion.",
            "txt4": "Den nå selvutnevnte islamisten Arfan Bhatti var av dem som fikk det til å gå kaldest nedover vestkantryggene. «Jeg henter Arfan Bhatti på deg/ Han kjenner Arfan Bhatti» etc, var trusler man ikke tok lett på. Men var han på det tidspunktet muslim i religiøs forstand?",
            "txt5": "I sal 250 hevder Breivik at det var 20 voldskonfrontasjoner med muslimer i årene 1994/95 som utgjorde startskuddet for hans radikaliseringsprosess. Det interessante her er hvorvidt det er treffsikkert å rette sin aggresjonen mot Islam som religion på bakgrunn av disse episodene, og for å forsøke å komme til bunns i dette vil jeg fortelle litt om mine egne opplevelser fra denne tiden.",
            "txtRef": "Utdrag fra Sturla Haugsgjerd artikkel Sint ung Mann"
        },
        //page4 - 5txt
        {
            "txt1": "Så hvorfor påstår Anders Behring Breivik at det var «20 episoder med muslimske kriminelle» som la grunnlaget for hans radikaliseringsprosess mot ytre høyre?",
            "txt2": "En del av svaret er å finne i hans stadige tendens til å revidere sannheten i retrospekt for å være i stand til å opprettholde sitt kontinuerlige selvbedrag, en øvelse som jevnlig repeteres gjennom ABBs ungdoms- og voksenliv.",
            "txt3": "Dette fremkommer av de vitnesbyrd jeg har innhentet fra dem som kjente ham, og inntrykket forsterkes nå av å høre han snakke i retten. ABB var fra meget ung alder ekstremt opptatt av sosial status og gruppetilhørighet. Dessverre, av grunner man foreløpig bare kan spekulere i, var ikke Anders i besittelse av de sosiale egenskaper som var nødvendige for å oppnå dette",
            "txt4": "Ikke ble han noen lederskikkelse i ungdomsskolegjengen. Ikke fikk han den sentrale rollen i hiphop- og graffiti-miljøet på Oslo Vest som han i ettertid hardnakket har påstått han hadde. Ikke fikk han innpass i det ikke-etnisk norske gjengmiljøet. Ikke fikk han noen lysende akademisk karriere.",
            "txt5": "Han fikk heller ingen enestående karriere som FpU-politiker, ei heller ble han den suksessrike gründeren han ønsker å gi inntrykk av at han var.",
            "txtRef": "Utdrag fra Sturla Haugsgjerd artikkel Sint ung Mann"
        },
        //page5 - 3txt
        {
            "txt1": "En kontekstualiserende nærlesing av Fjordmanns forfatterskap, på den ene siden og Breiviks fortolking av Fjordmann på den andre siden.",
            "txt2": "Viser at Fjordmann hadde avgjørende innflytelse på Breiviks radikalisering mellom 2008 og 2009. Ord dreper ikke, men ord fanger.",
            "txt3": "Breivik tokk Fjordmann på ordet. Like fullt, i løpet av 2009 gikk Breivik alene over grensen mellom holdninger og handlinger,  fra begrunnelse til bevæpning, fra analyse til aksjon. Høyreekstremisme, iddeer og bevegelser i europa. S. 88 Vidar enbakk-Fjordmanns radikalisering.",
            "txtRef": "Utdrag fra bokan Høyreekstremisme 2012, fra Vider Enbakk artikkel 2Fjordmanns radikalisering"
        },
        //page6
        {
            "txt1": "Test tekst."
        }
    ], 
        imgList:[
            {"imgSrc": "1.jpg"}, //page2
            {"imgSrc": "2.jpg"}, //page3
            {"imgSrc": "3.jpg"}, //page4
            {"imgSrc": "4.jpg"}, //page5
            {"imgSrc": "5.jpg"}, //page6
        ]
    };

        // forløkke
    /*
    var showTxt = webpageListJSON.txtList.length;
        for(var i = 0; i < showTxt; i++){
            var  txtList = webpageListJSON.txtList[i].txtList;
            */
    
    
    var getTxt = function(txtIndex){
        return webpageListJSON.txtList[txtIndex];
    };
    
    var getTxtRef = function(ref){
        return webpageListJSON.txtList[ref].txtRef;
    };
    
    var getImg = function(index){
        return webpageListJSON.imgList[index].imgSrc;
    };

    return{
        getTxt: getTxt,
        getTxtRef: getTxtRef,
        getImg: getImg,
    };
}());//--end WEBPAGEIMAGESMODULE

