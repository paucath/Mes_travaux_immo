<?php
require_once "accueil_service.php";
/**
 * Class Accueil | fichier accueil.php
 *
 * Permet le controle de saisie de l'accueil .
 *
 * Cette classe necessite l'utilisation de la classe :
 *
 * require_once "accueil_service.php";
 *
 * @package mes travaux immo
 * @subpackage accueil
 * @author CATHELAIN Pauline
 * @copyright  
 * @version v1.0
 */

Class Accueil	{
	
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
		$objet_service = new Accueil_service();
		// Ici je fais mon appel $objet_service->ma_methode_qui_est_dans_le_service
		
		// Je passe mes parametres pour y avoir acces dans mes pages HTML
		$this->resultat = $objet_service->resultat;
		$this->VARS_HTML = $objet_service->VARS_HTML;
    }
	
}

?>

