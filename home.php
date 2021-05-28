<?php
/* Template Name: MainPromos */

get_header();
?>
<?php if (has_post_thumbnail(get_queried_object()->ID)):
 get_template_part('template-parts/common/hero-blog');
else:
 get_template_part('template-parts/common/no-img-hero');
endif;?>
<section id="intro" class="bg-light ">
    <div class="row px-5 bg-light mx-md-0">
        <div class="col-md-12">
            <div class="display-rise text-dark py-5">
                <?php the_field('intro_title', get_queried_object()->ID);?>
            </div>
        </div>
        <div class="col-xl-9">
            <div class="text-green py-5">
                <?php the_field('intro_copy', get_queried_object()->ID);?>
            </div>
        </div>
    </div>
</section>

</section>

<?php if (have_posts()):  ?>
<div class="d-flex bg-light justify-content-center align-items-center flex-wrap">
    <?php   while (have_posts()): the_post()?>
    <?php
if (is_home()) {
    // var_dump(get_fields());
    $date_from = get_field('offerte')['pb_date_from'];
    $date_to = get_field('offerte')['pb_date_to'];
    $colors = get_field('offerte')['pb_cc'];
    if ($colors == 'red') {
        $primary_color = 'red';
        $secondary_color = 'primary';
    } elseif ($colors == 'green') {
        $primary_color = 'green';
        $secondary_color = 'dark';
    } else {
        $primary_color = 'primary';
        $secondary_color = 'red';
    }
}
?>
    <div class="col-md-4 p-3 col-12  mb-0">
        <div class="box border-<?= $primary_color; ?>" style="border: 4px solid ">
            <div class="content p-lg-3  p-2">
                <h2 class="py-3 g-0 text-<?= $secondary_color; ?>"><?= $date_from; ?> - <?= $date_to; ?></h2>
                <h3 class=" text-<?= $primary_color; ?>"><a class="link-<?= $primary_color; ?>"
                        href="<?php the_permalink();?>">
                        <?php the_title();?>
                    </a></h3>
                <div class="text-card p-3 p-md-2 text-<?= $secondary_color; ?>"><?= the_excerpt();?></div>
                <a class="content-button link-light bg-<?= $primary_color; ?>" href="<?php the_permalink();?>">

                    More info
                </a>

            </div>
        </div>

    </div>





    <?php
 endwhile; ?>
</div>
<?php
// Navigation
mdb_pagination();

//  the_post_navigation();
else:
 // No Post Found
endif;
?>
<?php
get_footer();
