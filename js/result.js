import * as variables from './variables.js';

export function displayResult(selectedProcess, cipherString) {
  // Display the result
  variables.result.classList.remove('d-none');

// Display the summary
  variables.summary.innerHTML = `
      <td>${variables.userText.value}</td>
      <td>${variables.keyInput.value}</td>
      <td>${Number(selectedProcess) === 1 ? 'Encrypt' : 'Decrypt'}</td>
      `;

// Display the process result header
  variables.processResultHeader.textContent = `Result of ${Number(selectedProcess) === 1 ? 'Encryption' : 'Decryption'}`;

// Display the process result
  variables.processResult.textContent = cipherString;
}