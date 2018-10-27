const generateLeft = function(height){
  let generateTriangle="";
  for(let starIndex = 1; starIndex <= height; starIndex++){
    for(let heightIndex = 1; heightIndex <= starIndex; heightIndex++){
      generateTriangle += "*"; 
    }
    generateTriangle +="\n";
  }
  return generateTriangle;
}

const generateRight = function(height){
  let generateTriangle="";
  let spaceCount=height-1;
  for(let starIndex = 1; starIndex <= height; starIndex++){
    for(let noOfSpaces = spaceCount; noOfSpaces >= 1; noOfSpaces--){
      generateTriangle +=" ";
    }
    for(let heightIndex = 1; heightIndex <= starIndex; heightIndex++){
      generateTriangle+="*";
    }
    generateTriangle+="\n";
    spaceCount--;
  }
  return generateTriangle;
}

const getGeneratedPattern = function(pattern){
  if(pattern=="left"){
    return generateLeft;
  }
  if(pattern=="right"){
    return generateRight;
  }
}

let pattern = process.argv[2];
let heightOfTriangle = process.argv[3];
let patternGenerator = getGeneratedPattern(pattern);
console.log(patternGenerator(heightOfTriangle));
