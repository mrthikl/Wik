// header
$('.btn-menu.--open').on('click', function(e) {
    $('.nav').toggleClass('active')
})

$('.btn-menu.--close').on('click', function(e) {
    $('.nav').removeClass('active')
})

// sidebar-left

// open sidebar
$(".btn-menu.--open-sidebar").on('click', function(e) {
    $(".sidebar-left").toggleClass('active')
})

// dropdown 
$('.sidebar-menu .has-drop > a').on('click', function(e) {
    e.preventDefault()
    const parentEle = $(this).parent()
    parentEle.toggleClass('active')
    if (parentEle.hasClass('active')) {
        parentEle.css('max-height', parentEle.prop('scrollHeight'))
    } else {
        parentEle.css('max-height', '')
    }
})

// scroll 
if ($(window).width() < 1279) {
    $(window).on('scroll', function() {
        const offsetY = $(window).scrollTop()
        if (offsetY > 50) {
            $('.header').addClass('activeScroll')
        } else {
            $('.header').removeClass('activeScroll')
        }
    })
}

// remove
function stopP(i) {
    i.on('click', function(e) {
        e.stopPropagation()
    })
}
stopP($('.sidebar-left'))
stopP($('.btn-menu.--open-sidebar'))
$(window).on('click', () => {
    $('.sidebar-left').removeClass('active');
})