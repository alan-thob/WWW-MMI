<?php

// Paramètres de connexion à la base de données
$serveur = "localhost"; // ou l'adresse IP du serveur de base de données
$utilisateur = "root"; // votre nom d'utilisateur MySQL
$motDePasse = ""; // votre mot de passe MySQL
$baseDeDonnees = "www_mmi"; // le nom de votre base de données

// Connexion à la base de données
$connexion = new mysqli($serveur, $utilisateur, $motDePasse, $baseDeDonnees);

// Vérifier la connexion
if ($connexion->connect_error) {
    die("La connexion à la base de données a échoué : " . $connexion->connect_error);
}

// Vous pouvez maintenant utiliser $connexion pour effectuer des requêtes ultérieurement

// Fermer la connexion
$connexion->close();
?>