window.addEventListener("load", function() {
    navbar_load();
    shorts_load();
    teex_load();
    helium_load()
})

window.addEventListener('resize', function(){
    teex_scale();
});


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