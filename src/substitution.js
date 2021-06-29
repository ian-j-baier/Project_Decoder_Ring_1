// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function inputChecker(alphabet){
    switch(true){
      case (alphabet === undefined): //if theres no alphabet, return false.
        return false;
      case (alphabet.length != 26): //if the alphabet provided doesnt contain enough digits, return false
        return false;
      default: //otherwise, search for duplicates
        for (letter of alphabet){ //unique letter's index will always equal last index
          if(alphabet.indexOf(letter) != alphabet.lastIndexOf(letter)) return false;
      }
    }
  }

  function substitution(input, alphabet, encode = true) {
    if (inputChecker(alphabet)===false) return false; //exiting early
    const originalAlphabet = "abcdefghijklmnopqrstuvwxyz "; //alphabet, including space
    const codeAlphabet = [...alphabet," "]; //substitute alphabet, including space
    input = input.toLowerCase(); //puts input to lowercase
    const code = []; //holds output

    if (encode === true){ //if encode is true
      for (let i = 0; i < input.length; i++){ //loop through input and...
        code.push(codeAlphabet[originalAlphabet.indexOf(input[i])]); //...push letter from codeAlphabet that represents originalAlphabets place.
      }
    } else { //if encode is false
      for (let i = 0; i < input.length; i++){ //loop through input and...
        code.push(originalAlphabet[codeAlphabet.indexOf(input[i])]); //..push letter for originalAlphabet that represents originalAlphabets place.
      }
    }
    return code.join(""); //returns the code array with the output/encoded/decoded value as full words including spaces instead of just individual letters.
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
