<?php

$dirIterator = new RecursiveDirectoryIterator('../');

$iterator = new RecursiveIteratorIterator($dirIterator);

foreach ($iterator as $file)
{
    $prefix = str_repeat('    ', $iterator->getDepth());
    echo $prefix, ' - ', $file, PHP_EOL;
}