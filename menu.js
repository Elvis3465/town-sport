




/*NAVBAR TELEPHONE*/ 
let ensemble_menu = document.getElementById("ensemble_menu");
let btn_ouvre_menue = document.getElementById("btn_ouvre_menue");
let btn_fermer_menue = document.getElementById("btn_fermer_menue");
let icon_menue_open = document.getElementById("icon_menue_open");
let icon_menue_close = document.getElementById("icon_menue_open");
let commencer_achat = document.getElementById("commencer_achat");
let corps_du_site = document.getElementById("corps_du_site");



btn_ouvre_menue.onclick= function (params) {
    ensemble_menu.classList.add("ouvre_ensemble_menue");
    btn_ouvre_menue.style.display='none';
    btn_fermer_menue.style.display='block';
}

btn_fermer_menue.onclick= function (params) {
    ensemble_menu.classList.remove("ouvre_ensemble_menue");
    btn_ouvre_menue.style.display='block';
    btn_fermer_menue.style.display='none';

}



/*MESSAGE ALERT SERVICE INDISPONIBLE ORDINATAIRE*/ 
let service_indispo = document.getElementById("service_indispo"); 
let btn_info = document.getElementById("btn_info"); 
let btn_info_2 = document.getElementById("btn_info_2"); 
let fermer_message_alert = document.getElementById("fermer_message_alert"); 

btn_info.onclick = function (params) {
    service_indispo.classList.add("ouvre_indispo");
    commencer_achat.style.display="none";

}
btn_info_2.onclick = function (params) {
    service_indispo.classList.add("ouvre_indispo");
    commencer_achat.style.display="none";

}
fermer_message_alert.onclick = function (params) {
    service_indispo.classList.remove("ouvre_indispo");
    commencer_achat.style.display="block";
}



/*MESSAGE ALERT SERVICE INDISPONIBLE TELEPHONE*/ 
let ouvr_alert = document.getElementById("ouvr_alert"); 
let ouvr_alerti = document.getElementById("ouvr_alerti");  

ouvr_alert.onclick = function (params) {
    service_indispo.classList.add("ouvre_indispo");
    commencer_achat.style.display="none";
    corps_du_site.style.display="none";
}
ouvr_alerti.onclick = function (params) {
    service_indispo.classList.add("ouvre_indispo");
    commencer_achat.style.display="none";
    corps_du_site.style.display="block";
}

/*OUVRIT LA PAGE D'ARTICLES*/ 
let page_articles = document.getElementById("page_articles"); 
page_articles.onclick = function (params) {
    document.location.href="town_sport.html"
}


