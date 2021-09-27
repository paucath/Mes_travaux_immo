SELECT professionnel.address_pro , ville.code_ville , professionnel.login_pro , professionnel.mdp_pro,professionnel.siret_pro , professionnel.mail_pro, professionnel.societe_pro, professionnel.statut_ab , professionnel.tel_pro, ville.ville ,professionnel.id_ville
FROM ville 
INNER JOIN professionnel ON ville.id_ville= professionnel.id_ville 
WHERE id_pro=@id_pro