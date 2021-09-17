<?php
require_once "tunnel_commande_service.php";
/**
 * Class Tunnel_commande_cgv_list| fichier tunnel_commande_cgv_list.php
 *
 * Permet de remplir les cgv du tunnel de commande
 *
 * Cette classe necessite l'utilisation de la classe :
 *
 * require_once "tunnel_commande_service.phpp";
 *
 * @package Mes travaux immo
 * @subpackage tunnel commande cgv list
 * @author CATHELAIN Pauline
 * @copyright  
 * @version v1.0
 */

Class Tunnel_commande_cgv_list	{
	
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
		$objet_service = new Tunnel_commande_service();
		// Ici je fais mon appel $objet_service->ma_methode_qui_est_dans_le_service
		$objet_service->cgv_list();
		// Je passe mes parametres pour y avoir acces dans mes pages HTML
		$this->resultat = $objet_service->resultat;
		$this->VARS_HTML = $objet_service->VARS_HTML;
       
    }
    
}

?>