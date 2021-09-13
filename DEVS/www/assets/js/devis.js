var aofville = [];
var aofcategorie = [];
var aofsouscategorie = [];
var aofsouscategorie_tri = [];
var indice;
var id_sous_categorie;
var id_categorie;
var surface;
var details;
var aofclient=[];
var id_client="";
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
    $("#final").hide();
    


    select_categorie();
    select_ville();
    select_souscategorie();

    $("#detail").summernote();
});

/*
*Remplir le select categorie
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
    sHTML += "<select class='input_select_cat' id='input_select_cat' style='width:50%' onchange='tri_sous_cat(this.value)'>";
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

    aofsouscategorie_tri = [];

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
    sHTML += "<select class='select_sous_cat' id='select_sous_cat' style='width:50%' onchange='recup_surface(this.value)'>";
    sHTML += "<option value=''>choisir une sous categorie</option>";



    for (i = 0; i < aofsouscategorie_tri.length; i++) {
        sHTML += "<option value='" + i + "'>" + aofsouscategorie_tri[i]["sous_categorie"] + "</option>";
    }

    sHTML += "</select>";

    $('#select_souscat').html(sHTML);
    $("#sous_cat_label").show();
    $("#text_details").show();
}

function recup_surface(value) {


    $("#nbr_piece_label").hide();
    $("#nbr_piece").hide();
    $("#m_carre_label").hide();
    $("#m_carre").hide();

    indice = value;
    id_sous_categorie = aofsouscategorie_tri[indice]["id_sous_categorie"];

    if (aofsouscategorie_tri[indice]["nbr_piece"] == 1) {
        $("#nbr_piece_label").show();
        $("#nbr_piece").show();
    }
    else if (aofsouscategorie_tri[indice]["m_carre"] == 1) {
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
/*
*validation des coordonnées
*/
function valide_devis() {

    if (($('#input_select_cat').val() != "") & ($('#select_sous_cat').val() != "")) {

        id_categorie = $('#input_select_cat').val();
        details = $('#detail').val();

        if ($('#nbr_piece').val() != 0) {

            surface = $('#nbr_piece').val();
        }
        else {
            surface = $('#m_carre').val();
        }

        $("#content_1").hide();
        $("#content_2").show();
    }
    else{
        $('#erreur').html("veuillez remplir touts les champs du devis");
    }
}

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

function list_client() {

    var datas = {
        page: "devis_list_client",
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

            aofclient = result;
            verif_client();

        })
        .fail(function (err) {
            alert('error : ' + err.status);
        })
        .always(function () {
            console.log('arguments supplier list', arguments);
        })
}

function verif_client(){

    console.log(aofclient.length);
    for(i = 0; i < aofclient.length; i++) {

        var prenom=$('#prenom').val();
        var nom=$('#nom').val();
        console.log(aofclient[i]["prenom_client"]);
        console.log(aofclient[i]["nom_client"]);

        if (((aofclient[i]["prenom_client"])==prenom)&((aofclient[i]["nom_client"])==nom)){
            
            id_client=aofclient[i]["id_client"];
            $("#final").show();
            $("#coordonnee").hide();
        }
       
    }
    console.log(id_client , "id_client");
    
    if(id_client==""){

        add_client();

    }
    
}

function add_client() {

    var datas = {
        page: "devis_add_client",
        bJSON: 1,
        id_ville:$('#select_ville').val(),
        prenom_client:$('#prenom').val(),
        nom_client:$('#nom').val(),
        tel_client: $('#telephone').val(),
        address_client: $('#adresse').val(),
        mail_client:$('#email').val()

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

           
            list_client();

        })
        .fail(function (err) {
            alert('error : ' + err.status);
        })
        .always(function () {
            console.log('arguments supplier list', arguments);
        })
}

function add_devis() {

    var datas = {
        page: "devis_add_devis",
        bJSON: 1,
        id_client:id_client,
        id_categorie:id_categorie,
        id_sous_categorie:id_sous_categorie,
        surface:surface,
        details:details

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

            $('#envoye').html("votre devis a bien été enregistré");
            

        })
        .fail(function (err) {
            alert('error : ' + err.status);
        })
        .always(function () {
            console.log('arguments supplier list', arguments);
        })
}

/*
*Validation du devis
*/
function valide_coordonnee() {

    list_client();
}

/*
*Validation du devis
*/
function valide_total() {

    add_devis();
}
