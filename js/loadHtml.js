$(".submenu li").on('click', function() {
    var href = $(this).attr('data-href');
    $('.container').empty();
    console.log(href)
    $('.container').load(href);
    //阻止跳转
    // $(this).parents('li').addClass('active').siblings('li').removeClass('active');
    // $('#mainContents').empty();
    // $('#mainContents').load("../new/" + href);
    //阻止跳转
    $(this).addClass('is-active');
    $(this).find().parents('.submenu').siblings('li').removeClass('is-active');
    // return false;

    return false;
});