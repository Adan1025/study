$(function() {
    $(document).on('click', '.menu-span', function() {
        if (!$(this).hasClass('curr')) {
            $(this).addClass('curr');
        } else {
            $(this).removeClass('curr');
        }
        $(this).next('.submenu').toggle();
    });
    // var url = window.location.href;
    // var href = url.replace('.html', '/');
    // console.log(href);
    // return href;
    // console.log(url)


})