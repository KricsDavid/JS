

function megszerk() {
    aSzam = document.getElementById("aSzam").value;
    bSzam = document.getElementById("bSzam").value;
    cSzam = document.getElementById("cSzam").value;
    if (Math.pow(aSzam, 2) + Math.pow(bSzam, 2) == Math.pow(cSzam, 2)) {
        alert("Megszerkeszthető!");
    }
    else {
        alert("Nem megszerkeszhető!");
    }
}