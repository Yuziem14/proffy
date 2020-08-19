const phoneInputs = document.querySelectorAll('.input-mask');

phoneInputs.forEach(input => {
  input.addEventListener('input', e => {
    const currentValue = e.target.value;
    const { newValue, maskedValue } = transformValue(currentValue);

    if (e.inputType === 'deleteContentBackward') {
      e.target.dataset.value = newValue;
      return;
    }

    e.target.dataset.value = newValue;
    e.target.value = maskedValue;
  });

  input.form.addEventListener('submit', handleSubmit);
});

function handleSubmit(e) {
  phoneInputs.forEach(input => {
    input.value = input.dataset.value;
  });
}

function transformValue(currentValue) {
  const mask = '(**) *****-****'.split('');
  let newValue = currentValue.replace(/[^0-9]/g, '');
  let maskedValue = '';

  const positions = mask.reduce((arr, value, index) => {
    if (value !== '*') return arr;
    return [...arr, index];
  }, []);

  if (newValue.length > 11) {
    newValue = newValue.substring(0, 11);
  }

  newValue.split('').forEach((value, index) => {
    mask[positions[index]] = value;

    maskedValue = mask.join('').replace(/\*/g, '');

    if (newValue.length < 8) {
      maskedValue = maskedValue.replace(/-/g, '');
    }
  });

  return {
    newValue,
    maskedValue,
  };
}
