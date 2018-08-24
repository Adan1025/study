$(function() {
    // lia1

    $(document).on('click', '.menu-span', function() {
        if (!$(this).hasClass('curr')) {
            $(this).addClass('curr');
        } else {
            $(this).removeClass('curr');
        }
        $(this).next('.submenu').toggle();
    });
    // var href = window.location.href;
    // var urlId = href.match(/(\w+)\.html/)[1];
    // console.log('1' + urlId)
    //     // var id = $(this).attr('id');
    //     // console.log('2' + id);
    // $('.menu-ul').find('.submenu li').each(function() {
    //     if ($(this).attr('id') == urlId) {
    //         console.log('ddd');
    //         $(this).parents('.menu-ul').find('.curr').removeClass('curr');
    //         $(this).parent('submenu').siblings().addClass('curr');
    //         $(this).parents('.menu-ul').find('.is-active').removeClass('is-active');
    //         $(this).addClass('is-active');
    //         $(this).addClass('is-active').parents('.menu-list').siblings().find('.submenu li').removeClass('is-active');
    //     }
    // })

    $(document).on('click', '#logOut', function() {
        window.location.href = '../login.html';
        // myAlert('您确定要退出本系统吗？', function() {
        //     if ($(this).html() == "确定") {
        //         window.location.href = './login.html';
        //     }
        // })
    })
})