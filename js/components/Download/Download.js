/**
 * @typedef {import('./types').Download} Download
 */

/**
 * @function Download
 * @description Large UI component
 * @returns {Promise<string>} HTML or empty
 */

export const Download = async () => {
  
  const API_URL = 'http://localhost:3000/data/download';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    /** @type {Download} */
    const data = await response.json();
    console.log(data);

    return /* html */ `
      <section class="download">
        <div class="download__wrapper">
          <div class="download__text-block">
            <h1 class="download__title">${data.title.value}</h1>
            ${data.texts
              .map((text) => `<p class="download__copy">${text}</p>`)
              .join("")}
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
  } catch (error) {
    console.error(error);
    return '';
  }
};
