/*
  *fonction de connection d'un pro a utiliser dans la couche service
  */

  public function check_connect_pro(){
    // en amont je récupère le siret du login soumis
    $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "select_siret_pro.sql";
    $this->resultat["siret_pro"]= $this->oBdd->getSelectDatas($spathSQL, array(
      "login_pro" => $this->VARS_HTML["login_pro"]
    ));
    
    if (count($this->resultat["siret_pro"]) > 0)	{
      // ensuite je vérifie si login et mdp sont correct	
      $spathSQL= $this->GLOBALS_INI["PATH_HOME"] . $this->GLOBALS_INI["PATH_MODEL"] . "select_pro.sql";
      $this->resultat["tunnel_commande_select_pro"]= $this->oBdd->getSelectDatas($spathSQL, array(
        "login_pro" => $this->VARS_HTML["login_pro"], 
        "mdp_pro" => crypterssl($this->resultat["siret_pro"][0]["siret"], $this->VARS_HTML["mdp_pro"])
      ));
      if (count($this->resultat["siret_pro"]) == 1)	{
        // bon login et pass
      }  else  {
        // mauvais login et pass
      }
    }
    
  }