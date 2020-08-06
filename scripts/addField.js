const scheduleItemsContainer = document.querySelector('#schedule-items');
const addTimeButton = document.querySelector('#add-time');

function addNewScheduleItem() {
  const scheduleItemClone = document
    .querySelector('.schedule-item')
    .cloneNode(true);

  const fields = scheduleItemClone.querySelectorAll('input');

  fields.forEach(field => {
    field.value = '';
  });

  scheduleItemsContainer.appendChild(scheduleItemClone);
}

addTimeButton.addEventListener('click', addNewScheduleItem);
