<?php


    $currentRecipe = getBodyData();
    $recipeId = $currentRecipe['recipeId'];

    $recipeInstructionsQuery = "SELECT `instructions` 
                                  FROM `recipeinstructions` 
                                    WHERE `recipeinstructions`.`recipeId` = '$recipeId'";

    $recipeInstructionsQueryResult = mysqli_query($conn, $recipeInstructionsQuery);

    if (!$recipeInstructionsQueryResult) throw new Exception("Query Failure - " . mysqli_error($conn));

    $output = [];
    $row = mysqli_fetch_assoc($recipeInstructionsQueryResult);
    $pieces = preg_split('/\\r\\n|\\r|\\n/', $row['instructions']);
    for ($i = 0; $i < count($pieces); $i++)if ($pieces[$i] !== "" && $pieces[$i] !== " ")$output[] = $pieces[$i];

    if ($output === "[]") exit();
    print(json_encode($output));
?>