<?php
require_once "profil_pro_service.php";
/**
 * Class Profil_pro_select_ville| fichier profil_pro_select_ville.php
 *
 * Permet de lister les infos des villes pour filtrer les projets disponible
 *
 * Cette classe necessite l'utilisation de la classe :
 *
 * require_once "profil_pro_service.php";
 *
 * @package Mes travaux immo
 * @subpackage profil_pro_select_ville
 * @author CATHELAIN Pauline
 * @copyright  
 * @version v1.0
 */

Class Profil_pro_select_ville	{
	
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
        // init variables resultat
        $this->resultat = [];

        // execute main function
        $this->main();
    }


    /**
     *
     * Destroy service
     *
     */
    public function __destruct() {
        // destroy objet_service
        unset($objet_service);
    }

    /**
     * Get interface to gestion of accueil
     */
    function main() {
		$objet_service = new Profil_pro_service();
		// Ici je fais mon appel $objet_service->ma_methode_qui_est_dans_le_service
		$objet_service->select_ville();
		// Je passe mes parametres pour y avoir acces dans mes pages HTML
		$this->resultat = $objet_service->resultat;
		$this->VARS_HTML = $objet_service->VARS_HTML;
       
    }
    
}

?>