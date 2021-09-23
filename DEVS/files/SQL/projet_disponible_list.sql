SELECT categorie.categorie , sous_categorie.sous_categorie , sous_categorie.nbr_piece , sous_categorie.m_carre , projet.id_projet, projet.surface, ville.ville , projet.num_projet , projet.id_categorie ,projet.id_sous_categorie , projet.id_client ,projet.details , projet.date_creation
FROM sous_categorie
INNER JOIN categorie ON sous_categorie.id_categorie=categorie.id_categorie
INNER JOIN projet ON categorie.id_categorie=projet.id_categorie
INNER JOIN client ON projet.id_client=client.id_client
INNER JOIN ville ON client.id_ville=ville.id_ville
WHERE projet.statut="en ligne" AND projet.id_sous_categorie=sous_categorie.id_sous_categorie
GROUP BY id_projet