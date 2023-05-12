import { userTextInputError, keyInputError, selectedProcessError } from './validations.js';
import * as variables from './variables.js';

export function errorsConditions() {
  // If there is a user text input error, display the error message, otherwise, remove the error message
  if (userTextInputError()) {
    variables.userTextInputErrorElem.textContent = userTextInputError();
  } else {
    variables.userTextInputErrorElem.textContent = '';
  }

// If there is a key input error, display the error message, otherwise, remove the error message
  if (keyInputError()) {
    variables.keyInputErrorElem.textContent = keyInputError();
  } else {
    variables.keyInputErrorElem.textContent = '';
  }

// If there is a selected process error, display the error message, otherwise, remove the error message
  if (selectedProcessError()) {
    variables.selectedProcessErrorElem.textContent = selectedProcessError();
  } else {
    variables.selectedProcessErrorElem.textContent = '';
  }
}
