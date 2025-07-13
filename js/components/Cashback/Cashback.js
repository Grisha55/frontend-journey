/**
 * @typedef {import('./types').Cashback} Cashback
 */

/**
 * @function Cashback
 * @description Large UI component
 * @returns {Promise<string>} HTML or empty
 */

export const Cashback = async () => {

  const API_URL = 'http://localhost:3000/data/cashback';
  
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    /** @type {Cashback} */
    const data = await response.json();
    console.log(data);

    return /* html */`
      <section class="cashback" id="cashback">
        <div class="cashback__wrapper">
          <div class="cashback__text-block">
            <h2 class="cashback__title">${data.title.value}</h2>
            ${data.texts.map ((text) => `<p class="cashback__copy">${text}</p>`).join ('')}
            <button class="cashback__button" type="${data.button.type}" id="order-open">${data.button.text}</button>
          </div>
        </div>
      </section>
    `;
  } catch (error) {
    console.error(error);
    return '';
  }
};
