importPackage(org.jsoup);
importPackage(org.jsoup.nodes);

const scriptName="ㅎㅈㄴ.js";
const MANAGER = "허재녕"
let answer_Positive = ["y","Y","ㅇ","예","응","그래","맞아"];
let answer_Nagative = ["n","N","ㄴ","아니","아니야","틀려"];
//under newing
var answer_flag = false;




function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId)
{
    try
    {
        if(room==MANAGER||msg === "ㅌ")
        {
            replier.reply(decision_smart(decision_Answer(replier,sender,msg)));
        }
    }
    catch(e)
    {
        replier.reply(e);

    }
    
}
function decision_smart(num)
{
    if(num===1)
    {
        return "true";

    }
    else
    {
        return "false";

    }
}
function decision_Answer(replier,sender,msg)
{
    string_Answer_Positive = return_Array_By_String(answer_Positive);
    string_Answer_Nagative = return_Array_By_String(answer_Nagative);
    if(check_word(msg, answer_Positive) == true)
    {
        answer_flag = true;
    }
    else if(check_word(msg, answer_Nagative) == true)
    {
        answer_flag = true;
    }
    else
    {
        replier.reply("방금하신 부분은 긍정입니까 아닙니까?의도를 파악할수없습니다\n긍정문은 "+string_Answer_Positive+"로\n부정문은 "+string_Answer_Nagative+"\n으로 대답해주십시오");
    }
}
function check_word(msg, word_list){
    for(var word of word_list){
        if(msg.indexOf(word) !== -1) return true;
    }
    return false;
}
function return_Array_By_String(array)
{
    string_To_Return = "";
    for(let i = 0;i<array.length;i++)
    {
        string_To_Return += array[i];
        if(i<array.length-1)
        {
            string_To_Return += " , "

        }
    }
    return string_To_Return;
}

function onStartCompile(){
    
}

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState,activity) {
    var layout=new android.widget.LinearLayout(activity);
    layout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    var txt=new android.widget.TextView(activity);
    txt.setText("액티비티 사용 예시입니다.");
    layout.addView(txt);
    activity.setContentView(layout);
}
function onResume(activity) {}
function onPause(activity) {}
function onStop(activity) {}