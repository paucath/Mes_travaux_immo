update ville
INNER JOIN professionnel 
ON ville.id_ville=professionnel.id_ville
SET societe_pro="@societe_pro" , address_pro="@address_pro" , code_ville="@code_ville" , ville="@ville" , tel_pro="@tel_pro", siret_pro="@siret_pro" , mail_pro="@mail_pro" , login_pro="@login_pro" , mdp_pro="@mdp_pro"
WHERE id_pro=1 