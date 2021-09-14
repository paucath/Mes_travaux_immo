<?php
require_once "devis_service.php";
/**
 * Class Devis_add_client | fichier devis_add_client.php
 *
 * Permet d'ajouter un client dans la page Devis.
 *
 * Cette classe necessite l'utilisation de la classe :
 *
 * require_once "devis_service.php";
 *
 * @package Mes travaux immo
 * @subpackage devis add client
 * @author CATHELAIN Pauline
 * @copyright  
 * @version v1.0
 */

Class Devis_add_client	{
	
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
		$objet_service = new Devis_service();
		// Ici je fais mon appel $objet_service->ma_methode_qui_est_dans_le_service
		$objet_service->add_client();
		// Je passe mes parametres pour y avoir acces dans mes pages HTML
		$this->resultat = $objet_service->resultat;
		$this->VARS_HTML = $objet_service->VARS_HTML;
    }
	
}

?>