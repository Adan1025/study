$(function() {
    $('.menu-span').click(function() {
        if (!$(this).hasClass('curr')) {
            $(this).addClass('curr');
        } else {
            $(this).removeClass('curr');
        }
        $(this).next('.submenu').toggle();
    })
})