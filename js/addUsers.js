$(function() {
    var MSG = {
        EMAIL: [
            '请输入正确的邮箱格式',
            '电子邮箱不能为空'
        ],
        NICKNAME: [
            '请输入用户昵称，长度2-20个字符',
            '用户昵称不能为空'
        ],
        PSD: [
            '请输入密码，数字和字母组合，长度6-16个字符',
            '密码不能为空'
        ],
        Role: [
            ''
        ]
    }
    var $email = $('#Email'),
        $nickName = $('#nickName'),
        $pwd = $('#Pwd'),
        $role = $('#Role'),
        $userName = $('#userName'),
        $tel = $('#Tel');
    $email.on('keyup', function() {
        $(this).parent().next('.notice').text('');
        $(this).removeClass('is-erro');
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        var $email_val = $email.val();
        if ($email.val() !== '') {
            if (!reg.test($email_val)) {
                $email.parent().next('.notice').text('请输入正确的邮箱格式');
                $email.removeClass('is-success').addClass('is-erro');
            } else {
                $email.parent().next('.notice').text('');
                $email.removeClass('is-erro').addClass('is-success');
            }
        }
    })
    $email.blur(function() {
        if ($email.val() == '') {
            $email.parent().next('.notice').text('电子邮箱不能为空');
            $email.addClass('is-erro');
        }

    })
    $nickName.on('keyup', function() {
        $(this).parent().next('.notice').text('');
        $(this).removeClass('is-erro');
        var reg = /^[\u4e00-\u9fa5\w-]{2,20}$/;
        var $nickName_val = $nickName.val();
        if ($nickName.val() !== '') {
            if (!reg.test($nickName_val)) {
                $nickName.parent().next('.notice').text('请输入用户昵称，长度2-20个字符');
                $nickName.removeClass('is-success').addClass('is-erro');
            } else {
                $nickName.parent().next('.notice').text('');
                $nickName.removeClass('is-erro').addClass('is-success');
            }
        }
    })
    $nickName.blur(function() {
        if ($nickName.val() == '') {
            $nickName.parent().next('.notice').text('用户昵称不能为空');
            $nickName.addClass('is-erro');
        }

    })
    $pwd.on('keyup', function() {
        $(this).parent().next('.notice').text('');
        $(this).removeClass('is-erro');
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
        var $pwd_val = $pwd.val();
        if ($pwd.val() !== '') {
            if (!reg.test($pwd_val)) {
                $pwd.parent().next('.notice').text('请输入密码，数字和字母组合，长度6-16个字符');
                $pwd.removeClass('is-success').addClass('is-erro');
            } else {
                $pwd.parent().next('.notice').text('');
                $pwd.removeClass('is-erro').addClass('is-success');
            }
        }
    })
    $pwd.blur(function() {
        if ($pwd.val() == '') {
            $pwd.parent().next('.notice').text('密码不能为空');
            $pwd.addClass('is-erro');
        }

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
        $userName.addClass('is-success');
    })
    $userName.blur(function() {
        if ($userName.val() == '') {
            $userName.addClass('is-success');
        }
    })
    $tel.on('keyup', function() {
        $tel.addClass('is-success');
    })
    $tel.blur(function() {
        if ($tel.val() == '') {
            $tel.addClass('is-success');
        }
    })
    $('#File').change(function() {
        var _this = $(this).val();

        var index = _this.indexOf(".");
        var imgFormat = _this.substring(index);
        $('.content').append('<div class="alertTxt alerterro" style="display:none;">图片格式只能是jpg格式</div>');
        if (_this !== '' && imgFormat !== '.jpg') {
            console.log('///' + _this);
            $('.alertTxt').css('display', 'block');
        }

    })

    $('.hdImgLoad').click(function() {
        $('#File').change(function() {
            var _this = $(this).val();

            var index = _this.indexOf(".");
            var imgFormat = _this.substring(index);
            $('.content').append('<div class="alertTxt alerterro" style="display:none;">图片格式只能是jpg格式</div>');
            if (_this !== '' && imgFormat !== '.jpg') {
                console.log('///' + _this);
                $('.alertTxt').css('display', 'block');
            }

        })
    })



    $('#BTN').click(function() {
        if ($email.val() == '') {
            $email.parent().next('.notice').text('电子邮箱不能为空');
            $email.addClass('is-erro');
        }
        if ($nickName.val() == '') {
            $nickName.parent().next('.notice').text('用户昵称不能为空');
            $nickName.addClass('is-erro');
        }
        if ($pwd.val() == '') {
            $pwd.parent().next('.notice').text('密码不能为空');
            $pwd.addClass('is-erro');
        }
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