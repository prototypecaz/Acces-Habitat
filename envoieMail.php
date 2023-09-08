<?php

//session_start();

if(isset($_GET['nom']) and !empty($_GET['nom']) and 
isset($_GET['prenom']) and !empty($_GET['prenom']) and 
isset($_GET['telephone']) and !empty($_GET['telephone']) and 
isset($_GET['email']) and !empty($_GET['email']) and 
isset($_GET['sujet']) and !empty($_GET['sujet']) and 
isset($_GET['message']) and !empty($_GET['message'])){

require('./classes/Sanitizing.php');

    $table = array(
        'Š'=>'S', 'š'=>'s', 'Đ'=>'Dj', 'đ'=>'dj', 'Ž'=>'Z', 'ž'=>'z', 'Č'=>'C', 'č'=>'c', 'Ć'=>'C', 'ć'=>'c',
        'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E',
        'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O',
        'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U', 'Ú'=>'U', 'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss',
        'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c', 'è'=>'e', 'é'=>'e',
        'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o',
        'ô'=>'o', 'õ'=>'o', 'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'ý'=>'y', 'þ'=>'b',
        'ÿ'=>'y', 'Ŕ'=>'R', 'ŕ'=>'r',
    );

    $sanitizing = new Sanitizing();

   $nom = $sanitizing->sanitizeString($_GET['nom']);
   $prenom = $sanitizing->sanitizeString($_GET['prenom']);
   $telephone = $sanitizing->sanitizeString($_GET['telephone']);
   $email = $sanitizing->sanitizeString($_GET['email']);
   $sujet = $sanitizing->sanitizeString(strtr($_GET['sujet'],$table));
   $message = $sanitizing->sanitizeString(strtr($_GET['message'],$table));
    
    $subject = (string) $sujet;
                        
                        require('./configuration.php');
                        // Definition du nom de domaine
                        
                        $domain = (string) $general['domain'];
                    
                        // Encodage en Base64 de l'adresse e-mail
                        $encode = (string) base64_encode($email);
                        
                        // Definition des donnees du corps
                        $body = <<<EOF
                            <p>$message</p>
                            <p>
                                Nom: $nom <br>
                                Prenom: $prenom <br>
                                E-mail: $email <br>
                                Telephone: $telephone <br>
                            </p>
                            
                           
                        EOF;
                    
                        require_once('./classes/Mailer.php');
                        
                        // Instanciation de la classe Mailer et creation de l'objet $mailer
                        $mailer = (object) new Mailer();
                        // Appel de methode "sendEmail(arguments)" pour definir les donnees et envoyer
                        $mailer->sendEMail("acces.habitat@yahoo.com", $subject, $body);

                        echo "reussis";
}




?>