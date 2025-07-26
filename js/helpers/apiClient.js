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
 * Отправляет данные формы на сервер.
 * @param {FormData} formData - Данные формы.
 * @returns {Promise<{success: boolean, data?: any, error?: string}>}
 */

export const submitForm = async (formData) => {
  console.log('[API] Отправка данных:', JSON.stringify(formData, null, 2));

  try {
    const response = await fetch(`${API_BASE_URL}/save-data`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ошибка сервера: ${response.status} ${errorText}`);
    }

    const responseData = await response.json();
    
    return { success: true, data: responseData };

  } catch (error) {
    // Безопасная обработка ошибки с типом 'unknown'
    let errorMessage = 'Неизвестная ошибка';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }

    console.error('[API] Ошибка:', errorMessage);
    return { success: false, error: errorMessage };
  }
};