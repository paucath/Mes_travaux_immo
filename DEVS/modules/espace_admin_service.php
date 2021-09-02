<?php
require_once  "initialize.php";
/**
 * Class Espace_admin_service | fichier espace_admin_service.php
 *
 * Cette class permet de gérer les différentes fonctions de modification envoyé à la BDD .
 *
 * Cette classe necessite l'utilisation de la classe :
 *
 * require_once "initialize.php";
 *
 * @package Mes travaux immo
 * @subpackage espace admin service
 * @author CATHELAIN Pauline
 * @copyright  
 * @version v1.0
 */

Class Espace_admin_service extends Initialize	{

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
   * lister les admins
   */
  public function admin_list(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "admin_list.sql";
    $this->resultat["espace_admin_admin_list"]= $this->oBdd->getSelectDatas($spathSQL);
}
/*
   * lister les professionnels
   */
public function pro_list(){
  $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "pro_list.sql";
  $this->resultat["espace_admin_pro_list"]= $this->oBdd->getSelectDatas($spathSQL);
}
/*
   * lister les actualités
   */
  public function actu_list(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "actu_list.sql";
    $this->resultat["espace_admin_actu_list"]= $this->oBdd->getSelectDatas($spathSQL);
  }
  /*
   * lister les abonnés
   */
  public function abo_list(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "abo_list.sql";
    $this->resultat["espace_admin_abo_list"]= $this->oBdd->getSelectDatas($spathSQL);
  }
  /*
   * lister les messages
   */
  public function message_list(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "message_list.sql";
    $this->resultat["espace_admin_message_list"]= $this->oBdd->getSelectDatas($spathSQL);
  }
  /*
   * lister le nombre d'abonnés
   */
  public function nbr_abo_list(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "nbr_abo_list.sql";
    $this->resultat["espace_admin_nbr_abo_list"]= $this->oBdd->getSelectDatas($spathSQL);
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

