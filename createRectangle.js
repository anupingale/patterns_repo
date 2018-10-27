const library = require("./src/patternLib.js");
const {getRectanglePattern} = library;

const main = function() {
  let typeOfRectangle = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  let patternGenerator = getRectanglePattern(typeOfRectangle);
  console.log(patternGenerator(width,height));
}

main();

