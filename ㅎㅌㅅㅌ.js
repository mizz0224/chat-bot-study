importPackage(org.jsoup);
importPackage(org.jsoup.nodes);

const scriptName = "ㅎㅈㄴ.js";
const MANAGER = "허재녕"
let answer_Positive = ["y", "Y", "ㅇ", "예", "응", "그래", "맞아"];
let answer_Nagative = ["n", "N", "ㄴ", "아니", "아니야", "틀려"];
//under newing
var answer_flag = false;




function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
    if (sender == "허재녕" && msg == "위로") {
        replier.reply("힘내");
    }
}
//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
    var layout = new android.widget.LinearLayout(activity);
    layout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    var txt = new android.widget.TextView(activity);
    txt.setText("액티비티 사용 예시입니다.");
    layout.addView(txt);
    activity.setContentView(layout);
}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}