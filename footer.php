<?php
/**
 * Footer
 */
$scripts = get_field('scripts', 'options');
$before_body_close = $scripts['before_closing_body_script'];
$address = get_field('address', 'options');
$direct_phone = get_field('direct_phone_number', 'options');
$reserve_phone = get_field('reserve_phone_number', 'options');
?>
<!-- <a class="backtop" data-scroll data-scroll-speed="4">Back to the top</a> -->
</main>
<section class="bg-light w-100">
    <div class="footer-top"></div>
    <footer class="bg-dark">
        <div class="row links px-4 px-xl-5">
            <div class="col-md-5">
                <h2 class="mt-5 mb-3">Contact Us</h2>
                <ul>
                    <li class=""><?= $address ?></li>
                    <li class="">Direct: <?= $direct_phone ?></li>
                    <li class="">Reserve: <?= $reserve_phone ?></li>
                </ul>
            </div>
            <div class="col-md-3">
                <h2 class="mt-5 mb-3">Follow Us</h2>
                <?php
              wp_nav_menu(array(
                'theme_location' => 'socials',
                ));
                ?>
            </div>
            <div class="col-md-3">
                <h2 class="mt-5 mb-3">Helpful Links</h2>
                <?php
              wp_nav_menu(array(
                'theme_location' => 'secondary',
                ));
                ?>
            </div>
        </div>
        <div class="row px-5 ">
            <div class="col footer-separator"></div>
        </div>
        <div class="row px-5 d-flex">
            <div class="col px-0 footer-logo">
                <img src="<?= IMAGES_DIR ?>/footer-logo.svg" alt="" class="img-fluid justify-self-center align-self-center">
            </div>
        </div>
        <div class=" d-flex px-5 py-5 justify-content-between align-items-center flex-column-reverse flex-lg-row">
        
                <h6 class="copy my-4"> Copyright &copy; <?= date('Y') . ' ' . get_bloginfo('name'); ?>.</h6>

           <a href="https://www.gemstonehotelcollection.com/" target="_blank"> <img src="<?= IMAGES_DIR ?>/brslogos-inv-plux-new.png" alt="" class="img-fluid gem-logo justify-self-center align-self-center"></a>

        </div>
    </footer>
</section>

</div>
</div>

<!--#page -->
<?php 

wp_footer(); 
if($before_body_close) echo $before_body_close;

?>

<script>
//if javascript isn't active
document.documentElement.classList.remove('no-js');
Modernizr.on('webp', function(result) {
    if (result) {
        console.log('webp on');
        // supported
    } else {
        // not-supported
        console.log('webp off');

    }
});
</script>
</body>

</html>