const generateDiamond = require("./src/patternLib.js").generateDiamond;
const readUserInput = require("./src/patternUtil.js").readUserInput;

const main = function(){
  let patternSpecification = readUserInput(process.argv);
  console.log(generateDiamond(patternSpecification));
}

main();
