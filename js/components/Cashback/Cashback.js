/**
 * @typedef {import('./types').Cashback} Cashback
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
    <section class="cashback" id="cashback">
      <div class="cashback__wrapper">
        <div class="cashback__text-block">
          <h2 class="cashback__title">${data.title.value}</h2>
          ${data.texts.map ((text) => `<p class="cashback__copy">${text}</p>`).join('')}
          <button class="cashback__button" type="${data.button.type}" id="order-open">${data.button.text}</button>
        </div>
      </div>
    </section>
  `;
};