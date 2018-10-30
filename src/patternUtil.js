const repeatCharacter = function(character,width){
  return new Array(width).fill(character).join("");
}

const leftJustify = function(message,length) {
  let spaceCount = length - message.length;
  let spacedLine = repeatCharacter(" ",spaceCount);
  return message+spacedLine;
}

const generateLines = function(firstSymbol,middleSymbol,lastSymbol,length){
  let line ="";
  line += firstSymbol;
  line += repeatCharacter(middleSymbol,length-2);
  line += lastSymbol;
  return line;
}

const halfOfHeight = function(height) {
  return Math.floor(height/2);
}

const starAtStartEnd = function(widthForStar){
  let line = "*";
  line = line + repeatCharacter(" ",widthForStar-2);
  line = line + "*";
  return line;
}

const generateSymbolPattern = function(symbol,length){
  let symbolRow = "";
  for(let symbolIndex = 1; symbolIndex <= length; symbolIndex++){
    symbolRow += symbol;
  }
  return symbolRow;
}

const readUserInput = function(args) {
  let patternType = args[2];
  let height = +args[3];
  let width = +args[4];
  if(isNaN(width)) {
    width = height;
  }
  return { type : patternType, height : height, width : width}
}

module.exports = {leftJustify, readUserInput, generateSymbolPattern, generateLines, starAtStartEnd, halfOfHeight, repeatCharacter};
