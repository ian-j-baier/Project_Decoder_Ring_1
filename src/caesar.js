// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  

  function caesar(input, shift = 0, encode = true) { //set shift value to 0 on default to avoid a catch statement
    if(shift == 0|| shift > 25 || shift < -25) return false; //if shift is zero, greater than 25, or less than -25, it will return false early.
    input = input.toLowerCase(); //sets the input string to all lowercase letters
    const encodedMessage = []; //Variable holding a value of an empty array which will house our new string.
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; //the alphabet for reference
    const searchArray = [...alphabet,...alphabet, ...alphabet]; // repeating alphabet 3x removes necessity to multiple conditions check
    shift = (encode == true) ? shift : shift*(-1); //different shift for encoding or decoding
    for(letter of input){ //loops through each letter in the string
      const letterPosition = alphabet.indexOf(letter); //defining letterPosition as an index in the alphabet
      if(!alphabet.includes(letter)){  //if that letter is not part of the alphabet (such as a number, "!", "?")...
        encodedMessage.push(letter);  //it will push to the encodedMessage array
      } else {  //if the letter is in the alphabet...
        encodedMessage.push(searchArray[letterPosition + 26 + shift]); //it will proceed with the shift.
      }
    }
    return encodedMessage.join("") //returns the encoded message with included spacing.
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
