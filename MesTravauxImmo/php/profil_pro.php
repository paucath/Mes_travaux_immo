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
                        <details class="details" open="open">
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
                                <table id="table_projet_dispo" border="1">
			                    </table>
                                </div>
                            </div>
                        </details>
                        <!-- ***************Projets acceptés************* -->
                        <details class="details">
                            <summary class="nav_pro">Projets acceptés</summary>
                            <div>
                                <div class="carte">
                                <table id="table_projet_valide" border="1">
			                    </table>
                                </div>
                            </div>
                        </details>
                        <!-- ***************Mes filtres************* -->
                        <details class="details">
                            <summary class="nav_pro">Mes filtres</summary>
                            <div>
                                <div class="carte">
                                    <div class="cat_trav cadre d-flex ">
                                        <p>Catégories travaux</p>
                                        <div class="input-group-text flex-column">
                                            <div><input type="checkbox" class="Gros oeuvre" aria-label="Gros oeuvre"><label for="Gros oeuvre">Gros oeuvre</label></div>
                                            <div><input type="checkbox" class="Petits travaux" aria-label="Petits Travaux"><label for="Petits travaux">Petits travaux</label></div>
                                        </div>
                                    </div>
                                    <div class="duree cadre d-flex ">
                                        <p>Durée</p>
                                        <div class="input-group-text flex-column ">
                                            <div><input type="checkbox" class="24h ou moins" aria-label="24h ou moins"><label for="24h ou moins">24h ou moins</label></div>
                                            <div><input type="checkbox" class="24H à 120h" aria-label="24H à 120h"><label for="24H à 120h">24H à 120h</label></div>
                                            <div><input type="checkbox" class="plus de 120h" aria-label="plus de 120h"><label for="plus de 120h">plus de 120h</label></div>
                                        </div>
                                    </div>
                                    <div class="type_trav cadre d-flex">
                                        <p>Type travaux</p>
                                        <div class="input-group-text flex-column">
                                            <div><input type="checkbox" class="type1" aria-label="type1"><label for="type1">type1</label></div>
                                            <div><input type="checkbox" class="type2" aria-label="type2"><label for="type2">type2</label></div>
                                            <div><input type="checkbox" class="type3" aria-label="type3"><label for="type3">type3</label></div>
                                            <div><input type="checkbox" class="type4" aria-label="type4"><label for="type4">type4</label></div>
                                            <div><input type="checkbox" class="type5" aria-label="type5"><label for="type5">type5</label></div>
                                            <div><input type="checkbox" class="type6" aria-label="type6"><label for="type6">type6</label></div>
                                            <div><input type="checkbox" class="type7" aria-label="type7"><label for="type7">type7</label></div>
                                            <div><input type="checkbox" class="type8" aria-label="type8"><label for="type8">type8</label></div>
                                        </div>
                                    </div>
                                    <div class="montant cadre d-flex">
                                        <p>Montant Devis</p>
                                        <div class="input-group-text flex-column">
                                            <div><input type="checkbox" class="1" aria-label="moins de 100€"><label for="1">moins de 100€</label></div>
                                            <div><input type="checkbox" class="2" aria-label="100 à 200€"><label for="2">100 à 200€</label></div>
                                            <div><input type="checkbox" class="3" aria-label="200 à 500€"><label for="3">200 à 500€</label></div>
                                            <div><input type="checkbox" class="4" aria-label="500 à 1000€"><label for="4">500 à 1000€</label></div>
                                            <div><input type="checkbox" class="5" aria-label="plus de 1000€"><label for="5">plus de 1000€</label></div>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="valide" type="submit">Valide</button>
                                    </div>
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
<script type="text/javascript" src="../assets/js/profil_pro.js" ></script>


</html>