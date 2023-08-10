




let btn_im_1 =document.getElementById("btn_im_1");
let btn_im_2 =document.getElementById("btn_im_2");
let btn_im_3 =document.getElementById("btn_im_3");
let btn_im_4 =document.getElementById("btn_im_4");
let mes_produits =document.getElementById("mes_produits");
let cart_ordi =document.getElementById("cart_ordi");
let tete_du_site =document.getElementById("tete_du_site");
let phone_ensemble_cart =document.getElementById("phone_ensemble_cart");
let panier =document.getElementById("panier");
let btn_valider_achats =document.getElementById("btn_valider_achats");
let btn_annuler_achat =document.getElementById("btn_annuler_achat");
let articles =document.getElementById("articles");
let body =document.getElementById("body");
let image_article =document.getElementById("image_article");
let nom_de_article = document.getElementById("nom_de_article");
let prix_article = document.getElementById("prix_article");









































btn_annuler_achat.onclick = function (params) {
    panier.style.display = "none"
    mes_produits.style.display = "block";
    cart_ordi.style.display = "block";
    articles.style.display = "block";
    tete_du_site.style.display = "block";
    body.style.background = "white"
    document.location.reload();
}