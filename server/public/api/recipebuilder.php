<?php
        print("success");
  define("INTERNAL", true);
    require_once('functions.php');
    require_once('db_connection.php');
    set_exception_handler('error_handler');

    switch($_SERVER['REQUEST_METHOD'])
    {
      case 'POST':
        require_once('cart_add.php');
        break;
      case 'GET':
        print("success");
        break;
      case 'DELETE':
        require_once('cart_remove.php');
        break;
    }
    
?>
