/**
 * @typedef {import('./types').Download} Download
 */

/**
 * @function Download
 * @description Large UI component
 * @param {Download} data 
 * @returns {string} HTML or empty
 */

export const Download = (data) => {

  if (!data) return '';

  return /* html */`
    <section class="download">
      <div class="download__wrapper">
        <div class="download__text-block">
          <h1 class="download__title">${data.title.value}</h1>
          ${data.texts.map ((text) => `<p class="download__copy">${text}</p>`).join('')}
          <div class="download__links"></div>
        </div>
        <div class="download__image-block">
          <img 
            src="${data.image.source}"
            alt="${data.image.description}">
        </div>
      </div>
    </section>
  `;
};