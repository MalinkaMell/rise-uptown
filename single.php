<?php
// Exit if accessed directly.
defined('ABSPATH') || exit;
get_header();
global $post;
if (have_posts()):
 while (have_posts()):
  the_post();
  ?>
<?php if (has_post_thumbnail($post->ID)):
 get_template_part('template-parts/common/hero-blog-single');
else:
 get_template_part('template-parts/common/no-img-hero');
endif;
$main_promos_page = get_field('main_promos_page', 'options');
$date_from = get_field('offerte')['pb_date_from'];
$date_to = get_field('offerte')['pb_date_to'];
$colors = get_field('offerte')['pb_cc'];
$book = get_field('offerte')['book_button'];
if ($colors == 'red') {
    $bg_color = 'red';
    $primary_color = 'dark';
    $secondary_color = 'light';
    $btn_color = 'teal';
    $btn_type = 'diamond';
} elseif ($colors == 'green') {
    $bg_color = 'green';
    $primary_color = 'info';
    $secondary_color = 'light';
    $btn_color = 'blue';
    $btn_type = 'tile';
} else {
    $bg_color = 'primary';
    $primary_color = 'light';
    $secondary_color = 'dark';
    $btn_color = 'light';
    $btn_type = 'tile';
}
?>
<section id="post-<?= $post->ID; ?>" class="">
    <div class="bg-<?= $bg_color; ?> row px-4 px-lg-5 py-60 mb-80">
        <div class="col-lg-9 g-2 gx-lg-5">
            <h2 class="py-3 py-md-3 text-<?= $secondary_color; ?>"><?= $date_from; ?> - <?= $date_to; ?></h2>
            <h1 class="pb-3 pb-md-3 text-<?= $primary_color; ?>"><?= the_title() ?></h1>
            <div class="text-card text-<?= $secondary_color; ?>"><?php the_content(); ?></div>
        </div>
        <?php if ($book): ?>
        <div class="col-md-3 py-3 g-2 gx-lg-5 d-flex mt-auto ms-auto">
            <a class="ms-auto me-0 btn-rise <?= $btn_type; ?> <?= $btn_color; ?> pre-<?= $btn_color; ?>" href="<?= $book['url'] ?>"
                target="<?= $book['target'] ?>"><?= $book['title'] ?></a>
        </div>
        <?php endif; ?>
    </div>
    <?php if ($main_promos_page) : ?>
    <div class="row">
        <div class="col d-flex pb-60 justify-content-center">
        <a class="btn-rise gold tile red pre-gold" href="<?= $main_promos_page['url'] ?>"
                target="<?= $main_promos_page['target'] ?>"><?= $main_promos_page['title'] ?></a>
        </div>
    </div>
    <?php endif; ?>
</section>

<?php	endwhile;endif;

get_footer();
