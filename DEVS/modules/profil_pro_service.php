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
        $this->resultat["profil_pro_facture_list"]= $this->oBdd->getSelectDatas($spathSQL);
    }

    /*
      *fonction de récupération des données du profil dans la bdd 
      */
    public function profil_list(){
      $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "profil_list.sql";
      $this->resultat["profil_pro_profil_list"]= $this->oBdd->getSelectDatas($spathSQL);
  }
 /*
  *fonction de modification des données du profil dans la bdd 
  */
  public function profil_update(){
    // Here I can Access to :
    // $this->GLOBALS_INI
    // $this->oBdd
    // $this->VARS_HTML
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "profil_update.sql";
    $this->resultat["profil_pro_profil_update"]= $this->oBdd->treatDatas($spathSQL, array(
                                 "societe_pro" => $this->VARS_HTML["societe_pro"], 
                                  "address_pro" => $this->VARS_HTML["address_pro"], 
                                  "code_ville" => $this->VARS_HTML["code_ville"], 
                                  "ville" => $this->VARS_HTML["ville"], 
                                  "tel_pro" => $this->VARS_HTML["tel_pro"],
                                  "siret_pro" => $this->VARS_HTML["siret_pro"],
                                  "mail_pro" => $this->VARS_HTML["mail_pro"],
                                  "login_pro" => $this->VARS_HTML["login_pro"],
                                  "mdp_pro" => $this->VARS_HTML["mdp_pro"]
                                  ));
  
  }

   /*
  *fonction de modification des données du profil dans la bdd 
  */
  public function projet_accepte_list(){
 
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "projet_accepte_list.sql";
    $this->resultat["profil_pro_projet_accepte"]= $this->oBdd->getSelectDatas($spathSQL, array(
                                 "id_pro" => $this->VARS_HTML["id_pro"]
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
