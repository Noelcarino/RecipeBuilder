<?php


    if(!defined("INTERNAL")){
        exit('Direct Access Not Allowed');
    }


    // CAPTURE CONFIRMED INGREDIENTS
    $data = getBodyData();

    $getRecipes = "SELECT `id`,`ingredients` FROM `recipes`";
    $getRecipesResult = mysqli_query($conn, $getRecipes);

    if (!$getRecipes) throw new Exception('Query Failure - ' . mysqli_error($conn));

    $outputTestOne = [];
    while($row = mysqli_fetch_assoc($getRecipesResult)) {
        $row['ingredients'] = explode(", ", $row['ingredients']);
        $outputTestOne[] = $row;
    }


    if ($outputTestOne === "[]") exit();


    // Find all recipes that include confirmed ingredients
    // if recipe passes the test, push to new array;
    $confirmedRecipes = [];

    for ($i = 0; $i <= count($outputTestOne); $i++){

        for ($j = 0; $j <= count($outputTestOne[$i]['ingredients']); $j++){

            // CHECK IF THE CURRENT RECIPE HAS THE CONFIRMED INGREDIENT
            if (in_array( $outputTestOne[$i]['ingredients'][$j],$data['confirmedIngredients'] )){
                array_push($confirmedRecipes, $outputTestOne[$i]['id']);
                break;
            }

        }
    }

    $ingredientsSeparatedByComma = implode(', ', $confirmedRecipes);

    // after pushing to new array, make a new query to fetch recipes
    $finalQuery = "SELECT * FROM `recipes` WHERE `recipes`.id IN ($ingredientsSeparatedByComma)";
    $finalQueryResult = mysqli_query($conn, $finalQuery);

    if (!$finalQueryResult) throw new Exception('Query Failure - ' . mysqli_error($conn));
    
    $recommendedRecipes = [];
    while ($row = mysqli_fetch_assoc($finalQueryResult)) $recommendedRecipes[] = $row;
    

    // get favorite recipes so that recommended recipes marks confirmed recipes as favorite

    $currentUser = $data['currentUser'];
    $queryGetFavorites = "SELECT * 
                            FROM `favoriterecipes` 
                              WHERE `favoriterecipes`.`userName` = '$currentUser'";
    $queryGetFavoritesResult = mysqli_query($conn, $queryGetFavorites);

    if (!$queryGetFavoritesResult) throw new Exception('Query Failure - '.mysqli_error($conn));

    $favoriteRecipeArray = [];

    while ($row = mysqli_fetch_assoc($queryGetFavoritesResult)) $favoriteRecipeArray[] = $row;

    $finalOutput = [];
    array_push($finalOutput, $recommendedRecipes, $favoriteRecipeArray);

    print(json_encode($finalOutput));

?>