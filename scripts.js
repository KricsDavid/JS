aSzam = document.getElementById("aSzam").value;
bSzam = document.getElementById("bSzam").value;
cSzam = document.getElementById("cSzam").value;

function megszerk() {
    if  (aSzam*aSzam + bSzam*bSzam == cSzam*cSzam || aSzam*aSzam + cSzam*cSzam == bSzam*bSzam || bSzam*bSzam + cSzam*cSzam == aSzam*aSzam) {
        alert("Megszerkeszthető!");
    }
    else {
        alert("Nem megszerkeszhető!");
    }
}