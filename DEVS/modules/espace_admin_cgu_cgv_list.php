<?php
require_once "espace_admin_service.php";
/**
 * Class Espace_admin_cgu_cgv_list | fichier espace_admin_cgu_cgv_list.php
 *
 * Permet de lister les infos des CGU/CGV dans la page espace admin.
 *
 * Cette classe necessite l'utilisation de la classe :
 *
 * require_once "espace_admin_service.php";
 *
 * @package Mes travaux immo
 * @subpackage espace admin cgu/cgv list
 * @author CATHELAIN Pauline
 * @copyright  
 * @version v1.0
 */

Class Espace_admin_cgu_cgv_list	{
	
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
		$objet_service = new Espace_admin_service();
		// Ici je fais mon appel $objet_service->ma_methode_qui_est_dans_le_service
		$objet_service->cgu_cgv_list();
		// Je passe mes parametres pour y avoir acces dans mes pages HTML
		$this->resultat = $objet_service->resultat;
		$this->VARS_HTML = $objet_service->VARS_HTML;
    }
	
}

?>