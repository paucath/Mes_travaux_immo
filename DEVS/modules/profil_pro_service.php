<?php
require_once  "initialize.php";
/**
 * Class Profil_pro_service | fichier profil_pro_service.php
 *
 * Cette class permet de gérer les différentes fonctions de modification envoyé à la BDD .
 *
 * Cette classe necessite l'utilisation de la classe :
 *
 * require_once "initialize.php";
 *
 * @package Mes travaux immo
 * @subpackage profil pro service
 * @author CATHELAIN Pauline
 * @copyright  
 * @version v1.0
 */

Class Profil_pro_service extends Initialize	{

  /**
   * public $resultat is used to store all datas needed for HTML Templates
   * @var array
   */
  public $resultat;

  /**
   * init variables resultat
   *
   * execute main function
   */
  public function __construct() {
    // Call Parent Constructor
    parent::__construct();

    // init variables resultat
    $this->resultat = [];

    // execute main function
  }

      /*
      *fonction de récupération des factures dans la bdd 
      */
      public function facture_list(){
        $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "facture_list.sql";
        $this->resultat["profil_pro_facture_list"]= $this->oBdd->getSelectDatas($spathSQL,array(
          "id_pro" => $this->VARS_HTML["id_pro"], 
            ));
    }

    /*
      *fonction de récupération des données du profil dans la bdd 
      */
    public function profil_list(){
      $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "profil_list.sql";
      $this->resultat["profil_pro_profil_list"]= $this->oBdd->getSelectDatas($spathSQL,array(
        "id_pro" => $this->VARS_HTML["id_pro"], 
          ));
  }
 /*
  *fonction de modification des données du profil dans la bdd 
  */
  public function profil_update(){
 
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "profil_update.sql";
    $this->resultat["profil_pro_profil_update"]= $this->oBdd->treatDatas($spathSQL, array(
                                "id_pro" => $this->VARS_HTML["id_pro"], 
                                 "societe_pro" => $this->VARS_HTML["societe_pro"], 
                                  "address_pro" => $this->VARS_HTML["address_pro"], 
                                  "id_ville" => $this->VARS_HTML["id_ville"], 
                                  "tel_pro" => $this->VARS_HTML["tel_pro"],
                                  "siret_pro" => $this->VARS_HTML["siret_pro"],
                                  "mail_pro" => $this->VARS_HTML["mail_pro"],
                                  "login_pro" => $this->VARS_HTML["login_pro"],
                                  "mdp_pro" => $this->VARS_HTML["mdp_pro"]
                                  ));
  
  }

   /*
  *lister les projets accepté par le professionnel
  */
  public function projet_accepte_list(){
 
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "projet_accepte_list.sql";
    $this->resultat["profil_pro_projet_accepte"]= $this->oBdd->getSelectDatas($spathSQL, array(
                                 "id_pro" => $this->VARS_HTML["id_pro"]
                                  ));
  
  }

  
   /*
  *lister tout les projets disponible
  */
  public function projet_disponible_list(){
 
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "projet_disponible_list.sql";
    $this->resultat["profil_pro_projet_disponible"]= $this->oBdd->getSelectDatas($spathSQL);
  
  }
  
  
    /*
  *affichage des categories dans un select
  */
  public function select_categorie(){
 
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "pp_select_categorie.sql";
    $this->resultat["profil_pro_select_categorie"]= $this->oBdd->getSelectDatas($spathSQL);
  
  }

     /*
  *affichage des villes dans un select
  */
  public function select_ville(){
 
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "pp_select_ville.sql";
    $this->resultat["profil_pro_select_ville"]= $this->oBdd->getSelectDatas($spathSQL);
  
  }
  
  /*
  *fonction de modification dustatut d'un projet a 'en cours' dans la bdd 
  */
  public function  accepter_projet(){
 
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "accepter_projet.sql";
    $this->resultat["profil_pro_accepter_projet"]= $this->oBdd->treatDatas($spathSQL, array(
                                "id_pro" => $this->VARS_HTML["id_pro"],
                                "num_projet" => $this->VARS_HTML["num_projet"],
                                "id_client" => $this->VARS_HTML["id_client"],
                                "id_categorie" => $this->VARS_HTML["id_categorie"],
                                "id_sous_categorie" => $this->VARS_HTML["id_sous_categorie"],
                                "surface" => $this->VARS_HTML["surface"],
                                "details" => $this->VARS_HTML["details"],
                                "date_creation" => $this->VARS_HTML["date_creation"]
                                  ));
  
  }

    /*
  *fonction de modification dustatut d'un projet a 'en cours' dans la bdd 
  */
  public function  terminer_projet(){
 
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "terminer_projet.sql";
    $this->resultat["profil_pro_terminer_projet"]= $this->oBdd->treatDatas($spathSQL, array(
                                "id_projet" => $this->VARS_HTML["id_projet"]
                                  ));
  
  }

  /*
  *fonction de réabonnement
  */
  public function  reabonnement(){
 
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "reabonnement.sql";
    $this->resultat["profil_pro_reabonnement"]= $this->oBdd->treatDatas($spathSQL, array(
                                "id_pro" => $this->VARS_HTML["id_pro"]
                                  ));
  
  }

  /*
  *fonction de desabonnement
  */
  public function  desabonnement(){
 
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "desabonnement.sql";
    $this->resultat["profil_pro_desabonnement"]= $this->oBdd->treatDatas($spathSQL, array(
                                "id_pro" => $this->VARS_HTML["id_pro"]
                                  ));
  
  }

     /*
  *lister le nbr projets accepté par le professionnel
  */
  public function nbr_projet(){
 
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "nbr_projet.sql";
    $this->resultat["profil_pro_nbr_projet"]= $this->oBdd->getSelectDatas($spathSQL, array(
                                 "id_pro" => $this->VARS_HTML["id_pro"],
                                 "mois"=> $this->VARS_HTML["mois"],
                                 "annee"=> $this->VARS_HTML["annee"]
                                  ));
                              }
  
  /**
   *
   * Destroy service
   *
   */
  public function __destruct() {
    // Call Parent destructor
    parent::__destruct();
    // destroy objet_service
  }


}
  

?>
