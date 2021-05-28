<?php
/*
Template Name: Dine
 */

defined('ABSPATH') || exit;
global $post;
$post_id = get_queried_object()->ID;
get_header();

if (have_posts()): while (have_posts()): the_post()?>
<?php get_template_part('template-parts/common/hero'); ?>
<section id="img-block-1" class="bg-light ">
    <div class="row">
        <div class="col-md-6 col-3 g-0">
            <img src="<?= get_field('img_1_block_1') ?>" alt="Pool" class="img-cover">
        </div>
        <div class="col-md-6 col-9 g-0">
            <img src="<?= get_field('img_2_block_1') ?>" alt="Pool" class="img-cover">
        </div>
    </div>
</section>
<section id="bar" class=" bg-light">
    <div class="row py-60 px-4 px-md-5 bg-light">
        <div class="col-xl-7 col-lg-9 g-2 gx-lg-5">
            <h2 class="py-3 py-md-3  text-dark"><?= get_field('bar_subtitle') ?></h2>
            <h1 class="pb-3 pb-md-3  text-primary"><?= get_field('bar_title') ?></h1>
            <di class=" text-dark"><?= get_field('bar_text') ?></di>
        </div>
        <div class="col-lg-3 py-3 g-2 gx-lg-5 d-flex flex-column mt-auto ms-auto">
            <a target="<?= get_field('bar_btn_1')['target']; ?>" href="<?= get_field('bar_btn_1')['url']; ?>"
                class='btn-rise gold tile pre-gold  ms-auto me-md-0 my-4 '><?= get_field('bar_btn_1')['title']; ?></a>
            <a target="<?= get_field('bar_btn_2')['target']; ?>" href="<?= get_field('bar_btn_2')['url']; ?>"
                class='btn-rise gold tile pre-gold ms-auto me-0 '><?= get_field('bar_btn_2')['title']; ?></a>
        </div>
    </div>
</section>
<section id="img-block-2" class="bg-light ">
    <div class="row">
        <div class="col-7 g-0">
            <img src="<?= get_field('img_block_2') ?>" alt="Rise" class="img-cover ">
        </div>
        <div class="col-5 g-0 bg-green d-flex justify-content-end align-items-center">
                <!-- <div class=" dine-sun"></div> -->
                <img src="<?= IMAGES_DIR ?>/Water.gif" alt="Pool" class="img-cover">
        </div>
    </div>
</section>
<section id="rooftop" class="bg-light">
    <div class="row px-4 px-md-5 bg-light py-60">
        <div class="col-xl-7 col-lg-9 g-2 gx-lg-5">
            <h2 class="py-3 py-md-3  text-primary"><?= get_field('rooftop_subtitle') ?></h2>
            <h1 class="pb-3 pb-md-3  text-dark"><?= get_field('rooftop_title') ?></h1>
            <di class=" text-primary"><?= get_field('rooftop_text') ?></di>
        </div>
        <div class="col-xl-5 col-lg-3 py-3 g-2 gx-lg-5 d-flex flex-column mt-auto ms-auto">

            <a target="<?= get_field('rooftop_btn')['target']; ?>" href="<?= get_field('rooftop_btn')['url']; ?>"
                class='btn-rise teal tile pre-teal mt-4 ms-auto me-0'><?= get_field('rooftop_btn')['title']; ?></a>
        </div>
    </div>
</section>
<section id="img-block-3" class="bg-light ">
    <div class="row">
        <div class="col-md-5 g-0 col-3 bg-green d-flex justify-content-end align-items-center">
            <img src="<?= get_field('img_1_block_3') ?>" alt="Pool" class="img-cover max-750">
            <!-- <div class=" green-sun-dine"></div> -->
        </div>
        <div class="col-md-7 g-0 col-9">
            <img src="<?= get_field('img_2_block_3') ?>" alt="Pool" class="img-cover max-750">
        </div>
    </div>
</section>
<section id="chekin" class="bg-red">
    <div class="row  py-60 px-4 px-md-5 bg-red">
        <div class="col-xl-7 col-lg-9 g-2 gx-lg-5">
            <h2 class="py-3 py-md-3  text-light"><?= get_field('chekin_subtitle') ?></h2>
            <h1 class="pb-3 pb-md-3  text-dark"><?= get_field('chekin_title') ?></h1>
            <di class=" text-light"><?= get_field('chekin_text') ?></di>
        </div>
        <div class="col-xl-5 col-lg-3 py-3 g-2 gx-lg-5 d-flex flex-column mt-auto ms-auto">

            <a target="<?= get_field('chekin_btn')['target']; ?>" href="<?= get_field('chekin_btn')['url']; ?>"
                class='btn-rise teal tile pre-teal mt-4 ms-auto me-0'><?= get_field('chekin_btn')['title']; ?></a>
        </div>
    </div>
</section>
<section id="img-block-4" class="bg-light ">
    <div class="row">

        <div class="col-md-8 g-0 col-9">
            <img src="<?= get_field('img_block_4') ?>" alt="Rise" class="img-cover">
        </div>
        <div class="col-md-4 g-0 col-3 bg-info d-flex justify-content-center align-items-center">
           <div class="gold-sun-dine spin-up"></div>
        </div>
    </div>
</section>
<section id="coffie" class="bg-green">
    <div class="row  px-4 px-md-5 bg-green py-60">
        <div class="col-xl-7 col-lg-9 g-2 gx-lg-5">
            <h2 class="py-3 py-md-3  text-light"><?= get_field('coffie_subtitle') ?></h2>
            <h1 class="pb-3 pb-md-3  text-info"><?= get_field('coffie_title') ?></h1>
            <di class=" text-light"><?= get_field('coffie_text') ?></di>
        </div>
        <div class="col-xl-5 col-lg-3 py-3 g-2 gx-lg-5 d-flex flex-column mt-auto ms-auto">
            <a target="<?= get_field('coffie_btn')['target']; ?>" href="<?= get_field('coffie_btn')['url']; ?>"
                class='btn-rise blue tile pre-blue ms-auto me-0'><?= get_field('coffie_btn')['title']; ?></a>
        </div>
    </div>
</section>

<?php
 endwhile;endif;
get_footer();