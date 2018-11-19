const repeatCharacter = function(character,width){
  return new Array(width).fill(character);
}

const rightJustify = function(message,width) {
  return leftJustify(message,width).split("").reverse().join("");
}

const createDiamondSeries = function(height){
  let series = [];
  for (let count = 3 ; count <= height ; count+= 2){
    series.push(count);
  }
  let duplicateSeries = series.slice(0);
  duplicateSeries.pop();
  let reversed = duplicateSeries.reverse();
  return series.concat(reversed);
}

const leftJustify = function(message,width) {
  let spaceCount = width - message.length;
  let spacedLine = repeatCharacter(" ",spaceCount).join("");
  return message+spacedLine;
}

const centerJustify = function(message,width) {
  let spaceCount = width - message.length;
  let spacedLine = new Array(spaceCount/2).fill(" ").join("");
  return spacedLine+message+spacedLine;
}

const generateLines = function(firstSymbol,middleSymbol,lastSymbol){
  return function(length) {
    let line ="";
    line += firstSymbol;
    line += repeatCharacter(middleSymbol,length-2).join("");
    line += lastSymbol;
    return line;
  }
}

const halfOfHeight = function(height) {
  return Math.floor(height/2);
}

const starAtStartEnd = function(widthForStar){
  let line = "*";
  line = line + repeatCharacter(" ",widthForStar-2).join("");
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

module.exports = {createDiamondSeries, centerJustify, rightJustify, leftJustify, readUserInput, generateSymbolPattern, generateLines, starAtStartEnd, halfOfHeight, repeatCharacter};
