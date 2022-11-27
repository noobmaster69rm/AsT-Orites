<?php

//Include the PHP functions to be used on the page
include('../../template/common.php');

    //Output header
    OutputHeader("Login");

?>

    <!-- Site header -->
<?php

//Output the navigation bar
Navbar();

?>
<script type="module" src="../../main2.js"></script>
<script>
    function Logout()
    {
        sessionStorage.clear();
    }
</script>

    <!-- Login Frame -->
    <div class="sign-in-frame">
      <form>
        <p class="login-title" id="welcome"></p>
          <button class="some" onclick="Logout()"><span class="fa-solid fa-right-from-bracket" title="Log out"></span></button>

        <div class="username">
          <div class="entry">
            <label>
              <input id="login-username" type="text" placeholder="Username">
            </label>
          </div>
        </div>

        <div class="password">
          <div class="entry">
            <label>
              <input id="login-password" type="password" placeholder="Password">
            </label>
          </div>
        </div>

        <div class="sign-in">
            <input id="Login-btn" type="submit" value="Sign In">
        </div>

        <p class="new-user">
          New here?
          <a href="../signup/index.php" class="register">
          Register >
        </a>
        </p>

      </form>
    </div>

    <!-- Site footer -->
<?php

    //Output the footer
    OutputFooter();

?>