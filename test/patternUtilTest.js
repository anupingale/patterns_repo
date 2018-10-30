const assert = require("assert");
const printLog = require("../testScript/logReporter.js").printLog;
const patternUtil = require("../src/patternUtil.js");
const {leftJustify, generateLines, readUserInput, generateSymbolPattern, starAtStartEnd, halfOfHeight, repeatCharacter} = patternUtil;

const checkAssert = function(funcName,args,actual,expected) {
  printLog(funcName,args,actual,expected);
  assert.deepStrictEqual(actual,expected);
}

/*---------------------------Test cases for repeatCharacter--------------------------*/
let expected = "*";
checkAssert("repeatCharacter",["*",1],repeatCharacter("*",1),expected);

expected = "*****";
checkAssert("repeatCharacter",["*",5],repeatCharacter("*",5),expected);
 
expected = "----";
checkAssert("repeatCharacter",["-",4],repeatCharacter("-",4),expected);

expected = "@@@@@@";
checkAssert("repeatCharacter",["@",6],repeatCharacter("@",6),expected);


/*---------------------------Test cases for starAtStartEnd----------------------------*/
expected = "**";
checkAssert("starAtStartEnd",["2"],starAtStartEnd(2),expected);

expected = "* *";
checkAssert("starAtStartEnd",["3"],starAtStartEnd(3),expected);

expected = "*   *";
checkAssert("starAtStartEnd",["5"],starAtStartEnd(5),expected);


/*--------------------------Test cases for halfOfHeight------------------------------*/
expected = 2;
checkAssert("halfOfHeight",["5"],halfOfHeight(5),expected);

expected = 5;
checkAssert("halfOfHeight",["10"],halfOfHeight(10),expected);


/*-------------------------Test cases for generateLines----------------------------*/
expected = "***";
checkAssert("generateLines",["*","*","*",3],generateLines("*","*","*",3),expected);

expected = "* *";
checkAssert("generateLines",["*"," ","*",3],generateLines("*"," ","*",3),expected);

expected = "-*****-";
checkAssert("generateLines",["-","*","-",7],generateLines("-","*","-",7),expected);

expected = " ********* ";
checkAssert("generateLines",[" ","*"," ",11],generateLines(" ","*"," ",11),expected);

expected = "*---------------@";
checkAssert("generateLines",["*","-","@",17],generateLines("*","-","@",17),expected);

/*--------------------------Test cases for generatesymbolPattern--------------------*/

expected = "*";
checkAssert("generateSymbol",["*",1],generateSymbolPattern("*",1),expected);

expected = "****";
checkAssert("generateSymbol",["*",5],generateSymbolPattern("*",4),expected);

expected = "----------"
checkAssert("generateSymbol",["-",10],generateSymbolPattern("-",10),expected);

/*---------------------------Test cases for readUserInput-------------------------*/

expected = {type : "filled", height : 10, width : 7}
checkAssert("readUserInput",["filled",10,7],readUserInput(["node","createTriangle","filled",10,7]),expected);

expected = {type : "filled", height : 5, width : 5}
checkAssert("readUserInput",["filled",5,5],readUserInput(["node","createTriangle","filled",5,5]),expected);

expected = {type : "hollow", height : 40, width : 7}
checkAssert("readUserInput",["hollow",40,7],readUserInput(["node","createTriangle","hollow",40,7]),expected);

expected = {type : "hollow", height : 10, width : 7}
checkAssert("readUserInput",["hollow",10,7],readUserInput(["node","createTriangle","hollow",10,7]),expected);

expected = {type : "hollow", height : 4, width : 7}
checkAssert("readUserInput",["hollow",4,7],readUserInput(["node","createTriangle","hollow",4,7]),expected);

expected = {type : "angled", height : 40, width : 40}
checkAssert("readUserInput",["angled",40],readUserInput(["node","createTriangle","angled",40]),expected);

expected = {type : "angled", height : 40, width :40}
checkAssert("readUserInput",["angled",40],readUserInput(["node","createTriangle","angled",40]),expected);

/*--------------------------Test cases for leftJustify-----------------------------*/

expected = " ";
checkAssert("leftJustify",["",1],leftJustify("",1),expected);

expected = "*";
checkAssert("leftJustify",["*",1],leftJustify("*",1),expected);

expected = "*  ";
checkAssert("leftJustify",["*",3],leftJustify("*",3),expected);

expected = "**  ";
checkAssert("leftJustify",["**",4],leftJustify("**",4),expected);

expected = "******";
checkAssert("leftJustify",["******",6],leftJustify("******",6),expected);
