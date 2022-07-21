var gallery1=document.getElementById("nature");
var gallery2=document.getElementById("sky");
var gallery3=document.getElementById("doubleE");

document.getElementById("btn1").addEventListener("click", function()

{
    if (gallery1.style.display=="none")
    {
gallery1.style.display = "block";
gallery2.style.display = "none";
gallery3.style.display = "none";
gallery4.style.display = "none";

    }
    else
    {
        gallery1.style.display="none";
    }
})

document.getElementById("btn2").addEventListener("click", function()

{
    if (gallery2.style.display=="none")
    {
gallery2.style.display = "block";
gallery1.style.display = "none"
gallery3.style.display = "none"
gallery4.style.display = "none"
    }
    else
    {
        gallery2.style.display="none";
    }
})

document.getElementById("btn3").addEventListener("click", function()

{
    if (gallery3.style.display=="none")
    {
gallery3.style.display = "block";
gallery2.style.display = "none";
gallery1.style.display = "none";
gallery4.style.display = "none";
    }
    else
    {
        gallery3.style.display="none";
    }
})

const button = document.getElementById('galleryButton');
const gallery = document.getElementById('main-gallery');

button.addEventListener('click', function() {
    
    if (gallery.style.display == "none") {
        gallery.style.display = "block";
        button.textContent = 'Hide Gallery';
    }
    else {
        gallery.style.display = "none";
        button.textContent = 'Browse Gallery';
    }
});