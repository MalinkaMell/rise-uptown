<?php 
$eat_now = get_field('eat_now', 'options');
$book_now = get_field('book_now', 'options');
?>
<nav class="navbar navbar-dark fixed-top justify-content-center align-items-center" id="top-navbar">
    <div class="container-xxxl px-xl-4 px-4">
        <div class="navbar-brand">
            <a href="/" class="d-none d-lg-block"> <img src="<?= IMAGES_DIR; ?>/logo.svg" alt="Rise Uptown"></a>
            <a href="/" class="d-lg-none"> <img src="<?= IMAGES_DIR; ?>/mobile-logo.svg" alt="Rise Uptown"></a>
        </div>
        <ul class="navbar-nav ms-lg-auto justify-content-center align-items-center position-relative ">
            <li class="nav-item mx-md-4 ">
                <a class="header-link d-none d-md-block" href="<?= $eat_now['url']; ?>"
                    target="<?= $eat_now['target']; ?>"><?= $eat_now['title']; ?></a>
            </li>
            <li class="nav-item me-5 mx-md-4">
                <a class="header-btn" href="<?= $book_now['url']; ?>"
                    target="<?= $book_now['target']; ?>"><?= $book_now['title']; ?></a>
            </li>

            <li class="nav-item mx-md-4 ">
                <div class="outer-menu  mx-lg-4">
                    <input class="checkbox-toggle" type="checkbox" />
                    <div class="hamburger">
                        <div></div>
                    </div>
                    <div class="menu">
                        <div class="d-flex flex-column justify-content-evenly">
                            <div
                                class="mt-auto  overflow-hidden d-md-flex w-100 justify-content-md-between align-items-end">

                                <?php
                        wp_nav_menu(array(
                            'theme_location' => 'primary',
                            'container' => 'ul',
                            'menu_class' => 'inline-menu'
                            ));
                            ?>
                            </div>
                            <div class="d-flex  flex-column w-100 mt-auto overflow-hidden">

                                <img class="img-fluid d-none d-lg-block align-self-end  rotate-up"
                                    src="<?= IMAGES_DIR ?>/nav-sun.svg" alt="Rise Uptown">

                                <div
                                    class=" d-flex flex-lg-row flex-column nav-text justify-content-between w-100 align-items-end align-items-lg-center mb-5">

                                    <div class="contact-phone d-none d-lg-block text-info ">
                                        Call or text <a href="tel:+16232655733" class="link-light">623.265.5733</a>
                                    </div>
                                    <div class="w-100 ps-md-5 d-flex d-lg-none justify-content-between">
                                        <img class=" d-flex d-md-none rotate-up" width="80" height="80"
                                            src="<?= IMAGES_DIR ?>/nav-sun-mobile.svg" alt="Rise Uptown">
                                        <img class=" d-none d-md-block d-lg-none rotate-up" width="130" height="130"
                                            src="<?= IMAGES_DIR ?>/nav-sun-tablet.svg" alt="Rise Uptown">
                                        <div class="contact-phone text-info  my-auto ms-lg-auto mx-auto">
                                            Call or text <a href="tel:+16232655733" class="link-light">623.265.5733</a>
                                        </div>
                                    </div>

                                    <img class="img-fluid wave-up d-none d-lg-block d-xl-none"
                                        src="<?= IMAGES_DIR ?>/nav-waves-large.svg" alt="Rise Uptown">
                                    <img class="img-fluid wave-up d-lg-none d-block d-xl-block"
                                        src="<?= IMAGES_DIR ?>/nav-waves.svg" alt="Rise Uptown">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</nav>
