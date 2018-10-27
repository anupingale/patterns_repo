const generateTriangle = require("./src/patternLib.js").generateTriangle;

const main = function() {
  let pattern = process.argv[2];
  let heightOfTriangle = process.argv[3];
  console.log(generateTriangle(pattern,heightOfTriangle));
}

main();

