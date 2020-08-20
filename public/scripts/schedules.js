const scheduleItemsContainer = document.querySelector('#schedule-items');
const addTimeButton = document.querySelector('#add-time');
const removeButtons = document.querySelectorAll('.delete-button');

const scheduleItemBase = scheduleItemsContainer.querySelector('.schedule-item');

function _getLastScheduleItem() {
  const scheduleItems = scheduleItemsContainer.querySelectorAll(
    '.schedule-item'
  );

  if (scheduleItems.length === 0) return null;

  return scheduleItems[scheduleItems.length - 1];
}

function validateSchedule(scheduleItem) {
  const weekday = scheduleItem.querySelector('input[type=checkbox]:checked');
  const time_from = scheduleItem.querySelector('#time_from').value;
  const time_to = scheduleItem.querySelector('#time_to').value;

  if (!weekday || !time_from || !time_to) {
    return false;
  }

  return true;
}

function handleErrorMessage(message) {
  const messageElement = scheduleItemsContainer.querySelector('small');
  if (messageElement) {
    scheduleItemsContainer.removeChild(messageElement);
  }

  if (!message) return;

  const newMessageElement = document.createElement('small');
  newMessageElement.innerText = message;
  scheduleItemsContainer.appendChild(newMessageElement);
}

function addNewScheduleItem() {
  const lastScheduleItem = _getLastScheduleItem();

  if (lastScheduleItem) {
    const isValid = validateSchedule(lastScheduleItem);
    const errorMessage = isValid
      ? ''
      : 'Preencha todos os campos antes de adicionar um novo horário.';

    handleErrorMessage(errorMessage);
    if (!isValid) return;
  }

  const scheduleItemClone = scheduleItemBase.cloneNode(true);

  const fields = scheduleItemClone.querySelectorAll('input:not(.option)');

  fields.forEach(field => {
    field.value = '';
  });

  scheduleItemsContainer.appendChild(scheduleItemClone);
  customSelect.mountNewSelectNode(scheduleItemClone);

  const deleteButton = scheduleItemClone.querySelector('.delete-button');
  deleteButton.addEventListener('click', removeSchedule);
}

function removeSchedule(e) {
  handleErrorMessage('');
  const button = e.target;
  const scheduleItem = button.closest('.schedule-item');
  scheduleItemsContainer.removeChild(scheduleItem);
}

addTimeButton.addEventListener('click', addNewScheduleItem);

removeButtons.forEach(button => {
  button.addEventListener('click', removeSchedule);
});
