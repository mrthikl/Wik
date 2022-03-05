// header

$('.btn-menu.--open').on('click', function(e) {
    $('.nav').toggleClass('active')
})

$('.btn-menu.--close').on('click', function(e) {
    $('.nav').removeClass('active')
})

// sidebar-left
$('.sidebar-menu .has-drop a').on('click', function(e) {
    e.preventDefault();
})
$('.sidebar-menu .has-drop').on('click', function(e) {
    $(this).toggleClass('active')
    if ($(this).hasClass('active')) {
        $(this).css('max-height', $(this).prop('scrollHeight'))
    } else {
        $(this).css('max-height', '')
    }
})