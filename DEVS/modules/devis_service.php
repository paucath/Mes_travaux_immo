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

