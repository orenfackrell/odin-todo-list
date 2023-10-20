import popupMenu from './popupMenu';

const { body } = document;

export function toggleTheme() {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');

  body.style.removeProperty('background-color');
  body.style.removeProperty('color');
  const allElements = document.querySelectorAll('*');
  allElements.forEach((element) => {
    element.style.removeProperty('border-color');
  });
}

export function changeColours() {
  const menuTitle = 'Change Colours';
  const fields = [
    { label: 'Background Colour:', name: 'background-colour', type: 'color' },
    { label: 'Text Colour:', name: 'text-colour', type: 'color' },
    { label: 'Accent Colour:', name: 'accent-colour', type: 'color' },
  ];

  const popup = popupMenu(menuTitle, fields);
  body.appendChild(popup);
  popup.style.display = 'block';

  const cancelButton = document.querySelector('.cancel-button');
  cancelButton.addEventListener('click', () => {
    const buttonWrapper = document.querySelector('.button-wrapper');
    const submitButton = document.querySelector('.submit-button');

    const confirmationMessage = document.createElement('div');
    confirmationMessage.className = 'confirmation-message';

    const spanElement = document.createElement('span');
    spanElement.textContent = 'Are you sure?';

    const buttonWrapperDiv = document.createElement('div');
    buttonWrapperDiv.className = 'button-wrapper';

    const confirmButton = document.createElement('button');
    confirmButton.className = 'confirm-button';
    confirmButton.textContent = 'Confirm';

    const cancelConfirmButton = document.createElement('button');
    cancelConfirmButton.className = 'cancel-confirm-button';
    cancelConfirmButton.textContent = 'Cancel';

    confirmationMessage.appendChild(spanElement);

    buttonWrapperDiv.appendChild(confirmButton);
    buttonWrapperDiv.appendChild(cancelConfirmButton);

    confirmationMessage.appendChild(buttonWrapperDiv);
    while (buttonWrapper.firstChild) {
      buttonWrapper.removeChild(buttonWrapper.firstChild);
    }
    buttonWrapper.appendChild(confirmationMessage);
    confirmButton.addEventListener('click', () => {
      body.removeChild(popup);
    });
    cancelConfirmButton.addEventListener('click', () => {
      while (buttonWrapper.firstChild) {
        buttonWrapper.removeChild(buttonWrapper.firstChild);
      }
      buttonWrapper.appendChild(cancelButton);
      buttonWrapper.appendChild(submitButton);
    });
  });

  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const backgroundColor = document.querySelector('#background-colour').value;
    const textColor = document.querySelector('#text-colour').value;
    const accentColor = document.querySelector('#accent-colour').value;

    // Save the colours to localStorage
    localStorage.setItem('background-colour', backgroundColor);
    localStorage.setItem('text-colour', textColor);
    localStorage.setItem('accent-colour', accentColor);

    // Apply the colours
    body.style.backgroundColor = backgroundColor;
    body.style.color = textColor;
    const allElements = document.querySelectorAll('*');
    allElements.forEach((element) => {
      // Check if the element is not part of the calendar
      if (!element.classList.contains('container')) {
        element.style.borderColor = accentColor;
      }
    });

    // Close the popup
    body.removeChild(popup);
  });
}

export function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  } else if (savedTheme === 'light') {
    body.classList.remove('dark-mode');
  }
}
