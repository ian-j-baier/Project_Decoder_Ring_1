// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // Grid of letter and their code value
  const grid = [
    {letter: "a", code: "11"},
    {letter: "b", code: "21"},
    {letter: "c", code: "31"},
    {letter: "d", code: "41"},
    {letter: "e", code: "51"},
    {letter: "f", code: "12"},
    {letter: "g", code: "22"},
    {letter: "h", code: "32"},
    {letter: "i", code: "42"},
    {letter: "j", code: "42"},
    {letter: "k", code: "52"},
    {letter: "l", code: "13"},
    {letter: "m", code: "23"},
    {letter: "n", code: "33"},
    {letter: "o", code: "43"},
    {letter: "p", code: "53"},
    {letter: "q", code: "14"},
    {letter: "r", code: "24"},
    {letter: "s", code: "34"},
    {letter: "t", code: "44"},
    {letter: "u", code: "54"},
    {letter: "v", code: "15"},
    {letter: "w", code: "25"},
    {letter: "x", code: "35"},
    {letter: "y", code: "45"},
    {letter: "z", code: "55"},
  ];

  function polybius(input, encode = true) {
    if(!encode && input.replace(/\s/g, "").length % 2 !==0){  //if encode is not included and input divisible by 2 (since double digit codes) return false
    return false;
  }
    if(input && encode) {
      return encodeMessage(input.toLowerCase()); //if there is input and encode = true, call encodeMessage with input set to lowercase
    }

    if(input && !encode) {
      return decodeMessage(input.toLowerCase()); //if there is input and encode = false, call decodeMessage with input set to lowercase
    }
  }
  function encodeMessage(input){ //takes a string as input
    let output = ""; //holds the output
    for (let i = 0; i < input.length; i++){ //loops through the input
      const code = input.charCodeAt(i); //convers input to charCode
      if (code > 96 && code < 123) { //compares input within range of char codes representing lowercaase letters
        output += grid.find(item => item.letter === input[i]).code; //uses .find to the code associated with the letter in the grid
      }else {
        output += input[i] //adds it to output
      }
    }
    return output;
  }
  function decodeMessage(input){ //takes a string as input
    let output = ""; //holds the output
    let encoded = input.split(" "); //splits the input into individual letters
    encoded.forEach(chunk => {
      let pairs = chunk.match(/\d{2}/g); //defines pairs as a chunk of 2 digits
      pairs.forEach(pair => {
        if (pair === "42") {  //if pair is 42 it adds (i/j) to the output
          output += "(i/j)";
        } else {
          const letter = grid.find(item => item.code === pair).letter; //else it finds the letter associated with that pair
          if (letter.length){
            output += letter; //adds letter to output
          }
        }
      });
      output += " "; //re-adds spaces
    });
    return output.trim(); //removes extra space from beginning and end of output
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius }
