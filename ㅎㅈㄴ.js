importPackage(org.jsoup);
importPackage(org.jsoup.nodes);

const scriptName="ㅎㅈㄴ.js";
const MANAGER = "허재녕"
const SLASH = '/';
const Command_List = {save:"저장"};
const folder_Root = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/katalkbot/lib/hjnchatbot/";
let privacy_List = [];
let privacy_member = {name:"홍길동",location:"삼방동",alarm:{hour:07,minute:00}};


function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId)
{
    if(room==MANAGER)
    {
        replier.reply(call_Privacy_By_File(sender,msg));
        //replier.reply();
    }
    
}
function call_Privacy_By_File(member,order)
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
        return privacy[order];

    }
    catch (e) 
    {
      return e;
    }
    
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