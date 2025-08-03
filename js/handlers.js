import { generateSunIcon } from "./ui/generateSunIcon.js";
import { generateMoonIcon } from "./ui/generateMoonIcon.js";

/**
 * @function onThemeClick
 * @description In anonymous handler
 * @param {Event} event
 * @returns {void}
*/

export const onThemeClick = (event) => {
  const $app = document.getElementById('app');
  const $themeButton = /** @type {HTMLElement | null} */ (event.currentTarget);
  if (!$app || !$themeButton) return ;

  const currentTheme = $themeButton.dataset.theme;

  if (currentTheme === 'light') {
    $themeButton.dataset.theme = 'dark';
    $themeButton.innerHTML = generateSunIcon();
    $app.classList.remove('light');
    $app.classList.add('dark');
  };
  if (currentTheme === 'dark') {
    $themeButton.dataset.theme = 'light';
    $themeButton.innerHTML = generateMoonIcon();
    $app.classList.remove('dark');
    $app.classList.add('light');
  };
};
