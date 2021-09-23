<?php
require_once  "initialize.php";
/**
 * Class Devis_service | fichier devis_service.php
 *
 * Cette class permet de gérer les différentes fonctions de modification envoyé à la BDD .
 *
 * Cette classe necessite l'utilisation de la classe :
 *
 * require_once "initialize.php";
 *
 * @package Mes travaux immo
 * @subpackage devis_service
 * @author CATHELAIN Pauline
 * @copyright  
 * @version v1.0
 */

Class Devis_service extends Initialize	{

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
  *Remplissage du select ville
  */
  public function select_ville(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "select_ville.sql";
    $this->resultat["devis_select_ville"]= $this->oBdd->getSelectDatas($spathSQL);
  }

   /*
  *Remplissage du select categorie
  */
  public function select_categorie(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "select_categorie.sql";
    $this->resultat["devis_select_categorie"]= $this->oBdd->getSelectDatas($spathSQL);
  }

     /*
  *Remplissage du select categorie
  */
  public function select_souscategorie(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "select_souscategorie.sql";
    $this->resultat["devis_select_souscategorie"]= $this->oBdd->getSelectDatas($spathSQL);
  }

       /*
  *Remplissage du select categorie
  */
  public function list_client(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "list_client.sql";
    $this->resultat["devis_list_client"]= $this->oBdd->getSelectDatas($spathSQL);
  }

  /*
   * Ajouter un client
   */
  public function add_client(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "add_client.sql";
    $this->resultat["devis_add_client"]= $this->oBdd->treatDatas($spathSQL, array(
      "id_ville" => $this->VARS_HTML["id_ville"], 
      "prenom_client" => $this->VARS_HTML["prenom_client"],
      "nom_client" => $this->VARS_HTML["nom_client"],  
      "address_client" => $this->VARS_HTML["address_client"],
      "tel_client" => $this->VARS_HTML["tel_client"],
      "mail_client" => $this->VARS_HTML["mail_client"]
      ));
  }

   /*
   * Ajouter un devis
   */
  public function add_devis(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "add_devis.sql";
    $this->resultat["devis_add_devis"]= $this->oBdd->treatDatas($spathSQL, array(
      "id_client" => $this->VARS_HTML["id_client"], 
      "id_categorie" => $this->VARS_HTML["id_categorie"],
      "id_sous_categorie" => $this->VARS_HTML["id_sous_categorie"],  
      "surface" => $this->VARS_HTML["surface"],
      "details" => $this->VARS_HTML["details"],
      "num_projet" => $this->VARS_HTML["num_projet"]
      ));
  }

       /*
  *Remplissage du select categorie
  */
  public function num_projet(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "num_projet.sql";
    $this->resultat["devis_num_projet"]= $this->oBdd->getSelectDatas($spathSQL);
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

