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

const generateDiamond = function(height,generatePattern){
  let diamond ="";
  if(height %2 == 0){
    height = height-1;
  }
  let upperTriangle ="";
  let lowerTriangle ="";
  upperTriangle += generateSymbolPattern(" ",(height/2));
  upperTriangle += generateSymbolPattern("*",1);
  upperTriangle += "\n";
  lowerTriangle = upperTriangle;
  diamond = generatePattern(height,upperTriangle,lowerTriangle);
  return diamond;
}

const getPatternGenerator = function(pattern){
  if(pattern == "filled"){
    return createFilledDiamond;
  }
  if(pattern == "hollow"){
    return createHollowDiamond;
  }
  if(pattern == "angled"){
    return createAngledDiamond;
  }
}

const main = function(){
  let pattern = process.argv[2];
  let diamondHeight = +process.argv[3];
  let generatePattern = getPatternGenerator(pattern);
  let generatedDiamond = generateDiamond(diamondHeight,generatePattern);
  return generatedDiamond;
}

console.log(main());
