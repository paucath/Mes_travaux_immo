SELECT COUNT(id_projet) AS nbr_projet
FROM `projet`
WHERE id_pro="@id_pro" AND MONTH(date_acceptation)="@mois" AND YEAR(date_acceptation)="@annee" 
