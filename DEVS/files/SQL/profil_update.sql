update ville
INNER JOIN professionnel 
ON ville.id_ville=professionnel.id_ville
SET societe_pro="@societe_pro" , address_pro="@address_pro" , professionnel.id_ville="@id_ville" , tel_pro="@tel_pro", mail_pro="@mail_pro" , login_pro="@login_pro" , mdp_pro="@mdp_pro"
WHERE id_pro=@id_pro