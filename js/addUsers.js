$(function() {
    var comFn = {
        tips: function(elment, msg, reg) {
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
        },
        brTips: function(elment, msg) {
            if (elment.val() == '') {
                elment.parent().next('.notice').text(msg);
                elment.addClass('is-erro');
            }
        },
        seCheck: function(elment) {
            elment.addClass('is-success');
        },
        seBrCheck: function(elment) {
            if (elment.val() == '') {
                elment.addClass('is-success');
            }
        },
        btnCheck: function(elment, msg) {
            if (elment.val() == '') {
                elment.parent().next('.notice').text(msg);
                elment.addClass('is-erro');
            }
        }
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
        // var $email_val = $email.val();
        comFn.tips($(this), '请输入正确的邮箱格式', reg);
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
        comFn.brTips($(this), '电子邮箱不能为空');
        // if ($email.val() == '') {
        //     $email.parent().next('.notice').text('电子邮箱不能为空');
        //     $email.addClass('is-erro');
        // }

    });
    $nickName.on('keyup', function() {
        $(this).parent().next('.notice').text('');
        $(this).removeClass('is-erro');
        var reg = /^[\u4e00-\u9fa5\w-]{2,20}$/;
        comFn.tips($(this), '请输入用户昵称，长度2-20个字符', reg);

    })
    $nickName.blur(function() {
        comFn.brTips($(this), '用户昵称不能为空');


    })
    $pwd.on('keyup', function() {
        $(this).parent().next('.notice').text('');
        $(this).removeClass('is-erro');
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
        comFn.tips($(this), '请输入密码，数字和字母组合，长度6-16个字符', reg);

    })
    $pwd.blur(function() {

        comFn.brTips($(this), '密码不能为空');

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
        comFn.seCheck($(this));
    })
    $userName.blur(function() {
        comFn.seBrCheck($(this));
    })
    $tel.on('keyup', function() {
        comFn.seCheck($(this));
    })
    $tel.blur(function() {
        comFn.seBrCheck($(this));
    })
    $('#file').change(function() {
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

    $('#hdImgLoad').click(function() {
        $('#file').click();
    })

    $('#BTN').click(function() {
        comFn.btnCheck($email, '电子邮箱不能为空');
        comFn.btnCheck($nickName, '用户昵称不能为空');
        comFn.btnCheck($pwd, '密码不能为空');
        var href = $(this).attr('data-href')
        if ($role.val() == '0') {
            $role.parent().next('.notice').text('角色不能为空');
            $role.removeClass('is-success').addClass('is-erro');
            return;
        }
        if ($userName.val() == '') {
            $userName.addClass('is-success');
        }
        if ($tel.val() == '') {
            $tel.addClass('is-success');
        }
        var data = {
            email: $email.val(),
            nickName: $nickName.val(),
            password: $pwd.val(),
            roleId: $role.val(),
            userName: $userName.val(),
            phone: $tel.val(),
        }
        $.ajax({
            url: '/manage/users//saveOrUpdate?_r=1534',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function(data) {
                // if (data.status == 0) {
                //     $('.alertTxt').attr('class', 'alertTxt alerterro').html(data.errmsg).show();
                // }

                if (data.status == 1) {
                    console.log(href)
                    $('.container').empty();
                    $('.container').load(href);
                }


            },

        })
    })
    var getQueryString = function(name) { //name为传入参数
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    var fGetUserId = function() {
        // var id = fGetCookie(id);
        var id = getQueryString("id");
        $.ajax({
            url: '/manage/users/getOneById?id=' + id,
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            success: function(data) {
                var obj = data.results;
                if (data.status == 1) {

                    $('#Email').val(obj.email);
                    $('#reImgSrc').val(obj.headimg);
                    //  $('#Email').val(obj.metto);
                    $('#nickName').val(obj.nickName);
                    $('#Pwd').val(obj.password);
                    $('#Tel').val(obj.phone);
                    $('#Role').val(obj.roleId);
                    //  $('#Email').val(obj.roleName);
                    $('#userName').val(obj.userName);
                }
            }
        });
    }
    fGetUserId();
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