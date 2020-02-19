<?php


    if(!defined("INTERNAL")){
        exit('Direct Access Not Allowed');
    }


    // CAPTURE CONFIRMED INGREDIENTS
    $confirmedIngredients = getBodyData();
    // exit();

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

    
    for ($i = 0; $i <= count($outputTestOne[$i]); $i++){

        for ($j = 0; $j <= count($outputTestOne[$i]['ingredients']); $j++){

            // CHECK IF THE CURRENT RECIPE HAS THE CONFIRMED INGREDIENT
            if (in_array( $outputTestOne[$i]['ingredients'][$j],$confirmedIngredients['confirmedIngredients'] )){
                // $confirmedRecipes[] = $outputTestOne[$i]['id'];
                array_push($confirmedRecipes, $outputTestOne[$i]['id']);
                break;
            }

        }

        // while ($outputTestOne[$i] = mysqli_fetch_assoc($getRecipes)){

        //     if ( array_key_exists( $outputTestOne[$i]['ingredients'] ,$confirmedIngredients) {
        //         $confirmedRecipes[] = $outputTestOne[$i]['id'];
        //         break;
        //     }
        // }
    }

    // print(json_encode($confirmedRecipes));
    // exit();
    $ingredientsSeparatedByComma = implode(', ', $confirmedRecipes);

    // after pushing to new array, make a new query to fetch recipes


    $finalQuery = "SELECT * FROM `recipes` WHERE `recipes`.id IN ($ingredientsSeparatedByComma)";

    $finalQueryResult = mysqli_query($conn, $finalQuery);

    if (!$finalQueryResult) throw new Exception('Query Failure - ' . mysqli_error($conn));

    $finalOutput = [];

    while ($row = mysqli_fetch_assoc($finalQueryResult)) $finalOutput[] = $row;





    print(json_encode($finalOutput));

?>