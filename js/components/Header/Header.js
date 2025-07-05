/**
 * @typedef {import('./types').Header} Header
 */

/**
 * @function Header
 * @description Large UI component
 * @param {Header} data 
 * @returns {string} HTML or empty
 */

export const Header = (data) => {
  if (!data) return '';

  return /* html */`
    <header class="header" id="header">
      <div class="header__wrapper">
        <button class="header__logo" type="${data.logo.type}" id="${data.logo.id}">
          <img src="${data.logo.img.src}" alt="${data.logo.img.alt}">
        </button>
        <nav class="header__nav">
          <ul class="menu" id="${data.nav.menu.id}">
          <li class="menu__item">
            ${data.nav.menu.items.map ((link) => `<a href="${link.href}">${link.text}</a>`).join('')}
          </li>
         </ul>
        </nav>
        
        <div class="header__actions">
          <label class="header__lang">
            <img src="${data.actions.lang.arrow.src}" alt="${data.actions.lang.arrow.alt}">
            <select id="lang">
              ${data.actions.lang.select.options.map ((lang) => `<option value="${lang.value}">${lang.text}</option>`).join('')}
            </select>
          </label>
           <button class="header__theme" type="${data.actions.theme.type}" id="${data.actions.theme.id}">
            <img src="${data.actions.theme.img.src}" alt="${data.actions.theme.img.alt}">
           </button>
          <button class="burger" type="${data.actions.burger.type}" id="${data.actions.burger.id}">
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `;
};