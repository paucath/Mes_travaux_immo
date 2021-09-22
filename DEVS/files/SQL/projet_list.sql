SELECT projet.id_projet , projet.date_creation , projet.date_acceptation , professionnel.societe_pro 
FROM `projet`
LEFT JOIN `professionnel` ON projet.id_pro = professionnel.id_pro
ORDER BY id_projet