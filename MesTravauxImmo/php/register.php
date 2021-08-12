<?php
    include_once('../include/data.php');
    include('../include/header.html');


    if($_POST)
    {

        if(!empty($_POST['email']))
        {
            $pdoStatementObject = $pdoObject->prepare("SELECT * FROM membre WHERE email = :email");
            $pdoStatementObject->bindValue(":email", $_POST['email'], PDO::PARAM_STR);
            $pdoStatementObject->execute();
            $membreArray = $pdoStatementObject->fetch(PDO::FETCH_ASSOC);

            if(empty($membreArray))
            {
                if($_POST['mdp'] == $_POST['repeat_mdp'])
                {
                    if(!empty($_POST['mdp']))
                    {
                        $_POST['mdp'] = password_hash($_POST['mdp'], PASSWORD_DEFAULT);
                        $pdoStatementObject = $pdoObject->prepare("INSERT INTO membre (nom, email, mdp, statut) VALUES (:nom, :email, :mdp, :statut)");

                        foreach($_POST as $key => $value)
                        {
                            if($key != "repeat_mdp")
                            {
                                if(gettype($value) == "integer")
                                {
                                    $type = PDO::PARAM_INT;
                                }
                                else
                                {
                                    $type = PDO::PARAM_STR;
                                }
                                $pdoStatementObject->bindValue(":$key", $value, $type);
                            }
                        }

                        $pdoStatementObject->bindValue(":statut", 1, PDO::PARAM_INT);
                        $pdoStatementObject->execute();
                        $_SESSION['notification'] = "inscription";

                        header("Location:" . URL . "sign-in.php");exit;

                    }
                    else // sinon les champs mdp sont vides
                    {
                        $notification .= "<div class='col-md-6 mx-auto text-center alert alert-danger'>Veuillez saisir un mot de passe</div>";
                    }
                }
                else // sinon les mdp ne sont pas identiques
                {
                    $notification .= "<div class='col-md-6 mx-auto text-center alert alert-danger'>Les mots de passe ne sont pas identiques</div>";
                }
            }
            else// sinon le tableau $membreArray n'est pas vide ==> l'email existe en BDD, INSCRIPTION IMPOSSIBLE
            {
                $notification .= "<div class='col-md-6 mx-auto text-center alert alert-danger'>L'email $_POST[email] est déjà associé à un compte</div>";
            }
        }
        else // sinon le champ email est vide donc message erreur
        {
            $notification .= "<div class='col-md-6 mx-auto text-center alert alert-danger'>Veuillez saisir une adresse email</div>";
        }
    }
?>


        <!--************ CONTENT-->
        <?= $notification; ?>
        <section class="content">
            <section class="block">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                            <form class="form clearfix" method="post">
                                <!--Nom-->
                                <div class="form-group">
                                    <label for="nom" class="col-form-label required">Nom</label>
                                    <input name="nom" type="text" class="form-control" id="nom" placeholder="Votre Nom">
                                </div>
                                <!--Prénom-->
                                <div class="form-group">
                                    <label for="prenom" class="col-form-label required">Prénom</label>
                                    <input name="prenom" type="text" class="form-control" id="prenom" placeholder="Votre Prénom">
                                </div>
                                <!--Adresse-->
                                <div class="form-group">
                                    <label for="adresse" class="col-form-label required">Adresse</label>
                                    <input name="adresse" type="text" class="form-control" id="adresse" placeholder="Votre Adresse">
                                </div>
                                <!--Téléphone-->
                                <div class="form-group">
                                    <label for="telephone" class="col-form-label required">Téléphone</label>
                                    <input name="telephone" type="text" class="form-control" id="telephone" placeholder="Votre numéro de téléphone">
                                </div>
                                <!--Email-->
                                <div class="form-group">
                                    <label for="email" class="col-form-label required">Email</label>
                                    <input name="email" type="email" class="form-control" id="email" placeholder="Votre Email">
                                </div>
                                <!--MDP-->
                                <div class="form-group">
                                    <label for="mdp" class="col-form-label required">Mot de Passe</label>
                                    <input name="mdp" type="password" class="form-control" id="mdp" placeholder="Votre Mot de passe">
                                </div>
                                <!--Confirm MDP-->
                                <div class="form-group">
                                    <label for="repeat_mdp" class="col-form-label required">Confirmation Mot de passe</label>
                                    <input name="repeat_mdp" type="password" class="form-control" id="repeat_mdp" placeholder="Confirmez votre Mot de passe">
                                </div>
                                <!--Newsletter et Bouton Inscription-->
                                <div class="d-flex justify-content-between align-items-baseline">
                                    <label>
                                        <input type="checkbox" name="newsletter" value="1">
                                        Recevoir notre Newsletter
                                    </label>
                                    <button type="submit" class="btn btn-primary">S'inscrire</button>
                                </div>
                            </form>
                            <hr>
                            <p>
                                En vous inscrivant, vous acceptez nos <a href="#" class="link">CGV/CGU</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>

<?php 
include('../include/footer.html');
?>