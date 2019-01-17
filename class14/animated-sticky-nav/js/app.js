$(document).ready(function () {

    $(window).scroll(function(){
        let scrolltop = $(window).scrollTop();
        console.log('scrollTop');
    //how many pixels from normal top position you have scrolled down

    if (scrolltop > 75) {
        $('header').addClass('small-header')
    }
    else {
        $('header').removeClass('small-header')
    }
        
    })
})
