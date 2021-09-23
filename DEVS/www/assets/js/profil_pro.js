var table_projet_dispo;
var table_projet_valide;
var aoffacture = [];
var aofprofil = [];
var aofprofil_maj = [];
var aofproj_acc = [];
var aofcategorie = [];
var aofville = [];
var aofproj = [];
var id_pro_connect = 1;
var tables_2;
var tables;
var modal;
var nbr_projet = [];

// document ready
$(document).ready(function () {

	load_facture();
	load_profil();
	load_projet_accepte();
	select_categorie();
	select_ville();
	load_projet_disponible();

});

// ****************************************PROJETS DISPONIBLES**********************************************************

/*
* Récupération des projet disponible pour le professionnel dans la BDD
*/
function load_projet_disponible() {

	var datas = {
		page: "profil_pro_projet_disponible",
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

			aofproj = result;

			if (aofprofil["statut_ab"] == 1) {

				constructTable();
			}

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/*
* construction de la datatable projet dispo
*/
function constructTable() {
	var i;

	var sHTML = "";
	sHTML += "<thead>";
	sHTML += "<tr>";
	sHTML += "<td>Categorie</td>";
	sHTML += "<td>Sous categorie</td>";
	sHTML += "<td>surface</td>";
	sHTML += "<td>Nombre de pièce</td>";
	sHTML += "<td>m²</td>";
	sHTML += "<td>Ville</td>";
	sHTML += "<td>Accepter</td>";
	sHTML += "</tr>";
	sHTML += "</thead>";
	sHTML += "<tbody>";



	for (i = 0; i < aofproj.length; i++) {

		if (aofproj[i]["nbr_piece"] == 0) {

			aofproj[i]["nbr_piece"] = "NON";

		}
		else {

			aofproj[i]["nbr_piece"] = "OUI";

		}

		if (aofproj[i]["m_carre"] == 0) {

			aofproj[i]["m_carre"] = "NON";

		}
		else {

			aofproj[i]["m_carre"] = "OUI";

		}

		sHTML += "<tr>";
		sHTML += "<td>" + aofproj[i]["categorie"] + "</td>";
		sHTML += "<td>" + aofproj[i]["sous_categorie"] + "</td>";
		sHTML += "<td>" + aofproj[i]["surface"] + "</td>";
		sHTML += "<td>" + aofproj[i]["nbr_piece"] + "</td>";
		sHTML += "<td>" + aofproj[i]["m_carre"] + "</td>";
		sHTML += "<td>" + aofproj[i]["ville"] + "</td>";
		sHTML += "<td><button class='valide' onclick='accepter_projet(" + i + ")'>OK</button></td>";
		sHTML += "</tr>";
	}

	sHTML += "</tbody>";
	$('#table_projet_dispo').html(sHTML);
	tables = $('#table_projet_dispo').DataTable(configuration);
}

// CONFIGURATION DATATABLE
const configuration = {
	"stateSave": false,
	"order": [[1, "asc"]],
	"pagingType": "simple_numbers",
	"searching": true,
	"lengthMenu": [[10, 25, 50, 100, -1], ["Dix", "Vingt cinq", "Cinquante", "Cent", "total"]],
	"language": {
		"info": "Projets _START_ à _END_ sur _TOTAL_ sélectionnées",
		"emptyTable": "Aucun Projet",
		"lengthMenu": "_MENU_ Projets par page",
		"search": "Rechercher : ",
		"zeroRecords": "Aucun résultat de recherche",
		"paginate": {
			"previous": "Précédent",
			"next": "Suivant"
		},
		"sInfoFiltered": "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
		"sInfoEmpty": "Projets 0 à 0 sur 0 sélectionnée",
	},
	"responsive": true,
	"columns": [
		{
			"orderable": true
		},
		{
			"orderable": true
		},
		{
			"orderable": true
		},
		{
			"orderable": true
		},
		{
			"orderable": true
		},
		{
			"orderable": true
		},
		{
			"orderable": false
		}
	],
	'retrieve': true
};

/*
*Remplir le select categorie
*/
function select_categorie() {

	var datas = {
		page: "profil_pro_select_categorie",
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

/*
*construire le select categorie
*/
function construct_select_categorie() {
	var i;

	var sHTML = "";
	sHTML += "<select class='input_select_cat' id='input_select_cat' style='width:100%' >";
	sHTML += "<option value=''>choisir une categorie</option>";



	for (i = 0; i < aofcategorie.length; i++) {
		sHTML += "<option   value='" + aofcategorie[i]["id_categorie"] + "'>" + aofcategorie[i]["categorie"] + "</option>";
	}

	sHTML += "</select>";

	$('#select_categorie').html(sHTML);
}

/*
*remplissage select ville
*/
function select_ville() {

	var datas = {
		page: "profil_pro_select_ville",
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
	sHTML += "<option value=''>Séléctionner une nouvelle ville</option>";



	for (i = 0; i < aofville.length; i++) {
		sHTML += "<option value='" + aofville[i]["id_ville"] + "'>" + aofville[i]["ville"] + "---" + aofville[i]["code_ville"] + "</option>";
	}

	sHTML += "</select>";

	$('#select_ville').html(sHTML);
}

/* 
* Accepter projet
*/
function accepter_projet(iIndiceAccepte) {

	var mois = parseInt(moment().format('MM'));
	var annee = parseInt(moment().format('YYYY'));

	var datas = {
		page: "profil_pro_nbr_projet",
		bJSON: 1,
		id_pro: id_pro_connect,
		mois: mois,
		annee: annee
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

			nbr_projet = result;
			console.log(nbr_projet[0]["nbr_projet"]);

			if ((nbr_projet[0]["nbr_projet"]) == 1 || (nbr_projet[0]["nbr_projet"]) == 0) {

				var datas = {
					page: "profil_pro_accepter_projet",
					bJSON: 1,
					id_pro: id_pro_connect,
					num_projet: aofproj[iIndiceAccepte]["num_projet"],
					id_client: aofproj[iIndiceAccepte]["id_client"],
					id_categorie: aofproj[iIndiceAccepte]["id_categorie"],
					id_sous_categorie: aofproj[iIndiceAccepte]["id_sous_categorie"],
					surface: aofproj[iIndiceAccepte]["surface"],
					details: aofproj[iIndiceAccepte]["details"],
					date_creation: aofproj[iIndiceAccepte]["date_creation"]

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

						load_projet_accepte();
						load_projet_disponible();

					})
					.fail(function (err) {
						alert('error : ' + err.status);
					})
					.always(function () {
						console.log('arguments supplier list', arguments);
					})
			}
			else {
				$("#refus_projet").html("vous avez atteint le nombre maximal de projet accepté ce mois-ci");
				setTimeout(function () {
					$('#refus_projet').html("");
				}, 8000);
				
			}

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})


}



// ****************************************PROJETS Accepté***************************************************************

/*
* Récupération des projet accepté par le professionnel dans la BDD
*/
function load_projet_accepte() {

	var datas = {
		page: "profil_pro_projet_accepte",
		bJSON: 1,
		id_pro: id_pro_connect
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

			aofproj_acc = result;

			constructTable_valide();

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/*
* Construction de la datatable projet accepté
*/
function constructTable_valide() {
	var i;

	var sHTML = "";
	sHTML += "<thead>";
	sHTML += "<tr>";
	sHTML += "<td>Catégories</td>";
	sHTML += "<td>Sous Catégorie</td>";
	sHTML += "<td>surface</td>";
	sHTML += "<td>nombre de pièce</td>";
	sHTML += "<td>nombre de m²</td>";
	sHTML += "<td></td>";
	sHTML += "</tr>";
	sHTML += "</thead>";
	sHTML += "<tbody>";

	for (i = 0; i < aofproj_acc.length; i++) {

		if (aofproj_acc[i]["nbr_piece"] == 0) {

			aofproj_acc[i]["nbr_piece"] = "NON";

		}
		else {

			aofproj_acc[i]["nbr_piece"] = "OUI";

		}

		if (aofproj_acc[i]["m_carre"] == 0) {

			aofproj_acc[i]["m_carre"] = "NON";

		}
		else {

			aofproj_acc[i]["m_carre"] = "OUI";

		}



		sHTML += "<tr>";
		sHTML += "<td>" + aofproj_acc[i]["categorie"] + "</td>";
		sHTML += "<td>" + aofproj_acc[i]["sous_categorie"] + "</td>";
		sHTML += "<td>" + aofproj_acc[i]["surface"] + "</td>";
		sHTML += "<td>" + aofproj_acc[i]["nbr_piece"] + "</td>";
		sHTML += "<td>" + aofproj_acc[i]["m_carre"] + "</td>";
		sHTML += "<td><button  class='valide'  data-toggle='modal' data-target='#Modal' onclick='contenu_modal(" + i + ")'>Détails</button></td>";
		sHTML += "</tr>";

	}

	sHTML += "</tbody>";
	$('#table_projet_valide').html(sHTML);
	tables_2 = $('#table_projet_valide').DataTable(configuration_valide);
}

// CONFIGURATION DATATABLE
const configuration_valide = {
	"stateSave": false,
	"order": [[1, "asc"]],
	"pagingType": "simple_numbers",
	"searching": true,
	"lengthMenu": [[10, 25, 50, 100, -1], ["Dix", "Vingt cinq", "Cinquante", "Cent", "total"]],
	"language": {
		"info": "Projet _START_ à _END_ sur _TOTAL_ sélectionnées",
		"emptyTable": "Aucun projets",
		"lengthMenu": "_MENU_ Projets par page",
		"search": "Rechercher : ",
		"zeroRecords": "Aucun résultat de recherche",
		"paginate": {
			"previous": "Précédent",
			"next": "Suivant"
		},
		"sInfoFiltered": "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
		"sInfoEmpty": "Projets 0 à 0 sur 0 sélectionnée",
	},
	"responsive": true,
	"columns": [
		{
			"orderable": true
		},
		{
			"orderable": true
		},
		{
			"orderable": true
		},
		{
			"orderable": true
		},
		{
			"orderable": false
		},
		{
			"orderable": false
		}
	],
	'retrieve': true
};

/*
* Signaler la fin d'un projet
*/
function terminer_projet(iIndiceTermine) {
	var datas = {
		page: "profil_pro_terminer_projet",
		bJSON: 1,
		id_projet: aofproj_acc[iIndiceTermine]["id_projet"]
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

			load_projet_accepte();

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/*
* Obtenir les détails d'un projet et les coordonnées du client
*/
function contenu_modal(iIndiceDetail) {

	modal = "";
	modal += "<p>Vous venez de vous positionner sur le projet n°</p>" + aofproj_acc[iIndiceDetail]["num_projet"] + " .<br><br>";
	modal += "<p>Vous pouvez dès a présent faire parvenir votre devis à :</p><br>";
	modal += "<p>Nom</p>" + aofproj_acc[iIndiceDetail]["nom_client"] + "<br><br><p>Prenom</p>" + aofproj_acc[iIndiceDetail]["prenom_client"] + " .<br><br>";
	modal += "<p>Coordonnées</p>";
	modal += "<p>Email:</p>" + aofproj_acc[iIndiceDetail]["mail_client"] + "<br>";
	modal += "<p>Téléphone:</p>" + aofproj_acc[iIndiceDetail]["tel_client"] + "<br>";
	if (aofproj_acc[iIndiceDetail]["details"] != "") {
		modal += "<p>Message laissé par le client au sujet de son projet</p>" + aofproj_acc[iIndiceDetail]["details"] + "<br>";
	}

	$('#modal_body').html(modal);

}

// ***************************************************facture************************************************************
/*
* Récupération des données des facture dans la BDD
*/
function load_facture() {

	var datas = {
		page: "profil_pro_facture_list",
		bJSON: 1,
		id_pro: id_pro_connect
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


			aoffacture = result;


			facture();

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

function facture() {

	var i;
	var sHTML1 = "";
	sHTML1 += '<ul>';

	for (i = 0; i < aoffacture.length; i++) {
		sHTML1 += '<li ><a href="assets/download/' + aoffacture[i]["facture"] + '" download=' + aoffacture[i]["facture"] + ' class="a_facture">' + aoffacture[i]["facture"] + '</a></li>';
	}
	sHTML1 += '</ul>';

	$('#facture').html(sHTML1);


}

// ****************************************************Profil****************************************************************
/*
 * Récupération des données BDD du profil pro
 */
function load_profil() {


	var datas = {
		page: "profil_pro_profil_list",
		bJSON: 1,
		id_pro: id_pro_connect
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
			console.log("aofprofil", result);


			aofprofil = result[0];


			$('#entreprise').val(aofprofil["societe_pro"]);
			$('#adresse2').val(aofprofil["address_pro"]);
			$('#adresse3').val(aofprofil["code_ville"]);
			$('#adresse4').val(aofprofil["ville"]);
			$('#telephone').val(aofprofil["tel_pro"]);
			$('#siret').val(aofprofil["siret_pro"]);
			$('#mail').val(aofprofil["mail_pro"]);
			$('#login').val(aofprofil["login_pro"]);
			$('#mdp').val(aofprofil["mdp_pro"]);
			abonnement();
		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/*
* Modification des données du profil dans la BDD
*/
function profil_update() {

	var datas = {
		page: "profil_pro_profil_update",
		bJSON: 1,
		id_pro: id_pro_connect,
		societe_pro: $('#entreprise').val(),
		address_pro: $('#adresse2').val(),
		id_ville: $('#ville').val(),
		tel_pro: $('#telephone').val(),
		siret_pro: $('#siret').val(),
		mail_pro: $('#mail').val(),
		login_pro: $('#login').val(),
		mdp_pro: $('#mdp').val()
	}
	$.ajax({
		type: "POST",
		url: "route.php",
		async: true,
		data: datas,
		dataType: "json",
		cache: false,
	})
		.done(function (result) {
			console.log("this result", result)

			aofprofil_maj = result;

			load_profil();

			$('#modif_profil').html("Votre profil a bien été modifié");

			setTimeout(function () {
				$('#modif_profil').html("");
			}, 8000);


		})
		.fail(function (err) {
			console.log('error : ' + err.status);
			alert('error : ' + err.status);

		});
}

// ****************************************************Abonnement****************************************************************

function abonnement() {

	var sHTML = "";
	if (aofprofil["statut_ab"] == 1) {

		sHTML += "<button class='abonnement' id='desabonne' onclick='desabonnement()'>Se désabonner</button>";
		sHTML += "<button class='abonnement_disabled' id='reabonne'>Se réabonner</button>";
		$('#abonnement').html(sHTML);
	}

	if (aofprofil["statut_ab"] == 0) {

		sHTML += "<button class='abonnement_disabled' id='desabonne'>Se désabonner</button>";
		sHTML += "<button class='abonnement' id='reabonne' onclick='reabonnement()'>Se réabonner</button>";
		$('#abonnement').html(sHTML);
	}
}

function desabonnement() {
	var datas = {
		page: "profil_pro_desabonnement",
		bJSON: 1,
		id_pro: id_pro_connect
	}
	$.ajax({
		type: "POST",
		url: "route.php",
		async: true,
		data: datas,
		dataType: "json",
		cache: false,
	})
		.done(function (result) {
			console.log("this result", result)

			load_profil();

		})
		.fail(function (err) {
			console.log('error : ' + err.status);
			alert('error : ' + err.status);

		});
}

function reabonnement() {
	var datas = {
		page: "profil_pro_reabonnement",
		bJSON: 1,
		id_pro: id_pro_connect
	}
	$.ajax({
		type: "POST",
		url: "route.php",
		async: true,
		data: datas,
		dataType: "json",
		cache: false,
	})
		.done(function (result) {
			console.log("this result", result)

			load_profil();

		})
		.fail(function (err) {
			console.log('error : ' + err.status);
			alert('error : ' + err.status);

		});
}
