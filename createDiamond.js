const generateDiamond = require("./src/patternLib.js").generateDiamond;

const main = function(){
  let pattern = process.argv[2];
  let diamondHeight = +process.argv[3];
  console.log(generateDiamond(pattern,diamondHeight));
}

main();
