// @ts-check
/**
 * @typedef {Object} FormData
 * @property {string} name
 * @property {string} tel
 * @property {string} [email]
 * @property {string} [connection]
 * @property {boolean} policy
 */

import { Download } from './components/Download/Download.js';
import { Warranty } from './components/Warranty/Warranty.js';
import { Care } from './components/Care/Care.js';
import { Cashback } from './components/Cashback/Cashback.js';
import { Clients } from './components/Clients/Clients.js';
import { Header } from './components/Header/Header.js';
import { Footer } from './components/Footer/Footer.js';
import { Modal } from './components/Modal/Modal.js';
import { Menu } from './components/Menu/Menu.js';
import { handleThemeButtonClick } from './handlers.js';
import { submitForm } from './helpers/apiClient.js';

// DOM элементы
const $root = document.getElementById("root");
const $themeButton = document.querySelector('#theme');
const $policyCheckbox = document.getElementById("policy-checkbox");
const $policyIcon = document.getElementById("policy-icon");

/**
 * @function initApp
 * @description Инициализация приложения
 * @returns {Promise<void>}
 */

const initApp = async () => {
  if (!$root) {
    console.error("Root element not found");
    return;
  }

  try {
    // Рендер компонентов
    const components = [
      Download(),
      Warranty(),
      Care(),
      Cashback(),
      Header(),
      Footer(),
      Modal(),
      Menu(),
      Clients(),
    ];

    // Последовательный рендер
    for (const component of components) {
      if (component) {
        $root.insertAdjacentHTML("beforeend", await component);
      }
    }

    setupEventListeners();
  } catch (error) {
    console.error("Initialization error:", error);
  }
}

/**
 * @function setupEventListeners
 * @description Настройка обработчиков событий
 * @returns {void}
 */

const setupEventListeners = () => {
  // Обработка темы
  if ($themeButton) {
    $themeButton.addEventListener('click', handleThemeButtonClick);
  }

  // Обработка чекбокса политики
  if ($policyCheckbox && $policyIcon) {
    $policyCheckbox.addEventListener('change', function(event) {
      const target = /** @type {HTMLInputElement} */ (event.target);
      const icon = /** @type {HTMLImageElement} */ ($policyIcon);
      icon.src = target.checked 
        ? "/assets/icons/check.svg" 
        : "/assets/icons/unchecked.svg";
    });
  }

  // Обработка формы
  setupFormHandler();
}

/**
 * @function setupFormHandler
 * @description Обработчик формы заказа
 * @returns {void}
 */

const setupFormHandler = () => {
  const $form = /** @type {HTMLFormElement|null} */ (document.getElementById("order"));
  
  if (!$form) return;

  $form.addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const elements = /** @type {HTMLFormControlsCollection} */ ($form.elements);
    
    /**
     * @function getValue
     * @description Получение значения поля формы
     * @param {string} name
     * @returns {string}
     */

    const getValue = (name) => {
      const element = /** @type {HTMLInputElement|null} */ (elements.namedItem(name));
      return element ? element.value.trim() : '';
    };

    /**
     * @function getChecked
     * @description Получение состояния чекбокса
     * @param {string} name
     * @returns {boolean}
     */

    const getChecked = (name) => {
      const element = /** @type {HTMLInputElement|null} */ (elements.namedItem(name));
      return element ? element.checked : false;
    };

    // 1. Сбор данных формы
    /** @type {FormData} */
    const formData = {
      name: getValue('name'),
      tel: getValue('tel'),
      email: getValue('email'),
      connection: getValue('connection') || 'phone',
      policy: getChecked('policy')
    };

    // 2. Валидация
    if (!validateForm(formData)) return;

    // 3. Визуальная индикация загрузки
    const submitButton = /** @type {HTMLInputElement|null} */ (elements.namedItem('submit'));
    if (submitButton) {
      const originalButtonText = submitButton.value;
      submitButton.value = 'Отправка...';
      submitButton.disabled = true;

      try {
        // 4. Отправка данных
        const result = await submitForm(formData);

        // 5. Обработка результата
        if (result.success) {
          showSuccessMessage();
          $form.reset();
        } else {
          showErrorMessage(result.error || 'Неизвестная ошибка');
        }
      } catch (error) {
        console.error('Ошибка при отправке формы:', error);
        showErrorMessage('Ошибка сети. Попробуйте ещё раз.');
      } finally {
        // 6. Восстановление кнопки
        if (submitButton) {
          submitButton.value = originalButtonText;
          submitButton.disabled = false;
        }
      }
    }
  });
}

/**
 * @function validateForm
 * @description Валидация формы
 * @param {FormData} formData 
 * @returns {boolean}
 */

const validateForm = (formData) => {
  if (!formData.name) {
    showValidationError('Поле "Имя" обязательно для заполнения', 'name');
    return false;
  }

  if (!formData.tel) {
    showValidationError('Поле "Телефон" обязательно для заполнения', 'tel');
    return false;
  }

  if (!formData.policy) {
    showValidationError('Необходимо согласие с политикой конфиденциальности', 'policy');
    return false;
  }

  return true;
}

/**
 * @function showValidationError
 * @description Показать сообщение об ошибке валидации
 * @param {string} message 
 * @param {string} fieldName 
 * @returns {void}
 */

const showValidationError = (message, fieldName) => {
  alert(message);
  const field = document.getElementsByName(fieldName)[0];
  if (field) field.focus();
}

/**
 * @function showSuccessMessage
 * @description Показать сообщение об успехе
 * @returns {void}
 */

const showSuccessMessage = () => {
  alert('Данные успешно отправлены!');
}

/**
 * @function showErrorMessage
 * @description Показать сообщение об ошибке
 * @param {string} error 
 * @returns {void}
 */

const showErrorMessage = (error) => {
  console.error('Form submission error:', error);
  alert(`Ошибка: ${error}`);
}

// Запуск приложения
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initApp().catch((error) => {
      console.error("Application initialization failed:", error);
    });
  });
} else {
  initApp().catch((error) => {
    console.error("Application initialization failed:", error);
  });
}