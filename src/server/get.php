<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    $str = "";

    if (array_key_exists("str", $_GET))
        $str = $_GET['str'];

    $data = [];
    $data['query'] = $str;
    if ($str !== "") {
        $data['request'] = 'und zurück';
    } else
        $data['request'] = 'leer zurück';

    echo json_encode($data);
?>