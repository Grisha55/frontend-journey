const API_BASE_URL = 'http://localhost:3000';

/**
 * @function submitForm
 * @description Отправка данных формы на сервер
 * @param {Object} formData - Данные формы
 * @returns {Promise<{success: boolean, error?: string}>}
 */

export const submitForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/save-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userData: formData,
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    
    // Безопасное извлечение сообщения об ошибке
    const errorMessage = error instanceof Error 
      ? error.message 
      : typeof error === 'string' 
        ? error 
        : 'Unknown error';
    
    return {
      success: false,
      error: errorMessage
    };
  }
};