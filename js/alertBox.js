function myAlert(msg, click, useCancel) {
    var overflow = "";
    var $hidder = null;
    var clickHandler = click || $.noop;
    var myClickHandler = function() {
        $hidder.remove();
        $("body").css("overflow", overflow);
        clickHandler($(this).html() == "确定");
    };
    var init = function() {
        $hidder = $("<div class='hidder'></div>");
        var $myalert = $("<div class='alert-box-body'>" +
                "<div class='alert-box-title'>提示</div></div>")
            .appendTo($hidder);
        $("<div class='alert-box-msg'>" + msg + "</div>").appendTo($myalert);
        var $myalert_btn_div = $("<div class='alert-btn-box'></div>").appendTo($myalert);
        var $okBtn = $("<div class='d-alert-btn-box'>取消</div>")
            .appendTo($myalert_btn_div).click(myClickHandler);
        var $noBtn = $("<div class='d-alert-btn-box'>确定</div>")
            .appendTo($myalert_btn_div).click(myClickHandler);
        if (useCancel) {
            $noBtn = $("<div class='d-alert-btn-box'>确定</div>")
                .appendTo($myalert_btn_div).click(myClickHandler);
            // $okBtn.css({ "width": "50%", "border-right": "5px solid #fff" });
            // $("<div style='float:left;width:50%;border-left:5px solid #fff;border-radius:2px;padding:7px 0;color:#fff;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background:#ccc;'>取消</div>")
            //     .appendTo($myalert_btn_div).click(myClickHandler);
        }
        overflow = $("body").css("overflow");
        $("body").css("overflow", "hidden").append($hidder);
    };
    init();
}

function errAlert(msg) {
    var box = $('<div class="alertTxt alerterro">' + msg + '</div>');
    $("body").append(box);
    setTimeout(function() {
        box.remove();
    }, 3000);
}

function warnAlert(msg) {
    var box = $('<div class="alertTxt alertwarm">' + msg + '</div>');
    $("body").append(box);
    setTimeout(function() {
        box.remove();
    }, 3000);
}