<?php

function autoload($class)
{
    $filename = $class . '.class.php';

    if (file_exists($filename)) {
        require_once($class . '.class.php');
    } else {
        throw new Exception('Nincs meg az osztaly: ' . $class);
    }
}

spl_autoload_register('autoload');

new Abc();