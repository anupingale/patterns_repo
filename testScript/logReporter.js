const justify = function(limit,msg) {
  let numberOfSpaces = limit-msg.length;
  let spaces = new Array(numberOfSpaces).fill(" ").join("");
  return msg+spaces;
}

let testNumber = {number:1};

const incrementTestNumber = function() {
  testNumber.number++;
}

const getSerialNumber = function() {
  return testNumber.number;
}

const createDottedLine = function() {
  let character = String.fromCharCode(9472);
  dottedLine = new Array(175).fill(character);
  dottedLine.unshift("+");
  dottedLine.push("+");
  console.log(dottedLine.join(""));
}

const printLog = function(func,args,actual,expected) {
  let log = justify(3,getSerialNumber().toString()) + "|";
  log = log + justify(18,func) + "|";
  log = log + justify(22,JSON.stringify(args)) + "|";
  log = log + justify(70,JSON.stringify(actual)) + "|";
  log = log + justify(70,JSON.stringify(expected)) ;
  incrementTestNumber();
  console.log(log);
  createDottedLine();
}

exports.printLog = printLog;
