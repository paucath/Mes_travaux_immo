<?php

	//SESSION START
	session_start();
	require 'configuration.php';
	$GLOBALS_INI = Configuration::getGlobalsINI();

	// Class dynamic
	if ((isset($_GET["page"])) && ($_GET["page"] != ""))	{
		$monPHP= $_GET["page"];
	}  else  {
		if ((isset($_POST["page"])) && ($_POST["page"] != ""))	{
			$monPHP= $_POST["page"];
		}  else  {
			$monPHP= "accueil";
		}
	}
	// list of classes authorized when you are NOT connected
	$list_class = array("accueil");
	if(!isset($_SESSION["id_user"]) ||(isset($_SESSION["id_user"]) && $_SESSION["id_user"] == ""))	{
		if(!in_array($monPHP, $list_class)){
			//$monPHP = "accueil";
		}		
	}

	// Test if classes exist
	if (!(file_exists($GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_CLASS"] . $monPHP . ".php"))) {
		$monPHP= "accueil";
	}
	
	$myClass= ucfirst($monPHP);

	require $GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_CLASS"] . $monPHP . ".php"; 

	$oMain= new $myClass();

	$page_to_load= "route.html";

	//if AJAX WITH JSON
	if ((isset($oMain->VARS_HTML["bJSON"])) && ($oMain->VARS_HTML["bJSON"] == 1))	{
		$page_to_load= $monPHP . ".html";
	}

	// load the 'html' page
	require $GLOBALS_INI["PATH_HOME"] . $GLOBALS_INI["PATH_FILES"] . $page_to_load;

	error_log("test" . $GLOBALS_INI["BASE_HREF"]);
	
	unset($oMain);

	

?>
