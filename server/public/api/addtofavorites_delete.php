<?php

    if(!defined("INTERNAL")){
        exit('Direct Access Not Allowed');
    }

    $data = getBodyData();
    $currentUser = $data['currentUser'];
    $recipeId = $data['recipeId'];

    $queryRemoveFromFavorites = "DELETE FROM `favoriterecipes` 
                          WHERE `favoriterecipes`.`userName` = '$currentUser' 
                            AND `favoriterecipes`.`recipeId` = $recipeId";
    $queryRemoveFromFavoritesResult = mysqli_query($conn, $queryRemoveFromFavorites);

    if(!$queryRemoveFromFavoritesResult) throw new Exception('Query Failure - '.mysqli_error($conn));

?>