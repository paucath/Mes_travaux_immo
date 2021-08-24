
// Document ready

$(document).ready(function() {
    $("#content_1").show();
    $("#content_2a").hide();
    $("#content_2b").hide();
    $("#content_3").hide();
    $("#content_4").hide();
});

// bouton pour gros oeuvre

function GrosOeuvre(){
    $("#content_1").hide();
    $("#content_2a").show();
    $("#content_2b").hide();
    $("#content_3").hide();
    $("#content_4").hide();
}

// bouton pour petit travaux sur

function PetitsTrav(){
    $("#content_1").hide();
    $("#content_2a").hide();
    $("#content_2b").show();
    $("#content_3").hide();
    $("#content_4").hide();
}

// valide type de gros oeuvre

function valide_type_go() {
    $("#content_1").hide();
    $("#content_2a").hide();
    $("#content_2b").hide();
    $("#content_3").show();
    $("#content_4").hide();
}

// valide type de petits travaux

function valide_type_pt() {
    $("#content_1").hide();
    $("#content_2a").hide();
    $("#content_2b").hide();
    $("#content_3").show();
    $("#content_4").hide();
}

// valide information sup

function valide_infosup(){
    $("#content_1").hide();
    $("#content_2a").hide();
    $("#content_2b").hide();
    $("#content_3").hide();
    $("#content_4").show();
}

