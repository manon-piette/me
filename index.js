
function resize_preview(){

    portrait = false;
    if(document.querySelector('main .project-preview').offsetHeight > document.querySelector('main .project-preview').offsetWidth * 0.8){
        portrait = true
    }

    e = document.querySelectorAll('main .cont').forEach(e=>{
        if(portrait){
            e.style.height = "auto";
            e.style.width = "80%";
            e.querySelectorAll('img').forEach(i=>{
                i.style.height = "auto"
                i.style.width = "100%"
                console.log("portrait");
            })
        }
        else{
            e.style.width = "auto";
            e.style.height = "65%";
            e.querySelectorAll('img').forEach(i=>{
                i.style.width = "auto"
                i.style.height = e.offsetHeight + "px";
                console.log("paysage");
            })
        }
    })


}
window.addEventListener("resize",resize_preview)
window.addEventListener("load", function() {


    var landing = document.querySelector("header");
    if(window.location.href.includes("/#/back")){
        landing.style.display == 'none';
        document.querySelector("main").style.display = "block"
    }
    else{
        if( window.getComputedStyle(landing).getPropertyValue('display') === 'block'){
            document.querySelector("main").style.display = "none"
        }
    }
    navbar_load();
    // resize_preview();
})

document.addEventListener('DOMContentLoaded',resize_preview);

window.addEventListener('scroll', function(){
    if (isVisible('helium-trigger',0.3)){
        document.querySelector(`#helium img.right`).style.transform = `translateX(40%) translateY(-4%)`;
        document.querySelector(`#helium img.right`).style.opacity = "0.5"

        document.querySelector(`#helium img.left`).style.transform = `translateX( -40%) translateY(-4%)`;
        document.querySelector(`#helium img.left`).style.opacity = "0.5"
    }
    else{
        document.querySelector(`#helium img.right`).style.transform = `translateX( 100%) translateY(0%)`;
        document.querySelector(`#helium img.right`).style.opacity = "0"

        document.querySelector(`#helium img.left`).style.transform = `translateX( -100%) translateY(0%)`;
        document.querySelector(`#helium img.left`).style.opacity = "0"
    }

    if (isVisible('bank-trigger',0.3)){
        document.querySelector('#bank div.project-preview .cont img:first-child').style.opacity = 1;
        document.querySelector('#bank div.project-preview .cont img:first-child').style.transform = "scale(1.02)";

        document.querySelector('#bank div.project-preview .cont img:last-child').style.opacity = 1;
        document.querySelector('#bank div.project-preview .cont img:last-child').style.transform = "scale(1.02)";

        document.querySelector('#bank div.project-preview .cont img:nth-child(2)').style.transform = "scale(1.02)";
    }
    else{
        document.querySelector('#bank div.project-preview .cont img:first-child').style.opacity = 0;
        document.querySelector('#bank div.project-preview .cont img:first-child').style.transform = "scale(1)";

        document.querySelector('#bank div.project-preview .cont img:last-child').style.opacity = 0;
        document.querySelector('#bank div.project-preview .cont img:last-child').style.transform = "scale(1)";

        document.querySelector('#bank div.project-preview .cont img:nth-child(2)').style.transform = "scale(1)";

    }

    if (isVisible('about-trigger',0.3)){
        document.querySelector('#about div.project-preview .cont img').style.transform = "scale(0.95)";
        console.log("vvv")
    }
    else{
        document.querySelector('#about div.project-preview .cont img').style.transform = "scale(0.9)";
    }

    if (isVisible('kronos-trigger',0.3)){
        document.querySelector('#kronos div.project-preview .cont img').style.transform = "scale(1)";
        console.log("vvv")
    }
    else{
        document.querySelector('#kronos div.project-preview .cont img').style.transform = "scale(0.95)";
    }

});

function enter(){
        
    setTimeout(function() {
        document.querySelector("header").style.opacity = 0;
        document.querySelector("main").style.display = "block"
    }, 100);
    setTimeout(function() {
        document.querySelector("header").style.display = "none";
    }, 1000);


}

function scrollToId(id) {
    const targetElement = document.getElementById(id);

    if (targetElement) {
        const offset = 20; // Décalage en pixels
        const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: targetOffset,
            behavior: "smooth" // Pour un défilement en douceur
        });
    }
}

function isVisible(id,when) {
    var element = document.getElementById(id);

        var rect = element.getBoundingClientRect();
        var hauteurFenetre = window.innerHeight || document.documentElement.clientHeight;

        var distanceHaut = rect.top;
        var distanceBas = rect.bottom;

        return (distanceBas > 0 && distanceHaut < hauteurFenetre * (1-when))


}