/**
 * @typedef {import('./types').Menu} Menu
 */

/**
 * @function Menu
 * @description Large UI component
 * @param {Menu} data
 * @return {string} HTML or empty
 */

export const Menu = (data) => {
  if (!data) return '';

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
}