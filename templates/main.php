<?php
// Head ///////////////////////
//////////////////////////////

// check path if the styles wont load
function createHead($title = "Document", $description = "Description...")
{
  $html = <<<"EOT"
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="/css/styles.css">

      <title>$title</title>
      <meta name="description" content="$description">
    </head>
EOT;
  echo $html;
}

// NAV ////////////////////////
////////////////////////////// 
function mainNav()
{
  $html = <<<"EOT"
    <nav class="mainNav row">

        <input id="navToggle" type="checkbox" />
        <div class="mobileNav col">
          <label for="navToggle"></label>
          <ul>
            <li>Home</li>
            <li>Imprint</li>
            <li>Privacy-Policy</li>
          </ul>
        </div>
      </div>

      <div class="desktopNav col">
        <ul>
          <li>Home</li>
          <li>Imprint</li>
          <li>Privacy-Policy</li>
        </ul>
      </div>
    </nav>
EOT;
  echo $html;
}