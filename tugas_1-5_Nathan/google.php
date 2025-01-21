<?php
require 'vendor/autoload.php'; 

session_start();

$client_id = '389131198127-2jada5oeqkqfrftqeoe0botftgrqjksb.apps.googleusercontent.com'; 
$client_secret = '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'; 
$redirect_uri = 'http://localhost/form_Nathan/tugas_1-5_Nathan/google.php';

$client = new Google\Client();
$client->setClientId($client_id);
$client->setClientSecret($client_secret);
$client->setRedirectUri($redirect_uri);
$client->addScope('email');
$client->addScope('profile');

if (!isset($_GET['code'])) {
    $auth_url = $client->createAuthUrl();
    echo "<script>window.open('" . filter_var($auth_url, FILTER_SANITIZE_URL) . "', '_blank', 'width=500,height=600');</script>";
} else {
    try {
        $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
        $client->setAccessToken($token);
       
        $google_service = new Google\Service\Oauth2($client);
        $user_info = $google_service->userinfo->get();

            $_SESSION['user'] = [
            'id' => $user_info->id,
            'name' => $user_info->name,
            'email' => $user_info->email,
            'picture' => $user_info->picture,
        ];

    
        echo "
            <script>
                window.opener.localStorage.setItem('user', '" . json_encode($_SESSION['user']) . "');
                window.close();
                window.opener.location.href = 'profileGoogle.html';
            </script>
        ";
    } catch (Exception $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
?>
