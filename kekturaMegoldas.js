
//Adatok tömbje
let adatok = [
    "Sumeg, vasutallomas;Sumeg, buszpalyaudvar;1,208;16;6;n",
    "Sumeg, buszpalyaudvar;Mogyorosi-domb, geologiai bemutatohely;1,512;24;8;n",
    "Mogyorosi-domb, geologiai bemutatohely;Sumegi bazaltbanya vasutallomas;1,576;13;43;n",
    "Sumegi bazaltbanya vasutallomas;Sarvaly erdeszhaz, pecsetelohely;2,101;69;18;i",
    "Sarvaly erdeszhaz, pecsetelohely;Leteres a foldutrol a romos vadaszhaznal;4,250;82;66;n",
    "Leteres a foldutrol a romos vadaszhaznal;Kek rom jelzes kezdete Tatika varahoz;2,686;172;29;n",
    "Kek rom jelzes kezdete Tatika varahoz;Hidegkuti major;1,614;9;135;n",
    "Hidegkuti major;Leteres a Sztupahoz;3,903;153;53;n",
    "Leteres a Sztupahoz;Zalaszanto, romai katolikus templom;2,747;14;148;i",
    "Zalaszanto, romai katolikus templom;Leteres az orszagutrol Rezi fele;2,396;26;51;n",
    "Leteres az orszagutrol Rezi fele;Rezi, leteres a pecsetelohelyhez;3,328;112;13;i",
    "Rezi, leteres a pecsetelohelyhez;Gyongyosi csarda;2,535;31;173;i",
    "Gyongyosi csarda;Egregy, arpad-kori templom;5,239;134;109;n",
    "Egregy, arpad-kori templom;Heviz, leteres az autobuszallomashoz;2,595;20;49;i",
    "Heviz, leteres az autobuszallomashoz;Keszthely, Festetics kastely eszaki kapuja;5,114;58;32;n",
    "Keszthely, Festetics kastely eszaki kapuja;Keszthely, leteres a vasutallomashoz;1,820;3;36;i"
];
//Objektum konstruktorral
class Utvonal {
    constructor(kezdoPont, vegPont, tavolsag, emelkedes, lejtes, pecseteloHelyE) {
        this.kezdoPont = kezdoPont;
        this.vegPont = vegPont;
        this.tavolsag = tavolsag;
        this.emelkedes = emelkedes;
        this.lejtes = lejtes;
        this.pecseteloHelyE = pecseteloHelyE;
    }
}
//Beolvasási folyamat
function ObjektumFeltolto(feltoltendoElem) {
    const beolvasottAdatok = [];
    for (let i = 0; i < feltoltendoElem.length; i++) {
        let daraboltAdatSor = feltoltendoElem[i].split(';');
        const kekturaElem = new Utvonal(daraboltAdatSor[0], daraboltAdatSor[1], daraboltAdatSor[2], daraboltAdatSor[3], daraboltAdatSor[4], daraboltAdatSor[5]);
        beolvasottAdatok.push(kekturaElem);
    }
    return beolvasottAdatok;
}
let kektura = ObjektumFeltolto(adatok);//Objektum feltöltése egy objektum típusú tömbbe kéktúra néven
for (i = 0; i < kektura.length; i++) {
    kektura[i].tavolsag = (kektura[i].tavolsag).replaceAll(",", ".");
}
//Adatok kiíratása: Igény szerint megjegyzésbe tehető!
for (let i = 0; i < kektura.length; i++) {
    document.write("<b>Kezdőpont: </b>" + kektura[i].kezdoPont + "<br><b>Végpont: </b>" + kektura[i].vegPont + "<br><b>Távolság: </b>" + kektura[i].tavolsag + "<br><b>Emelkedés: </b>" + kektura[i].emelkedes + "<br><b>Lejtés: </b>" + kektura[i].lejtes + "<br><b>Pecsételő hely-e?: </b>" + kektura[i].pecseteloHelyE + "<hr>");
}

//Feladatok helye:
let kezdoMagassag = 192;//A túra kiindulási pontjának kezdőmagassága

//1.Feladat
function szakaszokSzama(adatTomb) {
    let szakaszokSzama = adatTomb.length;
    return szakaszokSzama
}
document.write("Szakaszok száma: " + szakaszokSzama(kektura) + "db<hr>");

//2.feladat
function teljesTuraHossza(adatTomb) {
    let teljesHossz = 0;
    for (let i = 0; i < adatTomb.length; i++) {
        teljesHossz = Number(teljesHossz) + Number(adatTomb[i].tavolsag);
    }
    return teljesHossz
}
document.write(" A túra teljes hossza: " + teljesTuraHossza(kektura) + " km<hr>")

//3.Feladat

let legrovidebbSzakasz = kektura[0];
let legrovidebbSzakaszHossza = Number(kektura[0].tavolsag);
for (let i = 0; i < kektura.length; i++) {
    if (Number(legrovidebbSzakaszHossza) > Number(kektura[i].tavolsag)) {
        Number(legrovidebbSzakaszHossza) = Number(kektura[i].tavolsag);
    }
    if (Number(legrovidebbSzakaszHossza) == Number(kektura[i].tavolsag)) {
        legrovidebbSzakasz = kektura[i];
    }
}
document.write("<b>Kezdőpont: </b>" + legrovidebbSzakasz.kezdoPont + "<br><b>Végpont: </b>" + legrovidebbSzakasz.vegPont + "<br><b>Távolság: </b>" + legrovidebbSzakasz.tavolsag + "<br><b>Emelkedés: </b>" + legrovidebbSzakasz.emelkedes + "<br><b>Lejtés: </b>" + legrovidebbSzakasz.lejtes + "<br><b>Pecsételő hely-e?: </b>" + legrovidebbSzakasz.pecseteloHelyE + "<hr>");

