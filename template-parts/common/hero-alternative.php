<?php
// global $post;
/*  Hero  */
// var_dump(get_fields());
global $post;

$post_id = get_queried_object()->ID;
get_header();
$hero_img = get_field('hero_image');
$hero_title_field = get_field('hero_title');
$hero_img_url = $hero_img ? $hero_img : get_the_post_thumbnail_url($post_id, 'large'); 
$hero_title = $hero_title_field ? $hero_title_field : get_the_title();
?>
<style>
.hero {
    background-image: url(<?= $hero_img_url ?>);
}
</style>

<section id="hero" class="hero bg-light">
    <div class="row g-0 p-0">
        <h1 class="hero-title-aaux text-light mt-auto"><?=$hero_title?></h1>
    </div>
    
</section>