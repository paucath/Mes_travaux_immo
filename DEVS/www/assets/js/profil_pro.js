var table_projet_dispo;
var table_projet_valide;
var aoffacture = [];
var aofprofil = [];
var aofprofil_maj=[];
// document ready

$(document).ready(function () {
	load_facture();
	load_profil();
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

var projet_valide = [];


projet_valide[0] = [];
projet_valide[0]["size_work"] = "Gros oeuvre";
projet_valide[0]["type_work"] = "placo";
projet_valide[0]["area"] = "15";
projet_valide[0]["duration"] = "20H";
projet_valide[0]["price"] = "300";
projet_valide[0]["details"] = "migsfjFCJBsdfjbdskbvjkfdsbfksbbfkjbkjb";

projet_valide[1] = [];
projet_valide[1]["size_work"] = "Petits travaux";
projet_valide[1]["type_work"] = "carrelage";
projet_valide[1]["area"] = "100";
projet_valide[1]["duration"] = "36H";
projet_valide[1]["price"] = "1000";
projet_valide[1]["details"] = "migsfjFCJBsdfjbdskbvjkfdsbfksbbfkjbkjb";



function constructTable_valide() {
	var i;

	var sHTML = "";
	sHTML += "<thead>";
	sHTML += "<tr>";
	sHTML += "<td>taille travaux</td>";
	sHTML += "<td>type travaux</td>";
	sHTML += "<td>surface</td>";
	sHTML += "<td>durée</td>";
	sHTML += "<td>prix</td>";
	sHTML += "<td>détails</td>";
	sHTML += "<td>Etat</td>";
	sHTML += "</tr>";
	sHTML += "</thead>";
	sHTML += "<tbody>";

	for (i = 0; i < projet_valide.length; i++) {
		sHTML += "<tr>";
		sHTML += "<td>" + projet_valide[i]["size_work"] + "</td>";
		sHTML += "<td>" + projet_valide[i]["type_work"] + "</td>";
		sHTML += "<td>" + projet_valide[i]["area"] + "</td>";
		sHTML += "<td>" + projet_valide[i]["duration"] + "</td>";
		sHTML += "<td>" + projet_valide[i]["price"] + "</td>";
		sHTML += "<td>" + projet_valide[i]["details"] + "</td>";
		sHTML += "<td><button class='valide'>Terminer</button></td>";
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
	responsive: true,
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

var tables_2;
$(document).ready(function () {
	constructTable_valide();
	// INIT DATATABLE
	tables_2 = $('#table_projet_valide').DataTable(configuration_valide);
});

// Espace facture

/** récupération info de la BDD */

function load_facture() {
	// Ici je mets les paramètres pour appeler un autre PHP :
	// Je décide de l'appeler "user_actu_list"
	// Qui va s'occuper d'aller chercher mes données dans la base
	// Le paramètre bJSON à 1, me permet que ma page ne se recharge pas
	// Mais reste bien figée
	var datas = {
		page: "profil_pro_facture_list",
		bJSON: 1
	}
	// J'exécute le POST
	// Dans le ".done", le retour du PHP "user_actu_list", soit "user_actu_list.html"
	// Si tout s'est bien passé
	// Dans le ".fail", si il y'a eu une erreur d'exécution côté serveur.
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
			// C'est dans result que je recevrais les données de la base de données
			// Je fais un console.log pour voir son contenu
			// Ici j'aurais à coder de parcourir le tableau "result"

			aoffacture = result;

			// organisation des données sur ma page 

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
	// Ici je mets les paramètres pour appeler un autre PHP :
	// Je décide de l'appeler "user_actu_list"
	// Qui va s'occuper d'aller chercher mes données dans la base
	// Le paramètre bJSON à 1, me permet que ma page ne se recharge pas
	// Mais reste bien figée
	var datas = {
		page: "profil_pro_profil_list",
		bJSON: 1
	}
	// J'exécute le POST
	// Dans le ".done", le retour du PHP "user_actu_list", soit "user_actu_list.html"
	// Si tout s'est bien passé
	// Dans le ".fail", si il y'a eu une erreur d'exécution côté serveur.
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
			// C'est dans result que je recevrais les données de la base de données
			// Je fais un console.log pour voir son contenu
			// Ici j'aurais à coder de parcourir le tableau "result"

			aofprofil = result[0];

			// organisation des données sur ma page 

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

			maj_profil();

		})
		.fail(function (err) {
			console.log('error : ' + err.status);
			alert("Erreur lors de la modification de votre actu");
			
		});
}

function maj_profil() {
	
	aofprofil_maj[0] = [];
	aofprofil_maj[0]["societe_pro"] = $('#entreprise').val();
	aofprofil_maj[0]["address_pro"] = $('#adresse2').val();
	aofprofil_maj[0]["code_ville"] =$('#adresse3').val();
	aofprofil_maj[0]["ville"] = $('#adresse4').val();
	aofprofil_maj[0]["tel_pro"] = $('#telephone').val(),
	aofprofil_maj[0]["siret_pro"] = $('#siret').val(),
	aofprofil_maj[0]["mail_pro"] = $('#mail').val(),
	aofprofil_maj[0]["login_pro"] = $('#login').val(),
	aofprofil_maj[0]["mdp_pro"] = $('#mdp').val()
	
}
