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

const generateLeftTriangle = function(height){
  let generateTriangle = [];
  for(let starIndex = 1; starIndex <= height; starIndex++){
    let line = repeatCharacter("*",starIndex).join("");
    generateTriangle.push(leftJustify(line,height));
  }
  return generateTriangle.join("\n");
}

const generateRightTriangle = function(height){
  let generateTriangle = [];
  for(let starIndex = 1; starIndex <= height; starIndex++){
    let line = repeatCharacter("*",starIndex).join("");
    generateTriangle.push(rightJustify(line,height));
  }
  return generateTriangle.join("\n");
}

const generateTriangle = function(patternSpecification){
  let type = patternSpecification.type;
  let height = patternSpecification.height;
  let pattern = [];

  pattern["left"] = generateLeftTriangle;
  pattern["right"] = generateRightTriangle;
  return pattern[type](height);
}

const createFilledRect = function(height,width){
  let line = repeatCharacter("*",width).join("") + "\n";
  return repeatCharacter(line,height).join("");
}

const createAlternateRect= function(height,width){
  let symbol = ["*","-"];
  let alternateRect = [];
  for(let index = 0; index < height; index++) {
    let filter = symbol[index % 2];
    alternateRect.push(repeatCharacter(filter,width).join(""));
  }
  return alternateRect.join("\n");
}

const createEmptyRect = function(height,width){
  let starLine = repeatCharacter("*",width).join("") + "\n";
  let hollowLine = starAtStartEnd(width) + "\n";
  return starLine + repeatCharacter(hollowLine,height-2).join("") + starLine;
}

const generateRectangle = function(patternSpecification) {
  let width = patternSpecification.width;
  let height = patternSpecification.height;
  let type = patternSpecification.type;
  let pattern = [];

  pattern["filled"] = createFilledRect;
  pattern["empty"] = createEmptyRect;
  pattern["alternative"] = createAlternateRect;
  return pattern[type](width,height);
}

const createFilledDiamond = function(height,upperTriangle,lowerTriangle){
  let limit = halfOfHeight(height);
  for(let lineNumber = 1; lineNumber <= limit-1; lineNumber++) {
    let createLine = "";
    createLine += generateSymbolPattern(" ",limit-lineNumber);
    createLine += generateSymbolPattern("*",2*lineNumber+1);
    createLine +="\n";
    upperTriangle += createLine;
    lowerTriangle = createLine+lowerTriangle;
  }
  let middleLine = generateLines("*","*","*",(height));
  return upperTriangle+middleLine+"\n"+lowerTriangle;
}

const createHollowDiamond = function(height,upperTriangle,lowerTriangle){
  let limit = halfOfHeight(height);
  for(let lineNumber = 1; lineNumber <= limit-1; lineNumber++) {
    let createLine = "";
    createLine += generateSymbolPattern(" ",limit-lineNumber);
    createLine += generateLines("*"," ","*",2*lineNumber+1);
    createLine +="\n";
    upperTriangle += createLine;
    lowerTriangle = createLine+lowerTriangle;
  }
  let middleLine = generateLines("*"," ","*",(height));
  return upperTriangle+middleLine+"\n"+lowerTriangle;
}

const createAngledDiamond = function(height,upperTriangle,lowerTriangle){
  let limit = halfOfHeight(height);
  let spaces=3;
  for(let lineNumber = 1; lineNumber <= limit-1; lineNumber++) {
    let createLine = "";
    createLine += generateSymbolPattern(" ",limit-lineNumber);
    createLine += generateLines("/"," ","\\",2*lineNumber+1);
    createLine +="\n";
    upperTriangle +=createLine;
  }
  for(let lineNumber = limit-1; lineNumber >= 1; lineNumber--){
    let createLine ="";
    createLine += generateSymbolPattern(" ",lineNumber);
    createLine += generateLines("\\"," ","/",spaces);
    createLine +="\n";
    lowerTriangle = createLine + lowerTriangle;
    spaces+=2;
  }
  let middleLine = generateLines("*"," ","*",(height));
  return upperTriangle+middleLine+"\n"+lowerTriangle;
}

const generateDiamond = function(patternSpecification){
  let type = patternSpecification.type;
  let checkHeight  = [patternSpecification.height-1,patternSpecification.height];
  let height = checkHeight[patternSpecification.height % 2];
  let pattern = [];

  let upperTriangle = centerJustify("*",height) + "\n"; 
  let lowerTriangle = upperTriangle;

  pattern["filled"] = createFilledDiamond;
  pattern["hollow"] = createHollowDiamond;
  pattern["angled"] =  createAngledDiamond;
  return pattern[type](height,upperTriangle,lowerTriangle);
}

module.exports = {
  generateTriangle,
  generateRectangle,
  generateDiamond}
