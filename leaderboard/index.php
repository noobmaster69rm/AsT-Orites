<?php

//Include the PHP functions to be used on the page
include('../template/common.php');

//Output header
OutputHeader("Leaderboard");

?>

<!-- Site header -->
<?php

    //Output the navigation bar
    Navbar();

?>

<script type="module" src="main.js"></script>

<!-- Leaderboard Page -->
<div class="leaderboard-frame" id ="leaderboard">
    <table>
    </table>
</div>

<!-- Site footer -->
<?php

    //Output the footer
    OutputFooter();

?>