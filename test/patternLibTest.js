const assert = require("assert");
const library = require("../src/patternLib.js");
const {generateTriangle, generateRectangle, generateDiamond} = library;
const printLog = require("../testScript/logReporter.js").printLog;

const checkAssert = function(funcName,args,actual,expected) {
  printLog(funcName,args,actual,expected);
  assert.deepEqual(actual,expected);
}

/*----------Test cases for triangle----------------*/

let actualOutput_left_3 = generateTriangle({ type : "left",height : 3 });
let expectedOutput_left_3 = "";
expectedOutput_left_3 += "*\n"; 
expectedOutput_left_3 += "**\n";
expectedOutput_left_3 += "***\n";
checkAssert("generateTriangle",["left",3],actualOutput_left_3,expectedOutput_left_3);

let actualOutput_left_5 = generateTriangle({ type : "left",height : 5 });
let expectedOutput_left_5 = "";
expectedOutput_left_5 += "*\n"; 
expectedOutput_left_5 += "**\n";
expectedOutput_left_5 += "***\n";
expectedOutput_left_5 += "****\n";
expectedOutput_left_5 += "*****\n";
checkAssert("generateTriangle",["left",5],actualOutput_left_5,expectedOutput_left_5);

let actualOutput_left_7 = generateTriangle({ type : "left",height : 7 });
let expectedOutput_left_7 = "";
expectedOutput_left_7 += "*\n"; 
expectedOutput_left_7 += "**\n";
expectedOutput_left_7 += "***\n";
expectedOutput_left_7 += "****\n";
expectedOutput_left_7 += "*****\n";
expectedOutput_left_7 += "******\n";
expectedOutput_left_7 += "*******\n";
checkAssert("generateTriangle",["left",7],actualOutput_left_7,expectedOutput_left_7);

let actualOutput_right_3 = generateTriangle({ type : "right",height : 3 })
let expectedOutput_right_3 = "";
expectedOutput_right_3 += "  *\n"; 
expectedOutput_right_3 += " **\n";
expectedOutput_right_3 += "***\n";
checkAssert("generateTriangle",["right",3],actualOutput_right_3,expectedOutput_right_3);

let actualOutput_right_5 = generateTriangle({ type : "right",height : 5 });
let expectedOutput_right_5 = "";
expectedOutput_right_5 += "    *\n"; 
expectedOutput_right_5 += "   **\n";
expectedOutput_right_5 += "  ***\n";
expectedOutput_right_5 += " ****\n";
expectedOutput_right_5 += "*****\n";
checkAssert("generateTriangle",["right",5],actualOutput_right_5,expectedOutput_right_5);

let actualOutput_right_6 = generateTriangle({ type : "right",height : 6 });
let expectedOutput_right_6 = "";
expectedOutput_right_6 +="     *\n"; 
expectedOutput_right_6 +="    **\n";
expectedOutput_right_6 +="   ***\n";
expectedOutput_right_6 +="  ****\n";
expectedOutput_right_6 +=" *****\n";
expectedOutput_right_6 +="******\n";
checkAssert("generateTriangle",["right",6],actualOutput_right_6,expectedOutput_right_6);

let actualOutput_filled_10_4 = generateRectangle( {type : "filled", height :10, width : 4});
let expectedOutput_filled_10_4 = "";
expectedOutput_filled_10_4 += "**********\n"; 
expectedOutput_filled_10_4 += "**********\n"; 
expectedOutput_filled_10_4 += "**********\n"; 
expectedOutput_filled_10_4 += "**********\n"; 
checkAssert("generateRectangle",["filled",10,4],actualOutput_filled_10_4,expectedOutput_filled_10_4);

let actualOutput_filled_5_5 = generateRectangle( {type : "filled",height :5, width : 5});
let expectedOutput_filled_5_5 = "";
expectedOutput_filled_5_5 += "*****\n"; 
expectedOutput_filled_5_5 += "*****\n"; 
expectedOutput_filled_5_5 += "*****\n"; 
expectedOutput_filled_5_5 += "*****\n"; 
expectedOutput_filled_5_5 += "*****\n"; 
checkAssert("generateRectangle",["filled",5,5],actualOutput_filled_5_5,expectedOutput_filled_5_5);

let actualOutput_filled_2_2 = generateRectangle( {type : "filled",height :2, width : 2});
let expectedOutput_filled_2_2 = "";
expectedOutput_filled_2_2 += "**\n"
expectedOutput_filled_2_2 += "**\n";
checkAssert("generateRectangle",["filled,2,2"],actualOutput_filled_2_2,expectedOutput_filled_2_2);

let actualOutput_empty_2_3 = generateRectangle( {type : "filled",height :2, width :3});
let expectedOutput_empty_2_3 = "";
expectedOutput_empty_2_3 += "**\n"
expectedOutput_empty_2_3 += "**\n";
expectedOutput_empty_2_3 += "**\n";
checkAssert("generateRectangle",["filled,2,3"],actualOutput_empty_2_3,expectedOutput_empty_2_3);

let actualOutput_empty_5_5 =  generateRectangle({ type : "empty",height : 5, width : 5 });
let expectedOutput_empty_5_5 = "";
expectedOutput_empty_5_5 += "*****\n"; 
expectedOutput_empty_5_5 += "*   *\n"; 
expectedOutput_empty_5_5 += "*   *\n"; 
expectedOutput_empty_5_5 += "*   *\n"; 
expectedOutput_empty_5_5 += "*****"; 
checkAssert("generateRectangle",["empty,5,5"],actualOutput_empty_5_5,expectedOutput_empty_5_5);

let actualOutput_empty_10_4 = generateRectangle({type : "empty",height : 10, width : 4});
let expectedOutput_empty_10_4 = "";
expectedOutput_empty_10_4 += "**********\n"; 
expectedOutput_empty_10_4 += "*        *\n"; 
expectedOutput_empty_10_4 += "*        *\n"; 
expectedOutput_empty_10_4 += "**********"; 
checkAssert("generateRectangle",["empty,10,4"],actualOutput_empty_10_4,expectedOutput_empty_10_4);

let actualOutput_empty_2_2 = generateRectangle({ type : "empty", height : 2, width : 2 });
let expectedOutput_empty_2_2 = "";
expectedOutput_empty_2_2 += "**\n"
expectedOutput_empty_2_2 += "**";
checkAssert("generateRectangle",["empty,2,2"],actualOutput_empty_2_2,expectedOutput_empty_2_2);

let actualOutput_alternate_2_2 = generateRectangle({ type : "alternative", height : 2, width : 2});
let expectedOutput_alternate_2_2 = "";
expectedOutput_alternate_2_2 += "**\n";
expectedOutput_alternate_2_2 += "--"
checkAssert("generateRectangle",["alternative,2,2"],actualOutput_alternate_2_2,expectedOutput_alternate_2_2);

let actualOutput_alternate_5_5 = generateRectangle({ type : "alternative", height : 5, width : 5});
let expectedOutput_alternate_5_5 = "";
expectedOutput_alternate_5_5 += "*****\n"; 
expectedOutput_alternate_5_5 += "-----\n"; 
expectedOutput_alternate_5_5 += "*****\n"; 
expectedOutput_alternate_5_5 += "-----\n"; 
expectedOutput_alternate_5_5 += "*****"; 
checkAssert("generateRectangle",["alternative,5,5"],actualOutput_alternate_5_5,expectedOutput_alternate_5_5);

let actualOutput_alternate_3_3 = generateRectangle({ type : "alternative", height : 3, width : 3});
let expectedOutput_alternate_3_3 = "";
expectedOutput_alternate_3_3 += "***\n"; 
expectedOutput_alternate_3_3 += "---\n"; 
expectedOutput_alternate_3_3 += "***"; 
checkAssert("generateRectangle",["alternative,3,3"],actualOutput_alternate_3_3,expectedOutput_alternate_3_3);

let actualOutput_alternate_10_4 = generateRectangle({ type : "alternative", height : 10, width : 4});
let expectedOutput_alternate_10_4 = "";
expectedOutput_alternate_10_4 += "**********\n"; 
expectedOutput_alternate_10_4 += "----------\n"; 
expectedOutput_alternate_10_4 += "**********\n"; 
expectedOutput_alternate_10_4 += "----------"; 
checkAssert("generateRectangle",["alternative,10,4"],actualOutput_alternate_10_4,expectedOutput_alternate_10_4);

let actualOutput_filled_5 = generateDiamond({ type : "filled",height : 5 });
let expectedOutput_filled_5 = "";
expectedOutput_filled_5 += "  *\n"; 
expectedOutput_filled_5 += " ***\n"; 
expectedOutput_filled_5 += "*****\n"; 
expectedOutput_filled_5 += " ***\n"; 
expectedOutput_filled_5 += "  *\n"; 
checkAssert("generateDiamond",["filled",5],actualOutput_filled_5,expectedOutput_filled_5);

let actualOutput_filled_7 = generateDiamond({ type : "filled",height : 7 });
let expectedOutput_filled_7 = "";
expectedOutput_filled_7 += "   *\n"; 
expectedOutput_filled_7 += "  ***\n"; 
expectedOutput_filled_7 += " *****\n"; 
expectedOutput_filled_7 += "*******\n"; 
expectedOutput_filled_7 += " *****\n"; 
expectedOutput_filled_7 += "  ***\n"; 
expectedOutput_filled_7 += "   *\n"; 
checkAssert("generateDiamond",["filled",7],actualOutput_filled_7,expectedOutput_filled_7);

let actualOutput_hollow_5 = generateDiamond({ type : "hollow",height : 5 });
let expectedOutput_hollow_5 = "";
expectedOutput_hollow_5 += "  *\n"; 
expectedOutput_hollow_5 += " * *\n"; 
expectedOutput_hollow_5 += "*   *\n"; 
expectedOutput_hollow_5 += " * *\n"; 
expectedOutput_hollow_5 += "  *\n"; 
checkAssert("generateDiamond",["hollow",5],actualOutput_hollow_5,expectedOutput_hollow_5);

let actualOutput_hollow_7 = generateDiamond({ type : "hollow",height : 7 });
let expectedOutput_hollow_7 = "";
expectedOutput_hollow_7 += "   *\n"; 
expectedOutput_hollow_7 += "  * *\n"; 
expectedOutput_hollow_7 += " *   *\n"; 
expectedOutput_hollow_7 += "*     *\n"; 
expectedOutput_hollow_7 += " *   *\n"; 
expectedOutput_hollow_7 += "  * *\n"; 
expectedOutput_hollow_7 += "   *\n"; 
checkAssert("generateDiamond",["hollow",5],actualOutput_hollow_5,expectedOutput_hollow_5);

let actualOutput_angled_5 = generateDiamond({ type : "angled",height : 5 });
let expectedOutput_angled_5 = "";
expectedOutput_angled_5 += "  *\n"; 
expectedOutput_angled_5 += " / \\\n"; 
expectedOutput_angled_5 += "*   *\n"; 
expectedOutput_angled_5 += " \\ /\n"; 
expectedOutput_angled_5 += "  *\n"; 
checkAssert("generateDiamond",["angled",5],actualOutput_angled_5,expectedOutput_angled_5);

let actualOutput_angled_7 = generateDiamond({ type : "angled",height : 7 });
let expectedOutput_angled_7 ="";
expectedOutput_angled_7 += "   *\n"
expectedOutput_angled_7 += "  / \\\n"
expectedOutput_angled_7 += " /   \\\n"
expectedOutput_angled_7 += "*     *\n"
expectedOutput_angled_7 += " \\   /\n"
expectedOutput_angled_7 += "  \\ /\n"
expectedOutput_angled_7 += "   *\n"
checkAssert("generateDiamond",["angled",7],actualOutput_angled_7,expectedOutput_angled_7);
