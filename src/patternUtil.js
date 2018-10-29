const repeatCharacter = function(character,width){
  return new Array(width).fill(character).join("");
}

module.exports = {repeatCharacter};
