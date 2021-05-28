<?php
// global $post;
/*  Hero  */
?>
<style>

</style>
<?php
global $post;
$post_id = get_queried_object()->ID;
$hero_title = get_queried_object()->post_title;
get_header();

$hero_img_url = get_the_post_thumbnail_url($post_id, 'large'); 
$opacity = get_field('offerte', $post_id)['background_opacity'];
?>
<style>
    .overlay-blog-single {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0;
    bottom: 0;
    z-index: 1;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 1);
    opacity: 0.<?= $opacity ? $opacity : '4' ?>
}
.hero-single-blog {
    background-image: url(<?= $hero_img_url ?>);
}
</style>

<section id="hero" class="hero-single-blog bg-light position-relative">
<div class="overlay-blog-single"></div>

    <div class="row g-0 p-0">
        <h1 class="hero-title-single text-light mt-auto"><?=$hero_title?></h1>
    </div>
    
</section>