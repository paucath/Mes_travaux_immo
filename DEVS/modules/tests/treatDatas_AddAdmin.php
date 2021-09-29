<?php
/**
* List of PHP needed for the tests
*/
require_once "configuration.php";
require_once "database.php";
require_once "security.php";
require_once "initialize.php";
/**
* Calling PHPUnit's Framework
*/
use PHPUnit\Framework\TestCase;
/**
* Class test_getSelectDatas_equipment | file test_getSelectDatas_equipment.php
*
* In this class, we will test the method getSelectDatas on the table "equipment"
* We will use standard MySQL command and count how many results we have
* And we will use the method getSelectDatas (present in database.php)
* => We will compare the 2 results
*
* We will need the assertion called "assertCount" for that.
*
* List of classes needed for this class
* configuration.php
* initialize.php
* database.php
* security.php
*
* @package ELOCELIBRE Project
* @subpackage ELOCELIBRE
* @author @Afpa Lab Team
* @copyright 1920-2080 The Afpa Lab Team Group Corporation World Company
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
// Content SQL of the file select_avis.sql
$sql= "SELECT * FROM `admin`";
// Initialize the number of results
$iNbEquip= 0;
// Execute the query in NATIVE SQL CODE
$results_db= $oInit->oBdd->prepare($sql);
$results_db->execute();
// Fetch on results and count them
while ($ligne = $results_db->fetch()) {
$iNbEquip++;
}

// ----------- PART 3 -----------
// Execute same SQL stored in SQL file and call getSelectDatas Method
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
// Initialize the number of results
$iNbEquip2= 0;
// Execute the query in NATIVE SQL CODE
$results_db= $oInit->oBdd->prepare($sql);
$results_db->execute();
// Fetch on results and count them
while ($ligne = $results_db->fetch()) {
$iNbEquip2++;
}

        // ----------- PART 5 -----------
// Compare the 2 results with the assertion "assertCount" (Param 1 : number of results, Param 2 : array of results)
$iNbEquip++;
$this->assertEquals($iNbEquip, $iNbEquip2);
}
}
?>