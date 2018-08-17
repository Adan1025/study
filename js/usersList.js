 // usersList
 $(function() {
     var fFindAll = function() {
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
                         str += '<tr><td>' + (i + 1) + '</td><td>' + (arr[i].nickName || '') +
                             '</td><td>' + (arr[i].roleName || '') +
                             '</td><td>' + (arr[i].email || '') +
                             '</td><td></td><td>' + (arr[i].phone || '') +
                             '</td><td>' + (arr[i].metto || '') +
                             '</td><td>' + '<button type="button" class="edit" data-href="../users/addUsers.html?id=' + arr[i].id + '"><i class="iconfont icon-bianji"></i></button>' + '<button data-id="' + arr[i].id + '" class="delete">删除</button>'
                         '</td></tr>'
                     }
                     $('#userList').html(str);
                 }
             }
         });
     }

     var fDelete = function(id) {
         $.ajax({
             url: '/manage/users/delete/' + id,
             type: 'GET',
             dataType: 'json',
             contentType: "application/json",
             success: function(data) {
                 if (data.status == 1) {
                     alert('操作成功');

                 }
                 if (data.status == 0) {
                     alert(data.errmsg);
                 }
                 if (data.status == 996) {
                     alert(data.errmsg);
                 }
             }
         });
     };
     var fBindFunc = function() {
         $(document).on('click', '.edit', function() {
             var href = $(this).attr('data-href');
             location.href = href;
         });
         $(document).on('click', '.delete', function() {
             var id = $(this).attr('data-id');
             myAlert('此操作将永久删除用户和用户的文章, 是否继续?', function(f) {
                 if (f) {
                     fDelete(id);
                 }
             });

         })
     }
     fFindAll();
     fBindFunc();

 })