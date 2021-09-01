<?php
require_once "user_actu_service.php";
/**
 * Class User_actu_list| fichier user_actu_list.php
 *
 * Permet de lister les infos de la page user actu.
 *
 * Cette classe necessite l'utilisation de la classe :
 *
 * require_once "user_actu_service.php";
 *
 * @package Mes travaux immo
 * @subpackage user_actu_list
 * @author CATHELAIN Pauline
 * @copyright  
 * @version v1.0
 */

Class User_actu_list	{
	
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
		$objet_service = new User_actu_service();
		// Ici je fais mon appel $objet_service->ma_methode_qui_est_dans_le_service
		$objet_service->User_actu_list();
		// Je passe mes parametres pour y avoir acces dans mes pages HTML
		$this->resultat = $objet_service->resultat;
		$this->VARS_HTML = $objet_service->VARS_HTML;
       
    }
    
}

?>