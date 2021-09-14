SELECT categorie.categorie , sous_categorie.sous_categorie , sous_categorie.nbr_piece , sous_categorie.m_carre , projet.id_projet , projet.statut, projet.surface, projet.details
FROM categorie
INNER JOIN projet ON categorie.id_categorie=projet.id_categorie
INNER JOIN sous_categorie ON projet.id_sous_categorie=sous_categorie.id_sous_categorie
WHERE id_pro=@id_pro