const assert = require("assert");
const printLog = require("../testScript/logReporter.js").printLog;
const patternUtil = require("../src/patternUtil.js");
const {starAtStartEnd, halfOfHeight, repeatCharacter} = patternUtil;

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

