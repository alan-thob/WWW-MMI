<?php
// Inclure le fichier de connexion à la base de données
include('../controller/db_connect.php');
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Question 1</title>
    <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="../assets/css/parcours.css" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>

<body class="unselectable">

<div class="navbar">
    <div class="logo">
        <a href="../welcome.php"><img src="../assets/img/header/logo.svg" alt="Logo"></a>
    </div>
</div>

<div class="image-parcours">
    <img src="../assets/img/parcours/question1-2.png" usemap="#image-map">

    <map name="image-map">
        <area id="btnDiscuter" target="" alt="" title="" href="" coords="55,385,410,437" shape="rect"> <!-- Bouton Taper la discut avec le prof -->
        <area id="btn-panique" target="" alt="" title="" href="" coords="341,668,694,717" shape="rect"><!-- Bouton Tu paniques et fermes la porte -->
        <area id="btn-excuse" target="" alt="" title="" href="" coords="1066,526,1315,575" shape="rect"><!-- Bouton Tu t'excuses et pars -->
    </map>
</div>

<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script>
    $(document).ready(function() {
        $("#btnDiscuter").click(function() {
            // Envoyer une requête AJAX pour mettre à jour la base de données
            $.ajax({
                type: "POST",
                url: "../controller/update_value_js.php", // Remplacez cela par le chemin correct vers votre script PHP
                data: { action: "increment_value" },
                success: function(response) {
                    // Mettez à jour l'affichage ou effectuez d'autres actions si nécessaire
                    console.log("La valeur a été incrémentée avec succès.");
                },
                error: function(error) {
                    console.error("Erreur lors de la mise à jour de la valeur : " + error.responseText);
                }
            });
        });
    });
</script>

</body>
</html>