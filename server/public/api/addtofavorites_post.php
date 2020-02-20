<?php

    if(!defined("INTERNAL")){
        exit('Direct Access Not Allowed');
    }

    $data = getBodyData();
    $currentUser = $data['currentUser'];
    $recipeId = $data['recipeId'];


    // Check if recipe is in database
    $queryCheck = "SELECT * 
                     FROM `favoriterecipes` 
                       WHERE `favoriterecipes`.`userName` = '$currentUser'
                         AND `favoriterecipes`.`recipeId` = $recipeId";
    $queryCheckResult = mysqli_query($conn, $queryCheck);

    if (!$queryCheckResult) throw new Exception('Query Failure - '.mysqli_error($conn));

    $output = [];
    while ($row = mysqli_fetch_assoc($queryCheckResult)) $output[] = $row;

    
    // If output is not empty, that means recipe is in database.

    if ($output === []){
        
        $queryAddToFavorites = "INSERT 
                                  INTO `favoriterecipes` (`id`, `userName`, `recipeId`) 
                                    VALUES (NULL, '$currentUser', '$recipeId');";
        $queryAddToFavoritesResult = mysqli_query($conn, $queryAddToFavorites);

        if(!$queryAddToFavoritesResult) throw new Exception('Query Failure - '.mysqli_error($conn));

        $finalOutput = [];
        while($row = mysqli_fetch_assoc($queryAddToFavoritesResult)) $finalOutput[] = $row;

        print "added to favorites";
        print(json_encode($finalOutput));
    } else {
        print(json_encode($output));
        exit();
    }


    // If output is = [], that means, recipe is not in database

?>