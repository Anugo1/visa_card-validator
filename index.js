function visacard(number) {
    const regex = new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/);
// the above regex pattern is explained
//^:shows it must start with a digit which is four in the front
//[0-9]{12} indicates the number accepted which is 12 with excluding 4
//?  indicates 0 - 1 times 
//[0-9]{3} represents the next three digits should be any between 0-9, since new visa cards are 16
// $ this represents the ending of the string

//conditional statement on what to console.log when the test is true and when its false
  if (regex.test(number) == true ) {
   return "Visa card verified,payment complete";
  }

  else {
       return "enter a valid visa card number ";
  }
}
console.log("################ Enter your visa card number ################")


const card_number ="4682190319074148";
console.log(visacard(card_number))

// comment out this code to test for when the card is invalid

// const card_number ="415279860457";
// console.log(visacard(card_number))