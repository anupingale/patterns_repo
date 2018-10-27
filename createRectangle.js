const getRectanglePattern = require("./src/patternLib.js").getRectanglePattern;
const main = function() {
  let pattern = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  console.log(getRectanglePattern(pattern,width,height));
}

main();

