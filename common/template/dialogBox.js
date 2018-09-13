/*    var dialogBox = {
    $jq: 'jquery',
    handlerA: function(){},
    handlerClose: function(){},
    bindEvent: function(){},
    setContent：function(){}
}

*/

function dialogBox(content,title,  btnS ) { 
    var $jq = $('<div class="modal-dialog"><div class="modal-box"></div></div>');
    this.$jq = $jq;
    this.handlerA(content,title,btnTxt);
    this.bindEvent();
    return this;
}
// 组装内容的
dialogBox.prototype.handlerA = function(content,title,btnTxt){
    var $jq = this.$jq;
    var content = content || ' ';
    var title = title || '提示';
    // var btnTxt = btnTxt || '确定';
    var str = '<div class="modal-header">'
        + '<h3>'+ title +'</h3>'
        + '<span class="close"><i class="iconfont icon-guanbi"></i></span>'
        + '</div>'
        + '<div class="modal-content">'
        + content
        +'</div>'
        + '<div class="modal-footer">'
        // + '<span class="modal-btn">' + btnTxt + '</span>'
        + '</div>';
        console.log(str);
    $jq.find('.modal-box').append(str);
    $jq.appendTo($('body'));


    for (var i = 0; i < btnS.length; i++) {
        $('.modal-footer',$jq).append('<span id="modalBtn' + i + '">'+ btnS[i].btnTxt +'</span>');
        // $('.modal-footer',$jq).append('<span id="modalBtn' + i + '" onclick="myClick()">'+ item[i].btnName +'</span>');
        // function btnClick() {

        // }
    }
  
   
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
// dialogBox.prototype.close = function(callback,btnTxt){
//     var btnTxt = btnTxt || '确定';
//     var $jq = this.$jq;
//     var obj = bntS[
//         {
//             'name': btnTxt,
//             'callback': function() {
//                 typeof callback == 'function' && callback();
//                 $jq.hide();
//             }
//         },{
//             'name': '取消',
//             'callback': function() {
//                 $jq.hide();
//             }
//         }
//     ]
// }

dialogBox.prototype.bindEvent = function(){
    var self = this;
    var $jq = this.$jq;
    $jq.on('click','.close', function(){
        self.$jq.hide();
    });
}


