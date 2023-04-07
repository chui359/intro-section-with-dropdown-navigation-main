// sidenav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function showFeatures() {
    var features = document.getElementById("features");
    var down = document.getElementById("features--down");
    var up = document.getElementById("features--up");

    if (features.style.display === "inline") {
    features.style.display = "none";
    down.style.display = "inline";
    up.style.display = "none";
    } else {
    features.style.display = "inline";
    down.style.display = "none";
    up.style.display = "inline";
    }
}

function showCompany() {
    var company = document.getElementById("company");
    var down = document.getElementById("company--down");
    var up = document.getElementById("company--up");

    if (company.style.display === "inline") {
    company.style.display = "none";
    down.style.display = "inline";
    up.style.display = "none";
    } else {
    company.style.display = "inline";
    up.style.display = "inline";
    down.style.display = "none";
    }
}