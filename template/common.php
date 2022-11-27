<?php

function OutputHeader($title){
    echo '<!DOCTYPE html>';
    echo '<html lang="en">';
    echo '<head>><title> Asteroids | ' .$title. '</title></head>';
	echo '<meta charset="UTF-8">';
	echo '<link rel="stylesheet" href="/Asteroids/css/style.css">';
	echo '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">';
	echo '<script src="https://kit.fontawesome.com/9a86419779.js" crossorigin="anonymous"></script>';
	echo '</head>';
	echo '<body>';
}

function Navbar(){
    echo '<header>';
    echo '  <div class="site-header">';
    echo '	<a href="/Asteroids/index.php" target="">';
    echo '	  <img class="img-logo" src="/Asteroids/assets/logo.png" alt="logo">';
    echo '	</a>';
    echo '	<ul class="navbar">';

    //Array of page name and links
    $urls = array(
        'Home' => '/Asteroids/index.php',
        'Leaderboard' => '/Asteroids/leaderboard/index.php',
        'About' => '/Asteroids/about/index.php',
    );

    //Loop to output array items(navigation) and page links
    foreach ($urls as $url => $link) {
        echo '<li><a href="' . $link . '">' . $url . '</a></li>';
    }
    echo '  </ul>';
    echo '  </div>';
    echo '  <div class="login">';
    echo '    <ul class="login-btn">';
    echo '      <li><a href="/Asteroids/authentication/login/index.php"><span class="user-icon"><i class="fa-regular fa-user"></i></span>&nbsp;&nbsp;&nbsp;Login</a></li>';
    echo '    </ul>';
    echo '  </div>';
    echo '</header>';
}

function OutputFooter(){
	echo '<footer class="site-footer">';
	echo ' <p class="copyright-text">';
	echo '   Copyright &copy; 2022 All Rights Reserved by VR Games';
	echo ' </p>';
	echo ' <div class="icons">';
	echo '   <ul class="social">';
	echo '     <li>';
	echo '        <a href="https://github.com/noobmaster69rm" title="">';
	echo '        <span class="icon fa fa-github"></span>';
	echo '        </a>';
	echo '      </li>';
	echo '      <li>';
	echo '        <a href="https://facebook.com/people/Vishek-Ramgolam/100071246347707/" title="">';
	echo '          <span class="icon fa fa-facebook"></span>';
	echo '        </a>';
	echo '      </li>';
	echo '      <li>';
	echo '        <a href="https://www.instagram.com/vishekramgolam/" title="">';
	echo '          <span class="icon fa fa-instagram"></span>';
	echo '        </a>';
	echo '      </li>';
	echo '    </ul>';
	echo '  </div>';
	echo '</footer>';
	echo '</body>';
	echo '</html>';
}