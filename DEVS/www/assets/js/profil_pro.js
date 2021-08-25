var table_projet_dispo;
var table_projet_valide;



// ***************CRUD PROJETS DISPONIBLES*******************************

var projet_dispo = [];


			projet_dispo[0]= [];
			projet_dispo[0]["size_work"]= "Gros oeuvre";
			projet_dispo[0]["type_work"]= "placo";
			projet_dispo[0]["area"]= "15";
			projet_dispo[0]["duration"]= "20H";
			projet_dispo[0]["price"]= "300";

			projet_dispo[1]= [];
			projet_dispo[1]["size_work"]= "Petits travaux";
			projet_dispo[1]["type_work"]= "carrelage";
			projet_dispo[1]["area"]= "100";
			projet_dispo[1]["duration"]= "36H";
			projet_dispo[1]["price"]= "1000";

			projet_dispo[2]= [];
			projet_dispo[2]["size_work"]= "Gros oeuvre";
			projet_dispo[2]["type_work"]= "jardinage";
			projet_dispo[2]["area"]= "0";
			projet_dispo[2]["duration"]= "5H";
			projet_dispo[2]["price"]= "100";

			
			function constructTable()	{
				var i;

				var sHTML= "";
				sHTML+= "<thead>";
				sHTML+= "<tr>";
				sHTML+= "<td>taille travaux</td>";
				sHTML+= "<td>type travaux</td>";
				sHTML+= "<td>surface</td>";
				sHTML+= "<td>durée</td>";
				sHTML+= "<td>prix</td>";
				sHTML+= "<td>Accepter</td>";
				sHTML+= "</tr>";
				sHTML+= "</thead>";
				sHTML+= "<tbody>";

				for (i=0; i<projet_dispo.length; i++)	{
					sHTML+= "<tr>";
					sHTML+= "<td>" + projet_dispo[i]["size_work"] + "</td>";
					sHTML+= "<td>" + projet_dispo[i]["type_work"] + "</td>";
					sHTML+= "<td>" + projet_dispo[i]["area"] + "</td>";
					sHTML+= "<td>" + projet_dispo[i]["duration"] + "</td>";
					sHTML+= "<td>" + projet_dispo[i]["price"] + "</td>";
					sHTML+= "<td><button class='valide'>OK</button></td>";
					sHTML+= "</tr>";
				}
				
				sHTML+= "</tbody>";
				$('#table_projet_dispo').html(sHTML);
			}
			
			// function ajoutPersonne()	{
			// 	var iLongueur= aOfPersonnes.length;
			// 	aOfPersonnes[iLongueur]= [];
			// 	aOfPersonnes[iLongueur]["prenom"]= $('#prenom').val();
			// 	aOfPersonnes[iLongueur]["nom"]= $('#nom').val();
			// 	aOfPersonnes[iLongueur]["age"]= $('#age').val();
			// 	aOfPersonnes[iLongueur]["tel"]= $('#telephone').val();
			// 	aOfPersonnes[iLongueur]["mail"]= $('#email').val();
			// 	constructTable();
			// }

			// function majPersonne()	{
			// }

			// function supprimPersonne()	{
			// }
			
			// var iIndiceEditionEncours;
			// function editPersonne(iIndiceEdit)	{
			// 	alert("iIndiceEdit = " + iIndiceEdit);
			// 	iIndiceEditionEncours= iIndiceEdit;
			// 	$('#prenom').val( aOfPersonnes[iIndiceEdit]["prenom"] );
			// }

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
					"sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
					"sInfoEmpty":      "Utilisateurs 0 à 0 sur 0 sélectionnée",
				},

					// autoWidth: true,
					// processing: true,
					// deferRender: true,
					// responsive: true,
					// paging: false,

					"responsive":{
						"responsive":true
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
						"orderable": true
					},
					{
						"orderable": false
					}
				],
				'retrieve': true
			};
			var tables;

			// $('#table_projet_dispo').DataTable( {
			// 	responsive: true
			// } );

			$(document).ready(function() {
				constructTable();
				// INIT DATATABLE
				tables = $('#table_projet_dispo').DataTable(configuration);
			});


// ***************CRUD PROJETS VALIDE*******************************

var projet_valide = [];


			projet_valide[0]= [];
			projet_valide[0]["size_work"]= "Gros oeuvre";
			projet_valide[0]["type_work"]= "placo";
			projet_valide[0]["area"]= "15";
			projet_valide[0]["duration"]= "20H";
			projet_valide[0]["price"]= "300";
			projet_valide[0]["details"]= "migsfjFCJBsdfjbdskbvjkfdsbfksbbfkjbkjb";

			projet_valide[1]= [];
			projet_valide[1]["size_work"]= "Petits travaux";
			projet_valide[1]["type_work"]= "carrelage";
			projet_valide[1]["area"]= "100";
			projet_valide[1]["duration"]= "36H";
			projet_valide[1]["price"]= "1000";
			projet_valide[1]["details"]= "migsfjFCJBsdfjbdskbvjkfdsbfksbbfkjbkjb";


			
			function constructTable_valide()	{
				var i;

				var sHTML= "";
				sHTML+= "<thead>";
				sHTML+= "<tr>";
				sHTML+= "<td>taille travaux</td>";
				sHTML+= "<td>type travaux</td>";
				sHTML+= "<td>surface</td>";
				sHTML+= "<td>durée</td>";
				sHTML+= "<td>prix</td>";
				sHTML+= "<td>détails</td>";
				sHTML+= "<td>Etat</td>";
				sHTML+= "</tr>";
				sHTML+= "</thead>";
				sHTML+= "<tbody>";

				for (i=0; i<projet_valide.length; i++)	{
					sHTML+= "<tr>";
					sHTML+= "<td>" + projet_valide[i]["size_work"] + "</td>";
					sHTML+= "<td>" + projet_valide[i]["type_work"] + "</td>";
					sHTML+= "<td>" + projet_valide[i]["area"] + "</td>";
					sHTML+= "<td>" + projet_valide[i]["duration"] + "</td>";
					sHTML+= "<td>" + projet_valide[i]["price"] + "</td>";
					sHTML+= "<td>" + projet_valide[i]["details"] + "</td>";
					sHTML+= "<td><button class='valide'>Terminer</button></td>";
					sHTML+= "</tr>";
				}
				
				sHTML+= "</tbody>";
				$('#table_projet_valide').html(sHTML);
			}
			
			// function ajoutPersonne()	{
			// 	var iLongueur= aOfPersonnes.length;
			// 	aOfPersonnes[iLongueur]= [];
			// 	aOfPersonnes[iLongueur]["prenom"]= $('#prenom').val();
			// 	aOfPersonnes[iLongueur]["nom"]= $('#nom').val();
			// 	aOfPersonnes[iLongueur]["age"]= $('#age').val();
			// 	aOfPersonnes[iLongueur]["tel"]= $('#telephone').val();
			// 	aOfPersonnes[iLongueur]["mail"]= $('#email').val();
			// 	constructTable();
			// }

			// function majPersonne()	{
			// }

			// function supprimPersonne()	{
			// }
			
			// var iIndiceEditionEncours;
			// function editPersonne(iIndiceEdit)	{
			// 	alert("iIndiceEdit = " + iIndiceEdit);
			// 	iIndiceEditionEncours= iIndiceEdit;
			// 	$('#prenom').val( aOfPersonnes[iIndiceEdit]["prenom"] );
			// }

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
					"sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
					"sInfoEmpty":      "Utilisateurs 0 à 0 sur 0 sélectionnée",
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
			$(document).ready(function() {
				constructTable_valide();
				// INIT DATATABLE
				tables_2 = $('#table_projet_valide').DataTable(configuration_valide);
			});
