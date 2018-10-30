const patternUtil = require('./patternUtil.js');
const {readUserInput, generateSymbolPattern, generateLines, halfOfHeight, starAtStartEnd, repeatCharacter} = patternUtil;

const generateLeft = function(height){
  let generateTriangle="";
  for(let starIndex = 1; starIndex <= height; starIndex++){
    for(let heightIndex = 1; heightIndex <= starIndex; heightIndex++){
      generateTriangle += "*"; 
    }
    generateTriangle +="\n";
  }
  return generateTriangle;
}

const generateRight = function(height){
  let generateTriangle="";
  let spaceCount=height-1;
  for(let starIndex = 1; starIndex <= height; starIndex++){
    for(let noOfSpaces = spaceCount; noOfSpaces >= 1; noOfSpaces--){
      generateTriangle +=" ";
    }
    for(let heightIndex = 1; heightIndex <= starIndex; heightIndex++){
      generateTriangle+="*";
    }
    generateTriangle+="\n";
    spaceCount--;
  }
  return generateTriangle;
}

const generateTriangle = function(patternSpecification){
  let type = patternSpecification.type;
  let height = patternSpecification.height;
  let pattern = [];

  pattern["left"] = generateLeft;
  pattern["right"] = generateRight;
  
  return pattern[type](height);
}

const createFilledRect = function(height,width){
  let delimiter = "\n";
  let requiredRectangle = "";
  for(let lineIndex=0; lineIndex<height; lineIndex++){
    requiredRectangle += repeatCharacter("*",width) + delimiter;
  }
  return requiredRectangle;
}

const createAlternateRect= function(height,width){
  let requiredRectangle = "";
  let delimiter = "";
  for(let lineIndex2=height; lineIndex2>0; lineIndex2--){
    requiredRectangle += delimiter;
    delimiter = "\n";
    requiredRectangle += repeatCharacter("*",width);
    lineIndex2=lineIndex2-1;
    if(lineIndex2>0){
      requiredRectangle += delimiter
      requiredRectangle += repeatCharacter("-",width);
    }
  }
  return requiredRectangle;
}

const createEmptyRect = function(height,width){
  let requiredRectangle = "";
  let delimiter = "\n";
  requiredRectangle = repeatCharacter("*",width) + delimiter;
  for(let lineIndex3 = 2; lineIndex3 < height; lineIndex3++ ){
    requiredRectangle += starAtStartEnd(width) + delimiter;
  }
  requiredRectangle += repeatCharacter("*",width);
  return requiredRectangle;
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
  let height = patternSpecification.height;
  let pattern = [];

  if(height %2 == 0){
    height = height-1;
  }
  let upperTriangle ="";
  let lowerTriangle ="";
  upperTriangle += generateSymbolPattern(" ",(height/2));
  upperTriangle += generateSymbolPattern("*",1);
  upperTriangle += "\n";
  lowerTriangle = upperTriangle;

  pattern["filled"] = createFilledDiamond;
  pattern["hollow"] = createHollowDiamond;
  pattern["angled"] =  createAngledDiamond;
  return pattern[type](height,upperTriangle,lowerTriangle);
}

module.exports = {generateLeft,
  generateRight,
  generateTriangle,
  createFilledRect,
  createAlternateRect,
  createEmptyRect,
  generateRectangle,
  createFilledDiamond,
  createHollowDiamond,
  createAngledDiamond,
  generateDiamond}
