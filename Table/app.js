let table = document.querySelector("#table");
function getTable() {
    table.innerHTML = "";
    for (let i=1; i<=10; i++){
    let input = document.querySelector("#tbl_id").value;
    table.innerHTML +=input + " x " + i + " = " + input * i + "<br>"
    }
}
