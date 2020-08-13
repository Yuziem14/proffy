const scheduleItemsContainer = document.querySelector('#schedule-items');
const addTimeButton = document.querySelector('#add-time');

function addNewScheduleItem() {
  const scheduleItemClone = document
    .querySelector('.schedule-item')
    .cloneNode(true);

  const fields = scheduleItemClone.querySelectorAll('input:not(.option)');

  fields.forEach(field => {
    field.value = '';
  });

  scheduleItemsContainer.appendChild(scheduleItemClone);

  customSelect.mountNewSelectNode(scheduleItemClone);
}

addTimeButton.addEventListener('click', addNewScheduleItem);
