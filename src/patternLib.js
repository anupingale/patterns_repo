const patternUtil = require('./patternUtil.js');
const {readUserInput,
  leftJustify,
  rightJustify,
  centerJustify,
  generateSymbolPattern,
  generateLines,
  halfOfHeight,
  starAtStartEnd,
  repeatCharacter} = patternUtil;

const filledLine = generateLines("*","*","*");
const dashLine = generateLines("-","-","-");
const hollowLine = generateLines("*"," ","*");
const upperAngledLine = generateLines("/"," ","\\");
const lowerAngledLine = generateLines("\\"," ","/");

const generateLeftTriangle = function(height){
  let generateTriangle = [];
  for(let starIndex = 1; starIndex <= height; starIndex++){
    let line = repeatCharacter("*",starIndex).join("");
    generateTriangle.push(leftJustify(line,height));
  }
  return generateTriangle;
}

const generateRightTriangle = function(height){
  let generateTriangle = [];
  for(let starIndex = 1; starIndex <= height; starIndex++){
    let line = repeatCharacter("*",starIndex).join("");
    generateTriangle.push(rightJustify(line,height));
  }
  return generateTriangle;
}

const generateTriangle = function(patternSpecification){
  let type = patternSpecification.type;
  let height = patternSpecification.height;
  let pattern = [];

  pattern["left"] = generateLeftTriangle;
  pattern["right"] = generateRightTriangle;
  return pattern[type](height).join("\n");
}

const createFilledRect = function(height,width){
  let line = repeatCharacter("*",width).join("");
  return repeatCharacter(line,height);
}

const createAlternateRect= function(height,width){
  let symbol = ["*","-"];
  let alternateRect = [];
  for(let index = 0; index < height; index++) {
    let filter = symbol[index % 2];
    alternateRect.push(repeatCharacter(filter,width).join(""));
  }
  return alternateRect;
}

const createEmptyRect = function(height,width){
  let starLine = repeatCharacter("*",width).join("");
  let hollowLine = starAtStartEnd(width);
  let emptyRect = [starLine];
  for(let index = 1; index < height-1; index++) {
    emptyRect.push(hollowLine);
  }
  emptyRect.push(starLine);
  return emptyRect;
}

const generateRectangle = function(patternSpecification) {
  let width = patternSpecification.width;
  let height = patternSpecification.height;
  let type = patternSpecification.type;
  let pattern = [];

  pattern["filled"] = createFilledRect;
  pattern["empty"] = createEmptyRect;
  pattern["alternative"] = createAlternateRect;
  return pattern[type](width,height).join("\n");
}

const createFilledDiamond = function(height,upperPeak,lowerPeak){
  let limit = halfOfHeight(height);
  for(let lineNumber = 1; lineNumber <= limit-1; lineNumber++) {
    let createLine = "";
    createLine += generateSymbolPattern(" ",limit-lineNumber);
    createLine += generateSymbolPattern("*",2*lineNumber+1);
    createLine +="\n";
    upperPeak += createLine;
    lowerPeak = createLine+lowerPeak;
  }
  let middleLine = filledLine(height);
  return upperPeak+middleLine+"\n"+lowerPeak;
}

const createHollowDiamond = function(height,upperPeak,lowerPeak){
  let limit = halfOfHeight(height);
  for(let lineNumber = 1; lineNumber <= limit-1; lineNumber++) {
    let createLine = "";
    createLine += generateSymbolPattern(" ",limit-lineNumber);
    createLine += hollowLine(2*lineNumber+1);
    createLine +="\n";
    upperPeak += createLine;
    lowerPeak = createLine+lowerPeak;
  }
  let middleLine = hollowLine(height);
  return upperPeak+middleLine+"\n"+lowerPeak;
}

const createAngledDiamond = function(height,upperPeak,lowerPeak){
  let limit = halfOfHeight(height);
  let spaces=3;
  for(let lineNumber = 1; lineNumber <= limit-1; lineNumber++) {
    let createLine = "";
    createLine += generateSymbolPattern(" ",limit-lineNumber);
    createLine += upperAngledLine(2*lineNumber+1);
    createLine +="\n";
    upperPeak +=createLine;
  }
  for(let lineNumber = limit-1; lineNumber >= 1; lineNumber--){
    let createLine ="";
    createLine += generateSymbolPattern(" ",lineNumber);
    createLine += lowerAngledLine(spaces);
    createLine +="\n";
    lowerPeak = createLine + lowerPeak;
    spaces+=2;
  }
  let middleLine = hollowLine(height);
  return upperPeak+middleLine+"\n"+lowerPeak;
}

const generateDiamond = function(patternSpecification){
  let type = patternSpecification.type;
  let checkHeight  = [patternSpecification.height-1,patternSpecification.height];
  let height = checkHeight[patternSpecification.height % 2];
  let pattern = [];

  let upperPeak = centerJustify("*",height) + "\n"; 
  let lowerPeak = upperPeak;

  pattern["filled"] = createFilledDiamond;
  pattern["hollow"] = createHollowDiamond;
  pattern["angled"] =  createAngledDiamond;
  return pattern[type](height,upperPeak,lowerPeak);
}

module.exports = {
  generateTriangle,
  generateRectangle,
  generateDiamond}
