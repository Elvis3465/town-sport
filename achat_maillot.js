













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
let btn_annuler_achat_phone =document.getElementById("btn_annuler_achat_phone");
let articles =document.getElementById("articles");
let body =document.getElementById("body");
let image_article =document.getElementById("image_article");
let sal =document.getElementById("sal");
let loader =document.getElementById("loader");
let quantite =document.getElementById("quantite");
let contact =document.getElementById("contact");
let achta_effectuer =document.getElementById("achta_effectuer");
let ecris_loader =document.getElementById("ecris_loader");
let btn_effectuer =document.getElementById("btn_effectuer");
let btn_effectuer_phone =document.getElementById("btn_effectuer_phone");
let taille =document.getElementsByName("taille");






let real =document.getElementById("real");
let mu =document.getElementById("mu");
let ci =document.getElementById("ci");
let barca =document.getElementById("barca");
let bayern_m =document.getElementById("bayern_m");
let chelsea =document.getElementById("chelsea");
let arsenal =document.getElementById("arsenal");
let psg =document.getElementById("psg");


let nom_de_article = document.getElementById("nom_de_article");
let prix_article = document.getElementById("prix_article");


/*loader valider */ 
quantite.addEventListener('input', function (params) {
    btn_valider_achats.onclick = function (params) {
        if (quantite.value.length > 0 && contact.value.length == 10  ) {

            loader.style.display = "block"
            panier.style.display ="none";
            body.style.background = "white"
            
            setTimeout(function (params) {
                loader.classList.add("ouvre_loader");
                achta_effectuer.style.display = "block";
                ecris_loader.style.display ="none"
            },6000);

        }
    }
})







/*effectuer ordinateur*/ 
btn_effectuer.onclick = function (params) {
    panier.style.display = "none";
    mes_produits.style.display = "block";
    cart_ordi.style.display = "block";
    articles.style.display = "block";
    tete_du_site.style.display = "block";
    loader.classList.remove("ouvre_loader");
    loader.style.display = "none"
    ecris_loader.style.display = "block"
    achta_effectuer.style.display = "none";
    document.location.reload();

}
/*effectuer telephone*/ 
btn_effectuer_phone.onclick = function (params) {
    panier.style.display = "none";
    mes_produits.style.display = "block";
    phone_ensemble_cart.style.display = "block";
    articles.style.display = "block";
    tete_du_site.style.display = "block";
    loader.classList.remove("ouvre_loader");
    loader.style.display = "none"
    ecris_loader.style.display = "block"
    achta_effectuer.style.display = "none";
    document.location.reload();

}



real.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat= "no-repeat";
    body.style.backgroundPosition = "center";
    body.style.width = "100%";
    body.style.height = "100VH";
    sal.style.display = "block";

    btn_im_1.onclick = function (params) {
        image_article.src = "image_maillots/RGJ.jpg";
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_maillots/RKM.jpg";
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_maillots/BHYJ.jpg";
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_maillots/SFG.jpg";
    }
    nom_de_article.innerHTML = "Réal madrid";
    prix_article.innerHTML = "10 OOO xof";
    image_article.src = "image_maillots/RGJ.jpg";
    
}



mu.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%";
    body.style.height = "100VH";
    sal.style.display = "block";


    btn_im_1.onclick = function (params) {
        image_article.src = "image_maillots/THNM.jpg"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_maillots/FHNHU.jpg"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_maillots/FBY.jpg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_maillots/BFB.jpg"
    }
    nom_de_article.innerHTML = "Manchester united ";
    prix_article.innerHTML = "10 OOO xof"
    image_article.src = "image_maillots/THNM.jpg";
       
}




ci.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"
    sal.style.display = "block";

    btn_im_1.onclick = function (params) {
        image_article.src = "image_maillots/ju.jpg"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image/e.jpg"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image/khh.jpg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_maillots/trt.webp"
    }
    nom_de_article.innerHTML = "Côte d'ivoire";
    prix_article.innerHTML = "10 OOO xof"
    image_article.src = "image_maillots/ju.jpg";
       
}



barca.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"
    sal.style.display = "block";

    btn_im_1.onclick = function (params) {
        image_article.src = "image_maillots/EVRH.jpg"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_maillots/NBH.jpg"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_maillots/JJYI.jpg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_maillots/RTY.jpg"
    }
    nom_de_article.innerHTML = "Fc Barcelone";
    prix_article.innerHTML = "10 OOO xof"
    image_article.src = "image_maillots/EVRH.jpg";
       
}



bayern_m.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"
    sal.style.display = "block";

    btn_im_1.onclick = function (params) {
        image_article.src = "image_maillots/BY.jpg"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_maillots/YUU.jpg"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_maillots/BTYU.jpg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_maillots/6UTJ.jpg"
    }
    nom_de_article.innerHTML = "Fc Bayern mûchen";
    prix_article.innerHTML = "10 OOO xof"
    image_article.src = "image_maillots/BY.jpg";
       
}




chelsea.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"
    sal.style.display = "block";

    btn_im_1.onclick = function (params) {
        image_article.src = "image_maillots/VY.jpg"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_maillots/OUY.jpg"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_maillots/JHG.jpg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_maillots/GR.jpg"
    }
    nom_de_article.innerHTML = "Chelsea Fc";
    prix_article.innerHTML = "10 OOO xof"
    image_article.src = "image_maillots/VY.jpg";
       
}

arsenal.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"
    sal.style.display = "block";

    btn_im_1.onclick = function (params) {
        image_article.src = "image_maillots/GREGRE.jpg"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_maillots/EFGR.jpg"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_maillots/TRHTYJ.jpg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_maillots/TRRTH.jpg"
    }
    nom_de_article.innerHTML = "Arsenal";
    prix_article.innerHTML = "10 OOO xof"
    image_article.src = "image_maillots/GREGRE.jpg";
       
}


psg.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"
    sal.style.display = "block";

    btn_im_1.onclick = function (params) {
        image_article.src = "image_maillots/SGHG.jpg"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_maillots/GGHHY.jpg"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_maillots/OJHG.jpg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_maillots/DSTYJ.jpg"
    }
    nom_de_article.innerHTML = "Paris saint germain";
    prix_article.innerHTML = "10 OOO xof"
    image_article.src = "image_maillots/SGHG.jpg";
       
}



/*BOUTON ANNULER ACHAT*/ 

btn_annuler_achat.onclick = function (params) {
    panier.style.display = "none"
    mes_produits.style.display = "block";
    cart_ordi.style.display = "block";
    articles.style.display = "block";
    tete_du_site.style.display = "block";
    body.style.background = "white"
    btn_im_2.style.display = "block"
    btn_im_3.style.display = "block"
    btn_im_4.style.display = "block"
}
btn_annuler_achat_phone.onclick = function (params) {
    panier.style.display = "none"
    mes_produits.style.display = "block";
    articles.style.display = "block";
    phone_ensemble_cart.style.display = "block";
    tete_du_site.style.display = "block";
    body.style.background = "white"
    btn_im_2.style.display = "block"
    btn_im_3.style.display = "block"
    btn_im_4.style.display = "block"
}







/*SURVETEMENT*/ 

let s_1 = document.getElementById("s_1");
let s_2 = document.getElementById("s_2");
let s_3 = document.getElementById("s_3");
let s_4 = document.getElementById("s_4");
let s_5 = document.getElementById("s_5");
let s_6 = document.getElementById("s_6");
let s_7 = document.getElementById("s_7");
let s_8 = document.getElementById("s_8");





s_1.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_survetement/j.webp"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_survetement/er.webp"
    }
    nom_de_article.innerHTML = "Survetement";
    prix_article.innerHTML = "30 OOO xof"
    image_article.src = "image_survetement/j.webp";
    sal.style.display = "none";
    btn_im_3.style.display = "none"
    btn_im_4.style.display = "none"
       
}


s_2.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_survetement/t.webp"
    }
    btn_im_2.style.display = "none"
    nom_de_article.innerHTML = "Survetement";
    prix_article.innerHTML = "30 OOO xof"
    image_article.src = "image_survetement/t.webp";
    sal.style.display = "none";
    btn_im_3.style.display = "none"
    btn_im_4.style.display = "none"
       
}


s_3.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_survetement/cs.webp"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_survetement/jk.webp"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_survetement/g.jpeg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_survetement/u.jpeg"
    }
    nom_de_article.innerHTML = "Survetement";
    prix_article.innerHTML = "30 OOO xof"
    image_article.src = "image_survetement/cs.webp";
    sal.style.display = "none";
       
}


s_4.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_survetement/o.webp"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_survetement/f.webp"
    }
    btn_im_3.style.display = "none"
    btn_im_4.style.display = "none"
    nom_de_article.innerHTML = "Survetement";
    prix_article.innerHTML = "30 OOO xof"
    image_article.src = "image_survetement/o.webp";
    sal.style.display = "none";
       
}


s_5.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_survetement/d.webp"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_survetement/ry.webp"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_survetement/gf.jpeg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_survetement/gy.webp"
    }
    nom_de_article.innerHTML = "Survetement";
    prix_article.innerHTML = "30 OOO xof"
    image_article.src = "image_survetement/d.webp";
    sal.style.display = "none";
       
}


s_6.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_survetement/bk.webp"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_survetement/gyhj.webp"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_survetement/et.jpeg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_survetement/rd.webp"
    }
    nom_de_article.innerHTML = "Survetement";
    prix_article.innerHTML = "30 OOO xof"
    image_article.src = "image_survetement/bk.webp";
    sal.style.display = "none";
       
}



s_7.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_survetement/rez.webp"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_survetement/csk.webp"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_survetement/vc.webp"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_survetement/ze.webp"
    }
    nom_de_article.innerHTML = "Survetement";
    prix_article.innerHTML = "30 OOO xof"
    image_article.src = "image_survetement/rez.webp";
    sal.style.display = "none";
       
}


s_8.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_survetement/u,n.webp"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_survetement/ber.webp"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_survetement/bre.jpeg"
    }
    btn_im_4.style.display = "none"
    nom_de_article.innerHTML = "Survetement";
    prix_article.innerHTML = "30 OOO xof"
    image_article.src = "image_survetement/u,n.webp";
    sal.style.display = "none";
       
}



/*chaussures */
let c_1 = document.getElementById("c_1");
let c_2 = document.getElementById("c_2");
let c_3 = document.getElementById("c_3");
let c_4 = document.getElementById("c_4");
let c_5 = document.getElementById("c_5");
let c_6 = document.getElementById("c_6");
let c_7 = document.getElementById("c_7");
let c_8 = document.getElementById("c_8"); 



c_1.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_chaussures/EEDTT.jpeg"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_chaussures/YYDED.jpeg"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_chaussures/HJKK.jpeg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_chaussures/DGTH.jpeg"
    }
    nom_de_article.innerHTML = "Nike Air Max Tailwind V";
    prix_article.innerHTML = "26 OOO xof"
    image_article.src = "image_chaussures/EEDTT.jpeg";
    sal.style.display = "none";
       
}


c_2.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_chaussures/fttfg.jpeg"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_chaussures/ilhg.jpeg"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_chaussures/tfth.jpeg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_chaussures/ilhg.jpeg"
    }
    nom_de_article.innerHTML = "homme Air Jordan 1 High";
    prix_article.innerHTML = "26 OOO xof"
    image_article.src = "image_chaussures/fttfg.jpeg";
    sal.style.display = "none";
       
}



c_3.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_chaussures/crer.jpeg"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_chaussures/edef.jpeg"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_chaussures/vfr.jpeg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_chaussures/vfe.jpeg"
    }
    nom_de_article.innerHTML = "Air Jordan 4 Retro Levi's Black";
    prix_article.innerHTML = "26 OOO xof"
    image_article.src = "image_chaussures/crer.jpeg";
    sal.style.display = "none";
       
}

c_4.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_chaussures/ss.webp"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_chaussures/j.jpeg"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_chaussures/D.jpeg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_chaussures/LPL.jpeg"
    }
    nom_de_article.innerHTML = "Nike Baskets Air Max 97";
    prix_article.innerHTML = "26 OOO xof"
    image_article.src = "image_chaussures/ss.webp";
    sal.style.display = "none";
       
}

c_5.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_chaussures/s-l500 (3).jpg"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_chaussures/RRTR.jpeg"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_chaussures/FREFR.jpeg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_chaussures/ZEZ.jpeg"
    }
    nom_de_article.innerHTML = "adidas Originals YEEZY Boost 350";
    prix_article.innerHTML = "26 OOO xof"
    image_article.src = "image_chaussures/s-l500 (3).jpg";
    sal.style.display = "none";
       
}



c_6.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_chaussures/tnf.webp"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_chaussures/ezr.jpeg"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_chaussures/sse.jpeg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_chaussures/exde.jpeg"
    }
    nom_de_article.innerHTML = "NIKE Air Max TN QS";
    prix_article.innerHTML = "26 OOO xof"
    image_article.src = "image_chaussures/tnf.webp";
    sal.style.display = "none";
       
}


c_7.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_chaussures/NKH.jpg"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_chaussures/zggd.jpeg"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_chaussures/ssde.jpeg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_chaussures/zse.jpeg"
    }
    nom_de_article.innerHTML = "Nike Dunk Low Scrap Archeo Brown";
    prix_article.innerHTML = "26 OOO xof"
    image_article.src = "image_chaussures/NKH.jpg";
    sal.style.display = "none";
       
}


c_8.onclick = function (params) {
    panier.style.display = "block";
    mes_produits.style.display = "none";
    cart_ordi.style.display = "none";
    phone_ensemble_cart.style.display = "none";
    articles.style.display = "none";
    tete_du_site.style.display = "none";
    body.style.background = "orange"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat= "no-repeat"
    body.style.backgroundPosition = "center"
    body.style.width = "100%"
    body.style.height = "100VH"

    btn_im_1.onclick = function (params) {
        image_article.src = "image_chaussures/ejje.jpg"
    }
    btn_im_2.onclick = function (params) {
        image_article.src = "image_chaussures/NTRR.jpeg"
    }
    btn_im_3.onclick = function (params) {
        image_article.src = "image_chaussures/HHE.jpeg"
    }
    btn_im_4.onclick = function (params) {
        image_article.src = "image_chaussures/HGF.jpeg"
    }
    nom_de_article.innerHTML = "Air Jordan 5 DJ Khaled";
    prix_article.innerHTML = "26 OOO xof"
    image_article.src = "image_chaussures/ejje.jpg";
    sal.style.display = "none";
       
}



