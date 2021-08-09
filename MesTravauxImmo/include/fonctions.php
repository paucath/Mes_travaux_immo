<?php 

    // ---- Sécurité ----

    // Statut 1 = CLIENT
    // Statut 2 = ADMIN

    // Pour savoir si un utilisateur est connecté, on vérifie s'il y a le tableau 'membre' dans la $_SESSION
    // CAR c'est UNIQUEMENT dans le fichier connexion.php qu'on créé ce tableau "membre" ET surtout que la vérification de connexion ont été reconnues

    // ---- FONCTION MEMBRE CONNECTÉ
    // tout membre confondu (client/admin) sera forcément un membre connecté

    function membreConnecte()
    {
        // si le tableau 'membre' est défini dans la $_SESSION
        if(isset($_SESSION['membre']))
        {
            return true; // l'utilisateur est connecté
        }
        else
        {
            return false; // l'utilisateur n'est pas connecté
        }
    }


    // ---- FONCTION ADMIN CONNECTÉ
    // La différence entre un client et un admin est la valeur dans la champ statut
    // Un admin reste de base un membreConnecte()

    function adminConnecte()
    {
        if(membreConnecte() && $_SESSION['membre']['statut'] == 2 )
        {
            return true;
        }
        else
        {
            return false;
        }
    }