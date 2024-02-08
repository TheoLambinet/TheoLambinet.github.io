<?php
include "users/bdd.php";

$prenom = $_POST["prenom"];
$nom = $_POST["nom"];
$obj = $_POST["objet"];
$msg = $_POST["msg"];

$conn = mysqli_connect($serveur, $login, $mdp, $bdd);

$req = "INSERT INTO Message (prenom, nom, objet, msg) VALUES ('$prenom', '$nom', '$obj', '$msg')";
$res = mysqli_query($conn, $req);

mysqli_close($conn);

header("Location: index.php");
?>