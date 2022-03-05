// header

$('.btn-menu.--open').on('click', function(e) {
    $('.nav').toggleClass('active')
})

$('.btn-menu.--close').on('click', function(e) {
    $('.nav').removeClass('active')
})