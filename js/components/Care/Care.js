/**
 * @typedef {import('./types').Care} Care
 */

/**
 * @function Care
 * @description Large UI component
 * @returns {Promise<string>} HTML or empty
 */

export const Care = async () => {

  const API_URL = 'http://localhost:3000/data/care';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    /** @type {Care} */
    const data = await response.json();
    console.log(data);

    return /* html */`
      <section class="care" id="care">
        <div class="care__wrapper">
          <div class="care__text-block">
            <h2 class="care__title">${data.title.value}</h2>
            ${data.texts.map ((text) => `<p class="care__copy">${text}</p>`).join('')}
          </div>
          <div class="care__image-block">
            <img 
              src="${data.image.source}"
              alt="${data.image.description}">
          </div>
        </div>
      </section>
    `;
  } catch (error) {
    console.error(error);
    return '';
  }
};
