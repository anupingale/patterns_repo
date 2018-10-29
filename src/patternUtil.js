const repeatCharacter = function(character,width){
  return new Array(width).fill(character).join("");
}

const repeatStar = function(width){
  return repeatCharacter("*",width);
}

const repeatDash = function(width){
  return repeatCharacter("-",width);
}

const starAtStartEnd = function(widthForStar){
  let line = "*";
  for(index=2; index<widthForStar; index++){
    line = line + " ";
  }
  line = line + "*";
  return line;
}

const halfOfHeight = function(height){
  return height/2;
}

const generateSymbolPattern = function(symbol,length){
  let symbolRow = "";
  for(let symbolIndex = 1; symbolIndex <= length; symbolIndex++){
    symbolRow += symbol;
  }
  return symbolRow;
}

const generateLines = function(firstSymbol,middleSymbol,lastSymbol,length){
  let line ="";
  line += firstSymbol;
  line += generateSymbolPattern(middleSymbol,length-2);
  line += lastSymbol;
  return line;
}

module.exports = {
  repeatCharacter,
  repeatStar,
  repeatDash,
  starAtStartEnd,
  halfOfHeight,
  generateSymbolPattern,
  generateLines}
