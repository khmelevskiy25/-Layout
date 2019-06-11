$(".right").click(function() {
    $("html, body").animate({
       scrollLeft:$("html, body").offset().left+350
    }, 400)
  
  });
$(".top").click(function() {
    if (($(this).position().top -850) < ($(window).scrollTop())) {
        $("html, body").animate({scrollTop: ($(window).scrollTop() -300)}, 500);

    } else if (($(this).position().top +600) > ($(window).scrollTop() +1080)) {
        $("html, body").animate({scrollTop: ($(window).scrollTop() +200)}, 500);
    }
});
$(".bottom").click(function() {
    if (($(this).position().top -850) < ($(window).scrollTop())) {
        $("html, body").animate({scrollTop: ($(window).scrollTop() +200)}, 500);
    }
});