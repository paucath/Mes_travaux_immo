<?php
require_once "profil_pro_service.php";
/**
 * Class Profil_pro_profil_update | fichier profil_pro_profil_update.php
 *
 * Permet de update les infos du profil pro onglet profil.
 *
 * Cette classe necessite l'utilisation de la classe :
 *
 * require_once "profil_pro_service.php";
 *
 * @package Mes travaux immo
 * @subpackage profil pro profil update
 * @author CATHELAIN Pauline
 * @copyright  
 * @version v1.0
 */

Class Profil_pro_profil_update	{
	
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
		$objet_service->profil_update();
		// Je passe mes parametres pour y avoir acces dans mes pages HTML
		$this->resultat = $objet_service->resultat;
		$this->VARS_HTML = $objet_service->VARS_HTML;
    }
	
}

?>
