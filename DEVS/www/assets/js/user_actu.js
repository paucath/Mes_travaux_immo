	// Document ready

$(document).ready(function() {
    load_actu();
});
    
    
    /**
 * Hide or Show responsive menu
 */
         var article = $(".amineArticle");

    function hideArticle() {
             var article = $(".amineArticle");
            if (article.hasClass("anim_hide_article")) {
                article.removeClass("anim_hide_article").addClass("anim_show_article");
            } else {
                article.removeClass("anim_show_article").addClass("anim_hide_article");
            }
            var sectionHide = $('.z-index');
            if (sectionHide.hasClass('z-100')) {
                sectionHide.removeClass("z-100").addClass("z-0");
            }else{
                sectionHide.removeClass("z-0").addClass("z-100");
            }
        
            var icon = $(".showIcon");
            if (icon.hasClass("fa-arrow-circle-right")) {
                icon.removeClass("fa-arrow-circle-right").addClass("fa-arrow-circle-left");
        
            } else {
                icon.removeClass("fa-arrow-circle-left").addClass("fa-arrow-circle-right");
            }
        
        
            var articleBtn = $(".amineBtn");
            if (articleBtn.hasClass("anim_hide_btn")) {
                articleBtn.removeClass("anim_hide_btn").addClass("anim_show_btn");
            } else {
                articleBtn.removeClass("anim_show_btn").addClass("anim_hide_btn");
            }
        }

/** création liste article */

function list_article(aofactu){
    var i;
    var sHTML2="";
 

    for(i=0 ; i<aofactu.length; i++){
        sHTML2 += '<div class="user_actu_mini_actu" id="mini_article" onClick="article_complet('+ aofactu[i] +')" >';
        sHTML2+='<div><img src="assets/img/'+aofactu[i]["img_actu"]+'"></div>';
        sHTML2+=' <div><p class="user_actu_mini_actu_titre">'+ aofactu[i]["title_news"] + '</p>';
        sHTML2+='<p>' + aofactu[i]["catch_phrase_news"]+ '</p></div></div>';
    }
    $("#mini_article").html(sHTML2);
}

/** création article complet */
function article_complet(aofactu){
    
    var sHTML1="";
    console.log(aofactu);

        sHTML1='<div class="bande ml-2 ">';
        sHTML1+='<h5>'+ aofactu["title_news"] +'</h5>';
        sHTML1+='</div>';
        sHTML1+='<div class="user_actu_img">';
        sHTML1+='<img src="assets/img/'+ aofactu["img_actu"] + '" class="user_actu_img_article" alt="image">';
        sHTML1+='</div>';
        sHTML1+='<div class="user_actu_texte">';
        sHTML1+='<p>'+ aofactu["article_news"] + '</p></div>';
        
        $('#article_complet').html(sHTML1);
    
    
}



/** récupération info de la BDD */

function load_actu() {
	// Ici je mets les paramètres pour appeler un autre PHP :
	// Je décide de l'appeler "user_actu_list"
	// Qui va s'occuper d'aller chercher mes données dans la base
	// Le paramètre bJSON à 1, me permet que ma page ne se recharge pas
	// Mais reste bien figée
	var datas = {
		page: "user_actu_list",
		bJSON: 1
	}
	// J'exécute le POST
	// Dans le ".done", le retour du PHP "user_actu_list", soit "user_actu_list.html"
	// Si tout s'est bien passé
	// Dans le ".fail", si il y'a eu une erreur d'exécution côté serveur.
	$.ajax({
		type: "POST",
		url: "route.php",
		async: true,
		data: datas,
		dataType: "json",
		cache: false
	})
		.done(function (result) {
			console.log("result", result);
			// C'est dans result que je recevrais les données de la base de données
			// Je fais un console.log pour voir son contenu
			// Ici j'aurais à coder de parcourir le tableau "result"

			

			// organisation des données sur ma page 
            
			article_complet(result[0]);
            list_article(result);

		})
		.fail(function (err) {
			alert('error : ' + err.status);
		})
		.always(function () {
			console.log('arguments supplier list', arguments);
		})
}