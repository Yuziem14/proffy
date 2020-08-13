const customSelect = {
  mountNewSelectNode,
  mountNewSelectItem,
  selects: document.querySelectorAll('.select') || [],
};
let params = {};

function _uncheckAllOptions(select) {
  const options = select.querySelectorAll('.dropdown .option');
  options.forEach(option => (option.checked = false));
}

function _setDefaultOption(option, defaultValue) {
  const paramValue = params[option.name];
  const currentValue = paramValue ? paramValue : defaultValue;

  if (option.value === currentValue) {
    handleSelectOption(option);
    option.checked = true;
  }
}

function mountNewSelectNode(node) {
  const newSelects = node.querySelectorAll('.select') || [];
  newSelects.forEach(newSelect => {
    mountNewSelectItem(newSelect);
  });
}

function mountNewSelectItem(select) {
  const selects = customSelect.selects;
  const lastKey = selects.length;
  const key = lastKey + 1;
  const mountedSelect = mountSelect(select, key);
  customSelect.selects = [...selects, mountedSelect];
}

function parseQueryParamsToObject() {
  const queryString = decodeURIComponent(window.location.search).replace(
    '?',
    ''
  );

  if (!queryString) return {};

  const queryParams = queryString.split('&');

  const params = queryParams.reduce((params, param) => {
    const [key, value] = param.split('=');
    return {
      ...params,
      [key]: value ? value : '',
    };
  }, {});

  return params;
}

function mountSelect(select, key) {
  select.dataset.id = key;
  select.id = `select-${key}`;

  const button = select.querySelector(`.dropdown-button`);
  button.dataset.id = key;

  const buttonPlaceholder = select.querySelector(
    `.dropdown-button .select-placeholder`
  );
  buttonPlaceholder.innerText = buttonPlaceholder.dataset.placeholder;

  button.addEventListener('click', e => {
    e.preventDefault();
    toggleSelectDropdown(e.target);
  });

  const dropdown = select.querySelector(`.dropdown`);
  dropdown.dataset.id = key;

  const options = select.querySelectorAll(`.dropdown .option`);

  options.forEach(option => {
    const optionLabel = select.querySelector(`label[for=${option.id}]`);
    option.dataset.id = key;
    option.id = option.id + '-' + key;
    optionLabel.htmlFor = option.id;
    option.addEventListener('click', e => {
      handleSelectOption(e.target);
      toggleSelectDropdown(e.target);
    });
    _setDefaultOption(option, dropdown.dataset.defaultTo);
  });

  return select;
}

function initialize() {
  const selects = customSelect.selects;
  params = parseQueryParamsToObject(window.location.href);

  selects.forEach((select, key) => {
    mountSelect(select, key);
  });
}

function isPlaceholder(element) {
  const placeholder = element.dataset.placeholder;
  const value = element.innerText;

  return placeholder === value;
}

function toggleSelectDropdown(clickedElement) {
  const key = clickedElement.dataset.id;
  const selectBox = document.querySelector(`#select-${key}`);
  const dropDownButton = selectBox.querySelector(`.dropdown-button`);
  const dropDownBox = selectBox.querySelector(`.dropdown`);
  const dropDownIcon = dropDownButton.querySelector('.select-icon');

  dropDownBox.classList.toggle('hidden');
  dropDownBox.style.top = dropDownBox.offsetHeight + 'px';

  selectBox.classList.remove('active-select');
  dropDownButton.classList.remove('active-dropdown-button');
  dropDownIcon.classList.remove('invert-arrow');

  if (!dropDownBox.classList.contains('hidden')) {
    selectBox.classList.add('active-select');
    dropDownButton.classList.add('active-dropdown-button');
    dropDownIcon.classList.add('invert-arrow');
  }
}

function handleSelectOption(option) {
  const key = option.dataset.id;
  const selectBox = document.querySelector(`#select-${key}`);
  _uncheckAllOptions(selectBox);

  option.checked = true;
  const optionLabelText = selectBox.querySelector(
    `.dropdown .option-box label[for=${option.id}]`
  ).innerText;

  const dropDownPlaceholder = selectBox.querySelector(
    `.dropdown-button .select-placeholder`
  );

  dropDownPlaceholder.innerText = optionLabelText;

  dropDownPlaceholder.classList.remove('text-placeholder');

  if (isPlaceholder(dropDownPlaceholder)) {
    dropDownPlaceholder.classList.add('text-placeholder');
  } else {
    dropDownPlaceholder.classList.remove('text-placeholder');
  }
}

window.addEventListener('load', initialize);
