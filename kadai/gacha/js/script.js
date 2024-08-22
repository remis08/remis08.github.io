function gacha(){

//配列に画像を挿入する 下記を書き終えたらまずconsole.logで確認しましょう
let star3 = ['01.png', '02.png'];
let star2 = ['03.png', '04.png', '05.png'];
let star1 = ['06.png', '07.png', '08.png', '09.png','10.png','11.png'];


//console.log(star1)

//排出率の設定
//★３が5% ★２が20% ★１が50％
let star1Ratio = 50; //star1の排出率は60％
let star2Ratio = 70; //star1とstar2の排出率を合わせた数字

//各ランクに入ってるキャラ数
let star1Total = 6;
let star2Total = 3;
let star3Total = 2;

//値が空の配列を作る
let character = [];

//3回ガチャを回す
for (let i = 1; i < 4; i++) {

    //1~100までのランダム
    let randomNumber = Math.ceil(Math.random() * 100);

    console.log(randomNumber);

    //if文でランクの振り分け 　条件star1Ratioのところ　star1Ratio=60だから,star1Total=4だから

    if (randomNumber <= star1Ratio) {
        //1~60の場合はstar1の中でランダム抽選
        let star1Num = Math.floor(Math.random() * star1Total);
        character.push(star1[star1Num]);


    }else if (randomNumber <= star2Ratio) {
        //69~95の場合はstar2の中でランダム抽選
        let star2Num = Math.floor(Math.random() * star2Total);
        character.push(star2[star2Num]);
    

    }else {
        //96~100の場合はstar3の中でランダム抽選
        let star3Num = Math.floor(Math.random() * star3Total);
        character.push(star3[star3Num]);
    }
    

}

console.log(character);
//配列characterの中身のすべて表示character[]

document.querySelector('#outer').innerHTML =
'<p><img src="img/'   +character[0]+  '" alt=""></p> <p><img src="img/'   +character[1]+  '" alt=""></p> <p><img src="img/'   +character[2]+  '" alt=""></p>'
}     