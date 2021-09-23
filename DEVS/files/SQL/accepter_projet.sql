INSERT INTO `projet` 
(num_projet , id_pro , date_acceptation , id_client , id_categorie , id_sous_categorie , surface , details , statut , date_creation)
VALUE ("@num_projet", @id_pro , date(now()) , @id_client , @id_categorie , @id_sous_categorie , "@surface" , "@details" , "en cours" , "@date_creation")