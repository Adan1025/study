$(function() {
    $('.wrapper-left').load('../menu.html', function() {
        var href = window.location.href;
        var urlId = href.match(/(\w+)\.html/)[1];
        $('.menu-ul').find('.submenu li').each(function() {
            if ($(this).attr('id') == urlId) {
                $(this).parent('.submenu').show();
                $(this).parent('.submenu').siblings().addClass('curr');
                $(this).parents('.menu-ul').find('.is-active').removeClass('is-active');
                $(this).addClass('is-active');
                $(this).addClass('is-active').parents('.menu-list').siblings().find('.submenu li').removeClass('is-active');
            }
        })
    });
});