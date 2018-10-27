const library = require("./src/patternLib.js");
const {getDiamondPattern, generateDiamond} = library;

const main = function(){
  let pattern = process.argv[2];
  let diamondHeight = +process.argv[3];
  let generatedDiamond = getDiamondPattern(pattern,diamondHeight);
  console.log(generatedDiamond);
}

main();
