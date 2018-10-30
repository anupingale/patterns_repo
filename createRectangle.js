const generateRectangle = require("./src/patternLib.js").generateRectangle;
const readUserInput = require("./src/patternUtil.js").readUserInput;

const main = function() {
  let patternSpecification = readUserInput(process.argv);
  console.log(generateRectangle(patternSpecification));
}

main();

