importPackage(org.jsoup);
importPackage(org.jsoup.nodes);

const scriptName="ㅎㅈㄴ.js";
const MANAGER = "허재녕"
const SLASH = '/';
const Command_List = {save:"저장"};
const folder_Root = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/katalkbot/lib/hjnchatbot/";
const privacy_number = {name : 0,location : 1,alarm:2,subscribe_quasar:3,subscribe_coolen:4,toDoList:5};
const privacy_set = ["홍길동","삼방동","07:00",true,true,[]];
let privacy_member = {name:"홍길동",location:"삼방동",alarm:{hour:07,minute:00},subscribe_quasar:true,subscribe_coolen:true,toDoList:[],};
let privacy_Newbi = ["홍길동","삼방동","07:00",true,true,[]];
let answer_Postive = ["y","Y","ㅇ","예","응","그래","맞아"];
let answer_Nagative = ["n","N","ㄴ","아니","아니야","틀려"];

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId)
{
    try
    {
        if(room==MANAGER)
        {
            if(member_Checking===1)
            {
                decision_Answer(replier,sender,msg);

            }
            else
            {
                replier.reply("등록되지않은 사용자입니다 사용자등록을 시작합니다 Y/N")
                {
                    decision_Answer(replier,sender,msg);

                }

            }
        }
        else
        {

        }

    }
    catch(e)
    {
        replier.reply(e);

    }
    
}
function member_Just_Checkint(sender)
{
    try
    {
        let file_Root = folder_Root+sender+".txt";
        var member_File = new java.io.File(file_Root);
        if (member_File.exists() == true)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    catch(e)
    {
        return e;

    }
}
function member_Checking(replier,sender,msg)
{
    try
    {
        if (member_Just_Checkint===1)
        {
            replier.reply(`반갑습니다 ${sender}님 회원 정보를 불러오겠습니다`);
        }
        else
        {
            replier.reply(`반갑습니다 ${sender}님 신규 사용자 등록을 시작하겠습니다`);
            member_File.createNewFile();
            new_Member_Maker(replier,sender,msg,privacy_Newbi);
        }
    }
    catch(e)
    {

    }
}
function new_Member_Maker(replier,sender,msg,privacy_Newbi)
{
    
    


}
function privacy_Set_Name(privacy,)
{

}
function call_Privacy_By_File(member)
{
    var folder = new java.io.File(folder_Root);
    folder.mkdirs();
    var file = new java.io.File(folder_Root+member+".txt");
    if (file.exists() == false){return "파일불러오기실패";}
    try 
     {
        
        var fis = new java.io.FileInputStream(file);
        var isr = new java.io.InputStreamReader(fis);
        var br = new java.io.BufferedReader(isr);
        var temp_readline = "";
        var temp_br = "";
        while (true) 
        {
            if ((temp_readline = br.readLine()) === null) break;
            temp_br += temp_readline + "\n";
        }
        temp_br = temp_br.slice(0, -1);
        
        fis.close();
        isr.close();
        br.close();
        let privacy= temp_br.split("\n");
        return privacy;

    }
    catch (e) 
    {
      return e;
    }
    
}
function decision_Answer(replier,sender,msg)
{
    if(msg.indexOf(answer_Postive))
    {
        return 1;
    }
    else if(msg.indexOf(answer_Nagative))
    {
        return 0;
    }
    else
    {
        replier.reply(`방금하신 부분은 긍정입니까 아닙니까?의도를 파악할수없습니다\n긍정문은 ${return_Array_By_String(answer_Nagative)}로\n부정문은 ${return_Array_By_String(answer_Nagative)}로 대답해주십시오`);
        function decision_Answer(replier,sender,msg);
    }

}
function return_Array_By_String(array)
{
    string_To_Return = "";
    for(let s of array)
    {
        string_To_Return+s+", "
    }
    string_To_Return = string_To_Return.slice(0,2);
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