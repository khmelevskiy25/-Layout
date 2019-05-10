<?php
//Хуки
//При помощи этого хука можно вывести надпись в футере только на одной странице, или на всех
add_action('wp_footer', 'art_wp_footer' );
function art_wp_footer() {
    if (is_single( )) {
        echo 'this is hook';
    }
}
//функция отключения хука
remove_action('Какой экшн', 'какую функцию', 'указать приоретен например 30');
//фильтры
add_filter('the_content', 'art_before_text' );
function art_before_text($content) {
    return 'текст выводится перед основным контентом' . $content;
}
//При помощи этой функции можно к body добавить класс
add_filter('body_class', 'art_before_text' );
function art_before_text($class) {
    $class[] = 'footer_class';
    return $class;
}