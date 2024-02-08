<?php
  include "template/header.php";
?>

    <!-- Section outils -->
    <main>
      <h2 id="outils">Outils</h2>
      <table class="layoutTable">
        <tr class="ligneLayout">
          <td class="elemLayout">
            <img src="img/git.png" class="imageElem">
            <div class="boxTxt">
              <div class="elemTxt">
                <h3>Git</h3>
                <p>Gestion de projets avec Gitlab, création d'un répertoire en ligne, commandes git</p>
              </div>
            </div>     
          </td>
          <td class="elemLayout">
            <img src="img/mariaDB.png" class="imageElem">
            <div class="boxTxt">
              <div class="elemTxt">
                <h3>MariaDB</h3>
                <p>Création de fichiers SQL pour générer une BDD, mise en place et requêtage depuis MariaDB</p>
              </div>
            </div>  
          </td>
          <td class="elemLayout">
            <img src="img/apache.png" class="imageElem">
            <div class="boxTxt">
              <div class="elemTxt">
                <h3>Apache</h3>
                <p>Mise en ligne de site web, également possible avec php et une base de données MariaDB</p>
              </div>
            </div> 
          </td>
          <td class="elemLayout">
            <img src="img/directus.png" class="imageElem">
            <div class="boxTxt">
              <div class="elemTxt">
                <h3>Directus</h3>
                <p>Création d'API pour une BDD automatiquement, accès par requêtes GET, POST</p>
              </div>
            </div> 
          </td>
        </tr>
        <tr class="ligneLayout">
          <td class="elemLayout">
            <img src="img/vscode.png" class="imageElem">
            <div class="boxTxt">
              <div class="elemTxt">
                <h3>Visual Studio Code</h3>
                <p>IDE utilisable pour beaucoup de langages, principalement web</p>
              </div>
            </div>     
          </td>
          <td class="elemLayout">
            <img src="img/vs.png" class="imageElem">
            <div class="boxTxt">
              <div class="elemTxt">
                <h3>Visual Studio</h3>
                <p>IDE spécialisé dans le développement d'applications C#, mais peut aussi faire d'autres langages (ex : Python)</p>
              </div>
            </div>  
          </td>
          <td class="elemLayout">
            <img src="img/postman.png" class="imageElem">
            <div class="boxTxt">
              <div class="elemTxt">
                <h3>Postman</h3>
                <p>Logiciel pour envoyer des requêtes à une API (GET, POST, ...)</p>
              </div>
            </div> 
          </td>
        </tr>
      </table>
    </main>

<?php
  include "template/footer.php";
?>