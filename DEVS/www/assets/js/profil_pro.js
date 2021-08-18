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

