const generateRectangle = require("./src/patternLib.js").generateRectangle;

const main = function() {
  let pattern = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  console.log(generateRectangle(pattern,width,height));
}

main();

