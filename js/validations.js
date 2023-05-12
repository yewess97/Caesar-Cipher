import * as variables from './variables.js';

// Validate user text input
function userTextInputError () {
  let userTextError = '';

  if (variables.userText.value === '') {
    userTextError = 'Text is required';
  } else if (typeof variables.userText.value !== 'string') {
    userTextError = 'Please enter a valid text';
  }

  return userTextError;
}

// Validate key input
function keyInputError () {
  let keyInputError = '';

  if (variables.keyInput.value === '') {
    keyInputError = 'Key is required';
  } else if (!Number(variables.keyInput.value)) {
    keyInputError = 'Please enter a valid key';
  } else if (Number(variables.keyInput.value) < 0) {
    keyInputError = 'Please enter a positive key';
  } else if (Number(variables.keyInput.value) === 0) {
    keyInputError = 'Please enter a key greater than 0';
  } else if (Number(variables.keyInput.value) > 25) {
    keyInputError = 'Please enter a key less than or equal to 25';
  }

  return keyInputError;
}

// Validate selected process
function selectedProcessError () {
  let selectedProcessError = '';

  if (!variables.encryptProcess.checked && !variables.decryptProcess.checked) {
    selectedProcessError = 'Please choose a process';
  } else if (variables.encryptProcess.checked && variables.decryptProcess.checked) {
    selectedProcessError = 'Please choose only one process';
  } else if (Number(variables.encryptProcess.value) !== 1 || Number(variables.decryptProcess.value) !== -1) {
    selectedProcessError = 'Please enter a valid process';
  }

  return selectedProcessError;
}



// Export functions
export { userTextInputError, keyInputError, selectedProcessError };