<?php

$conn = mysqli_connect('localhost', 'root', 'root', 'recipebuilder');

    if (!$conn){
        throw new Exception('Connection error: ' . mysqli_connect_error());
    }
?>
