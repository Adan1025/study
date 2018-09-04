$(function() {


    var app = {
        $email: $('#Email'),
        $nickName: $('#nickName'),
        $pwd: $('#Pwd'),
        $role: $('#Role'),
        $userName: $('#userName'),
        $tel: $('#tel'),
        $file: $('#file'),
        id: null,
        roleId: null,
        metto: null,
        isConfirm: false,
        init: function() {
            this.fGetUserInfo();
            this.fBindEvent();
            this.fBindChange();
        },

        fGetUserInfo: function() {
            var self = this;
            $.ajax({
                url: '/manage/users/getOneByLogin?id=0&_r=1534994173190',
                type: 'GET',
                dataType: 'json',
                contentType: "application/json",
                success: function(data) {
                    var obj = data.results;
                    if (data.status == 1) {
                        self.id = obj.id;
                        self.roleId = obj.roleId;
                        self.metto = obj.metto;
                        $('#Email').val(obj.email);
                        $('#nickName').val(obj.nickName);
                        $('#Pwd').val(obj.password);
                        $('#Role').text(obj.roleName);
                        $('#userName').val(obj.userName);
                        $('#tel').val(obj.phone);
                        if (obj.headimg) {
                            $('#reImgSrc').attr('src', obj.headimg);
                            $('.icon-add').hide();
                            $('#reImgSrc').show();
                        }
                        self.isConfirm = true;

                    }
                }

            })
        },
        fLoadImg: function() {
            var self = this;
            $.ajaxFileUpload({
                type: "POST",
                url: "/manage/picture/upload",
                secureuri: false, //是否启用安全提交，默认为false
                fileElementId: 'file', //文件选择框的id属性
                dataType: 'json', //服务器返回的格式
                async: false,
                success: function(data) {
                    self.fBindChange();
                    if (data.status == 1) {
                        var obj = data.results;
                        $('#reImgSrc').attr('src', obj);
                        $('.icon-add').hide();
                        $('#reImgSrc').show();
                    } else {
                        myAlert(data.errmsg);
                    }
                },
            });

        },
        fUpdateUserInfo: function() {
            var self = this;
            var data = {
                email: self.$email.val(),
                headimg: self.$file.val(),
                nickName: self.$nickName.val(),
                password: self.$pwd.val(),
                role: self.$role.text(),
                userName: self.$userName.val(),
                phone: self.$tel.val(),
                id: self.id,
                metto: self.metto,
                roleId: self.roleId,

            };
            $.ajax({
                url: '/manage/users/updateLoginUsers?_r=1535591953205',
                type: 'POST',
                dataType: 'json',
                contentType: "application/json",
                data: JSON.stringify(data),
                success: function(data) {
                    if (data.status == 1) {
                        window.location.href = '../index.html'
                    }
                }

            })
        },
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
                this.isConfirm = false;
            }

        },
        fBindEvent: function() {
            var self = this;
            self.$email.on('keyup', function() {
                $(this).parent().next('.notice').text('');
                $(this).removeClass('is-erro');
                var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
                // var $email_val = $email.val();
                self.tips($(this), '请输入正确的邮箱格式', reg);
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
            self.$email.blur(function() {
                self.brTips($(this), '电子邮箱不能为空');
                // if ($email.val() == '') {
                //     $email.parent().next('.notice').text('电子邮箱不能为空');
                //     $email.addClass('is-erro');
                // }

            });
            self.$nickName.on('keyup', function() {
                $(this).parent().next('.notice').text('');
                $(this).removeClass('is-erro');
                var reg = /^[\u4e00-\u9fa5\w-]{2,20}$/;
                self.tips($(this), '请输入用户昵称，长度2-20个字符', reg);

            })
            self.$nickName.blur(function() {
                self.brTips($(this), '用户昵称不能为空');


            })
            self.$pwd.on('keyup', function() {
                $(this).parent().next('.notice').text('');
                $(this).removeClass('is-erro');
                var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
                self.tips($(this), '请输入密码，数字和字母组合，长度6-16个字符', reg);

            })
            self.$pwd.blur(function() {

                self.brTips($(this), '密码不能为空');

            })
            self.$role.on('change', function() {
                var $role_val = $role.val();
                if ($role_val == '0') {
                    $role.parent().next('.notice').text('角色不能为空');
                    $role.removeClass('is-success').addClass('is-erro');
                } else {
                    $(this).parent().next('.notice').text('');
                    $(this).removeClass('is-erro').addClass('is-success');
                }
            })
            self.$userName.on('keyup', function() {
                self.seCheck($(this));
            });
            self.$userName.blur(function() {
                self.seBrCheck($(this));
            });
            self.$tel.on('keyup', function() {
                self.seCheck($(this));
            });
            self.$tel.blur(function() {
                self.seBrCheck($(this));
            });
            // this.fGetsaveOrUpdate();
            $('#hdImgLoad').click(function() {
                $('#file').click();
            });
            $('#BTN').click(function() {
                self.btnCheck(self.$email, '电子邮箱不能为空');
                self.btnCheck(self.$nickName, '用户昵称不能为空');
                self.btnCheck(self.$pwd, '密码不能为空');
                // var href = $(this).attr('data-href')
                if (self.$role.val() == '0') {
                    self.$role.parent().next('.notice').text('角色不能为空');
                    self.$role.removeClass('is-success').addClass('is-erro');
                    return;
                }
                if (self.$userName.val() == '') {
                    self.$userName.addClass('is-success');
                }
                if (self.$tel.val() == '') {
                    self.$tel.addClass('is-success');
                }
                if (self.isConfirm == true) {
                    console.log('111111');
                    self.fUpdateUserInfo();
                }
                // self.fGetsaveOrUpdate();
                // window.location.href = "../index.html"

            });
            $('#btnCancle').click(function() {
                $('.form_input').val('');
                $('.form_input').removeClass('is-erro is-success');
                $('.form_input').parent().next('.notice').text('');
            });

        },
        //改变上传file值
        fBindChange: function() {
            var self = this;
            $('#file').change(function() {
                var val = $(this).val();

                var index = val.indexOf(".");
                var imgFormat = val.substring(index);
                if (val !== '' && imgFormat !== '.jpg') {
                    errAlert('图片格式只能是jpg格式');
                } else {
                    self.fLoadImg();
                }
                // if ($('.alertTxt').length == 0) {
                //     $('.content').append('<div class="alertTxt alerterro" style="display:none;">图片格式只能是jpg格式</div>');
                // }
                // if (val !== '' && imgFormat !== '.jpg') {
                //     if ($('.alertTxt').length > 0) {
                //         $('.alertTxt').css('display', 'block');
                //         return;
                //     }
                // } else {
                //     self.fLoadImg();
                // }
            });


        },
    }
    app.init();
})