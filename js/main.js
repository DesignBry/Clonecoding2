$(function(){
    $(document).ready(function () {
        $('section.section1-fst .bg .bottom span').click(function () {
            let sec1offset = $('section.section1-fst').offset().top + 1000;
    
            $('html, body').animate({
                scrollTop: sec1offset
            }, 800);
        });
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > 0) {
            $('header').css({
                'border-bottom': '1px solid rgba(0, 27, 55, 0.1)',
            });
        } else {
            $('header').css({
                'border-bottom': 'none',
            });
        }
    })
    
    $('header .inner .navigation .language li').click(function(e){
        e.preventDefault()
        $('header .inner .navigation .language li a').removeClass('active')
        $(this).find('a').addClass('active')
    })
    // $('header .inner .navgation .language li').eq(0).trigger('click')
})