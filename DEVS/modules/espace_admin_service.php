<?php
require_once  "initialize.php";
/**
 * Class Espace_admin_service | fichier espace_admin_service.php
 *
 * Cette class permet de gérer les différentes fonctions de modification envoyé à la BDD .
 *
 * Cette classe necessite l'utilisation de la classe :
 *
 * require_once "initialize.php";
 *
 * @package Mes travaux immo
 * @subpackage espace admin service
 * @author CATHELAIN Pauline
 * @copyright  
 * @version v1.0
 */

Class Espace_admin_service extends Initialize	{

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
    // Call Parent Constructor
    parent::__construct();

    // init variables resultat
    $this->resultat = [];

    // execute main function
  }
/*
   * lister les admins
   */
  public function admin_list(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "admin_list.sql";
    $this->resultat["espace_admin_admin_list"]= $this->oBdd->getSelectDatas($spathSQL);
}
/*
   * lister les professionnels
   */
public function pro_list(){
  $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "pro_list.sql";
  $this->resultat["espace_admin_pro_list"]= $this->oBdd->getSelectDatas($spathSQL);
}
/*
   * lister les actualités
   */
  public function actu_list(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "actu_list.sql";
    $this->resultat["espace_admin_actu_list"]= $this->oBdd->getSelectDatas($spathSQL);
  }
  /*
   * lister les abonnés
   */
  public function abo_list(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "abo_list.sql";
    $this->resultat["espace_admin_abo_list"]= $this->oBdd->getSelectDatas($spathSQL);
  }
  /*
   * lister les messages
   */
  public function message_list(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "message_list.sql";
    $this->resultat["espace_admin_message_list"]= $this->oBdd->getSelectDatas($spathSQL);
  }
  /*
   * lister le nombre d'abonnés
   */
  public function nbr_abo_list(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "nbr_abo_list.sql";
    $this->resultat["espace_admin_nbr_abo_list"]= $this->oBdd->getSelectDatas($spathSQL);
  }

/*
   * Ajouter un admin
   */
  public function admin_add(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "admin_add.sql";
    $this->resultat["espace_admin_admin_add"]= $this->oBdd->treatDatas($spathSQL, array(
      "nom" => $this->VARS_HTML["nom"], 
      "prenom" => $this->VARS_HTML["prenom"], 
      "email" => $this->VARS_HTML["email"],
      "login_admin" => $this->VARS_HTML["login_admin"],
      "mdp" => $this->VARS_HTML["mdp"]
      ));
  }

  /*
   * Modifier un admin
   */
  public function admin_update(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "admin_update.sql";
    $this->resultat["espace_admin_admin_update"]= $this->oBdd->treatDatas($spathSQL, array(
                                 "id_admin" => $this->VARS_HTML["id_admin"], 
                                  "nom" => $this->VARS_HTML["nom"], 
                                  "prenom" => $this->VARS_HTML["prenom"], 
                                  "email" => $this->VARS_HTML["email"], 
                                  "login_admin" => $this->VARS_HTML["login_admin"],
                                  "mdp" => $this->VARS_HTML["mdp"]
                                  ));
  }

  /*
   * Modifier un pro
   */
  public function pro_update(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "pro_update.sql";
    $this->resultat["espace_admin_pro_update"]= $this->oBdd->treatDatas($spathSQL, array(
                                 "id_pro" => $this->VARS_HTML["id_pro"], 
                                  "societe_pro" => $this->VARS_HTML["societe_pro"], 
                                  "tel_pro" => $this->VARS_HTML["tel_pro"], 
                                  "address_pro" => $this->VARS_HTML["address_pro"], 
                                  "mail_pro" => $this->VARS_HTML["mail_pro"],
                                  "siret_pro" => $this->VARS_HTML["siret_pro"],
                                  "login_pro" => $this->VARS_HTML["login_pro"],
                                  "mdp_pro" => $this->VARS_HTML["mdp_pro"],
                                  "statut_ab" => $this->VARS_HTML["statut_ab"]
                                  ));
  }

  /*
   * Ajouter une actu
   */
  public function actu_add(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "actu_add.sql";
    $this->resultat["espace_admin_actu_add"]= $this->oBdd->treatDatas($spathSQL, array(
      "title_news" => $this->VARS_HTML["title_news"], 
      "catch_phrase_news" => $this->VARS_HTML["catch_phrase_news"], 
      "article_news" => $this->VARS_HTML["article_news"],
      "img_actu" => $this->VARS_HTML["img_actu"]
      ));
  }

   /*
   * Modifier unu actu
   */
  public function actu_update(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "actu_update.sql";
    $this->resultat["espace_admin_actu_update"]= $this->oBdd->treatDatas($spathSQL, array(
                                 "id_news" => $this->VARS_HTML["id_news"], 
                                 "title_news" => $this->VARS_HTML["title_news"], 
                                 "catch_phrase_news" => $this->VARS_HTML["catch_phrase_news"], 
                                 "article_news" => $this->VARS_HTML["article_news"],
                                 "img_actu" => $this->VARS_HTML["img_actu"]
                                  ));
  }
  /*
   * Supprimer un admin
   */
  public function admin_delete(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "admin_delete.sql";
    $this->resultat["espace_admin_admin_delete"]= $this->oBdd->treatDatas($spathSQL, array(
                                  "id_admin" => $this->VARS_HTML["id_admin"]
    ));
  }

  /*
   * Supprimer le statut d'abonné d'un pro
   */
  public function pro_delete(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "pro_delete.sql";
    $this->resultat["espace_admin_pro_delete"]= $this->oBdd->treatDatas($spathSQL, array(
                                  "id_pro" => $this->VARS_HTML["id_pro"],
                                  "statut_ab" => $this->VARS_HTML["statut_ab"]
    ));
  }

  /*
   * Supprimer une actu
   */
  public function actu_delete(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "actu_delete.sql";
    $this->resultat["espace_admin_actu_delete"]= $this->oBdd->treatDatas($spathSQL, array(
                                  "id_news" => $this->VARS_HTML["id_news"]
    ));
  }

  /*
   * Supprimer un message
   */
  public function message_delete(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "message_delete.sql";
    $this->resultat["espace_admin_message_delete"]= $this->oBdd->treatDatas($spathSQL, array(
                                  "id_message" => $this->VARS_HTML["id_message"]
    ));
  }


  /*
   * Envoyer un message
   */
  public function message_send(){

    $recepient = $this->VARS_HTML["email"];
    
    $text = $this->VARS_HTML["texte"];
    $message = "Text: $text";
    
    $pagetitle =  $this->VARS_HTML["objet"];
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"");

    $this->resultat["espace_admin_message_send"] = 0;
  }

  /*
   * lister les catégories des devis
   */
  public function cat_list(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "cat_list.sql";
    $this->resultat["espace_admin_devis_cat_list"]= $this->oBdd->getSelectDatas($spathSQL);
  }

  /*
   * lister les actualités
   */
  public function souscat_list(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "souscat_list.sql";
    $this->resultat["espace_admin_devis_souscat_list"]= $this->oBdd->getSelectDatas($spathSQL);
  }

  /*
   * Ajouter une catégorie un devis
   */
  public function cat_add(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "cat_add.sql";
    $this->resultat["espace_admin_devis_cat_add"]= $this->oBdd->treatDatas($spathSQL, array(
      "categorie" => $this->VARS_HTML["categorie"],
      "visibilite" => $this->VARS_HTML["visibilite"]
      ));
  }

  /*
   * Ajouter une sous catégorie un devis
   */
  public function souscat_add(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "souscat_add.sql";
    $this->resultat["espace_admin_devis_souscat_add"]= $this->oBdd->treatDatas($spathSQL, array(
          "id_categorie" => $this->VARS_HTML["id_categorie"],
          "sous_categorie" => $this->VARS_HTML["sous_categorie"],
          "nbr_piece" => $this->VARS_HTML["nbr_piece"],
          "m_carre" => $this->VARS_HTML["m_carre"],
          "visibilite" => $this->VARS_HTML["visibilite"]

      ));
  }

   /*
   * rendre visible une categorie
   */
  public function cat_visibilite(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "cat_visibilite.sql";
    $this->resultat["espace_admin_devis_cat_visibilite"]= $this->oBdd->treatDatas($spathSQL, array(
                                  "id_categorie" => $this->VARS_HTML["id_categorie"]
    ));
  }

     /*
   * rendre visible une sous categorie
   */
  public function souscat_visibilite(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "souscat_visibilite.sql";
    $this->resultat["espace_admin_devis_souscat_visibilite"]= $this->oBdd->treatDatas($spathSQL, array(
                                  "id_sous_categorie" => $this->VARS_HTML["id_sous_categorie"]
    ));
  }

     /*
   * rendre invisible une categorie
   */
  public function cat_invisibilite(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "cat_invisibilite.sql";
    $this->resultat["espace_admin_devis_cat_invisibilite"]= $this->oBdd->treatDatas($spathSQL, array(
                                  "id_categorie" => $this->VARS_HTML["id_categorie"]
    ));
  }

     /*
   * rendre invisible une sous categorie
   */
  public function souscat_invisibilite(){
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "souscat_invisibilite.sql";
    $this->resultat["espace_admin_devis_souscat_invisibilite"]= $this->oBdd->treatDatas($spathSQL, array(
                                  "id_sous_categorie" => $this->VARS_HTML["id_sous_categorie"]
    ));
  }



  /**
   *
   * Destroy service
   *
   */
  public function __destruct() {
    // Call Parent destructor
    parent::__destruct();
    // destroy objet_service
  }


}
  

?>

