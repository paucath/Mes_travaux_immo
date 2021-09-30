
<?php
/**
* Liste des php nécessaire
*/
require_once "configuration.php";
require_once "database.php";
require_once "security.php";
require_once "initialize.php";
/**
* Appel du Framework PHPUnit
*/
use PHPUnit\Framework\TestCase;
/**
* Class getSelectDatas_loadAdmin | file getSelectDatas_loadAdmin.php
*
* Dans cette class on testera la methode getselectData avec la table "admin"
* On utilisera une commande SQL et compteront les resultats obtenu
*et on utilisera une methode getselectdata
* => Ensuite on comparera les deux résultats
*
* 
* Liste des classe nécessaire
* configuration.php
* initialize.php
* database.php
* security.php
*
* @package Mes travaux immo
* @subpackage 
* @author CATHELAIN Pauline
* @copyright 
* @version v1.0
*/
class getSelectDatas_loadAdmin extends TestCase
{
  
/** @test */
public function should_contains_all_avis()
{
    // ----------- PART 1 -----------
   
    $oInit= new Initialize();


    
    // ----------- PART 2 -----------
    
    $sql= "SELECT * FROM `admin`";
    
    $iNbAvis= 0;
    
    $results_db= $oInit->oBdd->prepare($sql);
    $results_db->execute();
    
    while ($ligne = $results_db->fetch()) {
        $iNbAvis++;
    }
    error_log($ligne);
    // ----------- PART 3 -----------
    
    $spathSQL = $oInit->GLOBALS_INI["PATH_HOME"] . $oInit->GLOBALS_INI["PATH_MODEL"] . "admin_list.sql";
    $aResOfAvis = $oInit->oBdd->getSelectDatas($spathSQL, array(), false);
    // ----------- PART 4 -----------
    
    $this->assertCount($iNbAvis, $aResOfAvis);
}




}
?>
