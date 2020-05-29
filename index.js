var stageStatus=0;
var stage;var stageSucc;var stageDescr;
var resp;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#input").addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
      let input = document.getElementById("input").value;
      document.getElementById("input").value="";
      console.log(input);
      document.getElementById("output").innerHTML = reply(input);
    }
  });
});

function reply(input){

  if (input===exitCom)
  return ("bye");
  else if (input===startCom)
    stageStatus=1;
  return stageHandle(input);
}

function stageHandle(input){
  console.log('stageStatus:' + stageStatus.toString());
  switch (stageStatus) {
    case 0:
      resp='Type '+ startCom;
      break;
    case 1:
      resp='';
      stageUpdate();
      break;
    case (stageNum+1):

      for (var i=0; i < stage.length;i++){

        // console.log('i: '+ i.toString());
        // console.log('Input: '+ input);
        // console.log('Stage: ' + stage[i][0]);
        // console.log('Conditional: '+ (input===stage[i][0]));
        if (input===stage[i][0]){
            resp= stage[i][2] + "<br>";
            if (i==(stageSucc-1)){
              console.log("True condition");
              resp = resp + winMess;
              stageStatus=0;
              console.log("stageStatus: "+ stageStatus);
              document.getElementById("error").innerHTML = "";
              return(resp);
            };
            resp = resp + deathMess;
            stageStatus=0;
            console.log("stageStatus: "+ stageStatus);
            document.getElementById("error").innerHTML = "";
            return(resp);
        };

      };
      document.getElementById("error").innerHTML = "Invalid command. Enter a valid command";
      break;
    default:

      for (var i=0; i < stage.length;i++){

        // console.log('i: '+ i.toString());
        // console.log('Input: '+ input);
        // console.log('Stage: ' + stage[i][0]);
        // console.log('Conditional: '+ (input===stage[i][0]));
        if (input===stage[i][0]){
            resp= stage[i][2] + '<br>';
            if (i==(stageSucc-1)){
              stageUpdate();
              console.log("stageStatus: "+ stageStatus);
              return(resp);
            };
            resp = resp + deathMess;
            stageStatus=0;
            console.log("stageStatus: "+ stageStatus);
            document.getElementById("error").innerHTML = "";
            return(resp);
        };

      };
          document.getElementById("error").innerHTML = "Invalid command. Enter a valid command";
  };
  console.log("stageStatus: "+ stageStatus);
  return(resp);
}

function stageUpdate(){
  eval ('var ' + 'stageDescr' + '= ' + 'stageDescr' + stageStatus);
  eval ('stage' + '= ' + 'stage' + stageStatus);
  eval ('stageSucc' + '= ' + 'stageSucc' + stageStatus);

  resp = resp + stageDescr + '<br>';
  for (var i=0; i < stage.length;i++){
    resp = resp + stage[i][0] + ':\t' + stage[i][1] + '<br>';
  };
  resp = resp + 'Enter the command to continue';
  console.log('stageUpdate'+stageStatus);
  document.getElementById("error").innerHTML = "";
  stageStatus=stageStatus+1;
};
