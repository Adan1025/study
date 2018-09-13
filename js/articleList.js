$(function(){
    var btnS = [{
        'name': '确定',
        'callback': function(event) {
            var workingAssetFloor = $('#setMoneyForm input[name="workingAssetFloor"]').val();
            if (!workingAssetFloor) {
                alert('请输入大于0的预留金额');
                return false;
            } else if (isNaN(workingAssetFloor)) {
                alert('请输入正确的预留金额');
                return false;
            } else if (Number(workingAssetFloor) > position_cash) {
                alert('预留金额超出现金宝余额');
                return false;
            }
            setMoneyOk(url, workingAssetFloor);
            event.close();
        }
    }, {
        'name': '取消',
        'callback': function(event) {
            event.close();
        }
    }]
    var app = {
        box: new dialogBox(null, null, btnS),
        modify: new dialogBox(),
        init: function() {
            this.fBindEvent();
        },
        fGetArtType: function() {
            var self = this;
            $.ajax({
                url: '/manage/articletype/findAll?_r=1536195572892',
                type: 'GET',
                dataType: 'json',
                contentType: "application/json",
                success: function(data) {
                    // var element = $('#artTypeCont'),
                    var  moduleCell = $('#moduleCell').html(); 
                    if(data.status == 1) {
                    // 解析模板，返回解析后的内容
                    var render = _.template(moduleCell);
                    var html = render({
                        arr: data.results
                    });
                    self.box.setContent(html);
                    self.box.setTitle('查看类型');
                    self.box.show();
                    // 将解析后的内容填充到渲染元素
                    // element.html(html);
                    } else {
                        myAlert(data.errmsg);
                    }
                }
            })
        },
        fUpdateTypeName: function() {
            var data = {

            }
            $.ajax({
                url: '/manage/articletype/saveOrUpdate?_r=1536718503820',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {

                }
            })
        },
        fBindEvent: function() {
            var self = this;
            $('#artTypeBtn').click(function(){
                self.fGetArtType();
            });
            $('#close').click(function(){
                $('.modal-dialog').hide();
            });
            $('#addType').click(function(){
                
            })
            $(document).on('click','.edit',function(id){
                console.log('////');
                var id = $(this).attr('data-id');
                console.log(id);
                return id;
            })
        }
    }
    app.init();
})