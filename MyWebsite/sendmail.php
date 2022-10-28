<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailHeader = "From: ".$name."<".$email.">\r\n";

$recipient = "rrazyofficial6778@gmail.com";

mail($recipient, $subject, $message, $mailHeader) or die('Error!');

echo"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="Styles/general.css" />
    <link rel="stylesheet" href="Styles/contact-page-thanks.css">
    <title>Roman Kus</title>
  </head>
  <body>
    <main>
      <h1 id="Thank-You">Thank You! I will get back to you as soon as possible!</h1>
      <p>Return back to <a id="HomePage" href="website.html">homepage</a></p>
    </main>
  </body>
</html>
";

?>