<?php

//Include the PHP functions to be used on the page
include('template/common.php');

//Output header
OutputHeader("Home");

?>

    <!-- Site header -->
<?php

    //Output the navigation bar
    Navbar();

?>

<!-- Game Page -->
<div class="gameplay-frame">
  <ul class="hud">
    <li class="score">SCORE: <span id="score">0</span></li>
  </ul>
    <a class="play-btn">Play Now</a>
</div>

<!-- Site footer -->
<?php

    //Output the footer
    OutputFooter();

?>