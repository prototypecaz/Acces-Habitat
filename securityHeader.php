<?php 

// Desactive le suivi de la navigation
header('Referrer-Policy: no-referrer');

// Defini le MIME type d'une page
header('Content-Type: text/html; charset=utf-8');

// Empeche le chargement des ressources externes (.js et .css cdn)
// /!\ Peut alterer le fonctionnement de certains fichiers
// header("Content-Security-Policy: default-src 'self'; script-src 'unsafe-inline'; style-src 'unsafe-inline';");

// Empeche le telechargement direct sans avertissement
header('X-Download-Options: noopen');

// Empeche la recuperation des contenus externes par les balises HTML <iframe>
header('X-Frame-Options: SAMEORIGIN');

// Active le mecanisme interne de protection des navigateurs contre les vulnerabilites XSS
header('X-XSS-Protection: 1; mode=block');

// Empeche le changement du MIME type d'une page
header('X-Content-Type-Options: nosniff');

// Empeche le JavaScript d'avoir acces au cookie
ini_set('session.cookie_httponly', 1);

// Empeche la divulgation des cookies sur des sites externes
ini_set('session.cookie_secure', 1);

?>