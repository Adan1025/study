 // usersList
 $(function() {
     var data = {};
     $.ajax({
         url: '/manage/users/findAll?_r=1533029447696',
         type: 'GET',
         dataType: 'json',
         contentType: "application/json",
         data: JSON.stringify(data),
         success: function(data) {
             var arr = data.results
             var str = '';
             if (data.status == 1) {
                 for (var i = 0; i < arr.length; i++) {
                     if (arr[i].phone == null) {
                         arr[i].phone = ' ';

                     }
                     if (arr[i].metto == null) {
                         arr[i].metto = ' ';
                     }
                     str += '<tr><td>' + (i + 1) + '</td><td>' + arr[i].nickName +
                         '</td><td>' + arr[i].roleName +
                         '</td><td>' + arr[i].email +
                         '</td><td></td><td>' + arr[i].phone +
                         '</td><td>' + arr[i].metto +
                         '</td><td>' + '<button type="button" class="edit" data-href="../users/addUsers.html"><i class="iconfont icon-bianji"></i></button>' + '<button class="delete">删除</button>'
                     '</td></tr>'
                 }
                 $('#userList').html(str);
             }
         }
     });
     $('.edit').on('click', function() {
             //  var href = $(this).attr('data-href');

             //  $('.container').empty();
             //  $('.container').load(href);
         })
         //  $.ajax({
         //          url: '/manage/users/getOneById?id=2&_r=1533522476141',
         //      })
         //  $('.edit').on('click',function(){
         //      $(this).
         //  })
 })