<?php
/*  Header Template */
global $post;
$scripts = get_field('scripts', 'options');
$before_body_close = $scripts['before_closing_body_script'];
$head_scripts = $scripts['head_scripts'] ;
$after_body_open = $scripts['after_opening_body_script'];
?>

<!DOCTYPE html>

<html <?php language_attributes();?>>

<head>
    <meta charset="<?php bloginfo('charset');?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Primary Meta Tags -->
    <title>Rise Uptown: locally owned, boutique hotel experience</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="author" content="Monomyth Studio, support@monomythstudio.com">
    <meta name="title" content="Rise Uptown: locally-owned, boutique hotel experience">
    <meta name="description"
        content="79 guest rooms, poolside bar, rooftop cocktail lounge, pop stand and hometown coffee shop. Plus, discover Phoenix’s finest neighborhood right outside your guest room door.">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?= BLOG_URL ?>">
    <meta property="og:title" content="Rise Uptown: locally-owned, boutique hotel experience">
    <meta property="og:description"
        content="79 guest rooms, poolside bar, rooftop cocktail lounge, pop stand and hometown coffee shop. Plus, discover Phoenix’s finest neighborhood right outside your guest room door.">
    <meta property="og:image" content="<?= THEME_DIR ?>/rise_uptown.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="<?= BLOG_URL ?>">
    <meta property="twitter:title" content="Rise Uptown: locally-owned, boutique hotel experience">
    <meta property="twitter:description"
        content="79 guest rooms, poolside bar, rooftop cocktail lounge, pop stand and hometown coffee shop. Plus, discover Phoenix’s finest neighborhood right outside your guest room door.">
    <meta property="twitter:image" content="<?= THEME_DIR ?>/rise_uptown.png">

    <!-- Fav / App Icons -->
    <link rel="apple-touch-icon" sizes="180x180" href="<?= THEME_DIR ?>/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?= THEME_DIR ?>/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?= THEME_DIR ?>/favicon-16x16.png">
    <link rel="manifest" href="<?= THEME_DIR ?>/site.webmanifest">
    <link rel="mask-icon" href="<?= THEME_DIR ?>/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="apple-mobile-web-app-title" content="Rise Uptown">
    <meta name="application-name" content="Rise Uptown">
    <meta name="msapplication-TileColor" content="#ac7d2c">
    <meta name="theme-color" content="#ffffff">

    <?php
    wp_head();
    if ($head_scripts) {
        echo $head_scripts;
    }
    ?>
</head>

<body <?php body_class(' loading ');?>>
    <?php wp_body_open();?>
    <?php
    if ($after_body_open) {
        echo $after_body_open;
    }
    ?>

    <div id="page-<?= $post->ID; ?>" class="d-flex flex-column align-items-center m-0">
        <div class="container-xxxl bg-light  ">
            <?php get_template_part('template-parts/common/top-navbar'); ?>
            <main>