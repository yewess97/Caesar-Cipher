const caesarCipherForm = document.querySelector('#caesar_cipher_form'),
  userText = document.querySelector('#user_text'),
  keyInput = document.querySelector('#key'),
  encryptProcess = document.querySelector('#encrypt'),
  decryptProcess = document.querySelector('#decrypt');

const userTextInputErrorElem = document.querySelector('#user_text_error'),
  keyInputErrorElem = document.querySelector('#key_error'),
  selectedProcessErrorElem = document.querySelector('#process_error');

const result = document.querySelector('.result'),
  summary = document.querySelector('#summary'),
  processResultHeader = document.querySelector('#process_result_header'),
  processResult = document.querySelector('#process_result');



// Exporting the variables
export { caesarCipherForm, userText, keyInput, encryptProcess, decryptProcess, userTextInputErrorElem, keyInputErrorElem, selectedProcessErrorElem, result, summary, processResultHeader, processResult};