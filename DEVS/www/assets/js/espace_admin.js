var table_admin;
var table_pro;
var table_actu;
var table_abo;
var table_message;
var nbr_abo;
var tables;
var tables2;
var tables3;
var tables4;
var tables5;
var aofadmin=[];
var aofpro=[];
var aofactu=[];
var aofabo=[];
var aofmessage=[];
var aofnbrabo=[];
/*
* Document ready
*/

$(document).ready(function () {
	load_admin();
    load_pro();
    load_actu();
    load_abo();
    load_message();
    load_nbr_abo();
});

/*
* Construction du datatable des administrateur
*/
function constructTable_admin() {
	var i;

	var sHTML = "";
	sHTML += "<thead>";
	sHTML += "<tr>";
	sHTML += "<td>Nom</td>";
	sHTML += "<td>Prénom</td>";
	sHTML += "<td>email</td>";
	sHTML += "<td>modifier</td>";
	sHTML += "<td>supprimer</td>";
	sHTML += "</tr>";
	sHTML += "</thead>";
	sHTML += "<tbody>";

	for (i = 0; i < aofadmin.length; i++) {
		sHTML += "<tr>";
		sHTML += "<td>" + aofadmin[i]["nom"] + "</td>";
		sHTML += "<td>" + aofadmin[i]["prenom"] + "</td>";
		sHTML += "<td>" + aofadmin[i]["email"] + "</td>";
		sHTML += "<td><button class='modif_admin' onclick='edit_admin("+ i + ")' type='button' data-toggle='modal' data-target='#espace_admin_modal'>Modifier</button></td>";
        sHTML += "<td><button class='suppr_admin'>Supprimer</button></td>";
		sHTML += "</tr>";
	}

	sHTML += "</tbody>";
	$('#table_admin').html(sHTML);
    tables = $('#table_admin').DataTable(configuration);
}


/*
*Configuration du datatables des administrateurs
*/
const configuration = {
	"stateSave": false,
	"order": [[1, "asc"]],
	"pagingType": "simple_numbers",
	"searching": true,
	"lengthMenu": [[10, 25, 50, 100, -1], ["Dix", "Vingt cinq", "Cinquante", "Cent", "total"]],
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
			"orderable": false
		},
		{
			"orderable": false
		}
	],
	'retrieve': true
};


/* 
* Récupération des informations admin de la BDD
*/

function load_admin(){

	var datas = {
		page: "espace_admin_admin_list",
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


			aofadmin = result;


			constructTable_admin();

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/*
* Construction du datatable des professionels
*/
function constructTable_pro() {
	var i;

	var sHTML = "";
	sHTML += "<thead>";
	sHTML += "<tr>";
	sHTML += "<td>Société</td>";
	sHTML += "<td>email</td>";
	sHTML += "<td>siret</td>";
	sHTML += "<td>modifier</td>";
	sHTML += "<td>supprimer</td>";
	sHTML += "</tr>";
	sHTML += "</thead>";
	sHTML += "<tbody>";

	for (i = 0; i < aofpro.length; i++) {
		sHTML += "<tr>";
		sHTML += "<td>" + aofpro[i]["societe_pro"] + "</td>";
		sHTML += "<td>" + aofpro[i]["mail_pro"] + "</td>";
		sHTML += "<td>" + aofpro[i]["siret_pro"] + "</td>";
		sHTML += "<td><button class='modif_pro' onclick='edit_pro("+ i + ")' type='button' data-toggle='modal' data-target='#espace_admin_modal'>Modifier</button></td>";
        sHTML += "<td><button class='suppr_pro'>Supprimer</button></td>";
		sHTML += "</tr>";
	}

	sHTML += "</tbody>";
	$('#table_pro').html(sHTML);
    tables2 = $('#table_pro').DataTable(configuration_pro);
}



/*
*Configuration du datatables des professionnels
*/
const configuration_pro = {
	"stateSave": false,
	"order": [[1, "asc"]],
	"pagingType": "simple_numbers",
	"searching": true,
	"lengthMenu": [[10, 25, 50, 100, -1], ["Dix", "Vingt cinq", "Cinquante", "Cent", "total"]],
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
			"orderable": false
		},
		{
			"orderable": false
		}
	],
	'retrieve': true
};



/* 
* Récupération des informations des professionnels de la BDD
*/
function load_pro(){

	var datas = {
		page: "espace_admin_pro_list",
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


			aofpro = result;


			constructTable_pro();

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/*
* Construction du datatable des actualités
*/
function constructTable_actu() {
	var i;

	var sHTML = "";
	sHTML += "<thead>";
	sHTML += "<tr>";
	sHTML += "<td>Titre</td>";
	sHTML += "<td>Phrase d'accroche</td>";
	sHTML += "<td>image</td>";
	sHTML += "<td>modifier</td>";
    sHTML += "<td>supprimer</td>";
	sHTML += "</tr>";
	sHTML += "</thead>";
	sHTML += "<tbody>";

	for (i = 0; i < aofactu.length; i++) {
		sHTML += "<tr>";
		sHTML += "<td>" + aofactu[i]["title_news"] + "</td>";
		sHTML += "<td>" + aofactu[i]["catch_phrase_news"] + "</td>";
        sHTML += "<td>" + aofactu[i]["img_actu"] + "</td>";
		sHTML += "<td><button class='modif_actu'>Modifier</button></td>";
        sHTML += "<td><button class='suppr_actu'>Supprimer</button></td>";
		sHTML += "</tr>";
	}

	sHTML += "</tbody>";
	$('#table_actu').html(sHTML);
    tables3 = $('#table_actu').DataTable(configuration_actu);
}



/*
*Configuration du datatables des actualités
*/
const configuration_actu = {
	"stateSave": false,
	"order": [[1, "asc"]],
	"pagingType": "simple_numbers",
	"searching": true,
	"lengthMenu": [[10, 25, 50, 100, -1], ["Dix", "Vingt cinq", "Cinquante", "Cent", "total"]],
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
			"orderable": false
		},
		{
			"orderable": false
		}
	],
	'retrieve': true
};



/* 
* Récupération des informations des actus de la BDD
*/
function load_actu(){
    
	var datas = {
		page: "espace_admin_actu_list",
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
			

			aofactu = result;

			

			constructTable_actu();

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/*
* Construction du datatable des abonnement
*/
function constructTable_abo() {
	var i;

	var sHTML = "";
	sHTML += "<thead>";
	sHTML += "<tr>";
    sHTML += "<td>Numéro abonnement</td>";
	sHTML += "<td>Société</td>";
	sHTML += "<td>date d'inscription</td>";
	sHTML += "</tr>";
	sHTML += "</thead>";
	sHTML += "<tbody>";

	for (i = 0; i < aofabo.length; i++) {
		sHTML += "<tr>";
        sHTML += "<td>" + aofabo[i]["id_pro"] + "</td>";
		sHTML += "<td>" + aofabo[i]["societe_pro"] + "</td>";
		sHTML += "<td>" + aofabo[i]["date_inscription"] + "</td>";
		sHTML += "</tr>";
	}

	sHTML += "</tbody>";
	$('#table_abo').html(sHTML);
    tables4 = $('#table_abo').DataTable(configuration_abo);
}



/*
*Configuration du datatables des actualités
*/
const configuration_abo = {
	"stateSave": false,
	"order": [[1, "asc"]],
	"pagingType": "simple_numbers",
	"searching": true,
	"lengthMenu": [[10, 25, 50, 100, -1], ["Dix", "Vingt cinq", "Cinquante", "Cent", "total"]],
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
		}
	],
	'retrieve': true
};

/* 
* Récupération des informations des actus de la BDD
*/
function load_abo(){
    
	var datas = {
		page: "espace_admin_abo_list",
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
			

			aofabo = result;

			

			constructTable_abo();

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/* 
* Récupération des informations des actus de la BDD
*/
function load_nbr_abo(){
    
	var datas = {
		page: "espace_admin_nbr_abo_list",
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
			

			aofnbrabo = result[0];

			$('#nbr_abo').html(aofnbrabo["nbr_abo"]);

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/*
* Construction du datatable des messages
*/
function constructTable_message() {
	var i;

	var sHTML = "";
	sHTML += "<thead>";
	sHTML += "<tr>";
	sHTML += "<td>Nom</td>";
	sHTML += "<td>Prénom</td>";
    sHTML += "<td>Objet</td>";
    sHTML += "<td>Lire</td>";
	sHTML += "<td>Répondre</td>";
    sHTML += "<td>supprimer</td>";
	sHTML += "</tr>";
	sHTML += "</thead>";
	sHTML += "<tbody>";

	for (i = 0; i < aofmessage.length; i++) {
		sHTML += "<tr>";
		sHTML += "<td>" + aofmessage[i]["nom"] + "</td>";
		sHTML += "<td>" + aofmessage[i]["prenom"] + "</td>";
        sHTML += "<td>" + aofmessage[i]["objet"] + "</td>";
		sHTML += "<td><button class='read_message'>Lire</button></td>";
		sHTML += "<td><button class='rep_message'>Répondre</button></td>";
        sHTML += "<td><button class='suppr_message'>Supprimer</button></td>";
		sHTML += "</tr>";
	}

	sHTML += "</tbody>";
	$('#table_message').html(sHTML);
    tables4 = $('#table_message').DataTable(configuration_message);
}



/*
*Configuration du datatables des actualités
*/
const configuration_message = {
	"stateSave": false,
	"order": [[1, "asc"]],
	"pagingType": "simple_numbers",
	"searching": true,
	"lengthMenu": [[10, 25, 50, 100, -1], ["Dix", "Vingt cinq", "Cinquante", "Cent", "total"]],
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

/* 
* Récupération des informations des actus de la BDD
*/
function load_message(){
    
	var datas = {
		page: "espace_admin_message_list",
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
			

			aofmessage = result;

			

			constructTable_message();

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/* 
* Envoi d'un nouvel admin a la BDD
*/
function add_admin(){
    
	var datas = {
		page: "espace_admin_admin_add",
		bJSON: 1,
		nom:$('#nom_admin').val(),
		prenom:$('#prenom_admin').val(),
		email:$('#email_admin').val(),
		login_admin:$('#login_admin').val(),
		mdp:$('#mdp_admin').val()
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
			
			load_admin()

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

function new_admin() {
	$("#admin_modal_add").show();
	$("#admin_modal_update").hide();
}

function edit_admin(iIndiceEdit) {

	id_admin=aofadmin[iIndiceEdit]["id_admin"];

	$("#admin_modal_add").hide();
	$("#admin_modal_update").show();

	iIndiceEditEncours=iIndiceEdit;

	console.log(iIndiceEdit);

	$('#nom_admin_edit').val(aofadmin[iIndiceEdit]["nom"]);
	$('#prenom_admin_edit').val(aofadmin[iIndiceEdit]["prenom"]);
	$('#email_admin_edit').val(aofadmin[iIndiceEdit]["email"]);
	$('#login_admin_edit').val(aofadmin[iIndiceEdit]["login_admin"]);
	$('#mdp_admin_edit').val(aofadmin[iIndiceEdit]["mdp"]);

	
}

function update_admin(){
	var datas = {
		page: "espace_admin_admin_update",
		bJSON: 1,
		id_admin:id_admin,
		nom:$('#nom_admin_edit').val(),
		prenom:$('#prenom_admin_edit').val(),
		email:$('#email_admin_edit').val(),
		login_admin:$('#login_admin_edit').val(),
		mdp:$('#mdp_admin_edit').val()
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
			
			load_admin()

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

function edit_pro(iIndiceEdit) {

	id_pro=aofpro[iIndiceEdit]["id_pro"];

	$("#admin_modal_add").hide();
	$("#admin_modal_update").hide();
	$("#pro_modal_update").show();


	console.log(iIndiceEdit);

	$('#societe_pro_edit').val(aofpro[iIndiceEdit]["societe_pro"]);
	$('#tel_pro_edit').val(aofpro[iIndiceEdit]["tel_pro"]);
	$('#adresse_pro_edit').val(aofpro[iIndiceEdit]["address_pro"]);
	$('#mail_pro_edit').val(aofpro[iIndiceEdit]["mail_pro"]);
	$('#siret_pro_edit').val(aofpro[iIndiceEdit]["siret_pro"]);
	$('#login_pro_edit').val(aofpro[iIndiceEdit]["login_pro"]);
	$('#mdp_pro_edit').val(aofpro[iIndiceEdit]["mdp_pro"]);
	$('#statut_pro_edit').val(aofpro[iIndiceEdit]["statut_ab"]);

	
}

function update_pro(){
	var datas = {
		page: "espace_admin_pro_update",
		bJSON: 1,
		id_pro:id_pro,
		societe_pro:$('#societe_pro_edit').val(),
		tel_pro:$('#tel_pro_edit').val(),
		address_pro:$('#adresse_pro_edit').val(),
		mail_pro:$('#mail_pro_edit').val(),
		siret_pro:$('#siret_pro_edit').val(),
		login_pro:$('#login_pro_edit').val(),
		mdp_pro:$('#mdp_pro_edit').val(),
		statut_ab:$('#statut_pro_edit').val()
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
			
			load_pro()

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}



