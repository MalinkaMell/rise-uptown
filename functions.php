<?php
/**
 * Functions and definitions
 */
//BS5 NAVWALKER
require_once 'inc/bs5navwalker.php';

//POST NAVIGATION
require_once 'inc/pagination.inc.php';

// REMOVE JUNK FROM HEAD
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'start_post_rel_link', 10, 0);
remove_action('wp_head', 'parent_post_rel_link', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_head', 'rel_canonical');
remove_action('wp_head', 'rel_alternate');
remove_action('wp_head', 'wp_oembed_add_discovery_links');
remove_action('wp_head', 'wp_oembed_add_host_js');
remove_action('wp_head', 'rest_output_link_wp_head');
remove_action('rest_api_init', 'wp_oembed_register_route');
remove_action('wp_print_styles', 'print_emoji_styles');
remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);
remove_filter('pre_oembed_result', 'wp_filter_pre_oembed_result', 10);
add_filter('embed_oembed_discover', '__return_false');

// DEFINE DIRECTORIES

define("THEME_DIR", get_template_directory_uri());
define("IMAGES_DIR", get_template_directory_uri() . '/dist/images');
define("BLOG_URL", get_site_url());
define("UPLOAD_DIR", wp_upload_dir()['baseurl']);

// ENQUEUE STYLES

function rise_cause_assets()
{
    wp_enqueue_script('rise-bs', get_template_directory_uri() . '/dist/js/bootstrap.bundle.js', array(), '1.0.0', true);
    wp_enqueue_script('rise-modernizr', get_template_directory_uri() . '/dist/js/modernizr-webp.js', array(), '1.0.0', true);
    wp_enqueue_script('rise-jquery', get_template_directory_uri() . '/dist/js/script.js', array('jquery'), '1.0.0', true);
    wp_enqueue_style('rise-stylesheet', get_template_directory_uri() . '/dist/css/bundle.css', array(), '1.0.0', 'all');
    wp_enqueue_script('rise-script', get_template_directory_uri() . '/dist/js/app.js', array(), '1.0.0', true);

}
add_action('wp_enqueue_scripts', 'rise_cause_assets');

// IMAGE SIZES
add_action('after_setup_theme', 'rise_theme_setup');
function rise_theme_setup()
{
    add_image_size('hero', 2560, 1540, true);
    add_image_size('square-thumb', 800, 800, true);
    add_image_size('small-thumb', 650, 300, true);
}

//LOAD SCRIPTS
function rise_load_scripts()
{
    wp_localize_script('rise-scripts', 'custom_vars', array(
        'templateUrl' => get_template_directory_uri(),
        'blogUrl'     => get_site_url(),
        'admin_url'   => admin_url(),
        'ajax_nonce'  => wp_create_nonce('form_submission'),
    )
    );
}
add_action('wp_enqueue_scripts', 'rise_load_scripts');

//ADD HTML5 SUPPORT
add_theme_support(
    'html5',
    array(
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
        'navigation-widgets',
    )
);

// THEME OPTIONS PAGE
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title'      => 'Site Options',
        'menu_title'      => 'Site Options',
        'menu_slug'       => 'site-settings',
        'capability'      => 'edit_posts',
        'position'        => '',
        'parent_slug'     => '',
        'icon_url'        => 'dashicons-admin-generic',
        'redirect'        => false,
        'post_id'         => 'options',
        'autoload'        => true,
        'update_button'   => 'Update',
        'updated_message' => 'Updated Successfully',
    ));
}

//FEATURED IMAGES SUPPORT
add_theme_support('post-thumbnails');

//REGISTER MENUES
function register_my_menus()
{
    register_nav_menus(
        array(
            'primary'   => __('Header Navigation'),
            'secondary' => __('Footer Navigation'),
            'socials'   => __('Social Links'),
        )
    );
}
add_action('init', 'register_my_menus');

//remove comments from pages
add_action('init', 'remove_comment_support', 100);

function remove_comment_support()
{
    remove_post_type_support('page', 'comments');
}

//REMOVE MENU ITEMS FROM ADMIN

function remove_menus()
{
    global $submenu;

    remove_menu_page('edit.php?post_type=acf-field-group'); //ACF
    remove_menu_page('sidebar'); //Sidebar widgets
    remove_menu_page('edit-comments.php'); //Comments
}
add_action('admin_menu', 'remove_menus');

add_action('init', 'cp_change_post_object');
// Change dashboard Posts to News
function cp_change_post_object()
{
    $get_post_type              = get_post_type_object('post');
    $labels                     = $get_post_type->labels;
    $labels->name               = 'Promotions';
    $labels->singular_name      = 'Promotions';
    $labels->add_new            = 'Add Promotion';
    $labels->add_new_item       = 'Add Promotion';
    $labels->edit_item          = 'Edit Promotion';
    $labels->new_item           = 'Promotion';
    $labels->view_item          = 'View Promotions';
    $labels->search_items       = 'Search Promotions';
    $labels->not_found          = 'No Promotion found';
    $labels->not_found_in_trash = 'No Promotions found in Trash';
    $labels->all_items          = 'All Promotions';
    $labels->menu_name          = 'Promotions';
    $labels->name_admin_bar     = 'Promotions';
}
