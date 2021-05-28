<?php
/*
Template Name: Contact
 */

defined('ABSPATH') || exit;
global $post;
$post_id = get_queried_object()->ID;
get_header();

if (have_posts()): while (have_posts()): the_post()?>
<?php get_template_part('template-parts/common/hero-alternative'); ?>
<section id="divider-1" class="bg-light">
    <div class='display-rise text-red py-5 px-3 '>
        <?= get_field('contact_title')  ?>
    </div>
</section>
<section id="contact-form" class="bg-info">
    <div class="container h-100">
        <?php
         //do_shortcode('[hf_form slug="contact"]');
         ?>
        <iframe src="https://hmamarketing.com/Benchmark/Forms/RUP/contact_us/BNCH_RUP_Contact_Us_Form_General.html" scrolling="no" frameborder="0" height="100%" width=100%></iframe>
    </div>

</section>
<section class="dividers bg-light">
    <div class="divider-contact"></div>
</section>

<section id="cards" class="bg-light ">
    <div class="row p-0">

        <div class="col-lg-4 col-md-6 col-8 mb-4">
            <div class="box red">
                <div class="content">
                    <div class="m-1 m-md-2">
                        <h4 class="py-3 py-md-3 text-primary"><?= get_field('card_1')['subtitle'] ?></h4>
                        <h3 class="pb-3 pb-md-3 text-red"><?= get_field('card_1')['title'] ?></h3>
                        <p class="text-primary"><?= get_field('card_1')['text'] ?></p>
                    </div>
                    <div class="content-button bg-red">
                        <a href="tel:+1<?= get_field('card_1')['button'] ?>"
                            class=" link-light">Call</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4 d-md-none d-flex justify-content-center align-items-center">
            <img src="<?= IMAGES_DIR ?>/contact/waves.svg" alt="" class="img-fluid">
        </div>
        <div class="col-4 d-md-none d-flex justify-content-start align-items-center">
            <img src="<?= IMAGES_DIR ?>/contact/sun.svg" alt="" class="img-fluid">
        </div>
        <div class="col-lg-4 col-md-6 col-8 mb-4">
            <div class="box teal">
                <div class="content">
                    <div class="m-1 m-md-2">
                        <h2 class="py-3 py-md-3 text-green"><?= get_field('card_2')['subtitle'] ?></h2>
                        <h1 class="pb-3 pb-md-3 text-dark"><?= get_field('card_2')['title'] ?></h1>
                        <p class="text-green"><?= get_field('card_2')['text'] ?></p>
                    </div>


                    <div class="content-button bg-dark">
                        <a target="<?= get_field('card_2')['button']['target'] ?>"
                            href="<?= get_field('card_2')['button']['url'] ?>"
                            class=" link-light"><?= get_field('card_2')['button']['title'] ?></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-12 mb-4">
            <div class="box">
                <div class="content"
                    style="background: url('<?= get_field('card_3')['image'] ?>') no-repeat center center; background-size: cover">
                    <div class="d-flex flex-wrap align-items-center justify-content-center h-100">
                        <h2 class="py-3 py-md-3 text-light d-flex align-self-center justify-self-center">
                            <?= get_field('card_3')['title'] ?></h2>
                    </div>
                </div>
            </div>
        </div>

</section>
<section id="map" class="bg-light my-80">
    <a href="https://goo.gl/maps/z7PHSPiHTAGoCujn9" target="_blank">
        <picture>
            <source media="(max-width:600px)" srcset="<?= IMAGES_DIR; ?>/rise_web_map_mobile.svg">
            <source media="(min-width:601px)" srcset="<?= IMAGES_DIR; ?>/rise_web_map_desktop.svg">
            <img src="<?= IMAGES_DIR; ?>/rise_web_map_desktop.svg" alt="Flowers" style="width:auto;">
        </picture>
    </a>
</section>
<!-- <div class="dividers"></div> -->





<?php
 endwhile;endif;
get_footer();