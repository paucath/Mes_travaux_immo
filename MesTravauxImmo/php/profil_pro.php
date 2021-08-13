<?php

include('../include/data.php');

?>
<!doctype html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="ThemeStarz">

    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Varela+Round" rel="stylesheet">
    <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.css" type="text/css">
    <link rel="stylesheet" href="../assets/fonts/font-awesome.css" type="text/css">
    <link rel="stylesheet" href="../assets/css/selectize.css" type="text/css">
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/global.css">

    <title>Mes Travaux Immo</title>

</head>
<div class="page home-page">

    <!-- ******************************************************************************** -->
    <!--************************** HEADER *******************************-->
    <!-- ******************************************************************************** -->

    <header class="hero has-dark-background">
        <div class="hero-wrapper">
            <!--============ Menu Inscription/Identification-->
            <div class="secondary-navigation">
                <div class="container">
                    <ul class="right">
                        <li>
                            <a href="../index.php">
                                <i class="fa fa-sign-in"></i>Déconnexion
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--============ Menu Logo/Navigation-->
            <div class="main-navigation">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
                        <a class="navbar-brand" href="../index.php">
                            <img src="../assets/img/logo-inverted.png" alt="">
                        </a>
                    </nav>
                </div>
            </div>
            <!--============ Titre de la Page-->
            <div class="page-title">
                <div class="container">
                    <h1 class="center">Mon accès Pro</h1>
                </div>
            </div>

            <!--Image Background-->
            <div class="background">
                <div class="background-image">
                    <img src="../assets/img/hero-background-image-01.jpg" alt="">
                </div>
            </div>
        </div>
    </header>

    <!-- ******************************************************************************** -->
    <!-- ****************************************** body ******************************* -->
    <!-- ******************************************************************************** -->

    <body>
        <section class="content">
            <section class="block">
                <!-- onglets -->
                <div class="wb-tabs">
                    <div class="tabpanels">
                        <!-- ***************onglet profil************* -->
                        <details class="details">
                            <summary class="nav_pro">Mon profil</summary>
                            <div>
                                <div class="carte">
                                    <div class="input">
                                        <label for="entreprise">Nom de l'Entreprise</label></br>
                                        <input class="info" id="entreprise" name="entreprise" placeholder="Nom de votre entreprise" type="text">
                                        <label for="adresse1">Adresse de l'Entreprise</label></br>
                                        <input class="info" id="adresse1" name="adresse1" placeholder="Numéro de la rue" type="text">
                                        <input class="info" id="adresse2" name="adresse2" placeholder="Nom de la rue" type="text">
                                        <input class="info" id="adresse3" name="adresse3" placeholder="code postal" type="text">
                                        <input class="info" id="adresse4" name="adresse4" placeholder="ville" type="text">
                                    </div>
                                    <div class="input2">
                                        <label for="telephone">Numero de téléphone</label></br>
                                        <input class="info" id="telephone" name="telephone" placeholder="Numéro de téléphone" type="text">
                                        <label for="siret">Numéro de SIRET</label></br>
                                        <input class="info" id="siret" name="siret" placeholder="Numero de Siret" type="text">
                                        <label for="mail">Email de l'Entreprise</label></br>
                                        <input class="info" id="mail" name="mail" placeholder="e-mail" type="text">
                                        <label for="mdp">Mot de passe</label></br>
                                        <input class="info" id="mdp" name="mdp" placeholder="Mot de passe" type="text"></br>
                                        <button class="modif_profil">Modifier</button>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <!-- ***************Projets dispo************* -->
                        <details class="details">
                            <summary class="nav_pro">Projets Dispo</summary>
                            <div>
                                <div class="carte">
                                </div>
                            </div>
                        </details>
                        <!-- ***************Projets acceptés************* -->
                        <details class="details">
                            <summary class="nav_pro">Projets acceptés</summary>
                            <div>
                                <div class="carte">
                                </div>
                            </div>
                        </details>
                        <!-- ***************Mes filtres************* -->
                        <details class="details">
                            <summary class="nav_pro">Mes filtres</summary>
                            <div>
                                <div class="carte">
                                </div>
                            </div>
                        </details>
                        <!-- ***************Mes factures************* -->
                        <details class="details">
                            <summary class="nav_pro">Mes factures</summary>
                            <div>
                                <div class="carte">
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </section>

    </body>

    <!-- ******************************************************************************** -->
    <!-- ***********************************FOOTER**************************************** -->
    <!-- ******************************************************************************** -->

    <footer class="footer">
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <!--Colonne Logo-->
                    <div class="col-md-5">
                        <a href="#" class="brand">
                            <img src="../assets/img/logo.png" alt="">
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet
                            fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                        </p>
                    </div>
                    <!--Colonne Navigation-->
                    <div class="col-md-3">
                        <h2>Navigation</h2>
                        <div class="row">
                            <div class="col-md-6 col-sm-6">
                                <nav>
                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="index.php">Home</a>
                                        </li>
                                        <li>
                                            <a href="php/contact.php">Contact</a>
                                        </li>
                                        <li>
                                            <a href="php/mentionslegales.php">Mentions</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <!--Colonne Contact-->
                    <div class="col-md-4">
                        <h2>Contact</h2>
                        <address>
                            <figure>
                                6 bis Rue du Pont Vieux<br>
                                34820 Teyran
                            </figure>
                            <br>
                            <strong>Email:</strong> <a href="#">contact@hwcom.fr</a>
                            <br>
                            <strong>Twitter: </strong> HWcom
                            <br>
                            <br>
                            <a href="contact.html" class="btn btn-primary text-caps btn-framed">Contactez-Nous</a>
                        </address>
                    </div>
                </div>
            </div>
            <!--Image Background-->
            <div class="background">
                <div class="background-image original-size">
                    <img src="../assets/img/footer-background-icons.jpg" alt="">
                </div>
            </div>
        </div>
    </footer>
</div>

<script src="../assets/js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="../assets/js/popper.min.js"></script>
<script type="text/javascript" src="../assets/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyBEDfNcQRmKQEyulDN8nGWjLYPm8s4YB58&libraries=places"></script>
<!--<script type="text/javascript" src="http://maps.google.com/maps/api/js"></script>-->
<script src="../assets/js/selectize.min.js"></script>
<script src="../assets/js/masonry.pkgd.min.js"></script>
<script src="../assets/js/icheck.min.js"></script>
<script src="../assets/js/jquery.validate.min.js"></script>
<script src="../assets/js/custom.js"></script>


</html>