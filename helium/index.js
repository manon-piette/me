
function helium_load(){

    document.querySelector("#helium .project-preview").addEventListener("mouseenter", ()=>{
        document.querySelector(`#helium img.right`).style.transform = `translateX( 10% ) translateY(-54% )`;
        document.querySelector(`#helium img.right`).style.opacity = "0.5"

        document.querySelector(`#helium img.left`).style.transform = `translateX( -110%) translateY( -54% )`;
        document.querySelector(`#helium img.left`).style.opacity = "0.5"
 
    })

    document.querySelector("#helium .project-preview").addEventListener("mouseleave", ()=>{
        document.querySelector(`#helium img.right`).style.transform = `translateX( -50%) translateY(-50%)`;
        document.querySelector(`#helium img.right`).style.opacity = "0"

        document.querySelector(`#helium img.left`).style.transform = `translateX( -50%) translateY(-50%)`;
        document.querySelector(`#helium img.left`).style.opacity = "0"
    })

}
