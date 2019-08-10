<?php
    if($_POST["name"] && $_POST["email"] && $_POST["subject"] && $_POST["message"])
    {
        mail("brittniludington@gmail.com",$_POST["subject"],$_POST["message"],"From: " . $_POST["email"]);
        
    }
?>