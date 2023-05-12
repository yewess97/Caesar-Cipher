// A caesar cipher function that takes in a string, the shift factor (key), and a process to determine whether to encrypt or decrypt the string
export function caesarCipher (string, key, process) {
  // if the key is greater than 26, then we need to get the remainder of the key divided by 26
  key %= 26;
  // converting the string to lower case
  let lowerCaseString = string.toLowerCase();
  // an array of the alphabet
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // a variable to store the new string
  let newString = '';

  // looping through the string
  for (let index in lowerCaseString) {
    // getting the current letter
    let currentLetter = lowerCaseString[index];

    // if the current letter is a space, then we add it to the new string and continue to the next iteration
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }

    // getting the index of the current letter in the alphabet array
    let currentIndex = alphabet.indexOf(currentLetter);

    // getting the new index of the current letter
    let newIndex = currentIndex + key * process;

    // if the new index is greater than 25, then we need to subtract 26 from it
    if (newIndex > 25) {
      newIndex -= 26;
    }

    // if the new index is less than 0, then we need to add 26 to it
    if (newIndex < 0) {
      newIndex += 26;
    }

    // if the current letter is uppercase, then we add the new letter to the new string in uppercase, otherwise we add it in lowercase to the new string, and then continue to the next iteration of the loop
    string[index] === string[index].toUpperCase()
      ? newString += alphabet[newIndex].toUpperCase()
      : newString += alphabet[newIndex];

  }

  // returning the new string
  return newString;
}