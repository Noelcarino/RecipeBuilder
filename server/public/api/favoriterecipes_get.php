<?php


    if(!defined("INTERNAL")){
        exit('Direct Access Not Allowed');
    }

    $getFavoritesQuery = "SELECT * FROM `favoriterecipes`";
    $getFavoritesResult = mysqli_query($conn, $getFavoritesQuery);

    if (!$getFavoritesQuery) throw new Exception('Query Failuer - ' . mysqli_error($conn));

    $output = [];
    while($row = mysqli_fetch_assoc($getFavoritesResult)) $output[] = $row;

    if ($output === "[]") exit();
    print(json_encode($output));
?>