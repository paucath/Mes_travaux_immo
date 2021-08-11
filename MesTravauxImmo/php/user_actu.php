<?php 

include('include/data.php');
include('include/header.html');

?>
<section>
    <article class="user_actu_complet_article">
        <div class=" ml-2 ">
            <!-- titre de l'article a récupérer dans la BDD -->
            <h5>Semaine anti-déprime</h5>
        </div>
        <!-- image récupérer dans la bdd -->
        <div class="user_actu_img">
            <img src="" class="user_actu_img_article" alt="image dessert">
        </div>
        <!-- texte article récuperer de la bdd -->
        <div class="user_actu_texte">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor facilisis nisi, maximus
                tincidunt mauris hendrerit vel. Phasellus lobortis leo eu mauris laoreet semper. Nullam eu mauris ipsum.
                Cras lobortis pretium metus et consectetur. Mauris elementum ultricies tellus. Sed vel lacus tincidunt,
                maximus purus at, viverra elit. Quisque hendrerit dignissim nunc, volutpat pulvinar ex vulputate non.
                Nullam suscipit suscipit nibh, et blandit eros hendrerit sit amet. Sed rhoncus ipsum sit amet turpis
                vulputate vehicula. Maecenas bibendum nulla vel enim interdum volutpat. Ut justo mi, efficitur nec
                feugiat eget, commodo non odio.

                Mauris gravida maximus facilisis. Mauris pulvinar fringilla aliquet. Aenean bibendum mattis leo non
                mattis. Proin cursus ex non libero cursus, nec pretium eros feugiat. Phasellus non ullamcorper purus, ac
                feugiat tellus. Donec dictum arcu vitae feugiat dapibus. Nulla commodo blandit ex. Fusce aliquam
                sollicitudin justo, eget vulputate libero porta sed. Nulla scelerisque libero ut lacus faucibus, ac
                convallis sapien porta. Curabitur et volutpat magna, eu elementum tellus.

                Sed hendrerit, ligula non sodales rutrum, orci neque molestie erat, sit amet fringilla sapien augue et
                eros. Morbi ut quam laoreet, auctor sem vestibulum, accumsan orci. Curabitur et sollicitudin ligula, ac
                faucibus ligula. Aliquam erat volutpat. Etiam hendrerit orci quis vehicula posuere. Quisque pharetra
                posuere fermentum. Ut interdum velit in nisi facilisis, volutpat convallis nisl rhoncus. Vestibulum
                auctor ornare orci et accumsan. Quisque id hendrerit ligula, a molestie tortor. Sed scelerisque lectus
                vel lacinia tempor. Donec tincidunt nisi et auctor molestie. Nulla ultricies et massa in finibus. Cras
                eros mauris, sollicitudin vel eros sed, blandit consectetur lorem. Etiam felis enim, facilisis quis
                consectetur at, ornare vitae erat.</p>
        </div>
    </article>
    <div class="user_actu_vertical_line">
    </div>
    <article id="exc_article" class="user_actu_list_article ">
        <div class="exc_arrowArticle amineArticle ">
            <i onclick="hideArticle()" class="showIcon fas fa-arrow-circle-right "></i>
        </div>
        <div class="anim-lg exc_menu-right display1 amineArticle w-100 h-100 d-flex  flex-column justify-content-between my- anim_bg">
            <div class=" mr-2">
                <h5>Autres articles disponible</h5>
            </div>
            <div class="user_actu_mini_actu">
                <div>
                    <!-- image a recupérer bdd -->
                    <img src="">
                </div>
                <div>
                    <!-- titre a récupérer bdd -->
                    <p class="user_actu_mini_actu_titre">Mesure covid en vigeur</p>
                    <!-- phrase d'accroche a récupérer bdd -->
                    <p>Attention on se lave bien les main</p>
                </div>
            </div>
            <div class="user_actu_mini_actu">
                <div>
                    <!-- image a recupérer bdd -->
                    <img src="">
                </div>
                <div>
                    <!-- titre a récupérer bdd -->
                    <p class="user_actu_mini_actu_titre">Nouvelle tenue</p>
                    <!-- phrase d'accroche a récupérer bdd -->
                    <p>Ils sont beaux nos cuisiniers avec leurs nouvelles vestes!!</p>
                </div>
            </div>
            <div class="user_actu_mini_actu">
                <div>
                    <!-- image a recupérer bdd -->
                    <img src="">
                </div>
                <div>
                    <!-- titre a récupérer bdd -->
                    <p class="user_actu_mini_actu_titre">Travaux en cours</p>
                    <!-- phrase d'accroche a récupérer bdd -->
                    <p>Attention a la tête , port du casque conseillé</p>
                </div>
            </div>
        </div>
    </article>

</section>

<?php 

include_once('include/footer.html');

?>