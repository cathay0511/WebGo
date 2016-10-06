<?php

$data = array(
    array(
        'id' => 1,
        'author' => 'Pete Hunt',
        'text' => 'This is one comment',
    ),
    array(
        'id' => 2,
        'author' => 'Jordan Walke OK',
        'text' => 'This is another another comment',
    ),
);

echo json_encode($data);