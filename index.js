window.addEventListener("load", function() {
    if( document.querySelector("header").style.display == "block"){
        document.querySelector("html").style.overflow = "hidden"
    }
    
    navbar_load();
    helium_load();
})

window.addEventListener('resize', function(){
    teex_scale();
});

function enter(){
        
    setTimeout(function() {
        document.querySelector("header").style.opacity = 0;
        document.querySelector("html").style.overflow = "scroll"
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