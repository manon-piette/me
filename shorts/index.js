row_cont = document.querySelector("#shorts div.row-cont");
col_cont = document.querySelector("#shorts div.col-cont");

function shorts_load(){
    const style = document.createElement("style");
    style.id = "shorts-style";
    document.head.appendChild(style);
}

function zoom(id){
    console.log("id",id)
    to_col = [1,1];
    to_row = [1,1];
    col_cont = 0;
    switch (id){
        case 1:
            console.log("1",id)
            to_col = [1,0];
            to_row = [1,0];
            break;
        case 2:
            console.log("2",id)
            to_col = [0,1];
            to_row = [1,0];
            break;
        case 3:
            console.log("3",id)
            to_col = [1,0];
            to_row = [0,1];
            col_cont = 1;
            break;
        case 4:
            console.log("4",id)
            to_col = [0,1];
            to_row = [0,1];
            col_cont = 1;
            break;
    }

    document.getElementById("shorts-style").innerHTML = `
        @keyframes squash-col {
            0%  {grid-template-columns: 1fr 1fr;}
            100%{grid-template-columns: ${to_col[0]}fr ${to_col[1]}fr;}
        }
        @keyframes unsquash-col {
            0%  {grid-template-columns: ${to_col[0]}fr ${to_col[1]}fr;}
            100%{grid-template-columns: 1fr 1fr;}
        }
        @keyframes squash-row {
            0%  {grid-template-rows: 1fr 1fr;}
            100%{grid-template-rows: ${to_row[0]}fr ${to_row[1]}fr;}
        }
        @keyframes unsquash-row {
            0%  {grid-template-rows: ${to_row[0]}fr ${to_row[1]}fr;}
            100%{grid-template-rows: 1fr 0fr;}
        }
    ` ;
    document.querySelectorAll(`#shorts div.col-cont`)[col_cont].style.animation = "squash-col 0.4s ease-in-out forwards";
    document.querySelector   (`#shorts div.row-cont`).style.animation           = "squash-row 0.4s ease-in-out forwards";
}