<?php
/*
Template Name: FAQ
 */

defined('ABSPATH') || exit;
global $post;
$post_id = get_queried_object()->ID;
get_header();

if (have_posts()): while (have_posts()): the_post()?>
<?php get_template_part('template-parts/common/hero-alternative'); ?>

<section id="intro" class="bg-light ">
    <div class="row px-5 g-0 bg-light">
        <div class="col-md-12">
            <div class="display-rise py-5 me-md-5 text-red">
                <?= get_field('intro_title'); ?>
            </div>
        </div>
        <div class="col-xl-9">
            <div class="text-green py-5">
                <?= get_field('intro_text'); ?>
            </div>
        </div>
    </div>
</section>
<section>
<div class="row py-5 g-0 bg-light">
        <div class="col-md-12">
<h2 class="py-3 py-md-3 text-dark px-5"><?= get_field('faq_title') ?></h2>
</div></div>
</section>

<?php 
            $faq_types = get_field('faq_types');
            foreach($faq_types as $type) : ?>

<section id="questions" style="background-color: <?= $type['background_color'] ?>">
    <div class="row g-0 p-5">
        <div class="col-10">
            <h1 class="pb-3 pb-md-3 text-primary"><?= $type['type_title'] ?></h1>
            <?php 
            $faqs = $type['q_a'];
            foreach($faqs as $faq) : ?>
<p class="bold-rise text-dark"><?= $faq['question']; ?></p>
        <p class=" text-dark"><?= $faq['answer']; ?></p>
            <?php endforeach; ?>
        </div>
        
    </div>
</section>
<?php endforeach; ?>
<?php
 endwhile;endif;
get_footer();