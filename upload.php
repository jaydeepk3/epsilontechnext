<?php
// Secure image upload endpoint for Epsilon Blog
// Deploy to: blog.epsilon-technology.com/upload.php

header('Access-Control-Allow-Origin: https://epsilon-technology.com');
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

// Secret key check — must match UPLOAD_SECRET env var in Next.js
$secret = $_SERVER['HTTP_X_UPLOAD_SECRET'] ?? '';
$validSecret = 'epsilon_upload_2026_secure';

if ($secret !== $validSecret) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit();
}

if (empty($_FILES['file'])) {
    http_response_code(400);
    echo json_encode(['error' => 'No file uploaded']);
    exit();
}

$file = $_FILES['file'];

// Validate file type
$allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
if (!in_array($file['type'], $allowedTypes)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid file type: ' . $file['type']]);
    exit();
}

// Max 10MB
if ($file['size'] > 10 * 1024 * 1024) {
    http_response_code(400);
    echo json_encode(['error' => 'File too large']);
    exit();
}

// Sanitize filename
$ext = pathinfo($file['name'], PATHINFO_EXTENSION);
$filename = time() . '_' . preg_replace('/[^a-zA-Z0-9._-]/', '_', basename($file['name']));

// Upload directory is the web root (same as FTP root)
$uploadDir = __DIR__ . '/';
$uploadPath = $uploadDir . $filename;

if (move_uploaded_file($file['tmp_name'], $uploadPath)) {
    $url = 'https://blog.epsilon-technology.com/' . $filename;
    echo json_encode(['success' => true, 'url' => $url, 'filename' => $filename]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save file', 'upload_dir' => $uploadDir]);
}
?>
