<?php
/*
Template Name: Homepage
 */

defined('ABSPATH') || exit;
global $post;
$post_id = get_queried_object()->ID;
get_header();

if (have_posts()): while (have_posts()): the_post()?>
<?php get_template_part('template-parts/common/home-hero'); ?>

<section id="img-block-1" class="bg-light ">
    <div class="row">
        <div class="col-md-8 g-0 col-9 g-0">
        
            <img src="<?= get_field('img_block_1') ?>" alt="Pool" class="img-cover">
        </div>
        <div class="col-md-4 col-3  g-0 bg-light d-flex justify-content-end justify-content-md-center align-items-center">
            <div class="green-sun"></div>
        </div>
    </div>
</section>
<section id="explore" class=" bg-red py-60">
    <div class="row px-4 px-lg-5">
        <div class="col-xl-7 col-lg-9 g-2 gx-lg-5 g-0">
            <h2 class="py-3 py-md-3 text-light"><?= get_field('explore_subtitle') ?></h2>
            <h1 class="pb-3 pb-md-3 text-dark"><?= get_field('explore_title') ?></h1>
            <p class="text-light"><?= get_field('explore_text') ?></p>
        </div>
        <div class="col-xl-5 col-lg-3 py-3 g-2 gx-lg-5 d-flex mt-auto ms-auto">
            <a target="<?= get_field('instagram_btn')['target']; ?>" href="<?= get_field('explore_btn')['url']; ?>"
                class='btn-rise teal flower pre-teal ms-auto me-0'><?= get_field('explore_btn')['title']; ?></a>
        </div>
    </div>
</section>
<section id="img-block-2" class="bg-light ">
    <div class="row">
        <div class="col-3  g-0 d-md-none d-flex justify-content-center align-items-center bg-primary">
            <div class=" blue-waves "></div>
        </div>
        <div class="col-md-5 d-none d-md-flex bg-primary justify-content-center align-items-center flex-column">

            <div class="text-center mb-5">
            <div class="blue-waves-home wave-up"></div>
            <div class="blue-waves-home wave-up"></div>
            </div>
            <div class="text-center mb-5">
            <div class="blue-waves-home wave-down"></div>
            <div class="blue-waves-home wave-down"></div>
            </div>
            <div class="text-center">
            <div class="blue-waves-home wave-up"></div>
            <div class="blue-waves-home wave-up"></div>
            </div>
        </div>
        <div class="col-md-7 g-0 col-9">
            <img src="<?= get_field('img_block_2') ?>" alt="Pool" class="img-cover">
        </div>
    </div>

</section>
<section id="rooms" class="bg-light py-60">
    <div class="row  px-4 px-lg-5">
        <div class="col-xl-7 col-lg-9 g-2 gx-lg-5">
            <h2 class="py-3 py-md-3 text-dark"><?= get_field('rooms_subtitle') ?></h2>
            <h1 class="pb-3 pb-md-3 text-red"><?= get_field('rooms_title') ?></h1>
            <p class="text-dark"><?= get_field('rooms_text') ?></p>
        </div>
        <div class="col-xl-5 col-lg-3 py-3 g-2 gx-lg-5 d-flex mt-auto ms-auto">
            <a target="<?= get_field('instagram_btn')['target']; ?>" href="<?= get_field('rooms_btn')['url']; ?>"
                class='btn-rise red diamond pre-red ms-auto me-0'><?= get_field('rooms_btn')['title']; ?></a>
        </div>
    </div>
</section>
<section id="img-block-3" class="bg-light ">
    <div class="row bg-info">
        <div class="col-md-6 col-8 g-0">
            <img src="<?= get_field('img_block_3') ?>" alt="Pool" class="img-cover">
        </div>
        <div class="col-md-6 col-4 g-0 d-flex justify-content-end justify-content-md-center align-items-center overflow-hidden">
            <div class="red-sun"></div>
        </div>

    </div>

</section>
<section id="eat" class="bg-green  py-60">
    <div class="row px-4 px-lg-5">
        <div class="col-xl-7 col-lg-9 g-2 gx-lg-5">
            <h2 class="py-3 py-md-3 text-light"><?= get_field('eat_subtitle') ?></h2>
            <h1 class="pb-3 pb-md-3 text-info"><?= get_field('eat_title') ?></h1>
            <p class="text-light"><?= get_field('eat_text') ?></p>
        </div>
        <div class="col-xl-5 col-lg-3 py-3 g-2 gx-lg-5 d-flex mt-auto ms-auto">
            <a target="<?= get_field('eat_btn')['target']; ?>" href="<?= get_field('eat_btn')['url']; ?>"
                class='btn-rise blue tile pre-blue ms-auto me-0'><?= get_field('eat_btn')['title']; ?></a>
        </div>
    </div>
</section>
<section class="dividers bg-light">
    <div class="divider-gold"></div>
</section>
<section id="img-block-4" class="bg-light ">
    <div class="row">
        <div class="col-md-4 col-3 g-0 bg-red d-flex justify-content-center align-items-center">
            <div class="blue-square"></div>
        </div>
        <div class="col-md-8 col-9 g-0">
            <img src="<?= get_field('img_block_4') ?>" alt="Pool" class="img-cover">
        </div>
    </div>

</section>
<section id="questions" class="bg-info py-60">
    <div class="row px-4 px-lg-5">
        <div class="col-xl-7 col-lg-9 g-2 gx-lg-5">
            <h2 class="py-3 py-md-3 text-dark"><?= get_field('questions_subtitle') ?></h2>
            <h1 class="pb-3 pb-md-3 text-red"><?= get_field('questions_title') ?></h1>
            <p class="text-dark"><?= get_field('questions_text') ?></p>
        </div>
        <div class="col-xl-5 col-lg-3 g-2 py-3 gx-lg-5 d-flex mt-auto ms-auto">
            <a target="<?= get_field('questions_btn')['target']; ?>" href="<?= get_field('questions_btn')['url']; ?>"
                class='btn-rise red diamond pre-red ms-auto me-0'><?= get_field('questions_btn')['title']; ?></a>
        </div>
    </div>
</section>
<section id="instagram" class="pb-60 bg-light">
    <div class="row py-md-5 px-md-0 p-3 bg-light">
        <div class="col px-0">
            <div class="display-rise text-red position-relative" style="z-index:9"><?= get_field('instagram_title') ?>
            </div>
            <div id="instagram-feed" class="instagram_feed pt-5">
                <?= do_shortcode('[instagram-feed]'); ?>
            </div>
        </div>
    </div>
    <div class="row px-lg-5 p-3 bg-light">
        <div class="col-12 text-center ">
            <a target="<?= get_field('instagram_btn')['target']; ?>" href="<?= get_field('instagram_btn')['url']; ?>"
                class='btn-rise gold inst pre-gold text-center float-md-end'><?= get_field('instagram_btn')['title']; ?></a>
        </div>
    </div>
</section>


<?php
 endwhile;endif;
get_footer();