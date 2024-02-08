<?php
    include "template/header.php";
  
    include "users/bdd.php";

    $conn = mysqli_connect($serveur, $login, $mdp, $bdd);

    $req = "SELECT prenom, nom, objet, msg FROM Message";
    $res = mysqli_query($conn, $req);
?>

<main>

<?php
    foreach ($res as $contact) {
        echo "<p>" . $contact['prenom'] . " ".$contact['nom'] . " - " . $contact['objet'] . " : " . $contact["msg"] . "</p><br>";
    }

    mysqli_close($conn);
?>

</main>

<?php
    include "template/footer.php";
?>