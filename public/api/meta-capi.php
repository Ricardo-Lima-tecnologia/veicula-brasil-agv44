<?php
header('Access-Control-Allow-Origin: https://veiculabrasilagv.com.br');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

$PIXEL_ID     = '856498283734790';
$ACCESS_TOKEN = 'EAANz2YiFee4BRkJAkOZABZCSwxtY7BNHrVCNwZA4rNzc7QIyi1iaPz5SrbYkYknVi0Xfe02oubFQ9dZBWoefPdiVnZAx4BwPuP1UFEdFonf770JSCOnlXMTy6owycQmLsA6eGGoZAQER164bUmnRX1hpIu8Dspt729zZBT0uwFZB4WxekgsFbxWtZCjZCF2QZBoJ1ZAWugZDZD';

$body = json_decode(file_get_contents('php://input'), true);
if (!$body) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit();
}

$eventName      = $body['eventName']      ?? 'PageView';
$eventId        = $body['eventId']        ?? uniqid('ev_', true);
$userData       = $body['userData']       ?? [];
$customData     = $body['customData']     ?? [];
$eventSourceUrl = $body['eventSourceUrl'] ?? 'https://veiculabrasilagv.com.br';

$userData['client_ip_address'] = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '';
$userData['client_user_agent'] = $_SERVER['HTTP_USER_AGENT'] ?? '';

$payload = [
    'data' => [[
        'event_name'       => $eventName,
        'event_time'       => time(),
        'event_id'         => $eventId,
        'event_source_url' => $eventSourceUrl,
        'action_source'    => 'website',
        'user_data'        => $userData,
        'custom_data'      => $customData,
    ]]
];

$ch = curl_init("https://graph.facebook.com/v20.0/{$PIXEL_ID}/events?access_token={$ACCESS_TOKEN}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_TIMEOUT, 5);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

http_response_code($httpCode ?: 200);
echo $response ?: json_encode(['error' => 'No response from Meta']);
