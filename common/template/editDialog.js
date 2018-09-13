function editDialog(content,title) {
    var $jq = $('<div class="modal-dialog"><div class="modal-box"></div></div>');
    this.$jq = $jq;
    this.handlerA(content,title);
    this.bindEvent();
    return this;
}
// 组装内容的
dialogBox.prototype.handlerA = function(content,title){
    var $jq = this.$jq;
    var content = content || ' ';
    var title = title || '提示';
    var btn = btn || '确认';
    var str = '<div class="modal-header">'
        +'<h3>'+ title +'</h3>'
        +'<span class="close"><i class="iconfont icon-guanbi"></i></span>'
        +'</div>'
        + '<div class="modal-content">'
        + content
        +'</div>'
        + '<div class="modal-footer">'
        + '<span class="modal-btn">' + btn + '</span>'
        + '</div>';
        console.log(str);
    $jq.find('.modal-box').append(str);
    $jq.appendTo($('body'));
    // if (!$('.modal-dialog').length > 0) {
    //     $jq.appendTo($('body'));
    // } else {
    //     $('.modal-dialog').show();
    // }
   
}
dialogBox.prototype.setContent = function(html){
    var $jq = this.$jq;
    $('.modal-content', $jq).html(html);
}
dialogBox.prototype.setTitle = function(text){
    var $jq = this.$jq;
    $('.modal-header h3', $jq).text(text);
}
dialogBox.prototype.setBtnTxt = function(btnTxt) {
    var $jq = this.$jq;
    $('.modal-footer span', $jq).text(btnTxt);
}
dialogBox.prototype.show = function(){
    this.$jq.show();
}
dialogBox.prototype.bindEvent = function(){
    var self = this;
    var $jq = this.$jq;
    $jq.on('click','.close', function(){
        self.$jq.hide();
    });
}