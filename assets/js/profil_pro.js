var table_projet_dispo;

// ***************CRUD PROJETS DISPONIBLES*******************************

var projet_dispo = [];

function constructTable_projet_dispo() {
	var i;
	var sHTML = "";
	sHTML += "<thead>";
	sHTML += "<tr>";
	sHTML += "<td>Numero du devis</td>";
	sHTML += "<td>Taille des travaux</td>";
	sHTML += "<td>Type de travaux</td>";
	sHTML += "<td>Durée</td>";
	sHTML += "<td><button>Accepter</button></td>";
	sHTML += "</tr>";
	sHTML += "</thead>";
	sHTML += "<tbody>";

	for (i = 0; i < projet_dispo.length; i++) {
		sHTML += "<tr>";
		sHTML += "<td class='d-none' id='id_news'>" + projet_dispo[i]["id_devis"] + "</td>";
		sHTML += "<td>" + projet_dispo[i]["size_work"] + "</td>";
		sHTML += "<td>" + projet_dispo[i]["type_work"] + "</td>";
		sHTML += "<td>" + projet_dispo[i]["duration"] + "</td>";
		sHTML += "<td onClick=\"edit_event(" + i + ")\" data-toggle=\"modal\" data-target=\"#adm_actu_modal\">Editer</td>";
		sHTML += "</tr>";
	}

	sHTML += "</tbody>";
	$('#table_projet_dispo').html(sHTML);
	tables = $('#table_projet_dispo').DataTable(configuration);
}

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
	],
	'retrieve': true,
	'responsive': true,
	'autoWidth': false
};

function load_projet_dispo() {
	// J'affiche l'image GIF de la roue dentée qui tourne, indiquant le chargement
	showLoadingModal();
	// Ici je mets les paramètres pour appeler un autre PHP :
	// Je décide de l'appeler "adm_actu_list"
	// Qui va s'occuper d'aller chercher mes données dans la base
	// Le paramètre bJSON à 1, me permet que ma page ne se recharge pas
	// Mais reste bien figée
	// var datas = {
	// 	page: "projet_dispo_list",
	// 	bJSON: 1
	// }
	// J'exécute le POST
	// Dans le ".done", le retour du PHP "adm_actu_list", soit "adm_actu_list.html"
	// Si tout s'est bien passé
	// Dans le ".fail", si il y'a eu une erreur d'exécution côté serveur.
	$.ajax({
		type: "POST",
        // chemin page vers la page ciblé
		url: "route.php",    
		async: true,
		// data: datas,
		dataType: "json",
		cache: false
	})
		.done(function (result) {
			console.log("result", result);
			// C'est dans result que je recevrais les données de la base de données
			// Je fais un console.log pour voir son contenu
			// Ici j'aurais à coder de parcourir le tableau "result"

			aOfNews = result;

			console.log(aOfNews[0]["id_type_news"], "id");
			// Et qui me permettra de remplacer mes "fausses" données par les vraies
			// ............
			// ............
			// tri des données par leurs types
			order();
			// Ensuite, ici, j'appellerai ma fonction qui met en place mes données dans la datatable
			constructTable_actu_event();
			constructTable_actu_daily();
			constructTable_actu_mde();

			// Enfin, je cache l'image GIF de la roue dentée qui tourne
			hideLoadingModal();
		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}