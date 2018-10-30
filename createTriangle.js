const generateTriangle = require("./src/patternLib.js").generateTriangle;
const readUserInput = require("./src/patternUtil.js").readUserInput;

const main = function() {
  let patternSpecification = readUserInput(process.argv);
  console.log(generateTriangle(patternSpecification));
}

main();

