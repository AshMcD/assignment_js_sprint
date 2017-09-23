// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){

    	// Takes an array and returns the largest number.
     	largestNumber = arr[0]
       for(var i = 1; i < arr.length; i++){
       	if(arr[i] > largestNumber){
       		largestNumber = arr[i];
       	}
      }
      return largestNumber;
},

  reversed: function(str) {
    var splitString = str.split(""); // splits array into strings
    //use the reverse method to reverse the new array of strings
    var reversedArray = splitString.reverse();
    //put the reveresed string into an array
    var joined = reversedArray.join("");
    //return the joined string
    return joined;
  },

  loudSnakeCase: function(sentence) {

    var stripNonCharElements = sentence.replace(/[^A-Za-z ]/g, '');
    var splitString = stripNonCharElements.split(" ");
    var answer = [];
    var newWord;

     for(var i = 0; i < splitString.length; i++){
     var firstLetter = splitString[i][0];
     var restOfWord = splitString[i].slice(1);

     if(splitString[i] !== ""){
       newWord = firstLetter.toUpperCase() + restOfWord;
       answer.push(newWord);
     }
   }
   return answer.join("_");
  },


  compareArrays: function(array1, array2){
    length = 0;
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
          length++;
          continue;
      } else {
        return false;
    }
  }
  if (length === array2.length) {
    return true;
  }
  },

  fizzBuzz: function(number){
    // Takes an input of a number and returns an array containing all elements from 1 to that number.
    // Each element divisible by 3 is replaced by "FIZZ"
    // Each element divisible by 5 is replaced by "BUZZ"
    // Each element divisible by 3 AND 5 is replaced by "FIZZBUZZ"
    fizzBuzzArray = [];
    for (i = 1; i <= number; i++) {
      if (i%3 === 0 && i%5 === 0) {
        fizzBuzzArray.push('FIZZBUZZ')
      } else if (i%3 === 0) {
        fizzBuzzArray.push('FIZZ')
      } else if (i%5 === 0) {
        fizzBuzzArray.push('BUZZ')
      } else {
        fizzBuzzArray.push(i)
      }
    }

    return fizzBuzzArray;

  },

  myMap: function(array1, function1){
    var newArray = [];
    for (i=0; i < array1.length; i++) {
      newArray.push(function1(array1[i]));
    }
    return newArray;
  },

  primes: function(number){
    var primeArray = [];
    var prime = function(number) {
      if (number < 2) {
        return false;
      }
      for(var i = 2; i < number; i++){
   		if(number % i === 0){
   			return false;
   		}
   	}

       	return true;
       }
       for(var i = 2; i <= number; i++){
       	if(prime(i)){
      		primeArray.push(i);
       	}
       }
      return primeArray;
  },
}
