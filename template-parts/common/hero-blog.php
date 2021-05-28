<?php
// global $post;
/*  Hero  */
// var_dump(get_fields());
global $post;
$post_id = get_queried_object()->ID;
$hero_title = get_queried_object()->post_title;
get_header();

$hero_img_url = get_the_post_thumbnail_url($post_id, 'large'); 

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