<?php
    include('../include/data.php');
    include('../include/header.html');


    if($_POST)
    {

        if(!empty($_POST['mail_member']))
        {
            $pdoStatementObject = $pdoObject->prepare("SELECT * FROM membre WHERE mail_member = :mail_member");
            $pdoStatementObject->bindValue(":mail_member", $_POST['mail_member'], PDO::PARAM_STR);
            $pdoStatementObject->execute();
            $membreArray = $pdoStatementObject->fetch(PDO::FETCH_ASSOC);

            if(empty($membreArray))
            {
                if($_POST['password'] == $_POST['repeat_mdp'])
                {
                    if(!empty($_POST['password']))
                    {
                        if(!empty($_POST['name_member']))
                        {
                            if(!empty($_POST['first_name_member']))
                            {
                                if(!empty($_POST['address_member']))
                                {
                                    if(is_numeric($_POST['phone_member']) && strlen($_POST['phone_member'])==10)
                                    {
                                        $_POST['password'] = password_hash($_POST['password'], PASSWORD_DEFAULT);
                                        $pdoStatementObject = $pdoObject->prepare("INSERT INTO membre (name_member, first_name_member, address_member, phone_member, mail_member, password, id_type_user) VALUES (:name_member, :first_name_member, :address_member, :phone_member, :mail_member, :password, :id_type_user)");

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

                                        $pdoStatementObject->bindValue(":id_type_user", 1, PDO::PARAM_INT);
                                        $pdoStatementObject->execute();

                                        header("Location:" . URL . "index.php");exit;
                                    }
                                    else // sinon le numéro de téléphone n'est pas bon
                                    {
                                        $notification .= "<div class='col-md-6 mx-auto text-center alert alert-danger'>Vous devez renseigner un numéro de téléphone de 10 chiffres, sans espaces et sans caractères</div>";
                                    }
                                }
                                else // sinon le champ adresse n'est pas renseigné
                                {
                                    $notification .= "<div class='col-md-6 mx-auto text-center alert alert-danger'>Vous devez renseigner votre Adresse</div>";
                                }
                            }
                            else // sinon le champ prénom n'est pas renseigné
                            {
                                $notification .= "<div class='col-md-6 mx-auto text-center alert alert-danger'>Vous devez renseigner votre Prénom</div>";
                            }
                        }
                        else // sinon le champ nom n'est pas renseigné
                        {
                            $notification .= "<div class='col-md-6 mx-auto text-center alert alert-danger'>Vous devez renseigner votre Nom</div>";
                        }
                    }
                    else // sinon le champ mdp est vide
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
                $notification .= "<div class='col-md-6 mx-auto text-center alert alert-danger'>L'email $_POST[mail_member] est déjà associé à un compte</div>";
            }
        }
        else // sinon le champ email est vide donc message erreur
        {
            $notification .= "<div class='col-md-6 mx-auto text-center alert alert-danger'>Veuillez saisir une adresse email</div>";
        }
    }
?>

        <!-------------- CONTENT-->
        <section class="content">
            <section class="block">
                <div class="container">
                    <!-------------- Titre de la Page-->
                    <div class="page-title">
                        <div class="container">
                            <h1 class="center">Inscription Particulier</h1>
                            <hr class="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                        </div>
                    </div>
                    <?= $notification; ?>
                    <div class="row justify-content-center">
                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                            <form class="form clearfix" method="post">
                                <!--Nom-->
                                <div class="form-group">
                                    <label for="name_member" class="col-form-label required">Nom</label>
                                    <input name="name_member" type="text" class="form-control" id="name_member" placeholder="Votre Nom">
                                </div>
                                <!--Prénom-->
                                <div class="form-group">
                                    <label for="first_name_member" class="col-form-label required">Prénom</label>
                                    <input name="first_name_member" type="text" class="form-control" id="first_name_member" placeholder="Votre Prénom">
                                </div>
                                <!--Adresse-->
                                <div class="form-group">
                                    <label for="address_member" class="col-form-label required">Adresse</label>
                                    <input name="address_member" type="text" class="form-control" id="address_member" placeholder="Votre Adresse">
                                </div>
                                <!--Ville-->
                                <div class="form-group">
                                    <label for="ville" class="col-form-label required">Ville</label>
                                    <input name="ville" type="text" class="form-control" id="ville" placeholder="Votre Ville">
                                </div>
                                <!--CP-->
                                <div class="form-group">
                                    <label for="cp" class="col-form-label required">Code Postal</label>
                                    <input name="cp" type="text" class="form-control" id="cp" placeholder="Votre Code Postal">
                                </div>
                                <!--Téléphone-->
                                <div class="form-group">
                                    <label for="phone_member" class="col-form-label required">Téléphone</label>
                                    <input name="phone_member" type="tel" class="form-control" id="phone_member" pattern="[0-9]{10}" placeholder="Votre numéro de téléphone">
                                </div>
                                <!--Email-->
                                <div class="form-group">
                                    <label for="mail_member" class="col-form-label required">Email</label>
                                    <input name="mail_member" type="email" class="form-control" id="mail_member" placeholder="Votre Email">
                                </div>
                                <!--MDP-->
                                <div class="form-group">
                                    <label for="password" class="col-form-label required">Mot de Passe</label>
                                    <input name="password" type="password" class="form-control" id="password" placeholder="Votre Mot de passe">
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