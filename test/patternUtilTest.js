const assert = require("assert");
const printLog = require("../testScript/logReporter.js").printLog;
const patternUtil = require("../src/patternUtil.js");
const { rightJustify,
  leftJustify,
  centerJustify,
  generateLines,
  readUserInput,
  halfOfHeight,
  repeatCharacter,
  createDiamondSeries} = patternUtil;

const checkAssert = function(funcName,args,actual,expected) {
  printLog(funcName,args,actual,expected);
  assert.deepStrictEqual(actual,expected);
}

//----------Tets cases for create Diamond series function----------//

checkAssert("diamondSeries",[0],createDiamondSeries(0),[]);
checkAssert("diamondSeries",[1],createDiamondSeries(1),[]);
checkAssert("diamondSeries",[2],createDiamondSeries(2),[]);
checkAssert("diamondSeries",[3],createDiamondSeries(3),[3]);
checkAssert("diamondSeries",[5],createDiamondSeries(5),[3,5,3]);

/*---------------------------Test cases for repeatCharacter--------------------------*/
let expected = ['*'];
checkAssert("repeatCharacter",["*",1],repeatCharacter("*",1),expected);

expected = ['*','*','*','*','*'];
checkAssert("repeatCharacter",["*",5],repeatCharacter("*",5),expected);
 
expected = ['-','-','-','-'];
checkAssert("repeatCharacter",["-",4],repeatCharacter("-",4),expected);

expected = ['@','@','@','@','@','@'];
checkAssert("repeatCharacter",["@",6],repeatCharacter("@",6),expected);

/*-------------------------Test cases for generateLines----------------------------*/
expected = "***";
let line = generateLines("*","*","*");
checkAssert("generateLines",["*","*","*",3],line(3),expected);

expected = "* *";
line = generateLines("*"," ","*");
checkAssert("generateLines",["*"," ","*",3],line(3),expected);

expected = "-*****-";
line = generateLines("-","*","-");
checkAssert("generateLines",["-","*","-",7],line(7),expected);

expected = " ********* ";
line = generateLines(" ","*"," ");
checkAssert("generateLines",[" ","*"," ",11],line(11),expected);

expected = "*---------------@";
line = generateLines("*","-","@");
checkAssert("generateLines",["*","-","@",17],line(17),expected);

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

/*--------------------------Test cases for rightJustify---------------------------*/

expected = " ";
let justify = rightJustify(1);
checkAssert("rightJustify",[" ",1],justify(" "),expected);

expected = "*";
justify = rightJustify(1);
checkAssert("rightJustify",["*",1],justify("*"),expected);

expected = " *";
justify = rightJustify(2); 
checkAssert("rightJustify",["*",2],justify("*"),expected);

expected = "   ***";
justify = rightJustify(6)
checkAssert("rightJustify",["***",6],justify("***"),expected);

/*------------------------Test cases for centerJustify----------------------------*/

expected = "  ";
justify = centerJustify(2);
checkAssert("centerJustify",["",2],justify(""),expected);

expected = "*";
justify = centerJustify(1);
checkAssert("centerJustify",["*",1],justify("*"),expected);

expected = " * ";
justify = centerJustify(3);
checkAssert("checkAssert",["*",3],justify("*"),expected);

expected = "   ***   ";
justify = centerJustify(9);
checkAssert("checkAssert",["***",9],justify("***"),expected);

expected = " ***** ";
justify = centerJustify(7);
checkAssert("checkAssert",["*****",7],justify("*****"),expected);
