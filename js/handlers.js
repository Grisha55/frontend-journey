import { generateSunIcon } from './ui/generateSunIcon.js';
import { generateMoonIcon } from './ui/generateMoonIcon.js'

const $app = document.querySelector('#app');
const $themeButton = document.querySelector('#theme');

/**
 * @function handleThemeButtonClick
 * @description Обработчик для переключения темы
 * @param {Event} event 
 * @returns {void}
 */

export const handleThemeButtonClick = (event) => {
      const $themeButton = /** @type {HTMLElement} */ (event.currentTarget);
      const theme = $themeButton.dataset.theme
      if (theme === 'light') {
        $themeButton.dataset.theme = 'dark';
        $themeButton.innerHTML = generateSunIcon();
        $app?.classList.add('dark');
        $app?.classList.remove('light');
      }
      if (theme == 'dark') {
        $themeButton.dataset.theme = 'light';
        $themeButton.innerHTML = generateMoonIcon();
        $app?.classList.add('light');
        $app?.classList.remove('dark');
      }
    };