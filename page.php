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
   get_template_part('template-parts/common/hero-page-default');
  else:
   get_template_part('template-parts/common/no-img-hero');
  endif;?>
				    <div class="py-80 mb-60 bg-light" id='<?php the_title();?>-page'>
				        <div class="px-5">
				            <?php the_content();?>
				        </div>
				    </div>
				</div>
				<?php
 endwhile;
endif;

get_footer();