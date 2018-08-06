$(function() {
    var $email = $('#Email'),
        $nickName = $('#nickName'),
        $pwd = $('#Pwd'),
        $role = $('#Role'),
        $userName = $('#userName'),
        $tel = $('#Tel');

    function tips(elment, msg, reg) {
        var $this_val = elment.val();
        if ($this_val !== '') {
            if (!reg.test($this_val)) {
                elment.parent().next('.notice').text(msg);
                elment.removeClass('is-success').addClass('is-erro');
            } else {
                elment.parent().next('.notice').text('');
                elment.removeClass('is-erro').addClass('is-success');
            }
        }
    }

    function brTips(elment, msg) {
        if (elment.val() == '') {
            elment.parent().next('.notice').text(msg);
            elment.addClass('is-erro');
        }
    }

    function seCheck(elment) {
        elment.addClass('is-success');
    }

    function seBrCheck(elment) {
        if (elment.val() == '') {
            elment.addClass('is-success');
        }
    }

    function btnCheck(elment, msg) {
        if (elment.val() == '') {
            elment.parent().next('.notice').text(msg);
            elment.addClass('is-erro');
        }
    }
    $email.on('keyup', function() {
        $(this).parent().next('.notice').text('');
        $(this).removeClass('is-erro');
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        // var $email_val = $email.val();
        tips($(this), '请输入正确的邮箱格式', reg);
        // if ($email.val() !== '') {
        //     if (!reg.test($email_val)) {
        //         $email.parent().next('.notice').text('请输入正确的邮箱格式');
        //         $email.removeClass('is-success').addClass('is-erro');
        //     } else {
        //         $email.parent().next('.notice').text('');
        //         $email.removeClass('is-erro').addClass('is-success');
        //     }
        // }
    })
    $email.blur(function() {
        brTips($(this), '电子邮箱不能为空');
        // if ($email.val() == '') {
        //     $email.parent().next('.notice').text('电子邮箱不能为空');
        //     $email.addClass('is-erro');
        // }

    });
    $nickName.on('keyup', function() {
        $(this).parent().next('.notice').text('');
        $(this).removeClass('is-erro');
        var reg = /^[\u4e00-\u9fa5\w-]{2,20}$/;
        tips($(this), '请输入用户昵称，长度2-20个字符', reg);

    })
    $nickName.blur(function() {
        brTips($(this), '用户昵称不能为空');


    })
    $pwd.on('keyup', function() {
        $(this).parent().next('.notice').text('');
        $(this).removeClass('is-erro');
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
        tips($(this), '请输入密码，数字和字母组合，长度6-16个字符', reg);

    })
    $pwd.blur(function() {

        brTips($(this), '密码不能为空');

    })
    $role.on('change', function() {
        var $role_val = $role.val();
        if ($role_val == '0') {
            $role.parent().next('.notice').text('角色不能为空');
            $role.removeClass('is-success').addClass('is-erro');
        } else {
            $(this).parent().next('.notice').text('');
            $(this).removeClass('is-erro').addClass('is-success');
        }
    })
    $userName.on('keyup', function() {
        seCheck($(this));
    })
    $userName.blur(function() {
        seBrCheck($(this));
    })
    $tel.on('keyup', function() {
        seCheck($(this));
    })
    $tel.blur(function() {
        seBrCheck($(this));
    })
    $('#File').change(function() {
        var _this = $(this).val();

        var index = _this.indexOf(".");
        var imgFormat = _this.substring(index);
        if ($('.alertTxt').length == 0) {
            $('.content').append('<div class="alertTxt alerterro" style="display:none;">图片格式只能是jpg格式</div>');
        }
        if (_this !== '' && imgFormat !== '.jpg') {
            if ($('.alertTxt').length > 0) {
                $('.alertTxt').css('display', 'block');
                return;
            }
        }
    })

    $('.hdImgLoad').click(function() {
        $('#File').click();
    })

    $('#BTN').click(function() {
        btnCheck($email, '电子邮箱不能为空');
        btnCheck($nickName, '用户昵称不能为空');
        btnCheck($pwd, '密码不能为空');
        if ($role.val() == '0') {
            $role.parent().next('.notice').text('角色不能为空');
            $role.removeClass('is-success').addClass('is-erro');
        }
        if ($userName.val() == '') {
            $userName.addClass('is-success');
        }
        if ($tel.val() == '') {
            $tel.addClass('is-success');
        }
    })
    $('#btnCancle').click(function() {
        $('.form_input').val('');
        $('.form_input').removeClass('is-erro is-success');
        $('.form_input').parent().next('.notice').text('');
    })

    //定时器
    function hide() {
        $('.alertTxt').hide();
    }
    setInterval(hide, 5000);
})