//Assign main gallery button
var heroButton = document.getElementById("galleryButton");

//Assign sections to show/hide
var mainGallery = document.getElementById("main-gallery");
var gal1 = document.getElementById("nature");
var gal2 = document.getElementById("sky");
var gal3 = document.getElementById("doubleE");

//Main Browse/Hide Gallery Button
function mainToggle(){
    if (mainGallery.style.display === "block"){
        mainGallery.style.display = "none";
        heroButton.textContent = "Browse Gallery";
    } else {
        mainGallery.style.display = "block";
        heroButton.textContent = "Hide Gallery";
    }
}

//Show/hide nature category, hide all others
function natureToggle(){
    if(gal1.style.display === "block"){
        gal1.style.display = "none";
    } else {
        gal1.style.display = "block";
        gal2.style.display = "none";
        gal3.style.display = "none";
    }
}

//Show/hide sky category, hide all others
function skyToggle(){
    if(gal2.style.display === "block"){
        gal2.style.display = "none";
    } else {
        gal2.style.display = "block";
        gal1.style.display = "none";
        gal3.style.display = "none";
    }
}

//Show/hide double exposure category, hide all others
function doubleToggle(){
    if(gal3.style.display === "block"){
        gal3.style.display = "none";
    } else {
        gal3.style.display = "block";
        gal2.style.display = "none";
        gal1.style.display = "none";
    }
}