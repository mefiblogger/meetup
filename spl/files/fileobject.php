<?php

$file = new SplFileObject('test.txt');

foreach ($file as $line)
{
    echo $line;
}