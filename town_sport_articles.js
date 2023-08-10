


let ouvre_cartegoristic = document.getElementById("ouvre_cartegoristic");
let cartegoristic = document.getElementById("cartegoristic");
let fermer_cartgorie = document.getElementById("fermer_cartgorie");
let btn_ferme_cart = document.getElementById("btn_ferme_cart");

ouvre_cartegoristic.onclick = function (params) {
    cartegoristic.style.display = "block";
    fermer_cartgorie.style.display = "block";
    ouvre_cartegoristic.style.display = "none"
}

btn_ferme_cart.onclick = function (params) {
    cartegoristic.style.display = "none";
    fermer_cartgorie.style.display = "none";
    ouvre_cartegoristic.style.display = "block"
}


let icon_open_detail =document.getElementById("icon_open_detail");
let icon_close_detail =document.getElementById("icon_close_detail");
let lot =document.getElementById("lot");

icon_open_detail.onclick= function (params) {
    lot.classList.add("ouvre_lot");
    icon_open_detail.style.display = "none"
    icon_close_detail.style.display = "block"
}
icon_close_detail.onclick= function (params) {
    lot.classList.remove("ouvre_lot");
    icon_open_detail.style.display = "block"
    icon_close_detail.style.display = "none"
}





