window.addEventListener("load", function() {

    var landing = document.querySelector("header");
    if( window.getComputedStyle(landing).getPropertyValue('display') === 'block'){
        document.querySelector("main").style.display = "none"
        console.log("block")
    }
    
    navbar_load();
    helium_load();
})


window.addEventListener('scroll', function(){
    if (isVisible('helium-trigger',0.3)){
        document.querySelector(`#helium img.right`).style.transform = `translateX( 10% ) translateY(-54% )`;
        document.querySelector(`#helium img.right`).style.opacity = "0.5"

        document.querySelector(`#helium img.left`).style.transform = `translateX( -110%) translateY( -54% )`;
        document.querySelector(`#helium img.left`).style.opacity = "0.5"
    }
    else{
        document.querySelector(`#helium img.right`).style.transform = `translateX( -50%) translateY(-50%)`;
        document.querySelector(`#helium img.right`).style.opacity = "0"

        document.querySelector(`#helium img.left`).style.transform = `translateX( -50%) translateY(-50%)`;
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