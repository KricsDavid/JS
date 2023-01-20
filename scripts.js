aSzam = document.getElementById("aSzam").value;
bSzam = document.getElementById("bSzam").value;
cSzam = document.getElementById("cSzam").value;

function megszerk() {
    if  (aSzam + bszam > cSzam && aSzam + cSzam > bSzam && bSzam + cSzam > aSzam) {
        alert("Megszerkeszthető!");
    }
    else {
        alert("Nem megszerkeszhető!");
    }
}