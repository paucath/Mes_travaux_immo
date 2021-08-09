<?php

// --------- CONNEXION A LA BDD
$pdoObject = new PDO('mysql:host=localhost:8889; dbname=mestravauximmo', 'root', 'root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING, PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));


// --------- CHEMINS
define("URL", "http://localhost:8888/mestravauximmo/");


// -------- VARIABLES
$notification = "";