<?php
// Secure media upload endpoint for Epsilon Blog
// Accepts images AND videos (mp4) for Instagram/social media posts
// Deploy to: blog.epsilon-technology.com/upload.php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Upload-Secret');
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

// Secret key check
$secret = $_SERVER['HTTP_X_UPLOAD_SECRET'] ?? '';
$validSecret = 'epsilon_upload_2026_secure';

if ($secret !== $validSecret) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit();
}

if (empty($_FILES['file'])) {
    http_response_code(400);
    echo json_encode(['error' => 'No file uploaded', 'files' => $_FILES]);
    exit();
}

$file = $_FILES['file'];

// Check for upload errors
if ($file['error'] !== UPLOAD_ERR_OK) {
    $uploadErrors = [
        UPLOAD_ERR_INI_SIZE   => 'File exceeds upload_max_filesize in php.ini',
        UPLOAD_ERR_FORM_SIZE  => 'File exceeds MAX_FILE_SIZE in form',
        UPLOAD_ERR_PARTIAL    => 'File was only partially uploaded',
        UPLOAD_ERR_NO_FILE    => 'No file was uploaded',
        UPLOAD_ERR_NO_TMP_DIR => 'Missing temporary folder',
        UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk',
        UPLOAD_ERR_EXTENSION  => 'A PHP extension stopped the upload',
    ];
    $msg = $uploadErrors[$file['error']] ?? 'Unknown upload error: ' . $file['error'];
    http_response_code(500);
    echo json_encode(['error' => $msg]);
    exit();
}

// Validate file type — images + video/mp4
$allowedTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/gif',
    'video/mp4',
    'video/quicktime', // .mov files sometimes sent as this
];

// Use finfo for reliable MIME detection (don't trust client-sent type alone)
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$detectedType = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);

// Accept if either client-reported or server-detected type is allowed
$clientType = $file['type'];
if (!in_array($detectedType, $allowedTypes) && !in_array($clientType, $allowedTypes)) {
    http_response_code(400);
    echo json_encode([
        'error' => 'Invalid file type',
        'detected' => $detectedType,
        'client_type' => $clientType,
    ]);
    exit();
}

// Use detected MIME for extension mapping
$mimeToExt = [
    'image/jpeg'      => 'jpg',
    'image/jpg'       => 'jpg',
    'image/png'       => 'png',
    'image/webp'      => 'webp',
    'image/gif'       => 'gif',
    'video/mp4'       => 'mp4',
    'video/quicktime' => 'mp4',
];
$ext = $mimeToExt[$detectedType] ?? $mimeToExt[$clientType] ?? pathinfo($file['name'], PATHINFO_EXTENSION);

// Max 200MB (reels can be large)
$maxSize = 200 * 1024 * 1024;
if ($file['size'] > $maxSize) {
    http_response_code(400);
    echo json_encode(['error' => 'File too large (max 200MB). Size: ' . round($file['size'] / 1024 / 1024, 1) . 'MB']);
    exit();
}

// Generate safe unique filename
$filename = time() . '_' . bin2hex(random_bytes(6)) . '.' . $ext;

// Upload to web root
$uploadDir = __DIR__ . '/';
$uploadPath = $uploadDir . $filename;

if (move_uploaded_file($file['tmp_name'], $uploadPath)) {
    $url = 'https://blog.epsilon-technology.com/' . $filename;
    echo json_encode([
        'success'  => true,
        'url'      => $url,
        'filename' => $filename,
        'size'     => $file['size'],
        'type'     => $detectedType,
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error'      => 'Failed to save file to disk',
        'upload_dir' => $uploadDir,
        'writable'   => is_writable($uploadDir),
    ]);
}
?>
