<?php

$iterator = new GlobIterator('*.php');

foreach ($iterator as $file)
{
    echo $file, PHP_EOL;
}