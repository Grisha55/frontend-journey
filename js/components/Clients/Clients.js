/**
 * @typedef {import('../Cashback/types').Cashback} Cashback
 */

/**
 * @function Cashback
 * @description Large UI component
 * @param {Cashback} data 
 * @returns {string} HTML or empty
 */

export const Cashback = (data) => {
  if (!data) return '';

  return /* html */`
    <section class="clients" id="clients">
      <div class="clients__wrapper">
        <ul class="clients__brands">
          <li class="clients__brand">
            ${data.clients.images.map ((image) => `<img src="${image.source}" alt="${image.description}">`)}
          </li>
        </ul>
      </div>
    </section>
  `;
};