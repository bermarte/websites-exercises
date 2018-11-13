<?php
include 'PHPMailer-5.2-stable/PHPMailerAutoload.php';

$nm = $_GET['nm'];
$fn = $_GET['fn'];
$obj = $_GET['obj'];
$txt = $_GET['txt'];
$email = $_GET['mail'];
$emailOut = "bermarte@hotmail.com";//final destination

if(
    (isset($nm) && isset($fn) && isset($txt) && isset($obj) && isset($email))&&
    $nm != ""&& $fn != ""&& $txt != ""&& $obj != ""&& $email != ""
){
    $out = '<br><b>First name:</b> '.$nm.' '.
           '<b>Name:</b> '.$fn.'<br>'.
           '<b>Object:</b> '.$obj.'<br>'.
           '<b>Mail:</b> '.$email.'<br>'.
           '<b>Message:</b> '.$txt;
    echo $out;
}
else{
    echo "no data";
}


$mail = new PHPMailer;
$mail->isSMTP();// Set mailer to use SMTP
$mail->Host = 'mail.smtp2go.com';// Specify main and backup SMTP servers
$mail->SMTPAuth = true;// Enable SMTP authentication
$mail->Username = 'bermarte@hotmail.com';// SMTP username
$mail->Password = '0phY7cOPKRWJ';// SMTP password
$mail->Port = 2525;// TCP port to connect to
$mail->setFrom('php_script@localhost.com', 'Wert Pharma - Laboratories');
$mail->addAddress($emailOut, $nm.' '.$fn);// Add a recipient
$mail->isHTML(true);  
$mail->Subject = $email.": ".$obj;
$mail->Body    = $txt;//html can be used e.g. <b></b>
$mail->AltBody = $txt;

if(!$mail->send()) {
    //Message could not be sent
    echo '<hr><br>Message could not be sent.';
    //Mailer Error
    echo '<br>Mailer Error: ' . $mail->ErrorInfo;
} else {
    //Message has been sent
    echo '<hr><br>Message has been sent.';
}

?>