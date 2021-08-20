
// Document ready

$(document).ready(function() {
    $("#content_1").show();
    $("#content_2a").hide();
    $("#content_2b").hide();
    $("#content_3").hide();
    $("#content_4").hide();
});

function GrosOeuvre(){
    $("#content_1").hide();
    $("#content_2a").show();
    $("#content_2b").hide();
    $("#content_3").hide();
    $("#content_4").hide();
}

function PetitsTrav(){
    $("#content_1").hide();
    $("#content_2a").hide();
    $("#content_2b").show();
    $("#content_3").hide();
    $("#content_4").hide();
}

function valide_type_go() {
    $("#content_1").hide();
    $("#content_2a").hide();
    $("#content_2b").hide();
    $("#content_3").show();
    $("#content_4").hide();
}

function valide_type_pt() {
    $("#content_1").hide();
    $("#content_2a").hide();
    $("#content_2b").hide();
    $("#content_3").show();
    $("#content_4").hide();
}

function valide_infosup(){
    $("#content_1").hide();
    $("#content_2a").hide();
    $("#content_2b").hide();
    $("#content_3").hide();
    $("#content_4").show();
}

