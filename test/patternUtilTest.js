const assert = require("assert");
const printLog = require("../testScript/logReporter.js").printLog;
const patternUtil = require("../src/patternUtil.js");
const {repeatCharacter} = patternUtil;

const checkAssert = function(funcName,args,actual,expected) {
  printLog(funcName,args,actual,expected);
  assert.deepEqual(actual,expected);
}

/*---------------------------Test cases for repeatCharacter--------------------------*/
let expected_1 = "*";
checkAssert("repeatCharacter",["*",1],repeatCharacter("*",1),expected_1);

let expected_5 = "*****";
checkAssert("repeatCharacter",["*",5],repeatCharacter("*",5),expected_5);
 
let expected_4 = "----";
checkAssert("repeatCharacter",["-",4],repeatCharacter("-",4),expected_4);

let expected_6 = "@@@@@@";
checkAssert("repeatCharacter",["@",6],repeatCharacter("@",6),expected_6);

