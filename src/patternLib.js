const patternUtil = require('./patternUtil.js');
const {readUserInput,
  leftJustify,
  createDiamondSeries,
  rightJustify,
  centerJustify,
  generateLines,
  repeatCharacter} = patternUtil;

const filledLine = generateLines("*","*","*");
const dashLine = generateLines("-","-","-");
const hollowLine = generateLines("*"," ","*");
const upperAngledLine = generateLines("/"," ","\\");

const generateLeftTriangle = function(height){
  let justify = leftJustify(height);
  let generateTriangle = [];
  for(let starIndex = 1; starIndex <= height; starIndex++){
    let line = repeatCharacter("*",starIndex).join("");
    generateTriangle.push(justify(line));
  }
  return generateTriangle;
}

const generateRightTriangle = function(height){
  let generateTriangle = [];
  let justify = rightJustify(height);
  for(let starIndex = 1; starIndex <= height; starIndex++){
    let line = repeatCharacter("*",starIndex).join("");
    generateTriangle.push(justify(line));
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
  let emptyLine = hollowLine(width);
  let emptyRect = [starLine];
  for(let index = 1; index < height-1; index++) {
    emptyRect.push(emptyLine);
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

const createFilledDiamond = function(height,peak){
  let seriesOfLines = createDiamondSeries(height);
  let justify = centerJustify(height);
  let diamond = seriesOfLines.map(filledLine);
  diamond.push(peak);
  diamond.unshift(peak);
  return diamond.map(justify);
}

const createHollowDiamond = function(height,peak){
  let seriesOfLines = createDiamondSeries(height);
  let justify = centerJustify(height);
  let diamond = seriesOfLines.map(hollowLine);
  diamond.push(peak);
  diamond.unshift(peak);
  return diamond.map(justify);
}

const createAngledDiamond = function(height,peak){
  let justify = centerJustify(height);
  let seriesOfLines = createDiamondSeries(height);
  let halfWidth = (seriesOfLines.length/2);
  let upperHalf = seriesOfLines.slice(0,halfWidth);
  let upperPart = upperHalf.map(upperAngledLine);
  let lower = upperPart.slice();
  let lowerHalf = lower.reverse();
  let lowerPart = lowerHalf.map(element => element.split("").reverse().join(""));
  upperPart.push(hollowLine(height));
  let diamond = upperPart.concat(lowerPart);
  diamond.push(peak);
  diamond.unshift(peak);
  return diamond.map(justify);
}

const generateDiamond = function(patternSpecification){
  let type = patternSpecification.type;
  let checkHeight  = [patternSpecification.height-1,patternSpecification.height];
  let height = checkHeight[patternSpecification.height % 2];
  let pattern = [];
  let peak = "*";

  pattern["filled"] = createFilledDiamond;
  pattern["hollow"] = createHollowDiamond;
  pattern["angled"] =  createAngledDiamond;
  return pattern[type](height,peak).join("\n");
}

module.exports = {
  generateTriangle,
  generateRectangle,
  generateDiamond}
