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

<script type="module" src="main.js"></script>

<!-- Game Page -->
<div class="container" xmlns="http://www.w3.org/1999/html">
    <canvas id="gameContainer">
    <ul class="hud">
        <li class="score">SCORE: <span id="score">0</span></li>
    </ul>
    </canvas>
</div>


<!-- Site footer -->
<?php

    //Output the footer
    OutputFooter();

?>