SELECT categorie.categorie , sous_categorie.sous_categorie , sous_categorie.nbr_piece , sous_categorie.m_carre , projet.id_projet , projet.statut, projet.surface, projet.details ,client.prenom_client , client.nom_client,client.tel_client , client.address_client ,client.mail_client , projet.num_projet
FROM sous_categorie
INNER JOIN categorie ON sous_categorie.id_categorie=categorie.id_categorie
INNER JOIN projet ON categorie.id_categorie=projet.id_categorie
INNER JOIN client ON projet.id_client=client.id_client 
WHERE id_pro=@id_pro AND projet.id_sous_categorie=sous_categorie.id_sous_categorie
GROUP By id_projet