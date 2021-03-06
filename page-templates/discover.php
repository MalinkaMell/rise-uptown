<?php
/*
Template Name: Discover
 */

defined('ABSPATH') || exit;
global $post;
$post_id = get_queried_object()->ID;
get_header();

if (have_posts()): while (have_posts()): the_post()?>
<?php get_template_part('template-parts/common/hero'); ?>
<section id="img-block-1" class="bg-light ">
    <div class="row ">
        <div class="col-md-4 col-3 g-0 bg-green d-flex justify-content-start align-items-center overflow-hidden">
            <div class="green-sun-discover"></div>
        </div>
        <div class="col-md-8 col-9 g-0">
            <img src="<?= get_field('img_block_1') ?>" alt="Pool" class="img-cover max-850">
        </div>
    </div>
</section>
<section id="history" class="">
    <div class="bg-info row px-4 px-lg-5 py-60">
        <div class="col-xl-7 col-lg-9 g-2 gx-lg-5">
            <h2 class="py-3 py-md-3 text-dark"><?= get_field('explore_subtitle') ?></h2>
            <h1 class="pb-3 pb-md-3 text-primary"><?= get_field('explore_title') ?></h1>
            <div class="text-card text-dark"><?= get_field('explore_text') ?></div>
        </div>
        <div class="col-xl-5 col-lg-3 py-3 g-2 gx-lg-5 d-flex mt-auto ms-auto">
            <a target="<?= get_field('instagram_btn')['target']; ?>" href="<?= get_field('history_btn')['url']; ?>"
                class='btn-rise gold flower pre-gold ms-auto me-0'><?= get_field('history_btn')['title']; ?></a>
        </div>
    </div>
</section>
<div id="divider-1" class="row bg-light py-60">
    <div class='display-rise text-green py-5 pe-5 ps-3'>
        <?= get_field('divider_block_copy')  ?>
    </div>
</div>
<section id="img-block-2" class="bg-light ">
    <div class="row">
        <div
            class="col-lg-7 g-0 col-xl-8  col-10 bg-primary d-flex justify-content-center align-items-center flex-column px-4">
            <div class="text-center mb-lg-5">
                <div class=" blue-waves-discover wave-up"></div>
                <div class=" blue-waves-discover wave-up"></div>
            </div>
            <div class="foodBanner py-lg-5 py-3 text-light"><?= get_field('divider_block_title') ?></div>
        </div>
        <div class="col-lg-5 g-0 col-xl-4  col-2 overflow-hidden ">
            <img src="<?= get_field('divider_block_img') ?>" alt="Rise" class="max-850 ">
        </div>
    </div>
</section>
<section id="card-blocks-1" class="bg-light ">
    <div class="row px-lg-5 px-3 pt-md-5 bg-light">
        <div class="col-lg-6 px-md-5 d-none d-lg-flex p-3 d-flex justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="259" height="259" fill="none" viewBox="0 0 259 259">
                <path fill="#ADC7CF"
                    d="M0 0v89.8618l.0527583-.0048H89.809l.0528.0048V0H0zm13.4678 34.2498c5.5444 5.5492 12.3502 8.7914 18.2064 10.6859-5.8514 1.8945-12.6572 5.1416-18.2064 10.686-3.61638 3.6211-6.2543 7.7746-8.17758 11.8514V22.3935c1.92328 4.0816 4.5612 8.2351 8.17758 11.8563zM5.77943 5.78903C11.2135 6.62357 22.5566 9.25189 30.5135 17.2088c7.9569 7.9569 10.5852 19.3 11.415 24.7341-5.4341-.8346-16.7772-3.4629-24.7341-11.4198-7.9521-7.9617-10.58043-19.3-11.41497-24.73407zM41.9381 47.9333c-.825 5.4246-3.4389 16.7484-11.4246 24.7341-7.9569 7.9569-19.3048 10.5853-24.73886 11.415.82495-5.4245 3.43888-16.7484 11.41976-24.7341 7.9617-7.9569 19.3096-10.5852 24.7437-11.415zm-7.698 28.4608c5.5493-5.5493 8.7915-12.3551 10.686-18.2065 1.8993 5.8562 5.1415 12.662 10.6908 18.2065 3.6163 3.6163 7.7698 6.2494 11.8466 8.1727H22.3983c4.072-1.9233 8.2255-4.5564 11.8418-8.1727zm13.6836-34.456c.825-5.4245 3.4389-16.7484 11.4246-24.7341C67.3052 9.2471 78.6531 6.61877 84.0872 5.78423c-.825 5.42447-3.4389 16.74837-11.4246 24.73407-7.9617 7.9617-19.3096 10.59-24.7389 11.4198zm.0048 5.9905c5.4245.8249 16.7484 3.4388 24.7341 11.4197 7.9569 7.9569 10.5852 19.3 11.4198 24.7341-5.4341-.8345-16.7772-3.4629-24.7341-11.415-7.9617-7.9617-10.59-19.3095-11.4198-24.7388zm28.4607 7.6931c-5.5444-5.5444-12.3502-8.7915-18.2016-10.686 5.8514-1.8993 12.6572-5.1415 18.2016-10.6859 3.6212-3.6212 6.2543-7.7747 8.1776-11.8515v45.0796c-1.9233-4.0816-4.5564-8.2399-8.1776-11.8562zM55.6169 13.4774c-5.5493 5.5492-8.7915 12.355-10.6908 18.2112-1.8945-5.8562-5.1415-12.662-10.686-18.2112-3.6259-3.62598-7.7842-6.2591-11.8658-8.18718h45.1132c-4.0864 1.92808-8.2447 4.5612-11.8706 8.18718z" />
                <path fill="#ADC7CF"
                    d="M84.5674 0v89.8618l.0527-.0048h89.7559l.053.0048V0H84.5674zm13.4725 34.2498c5.5441 5.5492 12.3501 8.7914 18.2061 10.6859-5.851 1.8945-12.657 5.1416-18.2061 10.686-3.6163 3.6211-6.2542 7.7746-8.1775 11.8514V22.3935c1.9233 4.0816 4.5564 8.2351 8.1775 11.8563zM90.3516 5.78903c5.4341.83454 16.7774 3.46286 24.7344 11.41977 7.957 7.9569 10.585 19.3 11.415 24.7341-5.434-.8346-16.778-3.4629-24.734-11.4198-7.9573-7.9617-10.5856-19.3-11.4154-24.73407zM126.505 47.9333c-.825 5.4246-3.438 16.7484-11.424 24.7341-7.957 7.9569-19.3049 10.5853-24.739 11.415.825-5.4245 3.4389-16.7484 11.42-24.7341 7.961-7.9569 19.309-10.5852 24.743-11.415zm-7.693 28.4608c5.55-5.5493 8.792-12.3551 10.686-18.2065 1.9 5.8562 5.142 12.662 10.691 18.2065 3.616 3.6163 7.77 6.2494 11.847 8.1727H106.97c4.072-1.9233 8.221-4.5564 11.842-8.1727zm13.679-34.456c.825-5.4245 3.439-16.7484 11.425-24.7341 7.957-7.9569 19.304-10.58523 24.739-11.41977-.825 5.42447-3.439 16.74837-11.425 24.73407-7.957 7.9617-19.305 10.59-24.739 11.4198zm.005 5.9905c5.424.8249 16.748 3.4388 24.734 11.4197 7.957 7.9569 10.585 19.3 11.42 24.7341-5.434-.8345-16.777-3.4629-24.734-11.415-7.962-7.9617-10.586-19.3095-11.42-24.7388zm28.461 7.6931c-5.545-5.5444-12.351-8.7915-18.202-10.686 5.851-1.8993 12.657-5.1415 18.202-10.6859 3.621-3.6212 6.254-7.7747 8.177-11.8515v45.0796c-1.923-4.0816-4.556-8.2399-8.177-11.8562zm-20.773-42.1443c-5.544 5.5492-8.791 12.355-10.686 18.2064-1.894-5.8562-5.141-12.662-10.686-18.2112-3.626-3.62598-7.784-6.2591-11.866-8.18717h45.114c-4.087 1.93287-8.25 4.56599-11.876 8.19197z" />
                <path fill="#ADC7CF"
                    d="M169.138 0v89.8618l.053-.0048h89.756l.053.0048V0h-89.862zm13.468 34.2498c5.545 5.5492 12.35 8.7914 18.207 10.6859-5.852 1.8945-12.658 5.1416-18.207 10.686-3.616 3.6211-6.254 7.7746-8.177 11.8514V22.3935c1.923 4.0816 4.556 8.2351 8.177 11.8563zm-7.688-28.46077c5.434.83454 16.777 3.46286 24.734 11.41977 7.957 7.9569 10.585 19.3 11.415 24.7341-5.434-.8346-16.777-3.4629-24.734-11.4198-7.957-7.9617-10.581-19.3-11.415-24.73407zm36.154 42.14427c-.825 5.4246-3.439 16.7484-11.425 24.7341-7.957 7.9569-19.305 10.5853-24.739 11.415.825-5.4245 3.439-16.7484 11.42-24.7341 7.967-7.9569 19.314-10.5852 24.744-11.415zm-7.693 28.4608c5.549-5.5493 8.791-12.3551 10.686-18.2065 1.899 5.8562 5.141 12.662 10.69 18.2065 3.617 3.6163 7.77 6.2494 11.847 8.1727h-45.065c4.072-1.9233 8.225-4.5564 11.842-8.1727zm13.678-34.456c.825-5.4245 3.439-16.7484 11.425-24.7341 7.957-7.9569 19.305-10.58523 24.739-11.41977-.825 5.42447-3.439 16.74837-11.425 24.73407-7.957 7.9617-19.305 10.59-24.739 11.4198zm.005 5.9905c5.425.8249 16.749 3.4388 24.734 11.4197 7.957 7.9569 10.585 19.3 11.42 24.7341-5.434-.8345-16.777-3.4629-24.734-11.415-7.957-7.9617-10.585-19.3095-11.42-24.7388zm28.466 7.6931c-5.545-5.5444-12.351-8.7915-18.202-10.686 5.851-1.8993 12.657-5.1415 18.202-10.6859 3.621-3.6212 6.254-7.7747 8.177-11.8515v45.0796c-1.923-4.0816-4.561-8.2399-8.177-11.8562zm-20.773-42.1443c-5.549 5.5492-8.791 12.355-10.69 18.2112-1.895-5.8562-5.142-12.662-10.686-18.2112-3.626-3.62598-7.785-6.2591-11.866-8.18718h45.113c-4.087 1.92808-8.25 4.5612-11.871 8.18718zM0 84.5664v89.8616l.0527583-.005H89.809l.0528.005V84.5664H0zm13.4678 34.2496c5.5444 5.549 12.3502 8.792 18.2064 10.686-5.8514 1.895-12.6572 5.142-18.2064 10.686-3.61638 3.621-6.2543 7.775-8.17758 11.852v-45.08c1.92328 4.081 4.5612 8.235 8.17758 11.856zM5.77943 90.3554c5.43407.8346 16.77717 3.4629 24.73407 11.4196 7.9569 7.957 10.5852 19.3 11.415 24.734-5.4341-.834-16.7772-3.463-24.7341-11.419-7.9521-7.957-10.58043-19.3005-11.41497-24.7346zM41.9381 132.5c-.825 5.424-3.4389 16.748-11.4246 24.734-7.9569 7.957-19.3048 10.585-24.73886 11.415.82495-5.425 3.43888-16.749 11.41976-24.734 7.9617-7.957 19.3096-10.585 24.7437-11.415zm-7.698 28.46c5.5493-5.549 8.7915-12.355 10.686-18.206 1.8993 5.856 5.1415 12.662 10.6908 18.206 3.6163 3.617 7.7698 6.25 11.8466 8.178H22.3983c4.072-1.928 8.2255-4.561 11.8418-8.178zm13.6836-34.456c.825-5.424 3.4389-16.748 11.4246-24.734 7.9569-7.9565 19.3048-10.5848 24.7389-11.4194-.825 5.4246-3.4389 16.7484-11.4246 24.7344-7.9617 7.961-19.3096 10.59-24.7389 11.419zm.0048 5.991c5.4245.825 16.7484 3.439 24.7341 11.42 7.9569 7.957 10.5852 19.3 11.4198 24.734-5.4341-.835-16.7772-3.463-24.7341-11.415-7.9617-7.962-10.59-19.31-11.4198-24.739zm28.4607 7.693c-5.5444-5.544-12.3502-8.791-18.2016-10.686 5.8514-1.899 12.6572-5.141 18.2016-10.686 3.6212-3.621 6.2543-7.775 8.1776-11.851v45.075c-1.9233-4.077-4.5564-8.231-8.1776-11.852zM55.6169 98.0438c-5.5493 5.5492-8.7915 12.3552-10.6908 18.2112-1.8945-5.856-5.1415-12.662-10.686-18.2112-3.6259-3.626-7.7842-6.2591-11.8658-8.1872h45.1132c-4.0864 1.9281-8.2447 4.566-11.8706 8.1872z" />
                <path fill="#ADC7CF"
                    d="M169.138 84.5664v89.8616l.053-.005h89.756l.053.005V84.5664h-89.862zm13.468 34.2496c5.545 5.549 12.35 8.792 18.207 10.686-5.852 1.895-12.658 5.142-18.207 10.686-3.616 3.621-6.254 7.775-8.177 11.852v-45.08c1.923 4.081 4.556 8.235 8.177 11.856zm-7.688-28.4606c5.434.8346 16.777 3.4629 24.734 11.4196 7.957 7.957 10.585 19.3 11.415 24.734-5.434-.834-16.777-3.463-24.734-11.419-7.957-7.957-10.581-19.3005-11.415-24.7346zM211.072 132.5c-.825 5.424-3.439 16.748-11.425 24.734-7.957 7.957-19.305 10.585-24.739 11.415.825-5.425 3.439-16.749 11.42-24.734 7.967-7.957 19.314-10.585 24.744-11.415zm-7.693 28.46c5.549-5.549 8.791-12.355 10.686-18.206 1.899 5.856 5.141 12.662 10.69 18.206 3.617 3.617 7.77 6.25 11.847 8.178h-45.065c4.072-1.928 8.225-4.561 11.842-8.178zm13.678-34.456c.825-5.424 3.439-16.748 11.425-24.734 7.957-7.9565 19.305-10.5848 24.739-11.4194-.825 5.4246-3.439 16.7484-11.425 24.7344-7.957 7.961-19.305 10.59-24.739 11.419zm.005 5.991c5.425.825 16.749 3.439 24.734 11.42 7.957 7.957 10.585 19.3 11.42 24.734-5.434-.835-16.777-3.463-24.734-11.415-7.957-7.962-10.585-19.31-11.42-24.739zm28.466 7.693c-5.545-5.544-12.351-8.791-18.202-10.686 5.851-1.899 12.657-5.141 18.202-10.686 3.621-3.621 6.254-7.775 8.177-11.851v45.075c-1.923-4.077-4.561-8.231-8.177-11.852zm-20.773-42.1442c-5.549 5.5492-8.791 12.3552-10.69 18.2112-1.895-5.856-5.142-12.662-10.686-18.2112-3.626-3.626-7.785-6.2591-11.866-8.1872h45.113c-4.087 1.9281-8.25 4.566-11.871 8.1872zM0 169.139v89.862l.0527583-.005H89.809l.0528.005v-89.862H0zm13.4678 34.245c5.5444 5.549 12.3502 8.791 18.2064 10.686-5.8514 1.894-12.6572 5.141-18.2064 10.686-3.61638 3.621-6.2543 7.774-8.17758 11.851v-45.08c1.92328 4.082 4.5612 8.24 8.17758 11.857zm-7.68837-28.461c5.43407.834 16.77717 3.463 24.73407 11.42 7.9569 7.957 10.5852 19.3 11.415 24.734-5.4341-.835-16.7772-3.463-24.7341-11.42-7.9521-7.957-10.58043-19.3-11.41497-24.734zm36.15867 42.144c-.825 5.425-3.4389 16.749-11.4246 24.734-7.9569 7.957-19.3048 10.586-24.73886 11.415.82495-5.424 3.43888-16.748 11.41976-24.734 7.9617-7.952 19.3096-10.58 24.7437-11.415zm-7.698 28.461c5.5493-5.549 8.7915-12.355 10.686-18.206 1.8993 5.856 5.1415 12.662 10.6908 18.206 3.6163 3.616 7.7698 6.249 11.8466 8.173H22.3983c4.072-1.919 8.2255-4.552 11.8418-8.173zm13.6836-34.451c.825-5.425 3.4389-16.749 11.4246-24.734 7.9569-7.957 19.3048-10.586 24.7389-11.42-.825 5.424-3.4389 16.748-11.4246 24.734-7.9617 7.957-19.3096 10.585-24.7389 11.42zm.0048 5.985c5.4245.825 16.7484 3.439 24.7341 11.42 7.9569 7.957 10.5852 19.3 11.4198 24.734-5.4341-.834-16.7772-3.463-24.7341-11.415-7.9617-7.957-10.59-19.304-11.4198-24.739zm28.4607 7.694c-5.5444-5.545-12.3502-8.792-18.2016-10.686 5.8514-1.9 12.6572-5.142 18.2016-10.686 3.6212-3.622 6.2543-7.775 8.1776-11.852v45.08c-1.9233-4.082-4.5564-8.235-8.1776-11.856zm-20.7723-42.145c-5.5493 5.549-8.7915 12.355-10.6908 18.211-1.8945-5.856-5.1415-12.662-10.686-18.211-3.6259-3.626-7.7842-6.259-11.8658-8.187h45.1132c-4.0864 1.928-8.2447 4.566-11.8706 8.187z" />
                <path fill="#ADC7CF"
                    d="M84.5674 169.139v89.862l.0527-.005h89.7559l.053.005v-89.862H84.5674zm13.4725 34.245c5.5441 5.549 12.3501 8.791 18.2061 10.686-5.851 1.894-12.657 5.141-18.2061 10.686-3.6163 3.621-6.2542 7.774-8.1775 11.851v-45.08c1.9233 4.082 4.5564 8.24 8.1775 11.857zm-7.6883-28.461c5.4341.834 16.7774 3.463 24.7344 11.42 7.957 7.957 10.585 19.3 11.415 24.734-5.434-.835-16.778-3.463-24.734-11.42-7.9573-7.957-10.5856-19.3-11.4154-24.734zm36.1534 42.144c-.825 5.425-3.438 16.749-11.424 24.734-7.957 7.957-19.3049 10.586-24.739 11.415.825-5.424 3.4389-16.748 11.42-24.734 7.961-7.952 19.309-10.58 24.743-11.415zm-7.693 28.461c5.55-5.549 8.792-12.355 10.686-18.206 1.9 5.856 5.142 12.662 10.691 18.206 3.616 3.616 7.77 6.249 11.847 8.173H106.97c4.072-1.919 8.221-4.552 11.842-8.173zm13.679-34.451c.825-5.425 3.439-16.749 11.425-24.734 7.957-7.957 19.304-10.586 24.739-11.42-.825 5.424-3.439 16.748-11.425 24.734-7.957 7.957-19.305 10.585-24.739 11.42zm.005 5.985c5.424.825 16.748 3.439 24.734 11.42 7.957 7.957 10.585 19.3 11.42 24.734-5.434-.834-16.777-3.463-24.734-11.415-7.962-7.957-10.586-19.304-11.42-24.739zm28.461 7.694c-5.545-5.545-12.351-8.792-18.202-10.686 5.851-1.9 12.657-5.142 18.202-10.686 3.621-3.622 6.254-7.775 8.177-11.852v45.08c-1.923-4.082-4.556-8.235-8.177-11.856zm-20.773-42.145c-5.549 5.549-8.791 12.355-10.691 18.211-1.894-5.856-5.141-12.662-10.685-18.211-3.626-3.626-7.785-6.259-11.866-8.187h45.113c-4.082 1.928-8.245 4.566-11.871 8.187z" />
                <path fill="#ADC7CF"
                    d="M169.138 169.139v89.862l.053-.005h89.756l.053.005v-89.862h-89.862zm13.468 34.245c5.545 5.549 12.35 8.791 18.207 10.686-5.852 1.894-12.658 5.141-18.207 10.686-3.616 3.621-6.254 7.774-8.177 11.851v-45.08c1.923 4.082 4.556 8.24 8.177 11.857zm-7.688-28.461c5.434.834 16.777 3.463 24.734 11.42 7.957 7.957 10.585 19.3 11.415 24.734-5.434-.835-16.777-3.463-24.734-11.42-7.957-7.957-10.581-19.3-11.415-24.734zm36.154 42.144c-.825 5.425-3.439 16.749-11.425 24.734-7.957 7.957-19.305 10.586-24.739 11.415.825-5.424 3.439-16.748 11.42-24.734 7.967-7.952 19.314-10.58 24.744-11.415zm-7.693 28.461c5.549-5.549 8.791-12.355 10.686-18.206 1.899 5.856 5.141 12.662 10.69 18.206 3.617 3.616 7.77 6.249 11.847 8.173h-45.065c4.072-1.919 8.225-4.552 11.842-8.173zm13.678-34.451c.825-5.425 3.439-16.749 11.425-24.734 7.957-7.957 19.305-10.586 24.739-11.42-.825 5.424-3.439 16.748-11.425 24.734-7.957 7.957-19.305 10.585-24.739 11.42zm.005 5.985c5.425.825 16.749 3.439 24.734 11.42 7.957 7.957 10.585 19.3 11.42 24.734-5.434-.834-16.777-3.463-24.734-11.415-7.957-7.957-10.585-19.304-11.42-24.739zm28.466 7.694c-5.545-5.545-12.351-8.792-18.202-10.686 5.851-1.9 12.657-5.142 18.202-10.686 3.621-3.622 6.254-7.775 8.177-11.852v45.08c-1.923-4.082-4.561-8.235-8.177-11.856zm-20.773-42.145c-5.549 5.549-8.791 12.355-10.69 18.211-1.895-5.856-5.142-12.662-10.686-18.211-3.626-3.626-7.785-6.259-11.866-8.187h45.113c-4.087 1.928-8.25 4.566-11.871 8.187z" />
            </svg>
        </div>
        <?php
        $cards_1 = get_field('blocks_one');
            foreach ($cards_1 as $key=>$card) : ?>
        <div class="col-lg-6 p-3 col-md-8  <?php if($key%2 == 0) echo ' offset-md-4 offset-lg-0 '; ?>">
            <div class="box" style="border: 4px solid <?= $card['block_main_color'] ?>;">
                <div class="content p-lg-3  p-xl-5 p-2">
                    <h2 class="p-3 p-md-2 p-xl-5 " style="color: <?= $card['block_text_color'] ?>">
                        <?= $card['block_address'] ?></h2>
                    <h1 style="color: <?= $card['block_main_color'] ?>" class="px-3 px-md-2  px-xl-5">
                        <?= $card['block_title'] ?></h1>
                    <div class="text-card p-3  p-xl-5 p-md-2" style="color: <?= $card['block_text_color'] ?>">
                        <?= $card['block_text'] ?></div>
                    <a class="content-button link-light" style="background:<?= $card['block_main_color'] ?>"
                        target="<?= $card['block_button']['target'] ?>" href="<?= $card['block_button']['url'] ?>">
                        <?= $card['block_button']['title'] ?></a>
                    </a>
                </div>
            </div>
        </div>
        <?php endforeach;
        ?>
    </div>
</section>
<div class="dividers row bg-light">
    <div class="divider-discover-gold"></div>
</div>
<section id="img-block-4" class="bg-light ">
    <div class="row">
        <div class="col-lg-4 col-xxl-3 col-3 overflow-hidden ">
            <img src="<?= get_field('divider_block_img_2') ?>" alt="Pool" class=" max-700">
        </div>
        <div
            class="col-lg-8 col-xxl-9  col-9 bg-red d-flex justify-content-end  align-items-end align-items-md-start position-relative">
            <div class="display-rise shopping-txt text-info">Shopping</div>
            <div class="gold-sun-discover "></div>

        </div>

    </div>

</section>
<section id="card-blocks-2" class="bg-light">
    <div class="row px-lg-5 px-3 pt-md-5 bg-light">
        <?php
        $cards_2 = get_field('blocks_two');
            foreach ($cards_2 as $key => $card) :
            if ($key >= 0 && $key < 3): ?>
        <div class="col-lg-6 p-3 col-md-8  <?php if($key % 2 == 0) echo ' offset-md-4 offset-lg-0'; ?> ">
            <div class="box" style="border: 4px solid <?= $card['block_main_color'] ?>;">
                <div class="content p-lg-3 p-2">
                    <h2 class="p-3 p-md-2" style="color: <?= $card['block_text_color'] ?>"><?= $card['block_address'] ?>
                    </h2>
                    <h1 style="color: <?= $card['block_main_color'] ?>" class="px-3 p-md-2"><?= $card['block_title'] ?>
                    </h1>
                    <div class="text-card p-3 p-md-2" style="color: <?= $card['block_text_color'] ?>">
                        <?= $card['block_text'] ?></div>
                    <div class="content-button" style="background:<?= $card['block_main_color'] ?>">
                        <a target="<?= $card['block_button']['target'] ?>" href="<?= $card['block_button']['url'] ?>"
                            class=" link-light"><?= $card['block_button']['title'] ?></a>
                    </div>
                </div>
            </div>
        </div>
        <?php endif; endforeach;?>
        <div class="col-lg-6  col-md-4 d-none d-lg-flex p-3 d-flex justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="427" height="427" fill="none" class="img-fluid rotate-up">
                <path fill="#AC7D2C"
                    d="M211.003 126.648l-10.213 29.278 14.072 4.842 11.953-34.12-10.818-30.8679 10.818-30.8675-10.818-30.7919L226.21 4.91762 212.214 0 200.26 34.1207l10.743 30.7919-10.743 30.8675 10.743 30.8679zM215.997 300.429l10.213-29.279-13.996-4.918-11.954 34.197 10.743 30.792-10.743 30.791 10.743 30.868-10.213 29.279 14.072 4.842 11.953-34.121-10.818-30.868 10.818-30.791-10.818-30.792zM393.182 200.336l-.302-.075-30.792 10.743-30.49-10.668-.302-.075-30.868 10.743-29.278-10.214-4.918 14.072 33.894 11.803.302.151 30.868-10.819 30.489 10.668.303.151 30.792-10.819 29.278 10.214L427 212.214l-33.818-11.878zM34.1964 226.816l30.8675-10.819 30.4892 10.668.3026.151 30.7923-10.819 29.278 10.214 4.918-13.997-33.894-11.878-.302-.075-30.7923 10.743-30.4892-10.668-.3026-.075-30.8675 10.743L4.91762 200.79 0 214.862l33.8937 11.803.3027.151zM287.416 120.898l-14.223 29.43-27.085 13.013-.832.454 6.431 13.391 32.305-15.585.302-.152 14.223-29.43 29.128-14.072.303-.075 14.147-29.4303L369.2 75.429l.832-.454-6.506-13.391-32.23 15.585-.302.1514-14.224 29.3546-29.051 14.072-.303.151zM139.661 306.102l14.223-29.354 27.009-13.089.908-.378-6.507-13.467L142.99 265.4l-.303.151-14.148 29.43-29.1272 13.996-.3026.152-14.1476 29.43-27.0847 13.088-.8322.378 6.4307 13.391 32.305-15.585.3026-.151 14.223-29.43 29.128-13.996.227-.152zM320.326 316.77l-13.996-29.052-.151-.302-29.43-14.224-13.467-27.917-13.467 6.431 15.661 32.305.076.303 29.43 14.223 14.072 29.127.151.303 29.354 14.148 13.467 27.917 13.391-6.507-15.661-32.532-29.43-14.223zM77.3201 96.0823L106.75 110.306l14.072 29.127.151.227 29.355 14.223 13.467 27.917 13.391-6.506-15.585-32.305-.152-.303-29.354-14.147-14.072-29.1279-.151-.3026-29.3549-14.1476-13.5423-27.917-13.3911 6.4308 15.5851 32.3049.1513.3027zM154.338 77.2445l1.891 32.5315 21.713 24.437 1.74 30.943 14.904-.832-2.042-36.163-21.789-24.361-1.816-32.608-21.713-24.3611-1.816-30.9432-14.828.8322 2.042 36.1634 21.714 24.3612zM272.663 349.756l-1.892-32.607-21.713-24.362-1.74-30.867-14.828.832 2.042 36.088 21.713 24.361 1.816 32.608 21.789 24.361 1.74 30.943 14.904-.832-2.118-36.164-21.713-24.361zM317.527 156.154l-.303.075-24.361 21.713-31.019 1.741.908 14.904 35.785-2.043h.378l24.362-21.789 32.229-1.816h.378l24.286-21.713 30.943-1.815-.832-14.829-35.786 2.043h-.378l-24.285 21.713-32.305 1.816zM109.549 270.848l.303-.076 24.361-21.713 30.943-1.74-.832-14.829-35.785 1.967-.378.076-24.286 21.713-32.3047 1.816h-.3026l-24.3612 21.789-30.0353 1.664-.9835.076.9079 14.904 35.7851-2.043.3026-.075 24.4368-21.714 32.2289-1.815zM234.911 165.308l23.907-26.783.227-.226 1.816-32.608 21.561-24.1342.227-.227 1.816-32.5319 20.654-23.1507-11.121-9.9109-23.907 26.7821-.227.227-1.816 32.5319-21.486 24.1342-.227.227-1.892 32.6075-20.654 23.151 11.122 9.911zM192.09 261.693l-23.832 26.782-.227.227-1.891 32.532-21.486 24.135-.227.227-1.816 32.607-20.654 23.151 11.046 9.911 23.907-26.707.227-.302 1.891-32.608 21.487-24.134.226-.227 1.816-32.532 20.654-23.151-11.121-9.911zM384.331 269.939l-32.608-1.891-24.134-21.487-.227-.227-32.608-1.891-23.15-20.654-9.911 11.121 26.782 23.908.227.227 32.608 1.815 24.134 21.562.227.227 32.607 1.816 22.394 19.973.681.681 9.911-11.121-26.706-23.832-.227-.227zM42.7454 157.137l32.6076 1.891 24.3611 21.713 32.6079 1.816 22.394 20.049.681.605 9.911-11.121-27.009-24.059-32.532-1.815-24.1346-21.562-.227-.227-32.6075-1.816-23.1507-20.654-9.9109 11.046 26.7821 23.907.227.227z" />
            </svg>
        </div>
        <?php
        $cards_2 = get_field('blocks_two');
            foreach ($cards_2 as $key => $card) :
            if ($key >= 3): ?>
        <div class="col-lg-6 p-3 col-md-8 <?php if($key%2 == 0) echo ' offset-md-4 offset-lg-0'; ?>">
            <div class="box" style="border: 4px solid <?= $card['block_main_color'] ?>;">
                <div class="content p-lg-3 p-2">
                    <h2 class="p-3 p-md-2" style="color: <?= $card['block_text_color'] ?>"><?= $card['block_address'] ?>
                    </h2>
                    <h1 style="color: <?= $card['block_main_color'] ?>" class="px-3 p-md-2"><?= $card['block_title'] ?>
                    </h1>
                    <div class="text-card p-3 p-md-2" style="color: <?= $card['block_text_color'] ?>">
                        <?= $card['block_text'] ?></div>
                    <div class="content-button" style="background:<?= $card['block_main_color'] ?>">
                        <a target="<?= $card['block_button']['target'] ?>" href="<?= $card['block_button']['url'] ?>"
                            class=" link-light"><?= $card['block_button']['title'] ?></a>
                    </div>
                </div>
            </div>
        </div>
        <?php endif; endforeach;?>
    </div>
</section>
<div class="row dividers bg-light">
    <div class="divider-discover-green"></div>
</div>
<section id="img-block-3" class="bg-light ">
    <div class="row">
        <div class="col-lg-7 col-xl-8 g-0 col-10 bg-info d-flex justify-content-center align-items-center flex-column">
            <div class="divider-3-discover"></div>
            <div class="foodBanner py-lg-5 py-3 text-light text-nowrap"><?= get_field('divider_block_title_3') ?></div>

            <div class="divider-3-discover"></div>
        </div>
        <div class="col-lg-5 col-xl-4  g-0 col-2 overflow-hidden">
            <img src="<?= get_field('divider_block_img_3') ?>" alt="Pool" class="img-cover max-700">
        </div>
    </div>

</section>
<section id="card-blocks-3" class=" bg-light">
    <div class="row px-lg-5 px-3 pt-md-5 bg-light">

        <?php
        $cards_2 = get_field('blocks_two');
            foreach ($cards_2 as $key => $card) : 
                 
                
            if ($key >= 0 && $key < 4): ?>
        <div class="col-lg-6 col-md-8 g-0 <?php if($key%2 == 0) echo ' offset-md-4 offset-lg-0'; ?> p-3 ">
            <div class="box" style="border: 4px solid <?= $card['block_main_color'] ?>;">
                <div class="content p-lg-3 p-2">
                    <h2 class="p-3 p-md-2 p-xl-5" style="color: <?= $card['block_text_color'] ?>">
                        <?= $card['block_address'] ?></h2>
                    <h1 style="color: <?= $card['block_main_color'] ?>" class="px-3 px-md-2 px-xl-5">
                        <?= $card['block_title'] ?></h1>
                    <div class="text-card p-3 p-md-2 p-xl-5" style="color: <?= $card['block_text_color'] ?>">
                        <?= $card['block_text'] ?></div>
                    <div class="content-button" style="background:<?= $card['block_main_color'] ?>">
                        <a class="link-light" style="background:<?= $card['block_main_color'] ?>"
                            target="<?= $card['block_button']['target'] ?>" href="<?= $card['block_button']['url'] ?>">
                            <?= $card['block_button']['title'] ?></a>
                    </div>
                </div>
            </div>
        </div>
        <?php endif; endforeach;?>
        <div class="d-none d-md-flex col-lg-6 g-0 col-md-4 p-3 justify-content-center align-items-center flex-column">
            <div class="text-center mb-5 d-block ">
                <svg xmlns="http://www.w3.org/2000/svg" width="422" height="29" fill="none" class="img-fluid wave-up "
                    viewBox="0 0 422 29">
                    <defs />
                    <path fill="#AC7D2C"
                        d="M53.5684 28.3884L0 6.99117 2.31468.423707 53.5684 20.9029 106.079 0l52.444 20.9029L210.967 0l52.444 20.9029L315.921 0l52.444 20.9029L419.685.423707 422 6.99117 368.365 28.3884 315.921 7.41488l-52.51 20.97352-52.444-20.97352-52.444 20.97352-52.444-20.97352L53.5684 28.3884z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="422" height="29" fill="none" viewBox="0 0 422 29"
                    class="img-fluid wave-up">
                    <defs />
                    <path fill="#AC7D2C"
                        d="M53.5684 28.3884L0 6.99117 2.31468.423707 53.5684 20.9029 106.079 0l52.444 20.9029L210.967 0l52.444 20.9029L315.921 0l52.444 20.9029L419.685.423707 422 6.99117 368.365 28.3884 315.921 7.41488l-52.51 20.97352-52.444-20.97352-52.444 20.97352-52.444-20.97352L53.5684 28.3884z" />
                </svg>
            </div>
            <div class="text-center mb-5 d-block ">
                <svg xmlns="http://www.w3.org/2000/svg" width="422" height="29" viewBox="0 0 422 29" fill="none"
                    class="img-fluid wave-down">
                    <defs />
                    <path fill="#AC7D2C"
                        d="M53.5684 28.3884L0 6.99117 2.31468.423707 53.5684 20.9029 106.079 0l52.444 20.9029L210.967 0l52.444 20.9029L315.921 0l52.444 20.9029L419.685.423707 422 6.99117 368.365 28.3884 315.921 7.41488l-52.51 20.97352-52.444-20.97352-52.444 20.97352-52.444-20.97352L53.5684 28.3884z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="422" height="29" fill="none" viewBox="0 0 422 29"
                    class="img-fluid wave-down">
                    <defs />
                    <path fill="#AC7D2C"
                        d="M53.5684 28.3884L0 6.99117 2.31468.423707 53.5684 20.9029 106.079 0l52.444 20.9029L210.967 0l52.444 20.9029L315.921 0l52.444 20.9029L419.685.423707 422 6.99117 368.365 28.3884 315.921 7.41488l-52.51 20.97352-52.444-20.97352-52.444 20.97352-52.444-20.97352L53.5684 28.3884z" />
                </svg>
            </div>
            <div class="text-center d-block ">
                <svg xmlns="http://www.w3.org/2000/svg" width="422" height="29" viewBox="0 0 422 29" fill="none"
                    class="img-fluid wave-up">
                    <defs />
                    <path fill="#AC7D2C"
                        d="M53.5684 28.3884L0 6.99117 2.31468.423707 53.5684 20.9029 106.079 0l52.444 20.9029L210.967 0l52.444 20.9029L315.921 0l52.444 20.9029L419.685.423707 422 6.99117 368.365 28.3884 315.921 7.41488l-52.51 20.97352-52.444-20.97352-52.444 20.97352-52.444-20.97352L53.5684 28.3884z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="422" height="29" viewBox="0 0 422 29" fill="none"
                    class="img-fluid wave-up">
                    <defs />
                    <path fill="#AC7D2C"
                        d="M53.5684 28.3884L0 6.99117 2.31468.423707 53.5684 20.9029 106.079 0l52.444 20.9029L210.967 0l52.444 20.9029L315.921 0l52.444 20.9029L419.685.423707 422 6.99117 368.365 28.3884 315.921 7.41488l-52.51 20.97352-52.444-20.97352-52.444 20.97352-52.444-20.97352L53.5684 28.3884z" />
                </svg>
            </div>
        </div>
        <?php
        $cards_3 = get_field('blocks_three');
            foreach ($cards_3 as $key => $card) :
            if ($key >= 4): ?>
        <div class="col-lg-6 col-md-8 p-3 <?php if($key%2 == 0) echo ' offset-md-4 offset-lg-0'; ?>">
            <div class="box" style="border: 4px solid <?= $card['block_main_color'] ?>;">
                <div class="content p-3">
                    <h2 class="p-3" style="color: <?= $card['block_text_color'] ?>"><?= $card['block_address'] ?></h2>
                    <h1 style="color: <?= $card['block_main_color'] ?>" class="px-3"><?= $card['block_title'] ?></h1>
                    <div class="text-card p-3" style="color: <?= $card['block_text_color'] ?>">
                        <?= $card['block_text'] ?></div>
                    <div class="content-button" style="background:<?= $card['block_main_color'] ?>">
                        <a target="<?= $card['block_button']['target'] ?>" href="<?= $card['block_button']['url'] ?>"
                            class=" link-light"><?= $card['block_button']['title'] ?></a>
                    </div>
                </div>
            </div>
        </div>
        <?php endif; endforeach;?>
    </div>
</section>
<div class="dividers row bg-light">
    <div class="divider-discover-blue"></div>
</div>
<section class="d-xxl-none d-block bg-light">
    <?php $imagesM = get_field('gallery_images');

if( $imagesM ): ?>
    <div class="row">
        <div id="discover-carousel"
            class="carousel bg-light slide carousel-fade d-flex align-self-center justify-self-center mx-auto d-lg-none"
            data-bs-ride="carousel">
            <div class="carousel-inner d-flex align-self-center justify-self-center mx-auto bg-light">
                <?php  $i=0; foreach($imagesM as $image) : ?>
                <?php if ($i==0) {$set_ = 'active'; } else {$set_ = ''; } ?>
                <div class="carousel-item bg-light <?php echo $set_; ?>">
                    <img src="<?= $image ?>" alt="" class="d-flex align-self-center justify-self-center mx-auto ">
                </div>
                <?php $i++; endforeach; ?>
            </div>

        </div>
    </div>
    <?php endif; ?>
</section>
<section class="bg-light d-none d-lg-block">
    <div class='display-rise text-end text-green p-5 bg-light'>
        <?= get_field('gallery_title')  ?>
    </div>

    <?php 

$images = get_field('gallery_images');

if( $images ): ?>
    <div class="px-md-5  d-flex justify-content-center">
        <div class="gallery-col col-lg-6 col-12">
            <img src="<?= $images[0] ?>" alt="" class="img-100 pe-xl-3 pe-md-2 pb-xl-3 pb-md-2 ">
        </div>
        <div class="gallery-col col-lg-6">
            <img src="<?= $images[1] ?>" alt="" class="img-all-50 pb-xl-3 pb-md-2 ps-xl-3 ps-md-2">
            <div class="d-flex flex-md-row flex-olumn justify-content-between">
                <img src="<?= $images[2] ?>" alt="" class="img-50 ms-lg-3 ms-md-2 pe-xl-3 pe-md-2 pt-xl-3 pt-md-2">
                <img src="<?= $images[3] ?>" alt="" class="img-50 pt-xl-3 pt-md-2 ps-xl-3 ps-md-2">
            </div>

        </div>
    </div>
    <div class="px-md-5  d-flex justify-content-center mt-xl-3">
        <div class="gallery-col col-lg-6">
            <div class="d-flex justify-content-between">
                <img src="<?= $images[4] ?>" alt="" class="img-50 pe-xl-3 pe-md-2 py-xl-3 py-md-2 ">
                <img src="<?= $images[5] ?>" alt="" class="img-50 p-xl-3 p-md-2 ">
            </div>
            <img src="<?= $images[6] ?>" alt="" class="img-all pt-xl-3 pt-md-2 pe-xl-3 pe-md-2">
        </div>
        <div class="gallery-col col-lg-6 ">
            <img src="<?= $images[7] ?>" alt="" class="img-100 pt-xl-3 pt-md-2 ps-xl-3 ps-md-2">
        </div>
    </div>
    <?php endif; ?>



</section>
<section id="faq" class="bg-light">
    <div class="row p-lg-5 px-4 bg-light">
        <div class="col-12">
            <h2 class="py-3 py-md-3 text-dark"><?= get_field('faqs_title') ?></h2>
            <h1 class="pb-3 pb-md-3 text-primary"><?= get_field('faq_type') ?></h1>
            <div class="text-card text-dark"><?= get_field('eat_text') ?></div>
        </div>
        <?php   $q_a = get_field('q_a');

if( $q_a ): ?>
        <?php foreach( $q_a as $value ): ?>
        <p class="bold-rise text-dark"><?= $value['question']; ?></p>
        <p class=" text-dark"><?= $value['answer']; ?></p>
        <?php endforeach; endif; ?>
        <p class='m-0 italic text-uppercase text-center pb-80'>
            <a class="link-primary position-relative"
                href="<?= get_field('full_faq_link')['url']; ?>"><?= get_field('full_faq_link')['title']; ?> </a>
        </p>
    </div>

</section>

<?php
 endwhile;endif;
get_footer();