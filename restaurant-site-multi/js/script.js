


//vegasの呼び出し



$('#main-visual').vegas({
    slides: [
        //vegasが効かなかったのでルートパスに変更したよ
        { src: "img/main-01.webp" },
        { src: "img/main-02.webp" },
        { src: "img/main-03.webp" },

    ],
    timer: false,
    transition: 'fade', //切り替えるアニメーションの種類
    animation: 'kenburns',
    delay: 7000,//画像が止まっている時間
    animationDuration: 8000,//アニメーションの時間

});

$(function () {
    //ハンバーガーボタン
    /* まずid g-navを非表示にする */
    $('#g-nav').hide();
    //#ham-btnをon.clickしたらthisにtoggleClassし、さらに#g-navをfadeToggleする
    $('#ham-btn').on('click', function () {
        $(this).toggleClass('is-active');
        $('#g-nav').fadeToggle(200);
    });

   /*  #g-nav aをon.clickしたら */
   $('#g-nav a').on('click', function(){
    $('#g-nav').fadeOut(200);
    $('#ham-btn').removeClass('is-active');
   })

});


//ajaxで外部データを呼び出す
$('#news-list').load('news.txt');


//カルーセル





//西暦を取得しfullYearに代入する

const fullYear = new Date().getFullYear();

if (fullYear >= 2025) {
    $('#this-year').text('2024 -' + fullYear);
} else {
    $('#this-year').text(fullYear);

}



$(function () {

    $('.bxslider').bxSlider({
        ticker: true,
        speed: 30000,
        minSlides: 2,
        maxSlides: 6,
        slideWidth: 320,
    });



    });
