const decimalInput = document.getElementById('decimal_input')
const binaryOutput = document.querySelector('.binary .value')

decimalInput.addEventListener('input', () => {
  const decimal = parseInt(decimalInput.value);
  if (!decimal) return binaryOutput.innerText = '';
  binaryOutput.innerText = decimal.toString(2);
})
