window.addEventListener("load", function() {
    navbar_load();
    shorts_load();
    teex_load();
    helium_load()
})

window.addEventListener('resize', function(){
    teex_scale();
});