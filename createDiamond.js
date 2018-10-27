const getDiamondPattern = require("./src/patternLib.js").getDiamondPattern;

const main = function(){
  let pattern = process.argv[2];
  let diamondHeight = +process.argv[3];
  console.log(getDiamondPattern(pattern,diamondHeight));
}

main();
