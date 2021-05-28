<?php
//Custom pagination
function mdb_pagination()
{
 if (is_singular()) {
  return;
 }

 global $wp_query;
/** Stop execution if there's only 1 page */
 if ($wp_query->max_num_pages <= 1) {
  return;
 }

 $paged = get_query_var('paged') ? absint(get_query_var('paged')) : 1;
 $max   = intval($wp_query->max_num_pages);
/** Add current page to the array */
 if ($paged >= 1) {
  $links[] = $paged;
 }

/** Add the pages around the current page to the array */
 if ($paged >= 3) {
  $links[] = $paged - 1;
  $links[] = $paged - 2;
 }
 if (($paged + 2) <= $max) {
  $links[] = $paged + 2;
  $links[] = $paged + 1;
 }
 echo '<nav aria-label="Page navigation" id="navigation" class="d-flex justify-content-center align-items-center">' . "\n";
 echo '<ul class="pagination">' . "\n";
 /** Previous Post Link */
 if (get_previous_posts_link()) {
  printf(' <li class="page-item">%s</li>
    ' . "\n", get_previous_posts_link('
    <div class="page-item">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.8809 12.48C26.8809 18.8417 21.7239 24 15.3609 24C21.7225 24 26.8809 29.157 26.8809 35.52" stroke="#5C7566" stroke-width="3" stroke-miterlimit="10"/>
    <rect x="46.5" y="46.5" width="45" height="45" transform="rotate(180 46.5 46.5)" stroke="#5C7566" stroke-width="3"/>
    </svg>
    
    
    
    <span class="visually-hidden">
    Previous
    

    </span></div>
    '));
 }
 /** Link to first page, plus ellipses if necessary */
 if (!in_array(1, $links)) {
  $class = 1 == $paged ? ' class="page-item active" aria-current="page"' : ' class="page-item"';
  printf('<li%s><a href="%s" class="page-link">%s</a></li>' . "\n", $class, esc_url(get_pagenum_link(1)), '1');
  if (!in_array(2, $links)) {
   echo '<li>…</li>';
  }
 }
 /** Link to current page, plus 2 pages in either direction if necessary */
 sort($links);
 foreach ((array) $links as $link) {
  $class = $paged == $link ? ' class="page-item active" aria-current="page"' : ' class="page-item"';
  printf('<li%s><a href="%s" class="page-link">%s</a></li>' . "\n", $class, esc_url(get_pagenum_link($link)), $link);
 }
 /** Link to last page, plus ellipses if necessary */
 if (!in_array($max, $links)) {
  if (!in_array($max - 1, $links)) {
   echo '<li>…</li>' . "\n";
  }

  $class = $paged == $max ? ' class="class="page-item active" aria-current="page"' : ' class="page-item"';
  printf('<li%s><a href="%s"  class="page-link">%s</a></li>' . "\n", $class, esc_url(get_pagenum_link($max)), $max);
 }
 /** Next Post Link */
 if (get_next_posts_link()) {
  printf('<li class="page-item">%s</li>
    ' . "\n", get_next_posts_link('
    <div class="page-item">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.1191 35.52C21.1191 29.1583 26.2761 24 32.6391 24C26.2774 24 21.1191 18.843 21.1191 12.48" stroke="#5C7566" stroke-width="3" stroke-miterlimit="10"/>
    <rect x="1.5" y="1.5" width="45" height="45" stroke="#5C7566" stroke-width="3"/>
    </svg>
    
    
    <span class="visually-hidden">
   
Next

    </span>
    </div>
    '));
 }

 echo '</ul>' . "\n";
 echo '</nav>' . "\n";
 echo '<!--/.Pagination-->' . "\n";
}
