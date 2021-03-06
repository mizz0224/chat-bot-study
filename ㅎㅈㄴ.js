importPackage(org.jsoup);
importPackage(org.jsoup.nodes);

const scriptName = "ㅎㅈㄴ.js";
const MANAGER = "허재녕";
const SLASH = "/";
const TEXTFORM = ".txt";
const folder_Root =
  android.os.Environment.getExternalStorageDirectory().getAbsolutePath() +
  "/katalkbot/lib/hjnchatbot/";
let command_List = ["저장", "삭제", "불러오기"];
let answer_Postive = ["y", "Y", "ㅇ", "예", "응", "그래", "맞아"];
let answer_Nagative = ["n", "N", "ㄴ", "아니", "아니야", "틀려"];
let Logined_Member = [];
let pasted_message = "";
let array_To_Send = [];

function response(
  room,
  msg,
  sender,
  isGroupChat,
  replier,
  ImageDB,
  packageName,
  threadId
) {
  try {
    if (room == MANAGER) {
      if (command_List.includes(msg)) {
        if (msg == "저장") {
          replier.reply("방금하신 말씀을 저장합니다");
          array_To_Send = call_Privacy_By_File(sender);
          array_To_Send[array_To_Send.length()] += pasted_message;
          save_Privacy_By_File(sender, array_To_Send);
        } else if (msg == "삭제") {
        } else if (msg == "불러오기") {
          replier.reply("메모장불러옵니다");
          replier.reply(
            return_Array_By_String(call_Privacy_By_File(sender), "\n")
          );
        } else {
          pasted_message = msg;
        }
      } else {
      }
    } else {
    }
  } catch (e) {
    replier.reply(e);
  }
}

function member_Just_Checkint(sender) {
  try {
    let file_Root = folder_Root + sender + TEXTFORM;
    var member_File = new java.io.File(file_Root);
    if (member_File.exists() == true) {
      return 0;
    } else {
      return 1;
    }
  } catch (e) {
    return e;
  }
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

function member_Checking(replier, sender, msg) {
  let file_Root = folder_Root + sender + ".txt";
  var member_File = new java.io.File(file_Root);
  try {
    if (member_Just_Checkint(sender) === 0) {
      replier.reply("반갑습니다 " + sender + "님 회원 정보를 불러오겠습니다");
    } else {
      replier.reply(
        "반갑습니다 " + sender + "님 신규 사용자 등록을 시작하시겠습니까"
      );
      if (decision_Answer(replier, msg) === 0) {
        member_File.createNewFile();
        //new_Member_Maker(replier,sender,msg,privacy_Newbi);
      } else if (decision_Answer(replier, msg) === 1) {
        replier.reply("종료하겠습니다 안녕히 가십시오");
      }
    }
  } catch (e) {}
}

function new_Member_Maker(replier, sender, msg, privacy_Newbi) {}

function call_Privacy_By_File(member) {
  var folder = new java.io.File(folder_Root);
  folder.mkdirs();
  var file = new java.io.File(folder_Root + member + TEXTFORM);
  if (file.exists() == false) {
    return "파일불러오기실패";
  }
  try {
    var fis = new java.io.FileInputStream(file);
    var isr = new java.io.InputStreamReader(fis);
    var br = new java.io.BufferedReader(isr);
    var temp_readline = "";
    var temp_br = "";
    while (true) {
      if ((temp_readline = br.readLine()) === null) break;
      temp_br += temp_readline + "\n";
    }
    temp_br = temp_br.slice(0, -1);

    fis.close();
    isr.close();
    br.close();
    let privacy = temp_br.split("\n");
    return privacy;
  } catch (e) {
    return e;
  }
}

function decision_Answer(replier, msg) {
  string_Answer_Positive = return_Array_By_String(answer_Positive, " , ");
  string_Answer_Nagative = return_Array_By_String(answer_Nagative, " , ");
  if (check_word(msg, answer_Positive) == true) {
    return 0;
  } else if (check_word(msg, answer_Nagative) == true) {
    return 1;
  } else {
    replier.reply(
      "방금하신 대답의 의도를 파악할수없습니다\n긍정문은 " +
        string_Answer_Positive +
        "로\n부정문은 " +
        string_Answer_Nagative +
        "\n으로 대답해주십시오"
    );
    replier.reply("다시한번 명령어를 실행시켜 주세요");
    return 2;
  }
}

function check_word(msg, word_list) {
  for (var word of word_list) {
    if (msg.indexOf(word) !== -1) return true;
  }
  return false;
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

function onStartCompile() {}

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
