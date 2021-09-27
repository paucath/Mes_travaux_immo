var aofpanier=[];
var aofcgv=[];
var aofville=[];
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
                    
                console.log("coucou");

                $("#form_vide").html('Votre inscription a bien été prise en compte');
        
                })
                .fail(function (err) {
                    alert('error : ' + err.status);
                })
                .always(function () {
                    console.log('arguments supplier list', arguments);
                })
        }
        else{
            $("#verif_mdp").html('Vos deux mots de passe ne sont pas identique');
        }
    }
    else{
        $("#form_vide").html('Veuillez remplir tout les champs du formulaire');
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


