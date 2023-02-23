<?php ob_start(); session_start(); ?>
<?php if (isset($_SESSION['username'])) { $logged_in = true;} else if (!isset($_SESSION['username'])) {$logged_in = false;}; ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="css/styles.css">
  <meta name="theme-color" content="#00a6fb" />

  <meta name="description" content="Refrence Directory for learning purposes">
  <meta property="og:site_name" content="@Tim-Raphael">

  <title><?php print $title; ?></title>
  <meta name="description" content="<?php print $description; ?>">
</head>

<body>
  <?php include('navigation.php'); ?>