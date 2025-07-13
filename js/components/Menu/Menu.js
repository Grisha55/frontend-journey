/**
 * @typedef {import('./types').Menu} Menu
 */

/**
 * @function Menu
 * @description Large UI component
 * @return {Promise<string>} HTML or empty
 */

export const Menu = async () => {

  const API_URL = 'http://localhost:3000/data/menu'

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    /** @type {Menu} */
    const data = await response.json()
    console.log(data);

    return /* html */`
       <div class="menu" id="menu">
        <div class="menu__wrapper"></div>
          <ul class="menu__list">
            <li class="menu__item">
              ${data.sections.sections.map ((item) => `<a href="${item}">${item}</a>`).join('')}
            </li>
            <div class="divider"></div>
          </ul>
      </div>
    `;
  } catch (error) {
    console.error(error);
    return '';
  }
}
