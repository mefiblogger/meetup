<?php

$heap = new SplMaxHeap();

$heap->insert(1);
$heap->insert(15);
$heap->insert(2);

foreach ($heap as $h)
{
    //echo $h . PHP_EOL;
}













class Ingatlan
{
    protected $size;

    public function __construct($size)
    {
        $this->size = $size;
    }

    public function getSize()
    {
        return $this->size;
    }

    public function __toString()
    {
        return (string) $this->size;
    }
}

class IngatlanHeap extends SplMinHeap
{
    protected function compare($value1, $value2)
    {
        if ($value1->getSize() < $value2->getSize())
        {
            return 1;
        }
        elseif ($value1->getSize() === $value2->getSize())
        {

            return 0;
        }

        return -1;
    }
}

$ingatlanHeap = new IngatlanHeap();

$a = new Ingatlan(1);
$b = new Ingatlan(123);
$c = new Ingatlan(32);

$ingatlanHeap->insert($a);
$ingatlanHeap->insert($b);
$ingatlanHeap->insert($c);

foreach ($ingatlanHeap as $h)
{
    echo $h . PHP_EOL;
}