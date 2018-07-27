$(function() {
    $('#loginContent').after('<div class="alertTxt" style="display:none;"></div>');
    var txt = ['账号或密码为空！', '账号或密码不正确！', '操作成功！'];
    $('#LOGIN').click(function() {
        var $user = $('#User').val();
        var $pwd = $('#PWD').val();
        var userMyReg = /^[a-zA-Z0-9_-]+@([a-zA-Z]+\.)+com$/;
        var pwdMyReg = /^[A-Za-z0-9]{6,12}$/;
        if ($user == '' && $pwd == '') {
            // if ($('.alerterro').length == 0) {
            //     $('#loginContent').after('<div class ="alerterro" style="display:none;">' + '账号或密码为空！' + '</div>');
            // }
            // $('.alerterro').show();
            $('.alertTxt').attr('class', 'alertTxt alerterro').html(txt[0]).show();
            return;
        }

        if (!userMyReg.test($user) || !pwdMyReg.test($pwd)) {
            // if ($('.alertwarm').length == 0) {
            //     $('#loginContent').after('<div class ="alertwarm" style="display:none;">' + '账号或密码不正确！' + '</div>');
            // }
            // $('.alertwarm').show();
            $('.alertTxt').attr('class', 'alertTxt alertwarm').html(txt[1]).show()
            return;
        }

        var data = {
            email: $user,
            password: $pwd
        };
        $.ajax({
            url: '/manage/users/login?_r=1532486837468',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function(data) {
                if (data.status == 0) {
                    $('.alertTxt').attr('class', 'alertTxt alerterro').html(data.errmsg).show();
                }
                if (data.status == 1) {
                    // keyLogin();
                    window.location.href = "./index.html"

                }

            },

        })
    });

    function hide() {
        $('.alertTxt').hide();
    }
    setInterval(hide, 5000);

    $('body').keydown(function(event) {
        if (event.keyCode == 13) {
            $('#LOGIN').click();
        }
    })


})