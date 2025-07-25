const API_BASE_URL = 'http://localhost:3000';

/**
 * @typedef {Object} FormData
 * @property {string} name
 * @property {string} tel
 * @property {string} [email]
 * @property {string} [connection]
 * @property {boolean} policy
 */

/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success
 * @property {string} [error]
 */

/**
 * @function submitFormData
 * @description Отправляет данные формы на сервер
 * @param {FormData} formData - Данные формы
 * @returns {Promise<ApiResponse>}
 */

export const submitFormData = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/save-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return /** @type {ApiResponse} */ (await response.json());
  } catch (error) {
    console.error('API Error:', error);
    
    let errorMessage = 'Unknown error';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }

    return {
      success: false,
      error: errorMessage
    };
  }
};