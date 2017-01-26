$(function(){
  $('#navToggle').click(function(){
      $('.header__main-menu').toggleClass('openNav');
  });
})

// about__titleエフェクト
$(function(){
  var DELAY_SPEED = 100;//文字が流れる速さ
  var FADE_SPEED = 500;//表示のアニメーション時間
  var str = [];
  $("#about").on('inview',function(){
    $(document).ready(function(){
    	$('.about__title > span').each(function(i){//セレクタで指定した要素すべて
            $(this).css('opacity','1');//行を不透明にする
            str[i] = $(this).text();//元のテキストをコピーし
            $(this).text('');//テキストを消す
            var no = i;
            var self = this;
            var interval = setInterval(function(){//50ミリ秒毎にチェック
                if(no == 0 || $('.about__title > span').eq(no - 1).children('span:last').css('opacity') == 1){//最初の行または前の行が全文字表示された時
                    clearInterval(interval);//チェックを停止
                    for (var j = 0; j < str[no].length; j++) {
                        $(self).append('<span>'+str[no].substr(j, 1)+'</span>');//1文字ずつ<span>を付けて
                        $(self).children('span:last').delay(DELAY_SPEED * j).animate({opacity:'1'}, FADE_SPEED);//時間差でフェードインさせる
                    }
                }
            }, 50);
        });
    });
  });
})
// abou__titleエフェクトend

// ボタンエフェクト


$(function(){
  $(".btn").mouseover(
    function(){
      $(this).css("opacity","0.8");
    }
  );

  $(".btn").mouseout(
    function(){
      $(this).css("opacity","1");
    }
  );
})
// ボタンフェクトend

// パララックス
// $(function(){
//   $(window).scroll(function(){
//     // 　スクロールの値を取得
//     var value = $(this).scroll();
//     $("#hero").css('background-position', '0 '+ value +'px');
//     if (value > 800) {
//             $('#about').css('background-position', '0 '+ (value - 800) +'vh');
//         } else {
//             $('#about').css('background-position', '0  0');
//         }
//   });
// })
// パララックスend
