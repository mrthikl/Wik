// header

$('.btn-menu.--open').on('click', function(e) {
    $('.nav').toggleClass('active')
})

$('.btn-menu.--close').on('click', function(e) {
    $('.nav').removeClass('active')
})

// sidebar-left

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