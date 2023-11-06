positions = [
    [-20,  -105,  0],    
    [-15,  -100,  0],     
    [100,  -75,   0],      
    [170,  -100, 20],
    [170,  0,    -8],
    [170,  70,   -8],
    [100,  60,  -10],
    [20,   60,    8],
    [-30,  80,    8],
    [-75,  95,   15],
    [-150, 60,   -5],
    [-230, -20,  15],
    [-190, -80, -20],
    [-120, -120,  3]
]


function teex_load(){

    document.querySelector("#teex").addEventListener("mouseenter", ()=>{
        for(i=1;i<=14;i++){
            document.querySelector(`#teex .i${i}`).style.transform = `scale(1) translate(${positions[i-1][0]}px, ${positions[i-1][1]}px) rotate(${positions[i-1][2]}deg)`;
            document.querySelector(`#teex .i${i}`).style.opacity = 1;
        }
    })

    document.querySelector("#teex").addEventListener("mouseleave", ()=>{
        for (let i = 1; i <= 14; i++) {
            document.querySelector(`#teex .i${i}`).style.transform = `scale(0) translate(0px, 0px) rotate(0deg)`;
            document.querySelector(`#teex .i${i}`).style.opacity = 0;
        }
    })

    teex_scale();
}

teexcont = document.querySelector("#teex");
function teex_scale(){
    h = teexcont.offsetHeight;
    w = teexcont.offsetWidth;
    
    dh = 300;
    dw = 500;

    scale = Math.min(1000000, Math.min(h/dh, w/dw));
    
    document.querySelector("#teex div.sizer").style.transform = `scale(${scale})`;
}