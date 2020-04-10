importPackage(org.jsoup);
importPackage(org.jsoup.nodes);

const scriptName = "ㅎㅈㄴ.js";
const MANAGER = "허재녕"
let answer_Positive = ["y", "Y", "ㅇ", "예", "응", "그래", "맞아"];
let answer_Nagative = ["n", "N", "ㄴ", "아니", "아니야", "틀려"];
//under newing
var answer_flag = false;
const folder_Root =
    android.os.Environment.getExternalStorageDirectory().getAbsolutePath() +
    "/katalkbot/lib/hjnchatbot/";
const TEXTFORM = ".txt";




function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
    if (sender == "허재녕") {
        if (msg == "ㅌㅅㅌ") {
            save_Privacy_By_File(sender + "ㅇ", msg);
        }

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

function save_Privacy_By_File(sender, privacy_arr) {
    try {
        privacy_str = return_Array_By_String(privacy_arr, "\n");
        var folder = new java.io.File(folder_Root);
        folder.mkdirs();
        var file = new java.io.File(folder_Root + sender + TEXTFORM);
        var fos = new java.io.FileOutputStream(file);
        contents = new java.lang.String(privacy_str);
        fos.write(contents.getBytes());
        fos.close();
    } catch (e) {
        return e;
    }
}

function return_Array_By_String(array, symbol) {
    string_To_Return = "";
    for (let i = 0; i < array.length; i++) {
        string_To_Return += array[i];
        if (i < array.length - 1) {
            string_To_Return += symbol;
        }
    }
    return string_To_Return;
}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}