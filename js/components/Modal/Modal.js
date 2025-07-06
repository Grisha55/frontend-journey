/**
 * @typedef {import('./types').Modal} Modal
 */

/**
 * @function Modal
 * @description Large UI component
 * @param {Modal} data 
 * @returns {string} HTML or empty
 */

export const Modal = (data) => {
  if (!data) return '';

  return /* html */`
    <div class="modal" id="modal">
      <div class="modal__body">
        <!-- Close -->
        <button class="modal__close" id="close">
          <img src="${data.image.source}" alt="${data.image.description}">
        </button>
        <!-- Title -->
        <h3 class="modal__title">${data.title}</h3>
        <!-- Form -->
        <form class="form" id="order">
          <!-- Name -->
          <label class="form__input">
            <span>Name</span>
            <input type="text" id="name">
          </label>
          <!-- Tel -->
          <label class="form__input">
            <span>Tel.</span>
            <input type="tel" id="tel">
          </label>
          <!-- E-mail -->
          <label class="form__input">
            <span>E-mail</span>
            <input type="email" id="email">
          </label>
          <!-- Connection -->
          <label class="form__select">
            <span>Connection</span>
            <select id="connection">
              <option value="telegram">Telegram</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </label>
          <!-- Privacy policy -->
          <label class="form__checkbox">
            <input type="checkbox" id="policy">
            <a href="https://example.com/policy" target="_blank">Privacy policy</a>
          </label>
          <!-- Submit -->
          <button class="form__submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  `;
};