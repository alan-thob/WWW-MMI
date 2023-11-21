<?php
// Ajoutez ceci au début du script PHP
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Inclure le fichier de connexion à la base de données
include('db_connect.php');

// Vérifier si l'action est définie
if (isset($_POST['action']) && $_POST['action'] == 'increment_value') {
    // Exécuter la requête pour incrémenter la valeur dans la table "dev"
    $resultat = $connexion->query("UPDATE dev SET value = value + 1");

    // Vérifier si la requête a réussi
    if ($resultat) {
        echo "La valeur a été incrémentée avec succès.";
    } else {
        echo "Erreur lors de l'incrémentation de la valeur : " . $connexion->error;
    }
}

// Fermer la connexion
$connexion->close();
?>