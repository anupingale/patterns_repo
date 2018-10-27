const getTrianglePattern = require("./src/patternLib.js").getTrianglePattern;

const main = function() {
  let pattern = process.argv[2];
  let heightOfTriangle = process.argv[3];
  console.log(getTrianglePattern(pattern,heightOfTriangle));
}

main();

