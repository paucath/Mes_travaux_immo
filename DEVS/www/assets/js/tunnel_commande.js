var aofpanier=[];
var aofcgv=[];
var aofville=[];
var aoftest=[];
var aoferror=[];
/*
* Document ready
*/
$(document).ready(function() {
    var bulle_1=$("#bulle1");
    bulle_1.css("background-color" , "#FF0000");
    $("#Recap_panier").show();
    $("#inscription").hide();
    $("#Paiement").hide();
    load_panier();
    load_cgv();
    test_inscription();
});

/*
* fonction annulation du paiement
*/
function annule(){
    var bulle_1=$("#bulle1");
    bulle_1.css("background-color" , "#FF0000");
    var bulle_2=$("#bulle2");
    bulle_2.css("background-color" , "lightgrey");
    var bulle_3=$("#bulle3");
    bulle_3.css("background-color" , "lightgrey");
    var bulle_4=$("#bulle4");
    bulle_4.css("background-color" , "lightgrey");
    $("#Recap_panier").show();
    $("#inscription").hide();
    $("#Paiement").hide();
}

/*
* fonction de remplissage du panier
*/
function load_panier() {


	var datas = {
		page: "tunnel_commande_panier_list",
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
			console.log("a", result);


			aofpanier = result[0];
			

			$('#abonnement').html(aofpanier["abonnement"]+"<br><p style='font-size:12px'>"+aofpanier["descriptif"]+"</p>");
			$('#tarif').html(aofpanier["tarif"]);
			$('#tarif_2').html(aofpanier["tarif"]);
            $('#tarif_2').html(aofpanier["tarif"]);
			
		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/*
* fonction de remplissage des CGV du panier
*/
function load_cgv() {


	var datas = {
		page: "tunnel_commande_cgv_list",
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
			console.log("a", result);


			aofcgv = result[0];
			

			$('#cgv').html(aofcgv["CGV"]);
			
			
		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/*
* fonction validation du panier
*/
function valid_panier(){
    var bulle_1=$("#bulle1");
    bulle_1.css("background-color" , "lightgrey");
    var bulle_2=$("#bulle2");
    bulle_2.css("background-color" , "#FF0000");
    $("#Recap_panier").hide();
    $("#inscription").show();
    $("#Paiement").hide();

    

        select_ville();
   
}
/*
*remplissage select ville
*/
function select_ville() {

    var datas = {
        page: "tunnel_commande_select_ville",
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

/*
*construction select ville
*/
function construct_select_ville() {
    var i;

    var sHTML = "";
    sHTML += "<select class='select_ville' id='ville' style='width:100%'>";
    sHTML += "<option value=''>choisir une ville</option>";



    for (i = 0; i < aofville.length; i++) {
        sHTML += "<option value='" + aofville[i]["id_ville"] + "'>" + aofville[i]["ville"] + "---" + aofville[i]["code_ville"] + "</option>";
    }

    sHTML += "</select>";

    $('#select_ville').html(sHTML);
}

/* 
* Envoi d'un nouveau professionnel a la BDD
*/
function test_inscription(){

    var datas = {
        page: "tunnel_commande_test_inscription",
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
            
        console.log("coucou");
        aoftest=result;

        })
        .fail(function (err) {
            alert('error : ' + err.status);
        })
        .always(function () {
            console.log('arguments supplier list', arguments);
        })
}

function test(){

    for(i = 0; i < aoftest.length; i++){
        if (aoftest[i]["login_pro"] == $('#login').val()){
    
            $("#erreur_login").html('Ce login existe déja');
    
        }
        else if (aoftest[i]["siret_pro"] == $('#siret').val()){
    
            $("#erreur_siret").html('Ce siret existe déja');
        }
        else{
            add_pro(); 
        }
    }
}

/* 
* Envoi d'un nouveau professionnel a la BDD
*/
function add_pro(){

    $("#verif_mdp").html('');
    $("#form_vide").html('');


    if(($('#login').val())!="" && ($('#mdp').val())!="" && ($('#societe').val())!="" && ($('#tel').val())!="" && ($('#adresse').val())!="" && ($('#ville').val())!="" && ($('#mail').val())!="" && ($('#siret').val())!="" ){

        if (($('#mdp').val())==($('#mdp_2').val())){
    
            var datas = {
                page: "tunnel_commande_add_pro",
                bJSON: 1,
                login_pro:$('#login').val(),
                mdp_pro:$('#mdp').val(),
                mdp_2_pro:$('#mdp_2').val(),
                societe_pro:$('#societe').val(),
                tel_pro:$('#tel').val(),
                address_pro: $('#adresse').val(),
                id_ville: $('#ville').val(),
                mail_pro:$('#mail').val(),
                siret_pro: $('#siret').val()
                
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
                    
                console.log("coucou", result.aErrors);

                 aoferror=result.aErrors;  
                 
                 console.log(aoferror);
                 
                 if ((result.nb_form_errors)==0){
                     
                     $("#form_vide").html('Votre inscription a bien été prise en compte');
                     setTimeout(function () {
                         $('#form_vide').html("");
                        }, 8000);
                        
                    }
                    
                    affichage_erreur();
               
                })
                .fail(function (err) {
                    alert('error : ' + err.status);
                })
                .always(function () {
                    console.log('arguments supplier list', arguments);
                })
        }
        else{
            $("#verif_mdp_2").html('Vos deux mots de passe ne sont pas identique');
            setTimeout(function () {
                $('#verif_mdp_2').html("");
            }, 8000);
        }
    }
        else{
        $("#form_vide").html('Veuillez remplir tout les champs du formulaire');
        setTimeout(function () {
            $('#form_vide').html("");
        }, 8000);
    }
}

function affichage_erreur(){

    if ((aoferror["address_pro"])==1){
        $("#erreur_adresse").html("Veuillez renseigner l'adresse de votre societe , s'il vous plais");
				setTimeout(function () {
					$('#erreur_adresse').html("");
				}, 8000);
    }

    if ((aoferror["length_address_pro"])==1){
        $("#erreur_adresse").html("Vous avez dépassé le nombre de caractère maximum ");
				setTimeout(function () {
					$('#erreur_adresse').html("");
				}, 8000);
    }

    if ((aoferror["mail_pro"])==1){
        $("#erreur_mail").html("Veuillez renseigner l'email de votre societe, s'il vous plais");
				setTimeout(function () {
					$('#erreur_mail').html("");
				}, 8000);
    }

    if ((aoferror["format_mail_pro"])==1){
        $("#erreur_mail").html("format de mail incorrect");
				setTimeout(function () {
					$('#erreur_mail').html("");
				}, 8000);
    }

    if ((aoferror["length_mail_pro"])==1){
        $("#erreur_mail").html("Vous avez dépassé le nombre de caractère maximum ");
				setTimeout(function () {
					$('#erreur_mail').html("");
				}, 8000);
    }

    if ((aoferror["id_ville"])==1){
        $("#erreur_ville").html("Veuillez renseigner la ville de votre societe s'il vous plais");
				setTimeout(function () {
					$('#erreur_ville').html("");
				}, 8000);
    }

    if ((aoferror["mdp_pro"])==1){
        $("#verif_mdp").html("Veuillez renseigner un mot de passe s'il vous plais");
				setTimeout(function () {
					$('#verif_mdp').html("");
				}, 8000);
    }

    if ((aoferror["length_mdp_pro"])==1){
        $("#verif_mdp").html("Vous avez dépassé le nombre de caractère maximum ");
				setTimeout(function () {
					$('#verif_mdp').html("");
				}, 8000);
    }

    if ((aoferror["mdp_2_pro"])==1){
        $("#verif_mdp_2").html("Veuillez renseigner le mot de passe de vérification s'il vous plais");
				setTimeout(function () {
					$('#verif_mdp_2').html("");
				}, 8000);
    }

    if ((aoferror["mdp_coherence"])==1){
        $("#verif_mdp_2").html("Les deux mots de passe ne sont pas identique");
				setTimeout(function () {
					$('#verif_mdp_2').html("");
				}, 8000);
    }

    if ((aoferror["login_pro"])==1){
        $("#erreur_login").html("Veuillez renseigner un login s'il vous plais");
				setTimeout(function () {
					$('#erreur_login').html("");
				}, 8000);
    }

    if ((aoferror["length_login_pro"])==1){
        $("#erreur_login").html("Vous avez dépassé le nombre de caractère maximum ");
				setTimeout(function () {
					$('#erreur_login').html("");
				}, 8000);
    }

    if ((aoferror["tel_pro"])==1){
        $("#erreur_tel").html("Veuillez renseigner le numero de telephone de votre societe s'il vous plais");
				setTimeout(function () {
					$('#erreur_tel').html("");
				}, 8000);
    }

    if ((aoferror["length_tel_pro"])==1){
        $("#erreur_tel").html("Vous avez dépassé le nombre de caractère maximum ");
				setTimeout(function () {
					$('#erreur_tel').html("");
				}, 8000);
    }

    if ((aoferror["siret_pro"])==1){
        $("#erreur_siret").html("Veuillez renseigner le numero de siret de votre societe s'il vous plais");
				setTimeout(function () {
					$('#erreur_siret').html("");
				}, 8000);
    }

    if ((aoferror["length_siret_pro"])==1){
        $("#erreur_siret").html("Vous avez dépassé le nombre de caractère maximum ");
				setTimeout(function () {
					$('#erreur_siret').html("");
				}, 8000);
    }

    if ((aoferror["societe_pro"])==1){
        $("#erreur_societe").html("Veuillez renseigner le nom de votre societe s'il vous plais");
				setTimeout(function () {
					$('#erreur_societe').html("");
				}, 8000);
    }

    if ((aoferror["length_societe_pro"])==1){
        $("#erreur_societe").html("Vous avez dépassé le nombre de caractère maximum ");
				setTimeout(function () {
					$('#erreur_societe').html("");
				}, 8000);
    }
}
/*
* fonction validation de l'inscription
*/
function valid_inscription(){
    var bulle_2=$("#bulle2");
    bulle_2.css("background-color" , "lightgrey");
    var bulle_3=$("#bulle3");
    bulle_3.css("background-color" , "#FF0000");
    $("#Recap_panier").hide();
    $("#inscription").hide();
    $("#Paiement").show();
}
