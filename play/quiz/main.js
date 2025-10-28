let question = [
    [
        "新しい総理大臣の名前は？",
        "１　あべ俊子",
        "２　高市早苗",
        "３　三原じゅん子",
        "2"
    ],
    [
        "1万円札で1億円分の重さはどれくらい？",
        "１　10Kg",
        "２　13Kg",
        "３　16Kg",
        "1"
    ],
    [
        "1円貨のデザインにある木は何の木？",
        "１　桜",
        "２　けやき",
        "３　空想の木",
        "3"
    ],
    [
        "タコの脳みそはいくつあるでしょうか？",
        "１　 3",
        "２　 9",
        "３　15",
        "2"
    ],
    [
        "砂糖と塩の賞味期限は？",
        "１　 3年",
        "２　20年",
        "３　ない",
        "3"
    ],
    [
        "金メダルは何でできている？",
        "１　金",
        "２　銀",
        "３　銅",
        "3"
    ],
    [
        "「それいけ!アンパンマン」に登場するジャムおじさんの正体は？",
        "１　ゴリラ",
        "２　妖精",
        "３　人間",
        "2"
    ],
    [
        "七夕で有名な織姫と彦星の関係は？",
        "１　友達",
        "２　恋人",
        "３　夫婦",
        "3"
    ],
    [
        "キリンの睡眠時間は何分？",
        "１　20分",
        "２　4時間",
        "３　寝ない",
        "1"
    ],
    [
        "日本で一番面積が小さい都道府県は？",
        "１　長崎県",
        "２　香川県",
        "３　沖縄県",
        "2"
    ]
];

// console.log(question[4][2]);

let quiz = document.getElementById('question');
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');

let correct = 0;
let quizCnt = 0;

function quizSet() {
    quiz.textContent = question[quizCnt][0];
    ans1.textContent = question[quizCnt][1];
    ans2.textContent = question[quizCnt][2];
    ans3.textContent = question[quizCnt][3];
}

quizSet();

// ボタンを押した時の処理
function answerCheck(ans) {
    if(ans == question[quizCnt][4]) {
        alert("正解！！");
        correct++;
    } else {
        alert("不正解(´；ω；`)");
    }
    quizCnt++;
    if(quizCnt == question.length) {
        quiz.textContent = `正解数は${correct}でした！`;
        ans1.textContent = "";
        ans2.textContent = "";
        ans3.textContent = "";
    } else {
        quizSet();
    }
}