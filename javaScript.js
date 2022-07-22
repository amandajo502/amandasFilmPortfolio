var heroButton = document.getElementById("galleryButton");
var mainGallery = document.getElementById("main-gallery");
var gal1 = document.getElementById("nature");
var gal2 = document.getElementById("sky");
var gal3 = document.getElementById("doubleE");

function natureToggle(){
    if(gal1.style.display === "block"){
        gal1.style.display = "none";
    } else {
        gal1.style.display = "block";
        gal2.style.display = "none";
        gal3.style.display = "none";
    }
}

function skyToggle(){
    if(gal2.style.display === "block"){
        gal2.style.display = "none";
    } else {
        gal2.style.display = "block";
        gal1.style.display = "none";
        gal3.style.display = "none";
    }
}

function doubleToggle(){
    if(gal3.style.display === "block"){
        gal3.style.display = "none";
    } else {
        gal3.style.display = "block";
        gal2.style.display = "none";
        gal1.style.display = "none";
    }
}

function mainToggle(){
    if (mainGallery.style.display === "block"){
        mainGallery.style.display = "none";
        heroButton.textContent = "Browse Gallery";
    } else {
        mainGallery.style.display = "block";
        heroButton.textContent = "Hide Gallery";
    }
}