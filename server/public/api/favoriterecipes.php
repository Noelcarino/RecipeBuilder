<?php

    define("INTERNAL", true);
    require_once('functions.php');
    require_once('db_connection.php');
    set_exception_handler('error_handler');

    switch($_SERVER['REQUEST_METHOD'])
    {
      case 'POST':
        require_once('favoriterecipes_post.php');
        break;
      case 'GET':
        require_once('favoriterecipes_get.php');
        break;
      case 'DELETE':
        require_once('cart_remove.php');
        break;
    }
?>