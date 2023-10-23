class Sentence {
  constructor(data) {
  this.data = data ;
  }
  countWords(){
    return this.data.split (","). length; 
  }
  hasletter(letter) {
    return this.data.indexOf(letter) !== -1
  }
  countLetter(letter) {
    let count = 0;
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i]  === letter) {
        count++;
      }
      
    }
    return count;
  }
    }
  

const data = window.prompt("Enter a sentence", "the quick brown fox jumped over the fence");
const s1 = new Sentence(data);
console.log(s1.countWords());
console.log(s1.hasletter("x"));
console.log(s1.hasletter("a"));
console.log(s1.countLetter("t"));
console.log(s1.countLetter(" ")); //how many spaces, returned 7 spaces