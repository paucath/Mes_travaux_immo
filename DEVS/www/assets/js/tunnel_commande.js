
// Document ready

$(document).ready(function() {
    var bulle_1=$("#bulle1");
    bulle_1.css("background-color" , "#FF0000");
    $("#Recap_panier").show();
    $("#connexion").hide();
    $("#livraison").hide();
    $("#Paiement").hide();
    $("#CGV").hide();
});

// fonction annulé le payment

function annule(){
    var bulle_1=$("#bulle1");
    bulle_1.css("background-color" , "#FF0000");
    var bulle_2=$("#bulle2");
    bulle_2.css("background-color" , "lightgrey");
    var bulle_3=$("#bulle3");
    bulle_3.css("background-color" , "lightgrey");
    var bulle_4=$("#bulle4");
    bulle_4.css("background-color" , "lightgrey");
    var bulle_5=$("#bulle5");
    bulle_5.css("background-color" , "lightgrey");
    $("#Recap_panier").show();
    $("#connexion").hide();
    $("#livraison").hide();
    $("#Paiement").hide();
    $("#CGV").hide();
}

// fonction validation du panier

function valid_panier(){
    var bulle_1=$("#bulle1");
    bulle_1.css("background-color" , "lightgrey");
    var bulle_2=$("#bulle2");
    bulle_2.css("background-color" , "#FF0000");
    $("#Recap_panier").hide();
    $("#connexion").show();
    $("#livraison").hide();
    $("#Paiement").hide();
    $("#CGV").hide();
}

// fonction validation connexion

function valid_connexion(){
    var bulle_2=$("#bulle2");
    bulle_2.css("background-color" , "lightgrey");
    var bulle_3=$("#bulle3");
    bulle_3.css("background-color" , "#FF0000");
    $("#Recap_panier").hide();
    $("#connexion").hide();
    $("#livraison").show();
    $("#Paiement").hide();
    $("#CGV").hide();
}

// fonction validation livraison

function valid_livraison(){
    var bulle_3=$("#bulle3");
    bulle_3.css("background-color" , "lightgrey");
    var bulle_4=$("#bulle4");
    bulle_4.css("background-color" , "#FF0000");
    $("#Recap_panier").hide();
    $("#connexion").hide();
    $("#livraison").hide();
    $("#Paiement").show();
    $("#CGV").hide();
}

// validation payment

function valid_payment(){
    var bulle_4=$("#bulle4");
    bulle_4.css("background-color" , "lightgrey");
    var bulle_5=$("#bulle5");
    bulle_5.css("background-color" , "#FF0000");
    $("#Recap_panier").hide();
    $("#connexion").hide();
    $("#livraison").hide();
    $("#Paiement").show();
    $("#CGV").hide();
    $("#Recap_panier").hide();
    $("#connexion").hide();
    $("#livraison").hide();
    $("#Paiement").hide();
    $("#CGV").show();
}


