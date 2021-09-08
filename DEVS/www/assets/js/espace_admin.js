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
var aofcat=[];
var aofsouscat=[];
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
	load_categorie();
	load_sous_categorie();


	$("#article_news").summernote();
	$("#article_news_edit").summernote();
	$("#texte").summernote();
	$("#texte_reply").summernote();
	
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
        sHTML += "<td><button class='suppr_admin' onclick='delete_admin("+ i +")'>Supprimer</button></td>";
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
        sHTML += "<td><button class='suppr_pro' onclick='delete_pro("+ i + ")'>Désabonner</button></td>";
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
		sHTML += "<td><button class='modif_actu' onclick='edit_actu("+ i + ")' data-toggle='modal' data-target='#espace_admin_modal'>Modifier</button></td>";
        sHTML += "<td><button class='suppr_actu' onclick='delete_actu("+ i + ")'>Supprimer</button></td>";
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
		sHTML += "<td><button class='read_message' onclick='read_message("+ i +")' data-toggle='modal' data-target='#espace_admin_modal'>Lire</button></td>";
		sHTML += "<td><button class='read_message' onclick='reply_message("+ i +")' data-toggle='modal' data-target='#espace_admin_modal'>Répondre</button></td>";
        sHTML += "<td><button class='suppr_message' onclick='delete_message("+ i +")' >Supprimer</button></td>";
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

/* 
* Ouverture modal pour ajout admin
*/
function new_admin() {
	$("#admin_modal_add").show();
	$("#admin_modal_update").hide();
	$("#pro_modal_update").hide();
	$("#actu_modal_add").hide();
	$("#actu_modal_update").hide();
	$("#read_message_modal").hide();
	$("#reply_message_modal").hide();	
}

/* 
* Ouverture donnée admin dans modal en vu d'un update
*/
function edit_admin(iIndiceEdit) {

	id_admin=aofadmin[iIndiceEdit]["id_admin"];

	$("#admin_modal_add").hide();
	$("#admin_modal_update").show();
	$("#pro_modal_update").hide();
	$("#actu_modal_add").hide();
	$("#actu_modal_update").hide();
	$("#read_message_modal").hide();
	$("#reply_message_modal").hide();	

	iIndiceEditEncours=iIndiceEdit;

	console.log(iIndiceEdit);

	$('#nom_admin_edit').val(aofadmin[iIndiceEdit]["nom"]);
	$('#prenom_admin_edit').val(aofadmin[iIndiceEdit]["prenom"]);
	$('#email_admin_edit').val(aofadmin[iIndiceEdit]["email"]);
	$('#login_admin_edit').val(aofadmin[iIndiceEdit]["login_admin"]);
	$('#mdp_admin_edit').val(aofadmin[iIndiceEdit]["mdp"]);

	
}

/* 
* Update admin
*/
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

/* 
* Ouverture donnée professionel dans modal en vu d'un update
*/
function edit_pro(iIndiceEdit) {

	id_pro=aofpro[iIndiceEdit]["id_pro"];

	$("#admin_modal_add").hide();
	$("#admin_modal_update").hide();
	$("#pro_modal_update").show();
	$("#actu_modal_add").hide();
	$("#actu_modal_update").hide();
	$("#read_message_modal").hide();
	$("#reply_message_modal").hide();	


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

/* 
* Update professionnel
*/
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

/* 
* Ouverture modal pour ajout actu
*/
function new_actu(){
	$("#admin_modal_add").hide();
	$("#admin_modal_update").hide();
	$("#pro_modal_update").hide();
	$("#actu_modal_add").show();
	$("#actu_modal_update").hide();
	$("#read_message_modal").hide();
	$("#reply_message_modal").hide();	
}

/* 
* Envoi d'une nouvelle actu a la BDD
*/
function add_actu(){
    
	var datas = {
		page: "espace_admin_actu_add",
		bJSON: 1,
		title_news:$('#title_news').val(),
		catch_phrase_news:$('#catch_phrase_news').val(),
		article_news:$('#article_news').val(),
		img_actu:$('#img_actu').val()
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
			
			load_actu()

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/* 
* Ouverture donnée actualité dans modal en vu d'un update
*/
function edit_actu(iIndiceEdit) {

	id_news=aofactu[iIndiceEdit]["id_news"];

	$("#admin_modal_add").hide();
	$("#admin_modal_update").hide();
	$("#pro_modal_update").hide();
	$("#actu_modal_add").hide();
	$("#actu_modal_update").show();
	$("#read_message_modal").hide();
	$("#reply_message_modal").hide();	


	console.log(iIndiceEdit);

	$('#title_news_edit').val(aofactu[iIndiceEdit]["title_news"]);
	$('#catch_phrase_news_edit').val(aofactu[iIndiceEdit]["catch_phrase_news"]);
	$('#article_news_edit').summernote('code' , aofactu[iIndiceEdit]["article_news"]);
	$('#img_actu_edit').val(aofactu[iIndiceEdit]["img_actu"]);
	
}

/* 
* Update actualité
*/
function update_actu(){
	var datas = {
		page: "espace_admin_actu_update",
		bJSON: 1,
		id_news:id_news,
		title_news:$('#title_news_edit').val(),
		catch_phrase_news:$('#catch_phrase_news_edit').val(),
		article_news:$('#article_news_edit').summernote('code'),
		img_actu:$('#img_actu_edit').val(),
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
			
			load_actu()

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/* 
* Ouverture du message dans un modal
*/
function read_message(iIndiceRead){

	$("#admin_modal_add").hide();
	$("#admin_modal_update").hide();
	$("#pro_modal_update").hide();
	$("#actu_modal_add").hide();
	$("#actu_modal_update").hide();
	$("#read_message_modal").show();
	$("#reply_message_modal").hide();


	$('#nom').val(aofmessage[iIndiceRead]["nom"]);
	$('#prenom').val(aofmessage[iIndiceRead]["prenom"]);
	$('#email').val(aofmessage[iIndiceRead]["email"]);
	$('#objet').val(aofmessage[iIndiceRead]["objet"]);
	$('#texte').summernote('code' , aofmessage[iIndiceRead]["texte"]);
	
}

/* 
* Ecrire réponse au message
*/
function reply_message(iIndicereply){

	$("#admin_modal_add").hide();
	$("#admin_modal_update").hide();
	$("#pro_modal_update").hide();
	$("#actu_modal_add").hide();
	$("#actu_modal_update").hide();
	$("#read_message_modal").hide();
	$("#reply_message_modal").show();

	$('#email_reply').val(aofmessage[iIndicereply]["email"]);

}

/* 
* Envoyer réponse au message
*/
function send_message(){
	var datas = {
		page: "espace_admin_message_send",
		bJSON: 1,
		email:$('#email_reply').val(),
		objet:$('#objet_reply').val(),
		texte:$('#texte_reply').val()
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
			
			$('#message_envoyé').html("votre message a bien été envoyé");
			
		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
	
}

/* 
* Supprimer un admin
*/
function delete_admin(iSupprIndice) {
     

	var datas = {
		page: "espace_admin_admin_delete",
		bJSON: 1,
		id_admin:aofadmin[iSupprIndice]["id_admin"]
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

           load_admin();

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/* 
* Supprimer l'abonnement d'un professionnel
*/
function delete_pro(iSupprIndice) {
     

	var datas = {
		page: "espace_admin_pro_delete",
		bJSON: 1,
		id_pro:aofpro[iSupprIndice]["id_pro"],
		statut_ab:aofpro[iSupprIndice]["statut_ab"]
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

           load_pro();

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/* 
* Supprimer une actu
*/
function delete_actu(iSupprIndice) {
     

	var datas = {
		page: "espace_admin_actu_delete",
		bJSON: 1,
		id_news:aofactu[iSupprIndice]["id_news"]
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

           load_actu();

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/* 
* Supprimer un message
*/
function delete_message(iSupprIndice) {
     

	var datas = {
		page: "espace_admin_message_delete",
		bJSON: 1,
		id_message:aofmessage[iSupprIndice]["id_message"]
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

           load_message();

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/* 
* Récupération des informations des catégorie du devis de la BDD
*/
function load_categorie(){
    
	var datas = {
		page: "espace_admin_devis_cat_list",
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
			

			aofcat = result;

			

			construct_cat();
			construct_select();

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/*
* Construction du listing des catégorie
*/
function construct_cat() {
	var i;

	var sHTML = "";
	sHTML += "<p>CATEGORIES existantes</p>";
	sHTML += "<ul>";


	for (i = 0; i < aofcat.length; i++) {
        sHTML += "<li class='d-flex flex-row'><div  style='width:40%'>"+ aofcat[i]["categorie"] + "</div><div><img src='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQyN3B0IiB2aWV3Qm94PSItNDAgMCA0MjcgNDI3LjAwMTMxIiB3aWR0aD0iNDI3cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIzMi4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIi8+PHBhdGggZD0ibTExNC4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIi8+PHBhdGggZD0ibTI4LjM5ODQzOCAxMjcuMTIxMDk0djI0Ni4zNzg5MDZjMCAxNC41NjI1IDUuMzM5ODQzIDI4LjIzODI4MSAxNC42Njc5NjggMzguMDUwNzgxIDkuMjg1MTU2IDkuODM5ODQ0IDIyLjIwNzAzMiAxNS40MjU3ODEgMzUuNzMwNDY5IDE1LjQ0OTIxOWgxODkuMjAzMTI1YzEzLjUyNzM0NC0uMDIzNDM4IDI2LjQ0OTIxOS01LjYwOTM3NSAzNS43MzA0NjktMTUuNDQ5MjE5IDkuMzI4MTI1LTkuODEyNSAxNC42Njc5NjktMjMuNDg4MjgxIDE0LjY2Nzk2OS0zOC4wNTA3ODF2LTI0Ni4zNzg5MDZjMTguNTQyOTY4LTQuOTIxODc1IDMwLjU1ODU5My0yMi44MzU5MzggMjguMDc4MTI0LTQxLjg2MzI4Mi0yLjQ4NDM3NC0xOS4wMjM0MzctMTguNjkxNDA2LTMzLjI1MzkwNi0zNy44Nzg5MDYtMzMuMjU3ODEyaC01MS4xOTkyMTh2LTEyLjVjLjA1ODU5My0xMC41MTE3MTktNC4wOTc2NTctMjAuNjA1NDY5LTExLjUzOTA2My0yOC4wMzEyNS03LjQ0MTQwNi03LjQyMTg3NS0xNy41NTA3ODEtMTEuNTU0Njg3NS0yOC4wNjI1LTExLjQ2ODc1aC04OC43OTY4NzVjLTEwLjUxMTcxOS0uMDg1OTM3NS0yMC42MjEwOTQgNC4wNDY4NzUtMjguMDYyNSAxMS40Njg3NS03LjQ0MTQwNiA3LjQyNTc4MS0xMS41OTc2NTYgMTcuNTE5NTMxLTExLjUzOTA2MiAyOC4wMzEyNXYxMi41aC01MS4xOTkyMTljLTE5LjE4NzUuMDAzOTA2LTM1LjM5NDUzMSAxNC4yMzQzNzUtMzcuODc4OTA3IDMzLjI1NzgxMi0yLjQ4MDQ2OCAxOS4wMjczNDQgOS41MzUxNTcgMzYuOTQxNDA3IDI4LjA3ODEyNiA0MS44NjMyODJ6bTIzOS42MDE1NjIgMjc5Ljg3ODkwNmgtMTg5LjIwMzEyNWMtMTcuMDk3NjU2IDAtMzAuMzk4NDM3LTE0LjY4NzUtMzAuMzk4NDM3LTMzLjV2LTI0NS41aDI1MHYyNDUuNWMwIDE4LjgxMjUtMTMuMzAwNzgyIDMzLjUtMzAuMzk4NDM4IDMzLjV6bS0xNTguNjAxNTYyLTM2Ny41Yy0uMDY2NDA3LTUuMjA3MDMxIDEuOTgwNDY4LTEwLjIxODc1IDUuNjc1NzgxLTEzLjg5NDUzMSAzLjY5MTQwNi0zLjY3NTc4MSA4LjcxNDg0My01LjY5NTMxMyAxMy45MjU3ODEtNS42MDU0NjloODguNzk2ODc1YzUuMjEwOTM3LS4wODk4NDQgMTAuMjM0Mzc1IDEuOTI5Njg4IDEzLjkyNTc4MSA1LjYwNTQ2OSAzLjY5NTMxMyAzLjY3MTg3NSA1Ljc0MjE4OCA4LjY4NzUgNS42NzU3ODIgMTMuODk0NTMxdjEyLjVoLTEyOHptLTcxLjE5OTIxOSAzMi41aDI3MC4zOTg0MzdjOS45NDE0MDYgMCAxOCA4LjA1ODU5NCAxOCAxOHMtOC4wNTg1OTQgMTgtMTggMThoLTI3MC4zOTg0MzdjLTkuOTQxNDA3IDAtMTgtOC4wNTg1OTQtMTgtMThzOC4wNTg1OTMtMTggMTgtMTh6bTAgMCIvPjxwYXRoIGQ9Im0xNzMuMzk4NDM4IDE1NC43MDMxMjVjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjMtMTAgMTB2MTg5YzAgNS41MTk1MzEgNC40NzY1NjIgMTAgMTAgMTAgNS41MjM0MzcgMCAxMC00LjQ4MDQ2OSAxMC0xMHYtMTg5YzAtNS41MjM0MzctNC40NzY1NjMtMTAtMTAtMTB6bTAgMCIvPjwvc3ZnPg==' style='width:5%'/></div></li>";
	}

	sHTML += "</ul>";
	$('#list_categorie').html(sHTML);
}

/* 
* Récupération des informations des sous catégorie du devis de la BDD
*/
function load_sous_categorie(){
    
	var datas = {
		page: "espace_admin_devis_souscat_list",
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
			

			aofsouscat = result;

			

			construct_sous_cat();

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/*
* Construction du listing des sous catégorie
*/
function construct_sous_cat() {
	var i;

	var sHTML = "";
	sHTML += "<p> SOUS CATEGORIES existantes</p>";
	sHTML += "<ul>";

	for (i = 0; i < aofsouscat.length; i++) {
        sHTML += "<li class='d-flex flex-row'><div  style='width:40%'>" + aofsouscat[i]["sous_categorie"] + "</div><div><img src='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQyN3B0IiB2aWV3Qm94PSItNDAgMCA0MjcgNDI3LjAwMTMxIiB3aWR0aD0iNDI3cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIzMi4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIi8+PHBhdGggZD0ibTExNC4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIi8+PHBhdGggZD0ibTI4LjM5ODQzOCAxMjcuMTIxMDk0djI0Ni4zNzg5MDZjMCAxNC41NjI1IDUuMzM5ODQzIDI4LjIzODI4MSAxNC42Njc5NjggMzguMDUwNzgxIDkuMjg1MTU2IDkuODM5ODQ0IDIyLjIwNzAzMiAxNS40MjU3ODEgMzUuNzMwNDY5IDE1LjQ0OTIxOWgxODkuMjAzMTI1YzEzLjUyNzM0NC0uMDIzNDM4IDI2LjQ0OTIxOS01LjYwOTM3NSAzNS43MzA0NjktMTUuNDQ5MjE5IDkuMzI4MTI1LTkuODEyNSAxNC42Njc5NjktMjMuNDg4MjgxIDE0LjY2Nzk2OS0zOC4wNTA3ODF2LTI0Ni4zNzg5MDZjMTguNTQyOTY4LTQuOTIxODc1IDMwLjU1ODU5My0yMi44MzU5MzggMjguMDc4MTI0LTQxLjg2MzI4Mi0yLjQ4NDM3NC0xOS4wMjM0MzctMTguNjkxNDA2LTMzLjI1MzkwNi0zNy44Nzg5MDYtMzMuMjU3ODEyaC01MS4xOTkyMTh2LTEyLjVjLjA1ODU5My0xMC41MTE3MTktNC4wOTc2NTctMjAuNjA1NDY5LTExLjUzOTA2My0yOC4wMzEyNS03LjQ0MTQwNi03LjQyMTg3NS0xNy41NTA3ODEtMTEuNTU0Njg3NS0yOC4wNjI1LTExLjQ2ODc1aC04OC43OTY4NzVjLTEwLjUxMTcxOS0uMDg1OTM3NS0yMC42MjEwOTQgNC4wNDY4NzUtMjguMDYyNSAxMS40Njg3NS03LjQ0MTQwNiA3LjQyNTc4MS0xMS41OTc2NTYgMTcuNTE5NTMxLTExLjUzOTA2MiAyOC4wMzEyNXYxMi41aC01MS4xOTkyMTljLTE5LjE4NzUuMDAzOTA2LTM1LjM5NDUzMSAxNC4yMzQzNzUtMzcuODc4OTA3IDMzLjI1NzgxMi0yLjQ4MDQ2OCAxOS4wMjczNDQgOS41MzUxNTcgMzYuOTQxNDA3IDI4LjA3ODEyNiA0MS44NjMyODJ6bTIzOS42MDE1NjIgMjc5Ljg3ODkwNmgtMTg5LjIwMzEyNWMtMTcuMDk3NjU2IDAtMzAuMzk4NDM3LTE0LjY4NzUtMzAuMzk4NDM3LTMzLjV2LTI0NS41aDI1MHYyNDUuNWMwIDE4LjgxMjUtMTMuMzAwNzgyIDMzLjUtMzAuMzk4NDM4IDMzLjV6bS0xNTguNjAxNTYyLTM2Ny41Yy0uMDY2NDA3LTUuMjA3MDMxIDEuOTgwNDY4LTEwLjIxODc1IDUuNjc1NzgxLTEzLjg5NDUzMSAzLjY5MTQwNi0zLjY3NTc4MSA4LjcxNDg0My01LjY5NTMxMyAxMy45MjU3ODEtNS42MDU0NjloODguNzk2ODc1YzUuMjEwOTM3LS4wODk4NDQgMTAuMjM0Mzc1IDEuOTI5Njg4IDEzLjkyNTc4MSA1LjYwNTQ2OSAzLjY5NTMxMyAzLjY3MTg3NSA1Ljc0MjE4OCA4LjY4NzUgNS42NzU3ODIgMTMuODk0NTMxdjEyLjVoLTEyOHptLTcxLjE5OTIxOSAzMi41aDI3MC4zOTg0MzdjOS45NDE0MDYgMCAxOCA4LjA1ODU5NCAxOCAxOHMtOC4wNTg1OTQgMTgtMTggMThoLTI3MC4zOTg0MzdjLTkuOTQxNDA3IDAtMTgtOC4wNTg1OTQtMTgtMThzOC4wNTg1OTMtMTggMTgtMTh6bTAgMCIvPjxwYXRoIGQ9Im0xNzMuMzk4NDM4IDE1NC43MDMxMjVjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjMtMTAgMTB2MTg5YzAgNS41MTk1MzEgNC40NzY1NjIgMTAgMTAgMTAgNS41MjM0MzcgMCAxMC00LjQ4MDQ2OSAxMC0xMHYtMTg5YzAtNS41MjM0MzctNC40NzY1NjMtMTAtMTAtMTB6bTAgMCIvPjwvc3ZnPg==' style='width:5%'/></div></li>";
	}

	sHTML += "</ul>";
	$('#list_sous_categorie').html(sHTML);
}

/* 
* Envoi d'une nouvelle catégorie a la BDD
*/
function add_categorie(){
    
	var datas = {
		page: "espace_admin_devis_cat_add",
		bJSON: 1,
		categorie:$('#new_categorie').val()
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
			
			load_categorie()
			$('#new_categorie').val("");

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}

/* 
* Construire le select
*/
function construct_select(){

	var i;

	var sHTML = "";
	sHTML +="<select class='select_cat' id='select_cat'>";
	sHTML += "<option value=''>choisir une categorie</option>";
	

                                            
	for (i = 0; i < aofcat.length; i++) {
        sHTML += "<option value='"+ aofcat[i]["id_categorie"] + "'>"+ aofcat[i]["categorie"] + "</option>";
	}

	sHTML +="</select>";

	$('#select').html(sHTML);
}

/* 
* Envoi d'une nouvelle sous catégorie a la BDD
*/
function add_sous_categorie(){
    
	var datas = {
		page: "espace_admin_devis_souscat_add",
		bJSON: 1,
		id_categorie:$('#select_cat').val(),
		sous_categorie:$('#new_sous_categorie').val(),
		nbr_piece:$('#nbr_piece').val(),
		m_carre:$('#m_carre').val()

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
			
			load_sous_categorie()
			$('#new_sous_categorie').val("");

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}





