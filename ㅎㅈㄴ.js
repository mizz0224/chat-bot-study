const scriptName="ㅎㅈㄴ.js";
const MEMBER_FILENAME = "MemberList";
const slash = '/';
const Command_List = [{Sale_info:"ㅎㅇ"},];
let member_List = new Array();

importPackage(org.jsoup)
importPackage(org.jsoup.nodes)
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
    if(room === "허재녕" || room === "김재윤")
    {
        try
        {
            let memeber_Check = memeber_Checking(sender,replier);

            if(memeber_Check===1)
            {
                replier.reply("ㅎㅇ!");

            }
            else
            {
                newMember(sender,replier);
            }
            
            
        }
        catch(e)
        {
            replier.reply(e);
        }
    }
}
function memeber_Checking(sender,replier){
    for(var member of member_List)
    {
        if(member.name == sender)
        {
            return 1;
                    
        }
    }
    return 0;
    

}
function newMember(sender,replier){
    let first_privacy= {name : "홍길동",location : "삼방동",todo_List : [],};
    replier.reply("반갑습니다 "+sender+"님 사용자 등록을 시작하겠습니다");
    first_privacy.name = sender;
    member_List.push(first_privacy);


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