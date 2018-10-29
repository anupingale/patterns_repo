const repeatCharacter = function(character,width){
  return new Array(width).fill(character).join("");
}

const starAtStartEnd = function(widthForStar){
  let line = "*";
  line = line + repeatCharacter(" ",widthForStar-2);
  line = line + "*";
  return line;
}

module.exports = {starAtStartEnd,repeatCharacter};
