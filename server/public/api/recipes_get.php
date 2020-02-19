<?php


    if(!defined("INTERNAL")){
        exit('Direct Access Not Allowed');
    }


    // CAPTURE CONFIRMED INGREDIENTS
    $confirmedIngredients = getBodyData();
    print($confirmedIngredients['confirmedIngredients']);
    exit();

    $getRecipes = "SELECT `id`,`ingredients` FROM `recipes`";
    $getRecipesResult = mysqli_query($conn, $getRecipes);

    if (!$getRecipes) throw new Exception('Query Failure - ' . mysqli_error($conn));

    $outputTestOne = [];
    while($row = mysqli_fetch_assoc($getRecipesResult)) {
        $row['ingredients'] = explode(", ", $row['ingredients']);
        $outputTestOne[] = $row;
    }

    if ($outputTestOne === "[]") exit();


    // Check each recipe's ingredients

    // for ($i = 0; $i <= count($outputTestOne[$i]); $i++){
    //     print ($i);
    //     for ($j = 0; $j <= count($outputTestOne[$i]['ingredients']); $j++){
    //         print($j);
    //         print($outputTestOne[$i]['ingredients'][$j]);
    //     }
    //     print(' ');
    // }





    // if recipe passes the test, push to new array;





    // after pushing to new array, make a new query to fetch recipes







    print(json_encode($outputTestOne));

?>