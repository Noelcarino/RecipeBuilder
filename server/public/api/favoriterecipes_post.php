<?php
    if(!defined("INTERNAL")){
        exit('Direct Access Not Allowed');
    }

    $bodyData = getBodyData();
    $currentUser = $bodyData['currentUser'];

    // $getFavoritesQuery = "SELECT * FROM `favoriterecipes`";
    $getFavoritesQuery = "SELECT * 
                            FROM `recipes` 
                              WHERE `recipes`.`id` 
                                IN (SELECT `favoriterecipes`.`recipeId` 
                                  FROM `favoriterecipes`
                                    WHERE `favoriterecipes`.`userName` = '$currentUser')
                        ";

    $getFavoritesResult = mysqli_query($conn, $getFavoritesQuery);

    if (!$getFavoritesQuery) throw new Exception('Query Failuer - ' . mysqli_error($conn));

    $output = [];
    while($row = mysqli_fetch_assoc($getFavoritesResult)) $output[] = $row;

    if ($output === "[]") exit();
    print(json_encode($output));

?>