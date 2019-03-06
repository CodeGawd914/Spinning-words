/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
*/

// first we have to split the string up to get each individual word.

function spinWords(string){
  let words = string.split(' ')
  // after we have each word we want to check and see if the length is 5 or more at that index of word and if it is reverse the word
  words.forEach((word,index) => {
    if (word.length >= 5){
      words[index] = word.split('').reverse().join('')
    }
  })
  return words.join(' ')
}
