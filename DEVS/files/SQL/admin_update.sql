UPDATE `admin`
SET nom="@nom" , prenom = "@prenom" , email="@email" , login_admin="@login_admin" , mdp="@mdp" 
WHERE id_admin=@id_admin