<?php

$queue = new SplQueue();

$queue->push(3);
$queue->push(2);
$queue->push(1);

echo $queue->pop() . PHP_EOL;
echo $queue->pop() . PHP_EOL;
echo $queue->pop() . PHP_EOL;