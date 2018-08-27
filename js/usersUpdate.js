$(function() {


    var app = {
        init: function() {
            this.fGetUserInfo();
            this.bindEvent();
            // self.bindChange();
        },
        fGetUserInfo: function() {
            $.ajax({
                url: '/manage/users/getOneByLogin?id=0&_r=1534994173190',
                type: 'GET',
                dataType: 'json',
                contentType: "application/json",
                success: function(data) {
                    var obj = data.results;
                    if (data.status == 1) {
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
                    self.bindChange();
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
        bindEvent: function() {
            $('#hdImgLoad').click(function() {
                $('#file').click();
            });
            this.bindChange();
        },
        bindChange: function() {
            var self = this;
            $('#file').change(function() {
                var _val = $(this).val();
                var index = _val.indexOf(".");
                var imgFormat = _val.substring(index);
                if ($('.alertTxt').length == 0) {
                    $('.content').append('<div class="alertTxt alerterro" style="display:none;">图片格式只能是jpg格式</div>');
                }
                if (_val !== '' && imgFormat !== '.jpg') {
                    $('.alertTxt').css('display', 'block');
                    return;
                } else {
                    self.fLoadImg();
                }
            })
        }
    }
    app.init();
})