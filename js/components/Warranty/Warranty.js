/**
 * @typedef {import('./types').Warranty} Warranty
 */

/**
 * @function Warranty
 * @description Large UI component
 * @returns {Promise<string>} HTML or empty
 */

export const Warranty = async () => {

  const API_URL = 'http://localhost:3000/data/warranty';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    /** @type {Warranty} */
    const data = await response.json();
    console.log(data);

    return /* html */`
      <section class="warranty" id="warranty">
        <div class="warranty__wrapper">
          <div class="warranty__text-block">
            <h2 class="warranty__title">${data.title.value}</h2>
            ${data.texts.map ((text) => `<p class="warranty__copy">${text}</p>`).join('')}
          </div>
          <div class="warranty__image-block">
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