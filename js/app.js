// Import the necessary variables and functions from the other files in the js folder
import * as variables from './variables.js';
import { caesarCipher } from './caesar_cipher.js';
import { userTextInputError, keyInputError, selectedProcessError } from './validations.js';
import { errorsConditions } from './errors_conditions.js';
import { displayResult } from './result.js';


document.addEventListener('DOMContentLoaded', () => {

  variables.caesarCipherForm.onsubmit = (e) => {
    e.preventDefault();

    // Check if there are any errors
    if (userTextInputError() || keyInputError() || selectedProcessError()) {
      // If there are errors, display the errors, otherwise, remove the errors
      errorsConditions();
    }
    else {
      // If there are no errors, remove all error messages
      variables.userTextInputErrorElem.textContent = '';
      variables.keyInputErrorElem.textContent = '';
      variables.selectedProcessErrorElem.textContent = '';

      // Get the selected process
      let selectedProcess = '';

      // If the encrypt process is checked, set the selected process to the encrypt process value, otherwise, set the selected process to the decrypt process value
      if (variables.encryptProcess.checked) {
        selectedProcess = variables.encryptProcess.value;
      } else if (variables.decryptProcess.checked) {
        selectedProcess = variables.decryptProcess.value;
      }

      // Get the cipher string
      let cipherString = caesarCipher(variables.userText.value, Number(variables.keyInput.value), Number(selectedProcess));

      // Display the result
      displayResult(selectedProcess, cipherString);
    }
  };
});
