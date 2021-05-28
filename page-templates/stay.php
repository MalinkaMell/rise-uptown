<?php
/*
Template Name: Stay
 */

defined('ABSPATH') || exit;
global $post;
$post_id = get_queried_object()->ID;
get_header();
$miniAda = get_field('ada_mini');
$mini = explode("\n", $miniAda);
$studioAda = get_field('ada_studio');
$studio = explode("\n", $studioAda);
$balconyAda = get_field('ada_balcony');
$balcony = explode("\n", $balconyAda);
$firepitAda = get_field('ada_firepit');
$firepit = explode("\n", $firepitAda);
$firepit_balconyAda = get_field('ada_firepit_balcony');
$firepit_balcony = explode("\n", $firepit_balconyAda);

if (have_posts()): while (have_posts()): the_post()?>
<?php get_template_part('template-parts/common/hero-alternative'); ?>

<section id="intro" class="bg-light ">
    <div class="row px-5">
        <div class="col-md-12">
            <div class="display text-dark py-5">
                <?= get_field('block_1_title'); ?>
            </div>
        </div>
        <div class="col-xl-9 ">
            <div class="text-green py-5">
                <?= get_field('block_1_text'); ?>
            </div>
        </div>
    </div>
</section>
<section id="img-block-1" class="bg-light ">
    <div class="row g-0">
        <div class="col-md-8 col-10 ">
            <img src="<?= get_field('img_1_block_1') ?>" alt="Pool" class="img-cover">
        </div>
        <div class="col-md-4 col-2">
            <img src="<?= get_field('img_2_block_1') ?>" alt="Pool" class="img-cover">
        </div>
    </div>
</section>
<section id="mini-section" class="bg-light ">
    <div class="row g-0 bg-primary">
        <div role="button" class="py-5 pb-md-0 px-md-5 px-3 btn-unstyled" id="mini">
            <div class="col-12 g-2 g-lg-5 d-flex justify-content-between">
                <h1 class=" pb-lg-3  text-info"><?= get_field('mini_title') ?></h1>
                <svg width="20" height="20" class="d-md-none" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0V20M20 10H0" stroke="#ADC7CF" stroke-width="1.5" />
                </svg>

            </div>
        </div>
    </div>
    <div class="row g-0 px-md-5 px-3 bg-primary" id="mini-toggle" style="display: none;">
        <div class="col-lg-8 g-2 pe-lg-5">
            <p class=" text-light"><?= get_field('mini_text') ?></p>
        </div>
        <div class="col-lg-4 g-2 px-md-5">
            <ul>
                <?php 
		   $list = get_field('mini_list');
		   foreach($list as $item) : ?>
                <li class="text-light"><?= $item['list_item'] ?></li>
                <?php endforeach; ?>
            </ul>

        </div>
        <div
            class="row g-0 p-md-5 p-3 bg-primary d-flex flex-md-row flex-column-reverse align-items-end align-items-md-center">
            <div class="col-md-8 pe-md-5">
                <?php if($miniAda) : ?>
                <p class='p italic text-uppercase text-end'>
                    <a role="button" href="<?= get_field('mini_link')['url'] ?>" class="mb-4 ada-link link-dark"
                        data-bs-toggle="modal" data-bs-target="#miniAda">ADA Info</a>


                </p>
                <?php endif; ?>
            </div>
            <div class="col-md-4 ps-md-5 ">
                <a target="<?= get_field('mini_btn')['target']; ?>" href="<?= get_field('mini_btn')['url']; ?>"
                    class='btn-rise blue diamond pre-blue mb-4 float-end'><?= get_field('mini_btn')['title']; ?></a>
            </div>
        </div>
    </div>
    <div class="modal fade" id="miniAda" tabindex="-1" aria-labelledby="miniAdaLabel" aria-hidden="true">
        <div class="modal-dialog  modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title"><?= get_field('mini_title') ?> ADA Info</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul>
                        <?php foreach($mini as $value) : ?>
                        <li><?= $value ?></li>

                        <?php endforeach; ?>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</section>
<section id="img-block-2" class="bg-light ">
    <div class="row g-0">
        <div class="col-md-4 col-3 bg-green d-flex justify-content-center align-items-center flex-column">
            <img src="<?= IMAGES_DIR ?>/Record.gif" alt="Pool" class="img-cover">
        </div>
        <div class="col-md-8 col-9">
            <img src="<?= get_field('img_block_2') ?>" alt="Rise" class="img-cover">
        </div>
    </div>
</section>
<section id="studio-section" class="bg-light ">
    <div class="row g-0 bg-light">
        <button type="button" class="py-5 pb-md-0 px-md-5 px-3 btn-unstyled" id="studio">
            <div class="col-12 g-2 g-lg-5 d-flex justify-content-between align-items-center">
                <h1 class=" pb-lg-3  text-green"><?= get_field('studio_title') ?></h1>
                <svg width="20" height="20" class="d-md-none" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0V20M20 10H0" stroke="#5C7566" stroke-width="1.5" />
                </svg>

            </div>
        </button>
    </div>
    <div class="row g-0 px-md-5 px-3 bg-light" id="studio-toggle" style="display: none;">
        <div class="col-lg-8 g-2 pe-lg-5">
            <p class=" text-dark"><?= get_field('studio_text') ?></p>
        </div>
        <div class="col-lg-4 g-2 px-md-5">
            <ul>
                <?php 
		   $list = get_field('studio_list');
		   foreach($list as $item) : ?>
                <li class="text-dark"><?= $item['list_item'] ?></li>
                <?php endforeach; ?>
            </ul>
        </div>

        <div
            class="row g-0 p-md-5 p-3 bg-light d-flex flex-md-row flex-column-reverse align-items-end align-items-md-center">
            <div class="col-md-8 pe-md-5">
                <?php if($studioAda) : ?>
                <p class='p italic text-uppercase text-end'>
                    <a role="button" href="<?= get_field('mini_link')['url'] ?>" class="mb-4 ada-link link-primary"
                        data-bs-toggle="modal" data-bs-target="#studioAda">ADA Info</a>

                </p>
                <?php endif; ?>
            </div>
            <div class="col-md-4 ps-md-5">
                <a target="<?= get_field('studio_btn')['target']; ?>" href="<?= get_field('studio_btn')['url']; ?>"
                    class='mb-4 btn-rise green diamond pre-green float-end'><?= get_field('studio_btn')['title']; ?></a>
            </div>
        </div>
    </div>
    <div class="modal fade" id="studioAda" tabindex="-1" aria-labelledby="studioAdaLabel" aria-hidden="true">
        <div class="modal-dialog  modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title"><?= get_field('studio_title') ?> ADA Info</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul>
                        <?php foreach($studio as $value) : ?>
                        <li><?= $value ?></li>

                        <?php endforeach; ?>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</section>
<section id="img-block-3" class="bg-light ">
    <div class="row g-0">
        <div class="col-sm-6 col-10">
            <img src="<?= get_field('img_1_block_3') ?>" alt="Rise" class="img-cover">
        </div>
        <div class="col-sm-6 col-2">
            <img src="<?= get_field('img_2_block_3') ?>" alt="Rise" class="img-cover">
        </div>
    </div>
</section>
<section id="balcony-section" class="bg-light ">
    <div class="row g-0 bg-red">
        <button type="button" class="py-5 pb-md-0 px-3 px-md-5 btn-unstyled" id="balcony">
            <div class="col-12 g-2 g-lg-5 d-flex justify-content-between">
                <h1 class=" pb-lg-3  text-dark"><?= get_field('balcony_title') ?></h1>
                <svg width="20" height="20" class="d-md-none" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0V20M20 10H0" stroke="#154754" stroke-width="1.5" />
                </svg>

            </div>
        </button>
    </div>
    <div class="row g-0 px-md-5 px-3 bg-red" id="balcony-toggle" style="display:none">
        <div class="col-lg-8 g-2 ge-lg-5">
            <p class=" text-light"><?= get_field('balcony_text') ?></p>
        </div>
        <div class="col-lg-4 g-2 gx-lg-5">
            <ul>
                <?php 
		   $list = get_field('balcony_list');
		   foreach($list as $item) : ?>
                <li class="text-light"><?= $item['list_item'] ?></li>
                <?php endforeach; ?>
            </ul>
        </div>

        <div
            class="row g-0 p-lg-5 p-3 bg-red d-flex flex-md-row flex-column-reverse align-items-end align-items-md-center">
            <div class="col-md-8 pe-md-5">
                <?php if($balconyAda) : ?>
                <p class='p italic text-uppercase text-end'>
                    <a role="button" href="<?= get_field('mini_link')['url'] ?>" class="mb-4 ada-link link-light"
                        data-bs-toggle="modal" data-bs-target="#balconyAda">ADA Info</a>

                </p>
                <?php endif; ?>
            </div>
            <div class="col-md-4 ps-md-5">
                <a target="<?= get_field('balcony_btn')['target']; ?>" href="<?= get_field('balcony_btn')['url']; ?>"
                    class='mb-4 btn-rise teal diamond pre-teal float-end'><?= get_field('balcony_btn')['title']; ?></a>
            </div>
        </div>
    </div>
    <div class="modal fade" id="balconyAda" tabindex="-1" aria-labelledby="balconyAdaLabel" aria-hidden="true">
        <div class="modal-dialog  modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title"><?= get_field('balcony_title') ?> ADA Info</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul>
                        <?php foreach($balcony as $value) : ?>
                        <li><?= $value ?></li>

                        <?php endforeach; ?>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</section>
<section id="img-block-4" class="bg-light ">
    <div class="row g-0">
        <div class="col-md-4 col-3 bg-primary d-flex justify-content-center align-items-center flex-column">
            <img src="<?= get_field('img_1_block_5') ?>" alt="Pool" class="img-cover">
        </div>
        <div class="col-md-8 col-9">
            <img src="<?= get_field('img_2_block_5') ?>" alt="Pool" class="img-cover">
        </div>
    </div>
</section>
<section id="firepit-section" class="bg-light ">
    <div class="row g-0 bg-info">
        <button type="button" class="py-5 pb-md-0 px-3 px-md-5 btn-unstyled" id="firepit">
            <div class="col-12 g-2 g-lg-5 d-flex justify-content-between">
                <h1 class=" pb-lg-3  text-dark"><?= get_field('firepit_title') ?></h1>
                <svg width="20" height="20" class="d-md-none" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0V20M20 10H0" stroke="#154754" stroke-width="1.5" />
                </svg>

            </div>
        </button>

        <div class="row g-0 px-md-5 px-3 bg-info" id="firepit-toggle" style="display:none">
            <div class="col-lg-8 g-2 ge-lg-5">
                <p class=" text-dark"><?= get_field('firepit_text') ?></p>
            </div>
            <div class="col-lg-4 g-2 gx-md-5">
                <ul>
                    <?php 
		   $list = get_field('firepit_list');
		   foreach($list as $item) : ?>
                    <li class="text-dark"><?= $item['list_item'] ?></li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <div
                class="row g-0 p-md-5 p-3 bg-info d-flex flex-md-row flex-column-reverse align-items-end align-items-md-center">
                <div class="col-md-8 pe-md-5">
                    <?php if($firepitAda) : ?>
                    <p class='p italic text-uppercase text-end'>
                        <a role="button" href="<?= get_field('mini_link')['url'] ?>" class="mb-4 ada-link link-primary"
                            data-bs-toggle="modal" data-bs-target="#firepitAda">ADA Info</a>

                    </p>
                    <?php endif; ?>
                </div>
                <div class="col-md-4 ps-md-5">
                    <a target="<?= get_field('firepit_btn')['target']; ?>"
                        href="<?= get_field('firepit_btn')['url']; ?>"
                        class='btn-rise red diamond pre-red float-end mb-4'><?= get_field('firepit_btn')['title']; ?></a>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="firepitAda" tabindex="-1" aria-labelledby="firepitAdaLabel" aria-hidden="true">
        <div class="modal-dialog  modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title"><?= get_field('firepit_title') ?> ADA Info</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul>
                        <?php foreach($firepit as $value) : ?>
                        <li><?= $value ?></li>

                        <?php endforeach; ?>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</section>
<section id="img-block-5" class="bg-light ">
    <div class="row g-0 d-flex flex-row-reverse">
        <div class="col-md-4 col-3 bg-primary d-flex justify-content-center align-items-center flex-column">
            <div class="square-stay"></div>
        </div>
        <div class="col-md-8 col-9">
            <img src="<?= get_field('img_block_4') ?>" alt="Rise" class="img-cover">
        </div>
    </div>
</section>
<section id="firepit-balcony-section" class="bg-light ">
    <div class="row bg-light">
        <button type="button" class="py-5 g-0 pb-md-0 px-3 px-md-5 btn-unstyled" id="firepit-balcony">
            <div class="col-12 g-2 g-lg-5 d-flex justify-content-between">
                <h1 class=" pb-lg-3  text-dark"><?= get_field('firepit_balcony_title') ?></h1>
                <svg width="20" height="20" class="d-md-none" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0V20M20 10H0" stroke="#154754" stroke-width="1.5" />
                </svg>

            </div>
        </button>
    </div>
    <div class="row px-md-5 bg-light" id="firepit-balcony-toggle" style="display:none">
        <div class="col-lg-8 g-2 ge-lg-5 g-0">
            <p class=" text-primary"><?= get_field('firepit_balcony_text') ?></p>
        </div>
        <div class="col-lg-4 g-2 gx-3 gx-lg-5">
            <ul>
                <?php 
		   $list = get_field('firepit_balcony_list');
		   foreach($list as $item) : ?>
                <li class="text-primary"><?= $item['list_item'] ?></li>
                <?php endforeach; ?>
            </ul>
        </div>

        <div
            class="row px-md-5 pt-md-5 px-3 pt-3 bg-light d-flex flex-md-row flex-column-reverse align-items-end align-items-md-center">
            <div class="g-0 col-md-8 pe-md-5">
                <?php if($firepit_balconyAda) : ?>
                <p class='p italic text-uppercase text-end'>
                    <a role="button" href="<?= get_field('mini_link')['url'] ?>" class="mb-4 ada-link link-dark"
                        data-bs-toggle="modal" data-bs-target="#firepit_balconyAda">ADA Info</a>

                </p>
                <?php endif; ?>
            </div>
            <div class="col-md-4 ps-md-5">
                <a target="<?= get_field('firepit_balcony_btn')['target']; ?>"
                    href="<?= get_field('firepit_balcony_btn')['url']; ?>"
                    class='btn-rise teal diamond pre-teal mb-4 float-end'><?= get_field('firepit_balcony_btn')['title']; ?></a>
            </div>
        </div>
    </div>
    <div class="modal fade" id="firepit_balconyAda" tabindex="-1" aria-labelledby="firepit_balconyAdaLabel" aria-hidden="true">
        <div class="modal-dialog  modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title"><?= get_field('firepit_balcony_title') ?> ADA Info</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul>
                        <?php foreach($firepit_balcony as $value) : ?>
                        <li><?= $value ?></li>

                        <?php endforeach; ?>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</section>
<div class="row dividers bg-light">
    <div class="divider-stay-green"></div>
</div>


<?php 

$images = get_field('gallery_images');

if( $images ): ?>
<section id="stayGallery" class="mb-80">
    <div class="row">
        <div id="stay-carousel"
            class="bg-light carousel slide carousel-fade d-flex align-self-center justify-self-center mx-auto d-lg-none"
            data-bs-ride="carousel">
            <div class="carousel-inner d-flex align-self-center justify-self-center mx-auto">
                <?php  $i=0; foreach($images as $image) : ?>
                <?php if ($i==0) {$set_ = 'active'; } else {$set_ = ''; } ?>
                <div class="carousel-item <?php echo $set_; ?>">
                    <img src="<?= $image ?>" alt="" class="d-flex align-self-center justify-self-center mx-auto">
                </div>
                <?php $i++; endforeach; ?>
            </div>

        </div>
    </div>


    <div class="row g-0 bg-light d-none d-lg-flex overflow-hidden">

        <?php foreach($images as $key=>$value) : 
        
        if($key == 0) : ?>

        <div class="col-lg-6">
            <img src="<?= $value ?>" alt="" class="img-100 pe-lg-3">
        </div>

        <?php endif; ?>

        <?php endforeach; ?>
        <div class="col-lg-6">
            <div class="row">
                <?php foreach($images as $key=>$value) : 
        
                    if($key >= 1 && $key <= 2) : ?>

                <div class="col-lg-6">
                    <img src="<?= $value ?>" alt="" class="img-100">
                </div>
                <?php endif; ?>
                <?php endforeach; ?>
            </div>
            <?php foreach($images as $key=>$value) : 
        
 
    if ($key > 2) : ?>


            <img src="<?= $value ?>" alt="" class="img-100 pt-lg-3">


            <?php endif; ?>
            <?php endforeach; ?>
        </div>
    </div>
</section>
<!-- <div class="dividers bg-light pt-60"></div> -->
<?php endif; ?>

<?php
 endwhile;endif;
get_footer();