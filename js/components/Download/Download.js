import { Title } from '../../ui/Title/Title.js';
import { Image } from '../../ui/Image/Image.js';

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
            ${Title(data.title, "download__title")}
            ${data.texts
              .map((text) => `<p class="download__copy">${text}</p>`)
              .join("")}
            <div class="download__links"></div>
          </div>
          <div class="download__image-block">
            ${Image(data.image, "download__image")}
          </div>
        </div>
      </section>
    `;
  } catch (error) {
    console.error(error);
    return '';
  }
};
