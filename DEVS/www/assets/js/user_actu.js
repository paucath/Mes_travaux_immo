/**
 * @param {Array} aofactu Liste des articles.
 */
let aofactu = [];

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
    } else {
        sectionHide.removeClass("z-0").addClass("z-100");
    }

    var icon = $(".showIcon");
    if (icon.hasClass("assets/icons/arrow_right.png")) {
        icon.removeClass("assets/icons/arrow_right.png").addClass("assets/icons/arrow_left.png");

    } else {
        icon.removeClass("assets/icons/arrow_left.png").addClass("assets/icons/arrow_right.png");
    }


    var articleBtn = $(".amineBtn");
    if (articleBtn.hasClass("anim_hide_btn")) {
        articleBtn.removeClass("anim_hide_btn").addClass("anim_show_btn");
    } else {
        articleBtn.removeClass("anim_show_btn").addClass("anim_hide_btn");
    }
}

/**
 * Créer la liste des articles disponible à la lecture.
 * @param {Array} aofactu Données des articles.
 */
function list_article(aofactu) {
    let articles = [];

    for (let index = 0; index < aofactu.length; index++) {
        /*
         * On créer tous les élements du DOM d'une news.
         */
        // Div parente (la news).
        let parentDiv = document.createElement("div");
        parentDiv.classList.add('user_actu_mini_actu');
        parentDiv.setAttribute('id', 'mini_article');

        // Première sous div.
        let firstSubDiv = document.createElement("div");

        // Image de la news.
        let articleImage = document.createElement('img');
        articleImage.setAttribute('src', 'assets/img/' + aofactu[index]['img_actu']);

        // Deuxième sous div.
        let secSubDiv = document.createElement("div");

        // Titre de la news.
        let title = document.createElement('p');
        title.classList.add('user_actu_mini_actu_titre');
        title.innerHTML = aofactu[index]['title_news'];

        // Phrase d'accroche.
        let hook = document.createElement('p');
        hook.innerHTML = aofactu[index]['catch_phrase_news'];

        /*
         * Mettre en forme tous les éléments.
         */
        parentDiv.append(firstSubDiv);
        firstSubDiv.append(articleImage);
        parentDiv.append(secSubDiv);
        secSubDiv.append(title);
        secSubDiv.append(hook);

        /*
         * Écouter le clic sur un article.
         */
        parentDiv.addEventListener('click', event => {
            event.preventDefault(); // Stopper la propagation.
            article_complet(index); // Envoyer les données à l'autre fonction. (tes données JS ne sont pas dispo dans le DOM).
        });

        articles.push(parentDiv);
    }

    $("#mini_article").html(articles);
}

/**
 * Afficher un article entier dans le côté gauche de la page.
 * @param {Number} newsIndex L'index de l'article dans la liste des articles (global).
 */
function article_complet(newsIndex) {
    let articleToDisplay = aofactu[newsIndex];
    let sHTML1 = "";

    sHTML1 = '<div class="bande ml-2 ">';
    sHTML1 += '<h5>' + articleToDisplay["title_news"] + '</h5>';
    sHTML1 += '</div>';
    sHTML1 += '<div class="user_actu_img">';
    sHTML1 += '<img src="assets/img/' + articleToDisplay["img_actu"] + '" class="user_actu_img_article" alt="image">';
    sHTML1 += '</div>';
    sHTML1 += '<div class="user_actu_texte">';
    sHTML1 += '<p>' + articleToDisplay["article_news"] + '</p></div>';

    $('#article_complet').html(sHTML1);
}

/**
 * Récupérer les articles dans la base de données.
 */
function load_actu() {
    let requestData = {
        page: "user_actu_list",
        bJSON: 1
    }

    $.ajax({
        type: "POST",
        url: "route.php",
        async: true,
        data: requestData,
        dataType: "json",
        cache: false
    })
        .done(function (results) {
            // On s'assure de bien récupérer les news.
            if (results === null || results.length === 0 || results === undefined) {
                return;
            }

            // On actualise les news de manière global.
            aofactu = results;

            // Afficher le premier article.
            article_complet(0);

            // Afficher les news dans la partie droite.
            list_article(results);

        })
        .fail(e => alert(e.status))
}

$(document).ready(function () {
    load_actu();
});