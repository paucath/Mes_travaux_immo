var table_projet_dispo;
var table_projet_valide;
var aoffacture = [];
var aofprofil = [];
var aofprofil_maj=[];
var aofproj_acc=[];
var id_pro_connect=1;

// document ready
$(document).ready(function () {
	load_facture();
	load_profil();
	load_projet_accepte();
});

// ***************CRUD PROJETS DISPONIBLES*******************************

var projet_dispo = [];


projet_dispo[0] = [];
projet_dispo[0]["size_work"] = "Gros oeuvre";
projet_dispo[0]["type_work"] = "placo";
projet_dispo[0]["area"] = "15";
projet_dispo[0]["duration"] = "20H";
projet_dispo[0]["price"] = "300";

projet_dispo[1] = [];
projet_dispo[1]["size_work"] = "Petits travaux";
projet_dispo[1]["type_work"] = "carrelage";
projet_dispo[1]["area"] = "100";
projet_dispo[1]["duration"] = "36H";
projet_dispo[1]["price"] = "1000";

projet_dispo[2] = [];
projet_dispo[2]["size_work"] = "Gros oeuvre";
projet_dispo[2]["type_work"] = "jardinage";
projet_dispo[2]["area"] = "0";
projet_dispo[2]["duration"] = "5H";
projet_dispo[2]["price"] = "100";


function constructTable() {
	var i;

	var sHTML = "";
	sHTML += "<thead>";
	sHTML += "<tr>";
	sHTML += "<td>taille travaux</td>";
	sHTML += "<td>type travaux</td>";
	sHTML += "<td>surface</td>";
	sHTML += "<td>durée</td>";
	sHTML += "<td>prix</td>";
	sHTML += "<td>Accepter</td>";
	sHTML += "</tr>";
	sHTML += "</thead>";
	sHTML += "<tbody>";

	for (i = 0; i < projet_dispo.length; i++) {
		sHTML += "<tr>";
		sHTML += "<td>" + projet_dispo[i]["size_work"] + "</td>";
		sHTML += "<td>" + projet_dispo[i]["type_work"] + "</td>";
		sHTML += "<td>" + projet_dispo[i]["area"] + "</td>";
		sHTML += "<td>" + projet_dispo[i]["duration"] + "</td>";
		sHTML += "<td>" + projet_dispo[i]["price"] + "</td>";
		sHTML += "<td><button class='valide'>OK</button></td>";
		sHTML += "</tr>";
	}

	sHTML += "</tbody>";
	$('#table_projet_dispo').html(sHTML);
}



// CONFIGURATION DATATABLE
const configuration = {
	"stateSave": false,
	"order": [[1, "asc"]],
	"pagingType": "simple_numbers",
	"searching": true,
	"lengthMenu": [[10, 25, 50, 100, -1], ["Dix", "Vingt cinq", "Cinquante", "Cent", "Ze total stp"]],
	"language": {
		"info": "Utilisateurs _START_ à _END_ sur _TOTAL_ sélectionnées",
		"emptyTable": "Aucun utilisateur",
		"lengthMenu": "_MENU_ Utilisateurs par page",
		"search": "Rechercher : ",
		"zeroRecords": "Aucun résultat de recherche",
		"paginate": {
			"previous": "Précédent",
			"next": "Suivant"
		},
		"sInfoFiltered": "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
		"sInfoEmpty": "Utilisateurs 0 à 0 sur 0 sélectionnée",
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
			"orderable": false
		}
	],
	'retrieve': true
};
var tables;


$(document).ready(function () {
	constructTable();
	// INIT DATATABLE
	tables = $('#table_projet_dispo').DataTable(configuration);
});


// ***************CRUD PROJETS VALIDE*******************************

/*
* Récupération des projet accepté par le professionnel dans la BDD
*/
function load_projet_accepte() {

	var datas = {
		page: "profil_pro_projet_accepte",
		bJSON: 1,
		id_pro:id_pro_connect
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

function constructTable_valide() {
	var i;

	var sHTML = "";
	sHTML += "<thead>";
	sHTML += "<tr>";
	sHTML += "<td>Catégories</td>";
	sHTML += "<td>Sous Catégorie</td>";
	sHTML += "<td>surface</td>";
	sHTML += "<td>détails</td>";
	sHTML += "<td>nombre de pièce</td>";
	sHTML += "<td>nombre de m²</td>";
	sHTML += "<td>Statut</td>";
	sHTML += "<td></td>";
	sHTML += "</tr>";
	sHTML += "</thead>";
	sHTML += "<tbody>";

	for (i = 0; i < aofproj_acc.length; i++) {

		if (aofproj_acc[i]["nbr_piece"]==0) {

			aofproj_acc[i]["nbr_piece"]="NON";

		}
		else{

			aofproj_acc[i]["nbr_piece"]="OUI";

		}

		if (aofproj_acc[i]["m_carre"]==0) {

			aofproj_acc[i]["m_carre"]="NON";

		}
		else{

			aofproj_acc[i]["m_carre"]="OUI";
			
		}

		
		
		sHTML += "<tr>";
		sHTML += "<td>" + aofproj_acc[i]["categorie"] + "</td>";
		sHTML += "<td>" + aofproj_acc[i]["sous_categorie"] + "</td>";
		sHTML += "<td>" + aofproj_acc[i]["surface"] + "</td>";
		sHTML += "<td>" + aofproj_acc[i]["details"] + "</td>";
		sHTML += "<td>" + aofproj_acc[i]["nbr_piece"] + "</td>";
		sHTML += "<td>" + aofproj_acc[i]["m_carre"] + "</td>";
		sHTML += "<td>" + aofproj_acc[i]["statut"] + "</td>";
		if(aofproj_acc[i]["statut"]=="termine"){
			sHTML += "<td><button class='valide_disabled' >Terminer</button></td>";
		}
		else{
			sHTML += "<td><button class='valide'>Terminer</button></td>";
		}
		sHTML += "</tr>";
		
		
	}
	
	
	sHTML += "</tbody>";
	$('#table_projet_valide').html(sHTML);
}


// CONFIGURATION DATATABLE
const configuration_valide = {
	"stateSave": false,
	"order": [[1, "asc"]],
	"pagingType": "simple_numbers",
	"searching": true,
	"lengthMenu": [[10, 25, 50, 100, -1], ["Dix", "Vingt cinq", "Cinquante", "Cent", "Ze total stp"]],
	"language": {
		"info": "Utilisateurs _START_ à _END_ sur _TOTAL_ sélectionnées",
		"emptyTable": "Aucun utilisateur",
		"lengthMenu": "_MENU_ Utilisateurs par page",
		"search": "Rechercher : ",
		"zeroRecords": "Aucun résultat de recherche",
		"paginate": {
			"previous": "Précédent",
			"next": "Suivant"
		},
		"sInfoFiltered": "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
		"sInfoEmpty": "Utilisateurs 0 à 0 sur 0 sélectionnée",
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


var tables_2;
$(document).ready(function () {
	constructTable_valide();
	// INIT DATATABLE
	tables_2 = $('#table_projet_valide').DataTable(configuration_valide);
});


/*
* Récupération des données des facture dans la BDD
*/
function load_facture() {

	var datas = {
		page: "profil_pro_facture_list",
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
/*
 * Récupération des données BDD du profil pro
 */
function load_profil() {
	

	var datas = {
		page: "profil_pro_profil_list",
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
		societe_pro: $('#entreprise').val(),
		address_pro: $('#adresse2').val(),
		code_ville: $('#adresse3').val(),
		ville: $('#adresse4').val(),
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
			console.log("this result",result)
			
			aofprofil_maj=result;

			$('#modif_profil').html("Votre profil a bien été modifié");

			setTimeout(function () {
				$('#modif_profil').html("");
			},8000);

			

		})
		.fail(function (err) {
			console.log('error : ' + err.status);
			alert("Erreur lors de la modification de votre actu");
			
		});
}


