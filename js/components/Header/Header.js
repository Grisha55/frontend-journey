import { Theme } from '../../Theme/Theme.js';

/**
 * @typedef {import('./types.ts').Header} HeaderData;
 */

/**
 * @function Header
 * @description Large UI component
 * @returns {Promise<string>} HTML or empty
 */

export const Header = async () => {
  const API_URL = 'http://localhost:3000/data/meta';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    return /* html */`
      <header class="header" id="header">
        <div class="header__wrapper">
          <button class="header__logo" type="${data.logo.type}" id="${data.logo.id}">
            <img 
              src="${data.logo.img.src}"
              alt="${data.logo.img.alt}"
            />
          </button>
          <nav class="header__nav">
            <ul class="menu" id="${data.nav.menu.id}">
            <li class="menu__item">
              ${data.nav.menu.items.map (
                (/** @type {import('./types').MenuItem} */ link) => `<a href="${link.href}">${link.text}</a>`).join('')}
            </li>
           </ul>
          </nav>
          
          <div class="header__actions">
            <label class="header__lang">
              <img src="${data.actions.lang.arrow.src}" alt="${data.actions.lang.arrow.alt}">
              <select id="lang">
                ${data.actions.lang.select.options.map ((/** @type {import('./types').LangOption} */ lang) => `<option value="${lang.value}">${lang.text}</option>`).join('')}
              </select>
            </label>
             ${Theme("header__theme")}
            <button class="burger" type="${data.actions.burger.type}" id="${data.actions.burger.id}">
              <span></span>
            </button>
          </div>
        </div>
      </header>
    `;
  } catch (error) {
    console.error(error);
    return '';
  }
};