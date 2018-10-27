const library = require("./src/patternLib.js");
const {getTrianglePattern, heightOfTriangle} = library;

const main = function() {
  let pattern = process.argv[2];
  let heightOfTriangle = process.argv[3];
  let patternGenerator = getTrianglePattern(pattern);
  console.log(patternGenerator(heightOfTriangle));
}

main();

