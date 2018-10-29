const repeatCharacter = function(character,width){
  return new Array(width).fill(character).join("");
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


module.exports = { generateSymbolPattern, generateLines, starAtStartEnd, halfOfHeight, repeatCharacter};
