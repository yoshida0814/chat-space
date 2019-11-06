$(document).on('turbolinks:load', function(){
  function buildHTML(message) {
    var content = message.content ? `${ message.content }` : "";
    var img = message.image.url ? `<img src= ${ message.image.url }>` : "";
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="message__detail">
                    <p class="message__detail__current-user-name">
                      ${message.user_name}
                    </p>
                    <p class="message__detail__date">
                      ${message.created_at}
                    </p>
                  </div>
                  <p class="message_body">
                    <div>
                    ${content}
                    </div>
                    ${img}
                  </p>
                </div>`


  return html;

  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this);
    var url = (window.location.href);
    $.ajax({  
      url: url,
      type: 'POST',
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.new_message')[0].reset(); //input内のメッセージを消しています。
      $('.content__right__center').animate({scrollTop: $('.content__right__center')[0].scrollHeight}, 'fast');

    })
    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(data){
      $('input').prop('disabled', false);　//ここで解除して
    })
  })

 　　 var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    last_message_id =  $('.message:last').data("message-id");
    if ( window.location.href .match(/\/groups\/\d+\/messages/)) {
    $.ajax({
      //ルーティングで設定した通りのURLを指定
      url: "api/messages", 
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      //追加するHTMLの入れ物を作る
      var insertHTML = '';
      messages.forEach(function(message) {
        insertHTML = buildHTML(message);
        $('.messages').append(insertHTML); 
        $('.content__right__center').animate({scrollTop: $('.content__right__center')[0].scrollHeight}, 'fast');

      });
     
      //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
      //メッセージが入ったHTMLを取得
      //メッセージを追加
    })
    .fail(function() {
      //alert('エラーが発生したためメッセージは送信できませんでした。');
    });
  }
    
  };
  setInterval(reloadMessages, 1000);
});
