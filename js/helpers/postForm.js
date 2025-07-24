/**
 * @typedef {Object} UserData
 * @property {string} name
 * @property {string} tel
 * @property {string} email
 * @property {string} connection
 * @property {boolean} policy
 */

/**
 * @typedef {Object} FormSubmission
 * @property {UserData} userData
 */

document.addEventListener("DOMContentLoaded", () => {
  /** @type {HTMLFormElement | null} */
  const form = document.querySelector('form#order');
  
  if (!form) {
    console.error('Форма с ID "order" не найдена');
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    
    /** @type {FormSubmission} */
    const data = {
      userData: {
        name: formData.get('name')?.toString().trim() || '',
        tel: formData.get('tel')?.toString().trim() || '',
        email: formData.get('email')?.toString().trim() || '',
        connection: formData.get('connection')?.toString().trim() || '',
        policy: formData.get('policy') === 'on'
      }
    };

    console.log('Отправляемые данные:', data);

    try {
      const response = await fetch('http://127.0.0.1:3000/save-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
      }

      const result = await response.json();
      console.log('Результат:', result);
      alert('Данные успешно сохранены!');
      form.reset();
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке формы');
    }
  });
});