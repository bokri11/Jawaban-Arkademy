<?php

function right($string, $n)
{
    $balik = strrev($string);
    $hsil = strrev(substr($balik, 0, $n));
    return $hasil;
}

echo right("PEMOGRAMAN", 5);

?>
