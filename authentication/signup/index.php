<?php

//Include the PHP functions to be used on the page
include('../../template/common.php');

    //Output header
    OutputHeader("Register");

?>

    <!-- Site header -->
<?php

//Output the navigation bar
Navbar();

?>

<script type="module" src="../../main.js"></script>

<!-- Sign-Up Frame -->
<div class="sign-up-frame">
    <form id="register_form">

      <h1 class="register-title">
        Sign Up
      </h1>

      <div class="name">
        <div class="entry">
          <label>
            <input type="text" id="reg-name" placeholder="Name" required>
          </label>
        </div>
      </div>

      <div class="email">
        <div class="entry">
          <label>
            <input type="email" id="reg-email" placeholder="Email" required>
          </label>
        </div>
      </div>

      <div class="username">
        <div class="entry">
          <label>
            <input type="text" id="reg-username" placeholder="Username" required>
          </label>
        </div>
      </div>

      <div class="password">
        <div class="entry">
          <label>
            <input type="password" id="reg-password" placeholder="Password" required>
          </label>
        </div>
      </div>

      <div class="sign-up">
        <input id="Reg-btn" type="submit" value="Sign Up" onsubmit="checkErrors()">
      </div>

      <p class="existing-user">
        Already have an account?
        <a href="../login/index.php" class="log-in">
        login >
      </a>
      </p>

    </form>
  </div>

<!-- Site footer -->
<?php

    //Output the footer
    OutputFooter();

?>
