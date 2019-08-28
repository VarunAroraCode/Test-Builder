// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if(cardNumber === null||cardNumber === undefined)
  {
  	return null;
  }

  var length = cardNumber.length;

  var prefix1 = cardNumber.subString(0,1);
  var prefix2 = cardNumber.subString(0,2);
  var prefix3 = cardNumber.subString(0,3);
  var prefix4 = cardNumber.subString(0,4);
  var prefix6 = cardNumber.subString(0,6);


  if((length === 13 || length === 16 || length === 19) && prefix1 ==="4")
  {
  	return "Visa";
  }

  if(length === 14 && (prefix2 === "38" || prefix2 === "39"))
  {
  	return "Diner\'s Club";
  }
  if (length === 16 && (parseInt(prefix2) >= 51 && parseInt(prefix2) <= 55)) 
  {
  	return "MasterCard";
  }

  if(length === 15 && (prefix2 === "37" || prefix2 === "34"))
  {
  	return "American Express";
  }
  if((length >= 16 && length <= 19) &&
  	(parseInt(prefix6) >= 622126 && parseInt(prefix6) <= 622925) || 
  	 parseInt(prefix3) >= 624 && parseInt(prefix3) <= 626 ||
  	 parseInt(prefix4) >= 6282 && parseInt(prefix4) <= 6288)
  {
  	return "China UnionPay";
  }

  if((length === 16 || length === 19)&& (prefix4 === "6011"|| 
  	 (parseInt(prefix3) >= 644 && parseInt(prefix3) <=649) ||
  	  prefix2 === "65"))
  {
  	return "Discover"
  }
  if(( (length >= 12 && length <= 19) && (prefix4 === "5018" ||
    prefix4 === "5020" || prefix4 === "5038" || prefix4 === "6304"))
  {
	return "Maestro";
  }

  return "Card number not found" ;

};


