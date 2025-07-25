/**
 * @typedef {Object} UserData
 * @property {string} name - Имя пользователя
 * @property {string} tel - Номер телефона
 * @property {string} email - Электронная почта
 * @property {string} connection - Способ связи
 * @property {boolean} policy - Согласие с политикой
 */

console.log('Модуль обработки формы загружен');

// Конфигурация API
const API_ENDPOINT = 'http://127.0.0.1:3000/save-data';

/**
 * Получает значение из элемента формы
 * @param {HTMLFormControlsCollection} elements - Коллекция элементов формы
 * @param {string} name - Имя поля
 * @returns {string|boolean} - Значение поля
 */
function getFormValue(elements, name) {
  const element = elements.namedItem(name);
  
  if (!element) return '';
  
  // Проверка для чекбокса/радио-кнопки
  if (element instanceof HTMLInputElement && (element.type === 'checkbox' || element.type === 'radio')) {
    return element.checked;
  }
  
  // Проверка для select, textarea, input
  if (element instanceof HTMLInputElement || 
      element instanceof HTMLSelectElement || 
      element instanceof HTMLTextAreaElement) {
    return element.value.trim();
  }
  
  return '';
}

/**
 * Валидирует данные формы
 * @param {UserData} data - Данные для проверки
 * @returns {boolean} - Результат валидации
 */
function validateData(data) {
  if (!data.name) {
    alert('Поле "Имя" обязательно для заполнения');
    return false;
  }

  if (!data.tel) {
    alert('Поле "Телефон" обязательно для заполнения');
    return false;
  }

  if (!data.policy) {
    alert('Необходимо согласие с политикой');
    return false;
  }

  return true;
}

/**
 * Отправляет данные на сервер
 * @param {UserData} data - Данные для отправки
 * @returns {Promise<any>}
 */
async function sendFormData(data) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userData: data,
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error(`Ошибка сервера: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Ошибка отправки:', error);
    throw error;
  }
}

/**
 * Обрабатывает отправку формы
 * @param {HTMLFormElement} form - Форма
 * @returns {Promise<void>}
 */
async function handleFormSubmit(form) {
  /** @type {UserData} */
  const formData = {
    name: String(getFormValue(form.elements, 'name')),
    tel: String(getFormValue(form.elements, 'tel')),
    email: String(getFormValue(form.elements, 'email')),
    connection: String(getFormValue(form.elements, 'connection')),
    policy: Boolean(getFormValue(form.elements, 'policy'))
  };

  console.log('Собранные данные:', formData);

  if (!validateData(formData)) {
    return;
  }

  try {
    const result = await sendFormData(formData);
    console.log('Ответ сервера:', result);
    alert('Данные успешно сохранены!');
    form.reset();
  } catch (error) {
    alert('Ошибка при отправке формы. Пожалуйста, попробуйте ещё раз.');
  }
}

/**
 * Инициализирует обработчик формы
 * @returns {void}
 */
export function initForm() {
  const form = document.getElementById('order');
  
  if (!(form instanceof HTMLFormElement)) {
    console.error('Форма не найдена или неверный тип элемента');
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.target instanceof HTMLFormElement) {
      handleFormSubmit(event.target);
    }
  });

  console.log('Обработчик формы успешно инициализирован');
}

// Автоматическая инициализация
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initForm);
} else {
  initForm();
}