<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

$ch = curl_init();
$url = 'api.openweathermap.org/data/2.5/forecast?q=slidell&units=imperial&appid=34634807313311ddca383c472b7199ea';
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HEADER, 0);

$output = curl_exec($ch);

if($output === FALSE){
    echo "CURL_ERROR: " . curl_error($ch);
} 

curl_close($ch);

exit($output);