UPDATE `professionnel`
SET societe_pro="@societe_pro" , tel_pro = "@tel_pro" , address_pro="@address_pro" , mail_pro="@mail_pro" , siret_pro="@siret_pro", login_pro="@login_pro" , mdp_pro="@mdp_pro", statut_ab="@statut_ab" 
WHERE id_pro=@id_pro