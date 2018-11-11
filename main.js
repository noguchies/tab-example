   //6. .showTab関数の変数selectorに該当するタブを表示
function showTab(selector){
   //7. .tabs-menu div要素からactiveという要素を削除    
    $(".tabs-menu div").removeClass("active");
   //8. id属性とselector要素にactiveというクラスを追加(枠や線をつける)
    $("#"+selector).addClass("active");
   //9. .tabs-contentクラスの中にあるdiv要素を非表示にする
    $(".tabs-content > div").hide();
   //10. selectorの、文字の後ろ1文字を切り出してchar(変数)へ代入
    var char = selector.slice(-1);
   //11. id（セレクタ）のtabs-要素のchar部分を表示
    $("#tabs-"+char).show();
}

$(document).ready(function() {
   //1. ここが最初に動く、showTabという関数を呼ぶ
   showTab("tabs-menu-a");
   //2. .tabs menu div要素（タブ）をクリックしたら次の処理を実行する
   $(".tabs-menu div").click(function() {
   //3. .tabs menu div要素の属性値idを取得し、変数selectorへ代入
     var selector = $(this).attr("id");
   //4.コンソールに、変数selectorを表示
     console.log(selector);
   //5.showTab関数にselectorの値を渡す
     showTab(selector);
    });
});