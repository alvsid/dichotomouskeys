stageNum=3;  //Total number of stages. Make sure that many stageDescr, stage and stageSucc1 are defined
startCom="!start";  //Command to start the game
exitCom="!exit";  //Command to end the game

var deathMess = "You died!"; //Message to be displayed in case of death/failure
var winMess = "You won!!"; //Message to be displayed when the game is won

stageDescr1 = "Stage Description text";  //Description text on arrival on the stage (Can be left empty)

stage1 = [
        ["1command1","Description","1result1"],
        ["1command2","Description","1result2"],
        ["1command3","Description","1result3"],
        ["1command4","Description","1result4"],
      ];
//1command1 is the command to be types in, the corresponding Description, and the result to be displayed
// in case that command is selected
// eg: ["hug", "Hug the poney", "The uni-horn pierced your heart"]
//Any number of commands are possible

stageSucc1 = 3;  //The number corresponding to the only successfull command. Here the successfull command is 1command3
//Selecting this command will send you to the next stage
//Selecting any other command will display death message


stageDescr2 = "Stage Description text";

stage2 = [
        ["2command1","Description","2result1"],
        ["2command2","Description","2result2"],
        ["2command3","Description","2result3"],
        ["2command4","Description","2result4"],
      ];

stageSucc2 = 2;

stageDescr3 = "Stage Description text";

stage3 = [
        ["3command1","Description","3result1"],
        ["3command2","Description","3result2"],
        ["3command3","Description","3result3"],
        ["3command4","Description","3result4"],
      ];

stageSucc3 = 2;
