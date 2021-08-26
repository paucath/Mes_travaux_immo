<?php
require_once  "initialize.php";
/**
 * Class service | fichier service.php
 *
 * Description de la classe à renseigner.
 *
 * Cette classe necessite l'utilisation de la classe :
 *
 * require_once "initialize.php";
 *
 * @package Mes travaux immo
 * @subpackage user_actu
 * @author CATHELAIN Pauline
 * @copyright  
 * @version v1.0
 */

Class User_actu_service extends Initialize	{

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
/**fonction de récupération des informations de la bdd */

  public function user_actu_list(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "user_actu_list.sql";
    $this->resultat["user_actu_list"]= $this->oBdd->getSelectDatas($spathSQL);
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