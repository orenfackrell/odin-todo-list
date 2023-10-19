function popupMenu(menuTitle, fields) {
  const popup = document.createElement('div');
  popup.className = 'popup';

  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';

  const header = document.createElement('h3');
  header.textContent = `${menuTitle}`;

  const addButton = document.createElement('button');
  addButton.className = 'submit-button';
  addButton.type = 'submit';
  addButton.textContent = 'Add';

  const cancelButton = document.createElement('button');
  cancelButton.className = 'cancel-button';
  cancelButton.type = 'button';
  cancelButton.textContent = 'Cancel';

  const form = document.createElement('form');

  fields.forEach((field) => {
    const inputLabelPair = document.createElement('div');
    inputLabelPair.className = 'input-label-pair';

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', `${field.name}`);

    let input;

    switch (field.name) {
      case 'description':
        input = document.createElement('textarea');
        input.rows = '2';
        input.cols = '35';
        input.id = field.name;
        input.required = true;
        break;
      case 'notes':
        input = document.createElement('textarea');
        input.rows = '3';
        input.cols = '35';
        input.id = field.name;
        input.required = false;
        break;
      default:
        input = document.createElement('input');
        input.type = `${field.type}`;
        input.id = field.name;
        input.required = true;
    }

    inputLabelPair.appendChild(label);
    inputLabelPair.appendChild(input);

    form.appendChild(inputLabelPair);
  });

  const buttonWrapper = document.createElement('div');
  buttonWrapper.className = 'button-wrapper';
  buttonWrapper.appendChild(cancelButton);
  buttonWrapper.appendChild(addButton);
  form.appendChild(buttonWrapper);

  popupContent.appendChild(header);
  popupContent.appendChild(form);
  popup.appendChild(popupContent);

  return popup;
}

export default popupMenu;
