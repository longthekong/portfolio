<?php
if(isset($_POST['Submit'])){
  $to = "hecise1719@aosod.com"; 
  $from = $_POST['Email'];
  $name = $_POST['Name'];
  $subject = $_POST['Subject'];
  $message = $name . " Napsal následující zprávu:" . "\n\n" . $_POST['Message'];
  $headers = "Od:" . $from;
  
  mail($to,$subject,$message,$headers);
  
  echo "<style>body {background-color: #222831;}</style>"; 
  echo "<div style='text-align: center; padding: 2rem; font-size: 31px; color:#EEEEEE;'>Zpráva se poslala.</div><br>";
  echo "<div style='text-align: center;'><a href='index.html' style='background-color: #00ADB5; color: #EEEEEE; padding: 12px 20px; text-decoration: none; border-radius: 4px;'>Vrátit se k stránce</a></div>";
}
?>


