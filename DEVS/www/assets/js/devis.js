var aofville = [];
var aofcategorie = [];
var aofsouscategorie = [];
var aofsouscategorie_tri = [];
var indice;
var id_sous_categorie;
/*
*Document ready
*/
$(document).ready(function () {
    $("#content_1").show();
    $("#content_2").hide();
    $("#nbr_piece").hide();
    $("#m_carre").hide();
    $("#nbr_piece_label").hide();
    $("#m_carre_label").hide();
    $("#sous_cat_label").hide();

    select_categorie();
    select_ville();
    select_souscategorie();

    $("#detail").summernote();
});

/*
*Remplir le select ville
*/
function select_categorie() {

    var datas = {
        page: "devis_select_categorie",
        bJSON: 1
    }

    $.ajax({
        type: "POST",
        url: "route.php",
        async: true,
        data: datas,
        dataType: "json",
        cache: false
    })
        .done(function (result) {
            console.log("result", result);


            aofcategorie = result;


            construct_select_categorie();

        })
        .fail(function (err) {
            alert('error : ' + err.status);
        })
        .always(function () {
            console.log('arguments supplier list', arguments);
        })
}

function construct_select_categorie() {
    var i;

    var sHTML = "";
    sHTML += "<select class='select_cat' id='select_cat' style='width:50%' onchange='tri_sous_cat(this.value)'>";
    sHTML += "<option value=''>choisir une categorie</option>";



    for (i = 0; i < aofcategorie.length; i++) {
        sHTML += "<option   value='" + aofcategorie[i]["id_categorie"] + "'>" + aofcategorie[i]["categorie"] + "</option>";
    }

    sHTML += "</select>";

    $('#select_cat').html(sHTML);
}

/*
*Remplir le select ville
*/
function select_souscategorie() {

    var datas = {
        page: "devis_select_souscategorie",
        bJSON: 1
    }

    $.ajax({
        type: "POST",
        url: "route.php",
        async: true,
        data: datas,
        dataType: "json",
        cache: false
    })
        .done(function (result) {
            console.log("result", result);


            aofsouscategorie = result;



        })
        .fail(function (err) {
            alert('error : ' + err.status);
        })
        .always(function () {
            console.log('arguments supplier list', arguments);
        })
}

function tri_sous_cat(value) {

    aofsouscategorie_tri=[];

    for (var i = 0; i < aofsouscategorie.length; i++) {

        if (aofsouscategorie[i]["id_categorie"] == value) {

            aofsouscategorie_tri.push(aofsouscategorie[i]);
        }
    }
    
    construct_select_souscategorie()
    $("#nbr_piece_label").hide();
    $("#nbr_piece").hide();
    $("#m_carre_label").hide();
    $("#m_carre").hide();
}

function construct_select_souscategorie() {
    var i;

    var sHTML = "";
    sHTML += "<select class='select_cat' id='select_cat' style='width:50%' onchange='surface(this.value)'>";
    sHTML += "<option value=''>choisir une sous categorie</option>";



    for (i = 0; i < aofsouscategorie_tri.length; i++) {
        sHTML += "<option value='" + i + "'>" + aofsouscategorie_tri[i]["sous_categorie"] + "</option>";
    }

    sHTML += "</select>";

    $('#select_souscat').html(sHTML);
    $("#sous_cat_label").show();
}

function surface(value){

    indice=value;
    id_sous_categorie=aofsouscategorie_tri[indice]["id_sous_categorie"];

    if (aofsouscategorie_tri[indice]["nbr_piece"]==1){
        $("#nbr_piece_label").show();
        $("#nbr_piece").show();
    }
    else if(aofsouscategorie_tri[indice]["m_carre"]==1){
        $("#m_carre_label").show();
        $("#m_carre").show();
    }
    else {
        $("#nbr_piece_label").hide();
        $("#nbr_piece").hide();
        $("#m_carre_label").hide();
        $("#m_carre").hide();
    }



}

/*
*Remplir le select ville
*/
function select_ville() {

    var datas = {
        page: "devis_select_ville",
        bJSON: 1
    }

    $.ajax({
        type: "POST",
        url: "route.php",
        async: true,
        data: datas,
        dataType: "json",
        cache: false
    })
        .done(function (result) {
            console.log("result", result);


            aofville = result;


            construct_select_ville();

        })
        .fail(function (err) {
            alert('error : ' + err.status);
        })
        .always(function () {
            console.log('arguments supplier list', arguments);
        })
}

function construct_select_ville() {
    var i;

    var sHTML = "";
    sHTML += "<select class='select_ville' id='select_ville' style='width:50%'>";
    sHTML += "<option value=''>choisir une ville</option>";



    for (i = 0; i < aofville.length; i++) {
        sHTML += "<option value='" + aofville[i]["id_ville"] + "'>" + aofville[i]["ville"] + "---" + aofville[i]["code_ville"] + "</option>";
    }

    sHTML += "</select>";

    $('#ville').html(sHTML);
}

/*
*validation des coordonnées
*/
function valide_devis() {
    $("#content_1").hide();
    $("#content_2").show();
}

/*
*Validation du devis
*/
function valide_total() {

}
