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
* Class treatDatas_AddAdmin | file treatDatas_AddAdmin.php
*
* Dans cette class on testera la methode treatData avec la table "admin"
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
* @package mes travaux immo
* @subpackage tests
* @author CATHELAIN Pauline
* @copyright
* @version v1.0
*/
class treatDatas_AddAdmin extends TestCase
{

/** @test */
public function should_be_one_more()
{
// ----------- PART 1 -----------
// Instance of Initialize
$oInit= new Initialize();

// ----------- PART 2 -----------

$sql= "SELECT * FROM `admin`";

$iNbEquip= 0;

$results_db= $oInit->oBdd->prepare($sql);
$results_db->execute();

while ($ligne = $results_db->fetch()) {
$iNbEquip++;
}

// ----------- PART 3 -----------

$spathSQL= $oInit->GLOBALS_INI["PATH_HOME"] . $oInit->GLOBALS_INI["PATH_MODEL"] . "admin_add.sql";
$this->resultat["espace_admin_admin_add"]= $oInit->oBdd->treatDatas($spathSQL, array(
  "nom" => "test", 
  "prenom" => "test", 
  "email" => "test@test.com",
  "login_admin" => "test",
  "mdp" => "test"
  ));

// ----------- PART 4 -----------
$sql= "SELECT * FROM `admin`";

$iNbEquip2= 0;

$results_db= $oInit->oBdd->prepare($sql);
$results_db->execute();

while ($ligne = $results_db->fetch()) {
$iNbEquip2++;
}

        // ----------- PART 5 -----------

$iNbEquip++;
$this->assertEquals($iNbEquip, $iNbEquip2);
}
}
?>