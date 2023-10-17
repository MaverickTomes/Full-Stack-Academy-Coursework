let myInstraments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];

console.log(myInstraments)

myInstraments.push("tuba", "bassoon");
myInstraments.splice(2, 1);
myInstraments.unshift("saxophone");

console.log(myInstraments)

function getFirstAndLastInstruments(myInstraments) {
  const output = [];
  output.push(myInstraments[0]);
  output.push(myInstraments[myInstraments.length - 1]);
  return output;
}

console.log(myInstraments)

function getFirstThreeInstrumentsWithLoop(myInstraments) {
  const output = [];
  for (let i = 0; i < 3; i++) {
    output.push(myInstraments[i]);
  }
  return output;
}

console.log(myInstraments)

function getTInstruments(myInstraments) {
  const output = [];
  for (let i = 0; i < myInstraments.length; i++) {
   const instrument = myInstraments[i];
    // Remember we can also use string indexes!
    if (instrument[0] === "t") { 
      output.push(myInstraments);
    }
  }
  return output;
}

console.log(myInstraments)

function getLongestNamedInstrument(instruments) {
  let longestInstrument = "";
  // Here we use a for..of loop as syntactic sugar for the index loop
  for (const instrument of instruments) {
    if (instrument.length > longestInstrument.length) {
      longestInstrument = instrument;
    }
  }
  return longestInstrument;
}

console.log(myInstraments)

//things were not changing in the guided practice and I'm not sure why. Is it because I need
//to commmet out certain sections. The syntax is incredibly difficult for me currently.