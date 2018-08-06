$(".submenu li").on('click', function() {
    var href = $(this).attr('data-href');

    $('.container').empty();
    $('.container').load(href + '?t=' + (Date.now()));
    // console.log(href);
    // $('.container').load(href, function() {
    //     // var script = $('.container').after('<script src="./js/usersList.js"></script>');
    //     var htmlName = href.match(/.*\/([^.]+)\.html$/)[1];

    //     if ($('.script_load_xxx').length > 0) {
    //         $('.script_load_xxx').remove();
    //     }
    //     $('.container').after('<script class="script_load_xxx" src="./js/' + htmlName + '.js"></script>');


    //     // if ($('#script_' + htmlName).length > 0) {
    //     //     $('#script_' + htmlName).remove();
    //     // }
    //     // $('.container').after('<script id="script_' + htmlName + '" src="./js/' + htmlName + '.js"></script>');
    // })


    $('.menu-UL').find('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    // $(this).addClass('is-active').parents('.menu-list').siblings().find('.submenu li').removeClass('is-active');

    return false;
});