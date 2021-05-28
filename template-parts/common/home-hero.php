<?php
// global $post;
/*  Hero  */
// var_dump(get_fields());
$video = get_field('hero_video', get_queried_object()->ID);
$title = get_field('hero_title', get_queried_object()->ID);
$subtitle = get_field('hero_text', get_queried_object()->ID);
$opacity = get_field('hero_opacity');

?>
<style>
.overlay-video {
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

.vimeo-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
}

.vimeo-wrapper iframe {
    width: 100vw;
    height: 56.25vw;
    /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: 100vh;
    min-width: 177.77vh;
    /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.home-hero {
    background-image: url('<?=get_field('hero_image')?>');
}
</style>


<section id="hero" class="home-hero bg-light position-relative">
    <div class="overlay-video"></div>

    <?php if ($video) :  ?>
    <div class="vimeo-wrapper">
        <iframe src="https://player.vimeo.com/video/<?= $video ?>?background=1&autoplay=1&loop=1&byline=0&title=0"
            frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>

    <?php endif; ?>
    <?php if ($title) : ?>
    <h1 class="hero-title-palm text-light mt-auto px-4"><?=get_field('hero_title')?></h1>
    <?php endif; if ($subtitle) : ?>
    <h2 class="mt-auto mb-5 text-light hero-subtitle"><?=get_field('hero_text')?></h2>
    <?php endif; ?>
</section>