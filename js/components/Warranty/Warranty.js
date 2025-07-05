/**
 * @typedef {import('./types').Warranty} Warranty
 */

/**
 * @function Warranty
 * @description Large UI component
 * @param {Warranty} data 
 * @returns {string} HTML or empty
 */

export const Warranty = (data) => {

  if (!data) return '';

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
};